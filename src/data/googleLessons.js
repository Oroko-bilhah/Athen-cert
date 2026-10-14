
export const googleLessons = [
  {
    id: 1,
    title: "What Is Cloud Computing?",
    category: "Module 1: Cloud Concepts",
    duration: "8 min",
    intro:
      "Cloud computing is the on-demand delivery of computing power, database storage, applications, and other IT resources through a cloud services platform via the internet with pay-as-you-go pricing.",
    keyIdea:
      "Cloud computing replaces rigid on-premises capital procurement with instant, elastic, pay-as-you-go digital infrastructure.",
    sections: [
      {
        heading: "Traditional IT vs. Cloud Infrastructure",
        paragraphs: [
          "In a traditional on-premises data center, organizations must forecast hardware capacity years in advance, purchase physical servers, rent real estate, maintain power and cooling, and employ dedicated facilities staff.",
          "Cloud infrastructure shifts this burden entirely to cloud providers like Google. You provision virtual servers, petabyte-scale storage, and AI runtimes in seconds via web consoles or APIs, paying strictly for the resources you consume."
        ]
      },
      {
        heading: "Core Characteristics of Cloud Computing",
        paragraphs: [
          "On-Demand Self-Service: Provision resources automatically without human interaction from Google.",
          "Broad Network Access: Access resources over the internet from mobile phones, laptops, and workstations globally.",
          "Resource Pooling: Multi-tenant infrastructure dynamically assigned according to customer demand.",
          "Rapid Elasticity: Capabilities scale outward and inward rapidly to match changing traffic spikes.",
          "Measured Service: Resource usage is monitored, metered, and billed transparently."
        ]
      }
    ],
    example: {
      title: "ON-PREMISES VS. GOOGLE CLOUD TRANSFORMATION",
      traditional:
        "Forecast hardware needs 12 months ahead → Purchase $500,000 in servers → Wait 8 weeks for shipment → Install in rack → Maintain power, cooling & OS patches.",
      cloud:
        "Log into Google Cloud Console → Click 'Create VM' → Server goes live in 30 seconds → Scale to 500 instances during Black Friday → Destroy instances when traffic drops."
    },
    concepts: [
      { number: "01", title: "On-Demand Utility", description: "Provision compute and storage instantly with zero upfront hardware purchases." },
      { number: "02", title: "Global Reach", description: "Deploy applications across continents in minutes on Google's private global fiber network." },
      { number: "03", title: "Metered Consumption", description: "Pay strictly for the seconds, gigabytes, and API queries your workload actually executes." }
    ],
    quiz: {
      question: "Which of the following best defines cloud computing?",
      answers: [
        { id: "A", text: "Purchasing physical rack servers and storing them in an owned private data center", correct: false },
        { id: "B", text: "On-demand delivery of IT resources over the internet with pay-as-you-go pricing", correct: true },
        { id: "C", text: "Running software strictly from offline local hard drives without network access", correct: false },
        { id: "D", text: "Leasing proprietary telecommunication fiber lines between offices", correct: false }
      ]
    }
  },
  {
    id: 2,
    title: "Cloud Computing Models (IaaS, PaaS, SaaS)",
    category: "Module 1: Cloud Concepts",
    duration: "9 min",
    intro:
      "Cloud services are categorized into three primary service models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",
    keyIdea:
      "As you move from IaaS to PaaS to SaaS, the cloud provider manages more of the underlying stack, allowing you to focus more on application code and business logic.",
    sections: [
      {
        heading: "The Cloud Shared Responsibility Spectrum",
        paragraphs: [
          "Infrastructure as a Service (IaaS): Google provides the raw building blocks (networking, physical data centers, virtualization, and disks). You install and manage the operating system, middleware, database engines, and applications (e.g. Compute Engine).",
          "Platform as a Service (PaaS): Google manages the operating system, hardware scaling, database patching, and language runtime. You simply upload your application code and data (e.g. Cloud Run, App Engine).",
          "Software as a Service (SaaS): Complete ready-to-use software delivered over the web. Google manages everything from hardware up to the user interface (e.g. Google Workspace, Looker SaaS)."
        ]
      }
    ],
    example: {
      title: "SERVICE MODEL ANALOGY: PIZZA AS A SERVICE",
      traditional: "Traditional On-Prem = Made at Home (You buy ingredients, oven, gas, table, soda).",
      cloud: "IaaS = Take and Bake (Store provides pizza; you bake it in your oven) | PaaS = Pizza Delivery (Cooked and delivered; you supply plates and drinks) | SaaS = Dining Out (Everything provided at the restaurant)."
    },
    concepts: [
      { number: "01", title: "IaaS: Full Control", description: "Ideal for legacy migrations, custom kernel modules, and direct OS configuration." },
      { number: "02", title: "PaaS: Developer Focus", description: "Deploy code directly without ever managing virtual machine operating systems or patches." },
      { number: "03", title: "SaaS: End-User Value", description: "Fully managed web applications with zero infrastructure responsibilities." }
    ],
    quiz: {
      question: "Which cloud service model requires the customer to manage the operating system and software patches?",
      answers: [
        { id: "A", text: "Software as a Service (SaaS)", correct: false },
        { id: "B", text: "Platform as a Service (PaaS)", correct: false },
        { id: "C", text: "Infrastructure as a Service (IaaS)", correct: true },
        { id: "D", text: "Function as a Service (FaaS)", correct: false }
      ]
    }
  },
  {
    id: 3,
    title: "Cloud Deployment Models (Public, Private, Hybrid & Multi-Cloud)",
    category: "Module 1: Cloud Concepts",
    duration: "8 min",
    intro:
      "Cloud deployment models determine where your infrastructure resides and who has ownership and administrative access to the physical hardware.",
    keyIdea:
      "Enterprises balance security, compliance, and agility by selecting Public, Private, Hybrid, or Multi-Cloud architectures.",
    sections: [
      {
        heading: "Comparing the 4 Deployment Models",
        paragraphs: [
          "Public Cloud: Owned and operated by a third-party provider like Google. Multi-tenant infrastructure accessible over public internet or dedicated private connections (e.g. Google Cloud Platform).",
          "Private Cloud: Dedicated cloud infrastructure used exclusively by a single organization, hosted either on-premises or by a specialized colocation provider.",
          "Hybrid Cloud: Combines on-premises private infrastructure with public cloud environments, connected by secure VPN or dedicated fiber (Cloud Interconnect).",
          "Multi-Cloud: Strategically utilizing two or more distinct public cloud providers (e.g. Google Cloud + AWS + Azure) using cross-cloud tools like Google Anthos / Google Distributed Cloud."
        ]
      }
    ],
    example: {
      title: "ENTERPRISE HYBRID CLOUD USE CASE",
      traditional: "A financial institution keeps regulated core banking ledgers on-premises in a private datacenter.",
      cloud: "The bank bursts frontend web traffic and runs petabyte AI analytics on Google Cloud, connected securely via Google Cloud Interconnect."
    },
    concepts: [
      { number: "01", title: "Public Cloud", description: "Maximum scalability, zero hardware maintenance, and global availability." },
      { number: "02", title: "Hybrid Cloud", description: "Bridges legacy on-premises assets with modern cloud services." },
      { number: "03", title: "Multi-Cloud Strategy", description: "Avoids vendor lock-in and leverages best-of-breed services across providers." }
    ],
    quiz: {
      question: "An organization connects its on-premises data center to Google Cloud using Cloud Interconnect. Which deployment model is being used?",
      answers: [
        { id: "A", text: "Pure Private Cloud", correct: false },
        { id: "B", text: "Hybrid Cloud", correct: true },
        { id: "C", text: "Community Cloud", correct: false },
        { id: "D", text: "Serverless Cloud", correct: false }
      ]
    }
  },
  {
    id: 4,
    title: "Benefits of Cloud Computing (Scalability, Elasticity, Agility, Reliability)",
    category: "Module 1: Cloud Concepts",
    duration: "8 min",
    intro:
      "Cloud computing delivers strategic business value far beyond simple cost reduction: scalability, elasticity, agility, high availability, fault tolerance, and global reach.",
    keyIdea:
      "Scalability handles planned growth over time; elasticity handles dynamic real-time fluctuations; agility empowers rapid innovation.",
    sections: [
      {
        heading: "Scalability vs. Elasticity",
        paragraphs: [
          "Scalability (Vertical vs. Horizontal): Vertical scaling (Scale Up) means adding more vCPUs and RAM to an existing VM. Horizontal scaling (Scale Out) means adding more VM instances or container pods to a fleet.",
          "Elasticity: The ability to automatically add or remove resources in real time based on fluctuating demand (e.g. autoscaling groups adding VMs during high web traffic and terminating them at midnight)."
        ]
      },
      {
        heading: "High Availability & Fault Tolerance",
        paragraphs: [
          "High Availability (HA): Ensuring systems remain operational and accessible with minimal downtime (e.g. 99.99% SLA) by distributing workloads across multiple Availability Zones.",
          "Fault Tolerance: The ability of a system to continue operating without interruption even if an underlying hardware component or entire datacenter zone fails completely."
        ]
      }
    ],
    example: {
      title: "SCALABILITY VS ELASTICITY IN PRACTICE",
      traditional: "A retail store buys 50 extra physical servers for a 3-day holiday sale that sit idle for the next 362 days.",
      cloud: "An e-commerce site on Google Cloud uses Autoscaling to automatically scale from 5 to 500 Cloud Run instances on Black Friday and scales back to 5 within minutes after the sale ends."
    },
    concepts: [
      { number: "01", title: "Scale Up vs Scale Out", description: "Scale Up = bigger single machine; Scale Out = more parallel machines." },
      { number: "02", title: "Elasticity", description: "Dynamic automated expansion and contraction matching real-time user traffic." },
      { number: "03", title: "Business Agility", description: "Spin up prototypes in minutes instead of waiting months for IT procurement." }
    ],
    quiz: {
      question: "Which cloud benefit describes a system automatically adding instances when traffic spikes and removing them when traffic drops?",
      answers: [
        { id: "A", text: "CapEx Depreciation", correct: false },
        { id: "B", text: "Elasticity", correct: true },
        { id: "C", text: "Data Sovereignty", correct: false },
        { id: "D", text: "Vertical Scale Up", correct: false }
      ]
    }
  },
  {
    id: 5,
    title: "CapEx vs. OpEx & Pay-As-You-Go Economics",
    category: "Module 1: Cloud Concepts",
    duration: "8 min",
    intro:
      "Cloud computing fundamentally changes organizational accounting by converting fixed upfront Capital Expenditures (CapEx) into variable Operational Expenditures (OpEx).",
    keyIdea:
      "Pay-as-you-go eliminates massive upfront risk, while Total Cost of Ownership (TCO) accounts for reduced real estate, power, cooling, and staff overhead.",
    sections: [
      {
        heading: "Capital Expenditure (CapEx)",
        paragraphs: [
          "CapEx involves upfront financial investments in physical assets such as servers, storage arrays, networking switches, cooling towers, and data center facilities.",
          "CapEx costs are capitalized on balance sheets and depreciated over 3 to 5 years, requiring long-term financial forecasting and carrying high risk if business needs change."
        ]
      },
      {
        heading: "Operational Expenditure (OpEx)",
        paragraphs: [
          "OpEx involves ongoing day-to-day operational payments for consumable services (utility model: electricity, water, and cloud computing).",
          "OpEx is deducted as an operating expense in the current tax period. You pay only for what you use by the second, gigabyte, or API request, allowing businesses to align IT spend directly with revenue."
        ]
      }
    ],
    example: {
      title: "FINANCIAL MODEL TRANSITION",
      traditional: "CapEx: $2,000,000 capital budget approved by board → Purchase datacenter hardware → Locks organization into fixed architecture for 5 years.",
      cloud: "OpEx: $200 monthly cloud invoice for initial MVP → Scales to $5,000/mo as paying customer base grows → Immediate tax write-off."
    },
    concepts: [
      { number: "01", title: "CapEx to OpEx", description: "Eliminates high upfront capital barriers in favor of predictable monthly operational bills." },
      { number: "02", title: "TCO Reduction", description: "Accounts for hidden datacenter costs: electricity, cooling, physical security, and facilities maintenance." },
      { number: "03", title: "Zero Idle Waste", description: "Turn off non-production development environments on weekends to instantly drop costs." }
    ],
    quiz: {
      question: "Which of the following is an example of an Operational Expenditure (OpEx)?",
      answers: [
        { id: "A", text: "Purchasing a $1,000,000 data center building", correct: false },
        { id: "B", text: "Buying physical rack-mounted server hardware", correct: false },
        { id: "C", text: "Paying a monthly pay-as-you-go Google Cloud invoice for Compute Engine VMs", correct: true },
        { id: "D", text: "Purchasing proprietary generator backup systems for on-prem datacenters", correct: false }
      ]
    }
  },

  {
    id: 6,
    title: "Google Cloud Global Infrastructure (Regions, Zones & PoPs)",
    category: "Module 2: Google Cloud Basics",
    duration: "10 min",
    intro:
      "Google Cloud infrastructure is built on a planet-scale private software-defined network spanning global regions, zones, edge points of presence (PoPs), and undersea fiber cables.",
    keyIdea:
      "Regions are geographic locations containing 3 or more isolated Zones connected by low-latency private fiber.",
    sections: [
      {
        heading: "Regions vs. Zones",
        paragraphs: [
          "Region: An independent geographic area (e.g. `us-central1` in Iowa, `europe-west1` in Belgium, `asia-east1` in Taiwan). Deploying across multiple regions provides disaster recovery and low-latency global user access.",
          "Zone: An isolated deployment area within a region (e.g. `us-central1-a`, `us-central1-b`, `us-central1-c`). Each zone has independent power, cooling, and network links. Distributing VMs across multiple zones protects against datacenter outages."
        ]
      },
      {
        heading: "Google's Global Private Network & Edge PoPs",
        paragraphs: [
          "Points of Presence (PoPs): Hundreds of edge locations worldwide that connect users directly to Google's private fiber backbone, bypassing public internet congestion.",
          "Network Service Tiers: Premium Tier routes user traffic over Google's global private network; Standard Tier routes over cheaper public internet routing."
        ]
      }
    ],
    example: {
      title: "MULTI-ZONE HIGH AVAILABILITY ARCHITECTURE",
      traditional: "Single server in one room fails → Complete company outage.",
      cloud: "Deploy Compute Engine VMs across Zone A, Zone B, and Zone C behind a Cloud Load Balancer → If Zone A suffers a power failure, Zone B and C handle 100% of traffic seamlessly."
    },
    concepts: [
      { number: "01", title: "Region", description: "A geographic area containing 3 or more isolated availability zones." },
      { number: "02", title: "Zone", description: "A single failure domain with independent power, cooling, and networking." },
      { number: "03", title: "Global Private Fiber", description: "Google's high-throughput fiber backbone links all regions with single-digit millisecond latency." }
    ],
    quiz: {
      question: "What is a Google Cloud Zone?",
      answers: [
        { id: "A", text: "A specific geographical country", correct: false },
        { id: "B", text: "An isolated deployment location within a region with independent power and networking", correct: true },
        { id: "C", text: "A billing currency exchange rate zone", correct: false },
        { id: "D", text: "A public internet DNS routing table", correct: false }
      ]
    }
  },
  {
    id: 7,
    title: "Google Cloud Projects & Resource Hierarchy",
    category: "Module 2: Google Cloud Basics",
    duration: "10 min",
    intro:
      "Google Cloud organizes all resources into a strict 4-level hierarchy: Organization → Folders → Projects → Resources.",
    keyIdea:
      "Every Google Cloud resource must belong to exactly one Project. Policies and IAM permissions inherit downwards from top to bottom.",
    sections: [
      {
        heading: "The 4-Level Resource Hierarchy",
        paragraphs: [
          "1. Organization Node: The root entity representing the entire company (tied to Google Workspace or Cloud Identity domain).",
          "2. Folders: Organizational units grouping projects by department (e.g. 'Engineering', 'Finance') or environment ('Prod', 'Dev').",
          "3. Projects: The fundamental organizing entity. All resources, billing accounts, and APIs are anchored to a Project.",
          "4. Resources: The actual cloud assets (Compute Engine VMs, Cloud Storage buckets, BigQuery datasets, Cloud SQL databases)."
        ]
      },
      {
        heading: "Project Identifiers: Name vs. ID vs. Number",
        paragraphs: [
          "Project Name: A friendly display label chosen by you. Not unique, can be changed anytime (e.g. 'My Test Project').",
          "Project ID: A globally unique string chosen at creation. CAN NEVER BE CHANGED (e.g. `athencert-prod-9872`). Used in APIs and CLI.",
          "Project Number: An auto-assigned permanent unique integer (e.g. `109283746501`). Used internally by Google."
        ]
      }
    ],
    example: {
      title: "POLICY INHERITANCE IN ACTION",
      traditional: "Individually configure permissions on 500 separate servers.",
      cloud: "Grant 'Security Auditor' role at the Organization level → The auditor automatically inherits read-only access to every Folder, Project, and VM across the entire company."
    },
    concepts: [
      { number: "01", title: "Organization Node", description: "Root apex of the hierarchy representing the entire company." },
      { number: "02", title: "Project: Core Boundary", description: "Every GCP resource must live inside a Project for billing and IAM boundaries." },
      { number: "03", title: "Inheritance Rule", description: "Permissions granted at higher levels cannot be revoked at lower levels (Union of permissions)." }
    ],
    quiz: {
      question: "Which of the following is true regarding a Google Cloud Project ID?",
      answers: [
        { id: "A", text: "It can be edited and renamed at any time from the console", correct: false },
        { id: "B", text: "It must be globally unique across all Google Cloud customers and can never be changed after creation", correct: true },
        { id: "C", text: "It is strictly a 12-digit random number", correct: false },
        { id: "D", text: "It is shared across multiple unrelated companies", correct: false }
      ]
    }
  },
  {
    id: 8,
    title: "Google Cloud Console & Cloud Shell (`gcloud` CLI & Editor)",
    category: "Module 2: Google Cloud Basics",
    duration: "9 min",
    intro:
      "Google Cloud provides multiple management interfaces: the web-based Cloud Console, the Google Cloud Mobile App, the REST APIs, and Cloud Shell with the `gcloud` CLI.",
    keyIdea:
      "Cloud Shell provides an in-browser authenticated Linux terminal with 5GB persistent storage, pre-installed cloud SDKs, and an integrated VS Code-style editor.",
    sections: [
      {
        heading: "Navigating the Cloud Console",
        paragraphs: [
          "The Google Cloud Console (console.cloud.google.com) is the web-based GUI for provisioning and managing resources.",
          "Key navigation elements include the Project Dropdown, Global Search Bar (<kbd>/</kbd>), Navigation Menu (), Cloud Shell Launcher (>_), and Notifications center."
        ]
      },
      {
        heading: "Cloud Shell & `gcloud` Command-Line Tool",
        paragraphs: [
          "`gcloud` is the primary CLI tool for managing Google Cloud resources and authentication.",
          "`gsutil` is the specialized CLI for Cloud Storage operations (`gcloud storage` modern command).",
          "`bq` is the specialized CLI for executing BigQuery queries and managing datasets.",
          "Cloud Shell is completely free and comes with `gcloud`, `docker`, `terraform`, `git`, `python`, `node`, and `java` pre-installed."
        ]
      }
    ],
    example: {
      title: "CLOUD SHELL WORKFLOW",
      traditional: "Download 500MB SDK → Configure Python paths → Set up local proxy → Manually configure SSL keys.",
      cloud: "Click '>_' in browser → Authenticated Debian terminal ready in 5 seconds → Run `gcloud compute instances list` immediately."
    },
    concepts: [
      { number: "01", title: "Cloud Console", description: "Visual web interface for provisioning, monitoring, and billing administration." },
      { number: "02", title: "Cloud Shell", description: "Free browser-based authenticated Linux shell with 5GB persistent home storage." },
      { number: "03", title: "Core CLIs: gcloud, gsutil, bq", description: "Universal command line tools for scripting and automated DevOps deployments." }
    ],
    quiz: {
      question: "Which tool is pre-installed in Cloud Shell for managing BigQuery datasets from the command line?",
      answers: [
        { id: "A", text: "gcloud compute", correct: false },
        { id: "B", text: "bq", correct: true },
        { id: "C", text: "gsutil", correct: false },
        { id: "D", text: "kubectl", correct: false }
      ]
    }
  },

  {
    id: 9,
    title: "Compute Engine: Virtual Machines, Disks & SSH Access",
    category: "Module 3: Compute Services",
    duration: "11 min",
    intro:
      "Compute Engine (GCE) is Google Cloud's Infrastructure as a Service (IaaS) offering, delivering scalable, customizable virtual machines (VMs) running Linux or Windows.",
    keyIdea:
      "Compute Engine provides maximum administrative control over virtual CPUs, memory, operating systems, persistent block disks, and networking.",
    sections: [
      {
        heading: "VM Instances & Machine Families",
        paragraphs: [
          "Machine Families: General-purpose (`E2`, `N2`, `N4` for web servers and databases), Compute-optimized (`C2`, `C3` for gaming and HPC), Memory-optimized (`M2`, `M3` for in-memory SAP HANA), and Accelerator-optimized (`A2`, `A3` with NVIDIA GPUs for AI/ML).",
          "Custom Machine Types: Unlike competitors, Google allows you to tailor exact vCPU and RAM ratios to avoid overpaying for unused capacity."
        ]
      },
      {
        heading: "Storage & SSH Access",
        paragraphs: [
          "Boot Disks: Mounted Persistent Disks containing the OS image (Debian, Ubuntu, RHEL, Windows Server).",
          "SSH Access: Connect seamlessly directly through the browser using Google Cloud Console Browser SSH via Identity-Aware Proxy (IAP) without needing a static public IP."
        ]
      }
    ],
    example: {
      title: "PROVISIONING A VM INSTANCE",
      traditional: "Buy server chassis → Mount in rack → Install OS from USB → Configure static network cables.",
      cloud: "Run: `gcloud compute instances create my-vm --zone=us-central1-a --machine-type=e2-medium --image-family=debian-12` → Running in 15 seconds."
    },
    concepts: [
      { number: "01", title: "IaaS Virtualization", description: "Complete OS root control over guest operating system, services, and kernel modules." },
      { number: "02", title: "Custom Machine Types", description: "Configure exact vCPU and RAM combinations tailored to application requirements." },
      { number: "03", title: "Browser SSH", description: "Secure, encrypted terminal access without managing local SSH keys or opening public ports." }
    ],
    quiz: {
      question: "Which Compute Engine machine family is best suited for training deep neural networks and artificial intelligence models?",
      answers: [
        { id: "A", text: "General-purpose (E2)", correct: false },
        { id: "B", text: "Accelerator-optimized (A2/A3 with GPUs)", correct: true },
        { id: "C", text: "Memory-optimized (M2)", correct: false },
        { id: "D", text: "Compute-optimized (C2)", correct: false }
      ]
    }
  },
  {
    id: 10,
    title: "VM Management & Managed Compute (Compute Engine vs. GKE vs. Cloud Run vs. App Engine)",
    category: "Module 3: Compute Services",
    duration: "10 min",
    intro:
      "Google Cloud provides a comprehensive compute spectrum ranging from raw virtual machines to managed Kubernetes clusters and 100% serverless container platforms.",
    keyIdea:
      "Choose Compute Engine for raw VM control, GKE for Kubernetes microservices, Cloud Run for serverless containers, and App Engine for monolithic web apps.",
    sections: [
      {
        heading: "Compute Engine VM Lifecycle Management",
        paragraphs: [
          "Starting & Stopping: Stopping a VM pauses CPU/RAM charges while preserving Persistent Disk data.",
          "Snapshots: Point-in-time differential backups of Persistent Disks used for disaster recovery and creating custom VM golden images.",
          "Managed Instance Groups (MIGs): Deploy identical pools of VMs with automated health checks, auto-healing, and dynamic autoscaling across multiple availability zones."
        ]
      },
      {
        heading: "Google Cloud Compute Decision Matrix",
        paragraphs: [
          "Compute Engine (IaaS): Full OS control, legacy applications, custom drivers, Windows servers.",
          "Google Kubernetes Engine (GKE): Enterprise container orchestration for multi-container microservice applications requiring Kubernetes APIs.",
          "Cloud Run (Serverless): Deploy containers with automatic scale-to-zero, zero infrastructure management, paying only per millisecond of request execution.",
          "App Engine (PaaS): Fully managed web application hosting in Standard (sandboxed) or Flexible (Docker) environments."
        ]
      }
    ],
    example: {
      title: "COMPUTE SELECTION IN ACTION",
      traditional: "Host all web services on rigid physical servers with manual failover scripts.",
      cloud: "Deploy stateless frontend API in Cloud Run (scales to 0 when idle) + run backend legacy SAP accounting on Compute Engine VMs."
    },
    concepts: [
      { number: "01", title: "Cloud Run", description: "The premier serverless container runtime with instant scale-to-zero and micro-billing." },
      { number: "02", title: "GKE & GKE Autopilot", description: "Enterprise container orchestration with automated cluster operations and node management." },
      { number: "03", title: "MIGs (Managed Instance Groups)", description: "Auto-healing and auto-scaling identical pools of Compute Engine VMs." }
    ],
    quiz: {
      question: "A company wants to deploy a containerized REST API with zero server management and pay only when requests are actively being processed. Which service should they choose?",
      answers: [
        { id: "A", text: "Compute Engine with a single VM", correct: false },
        { id: "B", text: "Cloud Run", correct: true },
        { id: "C", text: "Cloud Storage", correct: false },
        { id: "D", text: "Cloud Spanner", correct: false }
      ]
    }
  },

  {
    id: 11,
    title: "Cloud Storage Classes: Standard, Nearline, Coldline & Archive",
    category: "Module 4: Storage Services",
    duration: "10 min",
    intro:
      "Cloud Storage is Google Cloud's globally unified object storage service offering 11 9s of durability (99.999999999%), petabyte scale, and millisecond access latency across all storage tiers.",
    keyIdea:
      "Unlike competitor cold storage services that take hours to retrieve data, Google Cloud Storage delivers millisecond retrieval latency across ALL 4 classes: Standard, Nearline, Coldline, and Archive.",
    sections: [
      {
        heading: "The 4 Storage Classes Explained",
        paragraphs: [
          "Standard Storage: Best for 'hot' data accessed frequently (active website images, streaming media, transactional data). Highest storage cost, $0 retrieval fees.",
          "Nearline Storage: Best for data accessed less than once per month (monthly backups, reports). Minimum 30-day storage duration.",
          "Coldline Storage: Best for data accessed less than once per quarter (disaster recovery snapshots). Minimum 90-day storage duration.",
          "Archive Storage: Best for data accessed less than once per year (10-year regulatory compliance archives). Lowest storage cost ($0.0012/GB), higher retrieval fees, minimum 365-day storage duration."
        ]
      },
      {
        heading: "Buckets & Locations",
        paragraphs: [
          "Buckets: Globally unique containers holding objects (files). Bucket names reside in a single global namespace.",
          "Locations: Regional (single region), Dual-region (two specific regions for disaster recovery), or Multi-region (geo-redundancy across a continent like US or Europe)."
        ]
      }
    ],
    example: {
      title: "STORAGE TIER COST OPTIMIZATION",
      traditional: "Store 100 TB of compliance archives on expensive on-premises SAN disks = $25,000/year.",
      cloud: "Store 100 TB on Cloud Storage Archive class = $120/month ($1,440/year) with 11 9s durability and millisecond retrieval."
    },
    concepts: [
      { number: "01", title: "11 9s Durability", description: "Designed for 99.999999999% data durability across redundant availability zones." },
      { number: "02", title: "Millisecond Retrieval", description: "Even Archive class data is instantly accessible in milliseconds without rehydration delays." },
      { number: "03", title: "Global Unique Names", description: "Every Cloud Storage bucket name must be globally unique across all Google Cloud customers." }
    ],
    quiz: {
      question: "Which Cloud Storage class is most cost-effective for storing legal compliance documents that will be kept for 7 years and accessed less than once a year?",
      answers: [
        { id: "A", text: "Standard Storage", correct: false },
        { id: "B", text: "Nearline Storage", correct: false },
        { id: "C", text: "Archive Storage", correct: true },
        { id: "D", text: "Persistent Disk SSD", correct: false }
      ]
    }
  },
  {
    id: 12,
    title: "Storage Operations, Lifecycle & Other Options (Persistent Disk, Filestore, Local SSD)",
    category: "Module 4: Storage Services",
    duration: "9 min",
    intro:
      "Google Cloud provides specialized storage systems for every data paradigm: Object Storage (Cloud Storage), Block Storage (Persistent Disk & Local SSD), and File Storage (Filestore).",
    keyIdea:
      "Use Object Lifecycle Management to automatically downgrade old data to cheaper storage tiers, and select the right storage service based on access protocol.",
    sections: [
      {
        heading: "Object Lifecycle Management",
        paragraphs: [
          "Automate cost optimization by defining rules based on object age, creation date, or versioning state.",
          "Example rule: Automatically transition objects from Standard to Nearline after 30 days, to Archive after 90 days, and permanently delete after 365 days."
        ]
      },
      {
        heading: "Block Storage vs. File Storage",
        paragraphs: [
          "Persistent Disk (Block): Network-attached virtual hard drives mounted directly to Compute Engine VMs (survives VM reboots; snapshot capable).",
          "Local SSD (Ephemeral Block): Physically attached ultra-fast flash drives (millions of IOPS, microsecond latency; wiped when VM stops).",
          "Filestore (Managed NFS): Fully managed Network File System (NFS) share for traditional applications requiring POSIX file system compliance across multiple VMs."
        ]
      }
    ],
    example: {
      title: "STORAGE PARADIGM COMPARISON",
      traditional: "Try to run legacy enterprise software on an incompatible object storage REST API.",
      cloud: "Mount Cloud Filestore NFS share across 10 Compute Engine VMs for shared file collaboration + store final PDF deliverables in Cloud Storage."
    },
    concepts: [
      { number: "01", title: "Lifecycle Rules", description: "Automated age-based transitions between storage tiers without writing custom code." },
      { number: "02", title: "Persistent Disk", description: "Durable block storage attached to specific Compute Engine virtual machines." },
      { number: "03", title: "Filestore (NFS)", description: "POSIX-compliant shared network file storage for enterprise applications." }
    ],
    quiz: {
      question: "An application requires an NFS-compatible shared file system accessible simultaneously by multiple Linux VMs. Which service should be used?",
      answers: [
        { id: "A", text: "Cloud Storage Standard bucket", correct: false },
        { id: "B", text: "Filestore", correct: true },
        { id: "C", text: "Local SSD", correct: false },
        { id: "D", text: "BigQuery", correct: false }
      ]
    }
  },

  {
    id: 13,
    title: "Networking Fundamentals & Virtual Private Cloud (VPC, Subnets & Firewalls)",
    category: "Module 5: Networking",
    duration: "10 min",
    intro:
      "A Virtual Private Cloud (VPC) is a global, software-defined private network within Google Cloud that isolates your computing resources and connects them securely.",
    keyIdea:
      "Unlike other cloud providers where VPCs are regional, Google Cloud VPCs are GLOBAL by default, allowing subnets in different continents to communicate over private internal IPs.",
    sections: [
      {
        heading: "VPC Networks & Subnets",
        paragraphs: [
          "Global VPC Scope: A single Google Cloud VPC spans every region worldwide without requiring complex cross-region peering or internet gateways.",
          "Subnets: Regional partitions of a VPC network with designated private IPv4 CIDR ranges (e.g. `10.0.1.0/24` in `us-central1`, `10.0.2.0/24` in `europe-west1`).",
          "Internal Communication: VMs in different regions inside the same VPC talk to each other directly over Google's private global fiber network using private IPs."
        ]
      },
      {
        heading: "Google Cloud Firewall Rules",
        paragraphs: [
          "Stateful Firewall: Google Cloud firewalls are stateful; if incoming traffic is allowed, outgoing response traffic is automatically allowed.",
          "Enforcement: Rules are applied directly to virtual machine NICs at the hypervisor level, controlled by network tags, service accounts, or CIDR blocks."
        ]
      }
    ],
    example: {
      title: "GLOBAL VPC ARCHITECTURE",
      traditional: "Set up complex VPN tunnels and routing tables to connect a server in New York with a server in Tokyo.",
      cloud: "Deploy VM 1 in `us-east1` (IP `10.1.0.2`) and VM 2 in `asia-northeast1` (IP `10.2.0.2`) inside the same global VPC → They ping each other directly with zero configuration."
    },
    concepts: [
      { number: "01", title: "Global VPC Scope", description: "A single software-defined network spanning all Google Cloud regions worldwide." },
      { number: "02", title: "Regional Subnets", description: "IP address allocations bound to specific geographic regions." },
      { number: "03", title: "Stateful Firewall Rules", description: "Security rules evaluated at the VM network interface based on tags and IP ranges." }
    ],
    quiz: {
      question: "What is a unique architectural characteristic of a Google Cloud Virtual Private Cloud (VPC) compared to other cloud providers?",
      answers: [
        { id: "A", text: "VPCs are restricted to a single availability zone", correct: false },
        { id: "B", text: "VPCs are global resources that span all Google Cloud regions", correct: true },
        { id: "C", text: "VPCs cannot have firewall rules", correct: false },
        { id: "D", text: "VPCs require hardware routers installed on-premises", correct: false }
      ]
    }
  },
  {
    id: 14,
    title: "VPC Auto vs. Custom Mode & Global Cloud Load Balancing",
    category: "Module 5: Networking",
    duration: "10 min",
    intro:
      "Google Cloud offers two VPC creation modes (Auto vs. Custom) and global anycast Cloud Load Balancing for distributing traffic seamlessly across worldwide server fleets.",
    keyIdea:
      "Custom mode VPCs are best practice for production environments. Global Cloud Load Balancing uses a single Anycast IP to route user requests to the closest healthy backend.",
    sections: [
      {
        heading: "Auto Mode vs. Custom Mode VPC Networks",
        paragraphs: [
          "Auto Mode: Automatically creates one pre-populated `/20` subnet in every Google Cloud region worldwide using predictable IP ranges. Great for rapid prototyping.",
          "Custom Mode: Starts with zero subnets. You explicitly define only the subnets, regions, and CIDR IP ranges required. Essential for enterprise production to avoid IP overlap with corporate on-prem networks."
        ]
      },
      {
        heading: "Cloud Load Balancing",
        paragraphs: [
          "Global External Load Balancers: Single public anycast IPv4/IPv6 address distributed across Google's edge PoPs (Layer 7 HTTP(S) and Layer 4 SSL/TCP proxy).",
          "Regional Load Balancers: Distribute traffic within a single region across local zones.",
          "Internal Load Balancers: Route private traffic between internal microservice tiers with zero public internet exposure."
        ]
      }
    ],
    example: {
      title: "GLOBAL ANYCAST LOAD BALANCING",
      traditional: "Maintain separate DNS routing rules and distinct IP addresses for datacenters in Europe, Asia, and America.",
      cloud: "Users globally connect to a single IP (`34.120.55.10`) → European users routed to Frankfurt VMs; Asian users routed to Tokyo VMs with zero latency."
    },
    concepts: [
      { number: "01", title: "Custom Mode VPC", description: "Best practice for enterprise architectures to prevent overlapping IP address conflicts." },
      { number: "02", title: "Single Anycast IP", description: "Global frontend IP routing incoming requests across worldwide regional backends." },
      { number: "03", title: "Layer 7 vs Layer 4", description: "Layer 7 understands HTTP headers/paths; Layer 4 routes raw TCP/UDP streams." }
    ],
    quiz: {
      question: "Which VPC mode is recommended by Google for enterprise production deployments to maintain full control over IP address ranges?",
      answers: [
        { id: "A", text: "Auto Mode Network", correct: false },
        { id: "B", text: "Custom Mode Network", correct: true },
        { id: "C", text: "Legacy Flat Network", correct: false },
        { id: "D", text: "Ephemeral Network", correct: false }
      ]
    }
  },
  {
    id: 15,
    title: "Cloud DNS & Hybrid Connectivity (Cloud VPN, Cloud Interconnect, VPC Peering)",
    category: "Module 5: Networking",
    duration: "9 min",
    intro:
      "Enterprise hybrid architectures connect corporate offices and on-premises data centers to Google Cloud using Cloud VPN, Cloud Interconnect, and VPC Network Peering.",
    keyIdea:
      "Cloud VPN connects over the public internet with encryption; Cloud Interconnect provides direct physical enterprise fiber cables with up to 100 Gbps bandwidth.",
    sections: [
      {
        heading: "Hybrid Connectivity Options",
        paragraphs: [
          "Cloud VPN: Establishes secure, encrypted IPSec tunnels over the public internet (up to 3 Gbps per tunnel). Fast and cost-effective to set up.",
          "Dedicated Interconnect: Physical enterprise fiber connection plugged directly into a Google Colocation facility (10 Gbps or 100 Gbps circuits) with a 99.99% SLA.",
          "Partner Interconnect: Connects to Google Cloud through a certified telecommunications enterprise partner (50 Mbps to 10 Gbps).",
          "VPC Network Peering: Directly connects two Google Cloud VPC networks (even across different organizations) with private IP routing and zero internet gateway hops."
        ]
      },
      {
        heading: "Cloud DNS",
        paragraphs: [
          "Cloud DNS is a scalable, reliable, 100% SLA authoritative global Domain Name System service.",
          "Supports public DNS zones (internet-facing domain records) and private DNS zones (internal service discovery within private VPCs)."
        ]
      }
    ],
    example: {
      title: "CHOOSING HYBRID CONNECTIVITY",
      traditional: "Rely on public internet for multi-gigabyte daily database replication, suffering random packet drops and speed throttling.",
      cloud: "Deploy 10 Gbps Dedicated Interconnect for mission-critical core database traffic + use Cloud VPN as an encrypted backup link."
    },
    concepts: [
      { number: "01", title: "Cloud VPN", description: "Encrypted IPSec tunnels traversing the public internet for dev/test or smaller workloads." },
      { number: "02", title: "Cloud Interconnect", description: "Dedicated physical fiber connection with guaranteed low latency and up to 100 Gbps throughput." },
      { number: "03", title: "VPC Peering", description: "Private low-latency connectivity linking two distinct VPC networks within Google Cloud." }
    ],
    quiz: {
      question: "An enterprise requires a dedicated 10 Gbps private physical fiber connection between its datacenter and Google Cloud with a 99.99% SLA. Which service should they choose?",
      answers: [
        { id: "A", text: "Cloud VPN", correct: false },
        { id: "B", text: "Dedicated Cloud Interconnect", correct: true },
        { id: "C", text: "VPC Network Peering", correct: false },
        { id: "D", text: "Cloud DNS Private Zone", correct: false }
      ]
    }
  },

  {
    id: 16,
    title: "Database Fundamentals & Cloud SQL (MySQL, PostgreSQL, SQL Server)",
    category: "Module 6: Databases",
    duration: "10 min",
    intro:
      "Cloud SQL is Google Cloud's fully managed relational database service supporting MySQL, PostgreSQL, and Microsoft SQL Server with automated backups and cross-zone high availability.",
    keyIdea:
      "Cloud SQL handles time-consuming administrative tasks like hardware provisioning, operating system patches, automated backups, and cross-zone replication.",
    sections: [
      {
        heading: "Relational (SQL) vs. Non-Relational (NoSQL)",
        paragraphs: [
          "Relational Databases (RDBMS): Structured schema, tables, rows, columns, ACID transactions, and standard SQL queries. Ideal for financial ledgers, inventory, and ERP systems.",
          "NoSQL Databases: Schema-less, flexible document or key-value structures designed for massive horizontal scale, rapid development, and real-time syncing."
        ]
      },
      {
        heading: "Cloud SQL Features & High Availability",
        paragraphs: [
          "Managed Operations: Automatic security patching, storage auto-increase, automated daily backups, and point-in-time recovery (PITR).",
          "High Availability (HA): Synchronous replication between a primary instance in Zone A and a standby replica in Zone B. Automatic failover occurs in under 60 seconds if Zone A fails.",
          "Read Replicas: Offload read-heavy reporting queries to scale application performance."
        ]
      }
    ],
    example: {
      title: "MANAGED DATABASE REVOLUTION",
      traditional: "DBA spends 15 hours/week running backup scripts, applying OS security patches, and troubleshooting disk capacity.",
      cloud: "Enable automated backups and storage auto-expansion in Cloud SQL console with a single checkbox → Zero routine maintenance."
    },
    concepts: [
      { number: "01", title: "Managed RDBMS", description: "Turnkey MySQL, PostgreSQL, and SQL Server hosting with automated maintenance." },
      { number: "02", title: "Automatic Cross-Zone HA", description: "Synchronous standby replica in a second zone with transparent sub-minute failover." },
      { number: "03", title: "Read Replicas", description: "Scale out read capacity horizontally across multiple zones or regions." }
    ],
    quiz: {
      question: "Which relational database engines are natively supported by Google Cloud SQL?",
      answers: [
        { id: "A", text: "MongoDB, Cassandra, and Redis", correct: false },
        { id: "B", text: "MySQL, PostgreSQL, and Microsoft SQL Server", correct: true },
        { id: "C", text: "Oracle Database and DB2 only", correct: false },
        { id: "D", text: "Neo4j and DynamoDB", correct: false }
      ]
    }
  },
  {
    id: 17,
    title: "Cloud Spanner, Firestore, Cloud Bigtable & Database Selection Matrix",
    category: "Module 6: Databases",
    duration: "11 min",
    intro:
      "Google Cloud provides planet-scale distributed databases engineered for unprecedented scalability: Cloud Spanner (Global RDBMS), Firestore (NoSQL Document), and Bigtable (NoSQL Wide-Column).",
    keyIdea:
      "Cloud Spanner combines relational SQL structure and ACID consistency with horizontal global scalability and a 99.999% SLA (5 minutes downtime per year).",
    sections: [
      {
        heading: "Cloud Spanner & Bigtable",
        paragraphs: [
          "Cloud Spanner: The world's first globally distributed relational database service providing seamless horizontal scaling across regions with external consistency and 99.999% availability.",
          "Cloud Bigtable: Petabyte-scale NoSQL wide-column database powering Google Search and Maps. Delivers sub-10ms latency for massive write-heavy IoT time-series, financial ticker data, and analytics feeds."
        ]
      },
      {
        heading: "Firestore & Memorystore",
        paragraphs: [
          "Firestore: Serverless NoSQL document database with real-time sync, offline data support, and automatic multi-region replication for web and mobile apps.",
          "Memorystore: Fully managed in-memory cache for Redis and Memcached, delivering sub-millisecond data retrieval."
        ]
      }
    ],
    example: {
      title: "DATABASE SELECTION SCENARIOS",
      traditional: "Attempt to scale a standard MySQL database to millions of writes per second globally by manual sharding.",
      cloud: "Choose Cloud Spanner for global transactional banking + choose Cloud Bigtable for 10 million IoT sensor readings per second."
    },
    concepts: [
      { number: "01", title: "Cloud Spanner: 5 Nines", description: "Globally distributed relational database with ACID transactions and 99.999% SLA." },
      { number: "02", title: "Cloud Bigtable", description: "Petabyte-scale NoSQL engine for high-throughput operational and analytics data." },
      { number: "03", title: "Firestore", description: "Serverless document database with real-time live synchronization for client apps." }
    ],
    quiz: {
      question: "A global airline needs a relational database with strict ACID consistency across North America, Europe, and Asia with 99.999% uptime. Which service should they choose?",
      answers: [
        { id: "A", text: "Cloud SQL for MySQL", correct: false },
        { id: "B", text: "Cloud Spanner", correct: true },
        { id: "C", text: "Cloud Storage Coldline", correct: false },
        { id: "D", text: "Compute Engine local disk", correct: false }
      ]
    }
  },

  {
    id: 18,
    title: "BigQuery: Serverless Data Warehousing, Data Lakes & Lakehouses",
    category: "Module 7: Data & Analytics",
    duration: "11 min",
    intro:
      "BigQuery is Google Cloud's fully managed, serverless enterprise data warehouse capable of analyzing petabytes of data in seconds using standard ANSI SQL.",
    keyIdea:
      "BigQuery separates compute (slots) from storage (Capacitor columnar format), allowing queries to scale dynamically without managing clusters or indexes.",
    sections: [
      {
        heading: "What Makes BigQuery Revolutionary?",
        paragraphs: [
          "100% Serverless: No nodes to provision, no storage sizing, no index maintenance. BigQuery dynamically allocates thousands of CPU cores to execute complex queries across billions of rows in seconds.",
          "Built-in Machine Learning (BigQuery ML): Train and execute machine learning models (linear regression, k-means, forecasting) directly inside BigQuery using standard SQL syntax."
        ]
      },
      {
        heading: "Data Lakes vs. Data Warehouses vs. Data Lakehouses",
        paragraphs: [
          "Data Lake (Cloud Storage): Stores massive volumes of raw, unstructured or semi-structured data (JSON, CSV, Parquet, video, audio) in its original format.",
          "Data Warehouse (BigQuery): Stores structured, cleaned, modeled data optimized for business intelligence queries and fast analytical reporting.",
          "Data Lakehouse (BigQuery Omni & BigLake): Unifies data lakes and warehouses, allowing BigQuery to query data stored in Cloud Storage, AWS S3, or Azure Blob without moving the data."
        ]
      }
    ],
    example: {
      title: "QUERYING BILLIONS OF RECORDS",
      traditional: "Analytical query scans 2 TB on a traditional relational database → CPU spikes to 100% → Database locks up for 4 hours.",
      cloud: "Execute query in BigQuery on 2 TB dataset → Dremel engine assigns 1,000 parallel workers → Returns precise analytics in 3.4 seconds."
    },
    concepts: [
      { number: "01", title: "Serverless Data Warehouse", description: "Zero cluster management with separate pricing for storage ($0.02/GB) and queries ($6.25/TB)." },
      { number: "02", title: "BigQuery ML", description: "Build and deploy machine learning models directly using SQL queries." },
      { number: "03", title: "BigLake Architecture", description: "Query raw data files stored in Cloud Storage with fine-grained access control." }
    ],
    quiz: {
      question: "Which Google Cloud service is a serverless, multi-cloud enterprise data warehouse that allows running fast SQL queries across petabytes of data?",
      answers: [
        { id: "A", text: "Cloud SQL", correct: false },
        { id: "B", text: "BigQuery", correct: true },
        { id: "C", text: "Cloud Spanner", correct: false },
        { id: "D", text: "Persistent Disk", correct: false }
      ]
    }
  },
  {
    id: 19,
    title: "Dataflow, Pub/Sub Asynchronous Messaging & Looker Enterprise BI",
    category: "Module 7: Data & Analytics",
    duration: "10 min",
    intro:
      "Modern cloud data pipelines combine real-time stream ingestion (Pub/Sub), unified stream/batch data processing (Dataflow), and enterprise business intelligence (Looker).",
    keyIdea:
      "The classic Google Cloud data analytics pipeline: Ingest via Pub/Sub → Process via Dataflow → Store & Query in BigQuery → Visualize in Looker.",
    sections: [
      {
        heading: "Pub/Sub & Dataflow",
        paragraphs: [
          "Pub/Sub: Global, asynchronous, serverless publish/subscribe messaging service that decouples microservices and ingests millions of streaming events per second.",
          "Dataflow: Fully managed stream and batch data processing pipeline service based on open-source Apache Beam, handling automated provisioning, scaling, and fault tolerance."
        ]
      },
      {
        heading: "Looker & Looker Studio",
        paragraphs: [
          "Looker: Enterprise business intelligence platform utilizing LookML for governed data modeling, interactive dashboarding, and embedded analytics.",
          "Looker Studio: Free, self-service dashboarding and reporting tool connecting directly to BigQuery, Google Sheets, and external SQL databases."
        ]
      }
    ],
    example: {
      title: "END-TO-END STREAMING PIPELINE",
      traditional: "Batch overnight ETL scripts take 8 hours to load data; reports are always 24 hours behind.",
      cloud: "Mobile app clicks → Ingested by Pub/Sub in real time → Cleaned and enriched by Dataflow → Streamed into BigQuery → Live dashboards update in Looker in under 2 seconds."
    },
    concepts: [
      { number: "01", title: "Pub/Sub Messaging", description: "Asynchronous publish/subscribe message bus decoupling microservices and ingestion." },
      { number: "02", title: "Dataflow (Apache Beam)", description: "Unified serverless stream and batch ETL data transformation pipelines." },
      { number: "03", title: "Looker BI", description: "Governed semantic data modeling and interactive executive business dashboards." }
    ],
    quiz: {
      question: "Which service acts as a global, asynchronous message ingestion service to decouple streaming event producers from consumer pipelines?",
      answers: [
        { id: "A", text: "Cloud DNS", correct: false },
        { id: "B", text: "Pub/Sub", correct: true },
        { id: "C", text: "Cloud SQL", correct: false },
        { id: "D", text: "Artifact Registry", correct: false }
      ]
    }
  },

  {
    id: 20,
    title: "AI vs. Machine Learning & Google Cloud Turnkey AI APIs",
    category: "Module 8: AI & Machine Learning",
    duration: "10 min",
    intro:
      "Artificial Intelligence (AI) and Machine Learning (ML) empower applications to perceive, comprehend, and generate content. Google Cloud provides pre-trained turnkey APIs for immediate integration without requiring data science expertise.",
    keyIdea:
      "Turnkey AI APIs allow developers to add computer vision, speech recognition, and translation to apps with a simple REST API call.",
    sections: [
      {
        heading: "AI vs. Machine Learning vs. Generative AI",
        paragraphs: [
          "Artificial Intelligence (AI): The broad discipline of building systems capable of performing tasks that typically require human intelligence.",
          "Machine Learning (ML): A subset of AI where algorithms learn patterns from historical training data rather than following explicitly programmed rules.",
          "Generative AI: A modern frontier of ML (utilizing deep learning and Transformer models) capable of generating novel text, images, audio, and code."
        ]
      },
      {
        heading: "Pre-Trained Google Cloud AI APIs",
        paragraphs: [
          "Vision AI: Optical character recognition (OCR), object detection, explicit content moderation, and facial detection.",
          "Speech-to-Text & Text-to-Speech: High-accuracy real-time speech transcription and natural neural voice synthesis across 125+ languages.",
          "Translation AI & Natural Language AI: Real-time multilingual text translation, sentiment analysis, entity extraction, and syntax analysis."
        ]
      }
    ],
    example: {
      title: "PRE-TRAINED APIS IN PRODUCTION",
      traditional: "Hire 10 PhD data scientists and spend $2M to train a custom computer vision model from scratch.",
      cloud: "Send image to Google Vision AI REST endpoint (`images:annotate`) → Receive JSON response identifying objects, text, and labels in 150ms."
    },
    concepts: [
      { number: "01", title: "AI Spectrum", description: "AI (Broad capability) → ML (Pattern learning) → GenAI (Content generation)." },
      { number: "02", title: "Turnkey Pre-Trained APIs", description: "Ready-to-use vision, speech, and translation APIs requiring zero model training." },
      { number: "03", title: "API Simplicity", description: "Integrate cognitive intelligence into any web or mobile app with simple JSON payloads." }
    ],
    quiz: {
      question: "An application needs to automatically detect and extract printed invoice text from uploaded PDF images without training a custom model. Which API should be used?",
      answers: [
        { id: "A", text: "Cloud Load Balancing", correct: false },
        { id: "B", text: "Vision AI (Document AI / OCR)", correct: true },
        { id: "C", text: "Cloud DNS", correct: false },
        { id: "D", text: "Compute Engine GPU", correct: false }
      ]
    }
  },
  {
    id: 21,
    title: "Vertex AI Platform, Gemini Multimodal Models, Prompting & Responsible AI",
    category: "Module 8: AI & Machine Learning",
    duration: "10 min",
    intro:
      "Vertex AI is Google Cloud's unified enterprise artificial intelligence and machine learning platform, bringing together foundational models (Gemini), custom model training (AutoML), and MLOps tools.",
    keyIdea:
      "Vertex AI Model Garden gives developers access to Gemini multimodal foundation models for text, code, vision, and reasoning with enterprise data privacy guarantees.",
    sections: [
      {
        heading: "Vertex AI & Model Garden",
        paragraphs: [
          "Model Garden: A centralized repository discoverable within Vertex AI offering first-party Google models (Gemini 1.5 Pro, Gemini Flash, Imagen 3, Codey), open-source models (Gemma, Llama), and third-party models.",
          "AutoML: Enables developers with limited machine learning expertise to train custom, high-accuracy models on their own labeled dataset with zero coding."
        ]
      },
      {
        heading: "Generative AI, Prompting & Responsible AI",
        paragraphs: [
          "Multimodal Capabilities: Gemini models natively process and reason across text, images, video, audio, and code simultaneously.",
          "Enterprise Privacy Guarantee: Customer data submitted to Vertex AI and Gemini is NEVER used to train Google's base foundational models.",
          "Responsible AI Principles: Google evaluates models against safety filters, bias detection, fairness, privacy, and hallucination grounding (Search grounding and enterprise data grounding)."
        ]
      }
    ],
    example: {
      title: "ENTERPRISE GENERATIVE AI APPLICATION",
      traditional: "Customer support agents manually search through 10,000 PDF user manuals to answer technical troubleshooting questions.",
      cloud: "Deploy Gemini on Vertex AI grounded in company technical documentation → Chatbot provides instant, citations-backed answers in 20 languages."
    },
    concepts: [
      { number: "01", title: "Vertex AI", description: "Unified enterprise platform for building, customizing, and deploying AI/ML and GenAI apps." },
      { number: "02", title: "Gemini Multimodal", description: "State-of-the-art foundation model reasoning seamlessly across text, images, audio, and code." },
      { number: "03", title: "Enterprise Data Privacy", description: "Customer prompts and proprietary data are never used to train Google's public models." }
    ],
    quiz: {
      question: "Which statement is true regarding data privacy when using Gemini on Google Cloud Vertex AI?",
      answers: [
        { id: "A", text: "Customer prompts are made public on Google Search", correct: false },
        { id: "B", text: "Customer proprietary data and prompts are not used to train Google's foundation models", correct: true },
        { id: "C", text: "Data must be stored in plaintext without encryption", correct: false },
        { id: "D", text: "Only open-source models can run in Vertex AI", correct: false }
      ]
    }
  },

  {
    id: 22,
    title: "Cloud IAM: Users, Service Accounts, Roles (Basic vs. Predefined) & Least Privilege",
    category: "Module 9: Security & Identity",
    duration: "11 min",
    intro:
      "Cloud Identity and Access Management (IAM) controls authorization across Google Cloud by defining WHO (Identity) can perform WHAT actions (Role) on WHICH resource.",
    keyIdea:
      "Always follow the Principle of Least Privilege: Assign fine-grained Predefined Roles rather than broad Basic Roles (Owner, Editor, Viewer).",
    sections: [
      {
        heading: "IAM Identities (Who)",
        paragraphs: [
          "Google Accounts: Individual users with corporate email (managed via Cloud Identity or Google Workspace).",
          "Google Groups: Collections of user accounts (recommended for assigning permissions to teams).",
          "Service Accounts: Non-human identities used by applications, VMs, and automated CI/CD pipelines to call Google Cloud APIs securely without passwords."
        ]
      },
      {
        heading: "IAM Roles: Basic vs. Predefined vs. Custom",
        paragraphs: [
          "Basic (Primitive) Roles: Owner, Editor, Viewer. Highly broad legacy roles that apply to almost all resources in a project. Avoid in production.",
          "Predefined Roles: Fine-grained, service-specific roles created by Google (e.g. `roles/storage.objectViewer`, `roles/bigquery.dataEditor`).",
          "Custom Roles: User-defined micro-permissions combined for exact compliance requirements."
        ]
      }
    ],
    example: {
      title: "LEAST PRIVILEGE IN ACTION",
      traditional: "Grant every developer 'Project Owner' access so they don't get permission errors → A junior developer accidentally deletes the production database.",
      cloud: "Grant developers 'roles/compute.instanceAdmin.v1' and grant the database CI/CD service account 'roles/cloudsql.client' → Minimal attack surface."
    },
    concepts: [
      { number: "01", title: "Principle of Least Privilege", description: "Grant only the minimal permissions required for an identity to perform its job." },
      { number: "02", title: "Service Accounts", description: "Managed machine identities for automated workloads and VM instances without passwords." },
      { number: "03", title: "Predefined Roles", description: "Fine-grained, service-specific IAM roles created and maintained by Google." }
    ],
    quiz: {
      question: "Which of the following identities should be assigned to an automated Python script running on a Compute Engine VM to upload backups to Cloud Storage?",
      answers: [
        { id: "A", text: "A personal employee Gmail account with Owner role", correct: false },
        { id: "B", text: "A dedicated Service Account with the 'Storage Object Creator' role", correct: true },
        { id: "C", text: "An unauthenticated public user link", correct: false },
        { id: "D", text: "The root Organization administrator account", correct: false }
      ]
    }
  },
  {
    id: 23,
    title: "Security Services: Encryption (CMEK), Security Command Center, Cloud Armor & Zero Trust",
    category: "Module 9: Security & Identity",
    duration: "10 min",
    intro:
      "Google Cloud implements defense-in-depth security: default encryption at rest and in transit, centralized threat detection (Security Command Center), edge DDoS defense (Cloud Armor), and Zero Trust access.",
    keyIdea:
      "Google Cloud automatically encrypts all customer data by default at rest (AES-256) and in transit. Customers can maintain key custody using Customer-Managed Encryption Keys (CMEK).",
    sections: [
      {
        heading: "Data Encryption & Cloud KMS",
        paragraphs: [
          "Default Encryption: All data stored at rest in Google Cloud is automatically encrypted using Google-managed keys with zero customer action needed.",
          "Customer-Managed Encryption Keys (CMEK): Manage and rotate your own cryptographic keys in Cloud Key Management Service (Cloud KMS) or hardware security modules (Cloud HSM).",
          "Customer-Supplied Encryption Keys (CSEK): Provide your own keys during API calls (Google never stores the key)."
        ]
      },
      {
        heading: "Security Command Center & Cloud Armor",
        paragraphs: [
          "Security Command Center (SCC): Centralized dashboard for asset inventory, vulnerability scanning (misconfigured buckets, open firewall ports), and threat detection.",
          "Cloud Armor: Web Application Firewall (WAF) and enterprise DDoS mitigation at Google's global network edge, defending against SQL injection and cross-site scripting (XSS).",
          "Identity-Aware Proxy (IAP) & BeyondCorp: Zero Trust security model verifying user identity and device context before granting access to web apps and SSH without VPNs."
        ]
      }
    ],
    example: {
      title: "ZERO TRUST ACCESS ARCHITECTURE",
      traditional: "Anyone connected to the corporate office network cable is automatically trusted and has access to internal servers.",
      cloud: "BeyondCorp Zero Trust verifies employee identity, multi-factor authentication (MFA), and device security health on every single request."
    },
    concepts: [
      { number: "01", title: "Default Encryption", description: "All data encrypted at rest and in transit across Google's private network automatically." },
      { number: "02", title: "CMEK via Cloud KMS", description: "Customer retains full lifecycle control and rotation over cryptographic keys." },
      { number: "03", title: "Security Command Center", description: "Single pane of glass for cloud security posture, compliance, and threat detection." }
    ],
    quiz: {
      question: "Which Google Cloud service provides centralized security vulnerability scanning, threat detection, and compliance auditing across your entire GCP organization?",
      answers: [
        { id: "A", text: "Cloud Load Balancing", correct: false },
        { id: "B", text: "Security Command Center (SCC)", correct: true },
        { id: "C", text: "Cloud DNS", correct: false },
        { id: "D", text: "Artifact Registry", correct: false }
      ]
    }
  },

  {
    id: 24,
    title: "Cloud Operations Suite: Cloud Monitoring, Cloud Logging, Error Reporting & Trace",
    category: "Module 10: Operations & DevOps",
    duration: "10 min",
    intro:
      "Google Cloud Operations Suite (formerly Stackdriver) delivers full-stack observability through metrics (Cloud Monitoring), structured logs (Cloud Logging), application error tracking, and distributed performance tracing.",
    keyIdea:
      "Cloud Monitoring tracks numeric telemetry and triggers alerts; Cloud Logging stores and queries detailed event logs with Log Explorer.",
    sections: [
      {
        heading: "Cloud Monitoring vs. Cloud Logging",
        paragraphs: [
          "Cloud Monitoring: Collects performance metrics (CPU %, memory utilization, disk I/O, network bandwidth, HTTP request latency). Generates interactive dashboards, alert notifications (Email, Slack, PagerDuty), and automated uptime checks.",
          "Cloud Logging: Centralized log ingestion service collecting audit logs, application logs, and system logs. Query logs in real time using Log Explorer and create Log Sinks to export logs to BigQuery or Cloud Storage."
        ]
      },
      {
        heading: "Error Reporting & Cloud Trace",
        paragraphs: [
          "Error Reporting: Aggregates and analyzes runtime application crashes and stack traces, alerting developers to new bugs.",
          "Cloud Trace: Distributed tracing system evaluating latency bottlenecks across microservice architectures to pinpoint slow database queries or API dependencies."
        ]
      }
    ],
    example: {
      title: "PROACTIVE SRE OBSERVABILITY",
      traditional: "Customers complain on Twitter that the website is broken before engineering knows there is an issue.",
      cloud: "Cloud Monitoring Uptime Check detects 500 error from European edge → Fires alert to on-call engineer's phone in 10 seconds with direct links to Cloud Logging stack trace."
    },
    concepts: [
      { number: "01", title: "Cloud Monitoring", description: "Real-time metrics, custom dashboards, alert policies, and global uptime checks." },
      { number: "02", title: "Cloud Logging", description: "Centralized log analysis, Log Explorer query engine, and long-term export sinks." },
      { number: "03", title: "Cloud Trace", description: "Distributed request tracing identifying latency bottlenecks across microservices." }
    ],
    quiz: {
      question: "Which service in Google Cloud Operations Suite allows engineers to search and filter real-time system logs and export them to BigQuery?",
      answers: [
        { id: "A", text: "Cloud Logging", correct: true },
        { id: "B", text: "Cloud Spanner", correct: false },
        { id: "C", text: "Cloud CDN", correct: false },
        { id: "D", text: "Compute Engine MIG", correct: false }
      ]
    }
  },
  {
    id: 25,
    title: "DevOps in Google Cloud: CI/CD, Cloud Build, Artifact Registry & Cloud Deploy",
    category: "Module 10: Operations & DevOps",
    duration: "9 min",
    intro:
      "Google Cloud provides serverless DevOps and Continuous Integration / Continuous Delivery (CI/CD) pipelines to automate code compilation, testing, artifact packaging, and multi-environment deployment.",
    keyIdea:
      "Cloud Build automates container builds; Artifact Registry securely stores container images and language packages; Cloud Deploy manages release progression to GKE and Cloud Run.",
    sections: [
      {
        heading: "Cloud Build & Artifact Registry",
        paragraphs: [
          "Cloud Build: Fully serverless CI/CD platform that compiles source code, runs automated unit tests, and builds container images inside isolated VMs with zero server management.",
          "Artifact Registry: The universal package manager and container image registry in Google Cloud (replacing Container Registry). Stores Docker images, Maven, npm, and Python packages with vulnerability scanning."
        ]
      },
      {
        heading: "Cloud Deploy & Infrastructure as Code",
        paragraphs: [
          "Cloud Deploy: Managed continuous delivery service that automates delivery pipelines across dev, staging, and production environments for GKE, Cloud Run, and Anthos.",
          "Infrastructure as Code (IaC): Automate Google Cloud resource provisioning using Terraform and Google Cloud Resource Manager."
        ]
      }
    ],
    example: {
      title: "AUTOMATED GIT-TO-PRODUCTION PIPELINE",
      traditional: "Developer manually builds Docker image on laptop → Manually SSHs into production server to restart container.",
      cloud: "Developer pushes code to GitHub → Cloud Build triggers automatically → Runs tests → Pushes image to Artifact Registry → Cloud Deploy deploys to Cloud Run with zero downtime."
    },
    concepts: [
      { number: "01", title: "Cloud Build", description: "Serverless CI platform compiling, testing, and building Docker images at scale." },
      { number: "02", title: "Artifact Registry", description: "Enterprise container registry with integrated vulnerability scanning." },
      { number: "03", title: "Cloud Deploy", description: "Structured, governed release progression across staging and production clusters." }
    ],
    quiz: {
      question: "Which Google Cloud service is the recommended enterprise registry for storing Docker container images and language packages with built-in vulnerability scanning?",
      answers: [
        { id: "A", text: "Cloud Storage Coldline", correct: false },
        { id: "B", text: "Artifact Registry", correct: true },
        { id: "C", text: "Compute Engine Disk", correct: false },
        { id: "D", text: "Cloud DNS", correct: false }
      ]
    }
  },

  {
    id: 26,
    title: "Cloud Pricing Models, Billing Accounts & Project Relationships, Budgets & Alerts",
    category: "Module 11: Billing & Cost Management",
    duration: "10 min",
    intro:
      "Cloud financial governance ensures organizations track spending, establish budget guardrails, and allocate costs across departments using Cloud Billing Accounts and Budgets.",
    keyIdea:
      "A Cloud Billing Account is attached to one or more Projects. Budgets send automated alert emails and Pub/Sub notifications to prevent unexpected cost overruns.",
    sections: [
      {
        heading: "Billing Accounts & Project Hierarchy",
        paragraphs: [
          "Cloud Billing Account: The legal payment entity linked to a credit card, bank account, or enterprise invoicing contract.",
          "1-to-Many Relationship: A single Cloud Billing Account can pay for multiple Google Cloud Projects.",
          "Every Project that consumes paid resources must be linked to an active Cloud Billing Account."
        ]
      },
      {
        heading: "Budgets & Automated Spend Alerts",
        paragraphs: [
          "Budget Tracking: Set fixed amount budgets (e.g. $5,000/month) or dynamic budgets based on previous spend.",
          "Alert Thresholds: Automatically trigger alert emails when actual or forecasted spending crosses 50%, 90%, or 100% of the budget.",
          "Programmatic Notifications: Send budget events to a Pub/Sub topic to trigger automated Cloud Functions that cap or shut down non-critical test resources."
        ]
      }
    ],
    example: {
      title: "PREVENTING BILL SHOCK",
      traditional: "Company receives a surprise $50,000 datacenter invoice at the end of the quarter with zero advance warning.",
      cloud: "Configure a $2,000 budget with alerts at 50%, 80%, and 100% → Finance team receives email alert on day 10 if an unauthorized high-CPU VM is accidentally left running."
    },
    concepts: [
      { number: "01", title: "Cloud Billing Account", description: "Central payment profile paying for all linked Google Cloud projects." },
      { number: "02", title: "Budgets & Thresholds", description: "Configurable spending targets with automated email notifications at 50%, 90%, 100%." },
      { number: "03", title: "Billing Export to BigQuery", description: "Stream raw granular hourly billing logs directly to BigQuery for custom cost analysis." }
    ],
    quiz: {
      question: "What is the recommended best practice to prevent unexpected cloud spending overruns in Google Cloud?",
      answers: [
        { id: "A", text: "Delete all projects at the end of every week", correct: false },
        { id: "B", text: "Configure Cloud Billing Budgets with threshold percentage alert notifications", correct: true },
        { id: "C", text: "Never use Virtual Machines", correct: false },
        { id: "D", text: "Disable all IAM user accounts", correct: false }
      ]
    }
  },
  {
    id: 27,
    title: "Pricing Calculator, Cost Reports & Cost Optimization (Right-Sizing, CUDs)",
    category: "Module 11: Billing & Cost Management",
    duration: "9 min",
    intro:
      "Google Cloud delivers native cost optimization capabilities including Committed Use Discounts (CUDs), automated Recommender right-sizing advice, and the Google Cloud Pricing Calculator.",
    keyIdea:
      "Committed Use Discounts (CUDs) offer up to 57–70% savings on predictable workloads in exchange for a 1-year or 3-year commitment.",
    sections: [
      {
        heading: "Google Cloud Pricing Calculator & Cost Reports",
        paragraphs: [
          "Pricing Calculator (cloud.google.com/products/calculator): An interactive web tool for estimating monthly architecture costs prior to deploying any real resources.",
          "Cost Reports: Interactive breakdown inside Cloud Console analyzing spend trends by project, service, SKU, region, and metadata label."
        ]
      },
      {
        heading: "Cost Optimization Strategies",
        paragraphs: [
          "Committed Use Discounts (CUDs): Substantial discounts (up to 70%) for steady-state workloads in exchange for committing to a continuous level of compute or spend over 1 or 3 years.",
          "Spot VMs: Excess compute capacity available at 60–91% discount, subject to preemption if Google needs the capacity back (ideal for fault-tolerant batch rendering).",
          "Active Assist / Recommender: Automated AI tool scanning idle VMs, unattached disks, and over-provisioned CPU allocations with one-click right-sizing recommendations."
        ]
      }
    ],
    example: {
      title: "ENTERPRISE COST OPTIMIZATION",
      traditional: "Pay standard high retail rate for servers running 24/7/365.",
      cloud: "Apply 3-Year Committed Use Discount (CUD) on core database VMs (saves 57%) + use Spot VMs for nightly batch analytics (saves 80%)."
    },
    concepts: [
      { number: "01", title: "Pricing Calculator", description: "Interactive pre-deployment estimation tool for architectural budget planning." },
      { number: "02", title: "Committed Use Discounts", description: "Major cost savings (up to 70%) for predictable 1-year or 3-year baseline workloads." },
      { number: "03", title: "Active Assist Recommender", description: "Automated recommendations identifying idle VMs, orphaned disks, and over-sized instances." }
    ],
    quiz: {
      question: "Which pricing discount mechanism offers up to 57–70% savings on Compute Engine in exchange for committing to run a baseline level of compute for 1 or 3 years?",
      answers: [
        { id: "A", text: "Spot VM Preemption", correct: false },
        { id: "B", text: "Committed Use Discounts (CUDs)", correct: true },
        { id: "C", text: "Free Tier Allowance", correct: false },
        { id: "D", text: "Local SSD promotional tier", correct: false }
      ]
    }
  },

  {
    id: 28,
    title: "Architecture & Reliability: High Availability, Scalability vs. Elasticity, Disaster Recovery (RPO/RTO)",
    category: "Module 12: Architecture & Reliability",
    duration: "10 min",
    intro:
      "Enterprise cloud architecture requires designing for high availability, fault tolerance, scalability, elasticity, and disaster recovery with well-defined RPO and RTO targets.",
    keyIdea:
      "RPO (Recovery Point Objective) measures acceptable data loss time; RTO (Recovery Time Objective) measures acceptable downtime duration.",
    sections: [
      {
        heading: "Disaster Recovery Metrics: RPO vs. RTO",
        paragraphs: [
          "Recovery Point Objective (RPO): The maximum acceptable age of files/data that must be recovered from backup after an outage (e.g. RPO of 1 hour means you can tolerate losing up to 1 hour of recent transactions).",
          "Recovery Time Objective (RTO): The maximum acceptable duration of downtime before the application must be fully restored and online (e.g. RTO of 15 minutes)."
        ]
      },
      {
        heading: "Disaster Recovery Patterns",
        paragraphs: [
          "Cold Backup & Restore: Low cost, highest RPO/RTO. Backups stored in Cloud Storage Archive class.",
          "Pilot Light: Core data replicated continuously to a secondary region; compute instances remain minimal until disaster occurs.",
          "Warm Standby: Scaled-down version of full environment running continuously in a secondary region.",
          "Multi-Region Hot Active-Active: Full production capacity running simultaneously across multiple regions with global load balancing (near-zero RPO/RTO)."
        ]
      }
    ],
    example: {
      title: "RPO AND RTO IN ACTION",
      traditional: "Daily tape backup taken at midnight → Datacenter floods at 11:00 PM → 23 hours of data permanently lost (High RPO).",
      cloud: "Cloud SQL automated cross-region asynchronous replication → Primary region outage → Secondary region promotes to master in 45 seconds (RPO < 1 min, RTO < 2 mins)."
    },
    concepts: [
      { number: "01", title: "RPO: Data Loss Window", description: "Maximum allowable age of data that can be lost during an outage." },
      { number: "02", title: "RTO: Downtime Duration", description: "Maximum allowable time required to restore application service online." },
      { number: "03", title: "Multi-Region Active-Active", description: "Near-zero downtime architecture with global load balancing across multiple continents." }
    ],
    quiz: {
      question: "If a company has a Recovery Point Objective (RPO) of 15 minutes, what does this specify?",
      answers: [
        { id: "A", text: "The system must be restored to full operation within 15 minutes of an outage", correct: false },
        { id: "B", text: "The company can tolerate losing a maximum of 15 minutes of recently written data", correct: true },
        { id: "C", text: "All employees must evacuate the building in 15 minutes", correct: false },
        { id: "D", text: "The cloud contract renews every 15 minutes", correct: false }
      ]
    }
  },
  {
    id: 29,
    title: "Google Cloud Architecture Framework (6 Pillars)",
    category: "Module 12: Architecture & Reliability",
    duration: "9 min",
    intro:
      "The Google Cloud Architecture Framework provides structured guidance, design principles, and best practices across 6 core foundational pillars.",
    keyIdea:
      "The 6 Architecture Framework pillars: Operational Excellence, Security, Reliability, Cost Optimization, Performance, and Sustainability.",
    sections: [
      {
        heading: "The 6 Core Architectural Pillars",
        paragraphs: [
          "1. Operational Excellence: Automate deployments, implement Infrastructure as Code (IaC), establish SRE incident response, and continuously monitor SLOs.",
          "2. Security, Privacy & Compliance: Implement zero-trust access control, principle of least privilege, data encryption, and centralized threat management.",
          "3. Reliability: Remove single points of failure, implement multi-zone and multi-region redundancy, test chaos resilience, and establish automated disaster recovery.",
          "4. Cost Optimization: Establish billing visibility, right-size VMs, leverage committed use discounts, and eliminate unattached idle assets.",
          "5. Performance & Efficiency: Select optimal machine types, leverage global load balancing and edge caching (Cloud CDN), and scale compute horizontally.",
          "6. Sustainability: Choose low-carbon regions, optimize data storage lifecycle, and minimize compute energy consumption."
        ]
      }
    ],
    example: {
      title: "FRAMEWORK PILLARS APPLIED",
      traditional: "Build an ad-hoc system that works today but fails audit, incurs runaway costs, and crashes when one server reboots.",
      cloud: "Design architecture against all 6 Google Architecture Framework pillars → Resilient, secure, cost-governed, and sustainable."
    },
    concepts: [
      { number: "01", title: "Systematic Best Practices", description: "Google's battle-tested architectural guidelines derived from operating global services." },
      { number: "02", title: "SRE Reliability", description: "Adopt Service Level Indicators (SLIs), SLOs, and Error Budgets." },
      { number: "03", title: "Continuous Optimization", description: "Regularly audit workloads against all 6 architectural pillars." }
    ],
    quiz: {
      question: "Which of the following is NOT one of the 6 pillars of the Google Cloud Architecture Framework?",
      answers: [
        { id: "A", text: "Reliability", correct: false },
        { id: "B", text: "Mandatory On-Premises Hardware Acquisition", correct: true },
        { id: "C", text: "Cost Optimization", correct: false },
        { id: "D", text: "Sustainability", correct: false }
      ]
    }
  },

  {
    id: 30,
    title: "Containers vs. VMs, Docker Basics & Google Kubernetes Engine (GKE)",
    category: "Module 13: Containers & K8s",
    duration: "10 min",
    intro:
      "Containers package application code together with its exact dependencies, libraries, and configuration files, ensuring predictable execution across any cloud environment.",
    keyIdea:
      "Containers share the host operating system kernel and boot in milliseconds, whereas Virtual Machines each run a full guest OS on top of a hypervisor.",
    sections: [
      {
        heading: "Containers vs. Virtual Machines",
        paragraphs: [
          "Virtual Machines: Heavyweight (GBs in size), require full guest operating system, boot in minutes, isolated via hypervisor.",
          "Containers: Lightweight (MBs in size), share the host OS kernel, boot in milliseconds, isolated via Linux namespaces and cgroups.",
          "Docker: The universal format and toolset for creating, packaging, and running container images defined in a `Dockerfile`."
        ]
      },
      {
        heading: "Google Kubernetes Engine (GKE)",
        paragraphs: [
          "Origin: Kubernetes was developed and open-sourced by Google based on its internal Borg container management system.",
          "GKE: Enterprise managed Kubernetes service providing automated cluster upgrades, multi-zone node pools, and auto-repair.",
          "GKE Autopilot: Google manages the entire cluster infrastructure, nodes, and scaling; you pay strictly for the CPU and memory requested by your running Pods."
        ]
      }
    ],
    example: {
      title: "CONTAINERIZATION EFFICIENCY",
      traditional: "Deploy 10 VMs each running a full copy of Windows Server (consuming 40 GB of RAM just for the OS).",
      cloud: "Run 50 lightweight microservice containers on a single GKE cluster sharing host resources efficiently."
    },
    concepts: [
      { number: "01", title: "Lightweight Portability", description: "Containers run identically on a developer laptop, testing environment, or production GKE cluster." },
      { number: "02", title: "Google Borg Heritage", description: "GKE is built on Google's two decades of pioneering container orchestration experience." },
      { number: "03", title: "GKE Autopilot", description: "Hands-free Kubernetes where Google manages and secures all underlying compute nodes." }
    ],
    quiz: {
      question: "What is the primary architectural difference between a Container and a Virtual Machine?",
      answers: [
        { id: "A", text: "Virtual machines share the host OS kernel, while containers do not", correct: false },
        { id: "B", text: "Containers share the underlying host OS kernel and are much more lightweight, while VMs each include a full guest OS", correct: true },
        { id: "C", text: "Containers can only run on physical mainframes", correct: false },
        { id: "D", text: "Containers cannot be networked", correct: false }
      ]
    }
  },

  {
    id: 31,
    title: "Serverless Computing, Cloud Run, Cloud Functions & Event-Driven Architecture",
    category: "Module 14: Serverless Computing",
    duration: "10 min",
    intro:
      "Serverless computing abstracts infrastructure management completely away from developers: zero server provisioning, automatic scaling to zero when idle, and pay-per-execution micro-billing.",
    keyIdea:
      "The classic Google Cloud Event-Driven Pattern: File uploaded to Cloud Storage → Triggers Pub/Sub event → Executes Cloud Function / Cloud Run to process data.",
    sections: [
      {
        heading: "What Is Serverless?",
        paragraphs: [
          "No Server Management: You never SSH into a server, configure OS security updates, or resize disk partitions.",
          "True Auto-Scaling: Scales from zero to thousands of parallel instances in response to incoming traffic, and immediately back to zero when traffic stops.",
          "Micro-Billing: You are charged strictly for the exact compute milliseconds consumed while handling requests."
        ]
      },
      {
        heading: "Cloud Run vs. Cloud Functions",
        paragraphs: [
          "Cloud Run: Run any containerized application listening on an HTTP port in any programming language (Node, Python, Go, Java, C++, Rust).",
          "Cloud Functions: Lightweight, single-purpose snippets of code executing in response to cloud events (Cloud Storage uploads, Pub/Sub messages, Firebase events)."
        ]
      }
    ],
    example: {
      title: "EVENT-DRIVEN ARCHITECTURE IN ACTION",
      traditional: "A dedicated VM runs 24/7 checking a folder every 5 minutes to see if any user uploaded an image to resize.",
      cloud: "User uploads photo to Cloud Storage → Storage immediately triggers a serverless Cloud Function → Resizes image in 300ms → Function shuts down. Cost = $0.0000004."
    },
    concepts: [
      { number: "01", title: "Zero Server Management", description: "Focus 100% on business code without operating system, cluster, or hardware maintenance." },
      { number: "02", title: "Scale to Zero", description: "Pay zero infrastructure costs during idle periods with no incoming user traffic." },
      { number: "03", title: "Event-Driven Triggers", description: "React automatically to Cloud Storage changes, Pub/Sub messages, and HTTP webhooks." }
    ],
    quiz: {
      question: "Which of the following describes an event-driven serverless architecture on Google Cloud?",
      answers: [
        { id: "A", text: "Running a dedicated VM continuously 24/7 to poll a database", correct: false },
        { id: "B", text: "A Cloud Function executing automatically in response to a new file upload in Cloud Storage", correct: true },
        { id: "C", text: "Purchasing a physical server rack for image rendering", correct: false },
        { id: "D", text: "Manually executing SSH scripts to restart services", correct: false }
      ]
    }
  },

  {
    id: 32,
    title: "Google Cloud Sustainability: Carbon-Free Energy & Sustainable Architecture",
    category: "Module 15: Sustainability",
    duration: "8 min",
    intro:
      "Google is a global pioneer in clean energy, operating carbon neutral since 2007, matching 100% of global electricity with renewable energy, and pursuing 24/7 Carbon-Free Energy (CFE) across all data centers by 2030.",
    keyIdea:
      "Google Cloud provides native Carbon Footprint reporting and Low-Carbon Region indicators to help organizations measure and reduce environmental impact.",
    sections: [
      {
        heading: "24/7 Carbon-Free Energy (CFE)",
        paragraphs: [
          "24/7 CFE Goal: Matching clean, renewable energy consumption with electricity demand on the exact same local power grid, hour-by-hour, 24 hours a day, 365 days a year.",
          "Low-Carbon Regions: The Google Cloud Console displays green leaf icons next to regions with the highest Carbon-Free Energy percentage (e.g. `europe-west6` in Zurich, `us-west1` in Oregon)."
        ]
      },
      {
        heading: "Carbon Footprint Tool & Sustainable Design",
        paragraphs: [
          "Carbon Footprint Dashboard: Built directly into Cloud Console, providing transparent gross greenhouse gas emissions data for your organization's Google Cloud usage.",
          "Sustainable Architectural Principles: Choose low-carbon regions, scale to zero when idle with serverless tools, delete orphaned storage disks, and apply storage lifecycle policies."
        ]
      }
    ],
    example: {
      title: "SUSTAINABLE REGIONAL SELECTION",
      traditional: "Deploy cloud workloads blindly without awareness of whether the local power grid is powered by coal or solar.",
      cloud: "Select low-carbon Google Cloud regions marked with the green leaf icon → Reduce organizational carbon emissions by up to 75% with identical compute performance."
    },
    concepts: [
      { number: "01", title: "Carbon Neutrality & 24/7 CFE", description: "Google's commitment to power every datacenter with round-the-clock carbon-free energy by 2030." },
      { number: "02", title: "Low-Carbon Region Badges", description: "Visual indicators in Cloud Console identifying the cleanest geographic regions." },
      { number: "03", title: "Carbon Footprint Tool", description: "Built-in analytics reporting organization greenhouse gas emissions for ESG compliance." }
    ],
    quiz: {
      question: "How can an organization minimize the carbon footprint of its Google Cloud workloads with zero architectural changes?",
      answers: [
        { id: "A", text: "By deploying workloads into Google Cloud regions designated with high Carbon-Free Energy (CFE) percentages (green leaf icon)", correct: true },
        { id: "B", text: "By using older legacy machine types", correct: false },
        { id: "C", text: "By keeping VMs running at 100% CPU capacity 24 hours a day", correct: false },
        { id: "D", text: "By disabling encryption", correct: false }
      ]
    }
  }
];
