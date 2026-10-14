export const azureLessons = [
  {
    id: 1,
    title: "Course 0: Welcome to AZ-900 & Exam Overview",
    category: "Cloud Concepts",
    duration: "10 min",
    intro:
      "Welcome to the AZ-900: Microsoft Azure Fundamentals Complete Course. Master foundational cloud concepts, understand the July 2026 exam objectives, and build a winning study strategy.",
    keyIdea:
      "AZ-900 validates foundational understanding of cloud concepts (25–30%), Azure architecture and services (35–40%), and Azure management and governance (30–35%).",
    sections: [
      {
        heading: "0.1 About Azure Fundamentals",
        paragraphs: [
          "The AZ-900 certification proves your foundational understanding of cloud computing services and how Microsoft Azure provides those capabilities. It is designed for candidates starting in cloud computing, transitioning from legacy on-premises infrastructure, or business stakeholders managing cloud budgets and governance.",
          "Unlike associate-level certifications such as AZ-104 (Azure Administrator) or AZ-204 (Azure Developer) which require deep hands-on scripting and production troubleshooting, AZ-900 focuses on conceptual mastery, service comparisons, architectural patterns, and governance models.",
          "AZ-900 serves as the primary prerequisite foundation before specializing in Azure Administrator (AZ-104), Solutions Architect (AZ-305), Developer (AZ-204), Data Engineer (DP-203), or current Microsoft AI certifications."
        ]
      },
      {
        heading: "0.2 Official Exam Information & Policies",
        paragraphs: [
          "Exam Format: 40–60 questions consisting of Multiple Choice, Multiple Response, Drag-and-Drop sequence matching, and Case Study scenario analysis.",
          "Passing Threshold: 700 / 1000 (70% scaled score). Exam Duration: 65 minutes total (45 minutes answering questions).",
          "Microsoft Learn Access: During the live exam, candidates can open Microsoft Learn in a split-screen side panel to lookup official documentation.",
          "Retake Policy: 24-hour waiting period after 1st attempt; 14-day waiting period between subsequent retakes (maximum 5 attempts per 12-month window)."
        ]
      },
      {
        heading: "0.3 Study Strategy with Athencert",
        paragraphs: [
          "Follow the 3 exam domains systematically. Focus on 'Why' a service exists and 'When' to choose it over alternatives.",
          "Complete all 17 hands-on labs to build portal and CLI muscle memory, flip through 3D flashcards daily, and take the 3 official domain-weighted practice tests before taking the 65-question Final Mock Exam."
        ]
      }
    ],
    example: {
      title: "CERTIFICATION COMPARISON MATRIX",
      traditional:
        "AZ-900 (Foundational Cloud Architecture) → Validates high-level cloud models, shared responsibility, core compute/network/storage/databases, Entra ID, security posture, and SLAs.",
      cloud:
        "AZ-104 / AZ-204 (Associate Engineering) → Requires advanced CLI/PowerShell, deep troubleshooting, ARM/Bicep template authoring, and active production workload management."
    },
    concepts: [
      {
        number: "01",
        title: "Domain 1: Cloud Concepts",
        description: "25–30% exam weighting covering cloud models, shared responsibility, economics, and IaaS/PaaS/SaaS."
      },
      {
        number: "02",
        title: "Domain 2: Azure Architecture & Services",
        description: "35–40% exam weighting covering global regions, zones, compute, networking, storage, and databases."
      },
      {
        number: "03",
        title: "Domain 3: Management & Governance",
        description: "30–35% exam weighting covering Entra ID, RBAC, Policy, Locks, Monitor, Cost Management, and SLAs."
      }
    ],
    quiz: {
      question: "What is the official passing score for the Microsoft Azure Fundamentals (AZ-900) exam?",
      answers: [
        { id: "A", text: "700 out of 1000 (70%)", correct: true },
        { id: "B", text: "850 out of 1000 (85%)", correct: false },
        { id: "C", text: "500 out of 1000 (50%)", correct: false },
        { id: "D", text: "100% perfect score required", correct: false }
      ],
      explanation: "Microsoft uses a scaled scoring system from 100 to 1000 for technical certifications, with 700 or higher being the required passing score."
    }
  },
  {
    id: 2,
    title: "1.1 What Is Cloud Computing?",
    category: "Cloud Concepts",
    duration: "8 min",
    intro:
      "Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, and analytics—over the internet ('the cloud') to offer faster innovation and flexible resources.",
    keyIdea:
      "Organizations transition from traditional on-premises datacenters to cloud providers like Microsoft Azure to eliminate hardware maintenance and scale on-demand.",
    sections: [
      {
        heading: "On-Premises vs Cloud Computing",
        paragraphs: [
          "Traditional On-Premises: Organizations must purchase physical real estate, server racks, uninterruptible power supplies (UPS), backup diesel generators, cooling HVAC systems, hardware maintenance contracts, and dedicated facilities staff.",
          "Cloud Computing: Computing services are delivered over the internet on-demand. Microsoft manages the underlying global datacenters, physical cabling, hypervisors, and security, while customers consume resources through web portals, APIs, and command-line tools.",
          "Virtualization is the core enabling technology: A software layer called a Hypervisor partitions physical server hardware into multiple isolated Virtual Machines (VMs) running independent operating systems."
        ]
      }
    ],
    example: {
      title: "INFRASTRUCTURE PARADIGM SHIFT",
      traditional:
        "On-Premises: Forecast 3-year capacity → Purchase 10 servers ($50,000) → Wait 8 weeks for shipping → Rack and wire → Maintain physical disks and power.",
      cloud:
        "Microsoft Azure: Click 'Create Virtual Machine' → Select CPU/RAM → VM is running in 45 seconds → Pay only for the minutes it runs → Delete when finished."
    },
    concepts: [
      {
        number: "01",
        title: "On-Demand Self-Service",
        description: "Provision compute, storage, and networking instantaneously without human provider interaction."
      },
      {
        number: "02",
        title: "Broad Network Access",
        description: "Services are accessible globally over standard internet protocols from any client device."
      },
      {
        number: "03",
        title: "Resource Pooling",
        description: "Multi-tenant architecture where physical resources are dynamically assigned and reassigned across customers."
      }
    ],
    quiz: {
      question: "Which core virtualization component allows multiple operating systems to run concurrently on a single physical host?",
      answers: [
        { id: "A", text: "Hypervisor", correct: true },
        { id: "B", text: "Network Interface Card", correct: false },
        { id: "C", text: "Solid State Drive", correct: false },
        { id: "D", text: "DNS Server", correct: false }
      ],
      explanation: "A hypervisor (or Virtual Machine Monitor) abstracts physical hardware and allows multiple virtual machines with isolated guest OSs to share the underlying compute host."
    }
  },
  {
    id: 3,
    title: "1.2 Shared Responsibility Model",
    category: "Cloud Concepts",
    duration: "10 min",
    intro:
      "The Shared Responsibility Model defines which security and operational tasks are handled by Microsoft and which tasks remain the customer's responsibility.",
    keyIdea:
      "The customer ALWAYS retains responsibility for Customer Data, Endpoints, Accounts, and Access Management across all cloud models (IaaS, PaaS, SaaS).",
    sections: [
      {
        heading: "Responsibility Across Cloud Models",
        paragraphs: [
          "In an On-Premises datacenter, the customer is 100% responsible for everything from physical building security to application code.",
          "In Infrastructure as a Service (IaaS), Microsoft manages physical hardware, cooling, power, and virtualization. The customer manages the guest OS, patches, middleware, apps, and data.",
          "In Platform as a Service (PaaS), Microsoft manages hardware, virtualization, OS patching, and runtime. The customer manages application code, database configuration, and data.",
          "In Software as a Service (SaaS), Microsoft manages the complete stack (hardware, OS, application software). The customer configures users, roles, and manages customer data."
        ]
      },
      {
        heading: "Shared Responsibility Matrix Table",
        paragraphs: [
          "Physical Datacenter: Customer (On-Prem) | Microsoft (IaaS, PaaS, SaaS)",
          "Physical Network & Hypervisor: Customer (On-Prem) | Microsoft (IaaS, PaaS, SaaS)",
          "Operating System: Customer (On-Prem, IaaS) | Microsoft (PaaS, SaaS)",
          "Application Runtime: Customer (On-Prem, IaaS) | Microsoft (PaaS, SaaS)",
          "Application Code: Customer (On-Prem, IaaS, PaaS) | Microsoft (SaaS)",
          "Data & Identity: Customer ALWAYS across On-Prem, IaaS, PaaS, and SaaS."
        ]
      }
    ],
    example: {
      title: "SECURITY RESPONSIBILITY EXAMPLE",
      traditional:
        "Azure VM (IaaS): Microsoft guarantees the physical host server will not fail; Customer must install Windows security patches and configure firewall rules.",
      cloud:
        "Microsoft 365 (SaaS): Microsoft patches Exchange server and maintains spam filters; Customer must enforce strong passwords and MFA on user accounts."
    },
    concepts: [
      {
        number: "01",
        title: "Customer Always Owns Data",
        description: "Regardless of cloud service model (IaaS, PaaS, SaaS), data classification and encryption remain customer responsibility."
      },
      {
        number: "02",
        title: "OS Patching Boundary",
        description: "In IaaS you patch the OS; in PaaS and SaaS Microsoft automatically applies OS updates."
      },
      {
        number: "03",
        title: "Identity & Access Control",
        description: "Securing user credentials and enforcing Multi-Factor Authentication is always the customer's duty."
      }
    ],
    quiz: {
      question: "Under the Shared Responsibility Model, which responsibility is ALWAYS retained by the customer in IaaS, PaaS, and SaaS?",
      answers: [
        { id: "A", text: "Information and Customer Data", correct: true },
        { id: "B", text: "Physical server maintenance", correct: false },
        { id: "C", text: "Hypervisor security patching", correct: false },
        { id: "D", text: "Datacenter perimeter physical fencing", correct: false }
      ],
      explanation: "Customer data, information, endpoints, and identity access management are ALWAYS the customer's sole responsibility across all deployment models."
    }
  },
  {
    id: 4,
    title: "1.3 Cloud Models: Public, Private, Hybrid",
    category: "Cloud Concepts",
    duration: "8 min",
    intro:
      "Cloud deployment models describe where infrastructure resides, who owns and manages it, and who has access to computing resources.",
    keyIdea:
      "Public Cloud offers multi-tenant scale; Private Cloud offers dedicated isolated infrastructure; Hybrid Cloud connects both environments seamlessly.",
    sections: [
      {
        heading: "Comparing the Three Cloud Models",
        paragraphs: [
          "Public Cloud: Owned and operated by third-party cloud providers (Microsoft Azure). Resources are delivered over the public internet and shared across multiple tenants, offering near-infinite scalability, pay-as-you-go pricing, and zero hardware maintenance.",
          "Private Cloud: Computing resources used exclusively by one single business or organization. Physically located at an on-premises datacenter or hosted by a third party. Offers maximum control and isolation, but requires high upfront CapEx and ongoing maintenance.",
          "Hybrid Cloud: Combines public cloud with private on-premises infrastructure, allowing data and apps to move between environments via VPN or ExpressRoute. Enables 'cloud bursting'—running baseline workloads on-prem and bursting to Azure during peak demand."
        ]
      }
    ],
    example: {
      title: "CLOUD MODEL USE CASES",
      traditional:
        "Private Cloud: A national defense agency hosting classified top-secret intelligence on dedicated physically isolated servers.",
      cloud:
        "Hybrid Cloud: A bank keeping legacy core financial ledger records on-premises while hosting modern mobile banking customer frontends on Azure."
    },
    concepts: [
      {
        number: "01",
        title: "Public Cloud",
        description: "Multi-tenant, internet-accessible, zero hardware maintenance, pay-as-you-go OpEx."
      },
      {
        number: "02",
        title: "Private Cloud",
        description: "Single-tenant, fully customized control, high upfront CapEx, dedicated hardware."
      },
      {
        number: "03",
        title: "Hybrid Cloud",
        description: "Interconnected public + private environments enabling seamless data mobility and cloud bursting."
      }
    ],
    quiz: {
      question: "Which cloud deployment model enables an organization to keep sensitive compliance data in an on-premises datacenter while scaling web frontends on Microsoft Azure?",
      answers: [
        { id: "A", text: "Hybrid Cloud", correct: true },
        { id: "B", text: "Public Cloud only", correct: false },
        { id: "C", text: "Private Cloud only", correct: false },
        { id: "D", text: "Community Cloud", correct: false }
      ],
      explanation: "Hybrid cloud specifically links on-premises private infrastructure with public cloud services, allowing organizations to satisfy regulatory compliance while enjoying cloud elasticity."
    }
  },
  {
    id: 5,
    title: "1.4 Consumption-Based Model & CapEx vs OpEx",
    category: "Cloud Concepts",
    duration: "9 min",
    intro:
      "Understand cloud economics: the transition from high upfront Capital Expenditure (CapEx) to flexible, pay-as-you-go Operational Expenditure (OpEx).",
    keyIdea:
      "Under a consumption-based model, you pay only for the exact compute, storage, and networking resources you use, with no upfront infrastructure cost.",
    sections: [
      {
        heading: "Capital Expenditure (CapEx) vs Operational Expenditure (OpEx)",
        paragraphs: [
          "CapEx (Capital Expenditure): The upfront spending of money on physical infrastructure (servers, network switches, cooling, building leases). CapEx costs have high initial financial risk and must be deducted from taxes over time via asset depreciation schedules over 3 to 7 years.",
          "OpEx (Operational Expenditure): Spending money on services and products on an ongoing, pay-as-you-go consumption basis. OpEx requires zero upfront investment and is deducted on your tax return in the current tax year as an ongoing business expense.",
          "Consumption-Based Pricing: Cloud providers bill strictly based on metrics like compute hours, gigabytes stored, or network egress bandwidth. Workloads with unpredictable traffic (e.g. seasonal retailers) save substantial costs by scaling down during off-peak hours."
        ]
      }
    ],
    example: {
      title: "FINANCIAL SCENARIO COMPARISON",
      traditional:
        "CapEx: Purchase a $100,000 server cluster sized for peak holiday shopping. During 10 months of the year, servers sit 85% idle while depreciation occurs.",
      cloud:
        "OpEx: Run 2 small Azure VMs during normal months ($150/mo). Autoscale to 50 VMs during Black Friday weekend ($800 total). Pay zero when resources are shut down."
    },
    concepts: [
      {
        number: "01",
        title: "CapEx (Capital)",
        description: "Upfront capital investment in physical assets; depreciated over multi-year asset lifecycles."
      },
      {
        number: "02",
        title: "OpEx (Operational)",
        description: "Ongoing consumption billing with zero upfront cost; fully deductible in current tax year."
      },
      {
        number: "03",
        title: "Consumption-Based Pricing",
        description: "Pay strictly for active CPU seconds, GB storage, and network data transfer."
      }
    ],
    quiz: {
      question: "Which of the following is considered an Operational Expenditure (OpEx)?",
      answers: [
        { id: "A", text: "Paying a monthly invoice for consumed Azure Virtual Machine hours", correct: true },
        { id: "B", text: "Purchasing a physical server rack for an on-premises datacenter", correct: false },
        { id: "C", text: "Constructing a dedicated datacenter server room", correct: false },
        { id: "D", text: "Buying a 5-year hardware maintenance contract upfront", correct: false }
      ],
      explanation: "Monthly pay-as-you-go cloud service invoices based on consumption are classified as Operational Expenditure (OpEx)."
    }
  },
  {
    id: 6,
    title: "1.5 Benefits of Cloud Computing",
    category: "Cloud Concepts",
    duration: "10 min",
    intro:
      "Explore the major benefits of cloud computing: High Availability, Scalability, Elasticity, Reliability, Predictability, Security, Governance, Global Reach, and Agility.",
    keyIdea:
      "Scalability is the capacity to handle increased load; Elasticity is the ability to automatically grow AND shrink resources dynamically in real time.",
    sections: [
      {
        heading: "Key Cloud Benefits Explained",
        paragraphs: [
          "High Availability (HA): Ensuring systems remain operational and accessible with minimal downtime through redundant hardware, power, and networking.",
          "Scalability (Vertical vs Horizontal): Vertical scaling (Scaling Up) means adding more CPU or RAM to an existing VM. Horizontal scaling (Scaling Out) means adding more VM instances to distribute traffic.",
          "Elasticity: The ability of a system to automatically scale up/out when demand spikes AND automatically scale down/in when demand subsides, eliminating waste.",
          "Reliability & Disaster Recovery: Decentralized architecture and regional replication ensure applications recover rapidly from hardware or environmental failures.",
          "Agility: The speed at which developer teams can provision, test, and deploy new applications without waiting weeks for physical procurement."
        ]
      }
    ],
    example: {
      title: "SCALABILITY VS ELASTICITY",
      traditional:
        "Scalability (Capacity): Sizing an architecture so it can support 100,000 concurrent users by provisioning enough server capacity.",
      cloud:
        "Elasticity (Automation): Having 2 VMs running at 2 AM, automatically scaling to 40 VMs at 12 PM lunchtime rush, and scaling back to 2 VMs at 10 PM."
    },
    concepts: [
      {
        number: "01",
        title: "Scale Up vs Scale Out",
        description: "Scale Up = bigger server (more RAM/CPU). Scale Out = more server instances."
      },
      {
        number: "02",
        title: "Elasticity",
        description: "Dynamic automatic scaling that matches resource consumption to fluctuating workload demand."
      },
      {
        number: "03",
        title: "Agility & Speed",
        description: "Deploying global cloud services in minutes, accelerating time-to-market."
      }
    ],
    quiz: {
      question: "What is the key difference between Scalability and Elasticity?",
      answers: [
        { id: "A", text: "Scalability is the capability to handle growth; Elasticity is the automatic dynamic scaling up and down based on demand", correct: true },
        { id: "B", text: "Scalability applies only to databases; Elasticity applies only to storage", correct: false },
        { id: "C", text: "Scalability requires buying physical hardware; Elasticity is free", correct: false },
        { id: "D", text: "There is no difference; they are exact synonyms", correct: false }
      ],
      explanation: "Scalability refers to the overall capacity to expand, whereas Elasticity is the automated, dynamic ability to adjust resources up and down in real-time."
    }
  },
  {
    id: 7,
    title: "1.6 Cloud Service Types: IaaS, PaaS, SaaS",
    category: "Cloud Concepts",
    duration: "11 min",
    intro:
      "Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) represent the three foundational cloud service tiers.",
    keyIdea:
      "IaaS gives you infrastructure control; PaaS allows you to focus on application code; SaaS delivers ready-to-use software applications.",
    sections: [
      {
        heading: "Deep Dive into Cloud Service Types",
        paragraphs: [
          "Infrastructure as a Service (IaaS): You rent basic computing infrastructure (Virtual Machines, Storage, Virtual Networks). You are responsible for installing, configuring, and patching the operating system and software. Best for lift-and-shift migrations.",
          "Platform as a Service (PaaS): Microsoft provides a fully managed environment for building, testing, and deploying applications (Azure App Service, Azure Functions, Azure SQL DB). Microsoft manages the OS, web server, and hardware; you manage application code and data.",
          "Software as a Service (SaaS): Complete software application managed entirely by Microsoft and accessed via web browser or mobile app (Microsoft 365, Power BI, Dynamics 365). You configure user access permissions and manage your data."
        ]
      }
    ],
    example: {
      title: "SERVICE TYPE EXAMPLES IN AZURE",
      traditional:
        "IaaS: Azure Virtual Machines, Virtual Network, Azure Managed Disks (Full OS control).",
      cloud:
        "PaaS: Azure App Service, Azure SQL Database, Azure Functions | SaaS: Microsoft 365, OneDrive."
    },
    concepts: [
      {
        number: "01",
        title: "IaaS (Infrastructure)",
        description: "Maximum control, customer manages OS and software, ideal for legacy migrations."
      },
      {
        number: "02",
        title: "PaaS (Platform)",
        description: "Focus on application code; Microsoft manages OS patching, runtime, and scaling."
      },
      {
        number: "03",
        title: "SaaS (Software)",
        description: "End-user ready software, pay-per-seat subscription, zero code maintenance."
      }
    ],
    quiz: {
      question: "Which cloud service type should a team select if they want to deploy a Python web application without managing operating system patches or web server configurations?",
      answers: [
        { id: "A", text: "Platform as a Service (PaaS) like Azure App Service", correct: true },
        { id: "B", text: "Infrastructure as a Service (IaaS) like Azure VM", correct: false },
        { id: "C", text: "Software as a Service (SaaS) like Microsoft 365", correct: false },
        { id: "D", text: "On-Premises Hyper-V", correct: false }
      ],
      explanation: "PaaS (such as Azure App Service) abstracts the operating system and web server management, allowing developers to deploy Python code directly."
    }
  },
  {
    id: 8,
    title: "2.1 Azure Global Infrastructure & Datacenters",
    category: "Azure Architecture",
    duration: "10 min",
    intro:
      "Explore Microsoft Azure's global infrastructure: 60+ geographical regions, physical datacenters, fiber optic backbones, and Points of Presence (PoPs).",
    keyIdea:
      "Azure's global footprint connects hundreds of datacenters across global geographies with massive private fiber networks and Edge Points of Presence.",
    sections: [
      {
        heading: "Components of Global Infrastructure",
        paragraphs: [
          "Datacenters: Physical facilities with thousands of server blades, redundant power grids, generators, cooling chillers, and biometric physical security.",
          "Geographies: Discrete markets (e.g., United States, Europe, Asia Pacific) that typically contain two or more regions to preserve data residency and compliance boundaries.",
          "Points of Presence (PoPs) & Edge Locations: Worldwide caching nodes used by Azure Front Door and Azure CDN to deliver ultra-low latency content to end users close to their location.",
          "Sovereign Regions: Dedicated, physically isolated Azure cloud environments created for specialized legal and compliance needs (Azure Government for US federal agencies, Azure China 21Vianet)."
        ]
      }
    ],
    example: {
      title: "GLOBAL NETWORK CAPACITY",
      traditional:
        "Legacy: Setting up private transatlantic fiber cables between corporate offices cost millions in telco contracts.",
      cloud:
        "Azure: Traffic between Azure datacenters travels across Microsoft's private global fiber WAN, never touching the public internet."
    },
    concepts: [
      {
        number: "01",
        title: "Azure Geography",
        description: "A geopolitical market containing 2+ regions that guarantees data residency boundaries."
      },
      {
        number: "02",
        title: "Points of Presence (PoPs)",
        description: "Global edge caching locations delivering low-latency web assets and CDN acceleration."
      },
      {
        number: "03",
        title: "Sovereign Clouds",
        description: "Physically isolated clouds for US Government and China compliance mandates."
      }
    ],
    quiz: {
      question: "Which Azure infrastructure component ensures that customer data remains within specific geopolitical boundaries for regulatory compliance?",
      answers: [
        { id: "A", text: "Azure Geographies", correct: true },
        { id: "B", text: "Azure Load Balancers", correct: false },
        { id: "C", text: "Network Security Groups", correct: false },
        { id: "D", text: "Azure Advisor", correct: false }
      ],
      explanation: "Azure Geographies are geopolitical boundaries (such as Europe, United States, Canada) that encompass multiple regions to satisfy data residency and compliance rules."
    }
  },
  {
    id: 9,
    title: "2.2 Azure Regions & Selection Strategy",
    category: "Azure Architecture",
    duration: "9 min",
    intro:
      "An Azure Region is a geographical area containing one or more physical datacenters connected through a dedicated, latency-defined network.",
    keyIdea:
      "Choosing an Azure Region depends on 4 critical factors: User Latency, Service Availability, Compliance & Data Residency, and Cost.",
    sections: [
      {
        heading: "Region Selection Criteria",
        paragraphs: [
          "Latency & Proximity: Deploy resources in the region geographically closest to your primary end-user base to minimize round-trip network response times.",
          "Data Residency & Compliance: Specific laws (e.g., GDPR in the EU) require customer personal data to remain stored inside designated geographical borders.",
          "Service Availability: Not all 200+ Azure services or specialized VM sizes (like GPU-enabled N-series VMs) are available in every single region.",
          "Pricing Variations: Service pricing varies between regions due to local real estate, electricity, tax, and operating costs."
        ]
      }
    ],
    example: {
      title: "SCENARIO: SELECTING A REGION",
      traditional:
        "Scenario: An e-commerce business based in Frankfurt has 95% of its shoppers in Germany and must comply with European data protection mandates.",
      cloud:
        "Solution: Deploy in 'Germany West Central' (Frankfurt) or 'West Europe' (Netherlands) to minimize latency and ensure EU data residency compliance."
    },
    concepts: [
      {
        number: "01",
        title: "Latency Minimization",
        description: "Placing compute and data close to users reduces packet travel time."
      },
      {
        number: "02",
        title: "Data Sovereignty",
        description: "Adhering to regional laws governing where electronic data can be stored."
      },
      {
        number: "03",
        title: "Service Parity",
        description: "Checking whether required VM SKUs or PaaS features are supported in target regions."
      }
    ],
    quiz: {
      question: "A company has customers located across Northern Europe and must satisfy European data residency regulations. Which factor is most important when selecting their Azure Region?",
      answers: [
        { id: "A", text: "Compliance, data residency laws, and network latency to users", correct: true },
        { id: "B", text: "Selecting the region with the lowest local temperature", correct: false },
        { id: "C", text: "Choosing the oldest datacenter facility", correct: false },
        { id: "D", text: "Always picking East US regardless of location", correct: false }
      ],
      explanation: "Proximity to users (for low latency) and legal compliance/data residency mandates are the primary criteria for selecting an Azure Region."
    }
  },
  {
    id: 10,
    title: "2.3 Availability Zones & High Availability",
    category: "Azure Architecture",
    duration: "10 min",
    intro:
      "Availability Zones are physically separated datacenters within an Azure region, each with independent power, cooling, and networking.",
    keyIdea:
      "Deploying applications across Availability Zones protects against datacenter-level failures and provides a 99.99% VM uptime SLA.",
    sections: [
      {
        heading: "How Availability Zones Function",
        paragraphs: [
          "Each Availability Zone is composed of one or more physical datacenters located within the same metro area, connected by high-speed fiber with round-trip latency < 2ms.",
          "Independent Infrastructure: Each zone has separate electrical utility substations, backup diesel generators, cooling towers, and networking uplinks. If Zone 1 experiences a total power outage, Zone 2 and Zone 3 continue operating normally.",
          "Zonal vs Zone-Redundant Services: Zonal services pin a resource (like a specific VM) to a single zone. Zone-Redundant services (like ZRS storage or App Service multi-zone) automatically replicate data and balance traffic across 3 zones."
        ]
      }
    ],
    example: {
      title: "ZONE REDUNDANCY ARCHITECTURE",
      traditional:
        "Single Datacenter: A flood disables the main power transformer → All servers go offline simultaneously.",
      cloud:
        "Multi-Zone: 2 VMs in Zone 1, 2 VMs in Zone 2, 2 VMs in Zone 3 behind an Azure Load Balancer → If Zone 1 fails, the remaining 4 VMs continue serving traffic with zero interruption."
    },
    concepts: [
      {
        number: "01",
        title: "Independent Facilities",
        description: "Each zone has isolated power, cooling, and fiber networking within the region."
      },
      {
        number: "02",
        title: "99.99% Availability SLA",
        description: "Deploying 2+ VMs across Availability Zones unlocks Microsoft's 99.99% SLA."
      },
      {
        number: "03",
        title: "Zone-Redundant Replication",
        description: "Synchronous data replication across 3 separate physical zones in one metro region."
      }
    ],
    quiz: {
      question: "What is the minimum number of Availability Zones present in an Azure region that supports zones?",
      answers: [
        { id: "A", text: "3 separate zones", correct: true },
        { id: "B", text: "1 zone", correct: false },
        { id: "C", text: "5 zones", correct: false },
        { id: "D", text: "10 zones", correct: false }
      ],
      explanation: "Azure regions that support Availability Zones feature a minimum of three physically distinct zones (Zone 1, Zone 2, Zone 3)."
    }
  },
  {
    id: 11,
    title: "2.4 Region Pairs & Cross-Region Resiliency",
    category: "Azure Architecture",
    duration: "8 min",
    intro:
      "Each Azure region is paired with another region within the same geography at least 300 miles away to ensure disaster recovery and sequential updates.",
    keyIdea:
      "Azure never updates both paired regions simultaneously, ensuring platform maintenance cannot cause a worldwide service outage.",
    sections: [
      {
        heading: "Key Capabilities of Region Pairs",
        paragraphs: [
          "Physical Separation: Region pairs (e.g., East US and West US, North Europe and West Europe) are situated at least 300 miles (480 km) apart to isolate them from natural disasters.",
          "Sequential Updates: Planned Azure platform updates and kernel patches are rolled out to only one region in a pair at a time, minimizing downtime risk.",
          "Automatic Storage Replication: Geo-redundant storage (GRS) automatically replicates data asynchronously to the paired secondary region.",
          "Emergency Recovery Priority: In the event of a catastrophic multi-region outage, Azure prioritizes the restoration of at least one region out of every pair."
        ]
      }
    ],
    example: {
      title: "REGION PAIR DISASTER RECOVERY",
      traditional:
        "Single Region: If a major hurricane damages coastal infrastructure across the entire Florida region, local backups in the same city are lost.",
      cloud:
        "Region Pair (East US + West US): Data stored in East US is automatically replicated to West US 2,500 miles away, allowing instant failover."
    },
    concepts: [
      {
        number: "01",
        title: "300+ Miles Distance",
        description: "Protects against simultaneous regional natural disasters, hurricanes, or grid blackouts."
      },
      {
        number: "02",
        title: "Sequential Updates",
        description: "Azure platform patches are staged sequentially across paired regions."
      },
      {
        number: "03",
        title: "Geo-Redundancy",
        description: "Automatic background data replication for GRS storage accounts."
      }
    ],
    quiz: {
      question: "Why does Microsoft perform platform updates on Region Pairs sequentially rather than simultaneously?",
      answers: [
        { id: "A", text: "To prevent maintenance-related downtime from affecting both paired regions at the same time", correct: true },
        { id: "B", text: "To reduce electricity consumption", correct: false },
        { id: "C", text: "Because only one region can be powered on at a time", correct: false },
        { id: "D", text: "To comply with international tax laws", correct: false }
      ],
      explanation: "Sequential updates ensure that if a platform update causes an unexpected issue, the paired partner region remains unaffected and online."
    }
  },
  {
    id: 12,
    title: "2.5 Azure Management Hierarchy & Resource Groups",
    category: "Azure Architecture",
    duration: "11 min",
    intro:
      "Master the 4-level Azure management hierarchy: Management Groups, Subscriptions, Resource Groups, and Resources.",
    keyIdea:
      "The management hierarchy is: Management Groups → Subscriptions → Resource Groups → Resources. Policies and RBAC permissions inherit downward.",
    sections: [
      {
        heading: "The 4 Levels of Azure Governance",
        paragraphs: [
          "1. Management Groups: Top-level containers used to manage access, policy, and compliance across multiple subscriptions hierarchically (supports up to 6 levels of depth).",
          "2. Subscriptions: An agreement with Microsoft to provision cloud resources; acts as both a Billing Boundary (generates invoices) and an Access Boundary (administrative control).",
          "3. Resource Groups: Logical containers holding related Azure resources for an application solution so you can manage lifecycle, security, and deployments as a single unit.",
          "4. Resources: Individual instances of services (Virtual Machines, Storage Accounts, Virtual Networks, SQL Databases)."
        ]
      },
      {
        heading: "Resource Group Rules to Remember",
        paragraphs: [
          "Every resource MUST exist in exactly one resource group.",
          "Resources in different regions can reside in the same resource group.",
          "Deleting a resource group deletes all resources contained inside it automatically.",
          "Resources can be moved between resource groups and subscriptions."
        ]
      }
    ],
    example: {
      title: "HIERARCHY INHERITANCE",
      traditional:
        "Management Group (Enforce 'Allowed Region = Europe')\n  └── Subscription (Finance Sub)\n        └── Resource Group (App-RG)\n              └── Virtual Machine (VM-01)",
      cloud:
        "Result: VM-01 automatically inherits the Europe region policy and finance RBAC permissions applied at the top Management Group."
    },
    concepts: [
      {
        number: "01",
        title: "Management Groups",
        description: "Govern multiple subscriptions with inherited policies and RBAC permissions."
      },
      {
        number: "02",
        title: "Subscription",
        description: "Billing and access boundary linking resource consumption to a payment agreement."
      },
      {
        number: "03",
        title: "Resource Group",
        description: "Lifecycle container grouping related resources for collective deployment and deletion."
      }
    ],
    quiz: {
      question: "What happens when you delete an Azure Resource Group containing two Virtual Machines and a Storage Account?",
      answers: [
        { id: "A", text: "The resource group and all contained resources (VMs and Storage) are deleted", correct: true },
        { id: "B", text: "Only the resource group container is deleted; the VMs keep running", correct: false },
        { id: "C", text: "The operation is blocked permanently until resources are moved", correct: false },
        { id: "D", text: "The resources are moved to the root subscription automatically", correct: false }
      ],
      explanation: "Resource groups are lifecycle boundaries. Deleting a resource group cascades and deletes all resources contained inside it."
    }
  },
  {
    id: 13,
    title: "3.1 Azure Virtual Machines & VM Scale Sets",
    category: "Compute & Containers",
    duration: "10 min",
    intro:
      "Azure Virtual Machines provide on-demand, resizable IaaS computing instances running Windows Server or Linux with full administrative OS control.",
    keyIdea:
      "Virtual Machine Scale Sets (VMSS) automatically scale identical VM instances out or in based on CPU metrics or schedules for high availability.",
    sections: [
      {
        heading: "Virtual Machine Capabilities",
        paragraphs: [
          "VM Sizing: Tailored compute series including General Purpose (D-series), Compute Optimized (F-series), Memory Optimized (E-series), and GPU/AI (N-series).",
          "Images & Disks: Provision from pre-configured marketplace images (Ubuntu, Red Hat, Windows Server) or custom generalized VHDs attached to Managed Disks.",
          "Virtual Machine Scale Sets (VMSS): Lets you deploy and manage a pool of identical, auto-scaling VMs behind a load balancer. When CPU usage exceeds 75%, VMSS adds VM instances automatically; when CPU drops below 30%, it terminates instances to save cost."
        ]
      }
    ],
    example: {
      title: "AUTOSCALING IN ACTION",
      traditional:
        "Static VMs: 10 VMs running continuously 24/7 = 7,200 compute hours billed per month.",
      cloud:
        "VM Scale Set: 2 VMs run during quiet hours; scales up to 10 VMs during 4-hour peak periods = 2,400 compute hours billed per month (66% cost savings)."
    },
    concepts: [
      {
        number: "01",
        title: "IaaS Virtual Machines",
        description: "Full OS administrative/root access with custom software and driver installations."
      },
      {
        number: "02",
        title: "VM Scale Sets (VMSS)",
        description: "Automated horizontal scaling of identical VM instances based on demand metrics."
      },
      {
        number: "03",
        title: "Managed Disks",
        description: "Resilient virtual hard disk block storage attached to VMs."
      }
    ],
    quiz: {
      question: "Which Azure service enables you to automatically deploy and horizontally autoscale a group of identical virtual machines based on CPU utilization?",
      answers: [
        { id: "A", text: "Virtual Machine Scale Sets (VMSS)", correct: true },
        { id: "B", text: "Azure Key Vault", correct: false },
        { id: "C", text: "Azure ExpressRoute", correct: false },
        { id: "D", text: "Azure Policy", correct: false }
      ],
      explanation: "Virtual Machine Scale Sets (VMSS) provide automated horizontal scaling and load balancing for pools of identical VMs."
    }
  },
  {
    id: 14,
    title: "3.2 Containers: ACI, Container Apps & AKS",
    category: "Compute & Containers",
    duration: "11 min",
    intro:
      "Understand containerization in Azure: lightweight OS-level virtualization using Azure Container Instances (ACI), Azure Container Apps (ACA), and Azure Kubernetes Service (AKS).",
    keyIdea:
      "ACI is for standalone single containers; ACA is for serverless microservices; AKS is for enterprise Kubernetes cluster orchestration.",
    sections: [
      {
        heading: "Containers vs Virtual Machines",
        paragraphs: [
          "Containers package application code, dependencies, and libraries together. Unlike VMs which virtualize physical hardware and include a full Guest OS (gigabytes), containers share the host OS kernel and boot in seconds (megabytes).",
          "Azure Container Instances (ACI): The fastest, simplest way to run a single container in Azure without managing any virtual machines or orchestrators.",
          "Azure Container Apps (ACA): A fully managed serverless container platform built on Kubernetes and KEDA, designed for microservices, background jobs, and scale-to-zero workloads.",
          "Azure Kubernetes Service (AKS): Enterprise-grade managed Kubernetes service for complex multi-container orchestration, automated service discovery, rolling updates, and cluster management."
        ]
      }
    ],
    example: {
      title: "CONTAINER SERVICE SELECTION",
      traditional:
        "Single task script (run once an hour for 30 seconds) → Azure Container Instances (ACI).",
      cloud:
        "Enterprise banking microservices with 50 interconnected services and service mesh → Azure Kubernetes Service (AKS)."
    },
    concepts: [
      {
        number: "01",
        title: "Containers",
        description: "Lightweight, portable software packages sharing the host OS kernel."
      },
      {
        number: "02",
        title: "Azure Container Instances (ACI)",
        description: "Run single containers on-demand without orchestrator management overhead."
      },
      {
        number: "03",
        title: "Azure Kubernetes Service (AKS)",
        description: "Enterprise managed Kubernetes cluster for complex container orchestration."
      }
    ],
    quiz: {
      question: "What is the fastest and simplest way to run a standalone Docker container in Azure without provisioning servers or configuring a Kubernetes cluster?",
      answers: [
        { id: "A", text: "Azure Container Instances (ACI)", correct: true },
        { id: "B", text: "Azure Kubernetes Service (AKS)", correct: false },
        { id: "C", text: "SQL Server on Azure VM", correct: false },
        { id: "D", text: "Azure Virtual Desktop", correct: false }
      ],
      explanation: "Azure Container Instances (ACI) provides a serverless platform to launch individual containers in seconds with zero cluster management."
    }
  },
  {
    id: 15,
    title: "3.3 Azure App Service & Azure Functions",
    category: "Compute & Containers",
    duration: "10 min",
    intro:
      "Compare PaaS web hosting on Azure App Service with event-driven serverless computing on Azure Functions.",
    keyIdea:
      "App Service hosts continuous web applications and APIs; Azure Functions executes event-driven micro-code with pay-per-execution serverless billing.",
    sections: [
      {
        heading: "Azure App Service (PaaS Web Hosting)",
        paragraphs: [
          "Fully managed HTTP platform for hosting web apps, RESTful APIs, and mobile backends written in .NET, Java, Node.js, Python, or PHP.",
          "Built-in features: Automatic OS security patching, custom domain SSL certificates, staging deployment slots (zero-downtime swap), and autoscaling based on HTTP load."
        ]
      },
      {
        heading: "Azure Functions (Serverless Compute)",
        paragraphs: [
          "Event-Driven Architecture: Functions execute code only when triggered by an event (e.g., HTTP request, new file uploaded to Blob Storage, message in a queue, timer schedule).",
          "Consumption Plan: No servers to provision. You are billed strictly for the milliseconds of execution time and memory consumed. Scales from zero to thousands of instances automatically."
        ]
      }
    ],
    example: {
      title: "APP SERVICE VS FUNCTIONS",
      traditional:
        "Azure App Service: Hosting a full customer dashboard web portal running 24/7 with continuous user traffic.",
      cloud:
        "Azure Functions: A lightweight script triggered whenever an invoice image is uploaded to extract text and save it to a database."
    },
    concepts: [
      {
        number: "01",
        title: "Azure App Service",
        description: "PaaS web platform with automated patching, deployment slots, and custom domains."
      },
      {
        number: "02",
        title: "Azure Functions",
        description: "Event-driven serverless code execution with consumption-based micro-billing."
      },
      {
        number: "03",
        title: "Deployment Slots",
        description: "Test code in a staging slot and swap to production with zero downtime."
      }
    ],
    quiz: {
      question: "Which Azure service executes code only in response to specific triggers (such as a database update or timer) with zero compute billing when idle?",
      answers: [
        { id: "A", text: "Azure Functions", correct: true },
        { id: "B", text: "Azure Virtual Machines", correct: false },
        { id: "C", text: "Azure Dedicated Host", correct: false },
        { id: "D", text: "Azure Disk Storage", correct: false }
      ],
      explanation: "Azure Functions is an event-driven serverless compute engine that bills strictly for active execution time, costing zero when idle."
    }
  },
  {
    id: 16,
    title: "3.4 Azure Virtual Desktop",
    category: "Compute & Containers",
    duration: "7 min",
    intro:
      "Azure Virtual Desktop (AVD) is a cloud-based desktop and app virtualization service delivering a complete Windows 10/11 multi-session experience to remote workers.",
    keyIdea:
      "AVD enables remote workers to securely access corporate desktops and applications from any device without hosting data locally.",
    sections: [
      {
        heading: "Capabilities of Azure Virtual Desktop",
        paragraphs: [
          "Windows Multi-Session: Allows multiple remote employees to share a single Azure Virtual Machine host concurrently, dramatically reducing VM compute costs.",
          "Remote App Streaming: Publish individual corporate desktop applications (like proprietary ERP or accounting tools) to user devices without streaming full desktop sessions.",
          "Enhanced Security: Corporate data stays stored inside the Azure secure datacenter; local client devices only display an encrypted video stream, preventing data leakage on lost laptops."
        ]
      }
    ],
    example: {
      title: "VIRTUAL DESKTOP IN ACTION",
      traditional:
        "Legacy: Purchasing and shipping 500 encrypted physical corporate laptops to remote call center employees worldwide.",
      cloud:
        "Azure Virtual Desktop: Contractors log in securely from their personal web browsers to standardized Azure Windows 11 desktops with full security monitoring."
    },
    concepts: [
      {
        number: "01",
        title: "Desktop Virtualization (VDI)",
        description: "Cloud-hosted Windows 10/11 accessible from Mac, Windows, iOS, Android, and web browsers."
      },
      {
        number: "02",
        title: "Windows Multi-Session",
        description: "Multiple users sharing a single Azure VM host to optimize infrastructure cost."
      },
      {
        number: "03",
        title: "Centralized Security",
        description: "Data remains in Azure; endpoint devices display encrypted remote display sessions."
      }
    ],
    quiz: {
      question: "What is the primary architectural benefit of Windows 10/11 Multi-session in Azure Virtual Desktop?",
      answers: [
        { id: "A", text: "It allows multiple concurrent users to share compute resources on a single Azure VM", correct: true },
        { id: "B", text: "It eliminates the need for internet connectivity", correct: false },
        { id: "C", text: "It makes VMs completely free of charge", correct: false },
        { id: "D", text: "It automatically bypasses Microsoft Entra authentication", correct: false }
      ],
      explanation: "Windows Multi-session enables multiple users to connect simultaneously to the same underlying VM host, maximizing density and lowering compute costs."
    }
  },
  {
    id: 17,
    title: "4.1 Azure Virtual Network, Subnets & NSGs",
    category: "Networking",
    duration: "10 min",
    intro:
      "Azure Virtual Network (VNet) is the fundamental building block for private network isolation, IP subnetting, and inter-resource communication in Azure.",
    keyIdea:
      "VNets provide isolated private IP address spaces; Network Security Groups (NSGs) filter inbound and outbound traffic at Layer 4.",
    sections: [
      {
        heading: "Core Azure Networking Building Blocks",
        paragraphs: [
          "Virtual Network (VNet): A private, isolated network in an Azure region defined with a custom CIDR IP address range (e.g., `10.0.0.0/16`).",
          "Subnets: Subdividing a VNet into logical segments (e.g., `10.0.1.0/24` for Web, `10.0.2.0/24` for Database) to enforce security boundaries.",
          "Network Security Groups (NSGs): Stateful firewall packet filters that contain security rules allowing or denying inbound/outbound traffic based on 5-tuple criteria (Source IP, Source Port, Destination IP, Destination Port, Protocol).",
          "Application Security Groups (ASGs): Group VM network interfaces together logically to apply NSG rules based on application tier rather than static IP addresses."
        ]
      }
    ],
    example: {
      title: "TIERED NETWORK SECURITY",
      traditional:
        "Subnet 1 (Web Subnet): NSG allows Inbound Port 80/443 from Internet → Forwards traffic to App Subnet.",
      cloud:
        "Subnet 2 (DB Subnet): NSG blocks all internet traffic; allows Inbound Port 1433 ONLY from Web Subnet (`10.0.1.0/24`)."
    },
    concepts: [
      {
        number: "01",
        title: "VNet Isolation",
        description: "Private CIDR IP address space isolated from other customers and internet by default."
      },
      {
        number: "02",
        title: "Subnetting",
        description: "Segmenting virtual networks to organize workloads and isolate database tiers."
      },
      {
        number: "03",
        title: "Network Security Groups (NSGs)",
        description: "Stateful Layer 4 firewall rules controlling inbound and outbound port traffic."
      }
    ],
    quiz: {
      question: "Which Azure resource acts as a stateful Layer 4 firewall to allow or deny traffic to subnets and virtual machine network interfaces based on IP and port rules?",
      answers: [
        { id: "A", text: "Network Security Group (NSG)", correct: true },
        { id: "B", text: "Azure Blob Container", correct: false },
        { id: "C", text: "Azure Advisor", correct: false },
        { id: "D", text: "Resource Lock", correct: false }
      ],
      explanation: "Network Security Groups (NSGs) filter network traffic to and from Azure resources in an Azure Virtual Network using stateful 5-tuple security rules."
    }
  },
  {
    id: 18,
    title: "4.2 Azure Load Balancing, VPN & ExpressRoute",
    category: "Networking",
    duration: "12 min",
    intro:
      "Compare Azure traffic routing services (Load Balancer, Application Gateway, Front Door) and hybrid cross-premises connectivity (VPN Gateway vs ExpressRoute).",
    keyIdea:
      "Load Balancer is Layer 4 (TCP/UDP); Application Gateway is Layer 7 Regional (HTTP/HTTPS/WAF); Front Door is Layer 7 Global; ExpressRoute is a dedicated private fiber link.",
    sections: [
      {
        heading: "Load Balancing Services Matrix",
        paragraphs: [
          "Azure Load Balancer: High-performance Layer 4 (TCP/UDP) load balancer distributing network traffic across backend VMs in a region.",
          "Azure Application Gateway: Regional Layer 7 (HTTP/HTTPS) load balancer with URL path-based routing, cookie affinity, and integrated Web Application Firewall (WAF).",
          "Azure Front Door: Global Layer 7 entry point providing Anycast web routing, instant global failover, CDN edge caching, and global WAF.",
          "Azure Traffic Manager: DNS-based traffic router distributing client requests across global endpoints using routing methods (performance, priority, weighted)."
        ]
      },
      {
        heading: "Hybrid Connectivity: VPN vs ExpressRoute",
        paragraphs: [
          "Azure VPN Gateway: Encrypted IPsec/IKE tunnel connecting on-premises networks to Azure VNets over the PUBLIC INTERNET. Fast and cost-effective.",
          "Azure ExpressRoute: Dedicated, PRIVATE physical fiber connection between on-premises datacenters and Azure that bypasses the public internet completely, providing up to 100 Gbps bandwidth and deterministic low latency."
        ]
      }
    ],
    example: {
      title: "HYBRID CONNECTIVITY SELECTION",
      traditional:
        "Branch Office (10 users) → Site-to-Site VPN Gateway over public internet (cost-effective, encrypted).",
      cloud:
        "Headquarters Datacenter (10,000 users streaming real-time DB transactions) → Azure ExpressRoute (private, dedicated, ultra-low latency)."
    },
    concepts: [
      {
        number: "01",
        title: "Layer 4 vs Layer 7",
        description: "Load Balancer = Layer 4 (TCP/UDP). Application Gateway = Layer 7 (HTTP URL routing + WAF)."
      },
      {
        number: "02",
        title: "Azure Front Door",
        description: "Global edge accelerator with Anycast routing, CDN caching, and global WAF."
      },
      {
        number: "03",
        title: "ExpressRoute",
        description: "Private dedicated fiber connection bypassing the public internet completely."
      }
    ],
    quiz: {
      question: "Which Azure service provides a dedicated, private physical connection between on-premises datacenters and Azure without routing traffic over the public internet?",
      answers: [
        { id: "A", text: "Azure ExpressRoute", correct: true },
        { id: "B", text: "Site-to-Site VPN Gateway", correct: false },
        { id: "C", text: "Azure Traffic Manager", correct: false },
        { id: "D", text: "Point-to-Site VPN", correct: false }
      ],
      explanation: "Azure ExpressRoute extends on-premises networks into Microsoft cloud over a private connection facilitated by a connectivity provider, bypassing the public internet."
    }
  },
  {
    id: 19,
    title: "5.1 Storage Accounts & Blob Storage Tiers",
    category: "Storage & Data",
    duration: "10 min",
    intro:
      "Explore Azure Storage Accounts and Blob Storage: massively scalable object storage for unstructured data with Hot, Cool, Cold, and Archive access tiers.",
    keyIdea:
      "Higher access frequency = higher storage cost / lower retrieval cost (Hot); Lower access frequency = lower storage cost / higher retrieval cost (Archive).",
    sections: [
      {
        heading: "Azure Storage Accounts & Blob Types",
        paragraphs: [
          "Storage Account: A top-level namespace in Azure that provides endpoints for Blobs, Files, Queues, and Tables. Account names must be globally unique across Azure.",
          "Block Blobs: Optimized for storing text and binary data (documents, images, videos, backups). Made up of discrete blocks.",
          "Append Blobs: Optimized for append operations (application logging and telemetry).",
          "Page Blobs: Optimized for random read/write operations (used for Azure VM VHD virtual disks)."
        ]
      },
      {
        heading: "Blob Storage Access Tiers",
        paragraphs: [
          "Hot Tier: Optimized for data in active use and frequently accessed. Highest storage cost, lowest access/read cost.",
          "Cool Tier: For infrequently accessed data stored for at least 30 days. Lower storage cost, higher access cost.",
          "Cold Tier: For rarely accessed data stored for at least 90 days. Very low storage cost, higher access cost.",
          "Archive Tier: Lowest storage cost, highest access/retrieval cost. Data is stored offline for long-term compliance (minimum 180 days) and requires hours of rehydration before it can be read."
        ]
      }
    ],
    example: {
      title: "TIERING LIFECYCLE STRATEGY",
      traditional:
        "Month 1 (Active invoice creation) → Hot Tier (fast, low-cost reads).",
      cloud:
        "Months 2–6 (Infrequent audit review) → Cool Tier | Years 1–7 (Tax compliance hold) → Archive Tier ($0.00099/GB/mo)."
    },
    concepts: [
      {
        number: "01",
        title: "Block Blobs",
        description: "Unstructured object storage for files, media, backups, and data lakes."
      },
      {
        number: "02",
        title: "Hot vs Cool vs Cold",
        description: "Online tiers offering millisecond retrieval with tiered storage/access price tradeoffs."
      },
      {
        number: "03",
        title: "Archive Tier",
        description: "Cheapest offline storage for multi-year compliance requiring hours to rehydrate."
      }
    ],
    quiz: {
      question: "Which Azure Blob Storage access tier offers the lowest storage cost per gigabyte but requires several hours of rehydration before data can be read?",
      answers: [
        { id: "A", text: "Archive Tier", correct: true },
        { id: "B", text: "Hot Tier", correct: false },
        { id: "C", text: "Cool Tier", correct: false },
        { id: "D", text: "Cold Tier", correct: false }
      ],
      explanation: "The Archive tier has the lowest storage cost but stores data in an offline state requiring hours to rehydrate back to an online tier before reading."
    }
  },
  {
    id: 20,
    title: "5.2 Azure Files, Queue, Table & Redundancy",
    category: "Storage & Data",
    duration: "11 min",
    intro:
      "Master Azure Files (SMB/NFS), Queue Storage, Table Storage, and storage redundancy options: LRS, ZRS, GRS, and GZRS.",
    keyIdea:
      "LRS replicates within 1 datacenter (11 nines); ZRS replicates across 3 zones (12 nines); GRS replicates to a paired region (16 nines).",
    sections: [
      {
        heading: "Other Azure Storage Services",
        paragraphs: [
          "Azure Files: Fully managed cloud file shares accessible via standard SMB 3.0 and NFS 4.1 protocols. Can be mounted concurrently by Windows, Linux, and macOS VMs like a network drive.",
          "Azure Queue Storage: Simple, asynchronous message queuing service for decoupling web frontends from backend background worker VMs.",
          "Azure Table Storage: Cost-effective, schemaless NoSQL key-value store for storing structured non-relational dataset properties."
        ]
      },
      {
        heading: "Storage Redundancy Comparison",
        paragraphs: [
          "LRS (Locally Redundant Storage): 3 copies in a single datacenter in one region (99.999999999% / 11 nines durability). Vulnerable to datacenter fire/flood.",
          "ZRS (Zone-Redundant Storage): 3 copies across 3 separate Availability Zones in one region (12 nines durability). Resilient against datacenter loss.",
          "GRS (Geo-Redundant Storage): LRS (3 copies) in primary region + replicated asynchronously to secondary paired region (6 total copies, 16 nines durability).",
          "GZRS (Geo-Zone-Redundant Storage): ZRS (3 zones) in primary region + replicated asynchronously to secondary paired region (16 nines durability)."
        ]
      }
    ],
    example: {
      title: "REDUNDANCY SELECTION",
      traditional:
        "Development dev/test storage → Locally Redundant Storage (LRS) for lowest price.",
      cloud:
        "Mission-critical banking backups → Geo-Zone-Redundant Storage (GZRS) for multi-zone and multi-region disaster recovery."
    },
    concepts: [
      {
        number: "01",
        title: "Azure Files (SMB/NFS)",
        description: "Managed network file shares mountable by multiple VMs concurrently."
      },
      {
        number: "02",
        title: "LRS vs ZRS vs GRS",
        description: "LRS = 1 datacenter; ZRS = 3 zones in 1 region; GRS = 2 paired regions."
      },
      {
        number: "03",
        title: "Queue Storage",
        description: "Decouples application components through reliable asynchronous messaging."
      }
    ],
    quiz: {
      question: "Which Azure Storage redundancy option replicates your data synchronously across three separate Availability Zones within the primary region?",
      answers: [
        { id: "A", text: "Zone-Redundant Storage (ZRS)", correct: true },
        { id: "B", text: "Locally Redundant Storage (LRS)", correct: false },
        { id: "C", text: "Geo-Redundant Storage (GRS)", correct: false },
        { id: "D", text: "Archive Redundant Storage", correct: false }
      ],
      explanation: "Zone-Redundant Storage (ZRS) writes data synchronously across three distinct Availability Zones in the primary region."
    }
  },
  {
    id: 21,
    title: "6.1 Azure SQL Database & Azure Cosmos DB",
    category: "Storage & Data",
    duration: "10 min",
    intro:
      "Understand Azure relational databases (Azure SQL Database, SQL Managed Instance, SQL on VM) and globally distributed NoSQL (Azure Cosmos DB).",
    keyIdea:
      "Azure SQL provides fully managed relational SQL with ACID compliance; Cosmos DB provides globally distributed multi-model NoSQL with single-digit millisecond latency.",
    sections: [
      {
        heading: "Azure SQL Deployment Options",
        paragraphs: [
          "Azure SQL Database: Fully managed DBaaS relational engine with automatic patching, AI query tuning, automated backups, and 99.99% availability.",
          "Azure SQL Managed Instance: Nearly 100% compatible SQL Server instance designed for seamless lift-and-shift migration of legacy on-premises SQL databases with native VNet integration.",
          "SQL Server on Azure VM (IaaS): Full OS administrative access to SQL Server for specialized custom OS configurations or legacy third-party dependencies."
        ]
      },
      {
        heading: "Azure Cosmos DB (NoSQL)",
        paragraphs: [
          "Globally distributed, multi-model NoSQL database service offering single-digit millisecond read/write latency at any scale.",
          "Multi-API Support: Access data using Core (SQL), MongoDB, Apache Cassandra, Gremlin (Graph), and Azure Table APIs.",
          "Turnkey Global Distribution: Replicate data across any number of Azure regions worldwide with a single click and 99.999% SLA."
        ]
      }
    ],
    example: {
      title: "DATABASE COMPARISON",
      traditional:
        "Relational Banking Transactions → Azure SQL Database (Strict relational schema, ACID consistency, complex SQL joins).",
      cloud:
        "Global Mobile Gaming Leaderboard → Azure Cosmos DB (Millions of global player JSON profiles, sub-10ms response times worldwide)."
    },
    concepts: [
      {
        number: "01",
        title: "Azure SQL Database",
        description: "PaaS relational database with automated backups, scaling, and patching."
      },
      {
        number: "02",
        title: "SQL Managed Instance",
        description: "Enterprise lift-and-shift migration for on-premises SQL Server instances."
      },
      {
        number: "03",
        title: "Azure Cosmos DB",
        description: "Globally distributed NoSQL with multi-model APIs and 99.999% SLA."
      }
    ],
    quiz: {
      question: "Which Azure database service is designed for globally distributed applications requiring multi-model NoSQL APIs and guaranteed single-digit millisecond latency?",
      answers: [
        { id: "A", text: "Azure Cosmos DB", correct: true },
        { id: "B", text: "Azure SQL Database", correct: false },
        { id: "C", text: "Azure Table Storage Basic", correct: false },
        { id: "D", text: "SQL Server on Azure VM", correct: false }
      ],
      explanation: "Azure Cosmos DB is a globally distributed, multi-model NoSQL database platform providing single-digit millisecond latency guarantees."
    }
  },
  {
    id: 22,
    title: "7.1 Microsoft Entra ID, AuthN vs AuthZ & MFA",
    category: "Identity & Security",
    duration: "11 min",
    intro:
      "Explore Microsoft Entra ID (formerly Azure Active Directory), identity fundamentals, Authentication vs Authorization, Single Sign-On (SSO), and Multifactor Authentication (MFA).",
    keyIdea:
      "Authentication proves WHO you are (AuthN); Authorization determines WHAT you are allowed to do (AuthZ).",
    sections: [
      {
        heading: "Microsoft Entra ID Core Capabilities",
        paragraphs: [
          "Microsoft Entra ID: Cloud identity and access management service providing centralized identity management for Azure, Microsoft 365, and thousands of SaaS apps.",
          "Authentication (AuthN): Verifies the identity of a person or device (e.g. usernames, passwords, biometrics, Single Sign-On).",
          "Authorization (AuthZ): Determines what resources and operations an authenticated user has permission to access (e.g. Azure RBAC roles).",
          "Single Sign-On (SSO): Authenticate once with Entra ID to access all authorized cloud and on-prem applications without re-entering credentials.",
          "Multifactor Authentication (MFA): Requires two or more distinct verification factors: Something you know (password/PIN), Something you have (phone/FIDO key), and Something you are (fingerprint/facial scan)."
        ]
      }
    ],
    example: {
      title: "AUTHN VS AUTHZ IN PRACTICE",
      traditional:
        "Authentication: Swiping your corporate badge and scanning your fingerprint at the front door to enter the building.",
      cloud:
        "Authorization: Your badge opening the Engineering lab door while keeping the Executive finance vault locked."
    },
    concepts: [
      {
        number: "01",
        title: "Microsoft Entra ID",
        description: "Centralized cloud identity, SSO, and user/group access management."
      },
      {
        number: "02",
        title: "AuthN vs AuthZ",
        description: "Authentication = Identity verification; Authorization = Permissions enforcement."
      },
      {
        number: "03",
        title: "MFA (3 Factors)",
        description: "Something you know, something you have, and something you are."
      }
    ],
    quiz: {
      question: "Which term describes the process of verifying a user's identity using credentials such as a password and MFA token?",
      answers: [
        { id: "A", text: "Authentication (AuthN)", correct: true },
        { id: "B", text: "Authorization (AuthZ)", correct: false },
        { id: "C", text: "Accounting", correct: false },
        { id: "D", text: "Depreciation", correct: false }
      ],
      explanation: "Authentication is the process of establishing and proving the identity of a user or system."
    }
  },
  {
    id: 23,
    title: "7.2 Conditional Access & Azure RBAC Scopes",
    category: "Identity & Security",
    duration: "10 min",
    intro:
      "Deep dive into Microsoft Entra Conditional Access policies and Azure Role-Based Access Control (RBAC) across the 4 governance scopes.",
    keyIdea:
      "Conditional Access evaluates real-time signals (If-Then rules); Azure RBAC enforces least privilege access at Management Group, Subscription, Resource Group, or Resource scopes.",
    sections: [
      {
        heading: "Microsoft Entra Conditional Access",
        paragraphs: [
          "Conditional Access acts as an intelligent policy engine using 'If-Then' decision rules based on signals: User/Group membership, Named IP Location (e.g. block logins outside home country), Device compliance status, and Real-time User Risk level.",
          "Actions enforced: Require MFA, require a compliant corporate device, or block access entirely."
        ]
      },
      {
        heading: "Azure Role-Based Access Control (RBAC)",
        paragraphs: [
          "Enforces the Principle of Least Privilege: Grant identities ONLY the exact permissions required to perform their job duties.",
          "Core Built-In Roles: Owner (Full access + can grant permissions to others), Contributor (Full access to manage resources + cannot grant permissions), Reader (View only).",
          "The 4 Scopes (Inherited downward): Management Group → Subscription → Resource Group → Individual Resource."
        ]
      }
    ],
    example: {
      title: "RBAC SCOPE INHERITANCE",
      traditional:
        "Assign 'Contributor' at Subscription level → User can modify EVERY resource group and VM in the entire subscription.",
      cloud:
        "Assign 'Virtual Machine Contributor' at Resource Group 'Dev-RG' → User can restart dev VMs only, with zero access to production."
    },
    concepts: [
      {
        number: "01",
        title: "Conditional Access",
        description: "Signal-based access evaluation (User, Location, Device) enforcing MFA or blocking access."
      },
      {
        number: "02",
        title: "Principle of Least Privilege",
        description: "Granting only minimum necessary permissions to minimize security risk."
      },
      {
        number: "03",
        title: "RBAC Scopes",
        description: "Management Group → Subscription → Resource Group → Resource."
      }
    ],
    quiz: {
      question: "If a user is assigned the 'Reader' role at the Subscription scope, what permissions do they have on a Virtual Machine inside a Resource Group in that subscription?",
      answers: [
        { id: "A", text: "Read-only permission to view the VM configuration (inherited from Subscription)", correct: true },
        { id: "B", text: "Full administrative Owner access to delete the VM", correct: false },
        { id: "C", text: "Permission to restart and resize the VM", correct: false },
        { id: "D", text: "Zero access until explicitly granted at the VM level", correct: false }
      ],
      explanation: "Azure RBAC permissions inherit downward through the hierarchy. A role assigned at the Subscription level applies automatically to all child Resource Groups and Resources."
    }
  },
  {
    id: 24,
    title: "8.1 Defense in Depth, Defender for Cloud & Sentinel",
    category: "Identity & Security",
    duration: "11 min",
    intro:
      "Explore the 7 layers of Defense in Depth, cloud security posture management with Microsoft Defender for Cloud, and SIEM threat response with Microsoft Sentinel.",
    keyIdea:
      "Defense in Depth uses layered controls (Physical → Identity → Perimeter → Network → Compute → App → Data); Defender provides security posture and Secure Score; Sentinel is a cloud-native SIEM/SOAR.",
    sections: [
      {
        heading: "The 7 Layers of Defense in Depth",
        paragraphs: [
          "A multi-layered defense strategy ensuring that if one security barrier is breached, subsequent layers prevent attackers from accessing corporate data: Physical Security → Identity & Access → Perimeter (DDoS/Firewall) → Network (NSGs/VNets) → Compute (OS patching/endpoint protection) → Application (WAF/API security) → Data (Encryption at rest/in transit)."
        ]
      },
      {
        heading: "Defender for Cloud vs Microsoft Sentinel",
        paragraphs: [
          "Microsoft Defender for Cloud: Cloud Security Posture Management (CSPM) and Cloud Workload Protection (CWPP). Calculates your organization's 'Secure Score' and provides prioritized remediation recommendations.",
          "Microsoft Sentinel: Cloud-native Security Information and Event Management (SIEM) and Security Orchestration Automated Response (SOAR). Ingests security event logs across hybrid clouds, analyzes threats with AI, and automates incident response."
        ]
      }
    ],
    example: {
      title: "SECURITY TOOLS COMPARISON",
      traditional:
        "Defender for Cloud: Alerts you that 12 VMs are missing critical OS security patches and that storage accounts have public access enabled (Secure Score: 62%).",
      cloud:
        "Microsoft Sentinel: Detects an adversary executing a brute-force SSH attack across 30 worldwide servers and triggers an automated playbook to block the attacker's IP."
    },
    concepts: [
      {
        number: "01",
        title: "Defense in Depth",
        description: "7 layered security rings protecting customer data from unauthorized access."
      },
      {
        number: "02",
        title: "Defender for Cloud",
        description: "Continuous posture assessment, workload protection, and Secure Score metrics."
      },
      {
        number: "03",
        title: "Microsoft Sentinel",
        description: "Cloud-native SIEM & SOAR for intelligent threat detection and automated response."
      }
    ],
    quiz: {
      question: "Which service acts as a cloud-native Security Information and Event Management (SIEM) platform to aggregate security telemetry and automate threat response across hybrid enterprises?",
      answers: [
        { id: "A", text: "Microsoft Sentinel", correct: true },
        { id: "B", text: "Azure Files", correct: false },
        { id: "C", text: "Azure Pricing Calculator", correct: false },
        { id: "D", text: "Azure Resource Locks", correct: false }
      ],
      explanation: "Microsoft Sentinel is Microsoft's cloud-native SIEM and SOAR solution for enterprise threat intelligence and incident response."
    }
  },
  {
    id: 25,
    title: "8.2 Azure Key Vault & DDoS Protection",
    category: "Identity & Security",
    duration: "9 min",
    intro:
      "Discover how Azure Key Vault securely stores cryptographic keys, passwords, and certificates, and how Azure DDoS Protection mitigates network flood attacks.",
    keyIdea:
      "Azure Key Vault centralized secret management eliminates hardcoded passwords in application source code; DDoS Protection defends against Layer 3/4 volumetric attacks.",
    sections: [
      {
        heading: "Azure Key Vault Capabilities",
        paragraphs: [
          "Secrets Management: Securely stores database connection strings, passwords, and API tokens backed by FIPS-validated Hardware Security Modules (HSMs).",
          "Key Management: Create and control cryptographic encryption keys used to encrypt data at rest across Azure services.",
          "Certificate Management: Provision, manage, and auto-renew TLS/SSL certificates for web applications.",
          "Application Integration: Code references secret URIs instead of hardcoding credentials in git repositories."
        ]
      },
      {
        heading: "Azure DDoS Protection",
        paragraphs: [
          "Protects applications from Distributed Denial of Service (DDoS) flood attacks targeting network bandwidth and TCP/UDP sockets.",
          "DDoS Network Protection: Provides dedicated monitoring and adaptive tuning tailored to your specific application traffic patterns with cost protection guarantees against scaling spikes during an attack."
        ]
      }
    ],
    example: {
      title: "SECURITY BEST PRACTICE",
      traditional:
        "Insecure: Storing database password `db_pass='Secret123!'` in plain text inside appsettings.json in a public GitHub repo.",
      cloud:
        "Secure: Application queries `https://myvault.vault.azure.net/secrets/dbpass` using a Managed Identity with zero credentials in code."
    },
    concepts: [
      {
        number: "01",
        title: "Azure Key Vault",
        description: "Centralized HSM-backed store for secrets, encryption keys, and SSL certificates."
      },
      {
        number: "02",
        title: "Managed Identities",
        description: "Enables Azure resources to authenticate with Key Vault without storing credentials in code."
      },
      {
        number: "03",
        title: "DDoS Protection",
        description: "Defends against Layer 3 and Layer 4 volumetric flood attacks."
      }
    ],
    quiz: {
      question: "Which Azure service should developers use to securely store database connection strings and TLS certificates without embedding secrets in application source code?",
      answers: [
        { id: "A", text: "Azure Key Vault", correct: true },
        { id: "B", text: "Azure Blob Storage public container", correct: false },
        { id: "C", text: "Azure ExpressRoute", correct: false },
        { id: "D", text: "Network Security Group", correct: false }
      ],
      explanation: "Azure Key Vault is the recommended secure repository for application secrets, cryptographic keys, and certificates."
    }
  },
  {
    id: 26,
    title: "9.1 Azure Policy, Resource Locks & Tags",
    category: "Governance & Management",
    duration: "10 min",
    intro:
      "Explore core Azure governance tools: Azure Policy for compliance guardrails, Resource Locks to prevent accidental deletion, and Metadata Tags for cost tracking.",
    keyIdea:
      "RBAC controls WHO has access; Azure Policy controls WHAT properties resources can have; Resource Locks PREVENT deletion or edits regardless of permissions.",
    sections: [
      {
        heading: "Azure Policy",
        paragraphs: [
          "Enforces organizational standards and compliance rules at scale across subscriptions.",
          "Evaluates resource configurations during creation and flags or denies non-compliant deployments (e.g. 'Allowed virtual machine SKUs', 'Allowed locations', 'Require a tag and its value')."
        ]
      },
      {
        heading: "Resource Locks",
        paragraphs: [
          "ReadOnly (Read-Only): Authorized users can read a resource, but cannot modify or delete it.",
          "CanNotDelete (Delete): Authorized users can read and modify a resource, but cannot delete it.",
          "Locks apply to all users, including Subscription Owners, until explicitly unlocked."
        ]
      },
      {
        heading: "Resource Tags",
        paragraphs: [
          "Name-value metadata pairs applied to resources (e.g. `Department: Finance`, `Environment: Production`) used to organize resources logically and filter departmental billing in Cost Management."
        ]
      }
    ],
    example: {
      title: "GOVERNANCE SCENARIO",
      traditional:
        "Azure Policy: Automatically blocks developers from spinning up expensive 128-core GPU VMs in unauthorized regions.",
      cloud:
        "Resource Lock: A CanNotDelete lock on a production SQL database prevents an administrator from accidentally deleting it during late-night maintenance."
    },
    concepts: [
      {
        number: "01",
        title: "Azure Policy",
        description: "Enforces rules on resource properties (allowed sizes, regions, required tags)."
      },
      {
        number: "02",
        title: "Resource Locks",
        description: "CanNotDelete (allows edits, blocks deletion) and ReadOnly (blocks edits & deletion)."
      },
      {
        number: "03",
        title: "Tags",
        description: "Key-value metadata applied for cost allocation, billing reports, and automation."
      }
    ],
    quiz: {
      question: "Which governance tool should you configure to prevent administrators from accidentally deleting a mission-critical Azure Cosmos DB account while still allowing them to modify database data?",
      answers: [
        { id: "A", text: "A 'CanNotDelete' (Delete) Resource Lock", correct: true },
        { id: "B", text: "A 'ReadOnly' Resource Lock", correct: false },
        { id: "C", text: "An Azure Advisor recommendation", correct: false },
        { id: "D", text: "A Network Security Group rule", correct: false }
      ],
      explanation: "A 'CanNotDelete' resource lock allows authorized users to read and update resources while blocking any deletion requests until the lock is removed."
    }
  },
  {
    id: 27,
    title: "10.1 Management Tools: Portal, Cloud Shell, CLI & PowerShell",
    category: "Governance & Management",
    duration: "10 min",
    intro:
      "Compare the official tools for interacting with and automating Microsoft Azure: Azure Portal, Azure Cloud Shell, Azure CLI, and Azure PowerShell.",
    keyIdea:
      "All management tools communicate through the unified Azure Resource Manager (ARM) API, ensuring consistent RBAC and policy enforcement.",
    sections: [
      {
        heading: "Comparing Azure Management Tools",
        paragraphs: [
          "Azure Portal: Web-based graphical user interface (portal.azure.com) for visual management, interactive charts, and exploratory configuration.",
          "Azure Cloud Shell: Browser-accessible, pre-authenticated terminal inside the portal offering both Bash (with Azure CLI) and PowerShell (with Az module) backed by persistent storage.",
          "Azure CLI (`az`): Cross-platform command-line tool using concise command syntax (`az vm create`) outputting structured JSON.",
          "Azure PowerShell (`Az`): Windows/Linux/Mac PowerShell module using Verb-Noun cmdlets (`New-AzVM`) returning .NET pipeline objects."
        ]
      }
    ],
    example: {
      title: "COMMAND LINE SYNTAX COMPARISON",
      traditional:
        "Azure CLI (Bash): `az group create --name MyRG --location eastus`",
      cloud:
        "Azure PowerShell: `New-AzResourceGroup -Name 'MyRG' -Location 'eastus'`"
    },
    concepts: [
      {
        number: "01",
        title: "Azure Portal",
        description: "Web GUI ideal for beginners, visual dashboards, and one-off administrative checks."
      },
      {
        number: "02",
        title: "Azure Cloud Shell",
        description: "Browser terminal pre-configured with Azure CLI, PowerShell, and persistent storage."
      },
      {
        number: "03",
        title: "CLI vs PowerShell",
        description: "Azure CLI uses `az` commands (JSON); PowerShell uses `Verb-Noun` cmdlets (.NET objects)."
      }
    ],
    quiz: {
      question: "Which Azure management tool provides a browser-based command line that comes pre-authenticated with Azure CLI and PowerShell without installing software locally?",
      answers: [
        { id: "A", text: "Azure Cloud Shell", correct: true },
        { id: "B", text: "Visual Studio Community edition", correct: false },
        { id: "C", text: "Windows Hyper-V Manager", correct: false },
        { id: "D", text: "Microsoft Sentinel", correct: false }
      ],
      explanation: "Azure Cloud Shell is an interactive, browser-accessible terminal that is pre-authenticated with your Azure subscription context."
    }
  },
  {
    id: 28,
    title: "10.2 ARM, Bicep & Infrastructure as Code",
    category: "Governance & Management",
    duration: "10 min",
    intro:
      "Explore Azure Resource Manager (ARM), declarative deployments, ARM JSON Templates, and modern Microsoft Bicep for repeatable Infrastructure as Code (IaC).",
    keyIdea:
      "ARM is the unified management control plane. Bicep and ARM templates enable declarative, version-controlled, idempotent infrastructure deployments.",
    sections: [
      {
        heading: "Azure Resource Manager (ARM)",
        paragraphs: [
          "ARM is the central management layer in Azure. Every request from the Portal, CLI, PowerShell, or SDKs passes through ARM, which verifies authentication (Entra ID), checks authorization (RBAC), and enforces compliance (Azure Policy) before provisioning resources."
        ]
      },
      {
        heading: "Infrastructure as Code (IaC) with Bicep",
        paragraphs: [
          "Declarative Syntax: You declare WHAT infrastructure you want (e.g. 1 VNet, 2 VMs), and ARM figures out how to deploy dependencies in the correct order.",
          "Idempotency: Running the same deployment template multiple times results in the exact same environment without creating duplicate resources.",
          "Bicep: Microsoft's modern, clean domain-specific language that transpiles directly into ARM JSON templates with simpler syntax, type safety, and automatic dependency resolution."
        ]
      }
    ],
    example: {
      title: "BICEP TEMPLATE SNIPPET",
      traditional:
        "ARM JSON: 40 lines of verbose brackets, schemas, and parameters.",
      cloud:
        "Bicep: `resource storage 'Microsoft.Storage/storageAccounts@2023-01-01' = { name: 'appdata2026' location: 'eastus' sku: { name: 'Standard_LRS' } kind: 'StorageV2' }`"
    },
    concepts: [
      {
        number: "01",
        title: "Azure Resource Manager (ARM)",
        description: "Central management plane enforcing RBAC, Policy, and orchestrating deployments."
      },
      {
        number: "02",
        title: "Infrastructure as Code (IaC)",
        description: "Repeatable, automated, version-controlled declarative infrastructure deployment."
      },
      {
        number: "03",
        title: "Microsoft Bicep",
        description: "Modern, concise domain-specific language for authoring Azure infrastructure."
      }
    ],
    quiz: {
      question: "Which statement best describes the benefit of using Microsoft Bicep or ARM templates to deploy Azure infrastructure?",
      answers: [
        { id: "A", text: "They provide declarative, repeatable, and automated deployments with version control", correct: true },
        { id: "B", text: "They eliminate all Azure subscription billing charges", correct: false },
        { id: "C", text: "They replace the need for Microsoft Entra ID", correct: false },
        { id: "D", text: "They allow VMs to run without operating systems", correct: false }
      ],
      explanation: "Bicep and ARM templates provide declarative Infrastructure as Code (IaC) that ensures consistent, repeatable, and error-free deployments across environments."
    }
  },
  {
    id: 29,
    title: "11.1 Azure Monitor, Application Insights & Service Health",
    category: "Monitoring & Optimization",
    duration: "11 min",
    intro:
      "Gain full observability over your cloud resources using Azure Monitor, Application Insights, Log Analytics workspaces, and Azure Service Health.",
    keyIdea:
      "Azure Status is global; Service Health is personalized to your subscriptions; Resource Health tracks individual instances; App Insights tracks code telemetry.",
    sections: [
      {
        heading: "Azure Observability Platform",
        paragraphs: [
          "Azure Monitor: Central platform collecting Metrics (real-time numerical values for fast alerting) and Logs (structured textual diagnostic records) across applications, VMs, and subscriptions.",
          "Application Insights: Application Performance Monitoring (APM) tool for developers that detects crashes, slow HTTP responses, exception stack traces, and database dependency bottlenecks in live code.",
          "Log Analytics: Workspace where telemetry is indexed and queried using Kusto Query Language (KQL)."
        ]
      },
      {
        heading: "Health Dashboard Hierarchy",
        paragraphs: [
          "Azure Status: Public global webpage (status.azure.com) showing worldwide service availability.",
          "Azure Service Health: Personalized portal view showing outages, planned maintenance, and health advisories affecting YOUR specific subscriptions.",
          "Azure Resource Health: Deep diagnostics for a specific resource instance (e.g. why VM 'Web01' stopped responding)."
        ]
      }
    ],
    example: {
      title: "HEALTH DASHBOARD DISTINCTIONS",
      traditional:
        "Azure Status: Global outage report on Azure SQL across West Europe region.",
      cloud:
        "Azure Service Health: 'Your subscription in East US has planned host maintenance on Saturday at 2 AM.' | Resource Health: 'VM-App01 is healthy and running.'"
    },
    concepts: [
      {
        number: "01",
        title: "Azure Monitor Metrics vs Logs",
        description: "Metrics = real-time numbers for fast alerts; Logs = rich records queried via KQL."
      },
      {
        number: "02",
        title: "Application Insights (APM)",
        description: "Live code performance tracking, exception diagnostics, and dependency maps."
      },
      {
        number: "03",
        title: "Service Health vs Status",
        description: "Azure Status is public/global; Service Health is personalized to your active subscriptions."
      }
    ],
    quiz: {
      question: "Which monitoring tool provides a personalized dashboard inside the Azure Portal notifying you about outages, planned maintenance, and service advisories affecting your specific subscriptions?",
      answers: [
        { id: "A", text: "Azure Service Health", correct: true },
        { id: "B", text: "Public Azure Status webpage", correct: false },
        { id: "C", text: "Azure Pricing Calculator", correct: false },
        { id: "D", text: "Azure Key Vault", correct: false }
      ],
      explanation: "Azure Service Health delivers personalized notifications and guidance when Azure platform service issues, planned maintenance, or health advisories affect your subscriptions."
    }
  },
  {
    id: 30,
    title: "12.1 Azure Advisor",
    category: "Monitoring & Optimization",
    duration: "8 min",
    intro:
      "Azure Advisor is a personalized cloud consultant that analyzes your configurations and usage telemetry to provide proactive best-practice recommendations.",
    keyIdea:
      "Azure Advisor evaluates your environment across the 5 pillars of the Well-Architected Framework: Cost, Security, Reliability, Performance, and Operational Excellence.",
    sections: [
      {
        heading: "The 5 Pillars of Azure Advisor",
        paragraphs: [
          "1. Cost: Identifies idle or underutilized resources (e.g. shutting down unattached disks or downsizing low-CPU virtual machines to save money).",
          "2. Security: Integrates with Microsoft Defender for Cloud to recommend MFA enablement, NSG rule tightening, and vulnerability remediation.",
          "3. Reliability (High Availability): Recommends deploying VMs across Availability Zones and configuring backup replication.",
          "4. Performance: Suggests database query index tuning, Redis caching, and scaling bottlenecks.",
          "5. Operational Excellence: Recommends service health alert setups and Azure Resource Manager template best practices."
        ]
      }
    ],
    example: {
      title: "ADVISOR RECOMMENDATION EXAMPLE",
      traditional:
        "Manual Audit: A sysadmin manually checking 200 VMs in Excel spreadsheets once a quarter to find idle instances.",
      cloud:
        "Azure Advisor: Automatically alerts: 'Resize 4 underutilized D8s_v4 VMs to D2s_v4 to save $680/month with 1 click.'"
    },
    concepts: [
      {
        number: "01",
        title: "5 Advisor Pillars",
        description: "Cost, Security, Reliability, Performance, and Operational Excellence."
      },
      {
        number: "02",
        title: "Cost Optimization",
        description: "Recommends reserved instances, savings plans, and right-sizing underutilized compute."
      },
      {
        number: "03",
        title: "Reliability Guidance",
        description: "Recommends multi-zone deployments and backup configurations."
      }
    ],
    quiz: {
      question: "Which Azure service analyzes your usage telemetry and provides actionable recommendations to optimize costs, enhance security, and improve workload reliability?",
      answers: [
        { id: "A", text: "Azure Advisor", correct: true },
        { id: "B", text: "Azure Files", correct: false },
        { id: "C", text: "Azure Table Storage", correct: false },
        { id: "D", text: "Azure Front Door", correct: false }
      ],
      explanation: "Azure Advisor analyzes your configurations and usage telemetry across Cost, Security, Reliability, Performance, and Operational Excellence to recommend optimizations."
    }
  },
  {
    id: 31,
    title: "13.1 Cost Management, Pricing & TCO Calculators",
    category: "Governance & Management",
    duration: "11 min",
    intro:
      "Master cloud financial management: factors affecting costs, Azure Pricing Calculator vs Total Cost of Ownership (TCO) Calculator, budgets, and cost alerts.",
    keyIdea:
      "Pricing Calculator estimates FUTURE monthly Azure costs; TCO Calculator compares on-premises datacenter costs vs migrating to Azure; Cost Management tracks ACTIVE spend.",
    sections: [
      {
        heading: "Factors Influencing Azure Costs",
        paragraphs: [
          "Resource Type and Size: VM CPU/RAM tiers, storage capacity, and database service tiers.",
          "Region: Operating costs vary geographically across worldwide Azure datacenters.",
          "Inbound vs Outbound Data Transfer: Inbound data transfer (data ingress into Azure) is FREE. Outbound data transfer (data egress out of Azure) is charged per GB.",
          "Billing Options: Pay-as-you-go, Azure Reserved Instances (1 or 3-year commitment for up to 72% discount), and Azure Hybrid Benefit (reusing on-prem Windows Server / SQL Server licenses in Azure)."
        ]
      },
      {
        heading: "Pricing Calculator vs TCO Calculator",
        paragraphs: [
          "Azure Pricing Calculator: Tool to configure and estimate the projected monthly cost of new Azure services before deploying them.",
          "Total Cost of Ownership (TCO) Calculator: Tool to estimate cost savings when migrating existing on-premises datacenter workloads (server hardware, power, cooling, datacenter real estate, labor) to Azure over a 3–5 year horizon.",
          "Azure Cost Management + Billing: Portal tool to monitor active spending, analyze departmental costs with tags, and configure monthly budgets with automated email alerts."
        ]
      }
    ],
    example: {
      title: "FINANCIAL PLANNING TOOLS",
      traditional:
        "TCO Calculator: 'Migrating your 50 on-premise VMware servers to Azure will save $320,000 in hardware replacement and power costs over 3 years.'",
      cloud:
        "Pricing Calculator: 'Deploying 3 App Services and 1 Azure SQL Database in East US will cost approximately $214 per month.'"
    },
    concepts: [
      {
        number: "01",
        title: "Azure Pricing Calculator",
        description: "Estimates expected monthly cost of proposed new Azure architectures."
      },
      {
        number: "02",
        title: "TCO Calculator",
        description: "Compares current on-premises datacenter costs with Azure migration savings."
      },
      {
        number: "03",
        title: "Cost Management & Budgets",
        description: "Tracks active consumption, sets departmental budgets, and sends threshold alerts."
      }
    ],
    quiz: {
      question: "Which tool should a Chief Financial Officer use to evaluate the potential cost savings of migrating an existing 100-server on-premises datacenter to Microsoft Azure over a 5-year period?",
      answers: [
        { id: "A", text: "Total Cost of Ownership (TCO) Calculator", correct: true },
        { id: "B", text: "Azure Pricing Calculator only", correct: false },
        { id: "C", text: "Azure Monitor Logs", correct: false },
        { id: "D", text: "Azure Sentinel", correct: false }
      ],
      explanation: "The Total Cost of Ownership (TCO) Calculator is specifically designed to calculate cost savings when comparing on-premises datacenter operating expenses against cloud migration."
    }
  },
  {
    id: 32,
    title: "14.1 Azure SLAs, Reliability, Compliance & Support Plans",
    category: "Governance & Management",
    duration: "11 min",
    intro:
      "Understand Service Level Agreements (SLAs), SLA mathematics, Composite SLAs, RPO/RTO reliability metrics, Trust Center, Service Trust Portal, and Support Plans.",
    keyIdea:
      "99.9% = 8.76 hrs/yr downtime; 99.99% = 52.56 min/yr downtime; Composite SLA = multiplying individual SLAs. Standard Support is the entry tier for 24/7 production help.",
    sections: [
      {
        heading: "SLA Mathematics & Composite SLAs",
        paragraphs: [
          "Service Level Agreement (SLA): Microsoft's formal commitment detailing performance and uptime. If uptime drops below the guaranteed SLA, Microsoft provides financial Service Credits.",
          "Downtime Calculations: 99.9% ('three nines') = maximum 8.76 hours downtime/year. 99.99% ('four nines') = maximum 52.56 minutes downtime/year. 99.999% ('five nines') = maximum 5.26 minutes downtime/year.",
          "Composite SLA: When two services operate in series (e.g. Web App at 99.95% + SQL DB at 99.99%), the composite SLA is `0.9995 * 0.9999 = 99.94%`."
        ]
      },
      {
        heading: "Reliability & Compliance",
        paragraphs: [
          "RPO (Recovery Point Objective): The maximum acceptable data loss measured in time (e.g. losing 15 minutes of transactional data).",
          "RTO (Recovery Time Objective): The maximum acceptable downtime before the application must be restored.",
          "Service Trust Portal: Central portal where compliance officers download independent third-party SOC, ISO, HIPAA, and PCI-DSS audit reports.",
          "Support Plans: Basic (Free, billing support only) → Developer ($29/mo, business hours non-production) → Standard ($100/mo, 24/7 technical support for production, <1 hr Sev A response) → Professional Direct ($1000/mo, designated delivery manager and architecture reviews)."
        ]
      }
    ],
    example: {
      title: "SUPPORT PLAN COMPARISON",
      traditional:
        "Developer Support: Business hours email support only for trial/development testing.",
      cloud:
        "Standard Support: 24/7 phone & email access to Cloud Support Engineers for critical production outages."
    },
    concepts: [
      {
        number: "01",
        title: "SLA Math",
        description: "Each additional '9' dramatically reduces allowable annual downtime (8.76h vs 52.5m vs 5.2m)."
      },
      {
        number: "02",
        title: "Service Trust Portal",
        description: "Direct access to third-party regulatory compliance audit reports (SOC, ISO, HIPAA)."
      },
      {
        number: "03",
        title: "Azure Support Plans",
        description: "Basic, Developer, Standard (24/7 production), and Professional Direct."
      }
    ],
    quiz: {
      question: "What is the minimum Azure support plan that provides 24/7 technical support access by phone and email for production workloads with under 1 hour response time for critical Severity A issues?",
      answers: [
        { id: "A", text: "Standard Support Plan", correct: true },
        { id: "B", text: "Developer Support Plan", correct: false },
        { id: "C", text: "Basic Support Plan", correct: false },
        { id: "D", text: "Community Forum Support", correct: false }
      ],
      explanation: "The Standard Support plan is the entry-level tier for production workloads providing 24/7 phone and email technical support with <1 hour response times for critical Severity A issues."
    }
  }
];
