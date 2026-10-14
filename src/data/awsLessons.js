export const awsLessons = [
  {
    id: 1,
    title: "What is Cloud Computing?",
    category: "Cloud Concepts",
    duration: "8 min",

    intro:
      "Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing.",

    keyIdea:
      "Cloud computing lets you use computing resources without owning the physical infrastructure.",

    sections: [
      {
        heading: "Think of the cloud like renting",
        paragraphs: [
          "Imagine you want to run a website. Traditionally, you would need to purchase a physical server, install it, maintain it, and make sure it stays available.",

          "Cloud computing changes this model. Instead of buying the hardware yourself, you can rent computing resources from a cloud provider such as AWS."
        ]
      }
    ],

    example: {
      title: "SIMPLE EXAMPLE",

      traditional:
        "Buy a server → Install it → Maintain it → Replace it when it becomes outdated",

      cloud:
        "Choose a service → Use it → Pay for what you use"
    },

    concepts: [
      {
        number: "01",
        title: "On-demand",
        description:
          "Resources can be provisioned whenever you need them."
      },
      {
        number: "02",
        title: "Pay-as-you-go",
        description:
          "You generally pay for the resources you actually use."
      },
      {
        number: "03",
        title: "Internet delivery",
        description:
          "Cloud resources are accessed through a network, typically the internet."
      }
    ],

    quiz: {
      question: "Which statement best describes cloud computing?",

      answers: [
        {
          id: "A",
          text: "Buying physical servers for your office",
          correct: false
        },
        {
          id: "B",
          text: "Renting IT resources over the internet",
          correct: true
        },
        {
          id: "C",
          text: "Installing software on every computer",
          correct: false
        },
        {
          id: "D",
          text: "Building your own data center",
          correct: false
        }
      ]
    }
  },

  {
    id: 2,
    title: "Benefits of the Cloud",
    category: "Cloud Concepts",
    duration: "7 min",

    intro:
      "Cloud computing provides organizations with flexible, scalable, and cost-effective access to computing resources.",

    keyIdea:
      "Cloud computing allows organizations to access technology resources without purchasing and maintaining all the underlying physical infrastructure.",

    sections: [
      {
        heading: "Why use cloud computing?",
        paragraphs: [
          "Traditional IT environments often require organizations to purchase hardware before they can use it. This can require significant upfront investment and ongoing maintenance.",

          "Cloud computing allows organizations to access computing resources when they need them and scale those resources as requirements change."
        ]
      }
    ],

    example: {
      title: "SIMPLE EXAMPLE",

      traditional:
        "Buy servers → Install them → Maintain them → Replace them when they become outdated",

      cloud:
        "Choose resources → Use them → Scale when needed → Pay for what you use"
    },

    concepts: [
      {
        number: "01",
        title: "Scalability",
        description:
          "Resources can be increased or decreased as your workload changes."
      },
      {
        number: "02",
        title: "Cost efficiency",
        description:
          "Cloud services can reduce the need for large upfront investments in physical infrastructure."
      },
      {
        number: "03",
        title: "Flexibility",
        description:
          "Resources can be provisioned quickly when new requirements arise."
      },
      {
        number: "04",
        title: "Global access",
        description:
          "Cloud resources can be accessed from many locations through a network connection."
      }
    ],

    quiz: {
      question: "Which is a benefit of cloud computing?",

      answers: [
        {
          id: "A",
          text: "Buying and maintaining more physical servers",
          correct: false
        },
        {
          id: "B",
          text: "Paying for resources as you use them",
          correct: true
        },
        {
          id: "C",
          text: "Building your own data center",
          correct: false
        },
        {
          id: "D",
          text: "Replacing every computer annually",
          correct: false
        }
      ]
    }
  },

  {
    id: 3,
    title: "AWS Global Infrastructure",
    category: "Cloud Concepts",
    duration: "8 min",
    intro:
      "AWS operates a global infrastructure with regions and availability zones strategically located around the world.",
    keyIdea:
      "AWS regions enable you to deploy applications closer to users for lower latency and compliance with data residency requirements.",
    sections: [
      {
        heading: "Global reach",
        paragraphs: [
          "AWS has regions in different geographic areas like North America, Europe, Asia Pacific, and South America.",
          "Each region contains multiple availability zones for high availability and disaster recovery."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Single data center → users in other countries experience high latency",
      cloud:
        "Deploy in multiple regions → users connect to nearest region → low latency worldwide"
    },
    concepts: [
      {
        number: "01",
        title: "Region",
        description: "A geographic area containing multiple availability zones."
      },
      {
        number: "02",
        title: "Availability Zone",
        description: "Isolated location within a region with independent power and networking."
      },
      {
        number: "03",
        title: "Edge locations",
        description: "Sites used by CloudFront for caching and serving content globally."
      }
    ],
    quiz: {
      question: "Why deploy in multiple AWS regions?",
      answers: [
        { id: "A", text: "To reduce latency and meet compliance requirements", correct: true },
        { id: "B", text: "To eliminate all network connectivity issues", correct: false },
        { id: "C", text: "To avoid paying for any services", correct: false },
        { id: "D", text: "To replace all security measures", correct: false }
      ]
    }
  },

  {
    id: 4,
    title: "Compute Services in AWS",
    category: "Compute",
    duration: "9 min",
    intro:
      "AWS provides multiple compute options: EC2 (virtual machines), Lambda (serverless), and Container services.",
    keyIdea:
      "Choose the compute service that matches your workload - VMs for control, Lambda for events, containers for scalability.",
    sections: [
      {
        heading: "Compute options",
        paragraphs: [
          "EC2 gives you full control over operating systems and configuration. Lambda lets you run code without managing servers.",
          "Container services like ECS and EKS provide middle ground for containerized applications."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Buy hardware → Install OS → Install application → Manage everything manually",
      cloud:
        "Choose compute service → Deploy application → AWS handles infrastructure"
    },
    concepts: [
      {
        number: "01",
        title: "EC2",
        description: "Virtual machines with full OS control."
      },
      {
        number: "02",
        title: "Lambda",
        description: "Serverless functions that run in response to events."
      },
      {
        number: "03",
        title: "ECS/EKS",
        description: "Container orchestration services."
      }
    ],
    quiz: {
      question: "When would you use Lambda?",
      answers: [
        { id: "A", text: "For event-driven workloads where you want to avoid managing servers", correct: true },
        { id: "B", text: "For long-running batch processes", correct: false },
        { id: "C", text: "To replace database management", correct: false },
        { id: "D", text: "To eliminate all networking", correct: false }
      ]
    }
  },

  {
    id: 5,
    title: "Storage Options in AWS",
    category: "Storage",
    duration: "8 min",
    intro:
      "AWS offers S3 for object storage, EBS for block storage, and EFS for shared file systems.",
    keyIdea:
      "Different storage types serve different purposes - objects, blocks, or shared files.",
    sections: [
      {
        heading: "Storage types",
        paragraphs: [
          "S3 is for objects like documents and images. EBS volumes attach to EC2 instances. EFS provides NFS-based shared storage.",
          "Each has different durability, performance, and cost characteristics."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Build storage infrastructure → Configure backup → Manage capacity manually",
      cloud:
        "Use S3 → Unlimited scale → Automatic replication → Pay per GB stored"
    },
    concepts: [
      {
        number: "01",
        title: "S3",
        description: "Object storage for any data type at unlimited scale."
      },
      {
        number: "02",
        title: "EBS",
        description: "Block storage volumes for EC2 instances."
      },
      {
        number: "03",
        title: "EFS",
        description: "Managed NFS file system for shared access."
      }
    ],
    quiz: {
      question: "Which service stores documents, images, and videos?",
      answers: [
        { id: "A", text: "Amazon S3", correct: true },
        { id: "B", text: "Amazon EBS", correct: false },
        { id: "C", text: "Amazon RDS", correct: false },
        { id: "D", text: "Amazon DynamoDB", correct: false }
      ]
    }
  },

  {
    id: 6,
    title: "Databases in AWS",
    category: "Databases",
    duration: "8 min",
    intro:
      "AWS provides managed databases: RDS for relational, DynamoDB for NoSQL, and Redshift for data warehousing.",
    keyIdea:
      "AWS manages backups, patches, and scaling for you - choose the database type matching your data model.",
    sections: [
      {
        heading: "Database options",
        paragraphs: [
          "RDS supports MySQL, PostgreSQL, Oracle, and SQL Server with automatic backups and multi-AZ deployments.",
          "DynamoDB handles NoSQL workloads with automatic scaling. Redshift manages massive data analysis."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Install database server → Configure replication → Backup manually → Handle scaling",
      cloud:
        "Use RDS → automated backups → automatic scaling → pay per DB.t3.micro instance hour"
    },
    concepts: [
      {
        number: "01",
        title: "RDS",
        description: "Managed relational databases with automatic backups."
      },
      {
        number: "02",
        title: "DynamoDB",
        description: "Managed NoSQL database with automatic scaling."
      },
      {
        number: "03",
        title: "Redshift",
        description: "Data warehouse for analytical queries on large datasets."
      }
    ],
    quiz: {
      question: "Which database is best for unstructured NoSQL data?",
      answers: [
        { id: "A", text: "Amazon DynamoDB", correct: true },
        { id: "B", text: "Amazon RDS", correct: false },
        { id: "C", text: "Amazon Redshift", correct: false },
        { id: "D", text: "Amazon S3", correct: false }
      ]
    }
  },

  {
    id: 7,
    title: "Networking Fundamentals",
    category: "Networking",
    duration: "8 min",
    intro:
      "AWS networking provides VPCs for network isolation, security groups for firewalls, and routing for traffic control.",
    keyIdea:
      "VPCs isolate your resources. Security groups and network ACLs control traffic. Route tables determine packet paths.",
    sections: [
      {
        heading: "Network architecture",
        paragraphs: [
          "VPCs contain subnets that group resources. Security groups act as stateful firewalls.",
          "Network ACLs provide stateless firewall rules at the subnet level."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Physical switch configuration → Cable management → Firewall rules manually",
      cloud:
        "Create VPC → Add subnets → Configure Security Groups → Define rules in minutes"
    },
    concepts: [
      {
        number: "01",
        title: "VPC",
        description: "Virtual Private Cloud for network isolation."
      },
      {
        number: "02",
        title: "Security Group",
        description: "Stateful firewall controlling traffic to instances."
      },
      {
        number: "03",
        title: "NACL",
        description: "Stateless firewall at subnet level."
      }
    ],
    quiz: {
      question: "What does a Security Group do?",
      answers: [
        { id: "A", text: "Controls inbound and outbound traffic to EC2 instances", correct: true },
        { id: "B", text: "Encrypts all data at rest", correct: false },
        { id: "C", text: "Replaces the need for passwords", correct: false },
        { id: "D", text: "Manages DNS only", correct: false }
      ]
    }
  },

  {
    id: 8,
    title: "Identity and Access Management",
    category: "Security",
    duration: "8 min",
    intro:
      "AWS Identity and Access Management (IAM) controls who can access AWS resources and what they can do.",
    keyIdea:
      "IAM uses roles, policies, and permissions to implement least-privilege access - users get only what they need.",
    sections: [
      {
        heading: "Access control",
        paragraphs: [
          "IAM users have login credentials. Roles define permissions. Policies attach to roles and users.",
          "MFA adds additional security by requiring something you have plus something you know."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Give admin access to everyone → Hope no one misuses it → Can't audit who did what",
      cloud:
        "Create specific roles → Attach minimal permissions → Full audit trail → Revoke access instantly"
    },
    concepts: [
      {
        number: "01",
        title: "IAM User",
        description: "Individual account with login credentials."
      },
      {
        number: "02",
        title: "IAM Role",
        description: "Set of permissions that can be assumed by users or services."
      },
      {
        number: "03",
        title: "Policy",
        description: "JSON document defining allowed or denied actions."
      }
    ],
    quiz: {
      question: "What is the principle of least privilege?",
      answers: [
        { id: "A", text: "Users get only the permissions they need to perform their job", correct: true },
        { id: "B", text: "Everyone gets full admin access", correct: false },
        { id: "C", text: "Permissions don't need to be tracked", correct: false },
        { id: "D", text: "Roles are unnecessary", correct: false }
      ]
    }
  },

  {
    id: 9,
    title: "Monitoring and Logging",
    category: "Management",
    duration: "7 min",
    intro:
      "CloudWatch monitors AWS resources, collects logs, and triggers alerts when conditions are met.",
    keyIdea:
      "Monitoring provides visibility into application and infrastructure health for quick troubleshooting.",
    sections: [
      {
        heading: "Observability",
        paragraphs: [
          "CloudWatch collects metrics and logs. CloudTrail logs all API calls for compliance.",
          "Dashboards visualize metrics. Alarms trigger notifications when thresholds are exceeded."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Check each server manually → Logs scattered across systems → Alerts by email",
      cloud:
        "CloudWatch centralizes metrics → Dashboards visualize → Alarms trigger automatically"
    },
    concepts: [
      {
        number: "01",
        title: "CloudWatch",
        description: "Monitoring and logging service for AWS resources."
      },
      {
        number: "02",
        title: "CloudTrail",
        description: "Logs all API calls for compliance and auditing."
      },
      {
        number: "03",
        title: "Alarms",
        description: "Notifications when metrics exceed thresholds."
      }
    ],
    quiz: {
      question: "What does CloudWatch do?",
      answers: [
        { id: "A", text: "Collects metrics and logs for monitoring resource health", correct: true },
        { id: "B", text: "Automatically fixes all errors", correct: false },
        { id: "C", text: "Replaces IAM", correct: false },
        { id: "D", text: "Encrypts all data", correct: false }
      ]
    }
  },

  {
    id: 10,
    title: "Cost Management",
    category: "Governance",
    duration: "7 min",
    intro:
      "AWS provides tools to track, analyze, and optimize cloud spending.",
    keyIdea:
      "Understanding costs and using cost-optimization strategies reduces your cloud bill significantly.",
    sections: [
      {
        heading: "Controlling costs",
        paragraphs: [
          "AWS Cost Explorer shows spending by service and time. Budgets alert you to cost overruns.",
          "Reserved Instances and Spot Instances provide discounts for committed or flexible workloads."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Fixed hardware costs → Waste often goes unnoticed → Difficult to allocate to projects",
      cloud:
        "Pay-as-you-go → Track by project → Identify unused resources → Optimize sizing"
    },
    concepts: [
      {
        number: "01",
        title: "Reserved Instances",
        description: "Discounts for committing to use instances for 1 or 3 years."
      },
      {
        number: "02",
        title: "Spot Instances",
        description: "Heavily discounted but interruptible instances for flexible workloads."
      },
      {
        number: "03",
        title: "Cost Explorer",
        description: "Visualize and analyze your AWS spending patterns."
      }
    ],
    quiz: {
      question: "How can Reserved Instances reduce costs?",
      answers: [
        { id: "A", text: "By offering discounts for committing to longer usage periods", correct: true },
        { id: "B", text: "By eliminating all charges", correct: false },
        { id: "C", text: "By working only for test environments", correct: false },
        { id: "D", text: "By replacing monitoring", correct: false }
      ]
    }
  },

  {
    id: 11,
    title: "Application Services",
    category: "Services",
    duration: "8 min",
    intro:
      "AWS provides managed services for common application needs like message queues, email, and notifications.",
    keyIdea:
      "Use managed services to avoid building infrastructure for common patterns.",
    sections: [
      {
        heading: "Service integrations",
        paragraphs: [
          "SQS provides message queuing for decoupling components. SNS sends notifications.",
          "SES sends emails. These services integrate easily with other AWS services."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Build message queue system → Build notification system → Build email service",
      cloud:
        "Use SQS for queuing → SNS for notifications → SES for email"
    },
    concepts: [
      {
        number: "01",
        title: "SQS",
        description: "Queue service for decoupling application components."
      },
      {
        number: "02",
        title: "SNS",
        description: "Notification service for publishing messages to subscribers."
      },
      {
        number: "03",
        title: "SES",
        description: "Email service for transactional and marketing emails."
      }
    ],
    quiz: {
      question: "What is SQS used for?",
      answers: [
        { id: "A", text: "Queuing messages to decouple application components", correct: true },
        { id: "B", text: "Encrypting data at rest", correct: false },
        { id: "C", text: "Managing DNS", correct: false },
        { id: "D", text: "Storing large objects", correct: false }
      ]
    }
  },

  {
    id: 12,
    title: "Containers in AWS",
    category: "Containers",
    duration: "8 min",
    intro:
      "Docker containers provide lightweight, portable application packaging. AWS services like ECS and EKS orchestrate containers.",
    keyIdea:
      "Containers enable consistent deployment across development, testing, and production environments.",
    sections: [
      {
        heading: "Container orchestration",
        paragraphs: [
          "ECS is AWS's container orchestration service. EKS runs Kubernetes on AWS.",
          "Both handle scheduling, scaling, and networking for containers."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Install dependencies → Copy code → Run manually → Start by hand",
      cloud:
        "Package as container → Deploy to ECS/EKS → Automatic startup and scaling"
    },
    concepts: [
      {
        number: "01",
        title: "Docker",
        description: "Container platform for packaging applications."
      },
      {
        number: "02",
        title: "ECS",
        description: "AWS container orchestration service."
      },
      {
        number: "03",
        title: "EKS",
        description: "Managed Kubernetes service on AWS."
      }
    ],
    quiz: {
      question: "What is a container?",
      answers: [
        { id: "A", text: "A package containing application and dependencies", correct: true },
        { id: "B", text: "A type of database", correct: false },
        { id: "C", text: "A security group", correct: false },
        { id: "D", text: "A storage volume", correct: false }
      ]
    }
  },

  {
    id: 13,
    title: "Serverless Architectures",
    category: "Architecture",
    duration: "8 min",
    intro:
      "Serverless means AWS manages servers for you. You write functions and AWS handles execution, scaling, and infrastructure.",
    keyIdea:
      "Serverless reduces operational overhead and scales automatically based on demand.",
    sections: [
      {
        heading: "Event-driven computing",
        paragraphs: [
          "AWS Lambda executes code in response to events - API calls, file uploads, or scheduled times.",
          "You pay only for compute time used, not for idle servers."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Run servers 24/7 → Pay whether you use them or not → Manually scale",
      cloud:
        "Deploy Lambda functions → Execute only when needed → Pay per execution"
    },
    concepts: [
      {
        number: "01",
        title: "Lambda",
        description: "Serverless compute for running code in response to events."
      },
      {
        number: "02",
        title: "Event sources",
        description: "Services that trigger Lambda functions (S3, API Gateway, etc.)."
      },
      {
        number: "03",
        title: "Scalability",
        description: "Automatic scaling from zero to thousands of concurrent executions."
      }
    ],
    quiz: {
      question: "What is the main advantage of Lambda?",
      answers: [
        { id: "A", text: "You don't manage servers and pay only for what you use", correct: true },
        { id: "B", text: "It's cheaper than EC2 for all workloads", correct: false },
        { id: "C", text: "It replaces databases", correct: false },
        { id: "D", text: "It doesn't need security", correct: false }
      ]
    }
  },

  {
    id: 14,
    title: "Content Delivery and Caching",
    category: "Performance",
    duration: "7 min",
    intro:
      "CloudFront is a CDN that caches content globally, reducing latency for users worldwide.",
    keyIdea:
      "Caching content at edge locations near users provides faster delivery and reduces origin load.",
    sections: [
      {
        heading: "Global content delivery",
        paragraphs: [
          "CloudFront distributes content from S3 and other origins to edge locations worldwide.",
          "Users receive content from the nearest location, improving performance significantly."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Single origin server → Users far away experience high latency",
      cloud:
        "CloudFront caches at 200+ edge locations → Users get content from nearest location"
    },
    concepts: [
      {
        number: "01",
        title: "CDN",
        description: "Content Delivery Network distributes content globally."
      },
      {
        number: "02",
        title: "Edge locations",
        description: "Cache servers located near users worldwide."
      },
      {
        number: "03",
        title: "Cache TTL",
        description: "Time to Live determines how long content is cached."
      }
    ],
    quiz: {
      question: "Why use CloudFront?",
      answers: [
        { id: "A", text: "To cache content globally and reduce latency for users", correct: true },
        { id: "B", text: "To eliminate all networking", correct: false },
        { id: "C", text: "To replace VPCs", correct: false },
        { id: "D", text: "To manage DNS only", correct: false }
      ]
    }
  },

  {
    id: 15,
    title: "API Gateway",
    category: "Integration",
    duration: "8 min",
    intro:
      "API Gateway creates, publishes, and manages REST APIs and WebSocket APIs at scale.",
    keyIdea:
      "API Gateway provides a front door for backend services with authentication, rate limiting, and request transformation.",
    sections: [
      {
        heading: "API management",
        paragraphs: [
          "API Gateway handles API versioning, access control, and request validation.",
          "It integrates with Lambda, EC2, and other backends."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Backend exposed directly → No versioning → Rate limiting manual",
      cloud:
        "API Gateway in front → Enforce authentication → Rate limit automatically → Version APIs easily"
    },
    concepts: [
      {
        number: "01",
        title: "REST API",
        description: "HTTP-based API for CRUD operations."
      },
      {
        number: "02",
        title: "WebSocket API",
        description: "Full-duplex communication channel for real-time data."
      },
      {
        number: "03",
        title: "Rate limiting",
        description: "Restrict API calls to prevent abuse."
      }
    ],
    quiz: {
      question: "What does API Gateway provide?",
      answers: [
        { id: "A", text: "Authentication, rate limiting, and API management", correct: true },
        { id: "B", text: "Only DNS management", correct: false },
        { id: "C", text: "Database encryption", correct: false },
        { id: "D", text: "Automatic backups", correct: false }
      ]
    }
  },

  {
    id: 16,
    title: "Machine Learning Services",
    category: "AI/ML",
    duration: "8 min",
    intro:
      "AWS provides AI and machine learning services like SageMaker for building, training, and deploying models.",
    keyIdea:
      "AWS ML services make machine learning accessible without deep expertise in data science.",
    sections: [
      {
        heading: "ML services",
        paragraphs: [
          "SageMaker provides notebook instances for development. Amazon Rekognition analyzes images.",
          "Amazon Comprehend analyzes text. Pre-built services handle common ML tasks."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Hire ML experts → Set up infrastructure → Train for months",
      cloud:
        "Use pre-trained models → Customize with your data → Deploy in days"
    },
    concepts: [
      {
        number: "01",
        title: "SageMaker",
        description: "Managed ML service for the full ML lifecycle."
      },
      {
        number: "02",
        title: "Pre-trained models",
        description: "Ready-to-use models for common tasks."
      },
      {
        number: "03",
        title: "Inference",
        description: "Making predictions with trained models."
      }
    ],
    quiz: {
      question: "What is SageMaker?",
      answers: [
        { id: "A", text: "A managed service for building and deploying ML models", correct: true },
        { id: "B", text: "A database service", correct: false },
        { id: "C", text: "A networking service", correct: false },
        { id: "D", text: "A messaging service", correct: false }
      ]
    }
  },

  {
    id: 17,
    title: "Disaster Recovery and High Availability",
    category: "Resilience",
    duration: "8 min",
    intro:
      "AWS enables resilient architectures with multi-AZ deployments, backups, and geographic redundancy.",
    keyIdea:
      "High availability and disaster recovery ensure applications remain operational during failures.",
    sections: [
      {
        heading: "Resilience strategies",
        paragraphs: [
          "Multi-AZ deployments replicate across availability zones. Cross-region replication provides geographic redundancy.",
          "Route 53 health checks enable automatic failover."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Single location → Failure causes complete outage → Manual recovery",
      cloud:
        "Multi-AZ → Automatic failover → Services remain available during AZ failures"
    },
    concepts: [
      {
        number: "01",
        title: "Multi-AZ",
        description: "Deploy across multiple availability zones for high availability."
      },
      {
        number: "02",
        title: "Backup",
        description: "Regular copies for recovery from data loss."
      },
      {
        number: "03",
        title: "Failover",
        description: "Automatic switching to backup resources when primary fails."
      }
    ],
    quiz: {
      question: "What does multi-AZ deployment provide?",
      answers: [
        { id: "A", text: "High availability through replication across availability zones", correct: true },
        { id: "B", text: "Lower cost than single AZ", correct: false },
        { id: "C", text: "Elimination of all failures", correct: false },
        { id: "D", text: "No need for backups", correct: false }
      ]
    }
  },

  {
    id: 18,
    title: "AWS Well-Architected Framework",
    category: "Best Practices",
    duration: "8 min",
    intro:
      "The AWS Well-Architected Framework provides best practices for designing reliable, secure, efficient, and cost-effective systems.",
    keyIdea:
      "Five pillars - Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization.",
    sections: [
      {
        heading: "Architectural principles",
        paragraphs: [
          "Operational Excellence: Run and monitor systems. Security: Protect data and systems.",
          "Reliability: Resilience to failures. Performance: Efficient resource use. Cost: Avoid waste."
        ]
      }
    ],
    example: {
      title: "SIMPLE EXAMPLE",
      traditional:
        "Build systems without architecture principles → Many issues → Difficult to maintain",
      cloud:
        "Follow Well-Architected principles → Systems are reliable, secure, and cost-efficient"
    },
    concepts: [
      {
        number: "01",
        title: "Operational Excellence",
        description: "Run systems effectively and gain insights for improvement."
      },
      {
        number: "02",
        title: "Security",
        description: "Protect data, accounts, and systems from unauthorized access."
      },
      {
        number: "03",
        title: "Reliability",
        description: "Ensure systems work correctly and recover from failures."
      }
    ],
    quiz: {
      question: "Which of the following represents a pillar of the AWS Well-Architected Framework?",
      answers: [
        { id: "A", text: "Cost Optimization and Sustainability", correct: true },
        { id: "B", text: "Physical server ownership", correct: false },
        { id: "C", text: "Manual deployment only", correct: false },
        { id: "D", text: "Single Availability Zone deployment", correct: false }
      ]
    }
  },

  {
    id: 19,
    title: "Shared Responsibility & AWS Security Services",
    category: "Security & Compliance",
    duration: "9 min",
    intro:
      "AWS provides built-in defense-in-depth security tools alongside the Shared Responsibility Model, which clearly separates customer and AWS security obligations.",
    keyIdea:
      "AWS protects the infrastructure 'OF' the cloud; customers protect data, configurations, and access 'IN' the cloud.",
    sections: [
      {
        heading: "The Shared Responsibility Model",
        paragraphs: [
          "Security OF the Cloud: AWS manages and controls the physical data centers, host operating systems, hypervisors, and core networking facilities.",
          "Security IN the Cloud: Customers configure customer data encryption, guest operating systems on EC2, firewall rules via Security Groups/NACLs, and IAM user policies."
        ]
      },
      {
        heading: "Essential AWS Security Services",
        paragraphs: [
          "AWS Shield: Managed DDoS protection (Shield Standard is free; Shield Advanced provides 24/7 DDoS response team support).",
          "AWS WAF: Web Application Firewall that filters malicious HTTP/HTTPS web traffic (SQL injection, cross-site scripting).",
          "Amazon GuardDuty: Intelligent threat detection using machine learning and VPC flow logs.",
          "Amazon Inspector: Automated vulnerability assessment service for EC2 instances and container images in ECR.",
          "Amazon Macie: Data security service that uses ML to discover and protect sensitive data (PII) in Amazon S3.",
          "AWS KMS & Secrets Manager: KMS manages cryptographic keys, while Secrets Manager rotates, manages, and retrieves database credentials and API keys."
        ]
      }
    ],
    example: {
      title: "SECURITY RESPONSIBILITY BREAKDOWN",
      traditional:
        "Customer purchases physical firewalls, guards data center doors, patches server firmware, and manages operating systems.",
      cloud:
        "AWS guarantees data center physical security and hardware integrity; customer configures IAM policies, encryption, and Security Groups."
    },
    concepts: [
      {
        number: "01",
        title: "AWS Shield & WAF",
        description: "Layer 3/4 DDoS protection and Layer 7 web application firewall filtering."
      },
      {
        number: "02",
        title: "Amazon GuardDuty & Inspector",
        description: "Continuous threat detection and automated software vulnerability scanning."
      },
      {
        number: "03",
        title: "AWS KMS & Secrets Manager",
        description: "Centralized encryption key management and automatic database credential rotation."
      },
      {
        number: "04",
        title: "AWS Artifact",
        description: "On-demand portal for downloading AWS compliance reports, SOC certifications, and ISO agreements."
      }
    ],
    quiz: {
      question: "Under the AWS Shared Responsibility Model, which of the following is the customer's responsibility?",
      answers: [
        { id: "A", text: "Patching the guest operating system on Amazon EC2 instances", correct: true },
        { id: "B", text: "Securing physical access to AWS data centers", correct: false },
        { id: "C", text: "Replacing failing server hard drives in AWS racks", correct: false },
        { id: "D", text: "Managing hypervisor virtualization software updates", correct: false }
      ]
    }
  },

  {
    id: 20,
    title: "Migration, AWS Organizations & Support Plans",
    category: "Migration & Governance",
    duration: "9 min",
    intro:
      "Enterprise cloud adoption requires structured migration tooling, centralized multi-account governance with AWS Organizations, and selecting the right AWS Support tier.",
    keyIdea:
      "AWS Organizations enables consolidated billing and Service Control Policies (SCPs), while the Snow Family and DMS accelerate large-scale cloud migrations.",
    sections: [
      {
        heading: "AWS Organizations & Consolidated Billing",
        paragraphs: [
          "AWS Organizations allows you to centrally manage multiple AWS accounts under a single master payer account.",
          "Consolidated Billing combines usage across all linked accounts to qualify for tiered volume pricing discounts.",
          "Service Control Policies (SCPs) define the maximum available permissions for accounts and Organizational Units (OUs)."
        ]
      },
      {
        heading: "Cloud Migration Services",
        paragraphs: [
          "AWS Database Migration Service (DMS): Migrates on-premises databases to AWS with minimal application downtime.",
          "AWS Snow Family: Physical hardware appliances (Snowcone 8TB, Snowball Edge 80TB, Snowmobile up to 100PB) for moving petabytes of offline data into AWS."
        ]
      },
      {
        heading: "AWS Support Plan Tiers",
        paragraphs: [
          "Basic Support: Included for all customers; customer service and documentation access; 7 core Trusted Advisor checks.",
          "Developer Support: Business hours email access to Cloud Support Associates; 1 primary contact; < 12h response for impaired systems.",
          "Business Support: 24/7 phone/chat/email access to Cloud Support Engineers; unlimited contacts; full Trusted Advisor checks; < 1h response for production down.",
          "Enterprise Support: Dedicated Technical Account Manager (TAM), Concierge support team, Infrastructure Event Management (IEM), and < 15min response for business-critical outages."
        ]
      }
    ],
    example: {
      title: "MIGRATING 100 TB OF DATA",
      traditional:
        "Attempting to upload 100 TB over a slow 50 Mbps corporate internet connection takes weeks and saturates network bandwidth.",
      cloud:
        "Order an AWS Snowball Edge device, load data locally at high speed, ship it to AWS, and data is imported into Amazon S3 in days."
    },
    concepts: [
      {
        number: "01",
        title: "AWS Organizations & SCPs",
        description: "Centralized account hierarchy and guardrail permission boundaries across all company accounts."
      },
      {
        number: "02",
        title: "AWS Snow Family",
        description: "Secure, physical data transport appliances for petabyte-scale offline data migrations."
      },
      {
        number: "03",
        title: "Support Plan Levels",
        description: "Basic, Developer, Business, Enterprise On-Ramp, and Enterprise with dedicated TAM support."
      },
      {
        number: "04",
        title: "AWS Database Migration Service (DMS)",
        description: "Live database migration supporting homogeneous and heterogeneous database engines."
      }
    ],
    quiz: {
      question: "Which AWS Support tier provides a designated Technical Account Manager (TAM) and 15-minute response times for critical system outages?",
      answers: [
        { id: "A", text: "Enterprise Support", correct: true },
        { id: "B", text: "Developer Support", correct: false },
        { id: "C", text: "Basic Support", correct: false },
        { id: "D", text: "Business Support", correct: false }
      ]
    }
  }
];