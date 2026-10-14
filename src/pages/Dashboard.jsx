import { useState } from "react";
import { Link } from "react-router-dom";
import CourseSidebar from "../components/CourseSidebar";
import UserProfile from "../components/UserProfile";
import { useLearning } from "../context/LearningContext";
import SEO from "../components/SEO";
import "./Dashboard.css";

function Dashboard() {
  const {
    state,
    getOverallStats,
    getProviderProgress,
    toggleTask,
    openPracticeModal
  } = useLearning();

  const stats = getOverallStats();
  const [activeTab, setActiveTab] = useState("overview");

  const learningPaths = [
    {
      id: "aws",
      title: "AWS Cloud Practitioner",
      shortCode: "CLF-C02",
      totalLessons: 20,
      nextTopic: "Global Infrastructure & S3",
      path: "/certifications/aws/cloud-practitioner",
      accent: "gold"
    },
    {
      id: "aws-saa",
      title: "AWS Solutions Architect",
      shortCode: "SAA-C03",
      totalLessons: 16,
      nextTopic: "Multi-Tier VPC & Auto Scaling",
      path: "/certifications/aws/solutions-architect",
      accent: "gold"
    },
    {
      id: "azure",
      title: "Microsoft Azure Fundamentals",
      shortCode: "AZ-900",
      totalLessons: 32,
      nextTopic: "Core Services & Virtual Networks",
      path: "/certifications/azure/az-900",
      accent: "blue"
    },
    {
      id: "google",
      title: "Google Cloud Fundamentals",
      shortCode: "GCP",
      totalLessons: 32,
      nextTopic: "IAM Roles & Cloud BigQuery",
      path: "/certifications/google/cloud-fundamentals",
      accent: "indigo"
    },
    {
      id: "kubernetes",
      title: "Kubernetes Fundamentals",
      shortCode: "CKA/CKAD",
      totalLessons: 16,
      nextTopic: "Pods, Deployments & Services",
      path: "/certifications/kubernetes/fundamentals",
      accent: "cyan"
    },
    {
      id: "cisco",
      title: "Cisco Networking",
      shortCode: "CCNA",
      totalLessons: 16,
      nextTopic: "IP Subnetting & OSPF Routing",
      path: "/certifications/cisco/networking",
      accent: "emerald"
    },
    {
      id: "comptia",
      title: "CompTIA IT Fundamentals",
      shortCode: "ITF+",
      totalLessons: 16,
      nextTopic: "Hardware, OS & Cybersecurity",
      path: "/certifications/comptia/fundamentals",
      accent: "orange"
    }
  ];

  const dailyTasks = [
    "Review IAM fundamentals & least privilege",
    "Complete short quiz: Subnetting & CIDR notation",
    "Inspect Kubernetes Deployment & Service YAML manifests",
    "Practice 10 flashcards on Cloud Storage classes"
  ];

  const achievements = [
    { title: "Cloud Explorer", icon: "", desc: "Completed 10+ cloud lessons", unlocked: stats.totalCompletedLessons >= 10 },
    { title: "Streak Champion", icon: "", desc: "Maintained 7-day study streak", unlocked: stats.streakDays >= 7 },
    { title: "Quiz Master", icon: "", desc: "Achieved 90%+ accuracy", unlocked: stats.accuracyPercentage >= 90 },
    { title: "Exam Ready", icon: "", desc: "Completed a full Mock Exam", unlocked: stats.examsTaken >= 1 }
  ];

  return (
    <div className="dashboard-layout">
      <SEO
        title="Learning Dashboard"
        description="Your personalized Athencert learning dashboard, active courses, daily study streak, and practice quiz analytics."
        robots="noindex, nofollow"
        canonicalPath="/dashboard"
      />
      <CourseSidebar />

      <div className="dashboard-page">
        <aside className="dashboard-sidebar">
          <UserProfile />

          <nav className="dashboard-nav" aria-label="Sidebar navigation">
            <button
              className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
               Overview
            </button>
            <button
              className={`nav-item ${activeTab === "paths" ? "active" : ""}`}
              onClick={() => setActiveTab("paths")}
            >
               My Courses
            </button>
            <button
              className={`nav-item ${activeTab === "practice" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("practice");
                document.getElementById("practice-arena")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center"
                });
              }}
              aria-controls="practice-arena"
            >
               Practice Hub
            </button>
            <button
              className={`nav-item ${activeTab === "achievements" ? "active" : ""}`}
              onClick={() => setActiveTab("achievements")}
            >
               Achievements
            </button>
          </nav>

          <div className="sidebar-card">
            <small>TODAY'S TARGET</small>
            <h3>Daily Focus</h3>
            <p>Complete 2 lessons and run a 5-question Quick Quiz to keep your streak active.</p>
            <button
              className="quick-launch-quiz-btn"
              onClick={() => openPracticeModal("quickQuiz", "aws")}
            >
               Launch Quick Quiz
            </button>
          </div>
        </aside>

        <main className="dashboard-main">
          <header className="dashboard-header">
            <div>
              <p className="dashboard-kicker">Welcome back, Cloud Architect </p>
              <h1>Learning Dashboard</h1>
            </div>

            <div className="header-right-tools">
              <button
                className="dashboard-search-trigger"
                onClick={() => openPracticeModal("search")}
              >
                <span> Search all lessons (Ctrl+K)</span>
              </button>
              <Link to="/" className="dashboard-back-link">
                Home ↗
              </Link>
            </div>
          </header>

          
          <section className="stats-grid" aria-label="Learning statistics">
            <article className="stat-card blue">
              <div className="stat-header">
                <span>Learning streak</span>
                <span className="stat-icon"></span>
              </div>
              <strong>{stats.streakDays} Days</strong>
              <small className="stat-sub">Consistent daily progress</small>
            </article>

            <article className="stat-card purple">
              <div className="stat-header">
                <span>Lessons Completed</span>
                <span className="stat-icon"></span>
              </div>
              <strong>{stats.totalCompletedLessons}</strong>
              <small className="stat-sub">Across 6 active certifications</small>
            </article>

            <article className="stat-card green">
              <div className="stat-header">
                <span>Quiz Accuracy</span>
                <span className="stat-icon"></span>
              </div>
              <strong>{stats.accuracyPercentage}%</strong>
              <small className="stat-sub">{stats.quizzesTaken} assessments logged</small>
            </article>

            <article className="stat-card gold">
              <div className="stat-header">
                <span>Active Certifications</span>
                <span className="stat-icon"></span>
              </div>
              <strong>6 Tracks</strong>
              <small className="stat-sub">AWS, Azure, GCP, Cisco & more</small>
            </article>
          </section>

          
          {state.lastActiveLesson && (
            <section className="resume-hero-banner">
              <div className="resume-content">
                <div className="resume-badge">
                  <span className="live-dot"></span> CONTINUE LEARNING
                </div>
                <h2>{state.lastActiveLesson.title}</h2>
                <p>
                  Pick up right where you left off in{" "}
                  <strong>{state.lastActiveLesson.category}</strong>.
                </p>
              </div>

              <Link
                to={state.lastActiveLesson.path || "/certifications/aws/cloud-practitioner/lesson/1"}
                className="resume-cta-btn"
              >
                Resume Lesson →
              </Link>
            </section>
          )}

          
          <section className="dashboard-panels">
            
            <div className="panel large-panel">
              <div className="panel-header">
                <h2>Active Certification Pathways</h2>
                <Link to="/#certifications">View all paths →</Link>
              </div>

              <div className="path-list">
                {learningPaths.map((path) => {
                  const progressInfo = getProviderProgress(path.id, path.totalLessons);

                  return (
                    <div key={path.id} className="path-item">
                      <div className="path-head">
                        <div>
                          <div className="path-title-row">
                            <h3>{path.title}</h3>
                            <span className="path-code-tag">{path.shortCode}</span>
                          </div>
                          <p className="path-lessons-count">
                            {progressInfo.completedCount} of {path.totalLessons} lessons completed
                          </p>
                        </div>
                        <span className="path-pct-badge">{progressInfo.percentage}%</span>
                      </div>

                      <div className="mini-progress">
                        <span style={{ width: `${progressInfo.percentage}%` }}></span>
                      </div>

                      <div className="path-item-footer">
                        <div className="path-footer-left">
                          <small>Up Next</small>
                          <strong>{path.nextTopic}</strong>
                        </div>

                        <div className="path-actions-group">
                          <button
                            className="path-quick-quiz-btn"
                            onClick={() => openPracticeModal("quickQuiz", path.id)}
                            title="Quick Quiz"
                          >
                             Quiz
                          </button>
                          <Link to={path.path} className="path-continue-link">
                            Study Path →
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            
            <div className="panel side-panel">
              <div className="panel-header">
                <h2>Daily Goals</h2>
                <span className="tasks-count-pill">
                  {state.completedTasks.length} / {dailyTasks.length}
                </span>
              </div>

              <ul className="task-list">
                {dailyTasks.map((task) => {
                  const isDone = state.completedTasks.includes(task);

                  return (
                    <li
                      key={task}
                      className={`task-item ${isDone ? "task-done" : ""}`}
                      onClick={() => toggleTask(task)}
                    >
                      <span className="task-checkbox">{isDone ? "" : ""}</span>
                      <span className="task-text">{task}</span>
                    </li>
                  );
                })}
              </ul>

              
              <div className="quiz-box dashboard-practice-box" id="practice-arena">
                <small>TEST YOUR KNOWLEDGE</small>
                <h3>Practice & Simulation</h3>
                <p>Launch an instant assessment or exam simulation for any certification.</p>
                <div className="dashboard-practice-buttons">
                  <button
                    type="button"
                    className="dash-quiz-btn"
                    onClick={() => openPracticeModal("quickQuiz", "aws")}
                  >
                     Quick Quiz
                  </button>
                  <button
                    type="button"
                    className="dash-fc-btn"
                    onClick={() => openPracticeModal("flashcards", "aws")}
                  >
                     Flashcards
                  </button>
                  <button
                    type="button"
                    className="dash-exam-btn"
                    onClick={() => openPracticeModal("mockExam", "aws")}
                  >
                    ⏱️ Mock Exam
                  </button>
                </div>
              </div>

              
              <div className="achievements-box">
                <h4>Recent Milestones</h4>
                <div className="badges-row">
                  {achievements.map((a) => (
                    <div
                      key={a.title}
                      className={`badge-chip ${a.unlocked ? "unlocked" : "locked"}`}
                      title={`${a.title}: ${a.desc}`}
                    >
                      <span>{a.icon}</span>
                      <small>{a.title}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
