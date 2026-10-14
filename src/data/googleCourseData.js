import { googleMockExam60 } from "./googleMockExamData.js";
export { googleMockExam60 };

export const course0Welcome = {
  about: {
    title: "Course 0: Welcome to Google Cloud Fundamentals",
    whatIsGcp:
      "Google Cloud is a comprehensive suite of cloud computing services running on the same planet-scale infrastructure that powers Google Search, YouTube, Gmail, and Google Maps. This course provides foundational mastery for anyone preparing for the Google Cloud Digital Leader certification or seeking practical fluency in Google Cloud architecture, core services, security, databases, AI, and cost management.",
    whatItProves:
      "Validates broad foundational understanding of cloud technology, Google Cloud core infrastructure, products, modern digital transformation, artificial intelligence (Vertex AI / Gemini), security, and cost governance.",
    whoShouldTake: [
      "Business and technology professionals evaluating or adopting Google Cloud.",
      "Developers, DevOps, and SysAdmins new to Google Cloud Platform (GCP).",
      "Solutions architects and IT leaders preparing for Google Cloud Digital Leader or Associate Cloud Engineer (ACE).",
      "Anyone seeking a clear, non-jargon understanding of cloud economics, AI, data analytics, and modern cloud architecture."
    ],
    whoDoesNotNeed: [
      "Senior Google Cloud certified architects with existing Professional Cloud Architect (PCA) credentials.",
      "Engineers only requiring deep-dive Kubernetes or Terraform scripts without foundational cloud knowledge."
    ],
    comparisons: [
      {
        cert: "Cloud Digital Leader vs. Associate Cloud Engineer (ACE)",
        desc: "Digital Leader focuses on high-level cloud concepts, service capabilities, business value, and architecture selection. ACE focuses on hands-on deployment, CLI commands (gcloud, gsutil, bq), and infrastructure administration."
      },
      {
        cert: "Google Cloud vs. AWS & Azure",
        desc: "Google Cloud excels in high-throughput private global networking, BigQuery serverless data analytics, Kubernetes (originating from Google Borg), and cutting-edge AI infrastructure (TPUs, Gemini, Vertex AI)."
      },
      {
        cert: "Digital Leader vs. Professional Cloud Architect (PCA)",
        desc: "Digital Leader is the foundational entry point. PCA is the advanced professional credential for enterprise solution architects designing secure, multi-region resilient systems."
      }
    ]
  },
  examInfo: {
    title: "Google Cloud Digital Leader Exam Information",
    updatedDate: "Current Exam Blueprint",
    passingScore: "Pass / Fail (Scaled score ~70%)",
    duration: "90 minutes",
    structure: "50–60 Multiple Choice and Multiple Select questions",
    pricing: "$99 USD (Standard registration fee)",
    prerequisites: "None. No prior technical experience required.",
    languages: "English, Japanese, Spanish, Portuguese",
    deliveryMode: "Online proctored or in-person at Kryterion testing centers",
    retakePolicy: "14 days after 1st attempt; 60 days after 2nd attempt; 365 days after 3rd attempt."
  },
  howToStudy: {
    title: "0.3 Athencert Study Strategy: Learn → Practice → Exam",
    steps: [
      {
        number: "01",
        title: "Master the 16 Core Modules",
        text: "Follow the 32 structured lessons covering Cloud Concepts, Compute, Storage, Networking, Databases, BigQuery, AI/ML, Security, DevOps, Billing, and Sustainability."
      },
      {
        number: "02",
        title: "Execute 12 Hands-On Labs",
        text: "Work through practical Cloud Console and Cloud Shell (gcloud) exercises to anchor abstract concepts into concrete experience."
      },
      {
        number: "03",
        title: "Review 14 Service Comparisons",
        text: "Study side-by-side matrices (e.g. Cloud Run vs GKE vs Compute Engine, Cloud SQL vs Spanner vs Bigtable) to master trade-off decision questions."
      },
      {
        number: "04",
        title: "Solve Architecture Scenarios & Mock Exams",
        text: "Sharpen decision-making using the Scenario Trainer and take the 60-question timed Final Mock Exam."
      }
    ]
  }
};

export const officialDomains = [
  {
    id: "domain-1",
    code: "SECTION 1",
    title: "Digital Transformation with Google Cloud",
    weight: "17%",
    description:
      "Cloud fundamentals, CapEx vs OpEx, Total Cost of Ownership (TCO), shared responsibility, digital transformation drivers, and cloud migration strategies.",
    modulesCovered: "Modules 1 & 2 • Lessons 1–5"
  },
  {
    id: "domain-2",
    code: "SECTION 2",
    title: "Innovating with Data & AI in Google Cloud",
    weight: "28%",
    description:
      "Databases (Cloud SQL, Spanner, Firestore, Bigtable), Data Analytics (BigQuery, Dataflow, Pub/Sub, Looker), and Artificial Intelligence (Vertex AI, Gemini, ML APIs).",
    modulesCovered: "Modules 6, 7 & 8 • Lessons 11–18"
  },
  {
    id: "domain-3",
    code: "SECTION 3",
    title: "Infrastructure & Application Modernization",
    weight: "30%",
    description:
      "Compute (Compute Engine, GKE, Cloud Run, App Engine), Storage (Cloud Storage tiers, Persistent Disk, Filestore), Networking (VPC, Cloud DNS, Load Balancing, Hybrid Connectivity), Containers, and Serverless.",
    modulesCovered: "Modules 3, 4, 5, 13 & 14 • Lessons 6–10, 23–27"
  },
  {
    id: "domain-4",
    code: "SECTION 4",
    title: "Security, Operations, Billing & Sustainability",
    weight: "25%",
    description:
      "Cloud IAM, Resource Hierarchy (Org→Folders→Projects→Resources), Encryption, Security Command Center, Cloud Monitoring & Logging, Billing accounts, Budgets, Architecture Framework, and Sustainability.",
    modulesCovered: "Modules 9, 10, 11, 12 & 15 • Lessons 19–22, 28–32"
  }
];

export const googleServiceCategories = [
  {
    category: "Compute & Containers",
    icon: "",
    description: "Virtual machines, managed Kubernetes clusters, and serverless application hosting.",
    services: [
      { name: "Compute Engine (GCE)", type: "IaaS", description: "Scalable virtual machines with customizable vCPUs, RAM, persistent disks, and global GPU acceleration." },
      { name: "Google Kubernetes Engine (GKE)", type: "Managed K8s", description: "Enterprise-grade container orchestration for deploying, managing, and scaling containerized applications." },
      { name: "Cloud Run", type: "Serverless Containers", description: "Deploy containerized applications instantly on a fully managed serverless platform with zero server management and scale-to-zero." },
      { name: "App Engine (GAE)", type: "PaaS", description: "Fully managed application platform for web apps and mobile backends in Standard and Flexible environments." },
      { name: "Cloud Functions", type: "FaaS (Serverless)", description: "Event-driven serverless functions executing lightweight code in response to Cloud Storage, Pub/Sub, or HTTP triggers." }
    ]
  },
  {
    category: "Storage & File Systems",
    icon: "",
    description: "Durable, high-availability object, block, and network-attached file storage.",
    services: [
      { name: "Cloud Storage", type: "Object Storage", description: "Global unified object storage with 11 9s durability and 4 tiers: Standard, Nearline, Coldline, and Archive." },
      { name: "Persistent Disk (PD)", type: "Block Storage", description: "Network-attached block storage drives (Standard HDD, Balanced SSD, Extreme SSD) mounted to Compute Engine VMs." },
      { name: "Filestore", type: "Managed NAS (NFS)", description: "Fully managed Network File System (NFS) storage for applications requiring POSIX file system compliance." },
      { name: "Local SSD", type: "Ephemeral Block", description: "Physically attached solid-state drives providing ultra-low microsecond latency and maximum IOPS (non-persistent)." }
    ]
  },
  {
    category: "Networking & Content Delivery",
    icon: "",
    description: "Software-defined global virtual private cloud, traffic management, and hybrid connectivity.",
    services: [
      { name: "Virtual Private Cloud (VPC)", type: "Global SDN", description: "Global software-defined network providing subnets, firewall rules, route tables, and internal IP addressing." },
      { name: "Cloud Load Balancing", type: "Global / Regional Proxy", description: "High-performance, single anycast IP global load balancer for distributing HTTP(S), TCP, and UDP traffic." },
      { name: "Cloud DNS", type: "Managed DNS", description: "High-availability, authoritative global domain name resolution service with 100% SLA." },
      { name: "Cloud VPN & Cloud Interconnect", type: "Hybrid Connectivity", description: "Secure IPSec VPN tunnels over public internet or dedicated physical fiber lines (up to 100 Gbps) connecting on-prem to Google." },
      { name: "Cloud CDN", type: "Edge Caching", description: "Global edge points of presence (PoPs) caching static and streaming web content closer to users." }
    ]
  },
  {
    category: "Databases",
    icon: "",
    description: "Fully managed relational, globally distributed, NoSQL document, and wide-column databases.",
    services: [
      { name: "Cloud SQL", type: "Managed Relational (RDBMS)", description: "Fully managed relational database service supporting MySQL, PostgreSQL, and Microsoft SQL Server." },
      { name: "Cloud Spanner", type: "Global RDBMS", description: "Horizontally scalable, globally distributed relational database offering ACID transactions and 99.999% SLA." },
      { name: "Firestore", type: "NoSQL Document", description: "Serverless document database for web, mobile, and IoT apps with real-time sync and offline support." },
      { name: "Cloud Bigtable", type: "NoSQL Wide-Column", description: "Petabyte-scale NoSQL database designed for high-throughput operational workloads, IoT time-series, and heavy analytical reads." },
      { name: "Memorystore", type: "In-Memory Cache", description: "Fully managed in-memory cache service for Redis and Memcached to accelerate application response times." }
    ]
  },
  {
    category: "Data Analytics & Messaging",
    icon: "",
    description: "Serverless data warehousing, stream processing, asynchronous messaging, and business intelligence.",
    services: [
      { name: "BigQuery", type: "Serverless Data Warehouse", description: "Multi-cloud, petabyte-scale serverless data warehouse enabling lightning-fast SQL queries and built-in ML (BigQuery ML)." },
      { name: "Pub/Sub", type: "Global Messaging", description: "Asynchronous, serverless publish/subscribe messaging service for stream ingestion and event-driven microservices." },
      { name: "Dataflow", type: "Stream & Batch Processing", description: "Fully managed unified stream and batch data processing pipeline service based on Apache Beam." },
      { name: "Dataproc", type: "Managed Hadoop/Spark", description: "Fast, easy, managed Apache Spark and Apache Hadoop cluster provisioning in under 90 seconds." },
      { name: "Looker", type: "Enterprise BI", description: "Modern business intelligence, data modeling (LookML), interactive dashboards, and analytics platform." }
    ]
  },
  {
    category: "Artificial Intelligence & ML",
    icon: "",
    description: "Foundational LLMs, Vertex AI unified platform, and turnkey cognitive intelligence APIs.",
    services: [
      { name: "Vertex AI", type: "Unified AI/ML Platform", description: "End-to-end platform to build, train, deploy, and manage machine learning models, search, and GenAI apps." },
      { name: "Gemini on Google Cloud", type: "Multimodal GenAI", description: "State-of-the-art multimodal generative AI models for text, code, image, audio, and reasoning tasks." },
      { name: "Vision AI & Cloud Translation", type: "Pre-trained AI APIs", description: "Ready-to-use cognitive APIs for optical character recognition, object detection, and multilingual translation." },
      { name: "Speech-to-Text & Text-to-Speech", type: "Audio AI APIs", description: "High-accuracy neural voice synthesis and real-time speech transcription across 125+ languages." }
    ]
  },
  {
    category: "Security, Identity & Governance",
    icon: "",
    description: "Zero-trust access control, centralized threat detection, key management, and DDoS defense.",
    services: [
      { name: "Cloud Identity and Access Management (IAM)", type: "Access Control", description: "Fine-grained access management defining WHO (identities) can do WHAT (roles) on WHICH resources." },
      { name: "Security Command Center (SCC)", type: "Security Management & SIEM", description: "Centralized vulnerability scanner, threat detection, and compliance reporting platform for Google Cloud." },
      { name: "Cloud Key Management Service (Cloud KMS)", type: "Cryptography & Keys", description: "Manage symmetric and asymmetric encryption keys, including Customer-Managed Encryption Keys (CMEK) and HSMs." },
      { name: "Cloud Armor", type: "WAF & DDoS Defense", description: "Enterprise web application firewall (WAF) and enterprise DDoS mitigation at Google's edge." },
      { name: "Secret Manager", type: "Secrets Vault", description: "Secure storage for API keys, passwords, database credentials, and certificates." }
    ]
  },
  {
    category: "Monitoring, Management & DevOps",
    icon: "",
    description: "Observability, centralized log analysis, automated CI/CD pipelines, and cost tracking.",
    services: [
      { name: "Cloud Monitoring", type: "Metrics & Uptime", description: "Collects performance metrics, creates interactive dashboards, and configures alert policies and uptime checks." },
      { name: "Cloud Logging", type: "Log Management", description: "Centralized log ingestion, real-time log querying via Log Explorer, and long-term compliance storage." },
      { name: "Cloud Build", type: "CI/CD Pipeline", description: "Serverless build and continuous integration platform that compiles, tests, and packages container images." },
      { name: "Artifact Registry", type: "Package & Container Registry", description: "Universal package manager and container image registry replacing Container Registry." },
      { name: "Cloud Billing & Cost Management", type: "Financial Governance", description: "Set budgets, automated alert thresholds, export billing to BigQuery, and analyze cost trends." }
    ]
  }
];

export const googleComparisons = [
  {
    id: "comp-1",
    category: "Cloud Concepts",
    title: "IaaS vs. PaaS vs. SaaS",
    summary: "The 3 foundational cloud service models distinguishing customer control versus provider abstraction.",
    items: [
      {
        aspect: "Definition",
        iaas: "Infrastructure as a Service: Rent raw virtual hardware (VMs, disks, networks).",
        paas: "Platform as a Service: Deploy code directly onto a managed application runtime.",
        saas: "Software as a Service: End-user software accessed over the web (e.g. Google Workspace)."
      },
      {
        aspect: "Customer Manages",
        iaas: "OS patches, middleware, runtimes, database software, application code, data, and firewall rules.",
        paas: "Application code and database data only. OS and server patching handled by Google.",
        saas: "User accounts and application configuration only. Zero infrastructure management."
      },
      {
        aspect: "Google Cloud Examples",
        iaas: "Compute Engine (GCE), Persistent Disk, Cloud VPC.",
        paas: "App Engine, Cloud Run, Cloud Functions, Cloud SQL.",
        saas: "Google Workspace (Gmail, Docs, Drive, Sheets), Looker SaaS."
      }
    ]
  },
  {
    id: "comp-2",
    category: "Compute",
    title: "Compute Engine vs. GKE vs. Cloud Run vs. App Engine",
    summary: "Architectural comparison for choosing the right Google Cloud compute runtime.",
    items: [
      {
        aspect: "Compute Type",
        iaas: "Compute Engine: Virtual Machines (Full OS root access).",
        paas: "GKE: Orchestrated Kubernetes Container Clusters.",
        saas: "Cloud Run: Serverless Containers (HTTP/gRPC/Events)."
      },
      {
        aspect: "Management Level",
        iaas: "Self-managed OS, security patches, scaling rules.",
        paas: "Managed control plane (Standard or fully automated GKE Autopilot).",
        saas: "100% Serverless: No cluster or node provisioning, instant scale-to-zero."
      },
      {
        aspect: "Ideal Use Case",
        iaas: "Legacy monoliths, custom kernel drivers, Windows Server, GPU training.",
        paas: "Complex multi-service microservices architectures needing Kubernetes APIs.",
        saas: "Stateless containerized web apps, REST APIs, event-driven backends."
      }
    ]
  },
  {
    id: "comp-3",
    category: "Storage",
    title: "Cloud Storage Classes: Standard vs. Nearline vs. Coldline vs. Archive",
    summary: "Cost and access frequency trade-offs across Google Cloud object storage tiers.",
    items: [
      {
        aspect: "Access Frequency",
        iaas: "Standard: Frequently accessed daily/weekly data.",
        paas: "Nearline: Accessed less than once per month (30-day min storage).",
        saas: "Coldline (90-day) / Archive (365-day min storage) for long-term disaster recovery."
      },
      {
        aspect: "Retrieval Latency",
        iaas: "Standard: Milliseconds (fastest).",
        paas: "Nearline: Milliseconds (identical speed to Standard).",
        saas: "Coldline & Archive: Milliseconds! (Unlike AWS Glacier, Google Archive serves data in ms)."
      },
      {
        aspect: "Pricing Model",
        iaas: "Standard: Highest storage cost ($0.020/GB), zero retrieval fees.",
        paas: "Nearline: Lower storage cost ($0.010/GB) + small retrieval fee per GB.",
        saas: "Archive: Lowest storage cost ($0.0012/GB) + higher retrieval fee per GB."
      }
    ]
  },
  {
    id: "comp-4",
    category: "Storage",
    title: "Persistent Disk vs. Filestore vs. Cloud Storage vs. Local SSD",
    summary: "Storage selector: Block storage vs File share vs Object storage vs Ephemeral SSD.",
    items: [
      {
        aspect: "Storage Paradigm",
        iaas: "Persistent Disk: Block Storage (mounted drive to a specific VM).",
        paas: "Filestore: Network File System (NFS) share accessed across multiple VMs.",
        saas: "Cloud Storage: Object Storage (REST API buckets and keys)."
      },
      {
        aspect: "Access Pattern",
        iaas: "Single VM read/write filesystem (or ReadOnlyMany across VMs).",
        paas: "POSIX compliant concurrent shared directory for enterprise applications.",
        saas: "Unstructured files (images, videos, backups, BigQuery raw files) via HTTPS."
      },
      {
        aspect: "Persistence & Durability",
        iaas: "Persistent Disk survives VM termination; snapshots can be taken.",
        paas: "Filestore is durable and independent of VM lifecycle.",
        saas: "Local SSD is wiped when VM stops; Local SSD is temporary cache only."
      }
    ]
  },
  {
    id: "comp-5",
    category: "Databases",
    title: "Cloud SQL vs. Cloud Spanner vs. Firestore vs. Cloud Bigtable",
    summary: "Master the 4 core Google Cloud database engines by structure, scale, and consistency.",
    items: [
      {
        aspect: "Data Model",
        iaas: "Cloud SQL: Relational RDBMS (MySQL, PostgreSQL, SQL Server).",
        paas: "Cloud Spanner: Globally distributed Relational RDBMS with ACID.",
        saas: "Firestore: NoSQL Document / Bigtable: NoSQL Wide-Column."
      },
      {
        aspect: "Scaling Limits",
        iaas: "Cloud SQL: Vertical scaling (up to 96 vCPUs / 64 TB storage) + read replicas.",
        paas: "Cloud Spanner: Horizontal scaling across continents with 99.999% SLA.",
        saas: "Bigtable: Petabyte-scale massive throughput; Firestore: Millions of concurrent clients."
      },
      {
        aspect: "Primary Use Case",
        iaas: "Standard ERP, CMS, e-commerce requiring SQL and ACID transactions.",
        paas: "Global financial trading, international banking, global inventory systems.",
        saas: "Firestore for mobile/web apps; Bigtable for IoT telemetry and real-time fraud detection."
      }
    ]
  },
  {
    id: "comp-6",
    category: "Analytics",
    title: "BigQuery vs. Cloud SQL",
    summary: "Online Analytical Processing (OLAP) vs. Online Transaction Processing (OLTP).",
    items: [
      {
        aspect: "Workload Focus",
        iaas: "BigQuery: OLAP (Data warehousing, complex aggregates across billions of rows).",
        paas: "Cloud SQL: OLTP (Frequent fast single-row reads and writes, e.g. user checkout).",
        saas: "Both support SQL, but their underlying storage and execution engines are totally different."
      },
      {
        aspect: "Infrastructure",
        iaas: "BigQuery is completely serverless. No server sizing, automatic storage and query allocation.",
        paas: "Cloud SQL requires provisioning CPU, RAM, and disk storage per instance.",
        saas: "BigQuery separates compute (slots) from storage (Colossus filesystem)."
      },
      {
        aspect: "Query Speed on TBs",
        iaas: "BigQuery executes queries across terabytes of data in seconds via Dremel.",
        paas: "Cloud SQL will slow down or timeout on large analytical scans.",
        saas: "Rule: Cloud SQL for live app state; BigQuery for historical analytical queries."
      }
    ]
  },
  {
    id: "comp-7",
    category: "Security",
    title: "Basic vs. Predefined vs. Custom IAM Roles",
    summary: "Understanding the evolution of Google Cloud IAM authorization granularity.",
    items: [
      {
        aspect: "Granularity",
        iaas: "Basic Roles: Broad, legacy roles (Owner, Editor, Viewer). Avoid in production.",
        paas: "Predefined Roles: Fine-grained, service-specific roles created and curated by Google.",
        saas: "Custom Roles: User-defined combinations of specific micro-permissions."
      },
      {
        aspect: "Examples",
        iaas: "roles/viewer (can view almost every resource in the entire project).",
        paas: "roles/storage.objectViewer (can only read objects inside Cloud Storage buckets).",
        saas: "customRole.corpPublisher (e.g. only storage.objects.create and get)."
      },
      {
        aspect: "Best Practice",
        iaas: "Principle of Least Privilege: Always prefer Predefined Roles over Basic Roles.",
        paas: "Use Custom Roles only when no Predefined Role matches exact corporate compliance.",
        saas: "Basic roles grant too much broad permission and fail least-privilege audits."
      }
    ]
  },
  {
    id: "comp-8",
    category: "Networking",
    title: "Cloud VPN vs. Cloud Interconnect",
    summary: "Hybrid cloud networking comparison: Encrypted public tunnel vs dedicated fiber line.",
    items: [
      {
        aspect: "Connection Medium",
        iaas: "Cloud VPN: Encrypted IPSec tunnels traversing the public internet.",
        paas: "Dedicated Interconnect: Physical enterprise fiber cable plugged into a Google Colocation facility.",
        saas: "Partner Interconnect: Private connection routed through an enterprise ISP partner."
      },
      {
        aspect: "Bandwidth & Latency",
        iaas: "Cloud VPN: Up to 3 Gbps per tunnel (subject to internet jitter/latency).",
        paas: "Dedicated Interconnect: 10 Gbps to 100 Gbps circuits (predictable, ultra-low latency).",
        saas: "Partner Interconnect: 50 Mbps up to 10 Gbps depending on service plan."
      },
      {
        aspect: "Cost & SLA",
        iaas: "Cloud VPN is inexpensive, quick to configure, but lacks guaranteed internet SLA.",
        paas: "Cloud Interconnect has higher initial setup costs but offers enterprise 99.99% availability SLA.",
        saas: "Rule: Start with Cloud VPN for dev/test; use Interconnect for mission-critical hybrid data."
      }
    ]
  },
  {
    id: "comp-9",
    category: "Observability",
    title: "Cloud Monitoring vs. Cloud Logging",
    summary: "Metrics and telemetry vs. structured event logs in Google Cloud Operations Suite.",
    items: [
      {
        aspect: "Data Collected",
        iaas: "Cloud Monitoring: Numerical metrics (CPU %, Memory usage, network I/O, latency, uptime).",
        paas: "Cloud Logging: Text and JSON structured log entries (audit logs, app errors, HTTP access).",
        saas: "Both work together in the Google Cloud Operations Suite (formerly Stackdriver)."
      },
      {
        aspect: "Alerting & Analytics",
        iaas: "Cloud Monitoring triggers alerts based on thresholds (e.g. CPU > 85% for 5 mins).",
        paas: "Cloud Logging Log Explorer queries logs using LogQL, and can generate Log-Based Metrics.",
        saas: "Cloud Logging can export logs to BigQuery, Cloud Storage, or Pub/Sub via log sinks."
      },
      {
        aspect: "Primary Tooling",
        iaas: "Dashboards, Alert Policies, Uptime Checks, Service-Level Objectives (SLOs).",
        paas: "Log Explorer, Log Router, Log Sinks, Error Reporting.",
        saas: "Together they provide full-stack observability for Site Reliability Engineering (SRE)."
      }
    ]
  },
  {
    id: "comp-10",
    category: "Financials",
    title: "CapEx vs. OpEx in Cloud Computing",
    summary: "Financial transition from upfront capital assets to variable operational utility spending.",
    items: [
      {
        aspect: "Definition",
        iaas: "CapEx (Capital Expenditure): Upfront payment to acquire physical assets (servers, buildings).",
        paas: "OpEx (Operational Expenditure): Ongoing day-to-day operational utility payments.",
        saas: "Cloud computing transforms IT from fixed CapEx to flexible OpEx."
      },
      {
        aspect: "Accounting & Tax",
        iaas: "CapEx is recorded on balance sheets and depreciated over 3–5 years.",
        paas: "OpEx is deducted as an operating expense in the current accounting period.",
        saas: "OpEx gives finance teams direct visibility and attribution per department or project."
      },
      {
        aspect: "Agility Impact",
        iaas: "CapEx requires 6–12 month procurement forecasts, leading to over-provisioning or shortages.",
        paas: "OpEx enables instant provisioning and de-provisioning with pay-as-you-go pricing.",
        saas: "If demand drops, OpEx spend drops immediately to zero."
      }
    ]
  }
];

export const scenarioQuestions = [
  {
    id: "gscen-1",
    scenario: "A fast-growing fintech startup wants to deploy a containerized Python REST API. The team wants zero server administration, automatic scaling from 0 to 1,000 instances during demand spikes, and only wants to pay when requests are actively being processed.",
    question: "Which Google Cloud compute service should the team choose?",
    options: [
      { id: "A", text: "Compute Engine with Managed Instance Groups", correct: false, explanation: "Compute Engine VMs incur costs while running even with zero traffic, and require OS maintenance." },
      { id: "B", text: "Cloud Run", correct: true, explanation: "Cloud Run is a fully managed serverless container platform that scales automatically to zero and bills only for the exact CPU/memory milliseconds consumed while serving requests." },
      { id: "C", text: "Google Kubernetes Engine (GKE) Standard", correct: false, explanation: "GKE Standard requires managing node pools and incurs underlying compute costs even during idle periods." },
      { id: "D", text: "Cloud Spanner", correct: false, explanation: "Cloud Spanner is a relational database service, not a compute container execution runtime." }
    ]
  },
  {
    id: "gscen-2",
    scenario: "An enterprise retail corporation is migrating an existing on-premises MySQL database containing critical transactional customer data. They require automated daily backups, automated OS and database patches, and high-availability multi-zone failover with zero manual intervention.",
    question: "Which service meets these requirements with minimal administrative overhead?",
    options: [
      { id: "A", text: "Cloud Bigtable", correct: false, explanation: "Cloud Bigtable is a NoSQL wide-column database for high-throughput operational/analytics workloads, not MySQL RDBMS." },
      { id: "B", text: "Cloud SQL for MySQL", correct: true, explanation: "Cloud SQL is a fully managed relational database engine supporting MySQL, PostgreSQL, and SQL Server with built-in automated backups, maintenance windows, and cross-zone high-availability failover." },
      { id: "C", text: "Firestore in Datastore mode", correct: false, explanation: "Firestore is a NoSQL document database, not a relational MySQL database." },
      { id: "D", text: "Self-managed MySQL on Compute Engine", correct: false, explanation: "Installing MySQL on Compute Engine requires manual OS patching, manual backup scripts, and manual HA replication setup." }
    ]
  },
  {
    id: "gscen-3",
    scenario: "A data analytics team needs to run complex interactive SQL queries across 50 terabytes of historical transaction logs. The queries will be run sporadically by business intelligence analysts, and the company does not want to pay for dedicated servers when no queries are executing.",
    question: "Which Google Cloud service should be selected?",
    options: [
      { id: "A", text: "BigQuery", correct: true, explanation: "BigQuery is a completely serverless, multi-cloud enterprise data warehouse. Storage is billed separately per GB, and queries are billed by the terabytes processed with zero cost when idle." },
      { id: "B", text: "Cloud SQL with Read Replicas", correct: false, explanation: "Cloud SQL is an OLTP transactional database and is not optimized for analytical queries scanning 50 TB of data." },
      { id: "C", text: "Dataproc running continuous Spark jobs", correct: false, explanation: "Dataproc clusters incur compute and VM costs while running and require cluster management." },
      { id: "D", text: "Cloud Filestore Enterprise", correct: false, explanation: "Filestore is a managed NFS file storage system, not an analytical SQL data warehouse." }
    ]
  },
  {
    id: "gscen-4",
    scenario: "A healthcare compliance department requires storing 10 years of patient medical audit logs. Regulatory mandates state that the logs must be preserved with 11 9s of durability, but will rarely or never be accessed after creation. Cost reduction is the number one priority.",
    question: "Which Cloud Storage class should be configured for these logs?",
    options: [
      { id: "A", text: "Cloud Storage Standard Class", correct: false, explanation: "Standard class has the highest monthly storage cost ($0.020/GB) designed for frequent daily access." },
      { id: "B", text: "Cloud Storage Nearline Class", correct: false, explanation: "Nearline is designed for data accessed once per month, which is more expensive than Archive for 10-year cold storage." },
      { id: "C", text: "Cloud Storage Archive Class", correct: true, explanation: "Archive storage offers the lowest monthly storage cost ($0.0012/GB/month) with 11 9s durability and sub-second retrieval latency, ideal for long-term compliance retention." },
      { id: "D", text: "Persistent Disk Standard HDD", correct: false, explanation: "Persistent Disk is block storage attached to VMs and is significantly more expensive than Cloud Storage Archive for long-term archiving." }
    ]
  },
  {
    id: "gscen-5",
    scenario: "An IT security director wants to ensure that a newly hired data analyst can view and run queries on specific BigQuery datasets, but cannot delete datasets, view billing information, or modify IAM permissions on the project.",
    question: "Which approach follows Google Cloud security best practices?",
    options: [
      { id: "A", text: "Assign the basic 'roles/viewer' role at the Project level", correct: false, explanation: "The basic Viewer role grants read access to almost all resources in the project, violating least privilege." },
      { id: "B", text: "Assign the predefined 'roles/bigquery.dataViewer' and 'roles/bigquery.jobUser' roles to the analyst's identity", correct: true, explanation: "Using specific predefined IAM roles ensures the analyst only receives the exact permissions needed to view data and execute queries (Principle of Least Privilege)." },
      { id: "C", text: "Share the project Owner service account JSON key with the analyst", correct: false, explanation: "Sharing Service Account keys violates identity security and grants full administrative control." },
      { id: "D", text: "Grant the analyst the basic 'roles/editor' role", correct: false, explanation: "The Editor role allows modifying and deleting resources across the entire project." }
    ]
  }
];

export const googleLabs = [
  {
    id: "lab-1",
    number: "01",
    title: "Create a Google Cloud Project & Explore Resource Hierarchy",
    domain: "Section 1: Digital Transformation & GCP Basics",
    duration: "15 min",
    objective: "Create a new isolated Google Cloud project, verify project ID vs project number, and understand organization resource inheritance.",
    scenario: "You are setting up a clean sandbox environment for a new development team at your enterprise.",
    steps: [
      "Navigate to the Google Cloud Console (console.cloud.google.com).",
      "Click the Project Dropdown in the top navigation bar and click 'New Project'.",
      "Enter a unique Project Name (e.g. 'athencert-sandbox-01') and note the auto-generated unique Project ID.",
      "Select your Organization or Folder parent node.",
      "Click 'Create' and wait for the notification banner confirming project provisioning.",
      "Inspect the Project Dashboard to view Project ID, Project Number, and compute resource quotas."
    ],
    commands: `# Create a project via gcloud CLI in Cloud Shell
gcloud projects create athencert-sandbox-$RANDOM --name="Athencert Sandbox"

# List active projects
gcloud projects list

# Set the active project in gcloud config
gcloud config set project <YOUR_PROJECT_ID>`,
    question: "Why can a Project ID NEVER be changed after project creation, whereas a Project Name can be changed at any time?",
    solution: "The Project ID is a globally unique permanent string used throughout Google Cloud APIs, IAM policies, and billing routing. Project Name is simply a friendly display label."
  },
  {
    id: "lab-2",
    number: "02",
    title: "Navigate Google Cloud Console & Dashboards",
    domain: "Section 1: Digital Transformation & GCP Basics",
    duration: "10 min",
    objective: "Master the Cloud Console search bar, navigation menu, service pin feature, and custom dashboard widgets.",
    scenario: "You need to quickly navigate between Compute, Storage, and Billing without getting lost in hundreds of GCP services.",
    steps: [
      "Open the Navigation Menu (hamburger icon ) in the top left.",
      "Pin 'Compute Engine', 'Cloud Storage', 'BigQuery', and 'IAM & Admin' to your quick-access favorites.",
      "Use the global search bar (<kbd>/</kbd>) to search for 'Cloud SQL' and jump directly to the service overview.",
      "Explore the Dashboard Activity tab to review the audit trail of recent project actions."
    ],
    commands: `# Search services and configurations via gcloud
gcloud services list --available
gcloud services enable compute.googleapis.com storage.googleapis.com`,
    question: "Where can you see a live stream of all administrative actions and deployments occurring inside your project?",
    solution: "The 'Activity' tab on the project dashboard and Cloud Logging Log Explorer track all admin activity audit logs."
  },
  {
    id: "lab-3",
    number: "03",
    title: "Launch Cloud Shell & Execute Essential `gcloud` Commands",
    domain: "Section 1: Digital Transformation & GCP Basics",
    duration: "15 min",
    objective: "Initialize Cloud Shell, use the integrated Cloud Shell Editor, and execute core `gcloud`, `gsutil`, and `bq` commands.",
    scenario: "You need to inspect and manage cloud resources via command line without installing any local SDK tools on your machine.",
    steps: [
      "Click the 'Activate Cloud Shell' button (>_) in the top right header.",
      "Wait for the ephemeral Debian VM with 5GB persistent home directory to initialize.",
      "Run `gcloud auth list` to verify your active authenticated user identity.",
      "Run `gcloud config list` to review your active project, compute region, and compute zone defaults.",
      "Open the Cloud Shell Editor by clicking 'Open Editor' in the toolbar to inspect files in a built-in VS Code-style IDE."
    ],
    commands: `# Check authenticated account
gcloud auth list

# Set default compute region and zone
gcloud config set compute/region us-central1
gcloud config set compute/zone us-central1-a

# Display active gcloud configuration
gcloud config list`,
    question: "What is the storage persistence behavior of Cloud Shell across sessions?",
    solution: "Your $HOME directory (up to 5GB) is persistently saved across sessions. However, the VM instance itself is ephemeral and recycled after 20 minutes of inactivity."
  },
  {
    id: "lab-4",
    number: "04",
    title: "Provision a Compute Engine Virtual Machine Instance",
    domain: "Section 3: Infrastructure Modernization",
    duration: "20 min",
    objective: "Deploy an e2-micro Debian VM instance with boot disk, VPC network interface, and firewall tags.",
    scenario: "You need to host a custom legacy utility script on a dedicated Linux virtual machine in Google Cloud.",
    steps: [
      "In the Cloud Console, navigate to Compute Engine > VM instances.",
      "Click 'Create Instance'.",
      "Configure Name: `web-server-vm`, Region: `us-central1`, Zone: `us-central1-a`.",
      "Select Machine Configuration: General-purpose `E2` series, Machine type: `e2-micro` (2 vCPUs, 1 GB RAM).",
      "Under Boot Disk, select Debian GNU/Linux 12 with a 10 GB Standard Persistent Disk.",
      "Under Firewall, check 'Allow HTTP traffic'.",
      "Click 'Create' and monitor instance provisioning."
    ],
    commands: `# Create Compute Engine VM using gcloud
gcloud compute instances create web-server-vm \\
  --zone=us-central1-a \\
  --machine-type=e2-micro \\
  --image-family=debian-12 \\
  --image-project=debian-cloud \\
  --tags=http-server

# List running VMs
gcloud compute instances list`,
    question: "What happens to the boot disk data if you stop (shut down) a Compute Engine VM instance?",
    solution: "The Persistent Disk data remains intact. You stop paying for CPU and RAM, but you continue paying for the allocated Persistent Disk storage capacity until the disk is deleted."
  },
  {
    id: "lab-5",
    number: "05",
    title: "Connect to a VM via Browser SSH & Install NGINX",
    domain: "Section 3: Infrastructure Modernization",
    duration: "15 min",
    objective: "Establish a secure SSH session directly from the Google Cloud Console and verify external web connectivity.",
    scenario: "You need to log into your newly created VM to install a web server without setting up local SSH keys or opening custom firewall ports.",
    steps: [
      "In the VM instances list, locate `web-server-vm` and click the 'SSH' button.",
      "Google Cloud automatically generates temporary SSH keys and opens a secure browser terminal window.",
      "Update package repository: `sudo apt update`.",
      "Install NGINX web server: `sudo apt install -y nginx`.",
      "Verify NGINX service status: `systemctl status nginx`.",
      "Copy the VM's External IP address and open it in a browser tab (http://<EXTERNAL_IP>) to view the 'Welcome to nginx!' page."
    ],
    commands: `# SSH into VM via gcloud command line
gcloud compute ssh web-server-vm --zone=us-central1-a

# Inside the VM terminal:
sudo apt update && sudo apt install -y nginx
echo "<h1>Deployed on Google Cloud Compute Engine!</h1>" | sudo tee /var/www/html/index.html`,
    question: "How does Google Cloud Console Browser SSH connect securely without requiring a static public IP on the VM?",
    solution: "Google Cloud utilizes Identity-Aware Proxy (IAP) TCP forwarding to tunnel SSH traffic securely through Google's identity infrastructure."
  },
  {
    id: "lab-6",
    number: "06",
    title: "Create a Cloud Storage Bucket with Lifecycle Rules",
    domain: "Section 3: Infrastructure Modernization",
    duration: "15 min",
    objective: "Create a globally unique Cloud Storage bucket, configure Standard storage with auto-transition to Nearline/Archive after 30 days.",
    scenario: "Your application generates invoice PDFs that must be stored in Standard class for 30 days, then moved to Nearline class for cost savings.",
    steps: [
      "Navigate to Cloud Storage > Buckets in the Console.",
      "Click 'Create'.",
      "Enter a globally unique bucket name (e.g. `corp-invoices-yourname-2026`).",
      "Select Location Type: 'Region' (e.g. `us-central1`).",
      "Select Default Storage Class: 'Standard'.",
      "Choose Access Control: 'Uniform' (recommended by Google for simplified IAM permissions).",
      "Click 'Create'.",
      "Go to the 'Lifecycle' tab, click 'Add a rule', set Action: 'Set storage class to Nearline', Condition: 'Age: 30 days'."
    ],
    commands: `# Create bucket using gcloud storage
gcloud storage buckets create gs://corp-invoices-$RANDOM --location=us-central1 --default-storage-class=STANDARD

# View bucket details
gcloud storage buckets describe gs://<YOUR_BUCKET_NAME>`,
    question: "What is the difference between Uniform and Fine-Grained access control on Cloud Storage buckets?",
    solution: "Uniform access control applies IAM permissions at the bucket level for all objects (Google's best practice). Fine-grained allows individual Access Control Lists (ACLs) per object."
  },
  {
    id: "lab-7",
    number: "07",
    title: "Upload Objects & Manage Public vs. Private Access",
    domain: "Section 3: Infrastructure Modernization",
    duration: "15 min",
    objective: "Upload files to Cloud Storage via console and `gcloud storage` CLI, and configure secure access.",
    scenario: "You need to store website assets in Cloud Storage and ensure only authenticated identities or authorized public links can read them.",
    steps: [
      "Open your newly created Cloud Storage bucket.",
      "Click 'Upload Files' and upload a sample image or text document (`logo.png`).",
      "Click on the uploaded object to inspect its metadata, storage class, and public URL.",
      "Observe that by default, public access is prevented via Public Access Prevention.",
      "Upload another file using Cloud Shell CLI: `echo 'Hello GCP' > sample.txt && gcloud storage cp sample.txt gs://<BUCKET_NAME>/`."
    ],
    commands: `# Upload a file
gcloud storage cp sample.txt gs://<YOUR_BUCKET_NAME>/

# List objects inside bucket
gcloud storage ls gs://<YOUR_BUCKET_NAME>/

# Download object back to local storage
gcloud storage cp gs://<YOUR_BUCKET_NAME>/sample.txt ./downloaded-sample.txt`,
    question: "If an object is uploaded to a Standard bucket, how long does it take for Google Cloud to replicate it across multiple zones?",
    solution: "Cloud Storage regional and multi-regional buckets provide immediate strongly consistent replication across multiple availability zones within milliseconds."
  },
  {
    id: "lab-8",
    number: "08",
    title: "Configure IAM Roles & Least Privilege Principle",
    domain: "Section 4: Security, Operations & Governance",
    duration: "20 min",
    objective: "Assign predefined roles, inspect IAM policy inheritance, and create a service account with minimal permissions.",
    scenario: "An automated backup script needs permission to upload files to Cloud Storage without having full project administrative privileges.",
    steps: [
      "In Cloud Console, navigate to IAM & Admin > Service Accounts.",
      "Click 'Create Service Account'.",
      "Name: `backup-uploader-sa`, Description: `Service account for automated nightly backups`.",
      "Grant Role: Select `Storage Object Creator` (allows writing objects without permission to read or delete existing objects).",
      "Click 'Done'.",
      "Navigate to IAM & Admin > IAM to inspect the project-level IAM permission table."
    ],
    commands: `# Create Service Account via CLI
gcloud iam service-accounts create backup-uploader-sa \\
  --description="Nightly backup automated uploader" \\
  --display-name="Backup Uploader SA"

# Bind Storage Object Creator role
gcloud projects add-iam-policy-binding <YOUR_PROJECT_ID> \\
  --member="serviceAccount:backup-uploader-sa@<YOUR_PROJECT_ID>.iam.gserviceaccount.com" \\
  --role="roles/storage.objectCreator"`,
    question: "Why should you use a Service Account instead of individual user credentials for automated scripts and backend applications?",
    solution: "Service accounts are managed non-human identities with fine-grained IAM roles that do not require passwords, do not leave the company when employees leave, and prevent credential sharing."
  },
  {
    id: "lab-9",
    number: "09",
    title: "Explore VPC Networks, Subnets & Firewall Rules",
    domain: "Section 3: Infrastructure Modernization",
    duration: "20 min",
    objective: "Create a custom mode VPC network, define regional subnets, and configure a restrictive firewall rule.",
    scenario: "You need to isolate database VMs in a private subnet while allowing web servers in a public subnet to communicate with them.",
    steps: [
      "In Cloud Console, navigate to VPC Network > VPC networks.",
      "Click 'Create VPC Network'.",
      "Name: `custom-prod-vpc`, Subnet creation mode: `Custom`.",
      "Add Subnet: Name: `web-subnet-us`, Region: `us-central1`, IPv4 range: `10.0.1.0/24`.",
      "Add Subnet: Name: `db-subnet-us`, Region: `us-central1`, IPv4 range: `10.0.2.0/24`.",
      "Configure Firewall Rule: Name: `allow-internal-traffic`, Action: `Allow`, Protocols: `tcp:80, tcp:443`, Source: `10.0.1.0/24`.",
      "Click 'Create' to provision the custom software-defined network."
    ],
    commands: `# Create custom VPC network
gcloud compute networks create custom-prod-vpc --subnet-mode=custom

# Add subnet
gcloud compute networks subnets create web-subnet-us \\
  --network=custom-prod-vpc \\
  --region=us-central1 \\
  --range=10.0.1.0/24

# Create firewall rule
gcloud compute firewall-rules create allow-http-custom \\
  --network=custom-prod-vpc \\
  --allow=tcp:80 \\
  --source-ranges=0.0.0.0/0`,
    question: "What is the key difference between an Auto mode VPC network and a Custom mode VPC network?",
    solution: "Auto mode automatically creates a pre-populated subnet in every Google Cloud region using a preset /20 IP range. Custom mode gives you complete control to define only the subnets and IP ranges you need (Google recommended for production)."
  },
  {
    id: "lab-10",
    number: "10",
    title: "Provision a Managed Cloud SQL Database Instance",
    domain: "Section 2: Innovating with Data & AI",
    duration: "20 min",
    objective: "Create a fully managed PostgreSQL instance with automated backups, private IP, and maintenance windows.",
    scenario: "You are deploying the backend relational database for an enterprise customer portal.",
    steps: [
      "In Cloud Console, navigate to Databases > SQL.",
      "Click 'Create Instance' and choose 'PostgreSQL'.",
      "Instance ID: `corp-postgres-db`, Password: Set a strong root password.",
      "Choose Database version: PostgreSQL 15.",
      "Configuration: Choose 'Development' (single zone) or 'Production' (High availability with automatic cross-zone failover).",
      "Under Backups, verify automated daily backups are enabled.",
      "Click 'Create Instance' (provisioning takes approximately 5 minutes)."
    ],
    commands: `# Create Cloud SQL PostgreSQL instance using gcloud
gcloud sql instances create corp-postgres-db \\
  --database-version=POSTGRES_15 \\
  --tier=db-f1-micro \\
  --region=us-central1 \\
  --root-password="SuperSecretPassword123!"

# List databases
gcloud sql instances list`,
    question: "How does Cloud SQL High Availability (HA) protect your database during an infrastructure datacenter outage?",
    solution: "Cloud SQL HA provisions a primary instance in Zone A and a standby synchronous replica in Zone B. If Zone A fails, Google Cloud automatically switches traffic to Zone B in under 60 seconds with zero data loss."
  },
  {
    id: "lab-11",
    number: "11",
    title: "Run Serverless SQL Queries on BigQuery Public Datasets",
    domain: "Section 2: Innovating with Data & AI",
    duration: "15 min",
    objective: "Execute analytical SQL queries against petabyte-scale public datasets without managing any database server.",
    scenario: "Your marketing leadership wants to analyze millions of Wikipedia page views using fast SQL queries.",
    steps: [
      "In Cloud Console, navigate to Analytics > BigQuery (SQL Workspace).",
      "Click '+ Add' > 'Public Datasets' and search for 'Wikipedia'.",
      "In the SQL query editor, type a query scanning millions of rows of view logs.",
      "Notice the top right query validator shows: 'This query will process 350 MB when run'.",
      "Click 'Run' and observe the query execution completes in under 2 seconds across millions of records.",
      "Inspect the Results tab, JSON view, and Execution Details."
    ],
    commands: `# Run query via bq command line tool in Cloud Shell
bq query --use_legacy_sql=false \\
'SELECT title, SUM(views) as total_views
 FROM \`bigquery-public-data.wikipedia.pageviews_2023\`
 WHERE DATE(datehour) = "2023-01-01" AND wiki = "en"
 GROUP BY title
 ORDER BY total_views DESC
 LIMIT 10;'`,
    question: "Why does BigQuery charge based on the bytes of data processed by a query rather than the time the query took to run?",
    solution: "BigQuery uses a columnar storage format (Capacitor) and serverless distributed query execution engine (Dremel). You only pay for the specific columns and bytes read during the scan."
  },
  {
    id: "lab-12",
    number: "12",
    title: "Deploy a Containerized Web Application to Cloud Run",
    domain: "Section 3: Infrastructure Modernization",
    duration: "15 min",
    objective: "Deploy a container image to Cloud Run, configure automatic HTTPS, test auto-scaling, and scale down to zero.",
    scenario: "You need to launch a modern microservice from a container image with public HTTPS access and zero server maintenance.",
    steps: [
      "In Cloud Console, navigate to Serverless > Cloud Run.",
      "Click 'Deploy Container' > 'Service'.",
      "Select 'Deploy one revision from an existing container image'.",
      "Image URL: `us-docker.pkg.dev/cloudrun/container/hello` (Google's official sample container).",
      "Service name: `hello-cloudrun-svc`, Region: `us-central1`.",
      "Authentication: Check 'Allow unauthenticated invocations' for public web access.",
      "Click 'Create'.",
      "Within 30 seconds, Cloud Run assigns a unique secure HTTPS URL (e.g. `https://hello-cloudrun-svc-xxx.a.run.app`).",
      "Open the URL in your browser to verify the live containerized application."
    ],
    commands: `# Deploy to Cloud Run via gcloud CLI
gcloud run deploy hello-cloudrun-svc \\
  --image=us-docker.pkg.dev/cloudrun/container/hello \\
  --platform=managed \\
  --region=us-central1 \\
  --allow-unauthenticated

# Describe running service
gcloud run services describe hello-cloudrun-svc --region=us-central1`,
    question: "If nobody visits your Cloud Run application for 2 hours, how much do you pay for compute during those 2 hours?",
    solution: "$0.00. Cloud Run scales automatically down to zero container instances when there is no incoming traffic, eliminating idle compute costs."
  }
];

export const domainTests = [
  {
    id: "dt-1",
    title: "Section 1: Digital Transformation & GCP Concepts Test",
    weight: "17%",
    questionCount: 15,
    duration: "25 min",
    description: "Evaluates cloud economics, CapEx vs OpEx, TCO, Shared Responsibility Model, and organizational resource hierarchy (Org → Folders → Projects → Resources)."
  },
  {
    id: "dt-2",
    title: "Section 2: Data, Databases & AI/ML Test",
    weight: "28%",
    questionCount: 20,
    duration: "30 min",
    description: "Evaluates Cloud SQL, Cloud Spanner, Firestore, Bigtable, BigQuery, Dataflow, Pub/Sub, Vertex AI, Gemini, and AI/ML API selection."
  },
  {
    id: "dt-3",
    title: "Section 3: Infrastructure Modernization Test",
    weight: "30%",
    questionCount: 20,
    duration: "30 min",
    description: "Evaluates Compute Engine VMs, GKE Kubernetes, Cloud Run serverless containers, App Engine, Cloud Storage classes, and VPC networking."
  },
  {
    id: "dt-4",
    title: "Section 4: Security, Operations, Billing & Architecture Test",
    weight: "25%",
    questionCount: 18,
    duration: "30 min",
    description: "Evaluates Cloud IAM roles, Security Command Center, KMS, Cloud Monitoring & Logging, Billing accounts, budgets, and the Architecture Framework."
  }
];

export const practiceExams = [
  {
    id: "pe-1",
    title: "Google Cloud Digital Leader Practice Exam 1",
    questionCount: 50,
    duration: "75 min",
    passingScore: 70,
    description: "Comprehensive foundational test covering cloud fundamentals, Compute Engine, Storage classes, and BigQuery analytics."
  },
  {
    id: "pe-2",
    title: "Google Cloud Digital Leader Practice Exam 2",
    questionCount: 50,
    duration: "75 min",
    passingScore: 70,
    description: "Scenario-focused exam emphasizing database selection (Cloud SQL vs Spanner vs Bigtable), VPC networking, and hybrid connectivity."
  },
  {
    id: "pe-3",
    title: "Google Cloud Digital Leader Practice Exam 3",
    questionCount: 50,
    duration: "75 min",
    passingScore: 70,
    description: "Deep dive into Cloud IAM least privilege, Security Command Center, Zero Trust, Cloud Monitoring, and Billing budgets."
  },
  {
    id: "pe-4",
    title: "Google Cloud Digital Leader Practice Exam 4",
    questionCount: 50,
    duration: "75 min",
    passingScore: 70,
    description: "Covers modern AI & Machine Learning, Vertex AI, Gemini LLMs, Containers, GKE, Cloud Run, and Serverless event architectures."
  },
  {
    id: "pe-5",
    title: "Google Cloud Digital Leader Practice Exam 5",
    questionCount: 50,
    duration: "75 min",
    passingScore: 70,
    description: "Full exam simulation matching official question weighting across all 4 Cloud Digital Leader domains."
  },
  {
    id: "mock-final",
    title: " Final Google Cloud Certification Mock Simulator",
    questionCount: 60,
    duration: "90 min",
    passingScore: 70,
    description: "The ultimate 60-question timed exam simulator with 10 diagnostic breakdown areas (Cloud Concepts, Compute, Storage, Networking, Databases, AI, Security, Billing, Architecture, Operations) and personalized weak area remediation."
  }
];

export const examReadinessAreas = [
  {
    id: "area-cloud-concepts",
    name: "1. Cloud Concepts & Digital Transformation",
    officialWeight: "17%",
    benchmark: 88,
    lessonIds: [1, 2, 3, 4, 5]
  },
  {
    id: "area-compute-containers",
    name: "2. Compute, Containers & Serverless",
    officialWeight: "20%",
    benchmark: 84,
    lessonIds: [6, 7, 8, 23, 24, 25, 26, 27]
  },
  {
    id: "area-storage-networking",
    name: "3. Cloud Storage & VPC Networking",
    officialWeight: "18%",
    benchmark: 82,
    lessonIds: [9, 10, 28, 29]
  },
  {
    id: "area-databases-analytics",
    name: "4. Databases & BigQuery Analytics",
    officialWeight: "18%",
    benchmark: 85,
    lessonIds: [11, 12, 13, 14, 15]
  },
  {
    id: "area-ai-ml",
    name: "5. Artificial Intelligence & Vertex AI",
    officialWeight: "10%",
    benchmark: 80,
    lessonIds: [16, 17, 18]
  },
  {
    id: "area-security-iam",
    name: "6. Security, Identity & Cloud IAM",
    officialWeight: "15%",
    benchmark: 76,
    lessonIds: [19, 20, 21, 22]
  },
  {
    id: "area-billing-architecture",
    name: "7. Billing, Cost Governance & Architecture",
    officialWeight: "12%",
    benchmark: 82,
    lessonIds: [30, 31, 32]
  }
];

export const studyPlans = [
  {
    id: "plan-30m",
    name: "30-Minute Emergency Cram",
    target: "Candidates taking the exam today",
    focus: "High-yield service definitions, IaaS vs PaaS vs SaaS, and Cloud Storage tier rules.",
    items: [
      "Review the Master Cheat Sheet acronym glossary.",
      "Memorize the Database Selector: Cloud SQL (RDBMS) vs Spanner (Global RDBMS) vs Bigtable (Heavy NoSQL) vs Firestore (Document).",
      "Recall Compute: Cloud Run (Serverless containers) vs GKE (Kubernetes) vs Compute Engine (VMs).",
      "Check Storage tiers: Standard (Hot) vs Nearline (30d) vs Coldline (90d) vs Archive (365d)."
    ]
  },
  {
    id: "plan-1d",
    name: "1-Day Intensive Sprint",
    target: "Fast-track revision before test day",
    focus: "Scenario decision questions and IAM permission rules.",
    items: [
      "Complete the Module 16 Architecture Scenarios.",
      "Review the 14 Comparison Battlecards (especially Compute and Databases).",
      "Review Cloud IAM: Users vs Service Accounts, Predefined vs Basic Roles, Least Privilege.",
      "Take 1 full 50-question Practice Exam and review incorrect answers."
    ]
  },
  {
    id: "plan-3d",
    name: "3-Day Focused Review",
    target: "Structured weekend study plan",
    focus: "Data analytics, AI/ML (Vertex AI & Gemini), and VPC networking.",
    items: [
      "Day 1: Cloud Concepts, Resource Hierarchy (Org→Folders→Projects), and Compute options.",
      "Day 2: Cloud Storage, Cloud SQL, BigQuery, Pub/Sub, Dataflow, and Vertex AI.",
      "Day 3: Security & IAM, Billing accounts & budgets, and 2 Practice Exams."
    ]
  },
  {
    id: "plan-7d",
    name: "7-Day Comprehensive Review",
    target: "Balanced evening study (1 hour/day)",
    focus: "All 16 curriculum modules + 12 Hands-on labs.",
    items: [
      "Days 1–2: Modules 1–5 (Cloud basics, Compute Engine, Storage classes, VPC networking).",
      "Days 3–4: Modules 6–8 (Databases, BigQuery, Vertex AI, Gemini GenAI).",
      "Day 5: Modules 9–11 (Security, IAM, Monitoring, Logging, Billing accounts).",
      "Day 6: Modules 12–15 (Reliability, Containers, Serverless, Sustainability).",
      "Day 7: Take the 60-question Final Mock Exam Simulator."
    ]
  },
  {
    id: "plan-14d",
    name: "14-Day Zero-to-Hero Foundation",
    target: "Complete beginner with zero cloud background",
    focus: "Step-by-step mastery of all 32 lessons, 12 labs, and all quizzes.",
    items: [
      "Week 1: Lessons 1–16 (Foundations, Compute, Storage, Databases, Analytics, AI).",
      "Week 2: Lessons 17–32 (Security, DevOps, Billing, Architecture, Containers, Sustainability).",
      "Execute all 12 Hands-On Labs in Cloud Shell.",
      "Achieve 85%+ on all Domain Tests and Final Mock Exam."
    ]
  }
];

export const masterCheatSheet = {
  rulesOfThumb: [
    { title: "Compute: Full OS control needed", text: "Choose Compute Engine (IaaS virtual machines)." },
    { title: "Compute: Serverless container with zero server admin", text: "Choose Cloud Run (automatic scale to zero, pay per request millisecond)." },
    { title: "Compute: Orchestrating complex Kubernetes microservices", text: "Choose Google Kubernetes Engine (GKE) or GKE Autopilot." },
    { title: "Storage: Files rarely accessed for 10+ years compliance", text: "Choose Cloud Storage Archive class ($0.0012/GB, millisecond retrieval)." },
    { title: "Storage: Shared file system across Linux VMs via NFS", text: "Choose Cloud Filestore (POSIX compliance)." },
    { title: "Databases: Standard MySQL, PostgreSQL, or SQL Server", text: "Choose Cloud SQL (built-in automated backups and cross-zone HA)." },
    { title: "Databases: Global relational database with 99.999% SLA", text: "Choose Cloud Spanner (horizontal scale + ACID transactions)." },
    { title: "Databases: Petabyte-scale operational IoT time-series & heavy reads", text: "Choose Cloud Bigtable (millisecond latency NoSQL)." },
    { title: "Databases: Serverless mobile/web app with real-time sync", text: "Choose Firestore (document NoSQL)." },
    { title: "Analytics: Petabyte-scale SQL data warehouse without servers", text: "Choose BigQuery (serverless, columnar, built-in ML)." },
    { title: "Security: Managing access to Google Cloud resources", text: "Use Cloud IAM (Identity and Access Management) with Predefined Roles." },
    { title: "Security: Automated script or VM connecting to GCP services", text: "Use a Service Account with minimal necessary IAM permissions." },
    { title: "Cost: Prevent unexpected cloud bill overruns", text: "Create Cloud Billing Budgets with automated email and Pub/Sub alerts." }
  ],
  acronyms: [
    { code: "GCP", term: "Google Cloud Platform", meaning: "Google's suite of public cloud computing services." },
    { code: "GCE", term: "Compute Engine", meaning: "Google's Infrastructure as a Service (IaaS) virtual machine provider." },
    { code: "GKE", term: "Google Kubernetes Engine", meaning: "Managed Kubernetes container orchestration service." },
    { code: "GCS", term: "Google Cloud Storage", meaning: "Unified object storage with Standard, Nearline, Coldline, and Archive classes." },
    { code: "GAE", term: "Google App Engine", meaning: "Platform as a Service (PaaS) for deploying web applications." },
    { code: "IAM", term: "Identity & Access Management", meaning: "Fine-grained access control system defining WHO has WHAT permissions." },
    { code: "VPC", term: "Virtual Private Cloud", meaning: "Global software-defined private virtual network in Google Cloud." },
    { code: "CMEK", term: "Customer-Managed Encryption Keys", meaning: "Cryptographic keys generated and managed by the customer in Cloud KMS." },
    { code: "SCC", term: "Security Command Center", meaning: "Centralized security vulnerability scanner and threat monitoring system." },
    { code: "SRE", term: "Site Reliability Engineering", meaning: "Google's engineering discipline applying software practices to infrastructure operations." },
    { code: "SLO / SLA", term: "Service Level Objective / Agreement", meaning: "Measurable availability target and contractual reliability commitment." },
    { code: "RPO / RTO", term: "Recovery Point / Time Objective", meaning: "Max acceptable data loss window (RPO) and max downtime duration (RTO)." },
    { code: "CUD", term: "Committed Use Discount", meaning: "1-year or 3-year commitment discount offering up to 57–70% savings on compute." },
    { code: "TCO", term: "Total Cost of Ownership", meaning: "Complete cost assessment comparing on-prem datacenters to cloud operations." }
  ]
};

export const careerRoadmap = {
  description: "Earning foundational Google Cloud knowledge opens diverse professional specialization paths across cloud architecture, development, data engineering, and security.",
  paths: [
    {
      certCode: "ACE",
      title: "Associate Cloud Engineer",
      badge: "CORE PRACTITIONER",
      focus: "Hands-on deployment, monitoring, and management of Google Cloud infrastructure using gcloud CLI, Cloud Console, and Terraform.",
      prerequisite: "Google Cloud Fundamentals / Cloud Digital Leader",
      recommendedFor: "SysAdmins, Cloud Admins, DevOps practitioners."
    },
    {
      certCode: "PCA",
      title: "Professional Cloud Architect",
      badge: "ENTERPRISE ARCHITECTURE",
      focus: "Design, develop, and manage robust, secure, scalable, highly available, and dynamic cloud enterprise solutions.",
      prerequisite: "ACE or 2+ years of cloud architecture experience",
      recommendedFor: "Solutions Architects, Principal Engineers, IT Executives."
    },
    {
      certCode: "PDE",
      title: "Professional Data Engineer",
      badge: "BIG DATA & ANALYTICS",
      focus: "Build and operationalize data processing systems with BigQuery, Dataflow, Dataproc, Pub/Sub, and Bigtable.",
      prerequisite: "Solid SQL, Python, and data pipeline fundamentals",
      recommendedFor: "Data Engineers, Analytics Engineers, Database Administrators."
    },
    {
      certCode: "PCSE",
      title: "Professional Cloud Security Engineer",
      badge: "CYBERSECURITY & COMPLIANCE",
      focus: "Implement organizational security policies, Cloud IAM, encryption with Cloud KMS, Cloud Armor, and Security Command Center.",
      prerequisite: "Cloud IAM and network security knowledge",
      recommendedFor: "Security Analysts, Compliance Officers, DevSecOps Engineers."
    },
    {
      certCode: "PMLE",
      title: "Professional Machine Learning Engineer",
      badge: "AI & MACHINE LEARNING",
      focus: "Design, build, and deploy production ML models and generative AI systems using Vertex AI, TensorFlow, and Gemini APIs.",
      prerequisite: "Python, ML algorithms, and Vertex AI knowledge",
      recommendedFor: "Machine Learning Engineers, Data Scientists, AI Researchers."
    }
  ]
};
