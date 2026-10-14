import { useState } from "react";
import { Link } from "react-router-dom";
import { useLearning } from "./context/LearningContext";
import CertPathNavigator from "./components/CertPathNavigator";
import SEO from "./components/SEO";
import {
  getWebsiteSchema,
  getOrganizationSchema,
  getFAQSchema
} from "./utils/structuredData";
import "./App.css";

const faqs = [
  {
    question: "How does Athencert prepare candidates for AWS, Azure, and Google Cloud exams?",
    answer:
      "Athencert provides structured, bite-sized learning tracks mapped to the official certification blueprints (such as AWS CLF-C02, Azure AZ-900, and Google Cloud Digital Leader). Each track combines concise core concept lessons, interactive flashcards for spaced repetition recall, and full-length timed mock exams with domain breakdowns."
  },
  {
    question: "Are the practice quizzes and mock exams timed like real certification tests?",
    answer:
      "Yes. Athencert features 5-question quick quizzes for immediate knowledge checks and full-scale timed mock exams configured with authentic time limits, question counts, and passing score thresholds (e.g., 65 questions in 90 minutes with 70% passing grade for AWS CLF-C02)."
  },
  {
    question: "What hands-on interactive labs are included in Athencert?",
    answer:
      "Athencert offers practical scenario labs including AWS IAM JSON least-privilege policy analyzers, Cisco VLSM IP subnetting calculators, Azure RBAC role assignment simulators, and Kubernetes YAML manifest validators."
  },
  {
    question: "Is Athencert suitable for complete beginners in cloud and networking?",
    answer:
      "Absolutely. Athencert covers foundational certifications like AWS Cloud Practitioner, Azure Fundamentals (AZ-900), and CompTIA ITF+/A+ designed specifically for beginners with no prior cloud or IT experience, before progressing into associate tracks like CCNA and Kubernetes CKA."
  },
  {
    question: "How does Athencert track study streaks and learning progress?",
    answer:
      "Athencert automatically saves your completed lessons, quiz scores, bookmarked cards, and daily streak progress in your browser. You can seamlessly resume your active lesson anytime directly from the dashboard."
  }
];

function Home() {
  const { state, getProviderProgress, openPracticeModal } = useLearning();

  const [previewAnswer, setPreviewAnswer] = useState(null);

  const certifications = [
    {
      id: "aws",
      icon: "",
      code: "AWS",
      title: "Amazon Web Services",
      subtitle: "AWS Cloud Practitioner (CLF-C02)",
      level: "Foundational",
      lessonsCount: 20,
      description: "Cloud computing concepts, AWS global infrastructure, IAM security, EC2, S3, and pricing models.",
      link: "/certifications/aws/cloud-practitioner",
      accent: "gold"
    },
    {
      id: "aws-saa",
      icon: "",
      code: "SAA",
      title: "AWS Solutions Architect",
      subtitle: "Solutions Architect – Associate (SAA-C03)",
      level: "Associate",
      lessonsCount: 16,
      description: "Multi-tier VPCs, Auto Scaling, Aurora & RDS, SQS/SNS decoupling, KMS, and disaster recovery.",
      link: "/certifications/aws/solutions-architect",
      accent: "gold"
    },
    {
      id: "azure",
      icon: "",
      code: "AZ",
      title: "Microsoft Azure",
      subtitle: "Azure Fundamentals (AZ-900)",
      level: "Foundational",
      lessonsCount: 20,
      description: "Azure architecture, virtual machines, storage redundancy, Entra ID, governance, and SLAs.",
      link: "/certifications/azure/az-900",
      accent: "blue"
    },
    {
      id: "google",
      icon: "",
      code: "GCP",
      title: "Google Cloud",
      subtitle: "Cloud Digital Leader (CDL)",
      level: "Foundational",
      lessonsCount: 20,
      description: "GCP architecture, BigQuery data warehousing, Cloud Run containers, IAM, and security governance.",
      link: "/certifications/google/cloud-fundamentals",
      accent: "indigo"
    },
    {
      id: "kubernetes",
      icon: "",
      code: "K8S",
      title: "Kubernetes & Cloud Native",
      subtitle: "CKA / CKAD Fundamentals",
      level: "Associate",
      lessonsCount: 16,
      description: "Containerization, Pods, Deployments, ClusterIP Services, Ingress, PV/PVC, and HPA autoscaling.",
      link: "/certifications/kubernetes/fundamentals",
      accent: "cyan"
    },
    {
      id: "cisco",
      icon: "",
      code: "CCNA",
      title: "Cisco Networking",
      subtitle: "CCNA (200-301) Fundamentals",
      level: "Associate",
      lessonsCount: 16,
      description: "OSI 7 layers, IPv4/IPv6 subnetting, VLANs, OSPF dynamic routing, ACLs, NAT, and CLI diagnostics.",
      link: "/certifications/cisco/networking",
      accent: "emerald"
    },
    {
      id: "comptia",
      icon: "",
      code: "ITF+",
      title: "CompTIA IT Foundations",
      subtitle: "CompTIA ITF+ & A+",
      level: "Foundational",
      lessonsCount: 16,
      description: "Hardware architectures, operating systems, cybersecurity, databases, and 6-step troubleshooting.",
      link: "/certifications/comptia/fundamentals",
      accent: "orange"
    }
  ];

  const awsProgress = getProviderProgress("aws", 20);

  const homeStructuredData = [
    getWebsiteSchema(),
    getOrganizationSchema(),
    getFAQSchema(faqs)
  ];

  return (
    <div className="app">
      <SEO
        title="Athencert — Modern Tech Certification Learning Platform"
        description="Master AWS, Azure, Google Cloud, Cisco CCNA, CompTIA, and Kubernetes CKA certifications through bite-sized lessons, spaced flashcards, scenario labs, and timed mock exams."
        keywords={[
          "AWS Cloud Practitioner",
          "CLF-C02",
          "Azure Fundamentals",
          "AZ-900",
          "Google Cloud Digital Leader",
          "Cisco CCNA 200-301",
          "CompTIA ITF+",
          "CompTIA A+",
          "Kubernetes CKA",
          "tech certification study",
          "cloud computing mock exams",
          "interactive IT flashcards"
        ]}
        canonicalPath="/"
        structuredData={homeStructuredData}
      />

      
      <nav className="navbar" aria-label="Main Navigation">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo" aria-label="Athencert Home">
              <span className="logo-symbol" aria-hidden="true"></span>
              Athen<span>cert</span>
            </Link>

            <div className="nav-links">
              <a href="#certifications">Certifications</a>
              <a href="#features">Platform Features</a>
              <a href="#faq">FAQ</a>
              <a href="#preview">Interactive Demo</a>
              <Link to="/certifications/aws">Roadmaps</Link>
            </div>
          </div>

          <div className="nav-actions">
            <button
              className="nav-search-btn"
              onClick={() => openPracticeModal("search")}
              title="Search all lessons (Ctrl+K)"
              aria-label="Search lessons across all certifications"
            >
              <span className="search-icon" aria-hidden="true"></span>
              <span className="search-placeholder">Quick search...</span>
              <kbd>Ctrl+K</kbd>
            </button>

            <button
              className="nav-btn-secondary"
              onClick={() => openPracticeModal("certLab")}
              title="In-Browser Cloud Console & CLI (Ctrl+L)"
            >
               Console
            </button>

            <button
              className="nav-btn-secondary"
              onClick={() => openPracticeModal("cheatSheet")}
              title="Ports & Cheat Sheets (Ctrl+J)"
            >
               Cheat Sheets
            </button>

            <button
              className="nav-btn-secondary nav-btn-mock-exam"
              onClick={() => openPracticeModal("mockExam", "aws")}
              title="Official Timed Certification Mock Exam (Ctrl+M)"
            >
              ⏱️ Mock Exam
            </button>

            <Link to="/dashboard" className="login-btn dashboard-link-btn">
              Dashboard
            </Link>

            <Link to="/certifications/aws/cloud-practitioner" className="signup-btn">
              Start Learning →
            </Link>
          </div>
        </div>
      </nav>

      
      <CertPathNavigator activeProvider="aws" />

      
      <main id="main-content">
        
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="dot" aria-hidden="true"></span>
              Modern Tech Certification Mastery
            </div>

            <h1 id="hero-heading">
              Learn today.
              <br />
              <span className="hero-highlight-text">Certify tomorrow.</span>
            </h1>

            <p className="hero-description">
              Master the exact skills required for industry-leading AWS, Azure, Google Cloud, Cisco,
              and Kubernetes certifications through bite-sized lessons, spaced-repetition flashcards,
              hands-on cloud terminals, and full timed mock exams.
            </p>

            <div className="hero-buttons">
              <a href="#certifications" className="primary-btn">
                Explore 7 Pathways →
              </a>

              <button
                className="secondary-btn hero-mock-exam-btn"
                onClick={() => openPracticeModal("mockExam", "aws")}
                title="Launch Timed Mock Exam Engine (Ctrl+M)"
              >
                ⏱️ Timed Mock Exam (Ctrl+M)
              </button>

              <button
                className="secondary-btn console-hero-btn"
                onClick={() => openPracticeModal("certLab", "aws")}
              >
                 Cloud Console
              </button>

              <button
                className="secondary-btn"
                onClick={() => openPracticeModal("cheatSheet")}
              >
                 Cheat Sheets
              </button>
            </div>

            <div className="hero-trust-row">
              <div className="trust-item">
                <strong>124+</strong>
                <span>Curated Lessons</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <strong>100%</strong>
                <span>Interactive Practice</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <strong>7</strong>
                <span>Industry Tracks</span>
              </div>
            </div>
          </div>

          
          <div className="hero-card">
            <div className="card-header">
              <div>
                <small className="card-kicker">YOUR LEARNING PATH</small>
                <h3>AWS Cloud Practitioner</h3>
              </div>

              <div className="progress-circle">{awsProgress.percentage}%</div>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${awsProgress.percentage}%` }}
              ></div>
            </div>

            <div className="card-stats">
              <div>
                <strong>{awsProgress.completedCount} / 18</strong>
                <span>Lessons Done</span>
              </div>

              <div>
                <strong>{awsProgress.completedCount * 4}</strong>
                <span>Questions</span>
              </div>

              <div>
                <strong>{state.streakDays} Days</strong>
                <span>Study Streak</span>
              </div>
            </div>

            <Link
              to={state.lastActiveLesson?.path || "/certifications/aws/cloud-practitioner/lesson/8"}
              className="next-lesson-link"
            >
              <div className="lesson-icon">→</div>
              <div>
                <small>CONTINUE WHERE YOU LEFT OFF</small>
                <p>{state.lastActiveLesson?.title || "AWS Global Infrastructure"}</p>
              </div>
            </Link>
          </div>
        </section>

        
        <section className="certifications" id="certifications" aria-labelledby="certifications-heading">
          <div className="section-heading">
            <div>
              <span className="section-pill">CERTIFICATION MATRIX</span>
              <h2 id="certifications-heading">What do you want to become certified in?</h2>
            </div>

            <p>
              Structured, step-by-step learning paths covering core architecture, hands-on CLI
              scenarios, and real-world exam requirements.
            </p>
          </div>

          <div className="cert-grid">
            {certifications.map((cert) => {
              const progress = getProviderProgress(cert.id, cert.lessonsCount);

              return (
                <article key={cert.id} className={`cert-card card-${cert.accent}`}>
                  <div className="cert-card-top-row">
                    <div className="cert-icon-wrapper">
                      <span className="cert-icon" aria-hidden="true">{cert.icon}</span>
                      <span className="cert-code-badge">{cert.code}</span>
                    </div>

                    <span className="cert-level-badge">{cert.level}</span>
                  </div>

                  <h3 className="cert-title">{cert.title}</h3>
                  <h4 className="cert-subtitle">{cert.subtitle}</h4>

                  <p className="cert-desc">{cert.description}</p>

                  <div className="cert-card-progress">
                    <div className="cert-prog-header">
                      <span>{progress.completedCount} of {cert.lessonsCount} lessons</span>
                      <strong>{progress.percentage}%</strong>
                    </div>
                    <div className="cert-mini-track">
                      <div
                        className="cert-mini-fill"
                        style={{ width: `${progress.percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="cert-card-actions">
                    <Link to={cert.link} className="cert-start-btn">
                      Start track →
                    </Link>
                    <button
                      className="cert-mock-exam-btn"
                      onClick={() => openPracticeModal("mockExam", cert.id)}
                      title={`Launch Timed Mock Exam for ${cert.title} (Ctrl+M)`}
                      aria-label={`Take timed mock exam for ${cert.title}`}
                    >
                      ⏱️ Mock Exam
                    </button>
                    <button
                      className="cert-quiz-quick-btn"
                      onClick={() => openPracticeModal("quickQuiz", cert.id)}
                      title={`Quick Quiz for ${cert.title}`}
                      aria-label={`Take quick quiz for ${cert.title}`}
                    >
                       Quiz
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        
        <section className="mock-exam-spotlight-section" id="mock-exams" aria-labelledby="mock-exam-heading">
          <div className="spotlight-card">
            <div className="spotlight-header">
              <div className="spotlight-pill">
                <span className="live-dot" aria-hidden="true"></span>
                OFFICIAL EXAM SIMULATOR • FULL-LENGTH TESTS (CTRL+M)
              </div>
              <h2 id="mock-exam-heading">Full-Scale Timed Mock Exam Engine</h2>
              <p>
                Experience real-world proctored certification testing with active timers, question flagging,
                official passing scores, and domain-by-domain diagnostic feedback.
              </p>
            </div>

            <div className="spotlight-features-row">
              <div className="spotlight-feature">
                <span className="feature-metric">90 / 45 Min</span>
                <strong>⏱️ Timed Countdown</strong>
                <span>Calibrated strictly to official vendor time limits</span>
              </div>
              <div className="spotlight-feature">
                <span className="feature-metric">50–65 Qs</span>
                <strong> Question Navigator</strong>
                <span>Flag items for review and skip freely between questions</span>
              </div>
              <div className="spotlight-feature">
                <span className="feature-metric">70% Pass</span>
                <strong> Passing Criteria</strong>
                <span>Industry-standard scoring matched to real exam benchmarks</span>
              </div>
              <div className="spotlight-feature">
                <span className="feature-metric">Analytics</span>
                <strong> Domain Breakdowns</strong>
                <span>Pinpoint exact domains that require additional revision</span>
              </div>
            </div>

            <div className="spotlight-tracks-grid">
              {certifications.map((cert) => (
                <div key={cert.id} className="mock-exam-track-card">
                  <div className="track-card-top">
                    <span className="track-icon" aria-hidden="true">{cert.icon}</span>
                    <div>
                      <h4>{cert.title}</h4>
                      <small>{cert.subtitle}</small>
                    </div>
                  </div>
                  <div className="track-exam-meta">
                    <span className="meta-badge-timed">⏱️ 65 Questions</span>
                    <span className="meta-badge-score"> 70% Required</span>
                  </div>
                  <button
                    className="launch-mock-exam-btn"
                    onClick={() => openPracticeModal("mockExam", cert.id)}
                    title={`Launch Timed Mock Exam for ${cert.title}`}
                  >
                    Launch {cert.code} Exam →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        <section className="features-section" id="features" aria-labelledby="features-heading">
          <div className="section-heading centered">
            <span className="section-pill">DESIGNED FOR RETENTION</span>
            <h2 id="features-heading">Why engineers choose Athencert</h2>
            <p>
              Traditional courses waste hours on passive videos. Athencert uses active recall, instant
              feedback, and simulation to accelerate your certification readiness.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" aria-hidden="true"></div>
              <h3>Bite-Sized Lessons</h3>
              <p>
                8-minute structured modules with clear key takeaways, architectural diagrams, and
                zero fluff.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" aria-hidden="true"></div>
              <h3>3D Spaced Flashcards</h3>
              <p>
                Flip cards covering acronyms, port numbers, CLI commands, and SLA formulas to cement
                long-term recall.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" aria-hidden="true">⏱️</div>
              <h3>Timed Mock Exam Engine</h3>
              <p>
                Full-length timed exam simulations with domain scoring breakdowns, question flags,
                and answer rationales.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" aria-hidden="true"></div>
              <h3>Hands-On Scenario Labs</h3>
              <p>
                Practice subnetting calculations, IAM policies, and Kubernetes YAML manifests in
                guided interactive exercises.
              </p>
            </div>
          </div>
        </section>

        
        <section className="faq-section" id="faq" aria-labelledby="faq-heading">
          <div className="section-heading centered">
            <span className="section-pill">FREQUENTLY ASKED QUESTIONS</span>
            <h2 id="faq-heading">Certification Study & Exam Prep FAQs</h2>
            <p>
              Everything you need to know about preparing for AWS, Azure, Google Cloud, Cisco, CompTIA,
              and Kubernetes certifications on Athencert.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <details key={idx} className="faq-item" open={idx === 0}>
                <summary className="faq-summary">
                  <h3>{faq.question}</h3>
                  <span className="faq-icon-arrow" aria-hidden="true">▼</span>
                </summary>
                <div className="faq-body">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        
        <section className="experience" id="preview" aria-labelledby="demo-heading">
          <div className="experience-text">
            <span className="section-pill">LIVE INTERACTIVE DEMO</span>
            <h2 id="demo-heading">
              Don't just read.
              <br />
              <strong className="understand-text">Understand.</strong>
            </h2>

            <p>
              Every lesson comes with an interactive knowledge check. Select an option on the right to
              experience how instant feedback locks in your understanding.
            </p>

            <div className="demo-actions">
              <Link to="/certifications/aws/cloud-practitioner" className="primary-btn">
                Launch AWS Path →
              </Link>
              <button
                className="secondary-btn"
                onClick={() => openPracticeModal("flashcards", "aws")}
              >
                 Try Flashcards
              </button>
            </div>
          </div>

          
          <div className="learning-preview">
            <div className="preview-top">
              <span className="preview-lesson-badge">LESSON 08 • AWS</span>
              <span className="preview-time-badge">⏱️ 8 min read</span>
            </div>

            <h3>What is an AWS Availability Zone (AZ)?</h3>

            <p>
              An AWS Region is a physical geographic area containing multiple, isolated Availability
              Zones connected by low-latency private fiber.
            </p>

            <div className="concept-box">
              <small>KEY ARCHITECTURAL CONCEPT</small>
              <strong>1 Region = Multiple Isolated Availability Zones</strong>
            </div>

            <div className="question">
              <small>LIVE QUICK CHECK</small>
              <p>Which statement best describes the relationship between Regions and AZs?</p>

              <button
                className={`answer-btn ${previewAnswer === "A" ? "ans-correct" : ""}`}
                onClick={() => setPreviewAnswer("A")}
              >
                <span>A.</span> Each Region contains 2 or more isolated Availability Zones
                {previewAnswer === "A" && <span className="ans-check"> Correct</span>}
              </button>

              <button
                className={`answer-btn ${previewAnswer === "B" ? "ans-wrong" : ""}`}
                onClick={() => setPreviewAnswer("B")}
              >
                <span>B.</span> An Availability Zone contains multiple AWS Regions
                {previewAnswer === "B" && <span className="ans-cross"> Incorrect</span>}
              </button>

              {previewAnswer && (
                <div className="preview-feedback-msg">
                  {previewAnswer === "A"
                    ? " Correct! Regions are composed of 2+ discrete Availability Zones for fault tolerance."
                    : " Not quite. Availability Zones are located INSIDE Regions, not the other way around."}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      
      <footer id="resources">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-symbol"></span>
                Athen<span>cert</span>
              </div>
              <p>
                The developer-first certification learning platform. Master cloud, networking,
                and security skills with confidence.
              </p>
            </div>

            <div className="footer-links-grid">
              <div>
                <h4>Certifications</h4>
                <ul>
                  <li><Link to="/certifications/aws/cloud-practitioner">AWS Cloud Practitioner (CLF-C02)</Link></li>
                  <li><Link to="/certifications/aws/solutions-architect">AWS Solutions Architect (SAA-C03)</Link></li>
                  <li><Link to="/certifications/azure/az-900">Microsoft Azure AZ-900</Link></li>
                  <li><Link to="/certifications/google/cloud-fundamentals">Google Cloud Leader</Link></li>
                  <li><Link to="/certifications/kubernetes/fundamentals">Kubernetes CKA</Link></li>
                  <li><Link to="/certifications/cisco/networking">Cisco CCNA 200-301</Link></li>
                  <li><Link to="/certifications/comptia/fundamentals">CompTIA ITF+ & A+</Link></li>
                </ul>
              </div>

              <div>
                <h4>Practice Tools</h4>
                <ul>
                  <li><button onClick={() => openPracticeModal("certLab", "aws")}> In-Browser Cloud Console</button></li>
                  <li><button onClick={() => openPracticeModal("cheatSheet")}> Ports & Acronyms Cheat Sheet</button></li>
                  <li><button onClick={() => openPracticeModal("mockExam", "aws")}>Mock Exam Engine</button></li>
                  <li><button onClick={() => openPracticeModal("quickQuiz", "aws")}>Quick Quizzes</button></li>
                  <li><button onClick={() => openPracticeModal("flashcards", "aws")}>3D Flashcards</button></li>
                  <li><button onClick={() => openPracticeModal("lab", "aws")}>Scenario Labs</button></li>
                </ul>
              </div>

              <div>
                <h4>Platform</h4>
                <ul>
                  <li><Link to="/dashboard">Learning Dashboard</Link></li>
                  <li><Link to="/certifications/aws">AWS Career Roadmap</Link></li>
                  <li><a href="#faq">Certification FAQs</a></li>
                  <li><button onClick={() => openPracticeModal("search")}>Global Search (Ctrl+K)</button></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <small>© 2026 Athencert Technologies. All rights reserved.</small>
            <div className="footer-bottom-badges">
              <span>Made with  for Certification Candidates</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;