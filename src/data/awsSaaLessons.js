export const awsSaaLessons = [
  {
    id: 1,
    title: "AWS Global Infrastructure & Multi-Tier VPC Design",
    category: "Networking & VPC",
    duration: "10 min",
    intro:
      "A resilient cloud architecture starts with network isolation. Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch resources in a virtual network you define.",
    keyIdea:
      "Design multi-tier architectures spanning at least two Availability Zones with separated public, private app, and private database subnets to enforce zero-trust network boundaries.",
    sections: [
      {
        heading: "Multi-Tier Subnet Segmentation",
        paragraphs: [
          "In a standard three-tier enterprise architecture, workloads are divided into Public Web Tier (Internet-facing ALBs and bastion hosts), Private Application Tier (EC2 instances or containers running business logic), and Private Database Tier (Amazon RDS or Aurora clusters).",
          "Public subnets contain a route table entry pointing `0.0.0.0/0` directly to an Internet Gateway (IGW). Private subnets route outbound internet traffic through a NAT Gateway located in a public subnet, ensuring backend servers can download updates without being reachable from the public internet.",
          "For high availability, deploy duplicate subnets across at least two Availability Zones (AZs) in the Region, each with its own redundant NAT Gateway."
        ]
      },
      {
        heading: "VPC CIDR Sizing & Reserved IPs",
        paragraphs: [
          "AWS reserves 5 IP addresses in every subnet: the Network address (.0), VPC router (.1), DNS server (.2), future AWS reservation (.3), and Network broadcast (.255).",
          "When designing a VPC CIDR block (e.g., `10.0.0.0/16`), ensure subnet CIDRs (e.g., `/24`) do not overlap with corporate on-premises networks if you plan to connect via AWS Direct Connect or Site-to-Site VPN."
        ]
      }
    ],
    example: {
      title: "NETWORK ARCHITECTURE COMPARISON",
      traditional: "Flat corporate data center network where all servers share single VLAN broadcast domains without isolation",
      cloud: "Strictly segregated multi-AZ VPC with public subnets, private app subnets, isolated database subnets, and stateful Security Group chaining"
    },
    concepts: [
      {
        number: "01",
        title: "Internet Gateway (IGW)",
        description: "Horizontally scaled, redundant VPC component that enables communication between public subnets and the internet."
      },
      {
        number: "02",
        title: "NAT Gateway",
        description: "Managed service that gives private subnet instances outbound IPv4 internet access while blocking inbound connections."
      },
      {
        number: "03",
        title: "5 Reserved Subnet IPs",
        description: "AWS reserves 5 IP addresses per subnet (.0, .1, .2, .3, and .255); a /24 subnet has 251 usable IPs."
      }
    ],
    quiz: {
      question: "An architect needs backend EC2 instances in a private subnet to download OS patches from the internet without allowing direct inbound connections. Which configuration satisfies this requirement?",
      answers: [
        { id: "A", text: "Attach an Internet Gateway directly to the private subnet route table", correct: false },
        { id: "B", text: "Deploy a NAT Gateway in a public subnet and route 0.0.0.0/0 from the private subnet to it", correct: true },
        { id: "C", text: "Assign public IPv4 addresses to the backend EC2 instances", correct: false },
        { id: "D", text: "Configure an egress-only internet gateway for IPv4 traffic", correct: false }
      ],
      explanation: "A NAT Gateway deployed in a public subnet enables instances in private subnets to initiate outbound traffic to the internet while preventing external hosts from initiating inbound connections."
    }
  },

  {
    id: 2,
    title: "Elastic Load Balancing & Auto Scaling Groups",
    category: "High Availability & Compute",
    duration: "11 min",
    intro:
      "Achieving high availability and elasticity requires decoupling traffic ingress from compute nodes. Elastic Load Balancing (ELB) automatically distributes incoming traffic across multiple targets, while Auto Scaling groups dynamically scale compute capacity.",
    keyIdea:
      "Use Application Load Balancers (ALB) for Layer 7 HTTP/HTTPS path and host routing, Network Load Balancers (NLB) for Layer 4 ultra-low latency TCP/UDP, and Target Tracking policies to automatically match demand.",
    sections: [
      {
        heading: "ALB vs. NLB Selection Criteria",
        paragraphs: [
          "Application Load Balancer (ALB) operates at OSI Layer 7. It supports advanced routing rules based on HTTP headers, query strings, path patterns (`/api/*`), and hostnames. ALB integrates seamlessly with AWS WAF and redirects HTTP to HTTPS.",
          "Network Load Balancer (NLB) operates at Layer 4. It can handle millions of requests per second with microsecond latencies, supports static IP allocation per AZ, and can terminate TLS connections while preserving the client IP address."
        ]
      },
      {
        heading: "EC2 Auto Scaling Strategies",
        paragraphs: [
          "Auto Scaling groups (ASGs) ensure that a specified minimum, desired, and maximum number of EC2 instances are running across multiple AZs.",
          "Target Tracking scaling policies automatically adjust capacity to maintain a specific metric (e.g., maintain average CPU utilization at 60%). Scheduled scaling plans for predictable business spikes, while predictive scaling uses machine learning to forecast traffic trends."
        ]
      }
    ],
    example: {
      title: "SCALING PATTERN",
      traditional: "Over-provisioning physical rack servers to handle peak Black Friday traffic, leaving hardware idle 95% of the year",
      cloud: "Auto Scaling group dynamically launches EC2 spot/on-demand instances behind an ALB when CPU exceeds 65%, terminating them when traffic subsides"
    },
    concepts: [
      {
        number: "01",
        title: "Layer 7 vs Layer 4 Routing",
        description: "ALBs evaluate HTTP/HTTPS headers and request URLs; NLBs route raw TCP/UDP packets with extreme performance."
      },
      {
        number: "02",
        title: "Cross-Zone Load Balancing",
        description: "Evenly distributes traffic across all registered targets in all enabled AZs, preventing unbalanced instance utilization."
      },
      {
        number: "03",
        title: "Target Tracking Scaling",
        description: "Auto Scaling policy that maintains a metric (e.g. CPU or ALB request count per target) by adding or removing instances."
      }
    ],
    quiz: {
      question: "A company requires a load balancer capable of handling sudden spikes of millions of TCP connections per second while providing static Anycast IP addresses for firewall whitelisting. Which load balancer should you recommend?",
      answers: [
        { id: "A", text: "Application Load Balancer (ALB)", correct: false },
        { id: "B", text: "Network Load Balancer (NLB)", correct: true },
        { id: "C", text: "Classic Load Balancer (CLB)", correct: false },
        { id: "D", text: "Gateway Load Balancer (GWLB)", correct: false }
      ],
      explanation: "Network Load Balancers operate at Layer 4, handle millions of requests per second with ultra-low latency, and support dedicated Elastic IP addresses per Availability Zone for client firewall whitelisting."
    }
  },

  {
    id: 3,
    title: "Amazon S3 Storage Classes, Lifecycle Rules & Replication",
    category: "Storage Architecture",
    duration: "12 min",
    intro:
      "Amazon Simple Storage Service (S3) is an object store offering 99.999999999% (11 9's) data durability. Designing cost-effective storage architectures requires selecting the appropriate storage class and automating lifecycle transitions.",
    keyIdea:
      "Optimize storage expenditure by combining S3 Standard, S3 Intelligent-Tiering, S3 Glacier Instant Retrieval, and Glacier Deep Archive using declarative lifecycle transition rules.",
    sections: [
      {
        heading: "Comparing S3 Storage Classes",
        paragraphs: [
          "S3 Standard: Designed for frequently accessed active data with millisecond latency.",
          "S3 Intelligent-Tiering: Automatically moves objects between Frequent, Infrequent, Archive Instant, and Deep Archive access tiers without retrieval fees when access patterns change.",
          "S3 Standard-IA & One Zone-IA: For data accessed less frequently but requiring millisecond retrieval when needed. One Zone-IA stores data in a single AZ (99.5% availability, lower cost).",
          "S3 Glacier Flexible Retrieval & Deep Archive: Archival tiers with retrieval times ranging from minutes (Glacier expedited) to 12 hours (Deep Archive standard)."
        ]
      },
      {
        heading: "Replication & Immutability",
        paragraphs: [
          "Cross-Region Replication (CRR) replicates objects to a different AWS Region for geographic compliance and disaster recovery. Same-Region Replication (SRR) provides log aggregation.",
          "S3 Object Lock enforces WORM (Write Once, Read Many) compliance in Governance mode (privileged users can override) or Compliance mode (cannot be deleted or overwritten by any user, including AWS root)."
        ]
      }
    ],
    example: {
      title: "STORAGE LIFECYCLE PATTERN",
      traditional: "Writing company backups to physical magnetic LTO tapes and transporting them offsite via courier services",
      cloud: "Objects written to S3 Standard, transitioned to Glacier after 90 days via S3 Lifecycle rule, and deleted after 7 years automatically"
    },
    concepts: [
      {
        number: "01",
        title: "11 Nines Durability",
        description: "99.999999999% durability achieved by redundantly storing objects across multiple physically separate facilities in a Region."
      },
      {
        number: "02",
        title: "S3 Intelligent-Tiering",
        description: "Zero retrieval fees, automatically optimizes costs by monitoring access patterns and moving objects between access tiers."
      },
      {
        number: "03",
        title: "S3 Object Lock (WORM)",
        description: "Prevents objects from being deleted or overwritten for a fixed retention duration for strict SEC/FINRA regulatory compliance."
      }
    ],
    quiz: {
      question: "A healthcare firm has medical records with unpredictable access patterns: some records are read daily while others remain untouched for months. Retrieval must always be instantaneous with no retrieval fees. Which storage class is best?",
      answers: [
        { id: "A", text: "Amazon S3 Standard-IA", correct: false },
        { id: "B", text: "Amazon S3 Glacier Instant Retrieval", correct: false },
        { id: "C", text: "Amazon S3 Intelligent-Tiering", correct: true },
        { id: "D", text: "Amazon S3 One Zone-IA", correct: false }
      ],
      explanation: "S3 Intelligent-Tiering is ideal when data access patterns are unknown or unpredictable; it charges a nominal monitoring fee and moves objects between tiers without assessing retrieval fees."
    }
  },

  {
    id: 4,
    title: "Amazon EBS vs. EFS vs. FSx: Block & File Storage",
    category: "Storage Architecture",
    duration: "10 min",
    intro:
      "AWS provides distinct storage solutions for block devices and networked file shares. Choosing the correct storage service depends on whether your workload requires single-instance low-latency disk or concurrent multi-instance shared filesystems.",
    keyIdea:
      "Use Amazon EBS for single-instance high-IOPS block storage (OS and databases), Amazon EFS for scalable multi-instance Linux NFS, and Amazon FSx for Windows File Server or high-throughput Lustre HPC.",
    sections: [
      {
        heading: "EBS Volume Types: gp3 vs io2",
        paragraphs: [
          "Amazon Elastic Block Store (EBS) volumes are persistent virtual hard drives bound to a specific Availability Zone. You can snapshot them to S3 and resize them dynamically using Elastic Volumes.",
          "General Purpose SSD (gp3): Baseline 3,000 IOPS and 125 MB/s throughput included, with the ability to scale IOPS and throughput independently of storage capacity.",
          "Provisioned IOPS SSD (io2 Block Express): Designed for mission-critical relational databases (Oracle, SAP HANA, SQL Server) requiring up to 256,000 IOPS and sub-millisecond latencies."
        ]
      },
      {
        heading: "Networked Filesystems: EFS vs FSx",
        paragraphs: [
          "Amazon Elastic File System (EFS) is a serverless, POSIX-compliant NFSv4 file system that can be mounted concurrently by thousands of EC2 instances and containers across multiple AZs.",
          "Amazon FSx for Windows File Server provides native SMB protocol support with Active Directory integration. FSx for Lustre delivers million-IOPS sub-millisecond file systems for high-performance computing (HPC) and machine learning training."
        ]
      }
    ],
    example: {
      title: "STORAGE ARCHITECTURE SELECTION",
      traditional: "SAN storage arrays partitioned into LUNs requiring complex fiber channel switches and hardware maintenance",
      cloud: "EBS gp3 attached to web instances for fast local IO; shared assets stored on multi-AZ Amazon EFS mount targets"
    },
    concepts: [
      {
        number: "01",
        title: "EBS gp3 Flexibility",
        description: "Allows independent provisioning of IOPS and throughput without needing to increase disk storage size, cutting costs by up to 20% over gp2."
      },
      {
        number: "02",
        title: "EFS Multi-Mount (ReadWriteMany)",
        description: "Concurrent read-write access across hundreds of EC2 instances, Lambda functions, and ECS/EKS tasks in multiple AZs."
      },
      {
        number: "03",
        title: "EBS Multi-Attach",
        description: "Allows attaching an io1/io2 EBS volume to multiple EC2 instances in the same AZ for cluster-aware filesystems."
      }
    ],
    quiz: {
      question: "A fleet of 50 Linux EC2 instances in an Auto Scaling group across 3 Availability Zones needs concurrent read-write access to a shared directory of images and config files. Which service should you choose?",
      answers: [
        { id: "A", text: "Amazon EBS gp3 with Multi-Attach", correct: false },
        { id: "B", text: "Amazon EFS with mount targets in each AZ", correct: true },
        { id: "C", text: "Amazon S3 Glacier Flexible Retrieval", correct: false },
        { id: "D", text: "Amazon FSx for Windows File Server", correct: false }
      ],
      explanation: "Amazon EFS is a managed POSIX-compliant NFS file system that can be mounted concurrently by multiple instances across multiple Availability Zones in a Region."
    }
  },

  {
    id: 5,
    title: "High Availability Databases: RDS Multi-AZ & Amazon Aurora",
    category: "Databases",
    duration: "12 min",
    intro:
      "Enterprise architectures demand zero data loss (RPO = 0) and rapid automated failover (RTO < 60s). Amazon RDS and Amazon Aurora provide managed relational database solutions engineered for high availability and global scale.",
    keyIdea:
      "RDS Multi-AZ uses synchronous replication to a standby instance for automated disaster recovery. Read Replicas use asynchronous replication to scale read throughput. Amazon Aurora replicates 6 copies of data across 3 AZs.",
    sections: [
      {
        heading: "RDS Multi-AZ vs. Read Replicas",
        paragraphs: [
          "RDS Multi-AZ: Synchronously replicates transactions from the primary instance to an active standby instance in a different AZ. The standby cannot serve read traffic. In case of primary failure, RDS automatically flips the CNAME DNS record to the standby in under 60 seconds.",
          "Read Replicas: Asynchronously replicates data from the primary to up to 15 read-only instances. Used for horizontal read scaling and heavy reporting queries. Read replicas can span across different AWS Regions."
        ]
      },
      {
        heading: "Amazon Aurora Architecture",
        paragraphs: [
          "Aurora is a cloud-native relational database compatible with PostgreSQL and MySQL. Its distributed log-structured storage subsystem replicates 6 copies of your data across 3 AZs.",
          "Aurora can sustain the loss of 2 copies without affecting write availability and 3 copies without affecting read availability. Failover between Aurora replicas takes less than 30 seconds with zero data loss."
        ]
      }
    ],
    example: {
      title: "DATABASE RESILIENCY PATTERN",
      traditional: "Manual database clustering with shared SCSI disks, complicated heartbeat scripts, and risky manual IP failover procedures",
      cloud: "Amazon Aurora Cluster with auto-scaling read replicas; writes routed to primary endpoint, reads distributed across reader endpoint"
    },
    concepts: [
      {
        number: "01",
        title: "Multi-AZ Synchronous Replication",
        description: "Guarantees zero data loss (RPO = 0) and automated failover for disaster recovery, but does not provide read scaling."
      },
      {
        number: "02",
        title: "Read Replicas (Asynchronous)",
        description: "Offloads read queries from the primary database; can be promoted to a standalone database during a regional disaster."
      },
      {
        number: "03",
        title: "Aurora 6-Way Replication",
        description: "Self-healing storage architecture that writes 6 copies of data across 3 AZs with peer-to-peer log repair."
      }
    ],
    quiz: {
      question: "A high-traffic e-commerce database is experiencing performance slowdowns due to heavy analytical reporting queries. The database must remain highly available during an AZ outage. What is the optimal architecture?",
      answers: [
        { id: "A", text: "Deploy an RDS Single-AZ instance and scale instance size to db.m5.24xlarge", correct: false },
        { id: "B", text: "Configure RDS Multi-AZ for high availability and create Read Replicas to offload reporting queries", correct: true },
        { id: "C", text: "Enable Multi-AZ and direct reporting queries to the standby database instance", correct: false },
        { id: "D", text: "Migrate the database to Amazon S3 Standard", correct: false }
      ],
      explanation: "RDS Multi-AZ provides automated failover for high availability, while Read Replicas allow offloading read-heavy reporting queries from the primary writer node."
    }
  },

  {
    id: 6,
    title: "NoSQL & In-Memory Caching: DynamoDB & ElastiCache",
    category: "Databases & Caching",
    duration: "11 min",
    intro:
      "Microsecond and single-digit millisecond latency at any scale requires purpose-built databases and in-memory caches. Amazon DynamoDB and Amazon ElastiCache power modern real-time architectures like leaderboards, session stores, and shopping carts.",
    keyIdea:
      "Use Amazon DynamoDB for serverless, horizontally scalable NoSQL key-value and document data. Use Amazon ElastiCache (Redis or Memcached) to cache frequently queried database results and session state.",
    sections: [
      {
        heading: "Amazon DynamoDB Fundamentals",
        paragraphs: [
          "DynamoDB is a fully managed NoSQL database providing consistent single-digit millisecond response times. Tables are partitioned based on Partition Keys (HASH) and optional Sort Keys (RANGE).",
          "Capacity Modes: On-Demand capacity is ideal for unpredictable or unknown workloads; Provisioned capacity with Auto Scaling is cost-effective for steady, predictable traffic.",
          "DynamoDB Accelerator (DAX): An in-memory cache specifically built for DynamoDB that reduces read latencies from milliseconds to microseconds."
        ]
      },
      {
        heading: "ElastiCache: Redis vs. Memcached",
        paragraphs: [
          "ElastiCache Redis: Supports complex data structures (hashes, sorted sets, lists), Multi-AZ replication, persistence (snapshots/AOF), pub/sub, and automatic failover.",
          "ElastiCache Memcached: Pure in-memory multithreaded caching engine with no persistence. Best for simple object caching where data loss does not impact application state."
        ]
      }
    ],
    example: {
      title: "CACHE-ASIDE ARCHITECTURE",
      traditional: "Every customer web request queries the relational database directly, overwhelming connection pools during flash sales",
      cloud: "Application checks Redis cache first (1ms latency); on cache miss, queries database and populates Redis with a 15-minute TTL"
    },
    concepts: [
      {
        number: "01",
        title: "DynamoDB Partition Key",
        description: "Determines physical partition placement; choose a high-cardinality key to prevent 'hot partitions'."
      },
      {
        number: "02",
        title: "DAX In-Memory Cache",
        description: "Seamless cluster cache that delivers up to a 10x read performance improvement with zero application rewrite."
      },
      {
        number: "03",
        title: "Cache-Aside Pattern",
        description: "Application logic that verifies cache presence before querying the backend database to prevent database throttling."
      }
    ],
    quiz: {
      question: "A gaming company requires a leaderboard that tracks top player rankings in real time with sub-millisecond response times. The data must persist across server restarts and support automated failover. Which service should you choose?",
      answers: [
        { id: "A", text: "Amazon ElastiCache for Memcached", correct: false },
        { id: "B", text: "Amazon ElastiCache for Redis (Cluster Mode)", correct: true },
        { id: "C", text: "Amazon RDS for PostgreSQL with Read Replicas", correct: false },
        { id: "D", text: "Amazon S3 Standard", correct: false }
      ],
      explanation: "ElastiCache for Redis natively supports sorted sets (perfect for real-time leaderboards), in-memory sub-millisecond latencies, data replication, persistence, and automated failover."
    }
  },

  {
    id: 7,
    title: "Asynchronous Decoupling: Amazon SQS, SNS & EventBridge",
    category: "Application Integration",
    duration: "11 min",
    intro:
      "Tightly coupled architectures experience cascading failures when downstream services become overwhelmed. Amazon SQS, Amazon SNS, and Amazon EventBridge decouple components to enable asynchronous processing and elastic backpressure.",
    keyIdea:
      "Amazon SQS queues messages for pulling by consumers; Amazon SNS pushes notifications to multiple subscribers (fan-out); Amazon EventBridge routes events using pattern matching across AWS and SaaS apps.",
    sections: [
      {
        heading: "Amazon SQS: Standard vs. FIFO",
        paragraphs: [
          "Standard Queues: Offer nearly unlimited throughput, at-least-once message delivery, and best-effort ordering.",
          "FIFO (First-In-First-Out) Queues: Guarantee exact message ordering and strictly once delivery (no duplicates), with throughput of 300 to 3,000 transactions/second with batching.",
          "Visibility Timeout: The period during which SQS prevents other consumers from receiving and processing a message while a worker is handling it."
        ]
      },
      {
        heading: "SNS Fan-Out & EventBridge Architecture",
        paragraphs: [
          "The Fan-Out pattern publishes a single message to an SNS Topic, which immediately delivers it in parallel to multiple SQS queues, Lambda functions, and HTTPS endpoints.",
          "Amazon EventBridge is a serverless event bus that ingests real-time events from AWS services, custom apps, and third-party SaaS platforms (Datadog, Zendesk), filtering and routing them to target services."
        ]
      }
    ],
    example: {
      title: "DECOUPLED PROCESSING PATTERN",
      traditional: "Web server synchronously calls image-processing server, failing if transcoding takes longer than 30 seconds",
      cloud: "Web server deposits image upload metadata into SQS queue; Auto-scaled EC2 worker tier pulls messages and processes at its own pace"
    },
    concepts: [
      {
        number: "01",
        title: "Dead-Letter Queue (DLQ)",
        description: "An SQS queue dedicated to isolating messages that fail processing multiple times (`maxReceiveCount`) for debugging."
      },
      {
        number: "02",
        title: "SNS Fan-Out Pattern",
        description: "Publishes once to an SNS topic to replicate messages across multiple SQS queues for parallel asynchronous consumption."
      },
      {
        number: "03",
        title: "SQS Long Polling",
        description: "Waits up to 20 seconds for messages to arrive in an empty queue, reducing empty response costs and polling frequency."
      }
    ],
    quiz: {
      question: "An order processing application must ensure that customer orders are processed strictly in the order they were placed, with zero duplicate messages processed. Which queue type should the architect implement?",
      answers: [
        { id: "A", text: "Amazon SQS Standard Queue with Long Polling", correct: false },
        { id: "B", text: "Amazon SQS FIFO Queue with Message Deduplication", correct: true },
        { id: "C", text: "Amazon SNS Standard Topic", correct: false },
        { id: "D", text: "Amazon Kinesis Data Firehose", correct: false }
      ],
      explanation: "Amazon SQS FIFO queues preserve the exact order of messages and support message deduplication IDs to guarantee that messages are processed once and only once in strict FIFO sequence."
    }
  },

  {
    id: 8,
    title: "Serverless Event-Driven Architectures: Lambda & API Gateway",
    category: "Serverless Compute",
    duration: "10 min",
    intro:
      "Serverless architecture allows you to build and run applications without provisioning, patching, or managing servers. AWS Lambda runs your code in response to events, automatically managing execution capacity and scaling to zero when idle.",
    keyIdea:
      "Combine Amazon API Gateway with AWS Lambda, Amazon DynamoDB, and Amazon S3 to construct fully managed, highly available serverless web applications with pay-per-execution pricing.",
    sections: [
      {
        heading: "AWS Lambda Execution Model",
        paragraphs: [
          "AWS Lambda executes code within stateless container environments in response to triggers from S3, DynamoDB Streams, SQS, API Gateway, and EventBridge.",
          "Configuration parameters: Memory can be allocated from 128 MB to 10,240 MB (vCPU scales proportionally with memory). Maximum execution duration is 15 minutes (900 seconds).",
          "Cold Starts occur when an execution environment is initialized for the first time. Provisioned Concurrency keeps a specified number of environments pre-warmed for latency-sensitive applications."
        ]
      },
      {
        heading: "Amazon API Gateway Features",
        paragraphs: [
          "API Gateway handles API traffic management, CORS support, authorization (Cognito, IAM, Lambda Authorizers), rate limiting, and API versioning.",
          "REST APIs support edge-optimized, regional, and private endpoints. HTTP APIs provide lightweight, low-latency RESTful APIs at a 70% cost reduction compared to REST APIs."
        ]
      }
    ],
    example: {
      title: "SERVERLESS WEB ARCHITECTURE",
      traditional: "Maintaining 4 virtual machines in standby running Apache and PHP just to handle occasional webhook events",
      cloud: "API Gateway HTTP API invokes AWS Lambda function on webhook trigger; Lambda writes payload to DynamoDB; zero cost when idle"
    },
    concepts: [
      {
        number: "01",
        title: "15-Minute Timeout",
        description: "Lambda executions time out at 15 minutes; for longer batch jobs, use AWS Step Functions, ECS Fargate, or AWS Batch."
      },
      {
        number: "02",
        title: "Provisioned Concurrency",
        description: "Eliminates cold-start latency spikes by keeping execution environments initialized and ready to respond immediately."
      },
      {
        number: "03",
        title: "API Gateway Throttling",
        description: "Prevents backend outages by configuring token-bucket rate limits (requests per second) and burst allowances per client API key."
      }
    ],
    quiz: {
      question: "A company wants to build a lightweight RESTful API that handles sporadic bursts of traffic with minimal operational overhead. The solution must incur zero costs when no requests are being processed. What should you recommend?",
      answers: [
        { id: "A", text: "Amazon EC2 instances running behind a Network Load Balancer", correct: false },
        { id: "B", text: "Amazon API Gateway with AWS Lambda functions and Amazon DynamoDB On-Demand", correct: true },
        { id: "C", text: "Amazon ECS on EC2 with a constant cluster of 2 m5.large instances", correct: false },
        { id: "D", text: "Elastic Beanstalk with Single-Instance architecture", correct: false }
      ],
      explanation: "API Gateway with AWS Lambda and DynamoDB On-Demand is a pure serverless stack that auto-scales dynamically with traffic and scales to zero with zero idle infrastructure cost."
    }
  },

  {
    id: 9,
    title: "Amazon Route 53 DNS Routing Policies & Health Checks",
    category: "Networking & DNS",
    duration: "10 min",
    intro:
      "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. It connects user requests to infrastructure running in AWS or on-premises, providing advanced traffic steering and automated failover capabilities.",
    keyIdea:
      "Route 53 routing policies determine how DNS queries are resolved: Simple, Weighted, Latency-based, Failover, Geolocation, Geoproximity, and Multi-Value Answer.",
    sections: [
      {
        heading: "Route 53 Routing Policies Explained",
        paragraphs: [
          "Simple: Directs traffic to a single resource or multiple IP addresses returned in random order.",
          "Weighted: Allocates percentages of traffic across multiple resources (ideal for A/B testing and canary deployments).",
          "Latency-based: Directs users to the AWS Region that provides the lowest network latency.",
          "Failover: Active-passive failover configuration routed based on Route 53 health check results.",
          "Geolocation: Routes traffic based on the geographic location of the DNS query origin (by continent, country, or US state).",
          "Geoproximity: Routes traffic based on geographic location of resources and users, with a 'bias' to expand or shrink regions."
        ]
      },
      {
        heading: "Alias Records vs. CNAME",
        paragraphs: [
          "CNAME records can point one domain name to another, but cannot be created for the zone apex (root domain, e.g. `example.com`).",
          "Route 53 Alias records can point directly to AWS resources (ALB, CloudFront distribution, S3 bucket website) at the zone apex, recognizing resource IP changes automatically with zero DNS lookup charges."
        ]
      }
    ],
    example: {
      title: "DISASTER RECOVERY DNS STEERING",
      traditional: "Manual DNS TTL wait times of 24 hours during data center outages while technicians update A-records",
      cloud: "Route 53 Failover routing policy detects primary ALB health failure within 30 seconds and reroutes traffic to DR Region standby"
    },
    concepts: [
      {
        number: "01",
        title: "Route 53 Alias Record",
        description: "AWS-specific DNS record that maps zone apex domains (example.com) to AWS resources with free internal DNS lookups."
      },
      {
        number: "02",
        title: "Failover Routing Policy",
        description: "Used for active-passive disaster recovery; routes to secondary target when primary health check threshold is breached."
      },
      {
        number: "03",
        title: "Geolocation vs Latency Routing",
        description: "Geolocation routes by client geographic boundary (e.g. EU GDPR compliance); Latency routes by fastest network connection time."
      }
    ],
    quiz: {
      question: "A streaming platform needs to ensure that users in Europe receive content from servers compliant with European privacy regulations, while Japanese users are routed to local Tokyo servers. Which Route 53 policy is required?",
      answers: [
        { id: "A", text: "Latency-based routing policy", correct: false },
        { id: "B", text: "Geolocation routing policy", correct: true },
        { id: "C", text: "Weighted routing policy", correct: false },
        { id: "D", text: "Multi-Value Answer routing policy", correct: false }
      ],
      explanation: "Geolocation routing lets you choose the resources that serve your traffic based on the geographic location of your users (continent or country boundaries), ensuring legal and regulatory compliance."
    }
  },

  {
    id: 10,
    title: "Global Acceleration: CloudFront, Global Accelerator & S3 Transfer",
    category: "Edge & Networking",
    duration: "10 min",
    intro:
      "Global users expect sub-second latency regardless of distance from your origin infrastructure. AWS edge networking services cache content and route TCP/UDP packets across the private AWS global fiber backbone.",
    keyIdea:
      "Use Amazon CloudFront to cache static and dynamic web content at edge locations worldwide. Use AWS Global Accelerator to route non-HTTP or real-time TCP/UDP traffic to optimal regional endpoints.",
    sections: [
      {
        heading: "Amazon CloudFront CDN",
        paragraphs: [
          "Amazon CloudFront is a fast content delivery network (CDN) that delivers data, videos, and APIs via hundreds of global Point of Presence (PoP) edge locations.",
          "Origin Access Control (OAC): Restricts access to S3 origins so users cannot bypass CloudFront to download bucket objects directly.",
          "CloudFront Functions & Lambda@Edge: Execute lightweight serverless code at edge locations for URL rewrites, header modifications, and authentication tokens."
        ]
      },
      {
        heading: "AWS Global Accelerator vs. CloudFront",
        paragraphs: [
          "CloudFront caches HTTP/HTTPS content (images, HTML, video streams) at Edge locations to minimize origin load.",
          "AWS Global Accelerator does not cache content. Instead, it provides two static Anycast IP addresses that route traffic over the AWS private global backbone directly to ALBs, NLBs, or EC2 instances, reducing jitter and packet loss for gaming, VoIP, and TCP/UDP applications."
        ]
      }
    ],
    example: {
      title: "GLOBAL USER TRAFFIC PATH",
      traditional: "Public internet packet routing crossing 18 third-party ISPs with 250ms latency and high packet drops",
      cloud: "Traffic enters nearest AWS Edge Location via Anycast IP, travels over private AWS dedicated fiber to origin in under 40ms"
    },
    concepts: [
      {
        number: "01",
        title: "Origin Access Control (OAC)",
        description: "Modern, secure method to authenticate CloudFront requests to private Amazon S3 buckets using AWS SigV4."
      },
      {
        number: "02",
        title: "Anycast IP Addresses",
        description: "Static IPs provided by Global Accelerator that route client requests to the closest healthy edge ingress location."
      },
      {
        number: "03",
        title: "S3 Transfer Acceleration",
        description: "Enables fast, secure uploads of large files over long distances directly into S3 using CloudFront edge locations."
      }
    ],
    quiz: {
      question: "A multiplayer gaming company requires ultra-low latency UDP connections for players worldwide, with traffic directed to the nearest healthy regional game server. Which AWS service should be deployed?",
      answers: [
        { id: "A", text: "Amazon CloudFront with S3 Origin", correct: false },
        { id: "B", text: "AWS Global Accelerator", correct: true },
        { id: "C", text: "Route 53 Weighted Routing", correct: false },
        { id: "D", text: "AWS Direct Connect", correct: false }
      ],
      explanation: "AWS Global Accelerator provides Anycast static IPs and routes TCP/UDP non-HTTP traffic over the AWS global private network directly to the nearest regional endpoint with instant failover."
    }
  },

  {
    id: 11,
    title: "Security & Governance: IAM Policies, Roles & AWS Organizations",
    category: "Security & Governance",
    duration: "11 min",
    intro:
      "Enterprise cloud security follows the principle of least privilege. AWS Identity and Access Management (IAM) and AWS Organizations provide granular access controls, federated SSO, and guardrails across hundreds of AWS accounts.",
    keyIdea:
      "Attach IAM Roles to compute resources instead of hardcoding API keys. Use AWS Organizations and Service Control Policies (SCPs) to establish hard perimeter guardrails across multi-account environments.",
    sections: [
      {
        heading: "IAM Roles & Temporary Credentials",
        paragraphs: [
          "IAM Roles allow trusted entities (such as EC2 instances, Lambda functions, or external federated users via OIDC/SAML) to assume temporary security credentials generated by AWS Security Token Service (STS).",
          "Never embed long-term AWS access keys (`AKIA...`) in application code, configuration files, or EC2 AMI images. EC2 Instance Profiles automatically rotate credentials every few hours."
        ]
      },
      {
        heading: "AWS Organizations & Service Control Policies (SCPs)",
        paragraphs: [
          "AWS Organizations consolidates multiple AWS accounts into a single tree hierarchy of Organizational Units (OUs).",
          "Service Control Policies (SCPs) specify the maximum allowed permissions for member accounts. SCPs act as guardrails: even the root user in a member account cannot perform an action denied by an SCP."
        ]
      }
    ],
    example: {
      title: "CREDENTIAL MANAGEMENT PATTERN",
      traditional: "Hardcoding database root passwords and AWS admin access keys in git repositories or flat text config files",
      cloud: "IAM Role attached to EC2 instance profile; application retrieves temporary STS tokens automatically via AWS SDK"
    },
    concepts: [
      {
        number: "01",
        title: "IAM Role vs IAM User",
        description: "IAM Users have permanent credentials; IAM Roles provide short-lived temporary security credentials via AWS STS."
      },
      {
        number: "02",
        title: "Service Control Policy (SCP)",
        description: "Organizational guardrail that restricts permissions for entire accounts without granting permissions directly."
      },
      {
        number: "03",
        title: "Permission Boundary",
        description: "An IAM advanced feature that sets the maximum permissions an identity-based policy can grant to a user or role."
      }
    ],
    quiz: {
      question: "A security audit discovers that developers are hardcoding IAM user access keys into EC2 application code to upload logs to Amazon S3. What is the most secure architectural remediation?",
      answers: [
        { id: "A", text: "Encrypt the access keys inside a private git repository", correct: false },
        { id: "B", text: "Create an IAM role with S3 write permissions and attach it to the EC2 instance profile", correct: true },
        { id: "C", text: "Store the access keys in an S3 bucket with server-side encryption", correct: false },
        { id: "D", text: "Rotate the IAM user access keys manually every 30 days", correct: false }
      ],
      explanation: "Attaching an IAM role to an EC2 instance profile allows the application to securely obtain temporary, automatically rotating credentials from AWS STS without storing keys in code."
    }
  },

  {
    id: 12,
    title: "Data Protection: AWS KMS, CloudHSM & Secrets Manager",
    category: "Security & Encryption",
    duration: "10 min",
    intro:
      "Data protection requires defense in depth: protecting data at rest through envelope encryption and securing sensitive database credentials and API tokens throughout their lifecycle.",
    keyIdea:
      "Use AWS KMS for scalable envelope encryption using customer master keys (KMS keys). Use AWS Secrets Manager to automatically rotate database credentials without application downtime.",
    sections: [
      {
        heading: "AWS Key Management Service (KMS) & Envelope Encryption",
        paragraphs: [
          "AWS KMS is a managed service that makes it easy to create and control cryptographic keys. KMS integrates with EBS, S3, RDS, DynamoDB, and Secrets Manager.",
          "Envelope Encryption: KMS encrypts a plaintext Data Key with a KMS Key (CMK). The data key is used to encrypt the actual data file, and the encrypted data key is stored alongside the cipher text. This minimizes KMS API call overhead for large datasets."
        ]
      },
      {
        heading: "Secrets Manager vs. Systems Manager Parameter Store",
        paragraphs: [
          "AWS Secrets Manager stores secrets (passwords, tokens) and natively supports automatic scheduled rotation for RDS, Aurora, and DocumentDB via Lambda functions.",
          "Systems Manager Parameter Store provides lightweight hierarchical key-value storage for config strings and secure strings, but lacks built-in automated database password rotation."
        ]
      }
    ],
    example: {
      title: "CREDENTIAL ROTATION PATTERN",
      traditional: "Database password changed manually once a year, requiring an IT maintenance window to reboot all app servers",
      cloud: "AWS Secrets Manager rotates RDS master password automatically every 30 days; Lambda updates RDS and Secrets Manager in tandem"
    },
    concepts: [
      {
        number: "01",
        title: "Envelope Encryption",
        description: "The practice of encrypting plaintext data with a data key, and then encrypting the data key under another key (KMS key)."
      },
      {
        number: "02",
        title: "AWS CloudHSM",
        description: "Dedicated FIPS 140-2 Level 3 hardware security module within your VPC for strict compliance requirements."
      },
      {
        number: "03",
        title: "Secrets Manager Auto-Rotation",
        description: "Seamlessly rotates database credentials without downtime using integrated AWS Lambda functions."
      }
    ],
    quiz: {
      question: "An application requires automated rotation of its database passwords every 30 days without requiring application redeployments or server downtime. Which AWS service provides this functionality natively?",
      answers: [
        { id: "A", text: "AWS Key Management Service (KMS)", correct: false },
        { id: "B", text: "AWS Secrets Manager", correct: true },
        { id: "C", text: "AWS Systems Manager Parameter Store (Standard)", correct: false },
        { id: "D", text: "Amazon S3 Versioning", correct: false }
      ],
      explanation: "AWS Secrets Manager natively supports automated credential rotation with built-in integration for Amazon RDS, updating the database password and secret value simultaneously."
    }
  },

  {
    id: 13,
    title: "VPC Perimeter Defense: Security Groups, NACLs, WAF & Shield",
    category: "Network Security",
    duration: "11 min",
    intro:
      "A secure VPC implements defense-in-depth across the OSI model. Security Groups provide instance-level stateful filtering, Network ACLs enforce subnet-level stateless rules, and AWS WAF inspects Layer 7 HTTP requests.",
    keyIdea:
      "Security Groups are stateful firewalls operating at the ENI level (return traffic is automatically allowed). Network ACLs are stateless firewalls operating at the subnet boundary.",
    sections: [
      {
        heading: "Security Groups vs. Network ACLs (NACLs)",
        paragraphs: [
          "Security Groups: Applied at the network interface (ENI) level. Stateful: if you allow inbound traffic on port 443, outbound response traffic is automatically allowed regardless of outbound rules. Supports allow rules only (cannot create deny rules). Can reference other Security Groups by ID.",
          "Network ACLs (NACLs): Applied at the subnet boundary. Stateless: inbound and outbound traffic must be explicitly allowed. Evaluates numbered rules in order (1-32766) and stops at first match. Supports both allow and deny rules (useful for blacklisting malicious IP ranges)."
        ]
      },
      {
        heading: "AWS WAF & AWS Shield",
        paragraphs: [
          "AWS WAF (Web Application Firewall): Inspects Layer 7 HTTP/S traffic directed to CloudFront, ALB, API Gateway, or AppSync to block SQL injection (SQLi), Cross-Site Scripting (XSS), and rate-based DDoS floods.",
          "AWS Shield: Shield Standard provides automatic, free Layer 3/4 DDoS protection for all AWS customers. Shield Advanced provides 24/7 DDoS Response Team (DRT) support and financial cost protection against scaling charges caused by attacks."
        ]
      }
    ],
    example: {
      title: "SECURITY CHAINING PATTERN",
      traditional: "Opening port 3306 on the database firewall to the entire subnet range `10.0.0.0/16`",
      cloud: "Database Security Group allows inbound port 3306 ONLY from the App Tier Security Group ID (`sg-app123`), preventing unauthorized internal access"
    },
    concepts: [
      {
        number: "01",
        title: "Stateful vs Stateless Filtering",
        description: "Security Groups automatically allow return traffic; NACLs require explicit rules for both inbound and outbound ports (including ephemeral ports 1024-65535)."
      },
      {
        number: "02",
        title: "Security Group Chaining",
        description: "Referencing one Security Group as the source in another Security Group rule to enforce strict multi-tier isolation."
      },
      {
        number: "03",
        title: "AWS WAF Web ACL",
        description: "Monitors and filters Layer 7 HTTP requests based on IP sets, regex patterns, headers, SQL injection, and rate limits."
      }
    ],
    quiz: {
      question: "A security engineer must immediately block a specific malicious IP address (198.51.100.23) from sending traffic to any resource within a public subnet. Which mechanism achieves this with the least administrative effort?",
      answers: [
        { id: "A", text: "Create an inbound DENY rule for 198.51.100.23/32 in the subnet's Network ACL", correct: true },
        { id: "B", text: "Add a DENY rule to all EC2 Security Groups in the subnet", correct: false },
        { id: "C", text: "Delete the Internet Gateway attached to the VPC", correct: false },
        { id: "D", text: "Configure Route 53 to redirect the IP address to localhost", correct: false }
      ],
      explanation: "Security Groups do not support explicit DENY rules. Network ACLs operate at the subnet boundary and support numbered rules with explicit DENY actions, making them ideal for IP address blacklisting."
    }
  },

  {
    id: 14,
    title: "Disaster Recovery Strategies & AWS Elastic Disaster Recovery",
    category: "Resilience & Business Continuity",
    duration: "11 min",
    intro:
      "Disaster recovery planning prepares organizations for catastrophic failures, ransomware events, or regional outages. Architecting for business continuity balances recovery objectives (RTO and RPO) against operational cost.",
    keyIdea:
      "RPO (Recovery Point Objective) is the maximum acceptable data loss in time. RTO (Recovery Time Objective) is the maximum acceptable downtime before business functions are restored.",
    sections: [
      {
        heading: "The 4 Disaster Recovery Strategies",
        paragraphs: [
          "1. Backup and Restore: High RTO (hours/days), high RPO (hours). Data is backed up to Amazon S3/AWS Backup and restored to a new region if disaster strikes. Lowest cost.",
          "2. Pilot Light: Lower RTO (tens of minutes), lower RPO (minutes). Core data is continuously replicated to the DR region (RDS Read Replica, EBS snapshots); compute nodes are kept off and spun up via CloudFormation/AMI during failover.",
          "3. Warm Standby: Minimal RTO (minutes), minimal RPO (seconds). A scaled-down but fully functional version of the environment runs continuously in the secondary region. During disaster, Auto Scaling scales it up to production capacity.",
          "4. Multi-Site Active-Active: Zero RTO, zero RPO. Full-capacity production environments run in two or more AWS regions simultaneously, with traffic distributed via Route 53 or Global Accelerator. Highest cost."
        ]
      },
      {
        heading: "AWS Elastic Disaster Recovery (DRS)",
        paragraphs: [
          "AWS DRS continuously replicates block-level storage from on-premises physical servers, VMware VMs, or other cloud instances into low-cost staging storage in an AWS target region, enabling rapid failover in minutes."
        ]
      }
    ],
    example: {
      title: "DISASTER RECOVERY ARCHITECTURE",
      traditional: "Renting a secondary physical data center with identical idle hardware, paying double power and cooling bills",
      cloud: "Pilot Light architecture: Aurora Global Database continuously replicates to secondary region; EC2 Auto Scaling group launches in 10 minutes when triggered"
    },
    concepts: [
      {
        number: "01",
        title: "RPO vs RTO",
        description: "RPO = How much data you can afford to lose; RTO = How long you can afford to be offline before restoring operations."
      },
      {
        number: "02",
        title: "Warm Standby vs Pilot Light",
        description: "Pilot Light has database running but zero compute running; Warm Standby has a smaller scaled-down version of compute always active."
      },
      {
        number: "03",
        title: "Aurora Global Database",
        description: "Cross-region storage replication with sub-second replication latency and typical failover time under 1 minute."
      }
    ],
    quiz: {
      question: "A company requires a disaster recovery strategy that provides an RTO of under 15 minutes and an RPO of under 5 minutes. The CFO wants to minimize ongoing infrastructure costs by avoiding full duplicate compute running 24/7. Which strategy fits best?",
      answers: [
        { id: "A", text: "Multi-Site Active-Active", correct: false },
        { id: "B", text: "Pilot Light with cross-region database replication and automated CloudFormation compute deployment", correct: true },
        { id: "C", text: "Weekly tape backups shipped to an AWS warehouse", correct: false },
        { id: "D", text: "Single-AZ deployment with daily manual EBS snapshots", correct: false }
      ],
      explanation: "Pilot Light keeps the database running and synchronized in the secondary region (yielding RPO under minutes) while leaving compute capacity turned off until needed, keeping operational costs low while meeting the 15-minute RTO."
    }
  },

  {
    id: 15,
    title: "Hybrid Cloud & Transit Networking: Direct Connect & Transit Gateway",
    category: "Hybrid & Advanced Networking",
    duration: "10 min",
    intro:
      "Enterprise migrations rarely happen overnight. Connecting on-premises data centers to AWS requires secure, high-bandwidth hybrid networking solutions that scale across dozens or hundreds of VPCs.",
    keyIdea:
      "AWS Transit Gateway acts as a central cloud router connecting hundreds of VPCs and on-premises networks in a hub-and-spoke topology, eliminating complex full-mesh VPC peering.",
    sections: [
      {
        heading: "AWS Site-to-Site VPN vs. Direct Connect (DX)",
        paragraphs: [
          "AWS Site-to-Site VPN: Establishes IPsec VPN tunnels over the public internet between an on-premises Customer Gateway (CGW) and a Virtual Private Gateway (VGW) or Transit Gateway. Setup is quick and encrypted, but throughput and latency depend on public internet conditions.",
          "AWS Direct Connect (DX): Provides a dedicated, physical private fiber connection from your data center to an AWS Direct Connect location. Delivers consistent network performance, lower data transfer rates, and eliminates public internet exposure. Traffic is unencrypted by default (can layer MACsec or IPsec VPN on top)."
        ]
      },
      {
        heading: "AWS Transit Gateway (TGW)",
        paragraphs: [
          "VPC Peering does not support transitive routing (if VPC A peers with B, and B with C, A cannot communicate with C).",
          "AWS Transit Gateway simplifies network architecture by replacing peer-to-peer meshes with a centralized hub-and-spoke model. A single TGW supports thousands of VPCs, AWS Direct Connect gateways, and VPN attachments with centralized route tables."
        ]
      }
    ],
    example: {
      title: "INTER-VPC ROUTING PATTERN",
      traditional: "50 VPCs requiring 1,225 individual VPC peering connections with massive routing table management overhead",
      cloud: "All 50 VPCs and the on-premises Direct Connect link attach to a single AWS Transit Gateway hub with centralized routing policies"
    },
    concepts: [
      {
        number: "01",
        title: "Transitive Routing",
        description: "VPC Peering does NOT support transitive routing; Transit Gateway enables transitive routing across VPCs and on-prem."
      },
      {
        number: "02",
        title: "AWS Direct Connect (DX)",
        description: "Dedicated private physical fiber connection (1 Gbps - 100 Gbps) offering predictable latency and reduced egress costs."
      },
      {
        number: "03",
        title: "Transit Gateway Route Tables",
        description: "Enable network isolation (e.g. Prod vs Dev VPC segments) by controlling which attachments can communicate."
      }
    ],
    quiz: {
      question: "An organization has 30 separate VPCs that need to communicate with one another and with an on-premises data center via a single Direct Connect link. Transitive communication between VPCs is strictly required. Which solution minimizes configuration complexity?",
      answers: [
        { id: "A", text: "Create 435 bilateral VPC peering connections", correct: false },
        { id: "B", text: "Deploy an AWS Transit Gateway and attach all 30 VPCs and the Direct Connect Gateway to it", correct: true },
        { id: "C", text: "Deploy public NAT Gateways in each VPC and route traffic across the internet", correct: false },
        { id: "D", text: "Configure VPC endpoints in every subnet", correct: false }
      ],
      explanation: "AWS Transit Gateway acts as a central cloud router supporting transitive routing across thousands of VPCs and on-premises connections, replacing complex point-to-point VPC peering meshes."
    }
  },

  {
    id: 16,
    title: "Cost Optimization: Spot Instances, Savings Plans & S3 Tiering",
    category: "Cost Optimization",
    duration: "10 min",
    intro:
      "Cost optimization is an ongoing architectural pillar. Designing cost-effective architectures involves selecting the optimal pricing models for compute, storage, and networking without compromising performance or reliability.",
    keyIdea:
      "Combine EC2 Spot Instances (up to 90% discount for fault-tolerant workloads) with Compute Savings Plans (up to 66% discount for steady-state usage) and S3 Intelligent-Tiering to minimize total cost of ownership (TCO).",
    sections: [
      {
        heading: "EC2 Pricing Models Strategy",
        paragraphs: [
          "On-Demand: Pay by the second with zero long-term commitment. Best for unpredictable, short-term workloads and dev/testing.",
          "Compute Savings Plans: Commit to a consistent hourly spend ($/hr) for a 1 or 3-year term. Applies automatically across EC2 instance families, AWS Fargate, and AWS Lambda regardless of region or OS (up to 66% savings).",
          "Spot Instances: Bid on unused EC2 capacity at discounts up to 90% off On-Demand. AWS can reclaim Spot instances with a 2-minute interruption warning. Ideal for batch jobs, containerized microservices, CI/CD, and big data."
        ]
      },
      {
        heading: "Data Transfer Cost Reduction",
        paragraphs: [
          "Inbound data transfer into AWS from the internet is always free.",
          "Data transfer between AWS services within the same Availability Zone using private IP is free. Cross-AZ data transfer within the same Region incurs charges in both directions.",
          "Use VPC Endpoints (Gateway endpoints for S3 and DynamoDB are completely free) to avoid routing traffic across expensive NAT Gateways."
        ]
      }
    ],
    example: {
      title: "COST OPTIMIZATION ARCHITECTURE",
      traditional: "Running all servers on full On-Demand pricing 24/7/365 and transferring internal S3 data through NAT Gateways",
      cloud: "Compute Savings Plan covers baseline 40% compute; Spot Fleets handle burst container jobs; S3 Gateway Endpoint routes S3 traffic for $0"
    },
    concepts: [
      {
        number: "01",
        title: "Compute Savings Plans",
        description: "Maximum flexibility: automatically discounts EC2, Fargate, and Lambda across any region, instance type, or OS."
      },
      {
        number: "02",
        title: "Spot Instance Interruption Notice",
        description: "AWS gives a 2-minute warning via EventBridge before reclaiming Spot capacity; handle via graceful shutdown scripts."
      },
      {
        number: "03",
        title: "S3 Gateway Endpoint",
        description: "Free VPC endpoint that routes S3 traffic directly over the AWS private network, avoiding NAT Gateway per-GB data processing fees."
      }
    ],
    quiz: {
      question: "A company processes daily batch video rendering jobs that run for 6 hours overnight. The workload is containerized, stateless, and can resume from checkpoints if interrupted. Which compute pricing model provides the lowest cost?",
      answers: [
        { id: "A", text: "On-Demand Instances", correct: false },
        { id: "B", text: "EC2 Spot Instances", correct: true },
        { id: "C", text: "Dedicated Hosts", correct: false },
        { id: "D", text: "Multi-AZ Reserved Instances", correct: false }
      ],
      explanation: "EC2 Spot Instances offer discounts up to 90% off On-Demand rates and are ideal for stateless, fault-tolerant, and checkpointed batch processing workloads."
    }
  }
];
