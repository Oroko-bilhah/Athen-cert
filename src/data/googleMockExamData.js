
export const googleMockExam60 = [
  {
    id: "gcp-60-1",
    question: "What is the primary definition of cloud computing?",
    domain: "Cloud Concepts",
    answers: [
      { id: "A", text: "The on-demand delivery of compute power, storage, applications, and IT resources via the internet with pay-as-you-go pricing", correct: true },
      { id: "B", text: "Purchasing physical rack servers and storing them in an on-premises datacenter", correct: false },
      { id: "C", text: "Running software strictly from offline optical storage without network connectivity", correct: false },
      { id: "D", text: "Leasing dark fiber cables between enterprise headquarters", correct: false }
    ],
    explanation: "Cloud computing is the on-demand delivery of IT resources (compute, storage, databases, networking) over the internet with pay-as-you-go pricing, eliminating upfront hardware procurement."
  },
  {
    id: "gcp-60-2",
    question: "In which cloud computing model does the customer have the most administrative responsibility, including operating system patching and runtime maintenance?",
    domain: "Cloud Concepts",
    answers: [
      { id: "A", text: "Software as a Service (SaaS)", correct: false },
      { id: "B", text: "Platform as a Service (PaaS)", correct: false },
      { id: "C", text: "Infrastructure as a Service (IaaS)", correct: true },
      { id: "D", text: "Function as a Service (FaaS)", correct: false }
    ],
    explanation: "In IaaS (like Compute Engine), the cloud provider manages physical hardware, cooling, and hypervisors, while the customer is responsible for the guest OS, security patches, runtime, middleware, and application code."
  },
  {
    id: "gcp-60-3",
    question: "How does migrating to Google Cloud fundamentally transform an enterprise's financial model?",
    domain: "Cloud Concepts",
    answers: [
      { id: "A", text: "It converts variable operational expenditures (OpEx) into fixed capital expenditures (CapEx)", correct: false },
      { id: "B", text: "It shifts upfront Capital Expenditures (CapEx) into flexible, ongoing Operational Expenditures (OpEx)", correct: true },
      { id: "C", text: "It eliminates the need for software developers", correct: false },
      { id: "D", text: "It forces 10-year upfront financial depreciation commitments", correct: false }
    ],
    explanation: "Cloud computing replaces large upfront capital investments (CapEx) in data centers and hardware with flexible, monthly pay-as-you-go operating expenses (OpEx)."
  },
  {
    id: "gcp-60-4",
    question: "An enterprise runs sensitive customer data in its own private datacenter while bursting web frontend traffic to Google Cloud during flash sales. Which deployment model is this?",
    domain: "Cloud Concepts",
    answers: [
      { id: "A", text: "Public Cloud only", correct: false },
      { id: "B", text: "Hybrid Cloud", correct: true },
      { id: "C", text: "Community Cloud", correct: false },
      { id: "D", text: "Dark Cloud", correct: false }
    ],
    explanation: "A hybrid cloud combines on-premises private infrastructure with public cloud resources, allowing data and apps to be shared between them."
  },
  {
    id: "gcp-60-5",
    question: "What is the key difference between Scalability and Elasticity in cloud computing?",
    domain: "Cloud Concepts",
    answers: [
      { id: "A", text: "Scalability is vertical only; elasticity is horizontal only", correct: false },
      { id: "B", text: "Scalability handles long-term capacity growth; elasticity dynamically adds or removes resources in real time based on fluctuating demand", correct: true },
      { id: "C", text: "Elasticity requires purchasing hardware in advance", correct: false },
      { id: "D", text: "Scalability only applies to database storage, not compute", correct: false }
    ],
    explanation: "Scalability is the ability to accommodate growing workloads over time. Elasticity is the ability to automatically expand and contract capacity dynamically in response to real-time traffic spikes."
  },
  {
    id: "gcp-60-6",
    question: "When evaluating the Total Cost of Ownership (TCO) of cloud migration versus on-premises, which factor is frequently overlooked in on-premises costs?",
    domain: "Cloud Concepts",
    answers: [
      { id: "A", text: "The cost of application code", correct: false },
      { id: "B", text: "Power, cooling, physical security, real estate, and facilities maintenance staff", correct: true },
      { id: "C", text: "Developer salaries", correct: false },
      { id: "D", text: "Domain name registration fees", correct: false }
    ],
    explanation: "TCO in on-premises data centers includes hidden operational costs such as electricity, backup generators, HVAC cooling, floor space leasing, physical security, and datacenter hardware technician salaries."
  },
  {
    id: "gcp-60-7",
    question: "Which business benefit of cloud computing refers to the ability to rapidly test, deploy, and iterate on new software products without waiting for hardware procurement?",
    domain: "Cloud Concepts",
    answers: [
      { id: "A", text: "Business Agility", correct: true },
      { id: "B", text: "Data Sovereignty", correct: false },
      { id: "C", text: "Hardware Virtualization", correct: false },
      { id: "D", text: "Colocation Parity", correct: false }
    ],
    explanation: "Business agility enables organizations to innovate quickly, launch MVPs in days instead of months, and pivot rapidly based on market feedback."
  },
  {
    id: "gcp-60-8",
    question: "What is the primary characteristic of a Fault-Tolerant cloud architecture?",
    domain: "Cloud Concepts",
    answers: [
      { id: "A", text: "It requires manual server restarts whenever a failure occurs", correct: false },
      { id: "B", text: "It continues operating without human intervention or application downtime even if an underlying hardware component or zone fails", correct: true },
      { id: "C", text: "It guarantees zero financial expenditure", correct: false },
      { id: "D", text: "It only runs during business hours", correct: false }
    ],
    explanation: "Fault tolerance enables a system to maintain uninterrupted operation and zero user-facing downtime despite hardware failures or entire availability zone outages."
  },

  {
    id: "gcp-60-9",
    question: "What is a Google Cloud Region?",
    domain: "GCP Infrastructure",
    answers: [
      { id: "A", text: "A single physical server chassis", correct: false },
      { id: "B", text: "A specific geographical location containing three or more isolated availability zones connected by low-latency private fiber", correct: true },
      { id: "C", text: "A legal billing agreement currency", correct: false },
      { id: "D", text: "A software version release branch", correct: false }
    ],
    explanation: "A Google Cloud Region is an independent geographic area (e.g. us-central1 in Iowa) containing at least three isolated zones with separate power, cooling, and networking."
  },
  {
    id: "gcp-60-10",
    question: "What is the correct top-to-bottom hierarchy of the Google Cloud Resource Hierarchy?",
    domain: "GCP Infrastructure",
    answers: [
      { id: "A", text: "Projects → Folders → Organization → Resources", correct: false },
      { id: "B", text: "Organization → Folders → Projects → Resources", correct: true },
      { id: "C", text: "Resources → Projects → Folders → Organization", correct: false },
      { id: "D", text: "Folders → Organization → Projects → Resources", correct: false }
    ],
    explanation: "The Google Cloud Resource Hierarchy strictly flows from Organization (root) → Folders (departments) → Projects (resource containers & billing boundaries) → Resources (VMs, buckets, datasets)."
  },
  {
    id: "gcp-60-11",
    question: "Which statement is true regarding a Google Cloud Project ID?",
    domain: "GCP Infrastructure",
    answers: [
      { id: "A", text: "It can be modified at any time by the project owner", correct: false },
      { id: "B", text: "It must be globally unique across all Google Cloud customers and is permanently immutable after creation", correct: true },
      { id: "C", text: "It is strictly a 4-digit numeric code", correct: false },
      { id: "D", text: "It is visible only to Google engineers", correct: false }
    ],
    explanation: "A Project ID is a globally unique string chosen at project creation. It can NEVER be changed because it is used across all API calls, IAM bindings, and billing tracking."
  },
  {
    id: "gcp-60-12",
    question: "If an IAM policy granting the 'Security Reviewer' role is applied at the Organization level, what happens at the Project level?",
    domain: "GCP Infrastructure",
    answers: [
      { id: "A", text: "The policy is blocked unless explicitly approved per project", correct: false },
      { id: "B", text: "The permission is automatically inherited by all Folders and Projects under that Organization", correct: true },
      { id: "C", text: "The user loses all permissions on child projects", correct: false },
      { id: "D", text: "The project owner must pay an additional fee per project", correct: false }
    ],
    explanation: "In Google Cloud resource hierarchy, permissions and policies inherit downwards from parent nodes. Permissions granted at the Organization node apply across all child Folders, Projects, and resources."
  },
  {
    id: "gcp-60-13",
    question: "What is the function of Google's global Points of Presence (PoPs) and Edge network?",
    domain: "GCP Infrastructure",
    answers: [
      { id: "A", text: "To store tape backups offline", correct: false },
      { id: "B", text: "To connect end-user internet traffic directly into Google's private software-defined fiber backbone as close to the user as possible", correct: true },
      { id: "C", text: "To manufacture custom computer chips", correct: false },
      { id: "D", text: "To replace local Wi-Fi routers", correct: false }
    ],
    explanation: "Google's hundreds of Edge PoPs worldwide ingest user traffic into Google's high-speed private fiber network at the nearest geographic point, reducing public internet latency and packet loss."
  },
  {
    id: "gcp-60-14",
    question: "What happens to files stored in your Cloud Shell $HOME directory when your Cloud Shell session times out and disconnects?",
    domain: "GCP Infrastructure",
    answers: [
      { id: "A", text: "All files in $HOME are permanently deleted", correct: false },
      { id: "B", text: "Files in $HOME are persistently saved (up to 5 GB) across future sessions", correct: true },
      { id: "C", text: "Files are automatically uploaded to Google Drive", correct: false },
      { id: "D", text: "You are billed $50 per session", correct: false }
    ],
    explanation: "Cloud Shell allocates 5 GB of free persistent disk storage for your $HOME directory, preserving your scripts, configurations, and files across sessions."
  },

  {
    id: "gcp-60-15",
    question: "Which Compute Engine machine family is optimized for workloads requiring heavy GPU acceleration, such as large language model training and deep learning?",
    domain: "Compute Services",
    answers: [
      { id: "A", text: "General-purpose (E2)", correct: false },
      { id: "B", text: "Memory-optimized (M2)", correct: false },
      { id: "C", text: "Accelerator-optimized (A2 / A3 with NVIDIA GPUs)", correct: true },
      { id: "D", text: "Compute-optimized (C2)", correct: false }
    ],
    explanation: "Accelerator-optimized machine families (A2, A3) are built with NVIDIA Tensor Core GPUs specifically for high-performance AI, ML training, and inference."
  },
  {
    id: "gcp-60-16",
    question: "What unique Compute Engine capability allows customers to tailor exact vCPU and RAM ratios rather than choosing rigid fixed instances?",
    domain: "Compute Services",
    answers: [
      { id: "A", text: "Custom Machine Types", correct: true },
      { id: "B", text: "Ephemeral Sizing", correct: false },
      { id: "C", text: "Bursting Ratios", correct: false },
      { id: "D", text: "Static Hyperthreading", correct: false }
    ],
    explanation: "Compute Engine lets you configure Custom Machine Types with the exact number of vCPUs and gigabytes of RAM your application requires, avoiding over-provisioning waste."
  },
  {
    id: "gcp-60-17",
    question: "A company wants to deploy a containerized Node.js REST API with zero server management, automatic scaling from 0 to 500 instances during demand, and pay only per request millisecond. Which service should they choose?",
    domain: "Compute Services",
    answers: [
      { id: "A", text: "Compute Engine single VM", correct: false },
      { id: "B", text: "Cloud Run", correct: true },
      { id: "C", text: "Cloud Storage", correct: false },
      { id: "D", text: "Filestore", correct: false }
    ],
    explanation: "Cloud Run is a fully managed serverless container platform that automatically scales up with traffic, scales down to zero when idle, and bills strictly for execution time."
  },
  {
    id: "gcp-60-18",
    question: "When should an enterprise choose Google Kubernetes Engine (GKE) over Cloud Run?",
    domain: "Compute Services",
    answers: [
      { id: "A", text: "When they have zero knowledge of containers", correct: false },
      { id: "B", text: "When they require full Kubernetes API control, complex multi-container pod networking, custom daemonsets, and hybrid Anthos orchestration", correct: true },
      { id: "C", text: "When they only want to host static HTML files", correct: false },
      { id: "D", text: "When they want to avoid using containers", correct: false }
    ],
    explanation: "GKE is ideal for complex microservice architectures requiring native Kubernetes APIs, service meshes, fine-grained node pool control, and hybrid multi-cloud management."
  },
  {
    id: "gcp-60-19",
    question: "What is the primary benefit of GKE Autopilot mode compared to GKE Standard mode?",
    domain: "Compute Services",
    answers: [
      { id: "A", text: "Google manages and provisions the underlying worker node infrastructure and security hardening; you only pay for pod resource requests", correct: true },
      { id: "B", text: "It disables all networking", correct: false },
      { id: "C", text: "It requires manual OS patching on worker nodes", correct: false },
      { id: "D", text: "It is restricted to a single zone", correct: false }
    ],
    explanation: "In GKE Autopilot, Google manages and optimizes cluster infrastructure, node provisioning, and OS updates following SRE best practices, billing only for running pods."
  },
  {
    id: "gcp-60-20",
    question: "Which Google Cloud compute service is a fully managed Platform as a Service (PaaS) designed specifically for web applications and mobile backends?",
    domain: "Compute Services",
    answers: [
      { id: "A", text: "App Engine", correct: true },
      { id: "B", text: "Compute Engine IaaS", correct: false },
      { id: "C", text: "Cloud Spanner", correct: false },
      { id: "D", text: "Cloud KMS", correct: false }
    ],
    explanation: "App Engine is Google's PaaS offering, allowing developers to deploy monolithic web applications in popular languages (Python, Java, Node, Go) with built-in traffic splitting and zero OS management."
  },
  {
    id: "gcp-60-21",
    question: "How do Managed Instance Groups (MIGs) ensure high availability for Compute Engine workloads?",
    domain: "Compute Services",
    answers: [
      { id: "A", text: "By automatically deploying identical VM instances across multiple zones with auto-healing and autoscaling", correct: true },
      { id: "B", text: "By keeping all VMs on a single physical host", correct: false },
      { id: "C", text: "By converting VMs into SaaS applications", correct: false },
      { id: "D", text: "By disabling health checks", correct: false }
    ],
    explanation: "Regional Managed Instance Groups (MIGs) distribute identical VM instances across multiple availability zones, automatically replacing unhealthy instances (auto-healing) and dynamically autoscaling based on load."
  },

  {
    id: "gcp-60-22",
    question: "Which Cloud Storage class offers the lowest monthly storage price ($0.0012/GB/mo) for data that is accessed less than once per year for compliance?",
    domain: "Storage Services",
    answers: [
      { id: "A", text: "Standard Storage", correct: false },
      { id: "B", text: "Nearline Storage", correct: false },
      { id: "C", text: "Coldline Storage", correct: false },
      { id: "D", text: "Archive Storage", correct: true }
    ],
    explanation: "Cloud Storage Archive class is designed for long-term digital preservation and compliance archives accessed less than once a year, with 11 9s durability and millisecond retrieval latency."
  },
  {
    id: "gcp-60-23",
    question: "How can an organization automatically downgrade Cloud Storage objects from Standard to Nearline after 30 days and delete them after 365 days?",
    domain: "Storage Services",
    answers: [
      { id: "A", text: "Write and run custom nightly Python scripts", correct: false },
      { id: "B", text: "Configure Cloud Storage Object Lifecycle Management rules on the bucket", correct: true },
      { id: "C", text: "Manually delete files every month", correct: false },
      { id: "D", text: "Enable Cloud Armor rules", correct: false }
    ],
    explanation: "Object Lifecycle Management allows you to define declarative rules (e.g. Age: 30 days → SetStorageClass Nearline) that Google Cloud executes automatically at no extra charge."
  },
  {
    id: "gcp-60-24",
    question: "An application running on a Compute Engine VM requires durable network-attached block storage for its root boot drive and transactional database. Which storage service should be attached?",
    domain: "Storage Services",
    answers: [
      { id: "A", text: "Persistent Disk (PD)", correct: true },
      { id: "B", text: "Cloud Storage Bucket", correct: false },
      { id: "C", text: "BigQuery Table", correct: false },
      { id: "D", text: "Local Ephemeral SSD", correct: false }
    ],
    explanation: "Persistent Disk (PD) provides durable, reliable network-attached block storage that survives VM shutdowns and supports point-in-time snapshot backups."
  },
  {
    id: "gcp-60-25",
    question: "A legacy enterprise application requires a fully managed shared file system accessible simultaneously by multiple Linux VMs using the standard Network File System (NFS) protocol. Which service should you choose?",
    domain: "Storage Services",
    answers: [
      { id: "A", text: "Cloud Filestore", correct: true },
      { id: "B", text: "Cloud Storage Standard", correct: false },
      { id: "C", text: "Cloud Spanner", correct: false },
      { id: "D", text: "Firestore", correct: false }
    ],
    explanation: "Filestore is Google Cloud's managed Network Attached Storage (NAS) service providing POSIX-compliant NFS file shares for applications requiring shared file directories."
  },
  {
    id: "gcp-60-26",
    question: "Which Google Cloud storage option provides physically attached solid-state drives delivering microsecond latency and millions of IOPS, but loses all data when the VM instance stops?",
    domain: "Storage Services",
    answers: [
      { id: "A", text: "Local SSD", correct: true },
      { id: "B", text: "Persistent Disk Extreme", correct: false },
      { id: "C", text: "Cloud Storage Archive", correct: false },
      { id: "D", text: "Filestore High Scale", correct: false }
    ],
    explanation: "Local SSDs are physically attached to the server hosting the VM, providing maximum IOPS and ultra-low latency for temporary scratch space, in-memory caches, and temporary buffers."
  },

  {
    id: "gcp-60-27",
    question: "What is a unique architectural property of a Google Cloud Virtual Private Cloud (VPC) network?",
    domain: "Networking",
    answers: [
      { id: "A", text: "It is confined strictly to a single availability zone", correct: false },
      { id: "B", text: "It is a global software-defined network spanning all regions worldwide", correct: true },
      { id: "C", text: "It requires physical routers installed on-premises", correct: false },
      { id: "D", text: "It does not support private IP addresses", correct: false }
    ],
    explanation: "In Google Cloud, VPCs are global resources. A single VPC network can have subnets in any region globally, enabling VMs across continents to communicate privately without VPNs."
  },
  {
    id: "gcp-60-28",
    question: "Why does Google recommend Custom Mode VPC networks over Auto Mode VPC networks for enterprise production?",
    domain: "Networking",
    answers: [
      { id: "A", text: "Custom Mode allows complete control over subnet IP ranges to prevent overlapping conflicts with corporate on-premises networks", correct: true },
      { id: "B", text: "Auto Mode is more expensive", correct: false },
      { id: "C", text: "Custom Mode disables firewalls", correct: false },
      { id: "D", text: "Auto Mode only works in North America", correct: false }
    ],
    explanation: "Auto Mode creates predefined /20 subnets in every region, which often conflict with existing enterprise on-premises IP spaces. Custom Mode lets you define only the exact subnets and CIDR blocks needed."
  },
  {
    id: "gcp-60-29",
    question: "How does Google Cloud Global External HTTP(S) Load Balancing route incoming web traffic from users worldwide?",
    domain: "Networking",
    answers: [
      { id: "A", text: "Through a single Anycast IP address advertising from edge PoPs worldwide to route users to the nearest healthy backend region", correct: true },
      { id: "B", text: "By using random DNS round-robin", correct: false },
      { id: "C", text: "By requiring users to manually select a region", correct: false },
      { id: "D", text: "By routing all traffic through Iowa first", correct: false }
    ],
    explanation: "Google Cloud Global Load Balancing uses a single Anycast IP address. User requests enter Google's network at the closest Edge PoP and are routed over private fiber to the nearest healthy backend."
  },
  {
    id: "gcp-60-30",
    question: "Which Google Cloud service provides highly reliable, low-latency, authoritative Domain Name System (DNS) resolution with a 100% availability SLA?",
    domain: "Networking",
    answers: [
      { id: "A", text: "Cloud DNS", correct: true },
      { id: "B", text: "Cloud NAT", correct: false },
      { id: "C", text: "Cloud Router", correct: false },
      { id: "D", text: "Cloud VPN", correct: false }
    ],
    explanation: "Cloud DNS is a scalable, globally distributed authoritative DNS service translating domain names into IP addresses with 100% uptime SLA."
  },
  {
    id: "gcp-60-31",
    question: "Which hybrid networking solution connects an on-premises network to Google Cloud using encrypted IPSec tunnels over the public internet?",
    domain: "Networking",
    answers: [
      { id: "A", text: "Cloud VPN", correct: true },
      { id: "B", text: "Dedicated Cloud Interconnect", correct: false },
      { id: "C", text: "VPC Peering", correct: false },
      { id: "D", text: "Cloud CDN", correct: false }
    ],
    explanation: "Cloud VPN securely connects your on-premises network to your Google Cloud VPC network through an IPsec VPN connection over the public internet (up to 3 Gbps per tunnel)."
  },
  {
    id: "gcp-60-32",
    question: "An enterprise requires a private, high-throughput 10 Gbps physical fiber connection directly into Google's network that does not touch the public internet. Which service should they deploy?",
    domain: "Networking",
    answers: [
      { id: "A", text: "Dedicated Cloud Interconnect", correct: true },
      { id: "B", text: "Cloud VPN Gateway", correct: false },
      { id: "C", text: "Cloud DNS forwarding", correct: false },
      { id: "D", text: "Identity-Aware Proxy", correct: false }
    ],
    explanation: "Dedicated Cloud Interconnect provides direct physical enterprise fiber circuits (10 Gbps or 100 Gbps) between your on-premises network and Google's global network with enterprise SLAs."
  },

  {
    id: "gcp-60-33",
    question: "Which statement accurately contrasts Relational (SQL) and Non-Relational (NoSQL) databases?",
    domain: "Databases",
    answers: [
      { id: "A", text: "Relational databases are schema-less; NoSQL enforces strict table joins and ACID schemas", correct: false },
      { id: "B", text: "Relational databases use structured schemas, tables, and ACID transactions; NoSQL databases offer flexible schemas designed for massive horizontal scaling", correct: true },
      { id: "C", text: "NoSQL databases cannot store text", correct: false },
      { id: "D", text: "Relational databases cannot run in the cloud", correct: false }
    ],
    explanation: "Relational databases enforce fixed schemas, table relationships, and ACID transaction consistency. NoSQL databases offer flexible, schema-less document/key-value models for massive horizontal scale."
  },
  {
    id: "gcp-60-34",
    question: "Which database engines can be hosted as fully managed services on Google Cloud SQL?",
    domain: "Databases",
    answers: [
      { id: "A", text: "MySQL, PostgreSQL, and Microsoft SQL Server", correct: true },
      { id: "B", text: "MongoDB, Cassandra, and Redis", correct: false },
      { id: "C", text: "Oracle Database and CouchDB only", correct: false },
      { id: "D", text: "Neo4j and DynamoDB", correct: false }
    ],
    explanation: "Cloud SQL is a fully managed relational database service supporting MySQL, PostgreSQL, and Microsoft SQL Server with automated backups, patches, and cross-zone HA."
  },
  {
    id: "gcp-60-35",
    question: "A global financial banking institution requires a relational database with strict ACID transactional consistency, horizontal multi-region scaling, and a 99.999% availability SLA. Which service should they choose?",
    domain: "Databases",
    answers: [
      { id: "A", text: "Cloud Spanner", correct: true },
      { id: "B", text: "Cloud SQL single instance", correct: false },
      { id: "C", text: "Firestore Datastore mode", correct: false },
      { id: "D", text: "Compute Engine local MySQL", correct: false }
    ],
    explanation: "Cloud Spanner is Google's enterprise-grade, globally distributed relational database combining ACID transactions and standard SQL with horizontal multi-region scale and 99.999% availability."
  },
  {
    id: "gcp-60-36",
    question: "Which serverless NoSQL document database is optimized for mobile and web applications, offering real-time data synchronization and offline offline caching?",
    domain: "Databases",
    answers: [
      { id: "A", text: "Firestore", correct: true },
      { id: "B", text: "Cloud SQL", correct: false },
      { id: "C", text: "Cloud Spanner", correct: false },
      { id: "D", text: "BigQuery", correct: false }
    ],
    explanation: "Firestore is a serverless NoSQL document database that easily stores, syncs, and queries data for mobile, web, and IoT apps with built-in real-time listeners and offline sync."
  },
  {
    id: "gcp-60-37",
    question: "An IoT fleet generates 10 million telemetry sensor updates per second. The data must be ingested with single-digit millisecond latency for real-time analytics. Which database is designed for this petabyte-scale write throughput?",
    domain: "Databases",
    answers: [
      { id: "A", text: "Cloud Bigtable", correct: true },
      { id: "B", text: "Cloud SQL for PostgreSQL", correct: false },
      { id: "C", text: "Cloud Storage Coldline", correct: false },
      { id: "D", text: "Filestore Basic", correct: false }
    ],
    explanation: "Cloud Bigtable is a petabyte-scale NoSQL wide-column database powering core Google services, designed for high-throughput write workloads, IoT telemetry, and financial market data."
  },
  {
    id: "gcp-60-38",
    question: "Which Google Cloud service provides fully managed, in-memory caching for Redis and Memcached to deliver sub-millisecond response times for web applications?",
    domain: "Databases",
    answers: [
      { id: "A", text: "Memorystore", correct: true },
      { id: "B", text: "Cloud SQL Read Replica", correct: false },
      { id: "C", text: "Cloud Spanner", correct: false },
      { id: "D", text: "Cloud Storage Nearline", correct: false }
    ],
    explanation: "Memorystore provides fully managed in-memory data stores for Redis and Memcached, accelerating application data access with sub-millisecond latency."
  },

  {
    id: "gcp-60-39",
    question: "What is Google BigQuery?",
    domain: "Data Analytics",
    answers: [
      { id: "A", text: "A serverless, multi-cloud, petabyte-scale enterprise data warehouse enabling fast SQL queries and built-in machine learning", correct: true },
      { id: "B", text: "A transactional MySQL database instance", correct: false },
      { id: "C", text: "A container orchestration tool", correct: false },
      { id: "D", text: "A hardware firewall switch", correct: false }
    ],
    explanation: "BigQuery is Google Cloud's serverless data warehouse. It separates compute from storage, allowing users to run super-fast SQL queries across petabytes of data without managing any infrastructure."
  },
  {
    id: "gcp-60-40",
    question: "How does BigQuery's on-demand query pricing model calculate query costs?",
    domain: "Data Analytics",
    answers: [
      { id: "A", text: "Based on the number of hours the database was turned on", correct: false },
      { id: "B", text: "Based on the total number of bytes read by the specific columns queried ($6.25 per TB processed)", correct: true },
      { id: "C", text: "A flat rate of $1,000 per month regardless of usage", correct: false },
      { id: "D", text: "Per SQL keyword used in the query string", correct: false }
    ],
    explanation: "Because BigQuery uses a columnar storage format (Capacitor), on-demand queries are billed strictly based on the actual bytes scanned across the referenced columns during execution."
  },
  {
    id: "gcp-60-41",
    question: "Which service acts as a global, asynchronous publish/subscribe messaging backbone to ingest streaming data and decouple microservices?",
    domain: "Data Analytics",
    answers: [
      { id: "A", text: "Pub/Sub", correct: true },
      { id: "B", text: "Cloud DNS", correct: false },
      { id: "C", text: "Cloud SQL", correct: false },
      { id: "D", text: "Compute Engine MIG", correct: false }
    ],
    explanation: "Pub/Sub is a fully managed, global messaging service that ingests hundreds of millions of events per second and decouples event producers from consumers."
  },
  {
    id: "gcp-60-42",
    question: "Which Google Cloud service provides unified, serverless stream and batch data processing pipelines based on Apache Beam?",
    domain: "Data Analytics",
    answers: [
      { id: "A", text: "Cloud Dataflow", correct: true },
      { id: "B", text: "Cloud Dataproc only for batch", correct: false },
      { id: "C", text: "Cloud Functions", correct: false },
      { id: "D", text: "Cloud Build", correct: false }
    ],
    explanation: "Cloud Dataflow is a serverless data processing service executing unified batch and real-time streaming ETL pipelines based on the open-source Apache Beam SDK."
  },
  {
    id: "gcp-60-43",
    question: "Which enterprise business intelligence and data analytics platform allows organizations to define centralized data models using LookML and create interactive executive dashboards?",
    domain: "Data Analytics",
    answers: [
      { id: "A", text: "Looker", correct: true },
      { id: "B", text: "Cloud Logging", correct: false },
      { id: "C", text: "Security Command Center", correct: false },
      { id: "D", text: "Artifact Registry", correct: false }
    ],
    explanation: "Looker is an enterprise business intelligence platform with governed data modeling (LookML), embedded analytics, and interactive dashboard exploration."
  },

  {
    id: "gcp-60-44",
    question: "Which term describes machine learning models capable of creating new, original text, images, code, and audio based on user prompts?",
    domain: "AI & Machine Learning",
    answers: [
      { id: "A", text: "Generative AI", correct: true },
      { id: "B", text: "Deterministic Computing", correct: false },
      { id: "C", text: "Relational Indexing", correct: false },
      { id: "D", text: "Static Virtualization", correct: false }
    ],
    explanation: "Generative AI utilizes deep learning Transformer models to generate novel content (conversational text, high-resolution imagery, audio, and source code)."
  },
  {
    id: "gcp-60-45",
    question: "A company wants to add optical character recognition (OCR) and logo detection to its mobile application without training a machine learning model. Which pre-trained API should they call?",
    domain: "AI & Machine Learning",
    answers: [
      { id: "A", text: "Vision AI", correct: true },
      { id: "B", text: "Compute Engine GPU", correct: false },
      { id: "C", text: "Cloud Spanner", correct: false },
      { id: "D", text: "Cloud Armor", correct: false }
    ],
    explanation: "Google Cloud Vision AI provides pre-trained turnkey REST APIs for OCR text extraction, label detection, face detection, and explicit content moderation."
  },
  {
    id: "gcp-60-46",
    question: "What is Vertex AI?",
    domain: "AI & Machine Learning",
    answers: [
      { id: "A", text: "Google Cloud's unified enterprise platform for building, training, customizing, and deploying machine learning models and Generative AI applications", correct: true },
      { id: "B", text: "A physical fiber optic cable", correct: false },
      { id: "C", text: "A basic billing spreadsheet", correct: false },
      { id: "D", text: "An operating system for desktop laptops", correct: false }
    ],
    explanation: "Vertex AI unifies Google Cloud's AI capabilities, providing Model Garden (Gemini, open-source models), AutoML, custom training, and end-to-end MLOps."
  },
  {
    id: "gcp-60-47",
    question: "What is a distinguishing characteristic of Google's Gemini foundation models available in Vertex AI?",
    domain: "AI & Machine Learning",
    answers: [
      { id: "A", text: "They can only process single-word English text", correct: false },
      { id: "B", text: "They are natively multimodal, reasoning seamlessly across text, code, images, audio, and video simultaneously", correct: true },
      { id: "C", text: "They require on-premises mainframe hardware", correct: false },
      { id: "D", text: "They cannot be accessed via APIs", correct: false }
    ],
    explanation: "Gemini was built from the ground up to be multimodal, allowing it to seamlessly understand, operate across, and combine different types of information including text, code, audio, image, and video."
  },
  {
    id: "gcp-60-48",
    question: "When an enterprise sends proprietary customer data and prompts to Gemini on Vertex AI, how does Google protect their data privacy?",
    domain: "AI & Machine Learning",
    answers: [
      { id: "A", text: "Customer prompts are made public in Google Search", correct: false },
      { id: "B", text: "Customer data, prompts, and embeddings are strictly private and NEVER used to train Google's foundation models", correct: true },
      { id: "C", text: "Data is shared with all third-party advertisers", correct: false },
      { id: "D", text: "Prompts must be unencrypted", correct: false }
    ],
    explanation: "Under Google Cloud enterprise AI commitments, customer data, prompts, and generated responses remain the customer's intellectual property and are never used to train Google's base foundation models."
  },

  {
    id: "gcp-60-49",
    question: "Under the Google Cloud Shared Responsibility Model, which security layer is ALWAYS the customer's responsibility across IaaS, PaaS, and SaaS?",
    domain: "Security & IAM",
    answers: [
      { id: "A", text: "Physical datacenter perimeter security and biometric doors", correct: false },
      { id: "B", text: "Customer data, access policies, and identity authentication credentials", correct: true },
      { id: "C", text: "Hardware blade disposal", correct: false },
      { id: "D", text: "Undersea cable fiber maintenance", correct: false }
    ],
    explanation: "Customer data classification, IAM access bindings, client device endpoints, and credential security are ALWAYS the customer's responsibility across all cloud models."
  },
  {
    id: "gcp-60-50",
    question: "In Cloud Identity and Access Management (IAM), what does a 'Role' represent?",
    domain: "Security & IAM",
    answers: [
      { id: "A", text: "The identity of an employee (Who)", correct: false },
      { id: "B", text: "A named collection of granular permissions defining what actions can be performed on a resource (What)", correct: true },
      { id: "C", text: "The physical server rack number", correct: false },
      { id: "D", text: "The billing invoice currency", correct: false }
    ],
    explanation: "In IAM, a Role is a collection of permissions (e.g. storage.objects.get, storage.objects.create). Roles are granted to identities (Users, Groups, Service Accounts)."
  },
  {
    id: "gcp-60-51",
    question: "Why does Google Cloud strongly discourage the use of Basic (Primitive) Roles (Owner, Editor, Viewer) in production environments?",
    domain: "Security & IAM",
    answers: [
      { id: "A", text: "They are too expensive", correct: false },
      { id: "B", text: "They grant overly broad permissions across almost all project resources, violating the Principle of Least Privilege", correct: true },
      { id: "C", text: "They cannot be used with Linux VMs", correct: false },
      { id: "D", text: "They expire after 24 hours", correct: false }
    ],
    explanation: "Basic Roles (Owner, Editor, Viewer) grant sweeping permissions across the entire project. In production, fine-grained Predefined Roles should always be used to enforce least privilege."
  },
  {
    id: "gcp-60-52",
    question: "What is the Principle of Least Privilege in cloud security?",
    domain: "Security & IAM",
    answers: [
      { id: "A", text: "Granting all users full administrative access to avoid support tickets", correct: false },
      { id: "B", text: "Granting an identity only the minimum set of permissions necessary to perform its specific job duties", correct: true },
      { id: "C", text: "Storing passwords in plaintext", correct: false },
      { id: "D", text: "Allowing anonymous access to all databases", correct: false }
    ],
    explanation: "The Principle of Least Privilege dictates that users and applications are granted only the minimum permissions required to complete their designated tasks, minimizing potential breach damage."
  },
  {
    id: "gcp-60-53",
    question: "Which type of IAM identity should be assigned to an automated application or VM instance that needs to authenticate with Cloud Storage without human credentials?",
    domain: "Security & IAM",
    answers: [
      { id: "A", text: "A Service Account", correct: true },
      { id: "B", text: "A personal Gmail account", correct: false },
      { id: "C", text: "A Google Workspace Super Admin account", correct: false },
      { id: "D", text: "An anonymous guest link", correct: false }
    ],
    explanation: "Service Accounts are specialized non-human identities used by applications and virtual machines to make authorized API calls securely without human passwords."
  },
  {
    id: "gcp-60-54",
    question: "What encryption is applied by default to all customer data stored in Google Cloud?",
    domain: "Security & IAM",
    answers: [
      { id: "A", text: "Data is unencrypted by default unless a customer pays extra", correct: false },
      { id: "B", text: "All data is automatically encrypted at rest (AES-256) and in transit using Google-managed encryption keys", correct: true },
      { id: "C", text: "Only password files are encrypted", correct: false },
      { id: "D", text: "Encryption is applied only during business hours", correct: false }
    ],
    explanation: "Google Cloud encrypts all customer data at rest by default using 256-bit Advanced Encryption Standard (AES-256) and encrypts all data in transit over Google's global network automatically."
  },
  {
    id: "gcp-60-55",
    question: "Which Google Cloud security platform provides centralized visibility into asset inventory, vulnerability scans (e.g. public storage buckets), and real-time threat detection across an organization?",
    domain: "Security & IAM",
    answers: [
      { id: "A", text: "Security Command Center (SCC)", correct: true },
      { id: "B", text: "Cloud Armor", correct: false },
      { id: "C", text: "Cloud KMS", correct: false },
      { id: "D", text: "Cloud Trace", correct: false }
    ],
    explanation: "Security Command Center (SCC) is Google Cloud's centralized security management and risk dashboard, detecting misconfigurations, vulnerabilities, and active threats."
  },

  {
    id: "gcp-60-56",
    question: "What happens by default when spending in a Google Cloud Project reaches 100% of a configured Cloud Billing Budget threshold?",
    domain: "Billing & Cost",
    answers: [
      { id: "A", text: "All virtual machines and databases are immediately shut down", correct: false },
      { id: "B", text: "An automated email notification is sent to billing administrators, but cloud resources continue running uninterrupted", correct: true },
      { id: "C", text: "The credit card is charged double", correct: false },
      { id: "D", text: "All project data is deleted", correct: false }
    ],
    explanation: "By default, Cloud Billing Budgets send informative alert emails and notifications when spending crosses thresholds without halting running resources."
  },
  {
    id: "gcp-60-57",
    question: "An organization runs production database VMs that operate 24/7/365 with predictable compute needs. Which purchasing option provides up to 57–70% cost savings?",
    domain: "Billing & Cost",
    answers: [
      { id: "A", text: "Committed Use Discounts (CUDs) for 1 or 3 years", correct: true },
      { id: "B", text: "Standard On-Demand hourly pricing", correct: false },
      { id: "C", text: "Preemptible Spot VMs", correct: false },
      { id: "D", text: "Free Tier promotional credits", correct: false }
    ],
    explanation: "Committed Use Discounts (CUDs) provide deep discounts (up to 57% for 1-year, up to 70% for 3-year commitments) in exchange for committing to a continuous baseline level of compute."
  },
  {
    id: "gcp-60-58",
    question: "Which Compute Engine option offers up to 60–91% discounts for fault-tolerant, batch analytics jobs that can tolerate unexpected instance preemption?",
    domain: "Billing & Cost",
    answers: [
      { id: "A", text: "Spot VMs", correct: true },
      { id: "B", text: "Sole-tenant nodes", correct: false },
      { id: "C", text: "Custom machine types", correct: false },
      { id: "D", text: "Persistent Disk Extreme", correct: false }
    ],
    explanation: "Spot VMs utilize excess Google Cloud compute capacity available at 60–91% discounts, subject to reclamation if Google needs the capacity back for on-demand workloads."
  },
  {
    id: "gcp-60-59",
    question: "In the Google Cloud Operations Suite, how do Cloud Monitoring and Cloud Logging differ?",
    domain: "Operations & DevOps",
    answers: [
      { id: "A", text: "Cloud Monitoring collects numerical performance metrics and triggers alerts; Cloud Logging stores, queries, and filters structured event logs", correct: true },
      { id: "B", text: "Cloud Logging only records billing transactions", correct: false },
      { id: "C", text: "Cloud Monitoring can only monitor on-premises servers", correct: false },
      { id: "D", text: "They are completely identical products with two names", correct: false }
    ],
    explanation: "Cloud Monitoring evaluates numeric metrics (CPU %, memory, uptime, latency) and manages alert policies. Cloud Logging ingests, indexes, and queries structured text/JSON log records."
  },
  {
    id: "gcp-60-60",
    question: "How does Google Cloud assist organizations in meeting their environmental sustainability and ESG carbon reduction goals?",
    domain: "Sustainability & Architecture",
    answers: [
      { id: "A", text: "By displaying green leaf icons for Low-Carbon Regions powered by high Carbon-Free Energy (CFE) and providing a built-in Carbon Footprint dashboard", correct: true },
      { id: "B", text: "By charging carbon tax penalties on every VM", correct: false },
      { id: "C", text: "By forcing all servers to shut down at night", correct: false },
      { id: "D", text: "By banning containerization", correct: false }
    ],
    explanation: "Google operates on 100% matched renewable energy, highlights Low-Carbon Regions in the console, provides Carbon Footprint reporting, and is pursuing 24/7 Carbon-Free Energy across all data centers by 2030."
  }
];
