const awsCertifications = {
  provider: "Amazon Web Services",
  shortName: "AWS",

  description:
    "Explore AWS certifications and follow a structured path from foundational knowledge to advanced cloud expertise.",

  levels: [
    {
      id: "foundational",
      title: "Foundational",
      description: "Build your understanding of cloud and AWS fundamentals.",

      certifications: [
        {
          id: "cloud-practitioner",
          code: "CLF-C02",
          title: "AWS Certified Cloud Practitioner",
          description:
            "Learn the fundamentals of AWS Cloud, core services, security, pricing, and cloud concepts.",
          level: "Foundational",
          status: "available",
          path: "/certifications/aws/cloud-practitioner",
        },

        {
          id: "ai-practitioner",
          code: "AIF-C01",
          title: "AWS Certified AI Practitioner",
          description:
            "Build foundational knowledge of artificial intelligence, machine learning, and generative AI on AWS.",
          level: "Foundational",
          status: "coming-soon",
        },
      ],
    },

    {
      id: "associate",
      title: "Associate",
      description: "Develop practical AWS skills for specific cloud roles.",

      certifications: [
        {
          id: "solutions-architect-associate",
          code: "SAA-C03",
          title: "AWS Certified Solutions Architect – Associate",
          description:
            "Learn how to design secure, resilient, high-performing, and cost-optimized architectures on AWS.",
          level: "Associate",
          status: "available",
          path: "/certifications/aws/solutions-architect",
        },

        {
          id: "developer-associate",
          code: "DVA-C02",
          title: "AWS Certified Developer – Associate",
          description:
            "Build and maintain applications using AWS services and development tools.",
          level: "Associate",
          status: "coming-soon",
        },

        {
          id: "sysops-administrator",
          code: "SOA-C02",
          title: "AWS Certified CloudOps Engineer – Associate",
          description:
            "Develop the skills needed to deploy, manage, and operate workloads on AWS.",
          level: "Associate",
          status: "coming-soon",
        },

        {
          id: "data-engineer-associate",
          code: "DEA-C01",
          title: "AWS Certified Data Engineer – Associate",
          description:
            "Learn how to design and implement data pipelines and data solutions on AWS.",
          level: "Associate",
          status: "coming-soon",
        },

        {
          id: "machine-learning-engineer",
          code: "MLA-C01",
          title: "AWS Certified Machine Learning Engineer – Associate",
          description:
            "Develop and operate machine learning workloads using AWS technologies.",
          level: "Associate",
          status: "coming-soon",
        },
      ],
    },

    {
      id: "professional",
      title: "Professional",
      description: "Demonstrate advanced AWS architecture and engineering expertise.",

      certifications: [
        {
          id: "solutions-architect-professional",
          code: "SAP-C02",
          title: "AWS Certified Solutions Architect – Professional",
          description:
            "Design complex, secure, scalable, and reliable architectures on AWS.",
          level: "Professional",
          status: "coming-soon",
        },

        {
          id: "devops-engineer-professional",
          code: "DOP-C02",
          title: "AWS Certified DevOps Engineer – Professional",
          description:
            "Develop advanced skills for operating and automating AWS environments.",
          level: "Professional",
          status: "coming-soon",
        },
      ],
    },

    {
      id: "specialty",
      title: "Specialty",
      description: "Develop deep expertise in specialized AWS technology domains.",

      certifications: [
        {
          id: "security-specialty",
          code: "SCS-C03",
          title: "AWS Certified Security – Specialty",
          description:
            "Develop advanced knowledge of securing AWS workloads and environments.",
          level: "Specialty",
          status: "coming-soon",
        },

        {
          id: "advanced-networking",
          code: "ANS-C01",
          title: "AWS Certified Advanced Networking – Specialty",
          description:
            "Master advanced networking concepts and architectures on AWS.",
          level: "Specialty",
          status: "coming-soon",
        },
      ],
    },
  ],
};

export default awsCertifications;