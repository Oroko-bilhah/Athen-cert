import { useState, useEffect, useMemo } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useLearning } from "../context/LearningContext";
import { awsLessons } from "../data/awsLessons";
import { awsSaaLessons } from "../data/awsSaaLessons";
import { azureLessons } from "../data/azureLessons";
import { googleLessons } from "../data/googleLessons";
import { ciscoLessons } from "../data/ciscoLessons";
import { comptiaLessons } from "../data/comptiaLessons";
import { kubernetesLessons } from "../data/kubernetesLessons";
import Breadcrumbs from "../components/Breadcrumbs";
import CertPathNavigator from "../components/CertPathNavigator";
import SEO from "../components/SEO";
import { getBreadcrumbSchema, getLessonArticleSchema, getQuizSchema } from "../utils/structuredData";
import "./AwsLesson.css";

const CATALOG = {
  aws: {
    name: "AWS Certified Cloud Practitioner",
    shortCode: "CLF-C02",
    icon: "",
    accentColor: "#F26B5B",
    route: "/certifications/aws/cloud-practitioner",
    lessons: awsLessons
  },
  "aws-saa": {
    name: "AWS Solutions Architect – Associate",
    shortCode: "SAA-C03",
    icon: "",
    accentColor: "#F26B5B",
    route: "/certifications/aws/solutions-architect",
    lessons: awsSaaLessons
  },
  azure: {
    name: "Azure Fundamentals",
    shortCode: "AZ-900",
    icon: "",
    accentColor: "#F26B5B",
    route: "/certifications/azure/az-900",
    lessons: azureLessons
  },
  google: {
    name: "Google Cloud Fundamentals",
    shortCode: "GCP",
    icon: "",
    accentColor: "#292A2D",
    route: "/certifications/google/cloud-fundamentals",
    lessons: googleLessons
  },
  cisco: {
    name: "Cisco Networking",
    shortCode: "CCNA",
    icon: "",
    accentColor: "#F26B5B",
    route: "/certifications/cisco/networking",
    lessons: ciscoLessons
  },
  comptia: {
    name: "CompTIA IT Fundamentals",
    shortCode: "ITF+",
    icon: "",
    accentColor: "#F26B5B",
    route: "/certifications/comptia/fundamentals",
    lessons: comptiaLessons
  },
  kubernetes: {
    name: "Kubernetes Fundamentals",
    shortCode: "K8S",
    icon: "",
    accentColor: "#F26B5B",
    route: "/certifications/kubernetes/fundamentals",
    lessons: kubernetesLessons
  }
};

function CertificationLesson({ defaultProvider }) {
  const { provider: paramProvider, lessonId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const resolvedProviderKey = useMemo(() => {
    if (defaultProvider && CATALOG[defaultProvider.toLowerCase()]) {
      return defaultProvider.toLowerCase();
    }
    if (paramProvider && CATALOG[paramProvider.toLowerCase()]) {
      return paramProvider.toLowerCase();
    }
    const path = location.pathname.toLowerCase();
    if (path.includes("/aws/solutions-architect") || path.includes("/aws-saa")) return "aws-saa";
    if (path.includes("/aws")) return "aws";
    if (path.includes("/azure")) return "azure";
    if (path.includes("/google")) return "google";
    if (path.includes("/cisco")) return "cisco";
    if (path.includes("/comptia")) return "comptia";
    if (path.includes("/kubernetes")) return "kubernetes";
    return "aws";
  }, [defaultProvider, paramProvider, location.pathname]);

  const providerInfo = CATALOG[resolvedProviderKey] || CATALOG.aws;
  const lessonsList = providerInfo.lessons;

  const currentLessonId = Number(lessonId) || 1;
  const lessonIndex = lessonsList.findIndex((l) => l.id === currentLessonId);
  const currentLesson = lessonIndex !== -1 ? lessonsList[lessonIndex] : lessonsList[0];

  const {
    isLessonCompleted,
    toggleLessonCompleted,
    isLessonBookmarked,
    toggleLessonBookmarked,
    recordLastActive,
    openPracticeModal
  } = useLearning();

  const [selectedAnswersMap, setSelectedAnswersMap] = useState({});
  const selectedAnswer = selectedAnswersMap[currentLesson.id] || null;

  const [sidebarFilter, setSidebarFilter] = useState("");

  const isCompleted = isLessonCompleted(resolvedProviderKey, currentLesson.id);
  const isBookmarked = isLessonBookmarked(resolvedProviderKey, currentLesson.id);

  useEffect(() => {
    if (currentLesson) {
      recordLastActive(
        resolvedProviderKey,
        currentLesson.id,
        currentLesson.title,
        currentLesson.category,
        `${providerInfo.route}/lesson/${currentLesson.id}`
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [resolvedProviderKey, currentLesson, providerInfo.route, recordLastActive]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft" && lessonIndex > 0) {
        navigate(`${providerInfo.route}/lesson/${lessonsList[lessonIndex - 1].id}`);
      } else if (e.key === "ArrowRight" && lessonIndex < lessonsList.length - 1) {
        navigate(`${providerInfo.route}/lesson/${lessonsList[lessonIndex + 1].id}`);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lessonIndex, lessonsList, providerInfo.route, navigate]);

  const prevLesson = lessonIndex > 0 ? lessonsList[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < lessonsList.length - 1 ? lessonsList[lessonIndex + 1] : null;

  const prevUrl = prevLesson ? `${providerInfo.route}/lesson/${prevLesson.id}` : null;
  const nextUrl = nextLesson ? `${providerInfo.route}/lesson/${nextLesson.id}` : null;

  const filteredSidebarLessons = useMemo(() => {
    if (!sidebarFilter.trim()) return lessonsList;
    const q = sidebarFilter.toLowerCase();
    return lessonsList.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.category.toLowerCase().includes(q) ||
        String(l.id).includes(q)
    );
  }, [lessonsList, sidebarFilter]);

  const handleSelectAnswer = (ansId) => {
    setSelectedAnswersMap((prev) => ({
      ...prev,
      [currentLesson.id]: ansId
    }));
  };

  const handleResetAnswer = () => {
    setSelectedAnswersMap((prev) => {
      const next = { ...prev };
      delete next[currentLesson.id];
      return next;
    });
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: `${providerInfo.name} (${providerInfo.shortCode})`, path: providerInfo.route },
    { label: `Lesson ${currentLesson.id}: ${currentLesson.title}` }
  ];

  const currentLessonPath = `${providerInfo.route}/lesson/${currentLesson.id}`;

  const quizSchema = getQuizSchema({
    lesson: currentLesson,
    providerName: providerInfo.name,
    shortCode: providerInfo.shortCode,
    url: currentLessonPath
  });

  const lessonStructuredData = [
    getBreadcrumbSchema(
      breadcrumbItems.map((b) => ({ name: b.label, url: b.path || currentLessonPath }))
    ),
    getLessonArticleSchema({
      title: currentLesson.title,
      intro: currentLesson.intro,
      category: currentLesson.category,
      providerName: providerInfo.name,
      shortCode: providerInfo.shortCode,
      lessonId: currentLesson.id,
      duration: currentLesson.duration,
      url: currentLessonPath
    }),
    ...(quizSchema ? [quizSchema] : [])
  ];

  return (
    <div className="lesson-page">
      <SEO
        title={`Lesson ${currentLesson.id}: ${currentLesson.title} — ${providerInfo.name} (${providerInfo.shortCode})`}
        description={`${currentLesson.intro || currentLesson.keyIdea} Master this module for the ${providerInfo.name} (${providerInfo.shortCode}) certification exam.`}
        keywords={[
          currentLesson.title,
          currentLesson.category,
          providerInfo.name,
          providerInfo.shortCode,
          "certification lesson",
          "exam study notes",
          "quick check quiz",
          "practice problem"
        ]}
        canonicalPath={currentLessonPath}
        ogType="article"
        articleSection={currentLesson.category}
        prevUrl={prevUrl}
        nextUrl={nextUrl}
        structuredData={lessonStructuredData}
      />

      
      <header className="lesson-header" aria-label="Lesson Header">
        <div className="lesson-brand">
          <Link to="/" className="lesson-logo" aria-label="Athencert Home">
            Athen<span>cert</span>
          </Link>

          <div className="lesson-divider"></div>

          <Link to={providerInfo.route} className="lesson-certification">
            <span className="cert-pill-badge">{providerInfo.shortCode}</span>
            {providerInfo.name}
          </Link>
        </div>

        <div className="lesson-header-right">
          <button
            className="lesson-mock-btn"
            onClick={() => openPracticeModal("mockExam", resolvedProviderKey)}
            title={`Launch Timed Mock Exam for ${providerInfo.shortCode} (Ctrl+M)`}
          >
            ⏱️ Mock Exam
          </button>

          <button
            className={`lesson-bookmark-btn ${isBookmarked ? "bookmarked" : ""}`}
            onClick={() => toggleLessonBookmarked(resolvedProviderKey, currentLesson.id)}
            title={isBookmarked ? "Remove Bookmark" : "Bookmark this lesson"}
            aria-label={isBookmarked ? "Remove bookmark for this lesson" : "Bookmark this lesson"}
          >
            {isBookmarked ? " Bookmarked" : " Bookmark"}
          </button>

          <div className="lesson-progress-indicator" aria-label={`Lesson ${currentLesson.id} of ${lessonsList.length}`}>
            <span>
              Lesson {currentLesson.id} of {lessonsList.length}
            </span>
            <div className="lesson-progress">
              <div
                style={{
                  width: `${(currentLesson.id / lessonsList.length) * 100}%`
                }}
              ></div>
            </div>
          </div>

          <Link to={providerInfo.route} className="exit-lesson" aria-label="Exit to course curriculum">
            Exit 
          </Link>
        </div>
      </header>

      <CertPathNavigator activeProvider={resolvedProviderKey} />

      
      <div className="lesson-layout">
        
        <aside className="lesson-sidebar" aria-label="Course Curriculum Navigation">
          <div className="sidebar-header-box">
            <span className="sidebar-label">{providerInfo.shortCode} CURRICULUM</span>
            <h3>{providerInfo.name}</h3>

            <div className="sidebar-search-box">
              <input
                type="text"
                placeholder="Filter lessons..."
                value={sidebarFilter}
                onChange={(e) => setSidebarFilter(e.target.value)}
                className="sidebar-search-input"
                aria-label="Filter lessons in this course"
              />
              {sidebarFilter && (
                <button
                  className="sidebar-search-clear"
                  onClick={() => setSidebarFilter("")}
                  aria-label="Clear filter"
                >
                  
                </button>
              )}
            </div>
          </div>

          <div className="lesson-list">
            {filteredSidebarLessons.map((item) => {
              const active = item.id === currentLesson.id;
              const done = isLessonCompleted(resolvedProviderKey, item.id);
              const saved = isLessonBookmarked(resolvedProviderKey, item.id);

              return (
                <Link
                  key={item.id}
                  to={`${providerInfo.route}/lesson/${item.id}`}
                  className={`lesson-item ${active ? "active" : ""} ${done ? "completed" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="lesson-number">
                    {done ? "" : String(item.id).padStart(2, "0")}
                  </span>

                  <div className="lesson-item-info">
                    <strong>{item.title}</strong>
                    <div className="lesson-meta-row">
                      <small>{item.duration}</small>
                      <span className="bullet-dot">•</span>
                      <small className="item-cat">{item.category}</small>
                      {saved && <span className="saved-star"></span>}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="sidebar-quick-tools">
            <button
              className="sidebar-tool-btn"
              onClick={() => openPracticeModal("quickQuiz", resolvedProviderKey)}
            >
               Quick Quiz
            </button>
            <button
              className="sidebar-tool-btn"
              onClick={() => openPracticeModal("flashcards", resolvedProviderKey)}
            >
               Flashcards
            </button>
            <button
              className="sidebar-tool-btn tool-primary"
              onClick={() => openPracticeModal("mockExam", resolvedProviderKey)}
            >
              ⏱️ Mock Exam
            </button>
          </div>
        </aside>

        
        <main className="lesson-content" id="lesson-main">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="lesson-meta-top">
            <span className="lesson-category-tag">{currentLesson.category}</span>
            <span className="lesson-read-time">⏱️ {currentLesson.duration} read</span>

            <button
              className={`mark-done-toggle-btn ${isCompleted ? "is-done" : ""}`}
              onClick={() => toggleLessonCompleted(resolvedProviderKey, currentLesson.id)}
            >
              {isCompleted ? " Completed" : "○ Mark as Completed"}
            </button>
          </div>

          
          <div className="lesson-top-seq-bar">
            {prevLesson ? (
              <Link to={prevUrl} className="seq-step-btn prev" title="Previous Module (Press Left Arrow)">
                ← Previous <kbd>[←]</kbd>
              </Link>
            ) : (
              <span className="seq-step-btn disabled">First Module</span>
            )}

            <div className="seq-domain-pill">
              <span className="domain-icon"></span>
              <span>Blueprint Objective: <strong>{currentLesson.category}</strong></span>
            </div>

            {nextLesson ? (
              <Link to={nextUrl} className="seq-step-btn next" title="Next Module (Press Right Arrow)">
                Next → <kbd>[→]</kbd>
              </Link>
            ) : (
              <Link to={providerInfo.route} className="seq-step-btn complete">
                Track Overview 
              </Link>
            )}
          </div>

          <h1 className="lesson-main-heading">{currentLesson.title}</h1>
          <p className="lesson-intro">{currentLesson.intro}</p>

          
          <div className="key-idea">
            <div className="key-idea-tag">
              <span className="key-idea-dot" aria-hidden="true"></span>
              KEY TAKEAWAY
            </div>
            <strong>{currentLesson.keyIdea}</strong>
          </div>

          
          {currentLesson.sections &&
            currentLesson.sections.map((section, sIdx) => (
              <section className="lesson-text-section" key={sIdx}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </section>
            ))}

          
          {currentLesson.example && (
            <div className="example-box">
              <div className="example-label">{currentLesson.example.title}</div>
              <div className="example-columns">
                <div className="example-col">
                  <h4>Traditional Architecture</h4>
                  <p>{currentLesson.example.traditional}</p>
                </div>
                <div className="example-col col-cloud">
                  <h4>Cloud / Modern Approach</h4>
                  <p>{currentLesson.example.cloud}</p>
                </div>
              </div>
            </div>
          )}

          
          {currentLesson.concepts && currentLesson.concepts.length > 0 && (
            <div className="key-concepts">
              <h2>Key Concepts to Remember</h2>
              <div className="concept-grid">
                {currentLesson.concepts.map((concept, cIdx) => (
                  <div className="concept-card" key={cIdx}>
                    <div className="concept-num">{concept.number}</div>
                    <strong>{concept.title}</strong>
                    <p>{concept.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          
          {(currentLesson.question || currentLesson.quiz) && (() => {
            const quizData = currentLesson.question || currentLesson.quiz;
            const questionText = quizData.text || quizData.question;
            const answers = quizData.answers || [];
            const selectedAnsObj = answers.find((a) => a.id === selectedAnswer);
            const isCorrect = selectedAnsObj?.correct;

            return (
              <div className="lesson-quiz-section">
                <div className="quiz-header-badge">
                  <span> KNOWLEDGE CHECK</span>
                </div>
                <h3 className="quiz-question-text">{questionText}</h3>

                <div className="quiz-answers-list">
                  {answers.map((ans) => {
                    const isSelected = selectedAnswer === ans.id;
                    const isSubmitted = selectedAnswer !== null;
                    let answerClass = "";

                    if (isSubmitted) {
                      if (ans.correct) answerClass = "ans-correct";
                      else if (isSelected && !ans.correct) answerClass = "ans-wrong";
                    }

                    return (
                      <button
                        key={ans.id}
                        className={`quiz-answer-btn ${isSelected ? "selected" : ""} ${answerClass}`}
                        onClick={() => handleSelectAnswer(ans.id)}
                      >
                        <span className="ans-letter">{ans.id}</span>
                        <span className="ans-text">{ans.text}</span>
                        {isSubmitted && ans.correct && <span className="ans-tag-good"> Correct</span>}
                        {isSubmitted && isSelected && !ans.correct && (
                          <span className="ans-tag-bad"> Incorrect</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {selectedAnswer && (
                  <div className="quiz-explanation-box">
                    <strong>
                      {isCorrect ? " Excellent!" : " Explanation:"}
                    </strong>
                    <p>
                      {quizData.explanation ||
                        (isCorrect
                          ? "Great job! You correctly identified the right answer."
                          : "Review the lesson key takeaways above to reinforce your understanding of this topic.")}
                    </p>
                    <button className="quiz-retry-btn" onClick={handleResetAnswer}>
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            );
          })()}

          
          <div className="lesson-certlab-callout">
            <div className="callout-header-content">
              <div className="callout-icon-badge"></div>
              <div>
                <span className="callout-kicker">CERTLAB • INTERACTIVE WORKBENCH</span>
                <h3 className="callout-title">Practice {providerInfo.shortCode} In The Cloud Console</h3>
                <p className="callout-desc">
                  Don't just memorize concepts. Test real {providerInfo.name} CLI commands, inspect status codes, and verify syntax in our live simulated sandbox.
                </p>
              </div>
            </div>

            <div className="callout-actions-group">
              <button
                className="callout-btn-primary"
                onClick={() => openPracticeModal("certLab", resolvedProviderKey)}
              >
                ▶ Launch Cloud Console (Ctrl+L)
              </button>
              <button
                className="callout-btn-exam"
                onClick={() => openPracticeModal("mockExam", resolvedProviderKey)}
                title={`Launch Timed Mock Exam for ${providerInfo.shortCode} (Ctrl+M)`}
              >
                ⏱️ Full {providerInfo.shortCode} Mock Exam (Ctrl+M)
              </button>
              <button
                className="callout-btn-secondary"
                onClick={() => openPracticeModal("cheatSheet")}
              >
                 Ports & Acronyms Cheat Sheet (Ctrl+J)
              </button>
            </div>
          </div>

          
          <footer className="lesson-footer-nav" aria-label="Lesson Sequence Navigation">
            {prevLesson ? (
              <Link
                to={prevUrl}
                className="nav-btn prev-btn"
                rel="prev"
                aria-label={`Previous lesson: ${prevLesson.title}`}
              >
                ← Previous: {prevLesson.title} <kbd>[←]</kbd>
              </Link>
            ) : (
              <div />
            )}

            {nextLesson ? (
              <Link
                to={nextUrl}
                className="nav-btn next-btn"
                rel="next"
                aria-label={`Next lesson: ${nextLesson.title}`}
              >
                Next: {nextLesson.title} → <kbd>[→]</kbd>
              </Link>
            ) : (
              <Link
                to={providerInfo.route}
                className="nav-btn next-btn complete-track-btn"
              >
                Finish Track 
              </Link>
            )}
          </footer>
        </main>
      </div>
    </div>
  );
}

export default CertificationLesson;
