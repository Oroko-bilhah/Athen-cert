
export const course0Welcome = {
  about: {
    title: "0.1 About Azure Fundamentals",
    whatIsAz900: "AZ-900 (Microsoft Azure Fundamentals) is Microsoft's foundational cloud computing certification. It validates high-level knowledge of cloud concepts, Azure core architecture, compute, networking, storage, database services, identity, security, governance, compliance, and cost management.",
    whatItProves: "Passing AZ-900 demonstrates to employers and clients that you have a solid understanding of cloud computing principles and the foundational architecture, security, and economics of Microsoft Azure.",
    whoShouldTake: [
      "IT professionals, developers, and system administrators beginning their journey in Microsoft Azure.",
      "Business decision-makers, sales engineers, project managers, and financial analysts who evaluate or manage Azure cloud spending and governance.",
      "Students, career switchers, and non-technical stakeholders looking for an industry-recognized cloud credential."
    ],
    whoDoesNotNeed: [
      "Experienced Azure administrators or engineers already holding associate-level certifications like AZ-104 or AZ-204.",
      "Candidates who want deep hands-on implementation and troubleshooting credentials immediately without needing a foundational overview."
    ],
    comparisons: [
      {
        cert: "AZ-900 vs AZ-104",
        desc: "AZ-900 is conceptual and foundational (no prerequisites). AZ-104 (Azure Administrator Associate) is deeply technical, requiring hands-on PowerShell, CLI, ARM/Bicep, and active production troubleshooting."
      },
      {
        cert: "AZ-900 vs AZ-204",
        desc: "AZ-900 covers broad cloud basics. AZ-204 (Azure Developer Associate) focuses on developing cloud solutions using Azure SDKs, App Service, Functions, Cosmos DB, and containerized microservices."
      },
      {
        cert: "AZ-900 vs DP-900",
        desc: "AZ-900 covers overall infrastructure and cloud concepts. DP-900 (Azure Data Fundamentals) specifically tests core relational and NoSQL data concepts, analytics, and data warehousing on Azure."
      },
      {
        cert: "AZ-900 vs Current AI Offerings",
        desc: "AZ-900 covers foundational infrastructure. AI-900 was retired June 30, 2026, and superseded by updated Microsoft AI credentials (such as AI-901 and Azure AI Engineer Associate)."
      }
    ],
    careerPaths: "Completing AZ-900 unlocks pathways into Azure Administrator (AZ-104), Azure Solutions Architect (AZ-305), Azure Developer (AZ-204), Azure Security Engineer (AZ-500), Data Engineering (DP-203), and AI Engineering."
  },
  examInfo: {
    title: "0.2 Official Exam Information",
    updatedDate: "Updated July 20, 2026",
    structure: "40–60 questions consisting of Multiple Choice, Multiple Response, Drag-and-Drop sequence matching, and Case Study scenario analysis.",
    passingScore: "700 out of 1000 (70% scaled score).",
    duration: "65 minutes total (45 minutes for answering questions, 20 minutes for surveys and instructions).",
    pricing: "$99 USD (subject to local student/regional discounts).",
    registration: "Booked through Pearson VUE (online proctored or at an authorized testing center).",
    learnAccess: "Microsoft Learn open-book documentation is accessible in a side-pane during the live exam for looking up technical details.",
    sandbox: "Candidates can test the Microsoft Exam Sandbox on Microsoft Learn to familiarize themselves with question UI mechanics.",
    retakePolicy: "1st retake requires a 24-hour wait. Subsequent retakes (up to 5 per 12-month period) require a 14-day waiting period."
  },
  howToStudy: {
    title: "0.3 How to Study with Athencert",
    steps: [
      {
        number: "01",
        title: "Learn Concepts by Exam Domain",
        text: "Follow the 3 official exam domains. Focus on why services exist and how they compare rather than memorizing isolated definitions."
      },
      {
        number: "02",
        title: "Active Recall Flashcards",
        text: "Use our interactive 3D flashcard decks daily to lock in acronyms, SLA tiers, redundancy codes, and security terminology."
      },
      {
        number: "03",
        title: "Hands-on Terminal & Portal Labs",
        text: "Work through all 17 guided labs to build muscle memory with Resource Groups, VNets, Storage Accounts, RBAC, and Azure CLI/PowerShell."
      },
      {
        number: "04",
        title: "Scenario & Comparison Battles",
        text: "Real AZ-900 questions test decision-making (e.g., Azure Files vs Blob Storage). Study our 22 battlecards and scenario trainer."
      },
      {
        number: "05",
        title: "Domain Tests & Full Mock Exams",
        text: "Take the 3 domain-weighted tests followed by Practice Exams 1–5 and the Final Mock Exam. Aim for consistent scores above 85%."
      }
    ]
  }
};

export const officialDomains = [
  {
    id: "domain-1",
    code: "Domain 1",
    title: "Describe Cloud Concepts",
    weight: "25–30%",
    weightRange: [25, 30],
    description: "Fundamental cloud computing principles, shared responsibility, cloud models, consumption economics, benefits, and cloud service types (IaaS, PaaS, SaaS).",
    modulesCovered: "Course 0 & Module 1 (Lessons 1 to 6)",
    color: "#F26B5B"
  },
  {
    id: "domain-2",
    code: "Domain 2",
    title: "Describe Azure Architecture and Services",
    weight: "35–40%",
    weightRange: [35, 40],
    description: "Azure global infrastructure, regions, availability zones, management hierarchy, compute (VMs, VMSS, Containers, App Service, Functions, AVD), networking (VNets, NSGs, Load Balancing, VPN, ExpressRoute), storage, and databases.",
    modulesCovered: "Modules 2 to 6 (Lessons 7 to 18)",
    color: "#F26B5B"
  },
  {
    id: "domain-3",
    code: "Domain 3",
    title: "Describe Azure Management and Governance",
    weight: "30–35%",
    weightRange: [30, 35],
    description: "Identity (Entra ID, RBAC, MFA, Conditional Access), security (Defender, Sentinel, Key Vault), governance (Policy, Locks, Tags), management tools (Portal, Cloud Shell, CLI, PowerShell, ARM, Bicep), monitoring, Advisor, cost management, SLAs, and compliance.",
    modulesCovered: "Modules 7 to 19 (Lessons 19 to 32)",
    color: "#F26B5B"
  }
];

export const azureServiceCategories = [
  {
    category: "Compute",
    icon: "",
    description: "Services for running applications, virtual machines, containers, and serverless logic.",
    services: [
      { name: "Azure Virtual Machines (VMs)", type: "IaaS", description: "On-demand, resizable compute instances running Windows or Linux with custom OS and software control." },
      { name: "Virtual Machine Scale Sets (VMSS)", type: "IaaS", description: "Deploy and manage groups of identical, auto-scaling VMs for high availability and elastic workloads." },
      { name: "Azure App Service", type: "PaaS", description: "Fully managed HTTP platform for hosting web applications, RESTful APIs, and mobile backends without managing web servers." },
      { name: "Azure Functions", type: "Serverless", description: "Event-driven, serverless compute service that executes micro-code snippets in response to HTTP, timer, or queue triggers." },
      { name: "Azure Container Instances (ACI)", type: "PaaS", description: "Fastest way to run standalone Docker containers in Azure without provisioning servers or managing a Kubernetes cluster." },
      { name: "Azure Container Apps (ACA)", type: "Serverless / PaaS", description: "Fully managed serverless container platform built on Kubernetes and KEDA for microservices with built-in traffic splitting." },
      { name: "Azure Kubernetes Service (AKS)", type: "PaaS", description: "Enterprise-grade managed Kubernetes cluster for deploying, scaling, and orchestrating complex containerized applications." },
      { name: "Azure Virtual Desktop (AVD)", type: "PaaS / DaaS", description: "Cloud-based desktop and app virtualization delivering Windows 10/11 multi-session experience to any remote device." }
    ]
  },
  {
    category: "Networking",
    icon: "",
    description: "Services to securely connect cloud workloads, on-premises networks, and deliver low-latency traffic.",
    services: [
      { name: "Azure Virtual Network (VNet)", type: "IaaS", description: "Fundamental building block for private network isolation, IP subnetting, and inter-resource communication in Azure." },
      { name: "Azure Load Balancer", type: "PaaS (Layer 4)", description: "High-performance, ultra-low latency Layer 4 load balancer that distributes TCP/UDP traffic across backend VMs." },
      { name: "Azure Application Gateway", type: "PaaS (Layer 7)", description: "Web traffic load balancer with URL routing, SSL termination, and integrated Web Application Firewall (WAF)." },
      { name: "Azure Front Door", type: "Global Layer 7", description: "Global web CDN and Layer 7 application accelerator offering anycast routing, instant failover, and intelligent edge WAF." },
      { name: "Azure Traffic Manager", type: "DNS-based", description: "DNS-based traffic load balancer that distributes user requests across global Azure regions using routing methods." },
      { name: "Azure VPN Gateway", type: "PaaS", description: "Encrypted cross-premises network connectivity over the public internet (Site-to-Site and Point-to-Site VPN)." },
      { name: "Azure ExpressRoute", type: "Dedicated Network", description: "Private, dedicated, high-speed fiber connection between on-premises datacenters and Azure bypassing the public internet." },
      { name: "Azure DNS", type: "PaaS", description: "Ultra-fast, authoritative domain hosting service using Microsoft's global infrastructure for name resolution." },
      { name: "Azure Network Security Groups (NSGs)", type: "Security", description: "Stateful Layer 4 packet filters controlling inbound and outbound IP, port, and protocol traffic to subnets and NICs." }
    ]
  },
  {
    category: "Storage",
    icon: "",
    description: "Massively scalable, durable, and secure cloud storage for files, unstructured media, and messaging.",
    services: [
      { name: "Azure Blob Storage", type: "Object Storage", description: "Massively scalable object storage for unstructured data (images, videos, backups, logs) with Hot, Cool, Cold, and Archive tiers." },
      { name: "Azure Files", type: "Managed File Share", description: "Fully managed cloud file shares accessible via industry-standard SMB 3.0 and NFS protocols with concurrent cross-platform mounting." },
      { name: "Azure Queue Storage", type: "Message Queue", description: "Simple, reliable asynchronous message store for decoupling application components and building resilient background workers." },
      { name: "Azure Table Storage", type: "NoSQL Key-Value", description: "Cost-effective, schemaless key-value store for storing petabytes of non-relational structured data." },
      { name: "Azure Managed Disks", type: "Block Storage", description: "High-performance virtual hard disks (Ultra Disk, Premium SSD v2, Standard SSD, Standard HDD) attached to VMs." }
    ]
  },
  {
    category: "Databases",
    icon: "",
    description: "Fully managed relational, NoSQL, and in-memory database services with built-in high availability.",
    services: [
      { name: "Azure SQL Database", type: "PaaS (DBaaS)", description: "Fully managed relational DB engine running the latest stable SQL Server with automated patching, backups, and AI tuning." },
      { name: "Azure SQL Managed Instance", type: "PaaS", description: "Nearly 100% compatible SQL Server instance designed for frictionless lift-and-shift migration of enterprise on-prem SQL workloads." },
      { name: "SQL Server on Azure VMs", type: "IaaS", description: "Full OS administrative access to SQL Server running on an Azure VM for legacy compatibility and specialized OS configurations." },
      { name: "Azure Cosmos DB", type: "Globally Distributed NoSQL", description: "Globally distributed, multi-model NoSQL database offering single-digit millisecond latency, turnkey 99.999% SLA, and multiple APIs (SQL, MongoDB, Cassandra, Gremlin, Table)." }
    ]
  },
  {
    category: "Identity & Security",
    icon: "",
    description: "Identity management, zero-trust security controls, posture management, and cryptographic protection.",
    services: [
      { name: "Microsoft Entra ID (formerly Azure AD)", type: "Cloud IAM", description: "Cloud identity and access management service providing authentication, single sign-on (SSO), MFA, and directory federation." },
      { name: "Microsoft Entra Domain Services", type: "Managed AD", description: "Managed domain services (domain join, LDAP, Kerberos/NTLM) without deploying and patching domain controller VMs." },
      { name: "Azure Role-Based Access Control (RBAC)", type: "Authorization", description: "Granular authorization system granting identities specific roles at Management Group, Subscription, Resource Group, or Resource scopes." },
      { name: "Microsoft Defender for Cloud", type: "CNAPP / CWPP", description: "Unified cloud security posture management (CSPM) and cloud workload protection (CWP) with actionable Secure Score metrics." },
      { name: "Microsoft Sentinel", type: "SIEM / SOAR", description: "Cloud-native Security Information and Event Management (SIEM) and Security Orchestration Automated Response (SOAR) platform." },
      { name: "Azure Key Vault", type: "Security Vault", description: "Secure cloud store for managing cryptographic keys, application secrets, passwords, connection strings, and TLS/SSL certificates." },
      { name: "Azure DDoS Protection", type: "Network Defense", description: "Layer 3/Layer 4 distributed denial-of-service protection with adaptive tuning and traffic mitigation." }
    ]
  },
  {
    category: "Management & Governance",
    icon: "",
    description: "Tools for provisioning, policy enforcement, resource organization, and cost optimization.",
    services: [
      { name: "Azure Portal", type: "Web GUI", description: "Web-based graphical console for building, managing, and monitoring all Azure cloud resources." },
      { name: "Azure Cloud Shell", type: "Browser Terminal", description: "Browser-accessible command-line terminal pre-authenticated with Azure CLI, Azure PowerShell, git, and common developer utilities." },
      { name: "Azure CLI (`az`)", type: "Cross-Platform CLI", description: "Cross-platform command-line tool for automating Azure infrastructure deployment and management via terminal scripts." },
      { name: "Azure PowerShell (`Az`)", type: "PowerShell Module", description: "PowerShell module providing cmdlets to manage and automate Azure resources from Windows, Linux, and macOS." },
      { name: "Azure Resource Manager (ARM)", type: "Control Plane", description: "The central management layer that accepts requests, enforces authentication/RBAC/policies, and orchestrates resource deployment." },
      { name: "Bicep & ARM Templates", type: "IaC", description: "Declarative Infrastructure as Code (IaC) languages to define, version, and repeatably deploy Azure infrastructure." },
      { name: "Azure Policy", type: "Governance Engine", description: "Governance tool that evaluates Azure resources for compliance against corporate rules, enforcing allowed regions, sizes, or tags." },
      { name: "Azure Resource Locks", type: "Guardrail", description: "Protective locks (ReadOnly and CanNotDelete) preventing accidental deletion or modification of mission-critical resources." },
      { name: "Azure Cost Management + Billing", type: "Financial Tool", description: "Comprehensive suite for analyzing cloud spending, setting departmental budgets, forecasting costs, and configuring alerts." }
    ]
  },
  {
    category: "Monitoring & Optimization",
    icon: "",
    description: "End-to-end visibility, application performance monitoring, log analytics, and personalized cloud advice.",
    services: [
      { name: "Azure Monitor", type: "Observability Platform", description: "Full-stack monitoring solution collecting metrics and telemetry across applications, OS, Azure resources, subscriptions, and tenants." },
      { name: "Application Insights", type: "APM", description: "Application Performance Monitoring tool that detects anomalies, crashes, slow requests, and dependency bottlenecks in real-time code." },
      { name: "Log Analytics", type: "Log Query Engine", description: "Centralized workspace for indexing diagnostic logs and executing high-performance Kusto Query Language (KQL) searches." },
      { name: "Azure Service Health", type: "Health Dashboard", description: "Personalized dashboard notifying you of active Azure service outages, planned maintenance, and resource health advisories." },
      { name: "Azure Advisor", type: "Best-Practice Consultant", description: "Automated advisory engine analyzing your Azure tenant across 5 pillars: Cost, Security, Reliability, Performance, and Operational Excellence." }
    ]
  }
];

export const azureComparisons = [
  {
    id: "comp-1",
    title: "IaaS vs PaaS vs SaaS",
    category: "Cloud Concepts",
    summary: "The foundational division of cloud service models based on customer vs provider management responsibility.",
    items: [
      { aspect: "What Microsoft Manages", iaas: "Physical datacenter, servers, storage, hypervisor virtualization", paas: "Hardware, hypervisor, OS, middleware, runtime environment, automated patching", saas: "Entire stack including application code, data backups, and security patching" },
      { aspect: "What Customer Manages", iaas: "OS installation, OS patches, middleware, runtime, application code, data, security firewalls", paas: "Application code, database schemas, configuration, and data", saas: "User identity, access permissions, and customer data configuration" },
      { aspect: "Primary Azure Examples", iaas: "Azure VMs, Virtual Networks, Managed Disks", paas: "Azure App Service, Azure Functions, Azure SQL Database", saas: "Microsoft 365, Dynamics 365, GitHub, Power BI" },
      { aspect: "Best Use Case", iaas: "Legacy lift-and-shift migrations, custom OS kernel requirements", paas: "Rapid application development, modern microservices, web APIs", saas: "End-user productivity, CRM, email, office collaboration" }
    ]
  },
  {
    id: "comp-2",
    title: "Public vs Private vs Hybrid Cloud",
    category: "Cloud Concepts",
    summary: "Comparison of deployment models regarding ownership, isolation, and connectivity.",
    items: [
      { aspect: "Definition", iaas: "Multi-tenant cloud infrastructure owned and operated by a third-party cloud provider (Microsoft)", paas: "Cloud infrastructure dedicated exclusively to one organization, hosted on-premises or privately", saas: "A combined environment connecting public cloud and private on-premises infrastructure" },
      { aspect: "Capital Expenditure (CapEx)", iaas: "Zero upfront hardware CapEx; 100% pay-as-you-go OpEx", paas: "High upfront CapEx for servers, storage, networking, cooling, and real estate", saas: "Balances existing on-premises CapEx with elastic public cloud OpEx" },
      { aspect: "Scalability & Agility", iaas: "Near-infinite, instant global elasticity and capacity", paas: "Limited to physical hardware capacity purchased and installed", saas: "Burst to public cloud (cloud bursting) while keeping core assets private" },
      { aspect: "Typical Use Case", iaas: "Modern web apps, startups, elastic enterprise workloads", paas: "Strict legacy compliance requiring isolated on-premise hardware", saas: "Gradual enterprise cloud migration, disaster recovery, hybrid data tiering" }
    ]
  },
  {
    id: "comp-3",
    title: "CapEx vs OpEx",
    category: "Financial Economics",
    summary: "Understanding the shift from upfront capital expenditure to ongoing operational expenditure.",
    items: [
      { aspect: "Expenditure Type", iaas: "CapEx: Capital Expenditure (Upfront investment in physical assets)", paas: "OpEx: Operational Expenditure (Pay-for-what-you-consume ongoing cost)", saas: "Hybrid: Balancing legacy assets with cloud subscriptions" },
      { aspect: "Payment Timing", iaas: "Paid upfront as a large lump sum before using equipment", paas: "Billed monthly or hourly based on actual service consumption", saas: "Fixed amortized assets + variable monthly invoices" },
      { aspect: "Accounting & Taxes", iaas: "Deducted over time through asset depreciation over 3–7 years", paas: "Deducted in the current tax year as an ongoing operating business expense", saas: "Combines depreciation schedules with current expense deductions" },
      { aspect: "Agility & Risk", iaas: "High financial risk if project fails; capacity is fixed and rigid", paas: "Zero financial commitment; scale down or delete resources instantly if not needed", saas: "Mitigates risk by testing new initiatives in OpEx before committing" }
    ]
  },
  {
    id: "comp-4",
    title: "Region vs Availability Zone",
    category: "Architecture",
    summary: "Geographical boundaries vs physical datacenter fault isolation.",
    items: [
      { aspect: "Definition", iaas: "A geographical area containing one or more datacenters connected via low-latency network", paas: "Physically separated datacenters within an Azure Region, each with independent power, cooling, and networking", saas: "Combined: Regions contain 3 distinct Availability Zones" },
      { aspect: "Fault Domain", iaas: "Protects against regional connectivity loss or broad geographic disasters", paas: "Protects against individual datacenter hardware, power, flood, or cooling outages", saas: "Zone-redundant services replicate data automatically across zones" },
      { aspect: "SLA Benefit", iaas: "Single VM SLA varies by disk (up to 99.9% with Premium SSD)", paas: "Deploying 2+ VMs across distinct Availability Zones provides a 99.99% availability SLA", saas: "ZRS storage provides 99.9999999999% (12 nines) durability across 3 zones" }
    ]
  },
  {
    id: "comp-5",
    title: "Region vs Region Pair",
    category: "Architecture",
    summary: "Local multi-datacenter region vs paired geographic disaster recovery partners.",
    items: [
      { aspect: "Distance", iaas: "Single Region: Latency < 2 milliseconds between internal datacenters", paas: "Region Pair: Located at least 300 miles (480 km) apart within the same geography", saas: "Global: Multi-region active-active deployments worldwide" },
      { aspect: "Platform Updates", iaas: "Updated according to Azure regional maintenance schedule", paas: "Sequenced updates: Azure never updates both paired regions simultaneously", saas: "Minimizes global service interruption risk" },
      { aspect: "Disaster Recovery", iaas: "Local failover between Availability Zones in the same metro area", paas: "Geographic failover: Geo-redundant storage (GRS) automatically replicates data to paired region", saas: "In catastrophic regional events, recovery prioritized for one region of each pair" }
    ]
  },
  {
    id: "comp-6",
    title: "VM vs Container",
    category: "Compute",
    summary: "Hardware virtualization (Hypervisor + Guest OS) vs Operating System-level virtualization.",
    items: [
      { aspect: "Virtualization Level", iaas: "Hardware level: Hypervisor virtualizes physical CPU, RAM, and storage", paas: "OS level: Container engine virtualizes the host OS kernel", saas: "Hybrid: Containers running on VM hosts" },
      { aspect: "Guest Operating System", iaas: "Each VM includes a complete Guest OS (Windows/Linux), gigabytes in size", paas: "Containers share the host OS kernel; images are lightweight (megabytes)", saas: "Fast startup (seconds vs minutes for VMs)" },
      { aspect: "Isolation", iaas: "Strong hypervisor isolation with dedicated virtual hardware boundaries", paas: "Process-level namespace isolation on shared kernel", saas: "VMs are better for untrusted multi-tenant workloads" },
      { aspect: "Azure Services", iaas: "Azure Virtual Machines, VM Scale Sets", paas: "Azure Container Instances (ACI), Azure Container Apps (ACA), Azure Kubernetes Service (AKS)", saas: "App Service Containers" }
    ]
  },
  {
    id: "comp-7",
    title: "VM vs App Service",
    category: "Compute",
    summary: "Infrastructure control (IaaS) vs Fully managed web runtime (PaaS).",
    items: [
      { aspect: "Management Overhead", iaas: "High: Customer patches Windows/Linux, configures IIS/Nginx, manages firewall ports", paas: "Zero: Microsoft automatically patches OS, web runtime, and security updates", saas: "Focus on application code" },
      { aspect: "Custom Software & Drivers", iaas: "Complete admin/root access: Install custom background drivers, services, registry keys", paas: "Restricted to supported runtimes (.NET, Java, Node.js, Python, PHP) or custom containers", saas: "Cannot install arbitrary OS kernel drivers" },
      { aspect: "Autoscaling", iaas: "Configured via VM Scale Sets with metrics rules (takes minutes to boot)", paas: "Instant turnkey autoscaling based on HTTP traffic, CPU, or memory", saas: "Includes deployment slots and automated SSL certificates" }
    ]
  },
  {
    id: "comp-8",
    title: "App Service vs Functions",
    category: "Compute",
    summary: "Continuous web hosting (PaaS) vs Event-driven micro-billing (Serverless).",
    items: [
      { aspect: "Execution Model", iaas: "Continuous: Web apps and APIs run 24/7 on an App Service Plan", paas: "Event-driven: Code executes only when triggered (HTTP, Queue, Timer, Event Grid)", saas: "Sleeps when idle" },
      { aspect: "Pricing Model", iaas: "Billed continuously for the provisioned App Service Plan tier (even with zero traffic)", paas: "Consumption Plan: Billed strictly per millisecond of execution time and invocation count", saas: "Zero cost when no requests are being processed" },
      { aspect: "Maximum Duration", iaas: "Unlimited persistent execution time", paas: "Default 5 minutes timeout on Consumption (configurable up to 10 min, or unlimited on Premium)", saas: "Best for short, stateless burst tasks" }
    ]
  },
  {
    id: "comp-9",
    title: "Azure Files vs Blob Storage",
    category: "Storage",
    summary: "Hierarchical file share (SMB/NFS) vs Flat object storage (REST API).",
    items: [
      { aspect: "Data Organization", iaas: "Azure Files: Hierarchical directory tree with file metadata, permissions, and locking", paas: "Azure Blob Storage: Flat namespace with containers and blobs (optional hierarchical with ADLS Gen2)", saas: "Different access paradigms" },
      { aspect: "Access Protocols", iaas: "Standard SMB 3.0 and NFS 4.1 protocols; mounts as a network drive (Z: or /mnt)", paas: "REST HTTP/HTTPS APIs, Azure SDKs, AzCopy, Azure Storage Explorer", saas: "Blobs accessible over public or private URLs" },
      { aspect: "Primary Use Cases", iaas: "Migrating legacy on-prem file shares, shared application configuration, CMS storage", paas: "Storing unstructured images, video streaming, database backups, massive data lakes", saas: "Massive scale at lower cost per gigabyte" }
    ]
  },
  {
    id: "comp-10",
    title: "Hot vs Cool vs Cold vs Archive Tiers",
    category: "Storage",
    summary: "Storage cost vs Access retrieval cost tradeoff across Blob Storage access tiers.",
    items: [
      { aspect: "Hot Tier", iaas: "Highest storage cost / Lowest access cost", paas: "Data in active use and frequently read/written (websites, active transactional media)", saas: "Millisecond retrieval latency" },
      { aspect: "Cool Tier", iaas: "Lower storage cost / Higher access cost (30-day min retention)", paas: "Infrequently accessed data (monthly reports, raw telemetry, short-term backups)", saas: "Millisecond retrieval latency" },
      { aspect: "Cold Tier", iaas: "Very low storage cost / Higher access cost (90-day min retention)", paas: "Rarely accessed data stored for long periods with instant read availability", saas: "Millisecond retrieval latency" },
      { aspect: "Archive Tier", iaas: "Lowest storage cost / Highest access & retrieval cost (180-day min retention)", paas: "Long-term compliance archives, legal holds, medical records (offline state)", saas: "Hours of rehydration latency required before reading" }
    ]
  },
  {
    id: "comp-11",
    title: "LRS vs ZRS vs GRS vs GZRS",
    category: "Storage Redundancy",
    summary: "Local vs Zone vs Geo-redundant durability replication options in Azure Storage.",
    items: [
      { aspect: "LRS (Locally Redundant Storage)", iaas: "3 copies in a single datacenter within one region", paas: "Durability: 99.999999999% (11 nines)", saas: "Protects against disk and rack hardware failure; vulnerable to datacenter outage" },
      { aspect: "ZRS (Zone-Redundant Storage)", iaas: "3 copies replicated synchronously across 3 separate Availability Zones in one region", paas: "Durability: 99.9999999999% (12 nines)", saas: "Protects against an entire datacenter failure within the primary region" },
      { aspect: "GRS (Geo-Redundant Storage)", iaas: "LRS (3 copies) in primary region + replicated asynchronously to LRS (3 copies) in secondary paired region (6 total copies)", paas: "Durability: 99.99999999999999% (16 nines)", saas: "Protects against an entire regional catastrophe or natural disaster" },
      { aspect: "GZRS (Geo-Zone-Redundant Storage)", iaas: "ZRS (3 zones) in primary region + replicated asynchronously to LRS in secondary paired region", paas: "Durability: 99.99999999999999% (16 nines)", saas: "Combines multi-zone resilience in primary with cross-region disaster recovery" }
    ]
  },
  {
    id: "comp-12",
    title: "Azure SQL vs Cosmos DB",
    category: "Databases",
    summary: "Relational ACID structured database vs Globally distributed multi-model NoSQL.",
    items: [
      { aspect: "Data Model", iaas: "Azure SQL: Relational tables, strict schemas, foreign keys, SQL queries", paas: "Azure Cosmos DB: Schemaless NoSQL (JSON documents, Key-Value, Graph, Columnar)", saas: "Relational vs Non-relational" },
      { aspect: "Transactions & Consistency", iaas: "Full ACID transactions, complex JOIN operations, stored procedures", paas: "Turnkey multi-region replication with 5 tunable consistency levels (Strong to Eventual)", saas: "Single-digit millisecond latency SLAs" },
      { aspect: "Global Distribution", iaas: "Active geo-replication (readable secondary replicas)", paas: "Multi-region active-active writes and reads anywhere in the world with a single click", saas: "Seamless global scale" }
    ]
  },
  {
    id: "comp-13",
    title: "Authentication vs Authorization",
    category: "Identity & Security",
    summary: "Verifying identity (Who are you?) vs Enforcing permissions (What can you do?).",
    items: [
      { aspect: "Authentication (AuthN)", iaas: "Identifies the user, service, or device", paas: "Answers: 'Who are you?'", saas: "Examples: Passwords, MFA tokens, biometrics, Single Sign-On (SSO), certificates" },
      { aspect: "Authorization (AuthZ)", iaas: "Determines permissions and access rights granted to an authenticated identity", paas: "Answers: 'What are you allowed to do?'", saas: "Examples: Azure RBAC roles (Owner, Contributor, Reader), Access Control Lists" },
      { aspect: "Sequence", iaas: "Always occurs FIRST before authorization can take place", paas: "Occurs SECOND after the user's identity is verified", saas: "Microsoft Entra handles AuthN; RBAC handles AuthZ" }
    ]
  },
  {
    id: "comp-14",
    title: "RBAC vs Azure Policy",
    category: "Governance",
    summary: "User action authorization (Who) vs Resource compliance guardrails (What).",
    items: [
      { aspect: "Primary Focus", iaas: "Azure RBAC: Focuses on USER ACTIONS (Who has permission to do what)", paas: "Azure Policy: Focuses on RESOURCE PROPERTIES (What properties are allowed on resources)", saas: "Complementary governance tools" },
      { aspect: "Evaluation Point", iaas: "Evaluates whether an identity has permission to perform an action (e.g. `Microsoft.Compute/virtualMachines/write`)", paas: "Evaluates resource configuration during creation, update, or regular audit scans", saas: "Policy overrides RBAC permissions" },
      { aspect: "Common Example", iaas: "Grant user 'Sarah' the Contributor role on 'Dev-RG' resource group", paas: "Enforce that all VMs in the subscription must be deployed only in 'East US' or must have a 'Department' tag", saas: "Even an Owner cannot deploy a disallowed VM size if Policy denies it" }
    ]
  },
  {
    id: "comp-15",
    title: "Azure Monitor vs Defender for Cloud",
    category: "Monitoring & Security",
    summary: "Operational telemetry & performance vs Cloud security posture & threat protection.",
    items: [
      { aspect: "Primary Purpose", iaas: "Azure Monitor: Observability, operational health, performance metrics, and application telemetry", paas: "Microsoft Defender for Cloud: Security posture management (CSPM) and threat protection (CWP)", saas: "Health vs Security" },
      { aspect: "Key Metrics", iaas: "CPU utilization, HTTP error rates, memory spikes, log queries via KQL", paas: "Secure Score, vulnerability scans, regulatory compliance benchmarks, brute-force alerts", saas: "Remediation recommendations" },
      { aspect: "Target Audience", iaas: "DevOps engineers, cloud administrators, application developers", paas: "Security teams, compliance officers, SecOps analysts", saas: "Often integrates data with Microsoft Sentinel" }
    ]
  },
  {
    id: "comp-16",
    title: "Service Health vs Resource Health vs Azure Status",
    category: "Monitoring",
    summary: "Global status page vs Personalized subscription impact vs Individual resource diagnostics.",
    items: [
      { aspect: "Azure Status", iaas: "Public webpage (status.azure.com) showing global Azure service health across all worldwide regions", paas: "Broad, unauthenticated, non-personalized global overview", saas: "Shows large-scale platform incidents" },
      { aspect: "Service Health", iaas: "Personalized dashboard inside Azure Portal showing outages and maintenance affecting YOUR specific subscriptions", paas: "Filters out unaffected regions and services", saas: "Includes Planned Maintenance and Health Advisories" },
      { aspect: "Resource Health", iaas: "Granular diagnostic status for a SPECIFIC individual resource instance (e.g., VM 'Web01' is Unavailable)", paas: "Shows current and historical health of an individual resource", saas: "Provides root cause explanations (e.g., host platform failure)" }
    ]
  },
  {
    id: "comp-17",
    title: "Azure CLI vs Azure PowerShell",
    category: "Management Tools",
    summary: "Cross-platform command line syntax vs Object-oriented PowerShell cmdlets.",
    items: [
      { aspect: "Command Syntax", iaas: "Azure CLI: Uses `az <command-group> <subgroup> <action>` (e.g., `az vm create`)", paas: "Azure PowerShell: Uses Verb-Noun cmdlets (e.g., `New-AzVM`, `Get-AzResourceGroup`)", saas: "Both manage identical ARM APIs" },
      { aspect: "Output Format", iaas: "Outputs structured JSON by default (or table/tsv)", paas: "Outputs rich .NET objects passed via PowerShell pipeline (`|`)", saas: "Cross-platform across Windows, Mac, Linux" },
      { aspect: "Best Suited For", iaas: "Bash scripts, Linux environments, CI/CD pipelines, Python/Node developers", paas: "Windows administrators, PowerShell automation engineers, existing .NET automation scripts", saas: "Both pre-installed in Azure Cloud Shell" }
    ]
  },
  {
    id: "comp-18",
    title: "Azure Portal vs Cloud Shell",
    category: "Management Tools",
    summary: "Graphical web user interface vs Browser-embedded terminal console.",
    items: [
      { aspect: "Interface Type", iaas: "Azure Portal: Visual GUI with wizards, charts, blade menus, and visual dashboards", paas: "Azure Cloud Shell: Interactive terminal inside the browser with Bash or PowerShell", saas: "Accessible on any modern web browser" },
      { aspect: "Authentication", iaas: "Authenticated via browser session login with Microsoft Entra ID", paas: "Automatically authenticated with the same credentials and active subscription context", saas: "Includes 5GB Azure Files persistent storage" },
      { aspect: "Use Case", iaas: "Visual discovery, exploratory configuration, monitoring charts, beginners", paas: "Repetitive command execution, running scripts, git operations, fast CLI automation", saas: "No local tool installation required" }
    ]
  },
  {
    id: "comp-19",
    title: "VPN Gateway vs ExpressRoute",
    category: "Networking",
    summary: "Encrypted internet tunnel vs Dedicated private fiber-optic connection.",
    items: [
      { aspect: "Connection Medium", iaas: "VPN Gateway: Encrypted IPsec/IKE tunnel traversing the PUBLIC INTERNET", paas: "ExpressRoute: Dedicated, PRIVATE physical fiber connection provided by a network connectivity partner", saas: "Public vs Private routing" },
      { aspect: "Bandwidth & Latency", iaas: "Typical bandwidth up to 10 Gbps; variable latency subject to public internet congestion", paas: "Massive bandwidth up to 100 Gbps; ultra-low, predictable, deterministic latency", saas: "Bypasses internet entirely" },
      { aspect: "Cost & Complexity", iaas: "Low cost and fast to provision within minutes", paas: "Higher monthly cost and requires third-party telco/carrier coordination", saas: "Mission-critical enterprise hybrid data links" }
    ]
  },
  {
    id: "comp-20",
    title: "Load Balancer vs Application Gateway",
    category: "Networking",
    summary: "Layer 4 transport (TCP/UDP) routing vs Layer 7 HTTP/HTTPS application routing.",
    items: [
      { aspect: "OSI Layer", iaas: "Azure Load Balancer: Layer 4 (Transport Layer - TCP and UDP protocols)", paas: "Azure Application Gateway: Layer 7 (Application Layer - HTTP, HTTPS, HTTP/2, WebSocket)", saas: "Layer 4 vs Layer 7" },
      { aspect: "Routing Intelligence", iaas: "Routes traffic based purely on IP address, port, and protocol hash (5-tuple)", paas: "Intelligent routing based on URL path (e.g. `/images` to image pool, `/api` to API pool) and host headers", saas: "Cookie-based session affinity" },
      { aspect: "Security Features", iaas: "Basic port forwarding and health probes", paas: "Integrated Web Application Firewall (WAF) protecting against OWASP Top 10 vulnerabilities (SQLi, XSS)", saas: "SSL/TLS termination and offloading" }
    ]
  },
  {
    id: "comp-21",
    title: "Application Gateway vs Front Door",
    category: "Networking",
    summary: "Regional Layer 7 load balancer vs Global Edge Anycast Layer 7 CDN & WAF.",
    items: [
      { aspect: "Scope & Reach", iaas: "Application Gateway: REGIONAL service deployed within a specific Virtual Network (VNet)", paas: "Azure Front Door: GLOBAL service operating at Microsoft's global edge Points of Presence (PoPs)", saas: "Regional vs Global" },
      { aspect: "Primary Routing Function", iaas: "Distributes HTTP traffic across backend VMs, App Services, or containers in ONE region", paas: "Routes user traffic globally to the lowest latency healthy region using Anycast", saas: "Instant global failover" },
      { aspect: "Edge Caching", iaas: "No content caching", paas: "Built-in dynamic content acceleration and static asset CDN caching at edge locations", saas: "Unified global entry point" }
    ]
  },
  {
    id: "comp-22",
    title: "Azure Advisor vs Azure Monitor",
    category: "Management & Optimization",
    summary: "Proactive best-practice guidance vs Real-time telemetry and metrics alerting.",
    items: [
      { aspect: "Core Function", iaas: "Azure Advisor: Analyzes configuration telemetry to give prescriptive BEST-PRACTICE RECOMMENDATIONS", paas: "Azure Monitor: Ingests raw metrics, activity logs, and telemetry to show LIVE SYSTEM BEHAVIOR", saas: "Advice vs Telemetry" },
      { aspect: "Action Output", iaas: "Provides actionable advice (e.g., 'Resize underutilized VM to save $140/mo', 'Enable MFA on Owner accounts')", paas: "Generates real-time charts, diagnostic logs, metric thresholds, and automated alert notifications", saas: "Configurable metric alerts" },
      { aspect: "Pillars Evaluated", iaas: "5 Pillars: Cost, Security, Reliability, Performance, Operational Excellence", paas: "Full stack telemetry: Infrastructure metrics, Application Insights, Log Analytics workspaces", saas: "Continuous metric collection" }
    ]
  }
];

export const scenarioQuestions = [
  {
    id: "sc-1",
    scenario: "A retail company is launching an e-commerce website that expects huge surges in web traffic during Black Friday sales. The application code is built in ASP.NET Core and must scale automatically without administrators having to manually provision virtual machines.",
    question: "Which Azure service should the architecture team select to host the web application?",
    options: [
      { id: "A", text: "Azure Virtual Machines on a single Standard D4s VM", correct: false, explanation: "A single VM cannot automatically scale out across multiple instances to absorb massive traffic surges." },
      { id: "B", text: "Azure App Service with autoscaling enabled", correct: true, explanation: "Azure App Service is a PaaS web hosting platform that automatically scales out instances based on CPU utilization or request volume without managing underlying servers." },
      { id: "C", text: "Azure Files with SMB file sharing", correct: false, explanation: "Azure Files is a file storage service, not a web application compute runtime." },
      { id: "D", text: "Azure Table Storage", correct: false, explanation: "Azure Table Storage is a NoSQL key-value store, not a web compute service." }
    ]
  },
  {
    id: "sc-2",
    scenario: "A financial organization must store millions of customer PDF statements. The documents are accessed frequently during the first 30 days after generation, rarely accessed after 60 days, and must be retained for 7 years at the lowest possible cost for regulatory compliance.",
    question: "What Azure storage solution and lifecycle management strategy should the organization implement?",
    options: [
      { id: "A", text: "Azure Blob Storage with lifecycle management rules transitioning data from Hot to Cool after 30 days and to Archive after 60 days", correct: true, explanation: "Azure Blob Storage lifecycle management automates tiering from Hot (active reading) to Cool (infrequent reads) and Archive (cheapest storage tier for multi-year compliance)." },
      { id: "B", text: "Azure Managed Disks Ultra SSD attached to an Azure VM", correct: false, explanation: "Managed Disks are high-performance block storage volumes for active VMs and are extremely expensive for long-term document retention." },
      { id: "C", text: "Azure Queue Storage", correct: false, explanation: "Queue storage is a messaging service for decoupling asynchronous workloads, not for document storage." },
      { id: "D", text: "Azure Files with NFS 4.1 file shares in Premium tier", correct: false, explanation: "Premium Azure Files has high ongoing storage costs and does not support automatic archiving to offline tiers." }
    ]
  },
  {
    id: "sc-3",
    scenario: "A health insurance enterprise needs to ensure that under no circumstances can virtual machines be provisioned in regions outside of 'North Europe' and 'West Europe' to comply with strict European data sovereignty laws. The policy must apply across all subscriptions automatically.",
    question: "Which Azure governance mechanism should the compliance team deploy?",
    options: [
      { id: "A", text: "Assign the 'Contributor' role at the subscription level", correct: false, explanation: "RBAC defines who has permission to create resources, but does not enforce geographical location restrictions on resource configurations." },
      { id: "B", text: "Create an Azure Policy with the 'Allowed Locations' definition assigned at the Root Management Group", correct: true, explanation: "Azure Policy enforces resource properties. Assigning the 'Allowed Locations' policy at the Management Group ensures all child subscriptions are blocked from deploying in non-European regions." },
      { id: "C", text: "Apply a 'ReadOnly' Resource Lock on all resource groups", correct: false, explanation: "A ReadOnly lock prevents all modifications and resource creation entirely." },
      { id: "D", text: "Configure an Azure Budget alert in Cost Management", correct: false, explanation: "Budgets notify teams about spending thresholds but cannot prevent resource creation in unauthorized locations." }
    ]
  },
  {
    id: "sc-4",
    scenario: "A global enterprise is connecting its corporate datacenter in Chicago directly to its Azure VNet in East US. The company requires a private, dedicated physical link that does NOT traverse the public internet, provides 10 Gbps throughput, and guarantees deterministic low latency.",
    question: "Which hybrid networking service should the network engineer provision?",
    options: [
      { id: "A", text: "Point-to-Site VPN Gateway", correct: false, explanation: "Point-to-Site VPN connects individual remote laptops to an Azure VNet over the public internet." },
      { id: "B", text: "Azure ExpressRoute", correct: true, explanation: "ExpressRoute establishes a private, dedicated physical connection through a connectivity provider that bypasses the public internet entirely." },
      { id: "C", text: "Site-to-Site VPN Gateway", correct: false, explanation: "Site-to-Site VPN encrypts traffic but still routes packets across the public internet with variable latency." },
      { id: "D", text: "Azure Traffic Manager", correct: false, explanation: "Traffic Manager is a DNS-based traffic router, not a physical hybrid connection." }
    ]
  },
  {
    id: "sc-5",
    scenario: "A company needs to execute custom image resizing Python code whenever a new customer uploads an avatar image into an Azure Blob Storage container. The code executes in under 2 seconds and runs only 50 times per day.",
    question: "What is the most cost-effective Azure compute solution?",
    options: [
      { id: "A", text: "Azure Functions on a Consumption Plan", correct: true, explanation: "Azure Functions with a Blob trigger is an event-driven serverless solution. On a Consumption Plan, the organization only pays for the exact 2 seconds per execution, resulting in virtually zero monthly cost." },
      { id: "B", text: "A dedicated Azure Virtual Machine running 24/7", correct: false, explanation: "Running a dedicated VM 24/7 incurs continuous hourly billing even when no images are being resized." },
      { id: "C", text: "Azure Virtual Desktop", correct: false, explanation: "Azure Virtual Desktop provides remote desktop sessions for human users, not automated code execution." },
      { id: "D", text: "Azure Kubernetes Service with 3 worker nodes", correct: false, explanation: "AKS requires running persistent cluster nodes with high operational overhead and cost for a simple 50-times-a-day task." }
    ]
  }
];

export const azureLabs = [
  {
    id: "lab-1",
    number: "01",
    title: "Create an Azure Account & Navigate the Portal",
    duration: "10 min",
    domain: "Domain 1: Cloud Concepts",
    objective: "Understand how Azure subscriptions work, create a free tier account, and explore the portal navigation.",
    scenario: "You are setting up your development workspace and need to verify subscription credits and regional availability.",
    commands: "# Launch Azure Portal in browser:\nhttps://portal.azure.com\n\n# Check active subscriptions using Azure CLI:\naz account list --output table",
    steps: [
      "Navigate to portal.azure.com and sign in with your Microsoft account.",
      "Inspect the Azure Home screen, search bar (top), and left-hand service navigation pane.",
      "Open 'Subscriptions' to review your active subscription ID, billing status, and spending limit.",
      "Review the global notification bell icon for asynchronous deployment status alerts."
    ],
    question: "What is the primary role of an Azure Subscription?",
    solution: "An Azure subscription serves as both a billing boundary (where invoices and costs are calculated) and an access/management boundary (where administrative permissions are scoped)."
  },
  {
    id: "lab-2",
    number: "02",
    title: "Explore Azure Portal & Custom Dashboards",
    duration: "12 min",
    domain: "Domain 3: Management & Governance",
    objective: "Create a customized dashboard with resource metrics, service health tiles, and quick links.",
    scenario: "Operations engineers need a unified single-pane-of-glass dashboard to monitor production resources and Azure Service Health.",
    commands: "# Export portal dashboard template via CLI:\naz portal dashboard list --output json",
    steps: [
      "In the Azure Portal, click 'Dashboard' from the top left hamburger menu.",
      "Click '+ Create' → 'Dashboard' and name it 'Operations-Overview'.",
      "From the Tile Gallery, drag 'Service Health', 'Resource Groups', and 'Metrics' tiles onto the grid.",
      "Click 'Done customizing' and pin the dashboard to your portal home view."
    ],
    question: "Can Azure Dashboards be shared with other team members in your Azure tenant?",
    solution: "Yes! You can publish custom dashboards as Azure resources and grant team members Reader or Contributor permissions via Azure RBAC."
  },
  {
    id: "lab-3",
    number: "03",
    title: "Create and Tag an Azure Resource Group",
    duration: "15 min",
    domain: "Domain 2: Azure Architecture & Services",
    objective: "Create a Resource Group in a specific region, apply taxonomy tags for billing, and inspect lifecycle management.",
    scenario: "Provision a logical container for all staging web assets and tag them with Environment and Department metadata.",
    commands: "# Create Resource Group with Azure CLI:\naz group create \\\n  --name 'Staging-Web-RG' \\\n  --location 'eastus' \\\n  --tags Environment=Staging Department=Engineering",
    steps: [
      "In the portal search bar, type 'Resource groups' and select 'Resource groups'.",
      "Click '+ Create' and enter Resource Group name: 'Staging-Web-RG'.",
      "Select Region: 'East US'.",
      "On the 'Tags' tab, add Name: 'Environment', Value: 'Staging' and Name: 'CostCenter', Value: '104'.",
      "Click 'Review + create' → 'Create'."
    ],
    question: "If you delete a Resource Group, what happens to the virtual machines and storage accounts inside it?",
    solution: "All child resources contained within the Resource Group are permanently deleted automatically, as Resource Groups represent a lifecycle management boundary."
  },
  {
    id: "lab-4",
    number: "04",
    title: "Create a Storage Account with LRS / GRS Redundancy",
    duration: "15 min",
    domain: "Domain 2: Azure Architecture & Services",
    objective: "Provision a general-purpose v2 storage account, configure replication redundancy, and set default access tier.",
    scenario: "Configure a storage account for corporate asset storage requiring zone-redundant protection.",
    commands: "# Provision Storage Account via Azure CLI:\naz storage account create \\\n  --name 'corpdataassets2026' \\\n  --resource-group 'Staging-Web-RG' \\\n  --location 'eastus' \\\n  --sku 'Standard_ZRS' \\\n  --kind 'StorageV2' \\\n  --access-tier 'Hot'",
    steps: [
      "Search for 'Storage accounts' and click '+ Create'.",
      "Select Subscription and Resource Group ('Staging-Web-RG').",
      "Enter a globally unique Storage account name (lowercase letters and numbers only, 3–24 characters).",
      "Choose Primary Service Redundancy: 'Zone-redundant storage (ZRS)'.",
      "Review the Networking tab to verify default public access settings, then click 'Create'."
    ],
    question: "Why must Azure Storage Account names be globally unique across all of Microsoft Azure?",
    solution: "Because each storage account generates public REST endpoints formatted as `https://<accountname>.blob.core.windows.net`, which must be unique worldwide on the internet."
  },
  {
    id: "lab-5",
    number: "05",
    title: "Upload, Manage & Configure Blob Storage Access",
    duration: "12 min",
    domain: "Domain 2: Azure Architecture & Services",
    objective: "Create a Blob Container, upload a test file, and test access tier switching between Hot, Cool, and Archive.",
    scenario: "Upload product documentation and verify that access tier can be updated dynamically without re-uploading.",
    commands: "# Create Blob Container and upload a file:\naz storage container create \\\n  --name 'product-docs' \\\n  --account-name 'corpdataassets2026' \\\n  --auth-mode login\n\naz storage blob upload \\\n  --account-name 'corpdataassets2026' \\\n  --container-name 'product-docs' \\\n  --name 'handbook.pdf' \\\n  --file './handbook.pdf' \\\n  --tier 'Cool' \\\n  --auth-mode login",
    steps: [
      "Open your newly created Storage Account in the Azure Portal.",
      "In the left menu under 'Data storage', click 'Containers' → '+ Container'.",
      "Name the container 'product-docs' with Public access level set to 'Private (no anonymous access)'.",
      "Click into 'product-docs' and click 'Upload' to select a local sample file.",
      "Select the uploaded blob, click 'Change tier', and switch the tier to 'Cool' or 'Archive'."
    ],
    question: "What occurs when you set a blob to the 'Archive' access tier?",
    solution: "The blob is placed in an offline storage state at the lowest storage cost. It cannot be read or downloaded immediately until you 'rehydrate' it back to Hot or Cool, which can take several hours."
  },
  {
    id: "lab-6",
    number: "06",
    title: "Create and Connect to an Azure Virtual Machine",
    duration: "20 min",
    domain: "Domain 2: Azure Architecture & Services",
    objective: "Deploy an Ubuntu Linux or Windows Server VM, configure SSH / RDP network security rules, and inspect virtual hardware.",
    scenario: "Launch an Ubuntu 22.04 LTS VM in East US to test a microservice backend.",
    commands: "# Create a Linux VM using Azure CLI:\naz vm create \\\n  --resource-group 'Staging-Web-RG' \\\n  --name 'Web-VM-01' \\\n  --image 'Ubuntu2204' \\\n  --size 'Standard_B1s' \\\n  --admin-username 'azureuser' \\\n  --generate-ssh-keys",
    steps: [
      "Search for 'Virtual machines' in the portal and click '+ Create' → 'Azure virtual machine'.",
      "Choose Resource Group ('Staging-Web-RG'), VM name ('Web-VM-01'), and Region ('East US').",
      "Select Image: 'Ubuntu Server 22.04 LTS - x64 Gen2' and Size: 'Standard_B1s'.",
      "Configure Authentication type: 'SSH public key' with automatic key pair generation.",
      "Under Inbound port rules, allow SSH (Port 22) and HTTP (Port 80).",
      "Review + create the VM and download the generated private key."
    ],
    question: "What Azure resource automatically defines firewall allow/deny rules for inbound traffic to this VM?",
    solution: "The Network Security Group (NSG) associated with the VM's network interface (NIC) or subnet."
  },
  {
    id: "lab-7",
    number: "07",
    title: "Explore Virtual Networks (VNet, Subnets & NSGs)",
    duration: "18 min",
    domain: "Domain 2: Azure Architecture & Services",
    objective: "Create an Azure Virtual Network with an address space, create web and database subnets, and configure NSG security rules.",
    scenario: "Build a multi-tier network topology isolating the database subnet from direct public internet access.",
    commands: "# Create VNet and two subnets:\naz network vnet create \\\n  --resource-group 'Staging-Web-RG' \\\n  --name 'Production-VNet' \\\n  --address-prefixes 10.0.0.0/16 \\\n  --subnet-name 'Web-Subnet' \\\n  --subnet-prefixes 10.0.1.0/24\n\naz network vnet subnet create \\\n  --resource-group 'Staging-Web-RG' \\\n  --vnet-name 'Production-VNet' \\\n  --name 'Database-Subnet' \\\n  --address-prefixes 10.0.2.0/24",
    steps: [
      "Search for 'Virtual networks' and click '+ Create'.",
      "Enter Name: 'Production-VNet' with IPv4 address space `10.0.0.0/16`.",
      "Configure 'Web-Subnet' with address range `10.0.1.0/24`.",
      "Add a second subnet named 'Database-Subnet' with address range `10.0.2.0/24`.",
      "Create a Network Security Group (NSG) named 'DB-NSG' that blocks inbound port 3306/1433 from the internet while allowing traffic from `10.0.1.0/24`."
    ],
    question: "Do resources in two different subnets within the SAME VNet require a VPN to communicate with each other?",
    solution: "No. By default, all subnets within the same Virtual Network have automatic default system routes allowing private IP communication between them."
  },
  {
    id: "lab-8",
    number: "08",
    title: "Deploy an Azure App Service Web App",
    duration: "15 min",
    domain: "Domain 2: Azure Architecture & Services",
    objective: "Provision a PaaS App Service Plan and deploy a sample Node.js / .NET web application with custom deployment slots.",
    scenario: "Deploy a customer-facing portal on a fully managed PaaS web platform with zero server patching overhead.",
    commands: "# Create App Service Plan & Web App:\naz appservice plan create \\\n  --name 'WebPlan-Free' \\\n  --resource-group 'Staging-Web-RG' \\\n  --sku 'F1' \\\n  --is-linux\n\naz webapp create \\\n  --resource-group 'Staging-Web-RG' \\\n  --plan 'WebPlan-Free' \\\n  --name 'my-az900-sample-app-2026' \\\n  --runtime 'NODE:20-lts'",
    steps: [
      "Search for 'App Services' and click '+ Create' → 'Web App'.",
      "Select Resource Group ('Staging-Web-RG') and enter a unique App name.",
      "Choose Publish: 'Code', Runtime stack: 'Node 20 LTS', Operating System: 'Linux', and Region: 'East US'.",
      "Under Pricing plan, select the 'Free F1' tier for evaluation.",
      "Click 'Review + create' → 'Create', then browse to the generated `azurewebsites.net` default landing page."
    ],
    question: "What is the primary difference between an App Service Plan and a Web App?",
    solution: "The App Service Plan represents the underlying compute resources (CPU, RAM, pricing tier, region), while the Web App is the application code and configuration running on that plan."
  },
  {
    id: "lab-9",
    number: "09",
    title: "Create and Trigger a Serverless Azure Function",
    duration: "15 min",
    domain: "Domain 2: Azure Architecture & Services",
    objective: "Build an event-driven serverless Function App on a Consumption Plan and test an HTTP GET/POST trigger.",
    scenario: "Create a lightweight REST webhook that returns a dynamic JSON payload without managing servers.",
    commands: "# Test Azure Function HTTP endpoint:\ncurl -X GET 'https://myfuncapp2026.azurewebsites.net/api/HttpTrigger1?name=CloudLearner'",
    steps: [
      "Search for 'Function App' and click '+ Create'.",
      "Select Hosting option: 'Consumption (Serverless)' for pay-per-execution billing.",
      "Choose Runtime: 'Python' or 'Node.js', Region: 'East US'.",
      "Once deployed, open the Function App and click 'Functions' → '+ Create' → 'HTTP trigger'.",
      "Click 'Code + Test', run the function, and verify the HTTP 200 response."
    ],
    question: "Under the Azure Functions Consumption Plan, what are you billed for?",
    solution: "You are billed strictly for the number of function executions and the gigabyte-seconds (GB-s) of memory/compute consumed during runtime. If zero requests arrive, your cost is zero."
  },
  {
    id: "lab-10",
    number: "10",
    title: "Explore Microsoft Entra ID (Users, Groups & MFA)",
    duration: "15 min",
    domain: "Domain 3: Management & Governance",
    objective: "Navigate the Microsoft Entra ID admin center, create cloud users and security groups, and inspect MFA security defaults.",
    scenario: "Onboard new engineering contractors and organize them into role-based security groups.",
    commands: "# Create an Entra ID user with CLI:\naz ad user create \\\n  --display-name 'Alex Rivera' \\\n  --user-principal-name 'alex.rivera@yourtenant.onmicrosoft.com' \\\n  --password 'ComplexPass123!'",
    steps: [
      "In the Azure Portal search bar, type 'Microsoft Entra ID' and open the overview blade.",
      "Inspect your Tenant ID, Primary domain, and License tier (Free / P1 / P2).",
      "In the left menu, click 'Users' → '+ New user' → 'Create new user' and fill in user details.",
      "Click 'Groups' → '+ New group', create a Security group named 'Cloud-Engineers', and add the new user.",
      "Inspect 'Security' → 'Manage Security defaults' to review baseline tenant MFA enforcement."
    ],
    question: "What is the difference between a Tenant and a Subscription in Microsoft Entra ID?",
    solution: "A Tenant is a dedicated instance of Microsoft Entra ID representing an organization (identities, users, groups), whereas a Subscription is an agreement with Microsoft to provision and pay for Azure cloud resources."
  },
  {
    id: "lab-11",
    number: "11",
    title: "Assign an Azure RBAC Role with Least Privilege",
    duration: "15 min",
    domain: "Domain 3: Management & Governance",
    objective: "Assign the 'Virtual Machine Contributor' role to a user at the Resource Group scope and verify permission boundaries.",
    scenario: "Grant a junior developer permission to manage and restart VMs in Staging without giving them permission to modify networks or access billing data.",
    commands: "# Assign RBAC role using Azure CLI:\naz role assignment create \\\n  --assignee 'alex.rivera@yourtenant.onmicrosoft.com' \\\n  --role 'Virtual Machine Contributor' \\\n  --resource-group 'Staging-Web-RG'",
    steps: [
      "Navigate to 'Resource groups' → 'Staging-Web-RG'.",
      "Click 'Access control (IAM)' from the left menu.",
      "Click '+ Add' → 'Add role assignment'.",
      "Search for and select the built-in role: 'Virtual Machine Contributor'.",
      "On the 'Members' tab, select your test user, then click 'Review + assign'."
    ],
    question: "Can a user assigned 'Virtual Machine Contributor' grant other users permissions in the Resource Group?",
    solution: "No. Only identities with 'Owner' or 'User Access Administrator' roles have permission to assign RBAC roles to others."
  },
  {
    id: "lab-12",
    number: "12",
    title: "Create and Enforce an Azure Policy & Resource Lock",
    duration: "18 min",
    domain: "Domain 3: Management & Governance",
    objective: "Assign a built-in policy requiring tags on all resources and apply a 'CanNotDelete' lock to protect production storage.",
    scenario: "Prevent accidental deletion of business databases and enforce tagging governance across your subscription.",
    commands: "# Apply CanNotDelete lock via CLI:\naz lock create \\\n  --name 'ProtectProductionLock' \\\n  --lock-type 'CanNotDelete' \\\n  --resource-group 'Staging-Web-RG'",
    steps: [
      "Search for 'Policy' in the portal and click 'Assignments' → 'Assign policy'.",
      "Set Scope to your subscription or resource group.",
      "Select Policy definition: 'Require a tag and its value on resources' (e.g. Tag: 'Environment').",
      "Open your Resource Group 'Staging-Web-RG' → click 'Locks' → '+ Add'.",
      "Create a lock named 'PreventDeletion' with Lock type 'Delete' (CanNotDelete).",
      "Attempt to delete a resource inside the group and verify the lock enforcement error message."
    ],
    question: "Does an Azure Subscription Owner have the authority to delete a resource protected by a 'CanNotDelete' lock?",
    solution: "No. Even Subscription Owners are blocked from deleting the resource until they explicitly remove the lock first."
  },
  {
    id: "lab-13",
    number: "13",
    title: "Create a Monthly Budget & Alert in Cost Management",
    duration: "15 min",
    domain: "Domain 3: Management & Governance",
    objective: "Configure a monthly spending budget of $100 with automated email alerts at 80% and 100% thresholds.",
    scenario: "Set up fiscal guardrails to prevent unexpected cloud bill overruns during development testing.",
    commands: "# View current usage costs via CLI:\naz consumption usage list --output table",
    steps: [
      "Search for 'Cost Management + Billing' in the portal.",
      "In the left menu, select 'Cost Management' → 'Budgets' → '+ Add'.",
      "Name the budget 'Dev-Monthly-Budget' with a Reset period of 'Monthly'.",
      "Set the Budget amount to $100 USD.",
      "Configure Alert conditions: 80% ($80) and 100% ($100) of budget, providing your email address.",
      "Click 'Create' to activate the automated financial alert."
    ],
    question: "Does reaching 100% of an Azure Budget automatically shut down your virtual machines?",
    solution: "No. By default, Azure Budgets only send email alerts and webhook notifications. They do not stop running resources unless you explicitly integrate them with Azure Action Groups and automation runbooks."
  },
  {
    id: "lab-14",
    number: "14",
    title: "Configure Azure Monitor Alert & Application Insights",
    duration: "18 min",
    domain: "Domain 3: Management & Governance",
    objective: "Create a metric alert rule triggering when VM CPU utilization exceeds 85% for 5 consecutive minutes.",
    scenario: "Set up proactive infrastructure monitoring to alert on-call engineers before server capacity degrades.",
    commands: "# Create Metric Alert Rule via Azure CLI:\naz monitor metrics alert create \\\n  --name 'High-CPU-Alert' \\\n  --resource-group 'Staging-Web-RG' \\\n  --scopes '/subscriptions/SUB_ID/resourceGroups/Staging-Web-RG/providers/Microsoft.Compute/virtualMachines/Web-VM-01' \\\n  --condition 'avg Percentage CPU > 85' \\\n  --window-size 5m \\\n  --evaluation-frequency 1m",
    steps: [
      "Open 'Monitor' in the Azure Portal.",
      "Click 'Alerts' → '+ Create' → 'Alert rule'.",
      "Select your VM 'Web-VM-01' as the target resource.",
      "Under Condition, select Signal name: 'Percentage CPU'.",
      "Set Threshold type: 'Static', Operator: 'Greater than', Threshold value: '85%'.",
      "Configure an Action Group to send an SMS or Email notification to the admin team."
    ],
    question: "What is the difference between Azure Monitor Metrics and Azure Monitor Logs?",
    solution: "Metrics are lightweight numerical time-series values describing system state in real-time (ideal for fast alerting), whereas Logs are rich, structured textual records queried using Kusto Query Language (KQL) for deep diagnostics."
  },
  {
    id: "lab-15",
    number: "15",
    title: "Launch & Use Azure Cloud Shell (Bash & PowerShell)",
    duration: "12 min",
    domain: "Domain 3: Management & Governance",
    objective: "Initialize the browser-based Cloud Shell environment, attach an Azure Files backing store, and toggle between Bash and PowerShell.",
    scenario: "Run administrative commands from any workstation without installing local SDKs or managing credentials.",
    commands: "# Inside Cloud Shell (Bash):\naz version\naz group list --output table\n\n# Inside Cloud Shell (PowerShell):\n$PSVersionTable\nGet-AzResourceGroup",
    steps: [
      "Click the Cloud Shell icon `[>_]` in the top header toolbar of the Azure Portal.",
      "Select your preferred shell environment: 'Bash' or 'PowerShell'.",
      "Allow Cloud Shell to mount the required 5GB Azure Files storage share.",
      "Execute `az account show` in Bash to inspect your authenticated identity.",
      "Use the environment dropdown in the top-left of the terminal window to switch between Bash and PowerShell."
    ],
    question: "Are files saved in your Cloud Shell `$HOME` directory persistent across browser sessions?",
    solution: "Yes! Cloud Shell automatically mounts an Azure File share in your storage account that persistently retains your `$HOME` directory, custom scripts, and `.bashrc` settings."
  },
  {
    id: "lab-16",
    number: "16",
    title: "Provision Resources using Azure CLI (`az`)",
    duration: "15 min",
    domain: "Domain 3: Management & Governance",
    objective: "Use cross-platform Azure CLI commands to script the end-to-end creation of a Resource Group, VNet, and Storage Account.",
    scenario: "Automate routine cloud infrastructure provisioning using declarative CLI command scripts.",
    commands: "# Step-by-step CLI provisioning script:\n# 1. Login:\naz login\n\n# 2. Set active subscription:\naz account set --subscription 'My-Subscription'\n\n# 3. Create Resource Group:\naz group create --name 'CLI-Demo-RG' --location 'westeurope'\n\n# 4. Create VNet:\naz network vnet create --resource-group 'CLI-Demo-RG' --name 'CLI-VNet' --address-prefixes 172.16.0.0/16\n\n# 5. Clean up:\naz group delete --name 'CLI-Demo-RG' --yes --no-wait",
    steps: [
      "Open your local terminal or Azure Cloud Shell.",
      "Execute `az group create --name 'CLI-Demo-RG' --location 'westeurope'`.",
      "Verify the JSON response confirming provisioning state is 'Succeeded'.",
      "Query the newly created group with `az group show --name 'CLI-Demo-RG' --query '{Name:name, Location:location, Status:properties.provisioningState}'`.",
      "Execute the cleanup command `az group delete --name 'CLI-Demo-RG' --yes` to remove all resources."
    ],
    question: "What output formats does the Azure CLI support via the `--output` flag?",
    solution: "The Azure CLI supports `json` (default), `jsonc` (colored JSON), `table` (ASCII table), `tsv` (tab-separated values), and `yaml`."
  },
  {
    id: "lab-17",
    number: "17",
    title: "Provision Resources using Azure PowerShell (`Az`)",
    duration: "15 min",
    domain: "Domain 3: Management & Governance",
    objective: "Use native PowerShell cmdlets (`New-AzResourceGroup`, `New-AzStorageAccount`) and pipeline objects to automate Azure tasks.",
    scenario: "Write PowerShell automation scripts taking advantage of structured .NET object pipelines.",
    commands: "# PowerShell Cmdlet Workflow:\n# 1. Authenticate:\nConnect-AzAccount\n\n# 2. Create Resource Group:\n$rg = New-AzResourceGroup -Name 'PS-Demo-RG' -Location 'centralus'\n\n# 3. Inspect properties via pipeline:\n$rg | Select-Object ResourceGroupName, Location, ProvisioningState\n\n# 4. Remove Resource Group:\nRemove-AzResourceGroup -Name 'PS-Demo-RG' -Force",
    steps: [
      "Launch PowerShell 7 or open PowerShell in Azure Cloud Shell.",
      "Execute `Connect-AzAccount` if running locally.",
      "Run `$rg = New-AzResourceGroup -Name 'PS-Demo-RG' -Location 'centralus'`.",
      "Pipeline the output: `$rg | Format-List` to inspect all returned .NET properties.",
      "Clean up the test environment: `Remove-AzResourceGroup -Name 'PS-Demo-RG' -Force`."
    ],
    question: "What is the primary difference in how Azure PowerShell and Azure CLI return data?",
    solution: "Azure CLI returns text/JSON strings, whereas Azure PowerShell returns rich .NET objects that can be filtered, sorted, and piped directly into subsequent PowerShell cmdlets."
  }
];

export const domainTests = [
  {
    id: "domain-test-1",
    title: "Domain 1 Test: Cloud Concepts",
    weight: "25–30%",
    questionCount: 25,
    duration: "30 min",
    description: "Evaluates your understanding of cloud computing fundamentals, the Shared Responsibility Model, Public/Private/Hybrid models, CapEx vs OpEx economics, and cloud service types (IaaS, PaaS, SaaS).",
    questions: [
      {
        id: "dt1-q1",
        question: "Under the Shared Responsibility Model, which component is ALWAYS the customer's responsibility across IaaS, PaaS, and SaaS?",
        answers: [
          { id: "A", text: "Physical datacenter security", correct: false },
          { id: "B", text: "Customer data, identity, and access management", correct: true },
          { id: "C", text: "Hypervisor virtualization layer", correct: false },
          { id: "D", text: "Operating system security patching", correct: false }
        ],
        explanation: "In all cloud models (IaaS, PaaS, SaaS), the customer always retains responsibility for securing their data, information, endpoints, and identity access management."
      },
      {
        id: "dt1-q2",
        question: "Which cloud benefit describes the ability of a system to automatically dynamically increase or decrease compute resources based on fluctuating demand?",
        answers: [
          { id: "A", text: "High Availability", correct: false },
          { id: "B", text: "Elasticity", correct: true },
          { id: "C", text: "Disaster Recovery", correct: false },
          { id: "D", text: "Predictability", correct: false }
        ],
        explanation: "Elasticity is the ability to automatically scale resources dynamically up or down in real time to match immediate workload demands, ensuring you never pay for idle capacity."
      },
      {
        id: "dt1-q3",
        question: "A company plans to migrate its legacy on-premises web application to Microsoft Azure. The organization wants maximum control over the operating system and installed software. Which cloud service type should they select?",
        answers: [
          { id: "A", text: "Software as a Service (SaaS)", correct: false },
          { id: "B", text: "Platform as a Service (PaaS)", correct: false },
          { id: "C", text: "Infrastructure as a Service (IaaS)", correct: true },
          { id: "D", text: "Functions as a Service (FaaS)", correct: false }
        ],
        explanation: "Infrastructure as a Service (IaaS) provides virtualized hardware (VMs) where the customer has full administrative control over the operating system, middleware, and installed applications."
      },
      {
        id: "dt1-q4",
        question: "What financial model characterizes spending money upfront on physical servers, storage arrays, and datacenter cooling before using them?",
        answers: [
          { id: "A", text: "Operational Expenditure (OpEx)", correct: false },
          { id: "B", text: "Capital Expenditure (CapEx)", correct: true },
          { id: "C", text: "Consumption-based pricing", correct: false },
          { id: "D", text: "Dynamic variable pricing", correct: false }
        ],
        explanation: "Capital Expenditure (CapEx) is the upfront purchase of physical IT infrastructure assets that are amortized and depreciated over multiple years."
      },
      {
        id: "dt1-q5",
        question: "Which statement accurately describes a Hybrid Cloud deployment?",
        answers: [
          { id: "A", text: "An infrastructure environment combining public cloud services with private on-premises infrastructure", correct: true },
          { id: "B", text: "A cloud platform open to the public with free compute access", correct: false },
          { id: "C", text: "A datacenter owned exclusively by Microsoft with no external connections", correct: false },
          { id: "D", text: "A multi-tenant application hosting environment", correct: false }
        ],
        explanation: "A hybrid cloud connects public cloud services (like Microsoft Azure) with private on-premises datacenters, allowing data and applications to be shared between them."
      }
    ]
  },
  {
    id: "domain-test-2",
    title: "Domain 2 Test: Azure Architecture & Services",
    weight: "35–40%",
    questionCount: 35,
    duration: "40 min",
    description: "Evaluates your knowledge of Azure regions, Availability Zones, management hierarchy, compute services, networking, storage redundancy, and databases.",
    questions: [
      {
        id: "dt2-q1",
        question: "What is the correct order of the Azure management hierarchy from highest to lowest scope?",
        answers: [
          { id: "A", text: "Subscription → Management Group → Resource Group → Resources", correct: false },
          { id: "B", text: "Management Group → Subscription → Resource Group → Resources", correct: true },
          { id: "C", text: "Resource Group → Management Group → Subscription → Resources", correct: false },
          { id: "D", text: "Management Group → Resource Group → Subscription → Resources", correct: false }
        ],
        explanation: "The Azure hierarchy is: Management Groups (top container for multiple subscriptions) → Subscriptions → Resource Groups → Resources (individual VMs, VNets, Storage Accounts)."
      },
      {
        id: "dt2-q2",
        question: "An organization requires high availability with protection against an entire datacenter failing within a single Azure Region. Which feature should they configure?",
        answers: [
          { id: "A", text: "Availability Zones", correct: true },
          { id: "B", text: "Locally Redundant Storage (LRS)", correct: false },
          { id: "C", text: "Azure ExpressRoute", correct: false },
          { id: "D", text: "Network Security Groups (NSGs)", correct: false }
        ],
        explanation: "Availability Zones are physically separate datacenters within an Azure region equipped with independent power, cooling, and networking to provide datacenter-level fault isolation."
      },
      {
        id: "dt2-q3",
        question: "Which Azure service provides a serverless, event-driven compute engine that executes code snippets in response to triggers without managing VMs?",
        answers: [
          { id: "A", text: "Azure Virtual Machines", correct: false },
          { id: "B", text: "Azure Functions", correct: true },
          { id: "C", text: "Azure Virtual Desktop", correct: false },
          { id: "D", text: "Azure App Service Free tier", correct: false }
        ],
        explanation: "Azure Functions is an event-driven serverless platform that runs code on-demand in response to events (HTTP requests, queue messages, timers) with automated scaling."
      },
      {
        id: "dt2-q4",
        question: "Which Azure Storage redundancy option replicates your data synchronously across three separate Availability Zones in the primary region?",
        answers: [
          { id: "A", text: "Locally Redundant Storage (LRS)", correct: false },
          { id: "B", text: "Zone-Redundant Storage (ZRS)", correct: true },
          { id: "C", text: "Geo-Redundant Storage (GRS)", correct: false },
          { id: "D", text: "Read-Access Geo-Redundant Storage (RA-GRS)", correct: false }
        ],
        explanation: "Zone-Redundant Storage (ZRS) copies data synchronously across three distinct Availability Zones within the same primary Azure region."
      },
      {
        id: "dt2-q5",
        question: "Which Azure database service is a globally distributed, multi-model NoSQL database providing single-digit millisecond response times and 99.999% SLA?",
        answers: [
          { id: "A", text: "Azure SQL Database", correct: false },
          { id: "B", text: "Azure Cosmos DB", correct: true },
          { id: "C", text: "SQL Server on Azure VM", correct: false },
          { id: "D", text: "Azure Table Storage Basic", correct: false }
        ],
        explanation: "Azure Cosmos DB is Microsoft's globally distributed, multi-model NoSQL database engine designed for elastic global scale and ultra-low latency."
      }
    ]
  },
  {
    id: "domain-test-3",
    title: "Domain 3 Test: Azure Management & Governance",
    weight: "30–35%",
    questionCount: 30,
    duration: "35 min",
    description: "Evaluates your mastery of Microsoft Entra ID, Azure RBAC, Azure Policy, Resource Locks, Cost Management, Advisor, Monitor, Service Health, and SLAs.",
    questions: [
      {
        id: "dt3-q1",
        question: "An administrator needs to prevent developers from accidentally deleting production storage accounts while still allowing them to create and modify blobs. What should the administrator configure?",
        answers: [
          { id: "A", text: "A 'CanNotDelete' (Delete) Resource Lock on the storage account", correct: true },
          { id: "B", text: "A 'ReadOnly' Resource Lock on the resource group", correct: false },
          { id: "C", text: "Azure DDoS Protection Standard", correct: false },
          { id: "D", text: "An Azure Advisor cost recommendation", correct: false }
        ],
        explanation: "A 'CanNotDelete' lock allows authorized users to read and modify resource data but prevents the resource itself from being deleted."
      },
      {
        id: "dt3-q2",
        question: "Which Azure service analyzes your tenant telemetry and provides proactive, actionable recommendations across Cost, Security, Reliability, Performance, and Operational Excellence?",
        answers: [
          { id: "A", text: "Azure Advisor", correct: true },
          { id: "B", text: "Azure Service Health", correct: false },
          { id: "C", text: "Azure Sentinel", correct: false },
          { id: "D", text: "Azure Policy", correct: false }
        ],
        explanation: "Azure Advisor is a personalized cloud consultant that analyzes your configurations and telemetry across the 5 pillars of the Well-Architected Framework."
      },
      {
        id: "dt3-q3",
        question: "Which tool allows an organization to estimate the cost savings of migrating their existing on-premises datacenter workloads to Microsoft Azure over a multi-year period?",
        answers: [
          { id: "A", text: "Azure Pricing Calculator", correct: false },
          { id: "B", text: "Total Cost of Ownership (TCO) Calculator", correct: true },
          { id: "C", text: "Azure Cost Management Budgets", correct: false },
          { id: "D", text: "Azure Service Trust Portal", correct: false }
        ],
        explanation: "The TCO Calculator compares the total cost of operating an on-premises datacenter (servers, power, cooling, labor) versus migrating to Azure over time."
      },
      {
        id: "dt3-q4",
        question: "What is the maximum allowable downtime per year for an Azure service with a guaranteed SLA of 99.99% ('four nines')?",
        answers: [
          { id: "A", text: "Approximately 8 hours and 45 minutes", correct: false },
          { id: "B", text: "Approximately 52 minutes and 36 seconds", correct: true },
          { id: "C", text: "Approximately 5 minutes and 15 seconds", correct: false },
          { id: "D", text: "Zero downtime is guaranteed", correct: false }
        ],
        explanation: "A 99.99% SLA allows a maximum annual downtime of `(1 - 0.9999) * 365.25 * 24 * 60 = 52.56 minutes` per year."
      },
      {
        id: "dt3-q5",
        question: "Which Azure support plan is the minimum tier that includes 24/7 technical support access by phone and email for production workloads?",
        answers: [
          { id: "A", text: "Basic Plan", correct: false },
          { id: "B", text: "Developer Plan", correct: false },
          { id: "C", text: "Standard Plan", correct: true },
          { id: "D", text: "Community Forum Support", correct: false }
        ],
        explanation: "The Standard Plan is the entry-level support tier for production workloads that provides 24/7 technical support access by phone and email with < 1 hour response times for critical severity A issues."
      }
    ]
  }
];

export const practiceExams = [
  { id: "exam-1", title: "AZ-900 Practice Exam 1", questionCount: 50, duration: "65 min", passingScore: 70 },
  { id: "exam-2", title: "AZ-900 Practice Exam 2", questionCount: 50, duration: "65 min", passingScore: 70 },
  { id: "exam-3", title: "AZ-900 Practice Exam 3", questionCount: 50, duration: "65 min", passingScore: 70 },
  { id: "exam-4", title: "AZ-900 Practice Exam 4", questionCount: 50, duration: "65 min", passingScore: 70 },
  { id: "exam-5", title: "AZ-900 Practice Exam 5", questionCount: 50, duration: "65 min", passingScore: 70 },
  { id: "mock-final", title: "AZ-900 Final Certification Mock Exam (Full Simulator)", questionCount: 65, duration: "65 min", passingScore: 70 }
];

export const examReadinessAreas = [
  { id: "cloud-concepts", name: "Cloud Concepts", domain: "Domain 1", officialWeight: "25–30%", targetScore: 85, benchmark: 88, lessonIds: [1, 2, 3, 4, 5, 6] },
  { id: "azure-architecture", name: "Azure Architecture", domain: "Domain 2", officialWeight: "35–40%", targetScore: 85, benchmark: 76, lessonIds: [7, 8, 9, 10, 11, 12] },
  { id: "azure-services", name: "Azure Compute & Storage", domain: "Domain 2", officialWeight: "35–40%", targetScore: 85, benchmark: 82, lessonIds: [13, 14, 15, 16, 17, 18] },
  { id: "security-identity", name: "Security & Identity", domain: "Domain 3", officialWeight: "30–35%", targetScore: 85, benchmark: 91, lessonIds: [19, 20, 21, 22] },
  { id: "governance", name: "Azure Governance & Compliance", domain: "Domain 3", officialWeight: "30–35%", targetScore: 85, benchmark: 72, lessonIds: [23, 24, 25, 26] },
  { id: "pricing-cost", name: "Cost Management & SLAs", domain: "Domain 3", officialWeight: "30–35%", targetScore: 85, benchmark: 85, lessonIds: [27, 28, 29, 30] },
  { id: "monitoring", name: "Monitoring & Advisor", domain: "Domain 3", officialWeight: "30–35%", targetScore: 85, benchmark: 79, lessonIds: [31, 32] }
];

export const studyPlans = [
  {
    id: "plan-30m",
    name: "30-Minute Cram Revision",
    target: "Last-minute review before walking into the exam room",
    focus: "High-yield formulas, acronyms, SLA math, Shared Responsibility matrix, and LRS vs ZRS vs GRS comparison table.",
    items: [
      "Review Shared Responsibility Model matrix (Customer owns data in SaaS/PaaS/IaaS).",
      "Check SLA downtime calculations: 99.9% = 8.76 hrs/yr, 99.99% = 52.56 min/yr.",
      "Review hierarchy: Management Group → Subscription → Resource Group → Resources.",
      "Check storage redundancy: LRS (1 datacenter), ZRS (3 zones), GRS (2 regions)."
    ]
  },
  {
    id: "plan-1h",
    name: "1-Hour High-Yield Review",
    target: "Morning-of-exam preparation",
    focus: "Top 22 Service Comparisons, Entra ID vs RBAC vs Azure Policy, and CapEx vs OpEx scenarios.",
    items: [
      "Read through all 22 Comparison Battlecards in the Athencert Comparison Hub.",
      "Review Microsoft Defender for Cloud vs Sentinel vs Azure Monitor differences.",
      "Review Pricing Calculator vs TCO Calculator.",
      "Test yourself on 20 scenario-based questions."
    ]
  },
  {
    id: "plan-1d",
    name: "1-Day Sprint Review",
    target: "Day before test day",
    focus: "Completing Domain Tests 1, 2, and 3, reviewing weak areas, and flipping all 50 flashcards.",
    items: [
      "Take Domain 1 Test (Cloud Concepts 25-30%).",
      "Take Domain 2 Test (Architecture & Services 35-40%).",
      "Take Domain 3 Test (Management & Governance 30-35%).",
      "Review flagged questions and explanations for every incorrect answer."
    ]
  },
  {
    id: "plan-3d",
    name: "3-Day Focused Sprint",
    target: "Weekend study intensive",
    focus: "Day 1: Cloud Concepts & Architecture. Day 2: Compute, Storage & Networking. Day 3: Identity, Governance & Mock Exam.",
    items: [
      "Day 1: Complete Modules 0 through 4 + Labs 1 to 7.",
      "Day 2: Complete Modules 5 through 10 + Labs 8 to 14.",
      "Day 3: Complete Modules 11 through 19 + Practice Exams 1 & 2."
    ]
  },
  {
    id: "plan-7d",
    name: "7-Day Comprehensive Review",
    target: "1 week out from scheduled exam date",
    focus: "1 domain every 2 days, working through all 17 hands-on labs, 5 practice exams, and the Final Mock Exam simulator.",
    items: [
      "Days 1–2: Master Domain 1 (Cloud Concepts) + Flashcards.",
      "Days 3–4: Master Domain 2 (Azure Architecture & Services) + 8 Compute/Storage Labs.",
      "Days 5–6: Master Domain 3 (Management, Governance & Pricing) + 9 Governance Labs.",
      "Day 7: Full 65-question Mock Exam Simulator + Final Cheat Sheet."
    ]
  },
  {
    id: "plan-14d",
    name: "14-Day Zero-to-Hero Study Plan",
    target: "Complete beginner starting from scratch",
    focus: "2 modules per day with interactive labs, daily flashcard mastery, and weekend practice tests.",
    items: [
      "Days 1–3: Welcome 0.1–0.3 & Module 1 (Cloud Concepts, Shared Responsibility, CapEx vs OpEx).",
      "Days 4–7: Modules 2 to 6 (Global Infrastructure, Compute, Networking, Storage & Databases).",
      "Days 8–11: Modules 7 to 13 (Entra ID, RBAC, Defender, Policy, Management Tools, Cost Management).",
      "Days 12–13: Modules 14 to 19 (SLAs, Reliability, Compliance, Support) + Practice Exams 1–4.",
      "Day 14: Final Mock Exam Simulator + Review Weakest Area."
    ]
  }
];

export const masterCheatSheet = {
  acronyms: [
    { code: "IaaS", term: "Infrastructure as a Service", meaning: "Virtual machines, networking, storage. Customer manages OS and apps." },
    { code: "PaaS", term: "Platform as a Service", meaning: "App Service, Functions, SQL DB. Microsoft manages OS, customer manages code & data." },
    { code: "SaaS", term: "Software as a Service", meaning: "Microsoft 365, Power BI. Microsoft manages everything, customer configures user access." },
    { code: "CapEx", term: "Capital Expenditure", meaning: "Upfront spending on physical infrastructure; depreciated over multiple years." },
    { code: "OpEx", term: "Operational Expenditure", meaning: "Ongoing pay-as-you-go consumption spending; deducted in current tax year." },
    { code: "SLA", term: "Service Level Agreement", meaning: "Microsoft's contractual commitment regarding service uptime and downtime credits." },
    { code: "RPO", term: "Recovery Point Objective", meaning: "The maximum acceptable amount of data loss measured in time (e.g. 15 minutes of data)." },
    { code: "RTO", term: "Recovery Time Objective", meaning: "The maximum acceptable amount of downtime before a system must be restored." },
    { code: "RBAC", term: "Role-Based Access Control", meaning: "Granular authorization assigning identities specific roles at explicit scopes." },
    { code: "MFA", term: "Multifactor Authentication", meaning: "Requiring 2 or more distinct verification factors (something you know, have, or are)." },
    { code: "SSO", term: "Single Sign-On", meaning: "Authenticating once to access multiple enterprise applications seamlessly." },
    { code: "VNet", term: "Virtual Network", meaning: "Private isolated network in Azure with custom IP address space and subnets." },
    { code: "NSG", term: "Network Security Group", meaning: "Layer 4 stateful packet filter rulebook controlling inbound/outbound traffic." },
    { code: "ARM", term: "Azure Resource Manager", meaning: "Management control plane executing deployments, policy, and RBAC." },
    { code: "Bicep", term: "Bicep Language", meaning: "Modern domain-specific declarative language for Azure Infrastructure as Code." },
    { code: "SIEM", term: "Security Information & Event Mgmt", meaning: "Centralized threat detection and log aggregation platform (Microsoft Sentinel)." },
    { code: "KQL", term: "Kusto Query Language", meaning: "High-performance query language used in Azure Monitor Log Analytics and Sentinel." }
  ],
  rulesOfThumb: [
    { title: "Hierarchy Rule", text: "Management Group → Subscription → Resource Group → Resource. Policies and permissions inherit downward." },
    { title: "Shared Responsibility Rule", text: "Customer ALWAYS manages Customer Data and Identity in all models (IaaS, PaaS, SaaS)." },
    { title: "Azure Policy vs RBAC", text: "RBAC controls WHO can do what actions. Azure Policy controls WHAT properties resources can have." },
    { title: "Resource Lock Rule", text: "CanNotDelete allows reads & edits but stops deletion. ReadOnly stops edits and deletion. Locks override Owner role until removed." },
    { title: "Storage Redundancy Rule", text: "LRS = 3 copies in 1 DC. ZRS = 3 copies in 3 zones. GRS = 6 copies across 2 paired regions." },
    { title: "Storage Tier Rule", text: "Hot (high storage cost / low access cost) → Cool (30d min) → Cold (90d min) → Archive (cheapest storage / highest retrieval cost / hours to rehydrate)." },
    { title: "SLA Math Rule", text: "99.9% = 8.76 hrs/yr downtime. 99.99% = 52.56 min/yr downtime. 99.999% = 5.26 min/yr downtime." },
    { title: "Load Balancer Rule", text: "Layer 4 (TCP/UDP) = Azure Load Balancer. Layer 7 Regional (URL routing + WAF) = Application Gateway. Layer 7 Global (Anycast + CDN) = Azure Front Door." }
  ]
};

export const careerRoadmap = {
  title: "Azure Certification Career Pathways",
  description: "AZ-900 is the foundational stepping stone. Choose your specialized trajectory based on your career goals:",
  paths: [
    {
      role: "Azure Administrator",
      certCode: "AZ-104",
      title: "Microsoft Certified: Azure Administrator Associate",
      badge: "Infrastructure & Ops",
      focus: "Managing storage, compute (VMs, containers), virtual networks, and Entra ID governance in enterprise tenants.",
      recommendedFor: "Sysadmins, Cloud Engineers, Infrastructure Specialists"
    },
    {
      role: "Azure Developer",
      certCode: "AZ-204",
      title: "Microsoft Certified: Azure Developer Associate",
      badge: "Development & Cloud Native",
      focus: "Building cloud apps with Azure SDKs, App Service, Functions, Cosmos DB, Azure Event Grid, and Docker containers.",
      recommendedFor: "Software Engineers, Backend Developers, Full-Stack Engineers"
    },
    {
      role: "Azure Solutions Architect",
      certCode: "AZ-305",
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      badge: "Enterprise Architecture",
      focus: "Designing high availability, disaster recovery, security, identity, and data integration architectures at enterprise scale.",
      prerequisite: "Requires AZ-104 first",
      recommendedFor: "Senior Cloud Architects, Technical Leads"
    },
    {
      role: "Azure Security Engineer",
      certCode: "AZ-500",
      title: "Microsoft Certified: Azure Security Engineer Associate",
      badge: "Cybersecurity & Zero Trust",
      focus: "Implementing security controls across identity (Entra P2, PIM), network security (Firewalls, NSGs), and Sentinel SIEM.",
      recommendedFor: "SecOps Engineers, Security Analysts, Cloud Security Architects"
    },
    {
      role: "Azure Data Engineer",
      certCode: "DP-900 → DP-203",
      title: "Azure Data Fundamentals & Data Engineering",
      badge: "Data & Analytics",
      focus: "Core relational/NoSQL data concepts (DP-900) leading to Azure Synapse, Data Factory, and Databricks pipelines (DP-203).",
      recommendedFor: "Data Analysts, Data Engineers, BI Developers"
    },
    {
      role: "Azure AI Specialist",
      certCode: "AI-901 / AI-102",
      title: "Azure AI Fundamentals & Azure AI Engineer Associate",
      badge: "Artificial Intelligence",
      focus: "Current Microsoft AI offerings (note: legacy AI-900 was retired June 30, 2026) covering Azure OpenAI, Cognitive Services, and computer vision.",
      recommendedFor: "AI Engineers, ML Practitioners, Data Scientists"
    }
  ]
};
