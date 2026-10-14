import { Link, useLocation } from "react-router-dom";
import { useLearning } from "../context/LearningContext";
import "./CertPathNavigator.css";

export default function CertPathNavigator({ activeProvider = "aws" }) {
  const location = useLocation();
  const { openPracticeModal } = useLearning();

  const tracks = [
    { id: "aws", code: "AWS", name: "AWS Cloud", path: "/certifications/aws/cloud-practitioner" },
    { id: "aws-saa", code: "SAA", name: "AWS Architect", path: "/certifications/aws/solutions-architect" },
    { id: "azure", code: "AZ", name: "Azure AZ-900", path: "/certifications/azure/az-900" },
    { id: "google", code: "GCP", name: "Google Cloud", path: "/certifications/google/cloud-fundamentals" },
    { id: "kubernetes", code: "K8S", name: "Kubernetes", path: "/certifications/kubernetes/fundamentals" },
    { id: "cisco", code: "CCNA", name: "Cisco 200-301", path: "/certifications/cisco/networking" },
    { id: "comptia", code: "ITF+", name: "CompTIA A+", path: "/certifications/comptia/fundamentals" }
  ];

  return (
    <nav className="certpath-navigator-bar" aria-label="Platform Quick Navigation">
      <div className="navigator-container">
        
        <div className="navigator-tracks-group">
          <span className="navigator-label">TRACKS</span>
          <div className="navigator-scroll-track">
            {tracks.map((track) => {
              const isActive = track.id === "aws-saa"
                ? location.pathname.includes("/solutions-architect")
                : track.id === "aws"
                ? location.pathname.includes("/cloud-practitioner") || (location.pathname.endsWith("/aws") || location.pathname.endsWith("/aws/"))
                : location.pathname.includes(track.id);
              return (
                <Link
                  key={track.id}
                  to={track.path}
                  className={`navigator-track-btn ${isActive ? "active" : ""}`}
                >
                  <span className="track-code">{track.code}</span>
                  <span className="track-name">{track.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        
        <div className="navigator-tools-group">
          <span className="navigator-label">PRACTICE ARENA</span>
          <div className="navigator-tools-row">
            <button
              className="navigator-tool-btn highlight"
              onClick={() => openPracticeModal("certLab", activeProvider)}
              title="Launch In-Browser Cloud Console & CLI Runner"
            >
              <span className="tool-icon"></span>
              <span>Cloud Console</span>
            </button>

            <button
              className="navigator-tool-btn"
              onClick={() => openPracticeModal("cheatSheet")}
              title="Search Common Ports, Acronyms & CIDR Subnets"
            >
              <span className="tool-icon"></span>
              <span>Cheat Sheets</span>
            </button>

            <button
              className="navigator-tool-btn highlight-exam"
              onClick={() => openPracticeModal("mockExam", activeProvider)}
              title="Launch Timed Full-Length Certification Exam (Ctrl+M)"
            >
              <span className="tool-icon">⏱️</span>
              <span>Mock Exam</span>
              <span className="exam-live-badge">FULL TEST</span>
            </button>

            <button
              className="navigator-tool-btn"
              onClick={() => openPracticeModal("flashcards", activeProvider)}
              title="Spaced Repetition 3D Flashcards"
            >
              <span className="tool-icon"></span>
              <span>Flashcards</span>
            </button>

            <button
              className="navigator-tool-btn"
              onClick={() => openPracticeModal("quickQuiz", activeProvider)}
              title="5-Question Immediate Knowledge Check"
            >
              <span className="tool-icon"></span>
              <span>Quick Quiz</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
