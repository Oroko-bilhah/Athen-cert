import CertificationTemplate from "../components/CertificationTemplate";

const topics = [
  {
    number: "01",
    title: "Multi-Tier Networking & VPC Isolation",
    description:
      "Design highly available multi-tier VPC topologies with public, private app, and database subnets, NAT Gateways, and Transit Gateway.",
    status: "completed",
    path: "/certifications/aws/solutions-architect/lesson/1"
  },
  {
    number: "02",
    title: "Resilient Compute, Load Balancing & Autoscaling",
    description:
      "Master Layer 7 ALB vs Layer 4 NLB, EC2 Auto Scaling groups, launch templates, and target tracking scaling policies.",
    status: "current",
    path: "/certifications/aws/solutions-architect/lesson/2"
  },
  {
    number: "03",
    title: "High-Durability Storage & Shared Filesystems",
    description:
      "Explore S3 Intelligent-Tiering, S3 Lifecycle policies, Cross-Region Replication, EBS gp3/io2, and Amazon EFS multi-mount filesystems.",
    status: "available",
    path: "/certifications/aws/solutions-architect/lesson/3"
  },
  {
    number: "04",
    title: "Enterprise Relational & NoSQL Databases",
    description:
      "Compare RDS Multi-AZ synchronous standby vs Read Replicas, Amazon Aurora 6-copy storage clusters, DynamoDB, and ElastiCache Redis.",
    status: "available",
    path: "/certifications/aws/solutions-architect/lesson/5"
  },
  {
    number: "05",
    title: "Asynchronous Decoupling & Serverless Architecture",
    description:
      "Build event-driven microservices using SQS Standard & FIFO queues, SNS fan-out, Amazon EventBridge, and AWS Lambda with API Gateway.",
    status: "available",
    path: "/certifications/aws/solutions-architect/lesson/7"
  },
  {
    number: "06",
    title: "Security, Encryption & Perimeter Defense",
    description:
      "Enforce least-privilege IAM roles, SCPs, AWS KMS envelope encryption, Secrets Manager rotation, Security Groups, NACLs, and AWS WAF.",
    status: "available",
    path: "/certifications/aws/solutions-architect/lesson/11"
  },
  {
    number: "07",
    title: "Disaster Recovery & Cost Optimization",
    description:
      "Implement Pilot Light, Warm Standby, and Multi-Site DR strategies alongside EC2 Spot Fleets, Savings Plans, and S3 tiering.",
    status: "available",
    path: "/certifications/aws/solutions-architect/lesson/14"
  }
];

const practiceCards = [
  {
    icon: "",
    title: "Quick Quiz",
    description: "Test your architectural decision-making with 5 focused SAA-C03 multiple-choice scenario questions.",
    button: "Launch Quiz"
  },
  {
    icon: "",
    title: "SAA-C03 Flashcards",
    description: "Review essential SAA-C03 concepts: S3 tiering, Transit Gateway, Multi-AZ failover, and KMS envelope encryption.",
    button: "Flip Cards"
  },
  {
    icon: "⏱️",
    title: "Full SAA-C03 Mock Exam",
    description: "Simulate the timed 130-minute AWS Solutions Architect Associate exam with domain-level diagnostic score reports.",
    button: "Start Mock Exam"
  },
  {
    icon: "",
    title: "3-Tier VPC Architecture Lab",
    description: "Inspect multi-AZ subnets, NAT Gateways, and validate Security Group chaining in an interactive sandbox.",
    button: "Launch Lab"
  }
];

function AwsSolutionsArchitect() {
  return (
    <CertificationTemplate
      provider="aws-saa"
      title="AWS Certified Solutions Architect – Associate"
      shortTitle="SAA-C03"
      description="Master designing resilient, high-performing, secure, and cost-optimized distributed systems on AWS to confidently pass the SAA-C03 certification exam."
      icon=""
      heroColor="gold"
      maxLessons={16}
      topics={topics}
      practiceCards={practiceCards}
      onStartLearning="/certifications/aws/solutions-architect/lesson/1"
      examDetails={{
        code: "SAA-C03",
        duration: "130 minutes",
        questions: "65 questions",
        passingScore: "720 / 1000 (72%)",
        format: "Multiple choice and multiple response scenario-based questions"
      }}
    />
  );
}

export default AwsSolutionsArchitect;
