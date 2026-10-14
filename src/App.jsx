import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LearningProvider, useLearning } from "./context/LearningContext";
import Home from "./Home";
import Dashboard from "./pages/Dashboard";
import AwsCloudPractitioner from "./pages/AwsCloudPractitioner";
import AwsSolutionsArchitect from "./pages/AwsSolutionsArchitect";
import AzureFundamentals from "./pages/AzureFundamentals";
import AwsRoadmap from "./pages/AwsRoadmap";
import GoogleCloud from "./pages/GoogleCloud";
import CiscoNetworking from "./pages/CiscoNetworking";
import KubernetesFundamentals from "./pages/KubernetesFundamentals";
import CompTIA from "./pages/CompTIA";
import CertificationRoadmap from "./pages/CertificationRoadmap";
import CertificationLesson from "./pages/CertificationLesson";

import QuickQuizModal from "./components/QuickQuizModal";
import FlashcardsModal from "./components/FlashcardsModal";
import MockExamModal from "./components/MockExamModal";
import InteractiveLabModal from "./components/InteractiveLabModal";
import GlobalSearchModal from "./components/GlobalSearchModal";
import CertLabModal from "./components/CertLabModal";
import CheatSheetModal from "./components/CheatSheetModal";

function GlobalModalManager() {
  const { activeModal, modalProvider, modalInitialData, closeModal, openPracticeModal } = useLearning();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openPracticeModal("search");
      } else if ((e.metaKey || e.ctrlKey) && e.key === "l") {
        e.preventDefault();
        openPracticeModal("certLab");
      } else if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        openPracticeModal("cheatSheet");
      } else if ((e.metaKey || e.ctrlKey) && e.key === "m") {
        e.preventDefault();
        openPracticeModal("mockExam");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openPracticeModal]);

  if (!activeModal) return null;

  switch (activeModal) {
    case "quickQuiz":
      return <QuickQuizModal provider={modalProvider} onClose={closeModal} />;
    case "flashcards":
      return <FlashcardsModal provider={modalProvider} onClose={closeModal} />;
    case "mockExam":
      return <MockExamModal provider={modalProvider} onClose={closeModal} />;
    case "lab":
      return <InteractiveLabModal provider={modalProvider} onClose={closeModal} />;
    case "certLab":
      return (
        <CertLabModal
          provider={modalProvider}
          initialCommand={typeof modalInitialData === "string" ? modalInitialData : ""}
          onClose={closeModal}
        />
      );
    case "cheatSheet":
      return (
        <CheatSheetModal
          defaultTab={typeof modalInitialData === "string" ? modalInitialData : "ports"}
          onClose={closeModal}
        />
      );
    case "search":
      return <GlobalSearchModal onClose={closeModal} />;
    default:
      return null;
  }
}

function App() {
  return (
    <LearningProvider>
      <BrowserRouter>
        <GlobalModalManager />
        <Routes>
          
          <Route path="/" element={<Home />} />

          
          <Route path="/dashboard" element={<Dashboard />} />

          
          <Route path="/certifications/aws" element={<AwsRoadmap />} />
          <Route
            path="/certifications/aws/cloud-practitioner"
            element={<AwsCloudPractitioner />}
          />
          <Route
            path="/certifications/aws/cloud-practitioner/lesson/:lessonId"
            element={<CertificationLesson defaultProvider="aws" />}
          />
          <Route
            path="/certifications/aws/solutions-architect"
            element={<AwsSolutionsArchitect />}
          />
          <Route
            path="/certifications/aws/solutions-architect/lesson/:lessonId"
            element={<CertificationLesson defaultProvider="aws-saa" />}
          />

          
          <Route
            path="/certifications/azure"
            element={<CertificationRoadmap provider="azure" />}
          />
          <Route
            path="/certifications/azure/az-900"
            element={<AzureFundamentals />}
          />
          <Route
            path="/certifications/azure/az-900/lesson/:lessonId"
            element={<CertificationLesson defaultProvider="azure" />}
          />

          
          <Route
            path="/certifications/google"
            element={<CertificationRoadmap provider="google" />}
          />
          <Route
            path="/certifications/google/cloud-fundamentals"
            element={<GoogleCloud />}
          />
          <Route
            path="/certifications/google/cloud-fundamentals/lesson/:lessonId"
            element={<CertificationLesson defaultProvider="google" />}
          />

          
          <Route
            path="/certifications/cisco"
            element={<CertificationRoadmap provider="cisco" />}
          />
          <Route
            path="/certifications/cisco/networking"
            element={<CiscoNetworking />}
          />
          <Route
            path="/certifications/cisco/networking/lesson/:lessonId"
            element={<CertificationLesson defaultProvider="cisco" />}
          />

          
          <Route
            path="/certifications/comptia"
            element={<CertificationRoadmap provider="comptia" />}
          />
          <Route
            path="/certifications/comptia/fundamentals"
            element={<CompTIA />}
          />
          <Route
            path="/certifications/comptia/fundamentals/lesson/:lessonId"
            element={<CertificationLesson defaultProvider="comptia" />}
          />

          
          <Route
            path="/certifications/kubernetes"
            element={<CertificationRoadmap provider="kubernetes" />}
          />
          <Route
            path="/certifications/kubernetes/fundamentals"
            element={<KubernetesFundamentals />}
          />
          <Route
            path="/certifications/kubernetes/fundamentals/lesson/:lessonId"
            element={<CertificationLesson defaultProvider="kubernetes" />}
          />

          
          <Route
            path="/certifications/:provider/lesson/:lessonId"
            element={<CertificationLesson />}
          />
          <Route
            path="/certifications/:provider"
            element={<CertificationRoadmap />}
          />
        </Routes>
      </BrowserRouter>
    </LearningProvider>
  );
}

export default App;