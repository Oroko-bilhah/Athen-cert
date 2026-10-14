
import CertificationTemplate from "../components/CertificationTemplate";

const topics = [
  {
    number: "01",
    title: "Cloud Concepts & Value Proposition",
    description:
      "Understand cloud computing principles, benefits, economics, and the AWS global infrastructure model.",
    status: "completed",
    path: "/certifications/aws/cloud-practitioner/lesson/1"
  },
  {
    number: "02",
    title: "Security, IAM & Compliance",
    description:
      "Master the AWS Shared Responsibility Model, IAM policies, MFA, encryption, and AWS security services.",
    status: "current",
    path: "/certifications/aws/cloud-practitioner/lesson/6"
  },
  {
    number: "03",
    title: "Core AWS Compute & Storage Services",
    description:
      "Explore EC2 instance families, Lambda serverless, S3 storage classes, EBS volumes, and EFS shared filesystems.",
    status: "available",
    path: "/certifications/aws/cloud-practitioner/lesson/10"
  },
  {
    number: "04",
    title: "Databases & Networking (VPC)",
    description:
      "Learn Amazon RDS, Aurora, DynamoDB NoSQL, VPC subnets, Security Groups, and CloudFront CDN.",
    status: "available",
    path: "/certifications/aws/cloud-practitioner/lesson/14"
  },
  {
    number: "05",
    title: "Billing, Pricing Models & Support Plans",
    description:
      "Master AWS Pricing Calculator, Cost Explorer, AWS Budgets, Savings Plans, and AWS Support tiers.",
    status: "available",
    path: "/certifications/aws/cloud-practitioner/lesson/16"
  }
];

const practiceCards = [
  {
    icon: "",
    title: "Quick Quiz",
    description: "Test your understanding with 5 focused multiple-choice questions.",
    button: "Launch Quiz"
  },
  {
    icon: "",
    title: "Key Terms Flashcards",
    description: "Review essential AWS acronyms, definitions, and architecture patterns.",
    button: "Flip Cards"
  },
  {
    icon: "⏱️",
    title: "CLF-C02 Mock Exam",
    description: "Simulate the timed AWS certification exam with score reports.",
    button: "Start Mock Exam"
  },
  {
    icon: "",
    title: "IAM Policy Simulator Lab",
    description: "Evaluate real AWS IAM JSON statements and least privilege permissions.",
    button: "Launch Lab"
  }
];

function AwsCloudPractitioner() {
  return (
    <CertificationTemplate
      provider="aws"
      title="AWS Certified Cloud Practitioner"
      shortTitle="CLF-C02"
      description="Master fundamental cloud concepts, core AWS services, security, architecture, pricing, and support to confidently earn your AWS certification."
      icon=""
      heroColor="gold"
      maxLessons={20}
      topics={topics}
      practiceCards={practiceCards}
      onStartLearning="/certifications/aws/cloud-practitioner/lesson/1"
      examDetails={{
        code: "CLF-C02",
        duration: "90 minutes",
        questions: "65 questions",
        passingScore: "700 / 1000 (70%)",
        format: "Multiple choice and multiple response"
      }}
    />
  );
}

export default AwsCloudPractitioner;