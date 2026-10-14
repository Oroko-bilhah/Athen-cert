import express from "express";

const router = express.Router();

const certificationsData = [
  {
    id: "aws",
    code: "CLF-C02",
    title: "AWS Certified Cloud Practitioner",
    subtitle: "Foundational Cloud & Core Architecture",
    description: "Learn cloud concepts, security, technology, billing, and pricing for the AWS ecosystem.",
    level: "Foundational",
    lessonsCount: 18,
    examQuestions: 65,
    examDurationMins: 90,
    passingScore: 70,
    accent: "orange",
    icon: ""
  },
  {
    id: "azure",
    code: "AZ-900",
    title: "Microsoft Certified: Azure Fundamentals",
    subtitle: "Cloud Concepts & Microsoft Cloud Architecture",
    description: "Master cloud concepts, Azure architecture and services, and Azure management and governance.",
    level: "Foundational",
    lessonsCount: 32,
    examQuestions: 50,
    examDurationMins: 45,
    passingScore: 70,
    accent: "blue",
    icon: ""
  },
  {
    id: "google",
    code: "CDL",
    title: "Google Cloud Digital Leader",
    subtitle: "Digital Transformation & GCP Infrastructure",
    description: "Understand Google Cloud core infrastructure, data modernization, and enterprise security.",
    level: "Foundational",
    lessonsCount: 32,
    examQuestions: 60,
    examDurationMins: 90,
    passingScore: 70,
    accent: "emerald",
    icon: ""
  },
  {
    id: "kubernetes",
    code: "CKA",
    title: "Certified Kubernetes Administrator",
    subtitle: "Orchestration, Pod Scheduling & Networking",
    description: "Container architecture, deployment rollouts, pod affinity, services, and cluster maintenance.",
    level: "Intermediate",
    lessonsCount: 12,
    examQuestions: 50,
    examDurationMins: 90,
    passingScore: 70,
    accent: "indigo",
    icon: ""
  },
  {
    id: "cisco",
    code: "CCNA",
    title: "Cisco Certified Network Associate (200-301)",
    subtitle: "Routing, Switching, Subnetting & IP Services",
    description: "Network fundamentals, IP connectivity, security fundamentals, and automation with Python.",
    level: "Associate",
    lessonsCount: 12,
    examQuestions: 65,
    examDurationMins: 90,
    passingScore: 70,
    accent: "cyan",
    icon: ""
  },
  {
    id: "comptia",
    code: "ITF+",
    title: "CompTIA IT Fundamentals+",
    subtitle: "Hardware, OS, Security & Database Core",
    description: "Computing basics, IT infrastructure, software development concepts, and cybersecurity hygiene.",
    level: "Foundational",
    lessonsCount: 12,
    examQuestions: 50,
    examDurationMins: 45,
    passingScore: 70,
    accent: "rose",
    icon: ""
  }
];

router.get("/", (req, res) => {
  res.json({
    success: true,
    count: certificationsData.length,
    certifications: certificationsData
  });
});

router.get("/:id", (req, res) => {
  const cert = certificationsData.find((c) => c.id === req.params.id.toLowerCase());
  if (!cert) {
    return res.status(404).json({ success: false, message: `Certification '${req.params.id}' not found.` });
  }
  res.json({ success: true, certification: cert });
});

export default router;
