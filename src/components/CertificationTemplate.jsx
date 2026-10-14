import { useState } from "react";
import { Link } from "react-router-dom";
import { useLearning } from "../context/LearningContext";
import CompletionRing from "./CompletionRing";
import ProgressChart from "./ProgressChart";
import Breadcrumbs from "./Breadcrumbs";
import RelatedCertifications from "./RelatedCertifications";
import SEO from "./SEO";
import { getCourseSchema, getBreadcrumbSchema } from "../utils/structuredData";
import "./CertificationTemplate.css";

const PROVIDER_ROUTES = {
  aws: {
    roadmap: "/certifications/aws",
    roadmapName: "AWS Roadmap",
    hub: "/certifications/aws/cloud-practitioner",
    vendor: "Amazon Web Services"
  },
  "aws-saa": {
    roadmap: "/certifications/aws",
    roadmapName: "AWS Roadmap",
    hub: "/certifications/aws/solutions-architect",
    vendor: "Amazon Web Services"
  },
  azure: {
    roadmap: "/certifications/azure",
    roadmapName: "Azure Roadmap",
    hub: "/certifications/azure/az-900",
    vendor: "Microsoft"
  },
  google: {
    roadmap: "/certifications/google",
    roadmapName: "Google Cloud Roadmap",
    hub: "/certifications/google/cloud-fundamentals",
    vendor: "Google Cloud"
  },
  cisco: {
    roadmap: "/certifications/cisco",
    roadmapName: "Cisco Roadmap",
    hub: "/certifications/cisco/networking",
    vendor: "Cisco Systems"
  },
  comptia: {
    roadmap: "/certifications/comptia",
    roadmapName: "CompTIA Roadmap",
    hub: "/certifications/comptia/fundamentals",
    vendor: "CompTIA"
  },
  kubernetes: {
    roadmap: "/certifications/kubernetes",
    roadmapName: "Cloud Native Roadmap",
    hub: "/certifications/kubernetes/fundamentals",
    vendor: "Cloud Native Computing Foundation (CNCF)"
  }
};

function CertificationTemplate({
  provider = "aws",
  title = "Certification",
  shortTitle = "Cert",
  description = "Learn certification skills",
  icon = "",
  heroColor = "blue",
  maxLessons = 18,
  topics = [],
  practiceCards = [],
  onStartLearning = null,
  examDetails = {
    code: "EXAM-101",
    duration: "90 minutes",
    questions: "65 questions",
    passingScore: "700 / 1000 (70%)",
    format: "Multiple choice & multiple response"
  }
}) {
  const { getProviderProgress, openPracticeModal } = useLearning();
  const progressData = getProviderProgress(provider, maxLessons);
  const currentProgress = progressData.percentage;
  const completedLessonsCount = progressData.completedCount;

  const [activeTab, setActiveTab] = useState("curriculum"); 

  const providerMeta = PROVIDER_ROUTES[provider.toLowerCase()] || {
    roadmap: `/certifications/${provider}`,
    roadmapName: `${title} Roadmap`,
    hub: `/certifications/${provider}`,
    vendor: title
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: providerMeta.roadmapName, path: providerMeta.roadmap || "/certifications/aws" },
    { label: `${title} (${shortTitle})`, path: providerMeta.hub }
  ];

  const courseStructuredData = [
    getBreadcrumbSchema(
      breadcrumbItems.map((b) => ({ name: b.label, url: b.path }))
    ),
    getCourseSchema({
      title,
      description,
      provider: providerMeta.vendor,
      code: examDetails.code || shortTitle,
      url: providerMeta.hub,
      lessonsCount: maxLessons,
      topics
    })
  ];

  const handlePracticeCardClick = (cardTitle) => {
    const t = cardTitle.toLowerCase();
    if (t.includes("quiz")) {
      openPracticeModal("quickQuiz", provider);
    } else if (t.includes("flashcard") || t.includes("notes") || t.includes("review")) {
      openPracticeModal("flashcards", provider);
    } else if (t.includes("mock") || t.includes("exam")) {
      openPracticeModal("mockExam", provider);
    } else if (t.includes("lab") || t.includes("troubleshoot") || t.includes("manifest")) {
      openPracticeModal("lab", provider);
    } else {
      openPracticeModal("quickQuiz", provider);
    }
  };

  return (
    <div className={`cert-template cert-template-${heroColor}`}>
      <SEO
        title={`${title} (${examDetails.code || shortTitle}) Complete Course & Practice`}
        description={`${description} Master all ${maxLessons} lessons with interactive flashcards, scenario labs, and full timed mock exams.`}
        keywords={[
          title,
          shortTitle,
          examDetails.code,
          providerMeta.vendor,
          "certification exam preparation",
          "practice tests",
          "interactive study guide",
          "mock exam simulator"
        ]}
        canonicalPath={providerMeta.hub}
        structuredData={courseStructuredData}
      />

      
      <header className="cert-header" aria-label="Course Header">
        <div className="cert-brand">
          <Link to="/" className="back-arrow" title="Back to Home" aria-label="Back to Home">
            ←
          </Link>
          <div>
            <small>CERTIFICATION PATHWAY</small>
            <strong>{title}</strong>
          </div>
        </div>

        <div className="header-actions-right">
          <button
            className="header-search-launcher"
            onClick={() => openPracticeModal("search")}
            aria-label="Search lessons"
          >
            <span> Search lessons...</span>
            <kbd>Ctrl+K</kbd>
          </button>

          <div className="header-progress" aria-label={`Overall progress: ${currentProgress}%`}>
            <span>Overall progress</span>
            <div className="mini-progress">
              <div style={{ width: `${currentProgress}%` }}></div>
            </div>
            <strong>{currentProgress}%</strong>
          </div>
        </div>
      </header>

      
      <main className="cert-content">
        <Breadcrumbs items={breadcrumbItems} />

        
        <section className="cert-hero" aria-labelledby="cert-title">
          <div className="hero-left">
            <div className="hero-badge-pill">
              <span className="hero-icon-span" aria-hidden="true">{icon}</span>
              <span className="hero-short-title">{shortTitle}</span>
              <span className="hero-verified-tag">Official Curriculum</span>
            </div>

            <h1 id="cert-title">{title}</h1>
            <p>{description}</p>

            <div className="hero-actions">
              <Link to={onStartLearning || "#"} className="continue-btn">
                {currentProgress > 0 ? "Continue Learning →" : "Start Learning Path →"}
              </Link>
              <button
                className="outline-btn"
                onClick={() => openPracticeModal("mockExam", provider)}
              >
                ⏱️ Mock Exam Simulator
              </button>
            </div>
          </div>

          <div className="readiness-card">
            <div className="readiness-header">
              <span>EXAM READINESS</span>
              <span className="readiness-level">
                {currentProgress < 30 ? "Beginner" : currentProgress < 75 ? "Intermediate" : "Exam Ready"}
              </span>
            </div>

            <div className="ring-container">
              <CompletionRing percentage={currentProgress} size={120} title="Progress" />
            </div>

            <div className="readiness-meta">
              <div className="readiness-stat">
                <strong>{completedLessonsCount}</strong>
                <small>Completed</small>
              </div>
              <div className="stat-divider"></div>
              <div className="readiness-stat">
                <strong>{maxLessons}</strong>
                <small>Total Lessons</small>
              </div>
            </div>

            <p className="readiness-feedback-text">
              {currentProgress === 0
                ? "Begin lesson 1 to start tracking your exam readiness."
                : currentProgress < 50
                ? "Solid start! Keep working through core modules."
                : currentProgress < 100
                ? "Great momentum! You are nearing full preparation."
                : "Outstanding! You have mastered all lessons."}
            </p>
          </div>
        </section>

        
        <div className="cert-tabs-bar" role="tablist">
          <button
            className={`cert-tab-btn ${activeTab === "curriculum" ? "active" : ""}`}
            onClick={() => setActiveTab("curriculum")}
            role="tab"
            aria-selected={activeTab === "curriculum"}
          >
             Curriculum & Modules ({topics.length})
          </button>
          <button
            className={`cert-tab-btn ${activeTab === "practice" ? "active" : ""}`}
            onClick={() => setActiveTab("practice")}
            role="tab"
            aria-selected={activeTab === "practice"}
          >
             Practice & Exam Suite ({practiceCards.length})
          </button>
          <button
            className={`cert-tab-btn ${activeTab === "guide" ? "active" : ""}`}
            onClick={() => setActiveTab("guide")}
            role="tab"
            aria-selected={activeTab === "guide"}
          >
             Official Exam Blueprint
          </button>
        </div>

        
        {activeTab === "curriculum" && (
          <>
            <section className="learning-path">
              <div className="section-title">
                <div>
                  <span>CURRICULUM BREAKDOWN</span>
                  <h2>Domain Focus Areas</h2>
                </div>
                <p>
                  Each module provides practical theory, real-world examples, concept callouts,
                  and quick check assessments.
                </p>
              </div>

              <div className="topics-grid">
                {topics.map((topic, idx) => (
                  <TopicCard
                    key={idx}
                    topic={topic}
                    provider={provider}
                    onStart={onStartLearning}
                  />
                ))}
              </div>
            </section>

            
            <section className="cert-chart">
              <div className="section-title">
                <div>
                  <span>STUDY METRICS</span>
                  <h2>Learning Analytics</h2>
                </div>
              </div>
              <ProgressChart
                lessons={completedLessonsCount}
                maxLessons={maxLessons}
                questions={completedLessonsCount * 4}
                accuracy={currentProgress > 0 ? 92 : 0}
                streak={7}
              />
            </section>
          </>
        )}

        
        {activeTab === "practice" && (
          <section className="practice-section">
            <div className="section-title">
              <div>
                <span>ACTIVE RECALL & SIMULATION</span>
                <h2>Practice & Mock Tests</h2>
              </div>
              <p>
                Lock in your knowledge with spaced repetition flashcards, quick quizzes, and full timed
                practice exams modeled after the official test format.
              </p>
            </div>

            <div className="practice-grid">
              {practiceCards.map((card, idx) => (
                <div key={idx} className="practice-card">
                  <div className="practice-icon" aria-hidden="true">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <button
                    className="practice-btn"
                    onClick={() => handlePracticeCardClick(card.title)}
                  >
                    {card.button || "Launch"} →
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        
        {activeTab === "guide" && (
          <section className="exam-guide-section">
            <div className="section-title">
              <div>
                <span>TEST DETAILS</span>
                <h2>Official Exam Specifications</h2>
              </div>
            </div>

            <div className="exam-specs-grid">
              <div className="spec-card">
                <span>Exam Code</span>
                <strong>{examDetails.code}</strong>
              </div>
              <div className="spec-card">
                <span>Duration</span>
                <strong>{examDetails.duration}</strong>
              </div>
              <div className="spec-card">
                <span>Question Count</span>
                <strong>{examDetails.questions}</strong>
              </div>
              <div className="spec-card">
                <span>Passing Threshold</span>
                <strong>{examDetails.passingScore}</strong>
              </div>
              <div className="spec-card full-span">
                <span>Question Format</span>
                <strong>{examDetails.format}</strong>
              </div>
            </div>

            <div className="exam-tips-card">
              <h3> Pro Exam Strategy Tips</h3>
              <ul>
                <li>
                  <strong>Time Management:</strong> Aim to answer each question within 1 minute, leaving
                  20 minutes at the end to review flagged questions.
                </li>
                <li>
                  <strong>Process of Elimination:</strong> Cross out obviously incorrect answers first to
                  dramatically increase probability on tough questions.
                </li>
                <li>
                  <strong>Keywords Matter:</strong> Pay special attention to qualifiers like "MOST cost-effective",
                  "LEAST operational overhead", and "FASTEST recovery".
                </li>
              </ul>
            </div>
          </section>
        )}

        
        <RelatedCertifications currentProvider={provider} />
      </main>
    </div>
  );
}


function TopicCard({ topic, provider, onStart }) {
  const targetPath = topic.path || onStart || `/certifications/${provider}/lesson/1`;

  return (
    <div className={`topic-card topic-${topic.status || "current"}`}>
      <div className="topic-card-header">
        <div className="topic-number">{topic.number}</div>
        <span className="topic-status-badge">
          {topic.status === "completed" ? " Completed" : "Available"}
        </span>
      </div>

      <div className="topic-body">
        <h3>{topic.title}</h3>
        <p>{topic.description}</p>
      </div>

      <div className="topic-footer">
        <Link to={targetPath} className="topic-link">
          Explore Lessons →
        </Link>
      </div>
    </div>
  );
}

export default CertificationTemplate;
