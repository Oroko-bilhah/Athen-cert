
import CertificationTemplate from "../components/CertificationTemplate";

const topics = [
  {
    number: "01",
    title: "IT Foundations, Data Units & Internal Hardware",
    description:
      "Understand binary/hex, IPOS cycle, CPU architectures, DDR4/DDR5 RAM, motherboards, and PCIe expansion.",
    status: "completed",
    path: "/certifications/comptia/fundamentals/lesson/1"
  },
  {
    number: "02",
    title: "Storage Drives, PSUs & Peripheral Interfaces",
    description:
      "Explore NVMe M.2 SSDs, RAID (0, 1, 5, 10), 80 PLUS power supplies, USB-C, Thunderbolt, and DisplayPort.",
    status: "current",
    path: "/certifications/comptia/fundamentals/lesson/3"
  },
  {
    number: "03",
    title: "Operating Systems, File Systems & CLI Diagnostics",
    description:
      "Learn Windows, macOS, Linux, NTFS vs FAT32, and diagnostic commands (ipconfig, sfc, tracert, chmod).",
    status: "available",
    path: "/certifications/comptia/fundamentals/lesson/5"
  },
  {
    number: "04",
    title: "Networking, Common Ports & Wi-Fi 6",
    description:
      "Master Cat6/6a cabling, well-known port numbers (443, 22, 3389), 802.11ax Wi-Fi 6, and SOHO router security.",
    status: "available",
    path: "/certifications/comptia/fundamentals/lesson/7"
  },
  {
    number: "05",
    title: "Cybersecurity, MFA, Databases & Scripting",
    description:
      "Master malware defense, phishing, MFA 3 factors, encryption, basic SQL queries, and PowerShell/Bash scripts.",
    status: "available",
    path: "/certifications/comptia/fundamentals/lesson/9"
  },
  {
    number: "06",
    title: "Troubleshooting, Printers & Operational Safety",
    description:
      "Apply the 6-step CompTIA troubleshooting model, laser printer 7-step imaging cycle, and 3-2-1 backup rules.",
    status: "available",
    path: "/certifications/comptia/fundamentals/lesson/14"
  }
];

const practiceCards = [
  {
    icon: "",
    title: "Quick Quiz",
    description: "Test your understanding of foundational IT concepts and support workflows.",
    button: "Launch Quiz"
  },
  {
    icon: "",
    title: "CompTIA Flashcards",
    description: "Review common port numbers, acronyms, and hardware connectors.",
    button: "Flip Cards"
  },
  {
    icon: "⏱️",
    title: "CompTIA Mock Exam",
    description: "Take a timed practice test modeled after the official CompTIA exam format.",
    button: "Start Mock Exam"
  },
  {
    icon: "",
    title: "Troubleshooting Scenario Lab",
    description: "Work through real-world hardware, POST beep codes, and OS diagnostic scenarios.",
    button: "Launch Lab"
  }
];

function CompTIA() {
  return (
    <CertificationTemplate
      provider="comptia"
      title="CompTIA IT Fundamentals & A+"
      shortTitle="ITF+ / A+"
      description="Gain comprehensive practical knowledge of IT systems, computer hardware, operating systems, cybersecurity, databases, and professional troubleshooting."
      icon=""
      heroColor="orange"
      maxLessons={16}
      topics={topics}
      practiceCards={practiceCards}
      onStartLearning="/certifications/comptia/fundamentals/lesson/1"
      examDetails={{
        code: "FC0-U61 / 220-1101",
        duration: "75-90 minutes",
        questions: "75-90 questions",
        passingScore: "650-675 / 900 (72%)",
        format: "Multiple choice and performance-based questions"
      }}
    />
  );
}

export default CompTIA;
