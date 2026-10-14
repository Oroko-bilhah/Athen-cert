import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLearning } from "../context/LearningContext";
import { azureLessons } from "../data/azureLessons";
import {
  course0Welcome,
  officialDomains,
  azureServiceCategories,
  azureComparisons,
  scenarioQuestions,
  azureLabs,
  domainTests,
  practiceExams,
  examReadinessAreas,
  studyPlans,
  masterCheatSheet,
  careerRoadmap
} from "../data/azureCourseData";
import CompletionRing from "../components/CompletionRing";
import ProgressChart from "../components/ProgressChart";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedCertifications from "../components/RelatedCertifications";
import SEO from "../components/SEO";
import { getCourseSchema, getBreadcrumbSchema } from "../utils/structuredData";
import "./AzureFundamentals.css";

function AzureFundamentals() {
  const { getProviderProgress, openPracticeModal, isLessonCompleted } = useLearning();
  const maxLessons = azureLessons.length;
  const progressData = getProviderProgress("azure", maxLessons);
  const currentProgress = progressData.percentage;
  const completedLessonsCount = progressData.completedCount;

  const [activeTab, setActiveTab] = useState("curriculum");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarSearch, setSidebarSearch] = useState("");

  const [collapsedDomains, setCollapsedDomains] = useState({});

  const [curriculumDomain, setCurriculumDomain] = useState("all");
  const [curriculumSearch, setCurriculumSearch] = useState("");

  const [compCategory, setCompCategory] = useState("all");
  const [compSearch, setCompSearch] = useState("");

  const [labSearch, setLabSearch] = useState("");
  const [activeLabId, setActiveLabId] = useState(azureLabs[0]?.id || "lab-1");
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [copiedCode, setCopiedCode] = useState(false);

  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0);
  const [scenarioAnswers, setScenarioAnswers] = useState({});
  const [showScenarioExplanation, setShowScenarioExplanation] = useState(false);

  const [cheatSearch, setCheatSearch] = useState("");

  const [activeServiceCat, setActiveServiceCat] = useState("all");
  const [serviceSearch, setServiceSearch] = useState("");

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Azure Roadmap", path: "/certifications/azure" },
    { label: "Microsoft Azure Fundamentals (AZ-900)", path: "/certifications/azure/az-900" }
  ];

  const courseStructuredData = [
    getBreadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.label, url: b.path }))),
    getCourseSchema({
      title: "Microsoft Azure Fundamentals (AZ-900) Complete Certification Course",
      description: "Comprehensive AZ-900 course updated July 2026 with Cloud Concepts (25–30%), Azure Architecture & Services (35–40%), and Management & Governance (30–35%).",
      provider: "Microsoft",
      code: "AZ-900",
      url: "/certifications/azure/az-900",
      lessonsCount: maxLessons,
      topics: officialDomains
    })
  ];

  const domainGroups = useMemo(() => {
    const d1 = azureLessons.filter((l) => l.id <= 7);
    const d2 = azureLessons.filter((l) => l.id >= 8 && l.id <= 21);
    const d3 = azureLessons.filter((l) => l.id >= 22);

    return [
      {
        id: "domain-1",
        title: "Domain 1: Cloud Concepts",
        weight: "25–30%",
        lessons: d1
      },
      {
        id: "domain-2",
        title: "Domain 2: Architecture & Services",
        weight: "35–40%",
        lessons: d2
      },
      {
        id: "domain-3",
        title: "Domain 3: Management & Governance",
        weight: "30–35%",
        lessons: d3
      }
    ];
  }, []);

  const filteredDomainGroups = useMemo(() => {
    if (!sidebarSearch.trim()) return domainGroups;
    const q = sidebarSearch.toLowerCase();
    return domainGroups
      .map((group) => {
        const matching = group.lessons.filter(
          (l) =>
            l.title.toLowerCase().includes(q) ||
            l.category.toLowerCase().includes(q) ||
            String(l.id).includes(q)
        );
        return { ...group, lessons: matching };
      })
      .filter((g) => g.lessons.length > 0);
  }, [domainGroups, sidebarSearch]);

  const toggleDomainCollapse = (domainId) => {
    setCollapsedDomains((prev) => ({
      ...prev,
      [domainId]: !prev[domainId]
    }));
  };

  const filteredLessons = useMemo(() => {
    return azureLessons.filter((l) => {
      let matchesDomain = true;
      if (curriculumDomain === "domain-1") matchesDomain = l.id <= 7;
      else if (curriculumDomain === "domain-2") matchesDomain = l.id >= 8 && l.id <= 21;
      else if (curriculumDomain === "domain-3") matchesDomain = l.id >= 22;

      const matchesSearch =
        l.title.toLowerCase().includes(curriculumSearch.toLowerCase()) ||
        l.category.toLowerCase().includes(curriculumSearch.toLowerCase()) ||
        l.intro.toLowerCase().includes(curriculumSearch.toLowerCase());

      return matchesDomain && matchesSearch;
    });
  }, [curriculumDomain, curriculumSearch]);

  const filteredComparisons = useMemo(() => {
    return azureComparisons.filter((c) => {
      const matchesCat = compCategory === "all" || c.category.toLowerCase().includes(compCategory.toLowerCase());
      const matchesText =
        c.title.toLowerCase().includes(compSearch.toLowerCase()) ||
        c.summary.toLowerCase().includes(compSearch.toLowerCase());
      return matchesCat && matchesText;
    });
  }, [compCategory, compSearch]);

  const filteredLabs = useMemo(() => {
    return azureLabs.filter((lab) => {
      return (
        lab.title.toLowerCase().includes(labSearch.toLowerCase()) ||
        lab.domain.toLowerCase().includes(labSearch.toLowerCase()) ||
        lab.objective.toLowerCase().includes(labSearch.toLowerCase())
      );
    });
  }, [labSearch]);

  const activeLab = useMemo(() => {
    return azureLabs.find((l) => l.id === activeLabId) || azureLabs[0];
  }, [activeLabId]);

  const filteredServiceCats = useMemo(() => {
    return azureServiceCategories
      .map((cat) => {
        if (activeServiceCat !== "all" && cat.category.toLowerCase() !== activeServiceCat.toLowerCase()) {
          return null;
        }
        const matchingServices = cat.services.filter(
          (s) =>
            s.name.toLowerCase().includes(serviceSearch.toLowerCase()) ||
            s.description.toLowerCase().includes(serviceSearch.toLowerCase()) ||
            s.type.toLowerCase().includes(serviceSearch.toLowerCase())
        );
        if (matchingServices.length === 0 && serviceSearch) return null;
        return {
          ...cat,
          services: matchingServices
        };
      })
      .filter(Boolean);
  }, [activeServiceCat, serviceSearch]);

  const filteredAcronyms = useMemo(() => {
    if (!cheatSearch.trim()) return masterCheatSheet.acronyms;
    const q = cheatSearch.toLowerCase();
    return masterCheatSheet.acronyms.filter(
      (a) =>
        a.code.toLowerCase().includes(q) ||
        a.term.toLowerCase().includes(q) ||
        a.meaning.toLowerCase().includes(q)
    );
  }, [cheatSearch]);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const toggleSolution = (id) => {
    setRevealedSolutions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const currentScenario = scenarioQuestions[currentScenarioIdx];
  const selectedScenarioOpt = scenarioAnswers[currentScenario.id];

  const handleSelectScenarioOpt = (optId) => {
    if (showScenarioExplanation) return;
    setScenarioAnswers((prev) => ({ ...prev, [currentScenario.id]: optId }));
    setShowScenarioExplanation(true);
  };

  const handleNextScenario = () => {
    setShowScenarioExplanation(false);
    if (currentScenarioIdx < scenarioQuestions.length - 1) {
      setCurrentScenarioIdx((prev) => prev + 1);
    } else {
      setCurrentScenarioIdx(0);
    }
  };

  return (
    <div className="cert-template cert-template-blue azure-full-course">
      <SEO
        title="AZ-900: Microsoft Azure Fundamentals — Complete Certification Course"
        description="Master the Microsoft Azure AZ-900 exam with 32 structured lessons across 3 official exam domains, 17 hands-on labs, 22 service comparisons, practice exams, readiness analytics, and cheat sheet."
        keywords={[
          "AZ-900",
          "Azure Fundamentals",
          "Microsoft Azure Certification",
          "Cloud Concepts",
          "Azure Architecture",
          "Azure Governance",
          "AZ-900 Practice Exam",
          "AZ-900 Hands-on Labs",
          "AZ-900 Cheat Sheet"
        ]}
        canonicalPath="/certifications/azure/az-900"
        structuredData={courseStructuredData}
      />

      
      <header className="cert-header" aria-label="Course Header">
        <div className="cert-brand">
          <Link to="/certifications/azure" className="back-arrow" title="Back to Azure Roadmap" aria-label="Back to Azure Roadmap">
            ←
          </Link>
          <div>
            <small>MICROSOFT CERTIFICATION PATHWAY</small>
            <strong>Microsoft Azure Fundamentals (AZ-900)</strong>
          </div>
        </div>

        <div className="header-actions-right">
          <button
            className="sidebar-toggle-action-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            title={isSidebarOpen ? "Collapse Side Navbar" : "Expand Side Navbar"}
            aria-label="Toggle Lessons Side Navbar"
          >
            {isSidebarOpen ? "◀ Hide Syllabus" : " Lessons Syllabus"}
          </button>

          <button
            className="header-search-launcher"
            onClick={() => openPracticeModal("search")}
            aria-label="Search lessons"
          >
            <span> Search AZ-900...</span>
            <kbd>Ctrl+K</kbd>
          </button>

          <div className="header-progress" aria-label={`Overall progress: ${currentProgress}%`}>
            <span>Course Progress</span>
            <div className="mini-progress">
              <div style={{ width: `${currentProgress}%` }}></div>
            </div>
            <strong>{currentProgress}%</strong>
          </div>
        </div>
      </header>

      
      <div className={`az-page-wrapper ${isSidebarOpen ? "with-sidebar" : "no-sidebar"}`}>
        
        {isSidebarOpen && (
          <aside className="az-course-side-navbar" aria-label="Course Lessons Navigation">
            <div className="az-sidenav-header">
              <div className="az-sidenav-title-row">
                <span className="az-sidenav-eyebrow">AZ-900 SYLLABUS</span>
                <span className="az-sidenav-lesson-count">{completedLessonsCount}/{maxLessons} Done</span>
              </div>
              <h3>Course Lessons</h3>

              <div className="az-sidenav-search-box">
                <input
                  type="text"
                  placeholder="Filter 32 lessons..."
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  className="az-sidenav-search-input"
                  aria-label="Filter lessons in sidebar"
                />
                {sidebarSearch && (
                  <button className="az-sidenav-clear" onClick={() => setSidebarSearch("")}>
                    
                  </button>
                )}
              </div>
            </div>

            
            <div className="az-sidenav-quick-views">
              <button
                className={`az-sn-view-btn ${activeTab === "curriculum" ? "active" : ""}`}
                onClick={() => setActiveTab("curriculum")}
              >
                 Full Curriculum
              </button>
              <button
                className={`az-sn-view-btn ${activeTab === "labs" ? "active" : ""}`}
                onClick={() => setActiveTab("labs")}
              >
                 17 Labs
              </button>
              <button
                className={`az-sn-view-btn ${activeTab === "comparisons" ? "active" : ""}`}
                onClick={() => setActiveTab("comparisons")}
              >
                 22 Comparisons
              </button>
              <button
                className={`az-sn-view-btn ${activeTab === "exams" ? "active" : ""}`}
                onClick={() => setActiveTab("exams")}
              >
                ⏱️ Mock Exams
              </button>
            </div>

            
            <div className="az-sidenav-lessons-tree">
              {filteredDomainGroups.map((group) => {
                const isCollapsed = collapsedDomains[group.id];
                return (
                  <div key={group.id} className="az-domain-accordion-group">
                    <button
                      className="az-domain-accordion-header"
                      onClick={() => toggleDomainCollapse(group.id)}
                      aria-expanded={!isCollapsed}
                    >
                      <div className="az-dah-info">
                        <strong>{group.title}</strong>
                        <span className="az-dah-weight">{group.weight}</span>
                      </div>
                      <span className="az-dah-chevron">{isCollapsed ? "▼" : "▲"}</span>
                    </button>

                    {!isCollapsed && (
                      <div className="az-domain-lesson-links-list">
                        {group.lessons.map((lesson) => {
                          const isDone = isLessonCompleted("azure", lesson.id);
                          return (
                            <Link
                              key={lesson.id}
                              to={`/certifications/azure/az-900/lesson/${lesson.id}`}
                              className={`az-sidenav-lesson-link ${isDone ? "completed" : ""}`}
                            >
                              <span className="az-sll-num">
                                {isDone ? "" : String(lesson.id).padStart(2, "0")}
                              </span>
                              <div className="az-sll-info">
                                <strong>{lesson.title}</strong>
                                <div className="az-sll-meta">
                                  <small>{lesson.duration}</small>
                                  <span className="az-sll-dot">•</span>
                                  <small className="az-sll-cat">{lesson.category}</small>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            
            <div className="az-sidenav-footer-tools">
              <button
                className="az-sn-tool-btn"
                onClick={() => openPracticeModal("quickQuiz", "azure")}
              >
                 Quick Quiz
              </button>
              <button
                className="az-sn-tool-btn"
                onClick={() => openPracticeModal("flashcards", "azure")}
              >
                 Flashcards
              </button>
              <button
                className="az-sn-tool-btn tool-primary"
                onClick={() => openPracticeModal("mockExam", "azure")}
              >
                ⏱️ Mock Exam
              </button>
            </div>
          </aside>
        )}

        
        <div className="az-hub-main-content">
          <Breadcrumbs items={breadcrumbItems} />

          
          <section className="cert-hero" aria-labelledby="az900-title">
            <div className="hero-left">
              <div className="hero-badge-pill">
                <span className="hero-icon-span" aria-hidden="true"></span>
                <span className="hero-short-title">AZ-900</span>
                <span className="hero-verified-tag">Updated July 20, 2026</span>
              </div>

              <h1 id="az900-title">Microsoft Azure Fundamentals</h1>
              <p>
                The complete certification course covering all 31 core curriculum modules,
                official domain weightings, 22 interactive service comparisons, 17 hands-on labs, domain tests,
                and full exam simulators.
              </p>

              
              <div className="domain-weight-pills">
                <div className="domain-pill pill-d1">
                  <strong>Cloud Concepts</strong>
                  <span>25–30%</span>
                </div>
                <div className="domain-pill pill-d2">
                  <strong>Architecture & Services</strong>
                  <span>35–40%</span>
                </div>
                <div className="domain-pill pill-d3">
                  <strong>Management & Governance</strong>
                  <span>30–35%</span>
                </div>
              </div>

              <div className="hero-actions">
                <Link to="/certifications/azure/az-900/lesson/1" className="continue-btn">
                  {currentProgress > 0 ? "Continue Course →" : "Start Course (Lesson 1) →"}
                </Link>
                <button
                  className="outline-btn"
                  onClick={() => openPracticeModal("mockExam", "azure")}
                >
                  ⏱️ Practice Exam Simulator
                </button>
              </div>
            </div>

            <div className="readiness-card">
              <div className="readiness-header">
                <span>EXAM READINESS</span>
                <span className="readiness-level">
                  {currentProgress < 30 ? "Foundational" : currentProgress < 75 ? "Intermediate" : "Exam Ready"}
                </span>
              </div>

              <div className="ring-container">
                <CompletionRing percentage={currentProgress} size={120} title="Mastery" />
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
                  ? "Begin with Lesson 1: Welcome to AZ-900 to initiate your study track."
                  : currentProgress < 50
                  ? "Solid progress! Focus on completing Domain 2 Architecture modules."
                  : currentProgress < 100
                  ? "Great momentum! Take the 3 Domain Tests and Final Mock Exam."
                  : " Outstanding! You have mastered the entire AZ-900 curriculum."}
              </p>
            </div>
          </section>

          
          <div className="az-main-nav-tabs" role="tablist">
            <button
              className={`az-nav-tab ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
              role="tab"
            >
               Welcome & Overview
            </button>
            <button
              className={`az-nav-tab ${activeTab === "curriculum" ? "active" : ""}`}
              onClick={() => setActiveTab("curriculum")}
              role="tab"
            >
               Domain Curriculum ({maxLessons})
            </button>
            <button
              className={`az-nav-tab ${activeTab === "labs" ? "active" : ""}`}
              onClick={() => setActiveTab("labs")}
              role="tab"
            >
               17 Hands-On Labs
            </button>
            <button
              className={`az-nav-tab ${activeTab === "comparisons" ? "active" : ""}`}
              onClick={() => setActiveTab("comparisons")}
              role="tab"
            >
               22 Service Comparisons
            </button>
            <button
              className={`az-nav-tab ${activeTab === "scenarios" ? "active" : ""}`}
              onClick={() => setActiveTab("scenarios")}
              role="tab"
            >
               Scenario Trainer
            </button>
            <button
              className={`az-nav-tab ${activeTab === "services" ? "active" : ""}`}
              onClick={() => setActiveTab("services")}
              role="tab"
            >
               Service Reference
            </button>
            <button
              className={`az-nav-tab ${activeTab === "exams" ? "active" : ""}`}
              onClick={() => setActiveTab("exams")}
              role="tab"
            >
              ⏱️ Domain Tests & Exams
            </button>
            <button
              className={`az-nav-tab ${activeTab === "readiness" ? "active" : ""}`}
              onClick={() => setActiveTab("readiness")}
              role="tab"
            >
               Readiness Dashboard
            </button>
            <button
              className={`az-nav-tab ${activeTab === "studyplans" ? "active" : ""}`}
              onClick={() => setActiveTab("studyplans")}
              role="tab"
            >
               Revision & Plans
            </button>
            <button
              className={`az-nav-tab ${activeTab === "cheatsheet" ? "active" : ""}`}
              onClick={() => setActiveTab("cheatsheet")}
              role="tab"
            >
               Master Cheat Sheet
            </button>
            <button
              className={`az-nav-tab ${activeTab === "roadmap" ? "active" : ""}`}
              onClick={() => setActiveTab("roadmap")}
              role="tab"
            >
               Career Pathways
            </button>
          </div>

          
          {activeTab === "overview" && (
            <section className="az-tab-content-panel">
              <div className="overview-hero-card">
                <div className="overview-header">
                  <h2>{course0Welcome.about.title}</h2>
                  <p className="overview-subtitle">{course0Welcome.about.whatIsAz900}</p>
                </div>

                <div className="overview-grid-3">
                  <div className="info-box">
                    <h4> What it Proves</h4>
                    <p>{course0Welcome.about.whatItProves}</p>
                  </div>
                  <div className="info-box">
                    <h4> Who Should Take AZ-900</h4>
                    <ul>
                      {course0Welcome.about.whoShouldTake.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="info-box">
                    <h4> Who Does Not Need It</h4>
                    <ul>
                      {course0Welcome.about.whoDoesNotNeed.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                
                <div className="cert-vs-section">
                  <h3>Certification Comparison & Career Context</h3>
                  <div className="cert-vs-grid">
                    {course0Welcome.about.comparisons.map((c, idx) => (
                      <div key={idx} className="cert-vs-card">
                        <strong>{c.cert}</strong>
                        <p>{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className="exam-blueprint-box">
                  <h3>{course0Welcome.examInfo.title} ({course0Welcome.examInfo.updatedDate})</h3>
                  <div className="blueprint-grid">
                    <div className="bp-item">
                      <span>Passing Threshold</span>
                      <strong>{course0Welcome.examInfo.passingScore}</strong>
                    </div>
                    <div className="bp-item">
                      <span>Exam Duration</span>
                      <strong>{course0Welcome.examInfo.duration}</strong>
                    </div>
                    <div className="bp-item">
                      <span>Question Format</span>
                      <strong>{course0Welcome.examInfo.structure}</strong>
                    </div>
                    <div className="bp-item">
                      <span>Standard Pricing</span>
                      <strong>{course0Welcome.examInfo.pricing}</strong>
                    </div>
                  </div>

                  <div className="exam-features-callout">
                    <div className="ef-card">
                      <strong> Microsoft Learn Access During Exam</strong>
                      <p>{course0Welcome.examInfo.learnAccess}</p>
                    </div>
                    <div className="ef-card">
                      <strong> Official Retake Policy</strong>
                      <p>{course0Welcome.examInfo.retakePolicy}</p>
                    </div>
                  </div>
                </div>

                
                <div className="study-methodology-section">
                  <h3>{course0Welcome.howToStudy.title}</h3>
                  <div className="study-steps-grid">
                    {course0Welcome.howToStudy.steps.map((step, idx) => (
                      <div key={idx} className="study-step-card">
                        <div className="step-badge">{step.number}</div>
                        <h4>{step.title}</h4>
                        <p>{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          
          {activeTab === "curriculum" && (
            <section className="az-tab-content-panel">
              <div className="curriculum-filter-bar">
                <div className="domain-filter-buttons">
                  <button
                    className={`df-btn ${curriculumDomain === "all" ? "active" : ""}`}
                    onClick={() => setCurriculumDomain("all")}
                  >
                    All Lessons ({azureLessons.length})
                  </button>
                  <button
                    className={`df-btn ${curriculumDomain === "domain-1" ? "active" : ""}`}
                    onClick={() => setCurriculumDomain("domain-1")}
                  >
                    Domain 1: Cloud Concepts (25–30%)
                  </button>
                  <button
                    className={`df-btn ${curriculumDomain === "domain-2" ? "active" : ""}`}
                    onClick={() => setCurriculumDomain("domain-2")}
                  >
                    Domain 2: Architecture & Services (35–40%)
                  </button>
                  <button
                    className={`df-btn ${curriculumDomain === "domain-3" ? "active" : ""}`}
                    onClick={() => setCurriculumDomain("domain-3")}
                  >
                    Domain 3: Management & Governance (30–35%)
                  </button>
                </div>

                <div className="curriculum-search-wrapper">
                  <input
                    type="text"
                    placeholder="Filter lessons by keyword or topic..."
                    value={curriculumSearch}
                    onChange={(e) => setCurriculumSearch(e.target.value)}
                    className="curriculum-search-input"
                  />
                  {curriculumSearch && (
                    <button className="clear-search-btn" onClick={() => setCurriculumSearch("")}>
                      
                    </button>
                  )}
                </div>
              </div>

              
              <div className="domains-overview-cards">
                {officialDomains.map((dom) => (
                  <div
                    key={dom.id}
                    className={`domain-meta-card ${curriculumDomain === dom.id ? "highlighted" : ""}`}
                    onClick={() => setCurriculumDomain(dom.id)}
                  >
                    <div className="dom-card-top">
                      <span className="dom-code-tag">{dom.code}</span>
                      <strong className="dom-weight-badge">{dom.weight}</strong>
                    </div>
                    <h3>{dom.title}</h3>
                    <p>{dom.description}</p>
                    <small className="dom-coverage">{dom.modulesCovered}</small>
                  </div>
                ))}
              </div>

              
              <div className="az-lessons-grid">
                {filteredLessons.map((lesson) => {
                  const isDone = isLessonCompleted("azure", lesson.id);
                  return (
                    <div key={lesson.id} className={`az-lesson-card ${isDone ? "completed" : ""}`}>
                      <div className="az-lesson-card-header">
                        <span className="az-lesson-num">
                          {isDone ? "" : String(lesson.id).padStart(2, "0")}
                        </span>
                        <span className="az-lesson-cat">{lesson.category}</span>
                        <span className="az-lesson-time">⏱️ {lesson.duration}</span>
                      </div>

                      <h4>{lesson.title}</h4>
                      <p className="az-lesson-intro-text">{lesson.intro}</p>

                      <div className="az-lesson-key-takeaway">
                        <small>Key Takeaway:</small>
                        <span>{lesson.keyIdea}</span>
                      </div>

                      <div className="az-lesson-card-footer">
                        <Link
                          to={`/certifications/azure/az-900/lesson/${lesson.id}`}
                          className="az-lesson-launch-btn"
                        >
                          {isDone ? "Review Lesson →" : "Start Lesson →"}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              
              <section className="cert-chart">
                <div className="section-title">
                  <div>
                    <span>PROGRESS METRICS</span>
                    <h2>Curriculum Completion Analytics</h2>
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
            </section>
          )}

          
          {activeTab === "labs" && (
            <section className="az-tab-content-panel">
              <div className="labs-layout">
                
                <aside className="labs-sidebar">
                  <div className="labs-sidebar-header">
                    <h3> 17 Hands-On Labs</h3>
                    <input
                      type="text"
                      placeholder="Search labs..."
                      value={labSearch}
                      onChange={(e) => setLabSearch(e.target.value)}
                      className="lab-search-input"
                    />
                  </div>

                  <div className="labs-nav-list">
                    {filteredLabs.map((lab) => (
                      <button
                        key={lab.id}
                        className={`lab-nav-item ${activeLab.id === lab.id ? "active" : ""}`}
                        onClick={() => setActiveLabId(lab.id)}
                      >
                        <span className="lab-item-num">{lab.number}</span>
                        <div className="lab-item-info">
                          <strong>{lab.title}</strong>
                          <small>{lab.duration} • {lab.domain.split(":")[0]}</small>
                        </div>
                      </button>
                    ))}
                  </div>
                </aside>

                
                <main className="lab-workbench">
                  <div className="lab-header-banner">
                    <div className="lab-badge-row">
                      <span className="lab-number-tag">LAB {activeLab.number}</span>
                      <span className="lab-domain-tag">{activeLab.domain}</span>
                      <span className="lab-time-tag">⏱️ {activeLab.duration}</span>
                    </div>
                    <h2>{activeLab.title}</h2>
                    <p className="lab-objective">
                      <strong>Objective:</strong> {activeLab.objective}
                    </p>
                  </div>

                  <div className="lab-scenario-callout">
                    <strong> Scenario Context:</strong>
                    <p>{activeLab.scenario}</p>
                  </div>

                  <div className="lab-steps-section">
                    <h3>Step-by-Step Execution Guide</h3>
                    <ol className="lab-steps-ordered-list">
                      {activeLab.steps.map((step, idx) => (
                        <li key={idx} className="lab-step-item">
                          <span className="step-counter">{idx + 1}</span>
                          <p>{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {activeLab.commands && (
                    <div className="lab-terminal-box">
                      <div className="terminal-header">
                        <span>Azure CLI / PowerShell Command Script</span>
                        <button
                          className="copy-cmd-btn"
                          onClick={() => handleCopy(activeLab.commands)}
                        >
                          {copiedCode ? " Copied!" : " Copy Commands"}
                        </button>
                      </div>
                      <pre className="terminal-code">
                        <code>{activeLab.commands}</code>
                      </pre>
                    </div>
                  )}

                  <div className="lab-verification-box">
                    <h4> Knowledge Verification</h4>
                    <p className="verification-q">
                      <strong>Question:</strong> {activeLab.question}
                    </p>
                    <button
                      className="solution-toggle-btn"
                      onClick={() => toggleSolution(activeLab.id)}
                    >
                      {revealedSolutions[activeLab.id] ? "Hide Answer ▲" : "Reveal Answer & Architectural Explanation ▼"}
                    </button>

                    {revealedSolutions[activeLab.id] && (
                      <div className="revealed-solution">
                        <strong> Solution & Best Practice:</strong>
                        <p>{activeLab.solution}</p>
                      </div>
                    )}
                  </div>
                </main>
              </div>
            </section>
          )}

          
          {activeTab === "comparisons" && (
            <section className="az-tab-content-panel">
              <div className="comparisons-filter-bar">
                <div className="comp-category-filters">
                  {["all", "Cloud Concepts", "Architecture", "Compute", "Storage", "Databases", "Identity", "Governance", "Networking", "Monitoring"].map((cat) => (
                    <button
                      key={cat}
                      className={`cat-filter-pill ${compCategory.toLowerCase() === cat.toLowerCase() ? "active" : ""}`}
                      onClick={() => setCompCategory(cat)}
                    >
                      {cat === "all" ? "All 22 Comparisons" : cat}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  placeholder="Search comparisons (e.g., LRS vs ZRS, CapEx vs OpEx)..."
                  value={compSearch}
                  onChange={(e) => setCompSearch(e.target.value)}
                  className="comp-search-input"
                />
              </div>

              <div className="comparisons-cards-grid">
                {filteredComparisons.map((comp) => (
                  <div key={comp.id} className="comp-battlecard">
                    <div className="comp-card-header">
                      <span className="comp-cat-tag">{comp.category}</span>
                      <h3>{comp.title}</h3>
                      <p className="comp-summary">{comp.summary}</p>
                    </div>

                    <div className="comp-table-wrapper">
                      <table className="comp-matrix-table">
                        <thead>
                          <tr>
                            <th>Evaluation Aspect</th>
                            <th>Option A</th>
                            <th>Option B</th>
                            <th>Strategic Context</th>
                          </tr>
                        </thead>
                        <tbody>
                          {comp.items.map((row, rIdx) => (
                            <tr key={rIdx}>
                              <td className="aspect-cell"><strong>{row.aspect}</strong></td>
                              <td className="iaas-cell">{row.iaas}</td>
                              <td className="paas-cell">{row.paas}</td>
                              <td className="saas-cell">{row.saas}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          
          {activeTab === "scenarios" && (
            <section className="az-tab-content-panel">
              <div className="scenario-trainer-container">
                <div className="scenario-top-header">
                  <div>
                    <span className="scenario-badge"> MODULE 21: SCENARIO-BASED LEARNING</span>
                    <h2>Architectural Decision Trainer</h2>
                    <p>
                      Rather than memorizing definitions, practice evaluating real-world business constraints
                      and choosing the exact Azure service.
                    </p>
                  </div>

                  <div className="scenario-stepper">
                    <span>Scenario {currentScenarioIdx + 1} of {scenarioQuestions.length}</span>
                    <div className="scenario-dots">
                      {scenarioQuestions.map((_, idx) => (
                        <span
                          key={idx}
                          className={`scenario-dot ${idx === currentScenarioIdx ? "active" : scenarioAnswers[scenarioQuestions[idx].id] ? "answered" : ""}`}
                          onClick={() => {
                            setCurrentScenarioIdx(idx);
                            setShowScenarioExplanation(false);
                          }}
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="scenario-card-main">
                  <div className="scenario-prompt-box">
                    <strong> Business Scenario:</strong>
                    <p>{currentScenario.scenario}</p>
                  </div>

                  <h3 className="scenario-question-title">{currentScenario.question}</h3>

                  <div className="scenario-options-stack">
                    {currentScenario.options.map((opt) => {
                      const isSelected = selectedScenarioOpt === opt.id;
                      let optClass = "scenario-opt-btn";
                      if (showScenarioExplanation) {
                        if (opt.correct) optClass += " opt-correct";
                        else if (isSelected && !opt.correct) optClass += " opt-wrong";
                      } else if (isSelected) {
                        optClass += " opt-selected";
                      }

                      return (
                        <button
                          key={opt.id}
                          className={optClass}
                          onClick={() => handleSelectScenarioOpt(opt.id)}
                        >
                          <span className="opt-letter">{opt.id}</span>
                          <div className="opt-content">
                            <span className="opt-text">{opt.text}</span>
                            {showScenarioExplanation && (
                              <small className="opt-rationale">{opt.explanation}</small>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {showScenarioExplanation && (
                    <div className="scenario-next-bar">
                      <button className="scenario-next-btn" onClick={handleNextScenario}>
                        {currentScenarioIdx < scenarioQuestions.length - 1 ? "Next Scenario →" : "Restart Scenario Trainer "}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          
          {activeTab === "services" && (
            <section className="az-tab-content-panel">
              <div className="services-catalog-header">
                <div>
                  <span className="catalog-eyebrow"> MODULE 20: AZURE SERVICE CATEGORIES</span>
                  <h2>Comprehensive Azure Service Directory</h2>
                </div>

                <div className="catalog-search-row">
                  <div className="cat-buttons">
                    {["all", "Compute", "Networking", "Storage", "Databases", "Identity & Security", "Management & Governance", "Monitoring & Optimization"].map((cat) => (
                      <button
                        key={cat}
                        className={`cat-btn ${activeServiceCat.toLowerCase() === cat.toLowerCase() ? "active" : ""}`}
                        onClick={() => setActiveServiceCat(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Search all Azure services..."
                    value={serviceSearch}
                    onChange={(e) => setServiceSearch(e.target.value)}
                    className="service-search-field"
                  />
                </div>
              </div>

              <div className="service-category-groups">
                {filteredServiceCats.map((cat, idx) => (
                  <div key={idx} className="service-cat-section">
                    <div className="service-cat-heading">
                      <span className="service-cat-icon">{cat.icon}</span>
                      <div>
                        <h3>{cat.category}</h3>
                        <p>{cat.description}</p>
                      </div>
                    </div>

                    <div className="service-cards-grid">
                      {cat.services.map((svc, sIdx) => (
                        <div key={sIdx} className="service-ref-card">
                          <div className="svc-card-top">
                            <strong>{svc.name}</strong>
                            <span className="svc-type-pill">{svc.type}</span>
                          </div>
                          <p>{svc.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          
          {activeTab === "exams" && (
            <section className="az-tab-content-panel">
              
              <div className="exam-section-block">
                <div className="section-title">
                  <div>
                    <span>MODULE 26: OFFICIAL DOMAIN TESTS</span>
                    <h2>Weight-Calibrated Domain Assessments</h2>
                  </div>
                  <p>
                    Target your weaknesses with tests tailored to Microsoft's official AZ-900 domain weightings.
                  </p>
                </div>

                <div className="domain-tests-grid">
                  {domainTests.map((dt) => (
                    <div key={dt.id} className="domain-test-card">
                      <div className="dt-card-header">
                        <span className="dt-weight-pill">{dt.weight} Weighting</span>
                        <span className="dt-dur">⏱️ {dt.duration}</span>
                      </div>
                      <h3>{dt.title}</h3>
                      <p>{dt.description}</p>
                      <div className="dt-meta-row">
                        <span> {dt.questionCount} Questions</span>
                        <button
                          className="dt-launch-btn"
                          onClick={() => openPracticeModal("quickQuiz", "azure")}
                        >
                          Start Domain Test →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
              <div className="exam-section-block">
                <div className="section-title">
                  <div>
                    <span>MODULE 27: FULL PRACTICE EXAM SUITE</span>
                    <h2>Timed Exam Simulators (50–65 Questions)</h2>
                  </div>
                  <p>
                    Simulate the actual Pearson VUE testing environment with 700 passing thresholds and detailed explanations.
                  </p>
                </div>

                <div className="practice-exams-grid">
                  {practiceExams.map((exam) => (
                    <div key={exam.id} className={`practice-exam-card ${exam.id === "mock-final" ? "final-mock-card" : ""}`}>
                      <div className="pe-card-badge">
                        {exam.id === "mock-final" ? " FULL CERTIFICATION SIMULATOR" : "⏱️ PRACTICE EXAM"}
                      </div>
                      <h3>{exam.title}</h3>
                      <div className="pe-stats-row">
                        <span><strong>{exam.questionCount}</strong> Questions</span>
                        <span><strong>{exam.duration}</strong> Timed</span>
                        <span><strong>{exam.passingScore}%</strong> Passing Score</span>
                      </div>
                      <button
                        className="pe-launch-btn"
                        onClick={() => openPracticeModal("mockExam", "azure")}
                      >
                        Launch Simulator →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          
          {activeTab === "readiness" && (
            <section className="az-tab-content-panel">
              <div className="readiness-dashboard-container">
                <div className="rd-header-card">
                  <div>
                    <span className="rd-badge">MODULE 28: EXAM READINESS</span>
                    <h2>Diagnostic Domain Readiness Matrix</h2>
                    <p>Track your score benchmarks across each technical domain to pinpoint weak areas.</p>
                  </div>

                  <div className="overall-readiness-meter">
                    <span>Overall Readiness</span>
                    <div className="meter-bar">
                      <div style={{ width: `${currentProgress}%` }}></div>
                    </div>
                    <strong>{currentProgress}% / 100%</strong>
                  </div>
                </div>

                
                <div className="weak-area-alert">
                  <div className="wa-icon"></div>
                  <div className="wa-body">
                    <h4>Identified Weakest Area: Azure Governance & Compliance (72% Benchmark)</h4>
                    <p>
                      Candidates frequently miss questions regarding <strong>Azure Policy vs RBAC</strong> and
                      <strong>Resource Locks</strong>. We recommend reviewing Lessons 23 and 26.
                    </p>
                    <div className="wa-links">
                      <Link to="/certifications/azure/az-900/lesson/23" className="wa-link-btn">
                        Review Lesson 23: RBAC Scopes →
                      </Link>
                      <Link to="/certifications/azure/az-900/lesson/26" className="wa-link-btn">
                        Review Lesson 26: Azure Policy & Locks →
                      </Link>
                    </div>
                  </div>
                </div>

                
                <div className="readiness-areas-grid">
                  {examReadinessAreas.map((area) => (
                    <div key={area.id} className="readiness-area-card">
                      <div className="rac-header">
                        <strong>{area.name}</strong>
                        <span className="rac-weight">{area.officialWeight}</span>
                      </div>
                      <div className="rac-score-row">
                        <span>Readiness Benchmark:</span>
                        <strong className={area.benchmark >= 80 ? "score-good" : "score-warn"}>
                          {area.benchmark}%
                        </strong>
                      </div>
                      <div className="rac-bar-track">
                        <div
                          className={`rac-bar-fill ${area.benchmark >= 80 ? "fill-good" : "fill-warn"}`}
                          style={{ width: `${area.benchmark}%` }}
                        ></div>
                      </div>
                      <div className="rac-lessons-list">
                        <small>Associated Lessons: {area.lessonIds.join(", ")}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          
          {activeTab === "studyplans" && (
            <section className="az-tab-content-panel">
              <div className="section-title">
                <div>
                  <span>MODULE 29: FINAL REVISION & STUDY PLANS</span>
                  <h2>Structured Study Schedules</h2>
                </div>
                <p>
                  Whether you have 30 minutes, 1 day, or 2 weeks, follow a calibrated study blueprint.
                </p>
              </div>

              <div className="study-plans-grid">
                {studyPlans.map((plan) => (
                  <div key={plan.id} className="study-plan-card">
                    <div className="sp-card-top">
                      <span className="sp-badge">SCHEDULE</span>
                      <h3>{plan.name}</h3>
                    </div>
                    <p className="sp-target"><strong>Ideal For:</strong> {plan.target}</p>
                    <p className="sp-focus"><strong>Key Focus:</strong> {plan.focus}</p>
                    <div className="sp-items-box">
                      <strong>Checklist:</strong>
                      <ul>
                        {plan.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          
          {activeTab === "cheatsheet" && (
            <section className="az-tab-content-panel">
              <div className="cheatsheet-header">
                <div>
                  <span className="cs-eyebrow">MODULE 30: AZ-900 MASTER CHEAT SHEET</span>
                  <h2>High-Yield Exam Cram Reference</h2>
                </div>
                <input
                  type="text"
                  placeholder="Search acronyms or rules (e.g. SLA, LRS, RBAC)..."
                  value={cheatSearch}
                  onChange={(e) => setCheatSearch(e.target.value)}
                  className="cs-search-input"
                />
              </div>

              
              <div className="cs-rules-section">
                <h3> High-Yield Rules of Thumb</h3>
                <div className="cs-rules-grid">
                  {masterCheatSheet.rulesOfThumb.map((rule, idx) => (
                    <div key={idx} className="cs-rule-card">
                      <strong>{rule.title}</strong>
                      <p>{rule.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              
              <div className="cs-acronyms-section">
                <h3> Essential Azure Acronyms Glossary</h3>
                <div className="cs-acronyms-grid">
                  {filteredAcronyms.map((ac, idx) => (
                    <div key={idx} className="cs-acronym-card">
                      <span className="ac-code">{ac.code}</span>
                      <strong className="ac-term">{ac.term}</strong>
                      <p className="ac-meaning">{ac.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          
          {activeTab === "roadmap" && (
            <section className="az-tab-content-panel">
              <div className="career-roadmap-header">
                <span className="crm-badge">MODULE 31: POST-AZ-900 CAREER PATHWAYS</span>
                <h2>Where to Go After AZ-900</h2>
                <p>{careerRoadmap.description}</p>
              </div>

              <div className="career-paths-grid">
                {careerRoadmap.paths.map((path, idx) => (
                  <div key={idx} className="career-path-card">
                    <div className="cpc-header">
                      <span className="cpc-badge">{path.badge}</span>
                      <strong className="cpc-code">{path.certCode}</strong>
                    </div>
                    <h3>{path.title}</h3>
                    <p className="cpc-focus">{path.focus}</p>
                    {path.prerequisite && (
                      <div className="cpc-prereq"> {path.prerequisite}</div>
                    )}
                    <div className="cpc-audience">
                      <small>Recommended for: {path.recommendedFor}</small>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          
          <RelatedCertifications currentProvider="azure" />
        </div>
      </div>
    </div>
  );
}

export default AzureFundamentals;