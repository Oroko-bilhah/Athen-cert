import { googleMockExam60 } from "./googleMockExamData.js";

export const practiceData = {
  aws: {
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    code: "CLF-C02",
    flashcards: [
      {
        id: "aws-fc-1",
        front: "What is an AWS Availability Zone (AZ)?",
        back: "One or more discrete data centers with redundant power, networking, and connectivity within an AWS Region.",
        category: "Global Infrastructure"
      },
      {
        id: "aws-fc-2",
        front: "What is the AWS Shared Responsibility Model for Infrastructure (IaaS)?",
        back: "AWS is responsible for 'Security OF the Cloud' (hardware, data centers, hypervisors); the customer is responsible for 'Security IN the Cloud' (guest OS, firewall rules, IAM, data encryption).",
        category: "Security & Compliance"
      },
      {
        id: "aws-fc-3",
        front: "What is Amazon S3 Storage Class for long-term archiving with retrieval times of hours?",
        back: "S3 Glacier Flexible Retrieval (or S3 Glacier Deep Archive for 12+ hour retrieval at lowest cost).",
        category: "Storage"
      },
      {
        id: "aws-fc-4",
        front: "What is the AWS Well-Architected Framework's 6 Pillars?",
        back: "1. Operational Excellence, 2. Security, 3. Reliability, 4. Performance Efficiency, 5. Cost Optimization, 6. Sustainability.",
        category: "Architecture"
      },
      {
        id: "aws-fc-5",
        front: "What is AWS Auto Scaling & Elastic Load Balancing (ELB)?",
        back: "Auto Scaling dynamically adds/removes EC2 instances based on demand; ELB automatically distributes incoming traffic across multiple healthy targets across multiple AZs.",
        category: "Compute & Networking"
      },
      {
        id: "aws-fc-6",
        front: "What is AWS IAM Least Privilege principle?",
        back: "Granting users and services only the minimal permissions necessary to perform their required tasks, avoiding wildcard (*) admin privileges.",
        category: "Security"
      }
    ],
    quickQuiz: [
      {
        id: "aws-q-1",
        question: "Which AWS service provides cost allocation tags and allows you to forecast future AWS spending?",
        answers: [
          { id: "A", text: "AWS Cost Explorer", correct: true },
          { id: "B", text: "Amazon Inspector", correct: false },
          { id: "C", text: "AWS Shield", correct: false },
          { id: "D", text: "AWS CloudTrail", correct: false }
        ],
        explanation: "AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time, including future forecast projections."
      },
      {
        id: "aws-q-2",
        question: "Under the AWS Shared Responsibility Model, which task is the sole responsibility of the customer when using Amazon EC2?",
        answers: [
          { id: "A", text: "Maintaining physical hardware in the data center", correct: false },
          { id: "B", text: "Patching the guest operating system and installing security software", correct: true },
          { id: "C", text: "Securing the hypervisor virtualization layer", correct: false },
          { id: "D", text: "Decommissioning old magnetic hard drives safely", correct: false }
        ],
        explanation: "In an IaaS service like EC2, AWS manages the underlying physical infrastructure and hypervisor, while the customer is responsible for patching and securing the guest OS, software, and firewalls."
      },
      {
        id: "aws-q-3",
        question: "Which AWS storage service provides a fully managed, scalable NFS file system that can be mounted concurrently by hundreds of EC2 instances?",
        answers: [
          { id: "A", text: "Amazon EBS (Elastic Block Store)", correct: false },
          { id: "B", text: "Amazon S3 Glacier", correct: false },
          { id: "C", text: "Amazon EFS (Elastic File System)", correct: true },
          { id: "D", text: "AWS Snowball", correct: false }
        ],
        explanation: "Amazon EFS is a managed NFS file system designed to be mounted by multiple EC2 instances, on-premises servers, and containers simultaneously."
      },
      {
        id: "aws-q-4",
        question: "What benefit does deploying an application across multiple Availability Zones in an AWS Region provide?",
        answers: [
          { id: "A", text: "High availability and fault tolerance against data center failures", correct: true },
          { id: "B", text: "Automatic international tax exemption", correct: false },
          { id: "C", text: "Zero storage charges on S3", correct: false },
          { id: "D", text: "Guaranteed 100% discount on EC2 spot instances", correct: false }
        ],
        explanation: "Availability Zones are physically separated facilities with independent power and networking. Multi-AZ deployment ensures resilience if an entire facility experiences an outage."
      },
      {
        id: "aws-q-5",
        question: "Which AWS service continuously monitors for unauthorized behavior and malicious activity such as cryptocurrency mining on EC2 instances using machine learning?",
        answers: [
          { id: "A", text: "Amazon GuardDuty", correct: true },
          { id: "B", text: "AWS CloudWatch", correct: false },
          { id: "C", text: "AWS Artifact", correct: false },
          { id: "D", text: "Amazon CloudFront", correct: false }
        ],
        explanation: "Amazon GuardDuty is an intelligent threat detection service that analyzes AWS CloudTrail, VPC Flow Logs, and DNS logs using ML to identify suspicious activities."
      }
    ],
    mockExam: [
      {
        id: "aws-m-1",
        question: "A company wants to receive alerts when their monthly AWS spend exceeds $1,000. Which tool should they configure?",
        domain: "Billing & Pricing",
        answers: [
          { id: "A", text: "AWS Budgets", correct: true },
          { id: "B", text: "AWS Cost and Usage Report", correct: false },
          { id: "C", text: "AWS Pricing Calculator", correct: false },
          { id: "D", text: "AWS Trusted Advisor only", correct: false }
        ],
        explanation: "AWS Budgets lets you set custom budgets that alert you via email or SNS when your cost or usage exceeds your budgeted threshold."
      },
      {
        id: "aws-m-2",
        question: "Which AWS service allows developers to run code without provisioning or managing servers, paying only for the compute time consumed?",
        domain: "Cloud Technology & Services",
        answers: [
          { id: "A", text: "AWS Lambda", correct: true },
          { id: "B", text: "Amazon EC2", correct: false },
          { id: "C", text: "AWS OpsWorks", correct: false },
          { id: "D", text: "Amazon Lightsail", correct: false }
        ],
        explanation: "AWS Lambda is a serverless compute service that executes code in response to events and automatically manages the underlying compute resources."
      },
      {
        id: "aws-m-3",
        question: "Which AWS support plan provides 24/7 access to Cloud Support Engineers and a designated Technical Account Manager (TAM)?",
        domain: "Billing & Pricing",
        answers: [
          { id: "A", text: "Basic Plan", correct: false },
          { id: "B", text: "Developer Plan", correct: false },
          { id: "C", text: "Business Plan", correct: false },
          { id: "D", text: "Enterprise Plan", correct: true }
        ],
        explanation: "The Enterprise Support plan is the only tier that includes a dedicated Technical Account Manager (TAM) and Concierge Support Team."
      },
      {
        id: "aws-m-4",
        question: "Which component of the AWS Global Infrastructure delivers low-latency content (cached web assets, videos) to end users worldwide?",
        domain: "Cloud Concepts",
        answers: [
          { id: "A", text: "Edge Locations / Points of Presence (PoP) with Amazon CloudFront", correct: true },
          { id: "B", text: "AWS Outposts", correct: false },
          { id: "C", text: "AWS Direct Connect locations only", correct: false },
          { id: "D", text: "AWS Regions without AZs", correct: false }
        ],
        explanation: "Amazon CloudFront delivers content through a worldwide network of Edge Locations, caching static and streaming content close to the end user."
      },
      {
        id: "aws-m-5",
        question: "Which tool should an organization use to download AWS compliance reports such as SOC 1, SOC 2, and PCI-DSS certifications?",
        domain: "Security & Compliance",
        answers: [
          { id: "A", text: "AWS Artifact", correct: true },
          { id: "B", text: "AWS Secrets Manager", correct: false },
          { id: "C", text: "Amazon GuardDuty", correct: false },
          { id: "D", text: "AWS Certificate Manager", correct: false }
        ],
        explanation: "AWS Artifact is a self-service portal that provides on-demand access to AWS compliance reports and cryptographic security agreements."
      }
    ],
    lab: {
      title: "AWS IAM Policy Analyzer & Simulator",
      scenario: "Evaluate an IAM policy JSON to verify whether an engineering role can delete S3 buckets or terminate EC2 production instances.",
      steps: [
        {
          instruction: "Inspect the Effect, Action, and Resource statements in the IAM policy block.",
          code: '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:GetObject", "s3:ListBucket"],\n      "Resource": "arn:aws:s3:::company-data/*"\n    },\n    {\n      "Effect": "Deny",\n      "Action": "s3:DeleteBucket",\n      "Resource": "*"\n    }\n  ]\n}',
          question: "Can an identity with this policy delete an S3 bucket named 'company-data'?",
          correctAnswer: "No, because explicit Deny always overrides any Allow in AWS IAM evaluation logic."
        }
      ]
    }
  },

  "aws-saa": {
    name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    code: "SAA-C03",
    flashcards: [
      {
        id: "saa-fc-1",
        front: "What is the difference between VPC Peering and AWS Transit Gateway?",
        back: "VPC Peering connects two VPCs in a 1-to-1 non-transitive mesh (A↔B, B↔C does NOT allow A↔C). Transit Gateway acts as a central cloud router supporting transitive routing across thousands of VPCs and on-premises connections in a hub-and-spoke topology.",
        category: "Networking"
      },
      {
        id: "saa-fc-2",
        front: "How do RDS Multi-AZ Standby and Read Replicas differ in high availability and read scaling?",
        back: "Multi-AZ uses synchronous replication to a standby instance in another AZ for automated failover (RPO = 0, standby CANNOT serve read traffic). Read Replicas use asynchronous replication for scaling read throughput (up to 15 replicas, can be cross-region).",
        category: "Databases"
      },
      {
        id: "saa-fc-3",
        front: "What is SQS Visibility Timeout and what happens when it expires?",
        back: "The duration (default 30s, max 12 hours) during which a message received by one consumer is hidden from other consumers. If the consumer fails to delete the message before the timeout expires, the message becomes visible again for another consumer to process.",
        category: "Application Integration"
      },
      {
        id: "saa-fc-4",
        front: "What is AWS KMS Envelope Encryption and why is it used?",
        back: "The practice of encrypting plaintext data with a unique Data Key, and encrypting the Data Key with a KMS Key (CMK). Storing the encrypted Data Key alongside ciphertext eliminates network latency and KMS API rate limits when encrypting large files.",
        category: "Security"
      },
      {
        id: "saa-fc-5",
        front: "What are the 4 AWS Disaster Recovery strategies ranked by lowest to highest RTO/RPO?",
        back: "1. Multi-Site Active-Active (RTO/RPO ~0, highest cost) → 2. Warm Standby (RTO/RPO minutes, scaled-down compute) → 3. Pilot Light (RTO/RPO ~10-15 mins, database replicates, compute launched on failover) → 4. Backup & Restore (RTO/RPO hours, lowest cost).",
        category: "Resilience"
      },
      {
        id: "saa-fc-6",
        front: "What is Security Group Chaining and why is it preferred over IP CIDR rules?",
        back: "Setting the source of a Security Group inbound rule to another Security Group ID (e.g., db-sg allows port 3306 from app-sg). It enforces least privilege dynamically as EC2 instances scale in/out, without needing hardcoded IP addresses.",
        category: "Security"
      },
      {
        id: "saa-fc-7",
        front: "When should you choose Network Load Balancer (NLB) over Application Load Balancer (ALB)?",
        back: "Choose NLB when you need Layer 4 ultra-low microsecond latency, millions of requests per second, support for static Elastic IPs per AZ, or non-HTTP protocols (TCP/UDP/TLS). Choose ALB for Layer 7 HTTP/HTTPS path, host, and header routing.",
        category: "High Availability"
      },
      {
        id: "saa-fc-8",
        front: "What is Amazon S3 Intelligent-Tiering and when is it the best choice?",
        back: "It automatically moves objects between frequent, infrequent, and archive access tiers based on changing access patterns with ZERO retrieval fees. Best when data access patterns are unknown or unpredictable.",
        category: "Storage"
      }
    ],
    quickQuiz: [
      {
        id: "saa-q-1",
        question: "An architect needs backend EC2 instances in private subnets to download software patches from the internet while preventing external hosts from initiating connections. What should be configured?",
        answers: [
          { id: "A", text: "Deploy a NAT Gateway in a public subnet and add a default route (0.0.0.0/0) to it in the private route table", correct: true },
          { id: "B", text: "Attach an Internet Gateway directly to the private subnet route table", correct: false },
          { id: "C", text: "Assign public IPv4 addresses to the backend EC2 instances", correct: false },
          { id: "D", text: "Configure an egress-only internet gateway for IPv4 traffic", correct: false }
        ],
        explanation: "A NAT Gateway deployed in a public subnet allows instances in private subnets to make outbound requests to the internet while blocking all unsolicited inbound connections."
      },
      {
        id: "saa-q-2",
        question: "A company requires automated database credential rotation every 30 days without downtime or application redeployment. Which AWS service natively fulfills this requirement?",
        answers: [
          { id: "A", text: "AWS Key Management Service (KMS)", correct: false },
          { id: "B", text: "AWS Secrets Manager", correct: true },
          { id: "C", text: "AWS Systems Manager Parameter Store Standard tier", correct: false },
          { id: "D", text: "Amazon Cognito User Pools", correct: false }
        ],
        explanation: "AWS Secrets Manager natively supports scheduled automated rotation for Amazon RDS, Aurora, and DocumentDB databases using built-in AWS Lambda rotation functions."
      },
      {
        id: "saa-q-3",
        question: "A high-throughput application receives intermittent bursts of thousands of orders per minute that overwhelm the relational database. Which decoupled design pattern absorbs the spikes?",
        answers: [
          { id: "A", text: "Place an Amazon SQS queue between the web servers and worker instances to buffer order messages", correct: true },
          { id: "B", text: "Upgrade the RDS instance to a larger compute family", correct: false },
          { id: "C", text: "Deploy a Network Load Balancer in front of the database instance", correct: false },
          { id: "D", text: "Migrate the database to Amazon S3 Standard with Glacier lifecycle rules", correct: false }
        ],
        explanation: "Amazon SQS decouples the web tier from the database tier, buffering high-volume traffic spikes and allowing backend workers to process orders at a sustainable rate."
      },
      {
        id: "saa-q-4",
        question: "A critical relational database must achieve an RTO of under 1 minute and an RPO of 0 during an Availability Zone failure. Which configuration should the architect select?",
        answers: [
          { id: "A", text: "Amazon RDS Single-AZ with hourly automated snapshots", correct: false },
          { id: "B", text: "Amazon Aurora DB cluster with multi-AZ replication or RDS Multi-AZ deployment", correct: true },
          { id: "C", text: "Amazon EC2 instance running self-managed MySQL with EBS gp3 volumes", correct: false },
          { id: "D", text: "Amazon DynamoDB with S3 cross-region replication", correct: false }
        ],
        explanation: "Amazon Aurora DB clusters (with 6 copies of data across 3 AZs) and RDS Multi-AZ deployments use synchronous replication to guarantee RPO = 0 and automatic failover in under 60 seconds."
      },
      {
        id: "saa-q-5",
        question: "A company must immediately block a known malicious IP range (198.51.100.0/24) from reaching all resources in a public subnet. Which feature should be used?",
        answers: [
          { id: "A", text: "Add a DENY rule to the subnet's Network ACL", correct: true },
          { id: "B", text: "Add a DENY rule to all EC2 Security Groups in the subnet", correct: false },
          { id: "C", text: "Delete the Internet Gateway attached to the VPC", correct: false },
          { id: "D", text: "Create an Amazon CloudFront distribution with geo-restriction", correct: false }
        ],
        explanation: "Security Groups only support ALLOW rules. Network ACLs operate at the subnet boundary and support numbered rules with explicit DENY actions, allowing immediate IP range blocking."
      }
    ],
    mockExam: [
      {
        id: "saa-m-1",
        question: "A financial services firm is building a web application on AWS that handles payments. The web tier must be protected against SQL injection, cross-site scripting (XSS), and HTTP flood DDoS attacks. Which combination of services provides this protection?",
        domain: "Domain 1: Design Secure Architectures",
        answers: [
          { id: "A", text: "Deploy an Application Load Balancer with AWS WAF and AWS Shield", correct: true },
          { id: "B", text: "Use Amazon Route 53 with Geolocation routing and Network ACLs only", correct: false },
          { id: "C", text: "Attach Amazon GuardDuty directly to an Internet Gateway", correct: false },
          { id: "D", text: "Deploy an internal Network Load Balancer with Security Groups", correct: false }
        ],
        explanation: "AWS WAF deployed on an Application Load Balancer or CloudFront distribution inspects Layer 7 traffic to block SQL injection and XSS. AWS Shield provides automated Layer 3/4 DDoS protection."
      },
      {
        id: "saa-m-2",
        question: "An image processing platform needs to allow 100 EC2 instances across 3 Availability Zones concurrent read-write access to a shared Linux directory with POSIX compliance. Which storage service should the architect select?",
        domain: "Domain 3: Design High-Performing Architectures",
        answers: [
          { id: "A", text: "Amazon EBS gp3 with Multi-Attach enabled", correct: false },
          { id: "B", text: "Amazon Elastic File System (Amazon EFS)", correct: true },
          { id: "C", text: "Amazon S3 Glacier Flexible Retrieval", correct: false },
          { id: "D", text: "Amazon FSx for Windows File Server", correct: false }
        ],
        explanation: "Amazon EFS is a managed NFSv4 filesystem that supports concurrent read-write access across hundreds of EC2 instances in multiple Availability Zones simultaneously."
      },
      {
        id: "saa-m-3",
        question: "A company requires a disaster recovery strategy that provides an RTO of under 15 minutes and an RPO of under 5 minutes for their web application. To keep costs low, full compute capacity must NOT run continuously in the secondary region. Which strategy should be chosen?",
        domain: "Domain 2: Design Resilient Architectures",
        answers: [
          { id: "A", text: "Multi-Site Active-Active", correct: false },
          { id: "B", text: "Pilot Light with cross-region database replication and automated CloudFormation compute provisioning", correct: true },
          { id: "C", text: "Backup and Restore using weekly manual tape exports", correct: false },
          { id: "D", text: "Single-AZ deployment with daily S3 bucket snapshots", correct: false }
        ],
        explanation: "Pilot Light continuously replicates the database to the secondary region (RPO < 5 mins) while compute capacity remains off until failover is triggered, achieving RTO < 15 mins at minimal idle cost."
      },
      {
        id: "saa-m-4",
        question: "A company runs stateless web microservices in an Auto Scaling group behind an Application Load Balancer. Traffic spikes rapidly every morning at 9:00 AM. Which scaling policy and compute combination maximizes cost efficiency?",
        domain: "Domain 4: Design Cost-Optimized Architectures",
        answers: [
          { id: "A", text: "Scheduled scaling with a mix of EC2 Spot and On-Demand instances managed by an Auto Scaling group", correct: true },
          { id: "B", text: "Over-provisioning On-Demand m5.4xlarge instances 24/7", correct: false },
          { id: "C", text: "Simple scaling policy based on disk write operations", correct: false },
          { id: "D", text: "Dedicated EC2 Hosts across 4 regions", correct: false }
        ],
        explanation: "Scheduled scaling pre-provisions capacity before known 9:00 AM spikes, while combining EC2 Spot instances (up to 90% savings) with baseline On-Demand capacity minimizes compute costs."
      },
      {
        id: "saa-m-5",
        question: "A gaming backend requires client UDP traffic to be routed to the nearest regional server with the lowest network latency and instant failover to an alternative region if a health check fails. Which service meets these criteria?",
        domain: "Domain 3: Design High-Performing Architectures",
        answers: [
          { id: "A", text: "Amazon CloudFront with an S3 Origin", correct: false },
          { id: "B", text: "AWS Global Accelerator", correct: true },
          { id: "C", text: "Route 53 Weighted Routing without health checks", correct: false },
          { id: "D", text: "VPC Peering across regions", correct: false }
        ],
        explanation: "AWS Global Accelerator provides static Anycast IPs and routes non-HTTP TCP and UDP traffic over the dedicated AWS global private backbone to the closest healthy regional endpoint."
      },
      {
        id: "saa-m-6",
        question: "An enterprise has 40 VPCs across multiple AWS accounts that all require communication with one another and with an on-premises data center over AWS Direct Connect. How should the network topology be designed?",
        domain: "Domain 2: Design Resilient Architectures",
        answers: [
          { id: "A", text: "Create 780 VPC peering connections in a full mesh", correct: false },
          { id: "B", text: "Deploy an AWS Transit Gateway and attach all 40 VPCs and the Direct Connect Gateway", correct: true },
          { id: "C", text: "Deploy an Internet Gateway in each VPC and use public internet routing", correct: false },
          { id: "D", text: "Establish individual IPsec VPN tunnels between every VPC", correct: false }
        ],
        explanation: "AWS Transit Gateway acts as a central cloud router connecting hundreds of VPCs and on-premises Direct Connect links in a hub-and-spoke topology, eliminating complex peering meshes."
      },
      {
        id: "saa-m-7",
        question: "A healthcare firm stores 100 TB of patient records in Amazon S3. The records must be preserved for 7 years and cannot be modified or deleted by anyone, including the AWS account root user. Which feature guarantees this?",
        domain: "Domain 1: Design Secure Architectures",
        answers: [
          { id: "A", text: "S3 Object Lock in Compliance Mode", correct: true },
          { id: "B", text: "S3 Object Lock in Governance Mode", correct: false },
          { id: "C", text: "S3 Bucket Versioning with MFA Delete only", correct: false },
          { id: "D", text: "IAM policy with Deny on s3:DeleteObject", correct: false }
        ],
        explanation: "S3 Object Lock in Compliance Mode prevents objects from being overwritten or deleted by any user, including the root user in the AWS account, for the duration of the retention period."
      },
      {
        id: "saa-m-8",
        question: "A company wants to decouple a monolith by emitting order-placed events that must trigger payment processing, inventory reservation, and email notifications simultaneously. Which architectural pattern should be used?",
        domain: "Domain 3: Design High-Performing Architectures",
        answers: [
          { id: "A", text: "SNS topic with fan-out to multiple dedicated SQS queues for each downstream service", correct: true },
          { id: "B", text: "A single SQS queue polled by payment, inventory, and email workers concurrently", correct: false },
          { id: "C", text: "A single EC2 instance running crontab scripts", correct: false },
          { id: "D", text: "Amazon Kinesis Data Firehose writing directly to RDS", correct: false }
        ],
        explanation: "The SNS fan-out pattern publishes the event once to an Amazon SNS topic, which replicates it in parallel to separate SQS queues subscribed by each microservice."
      },
      {
        id: "saa-m-9",
        question: "A media website serves static images and CSS from an S3 bucket. The architect must ensure users cannot access the S3 bucket directly via its S3 URL and can only view assets via Amazon CloudFront. How can this be accomplished?",
        domain: "Domain 1: Design Secure Architectures",
        answers: [
          { id: "A", text: "Configure Origin Access Control (OAC) on the CloudFront distribution and restrict bucket policy access to the CloudFront service principal", correct: true },
          { id: "B", text: "Make the S3 bucket public and enable CloudFront SSL", correct: false },
          { id: "C", text: "Deploy a NAT Gateway between CloudFront and Amazon S3", correct: false },
          { id: "D", text: "Attach an IAM role directly to the client browser", correct: false }
        ],
        explanation: "Origin Access Control (OAC) authenticates CloudFront to private S3 buckets using AWS SigV4, ensuring that end users cannot bypass CloudFront caching and security policies."
      },
      {
        id: "saa-m-10",
        question: "An application on EC2 needs to query an Amazon DynamoDB table. How should the application securely authenticate to DynamoDB?",
        domain: "Domain 1: Design Secure Architectures",
        answers: [
          { id: "A", text: "Assign an IAM role with DynamoDB permissions to the EC2 instance profile", correct: true },
          { id: "B", text: "Embed IAM access keys in the application's configuration file", correct: false },
          { id: "C", text: "Store IAM access keys in an unencrypted S3 bucket", correct: false },
          { id: "D", text: "Create an IAM user with admin permissions and write the secret key in the OS environment variables", correct: false }
        ],
        explanation: "Assigning an IAM role to an EC2 instance profile enables applications running on the instance to retrieve temporary, automatically rotated AWS credentials without hardcoding credentials in code."
      }
    ],
    lab: {
      title: "3-Tier Resilient VPC Architecture & Security Group Chaining",
      scenario: "Configure a highly available 3-tier AWS architecture spanning 2 Availability Zones. Define network subnets, route tables, and chain security groups so that database instances only accept connections from application servers.",
      steps: [
        {
          instruction: "Inspect the VPC CIDR block and public/private subnets across multiple AZs.",
          code: 'aws ec2 describe-subnets --filters "Name=vpc-id,Values=vpc-0a1b2c3d4e5f67890" --query "Subnets[*].[SubnetId,AvailabilityZone,CidrBlock,MapPublicIpOnLaunch]" --output table',
          question: "Why should database subnets have 'MapPublicIpOnLaunch' set to false?",
          correctAnswer: "Database instances should never receive public IP addresses to guarantee they remain private and unreachable directly from the public internet."
        },
        {
          instruction: "Verify that private subnets route internet-bound traffic through the NAT Gateway in the public subnet.",
          code: 'aws ec2 describe-route-tables --filters "Name=vpc-id,Values=vpc-0a1b2c3d4e5f67890" --query "RouteTables[*].Routes[?DestinationCidrBlock==\'0.0.0.0/0\']" --output json',
          question: "What route target should be configured for 0.0.0.0/0 in the private subnet route table?",
          correctAnswer: "Target 'nat-xxxxxxxxxxxxxxxxx' (the NAT Gateway ID located in the corresponding public subnet)."
        },
        {
          instruction: "Configure Security Group chaining: allow inbound port 3306 on the database security group exclusively from the application security group.",
          code: 'aws ec2 authorize-security-group-ingress --group-id sg-01db23456789abcde --protocol tcp --port 3306 --source-group sg-09app87654321fedc',
          question: "What is the primary advantage of specifying '--source-group' instead of an IP CIDR block?",
          correctAnswer: "It automatically scales with EC2 Auto Scaling; any instance bearing 'sg-09app...' is permitted without having to manually modify firewall IP rules as instances launch or terminate."
        },
        {
          instruction: "Verify Application Load Balancer target group health checks across both Availability Zones.",
          code: 'aws elbv2 describe-target-health --target-group-arn arn:aws:elasticloadbalancing:us-east-1:123456789012:targetgroup/app-tg/73e2d6bc24d8a067',
          question: "What target health state confirms an EC2 instance is ready to receive traffic?",
          correctAnswer: "State 'healthy', indicating that the instance responded to consecutive HTTP/TCP health checks within the specified threshold."
        }
      ]
    }
  },

  azure: {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    code: "AZ-900",
    flashcards: [
      {
        id: "az-fc-1",
        front: "What is an Azure Resource Group?",
        back: "A logical container that holds related Azure resources for an application so you can manage, secure, and delete them as a single collective unit.",
        category: "Governance"
      },
      {
        id: "az-fc-2",
        front: "What is Azure Policy vs Role-Based Access Control (RBAC)?",
        back: "RBAC focuses on user actions (who can do what). Azure Policy focuses on resource properties (e.g. enforce only allowed VM sizes or required geographic locations).",
        category: "Security & Governance"
      },
      {
        id: "az-fc-3",
        front: "What are Azure Availability Zones?",
        back: "Physically separate locations within an Azure region, each equipped with independent power, cooling, and networking to provide 99.99% VM SLA.",
        category: "Architecture"
      },
      {
        id: "az-fc-4",
        front: "What is Microsoft Entra ID (formerly Azure AD)?",
        back: "A cloud-based identity and access management service providing authentication, Single Sign-On (SSO), MFA, and conditional access policies.",
        category: "Identity"
      },
      {
        id: "az-fc-5",
        front: "What is Azure Total Cost of Ownership (TCO) Calculator?",
        back: "A tool used to estimate the cost savings you can realize by migrating existing on-premises workloads into Microsoft Azure over 3-5 years.",
        category: "Pricing"
      },
      {
        id: "az-fc-6",
        front: "What is the Shared Responsibility Model rule for customer data?",
        back: "The customer ALWAYS retains 100% responsibility for customer data, information, endpoints, and identity across all cloud models (IaaS, PaaS, SaaS).",
        category: "Cloud Concepts"
      },
      {
        id: "az-fc-7",
        front: "What is the difference between CapEx and OpEx?",
        back: "CapEx is upfront spending on physical assets (depreciated over years); OpEx is ongoing pay-as-you-go consumption (deducted in current tax year).",
        category: "Cloud Concepts"
      },
      {
        id: "az-fc-8",
        front: "What is Azure ExpressRoute vs VPN Gateway?",
        back: "VPN Gateway connects over the encrypted public internet; ExpressRoute provides a private, dedicated physical connection bypassing the public internet.",
        category: "Networking"
      },
      {
        id: "az-fc-9",
        front: "What are the 4 levels of the Azure Management Hierarchy?",
        back: "Management Groups → Subscriptions → Resource Groups → Resources (Permissions & policies inherit downward).",
        category: "Architecture"
      },
      {
        id: "az-fc-10",
        front: "What is the difference between Azure Load Balancer and Application Gateway?",
        back: "Azure Load Balancer is Layer 4 (TCP/UDP); Application Gateway is Layer 7 (HTTP/HTTPS with URL routing and Web Application Firewall).",
        category: "Networking"
      }
    ],
    quickQuiz: [
      {
        id: "az-q-1",
        question: "Which Azure service provides a serverless platform to execute event-driven code without managing infrastructure?",
        answers: [
          { id: "A", text: "Azure Functions", correct: true },
          { id: "B", text: "Azure Virtual Machines", correct: false },
          { id: "C", text: "Azure Virtual Network", correct: false },
          { id: "D", text: "Azure Disk Storage", correct: false }
        ],
        explanation: "Azure Functions is an event-driven serverless compute platform that lets you run code on-demand without managing server infrastructure."
      },
      {
        id: "az-q-2",
        question: "What is the primary benefit of deploying resources across an Azure Region Pair (e.g., East US and West US)?",
        answers: [
          { id: "A", text: "Sequential platform updates and cross-region disaster recovery isolation", correct: true },
          { id: "B", text: "Free unlimited outbound bandwidth between pairs", correct: false },
          { id: "C", text: "Automatic shared CPU overclocking", correct: false },
          { id: "D", text: "Elimination of subscription limits", correct: false }
        ],
        explanation: "Azure Region Pairs are situated at least 300 miles apart. Azure updates region pairs sequentially to minimize downtime and provide disaster recovery resilience."
      },
      {
        id: "az-q-3",
        question: "Which Azure governance tool enables organizations to enforce organizational standards and prevent the creation of non-compliant resources?",
        answers: [
          { id: "A", text: "Azure Policy", correct: true },
          { id: "B", text: "Azure Advisor", correct: false },
          { id: "C", text: "Azure Service Health", correct: false },
          { id: "D", text: "Azure Monitor", correct: false }
        ],
        explanation: "Azure Policy evaluates your resources and flags or prevents deployments that violate corporate governance standards."
      },
      {
        id: "az-q-4",
        question: "Which Azure storage redundancy option replicates data synchronously across three separate Availability Zones within the primary region?",
        answers: [
          { id: "A", text: "Zone-Redundant Storage (ZRS)", correct: true },
          { id: "B", text: "Locally Redundant Storage (LRS)", correct: false },
          { id: "C", text: "Geo-Redundant Storage (GRS)", correct: false },
          { id: "D", text: "Read-Access Geo-Redundant Storage (RA-GRS)", correct: false }
        ],
        explanation: "Zone-Redundant Storage (ZRS) writes data synchronously across three distinct Availability Zones in the primary region."
      },
      {
        id: "az-q-5",
        question: "Under the Shared Responsibility Model, which component is ALWAYS the customer's responsibility in IaaS, PaaS, and SaaS?",
        answers: [
          { id: "A", text: "Information and customer data", correct: true },
          { id: "B", text: "Physical server maintenance", correct: false },
          { id: "C", text: "Hypervisor virtualization patching", correct: false },
          { id: "D", text: "Datacenter cooling and power", correct: false }
        ],
        explanation: "Customer data, information, endpoints, and identity access management are ALWAYS the customer's sole responsibility across all deployment models."
      }
    ],
    mockExam: [
      {
        id: "az-m-1",
        question: "Which Azure storage tier is best suited for data that is infrequently accessed and can tolerate retrieval latency of up to 15 hours at lowest storage cost?",
        domain: "Azure Architecture & Services",
        answers: [
          { id: "A", text: "Archive tier", correct: true },
          { id: "B", text: "Cool tier", correct: false },
          { id: "C", text: "Hot tier", correct: false },
          { id: "D", text: "Premium SSD tier", correct: false }
        ],
        explanation: "The Archive tier offers the lowest storage cost, suitable for long-term historical records where hours of rehydration latency are acceptable."
      },
      {
        id: "az-m-2",
        question: "What is the guaranteed SLA for two or more Azure Virtual Machine instances deployed across multiple Availability Zones in the same region?",
        domain: "Azure Management & Governance",
        answers: [
          { id: "A", text: "99.99%", correct: true },
          { id: "B", text: "99.9%", correct: false },
          { id: "C", text: "99.0%", correct: false },
          { id: "D", text: "100%", correct: false }
        ],
        explanation: "Microsoft guarantees at least 99.99% availability for VMs deployed across two or more Availability Zones in the same Azure region."
      },
      {
        id: "az-m-3",
        question: "Which service gives personalized recommendations for optimizing Azure deployments across Reliability, Security, Performance, Cost, and Operational Excellence?",
        domain: "Azure Management & Governance",
        answers: [
          { id: "A", text: "Azure Advisor", correct: true },
          { id: "B", text: "Azure Sentinel", correct: false },
          { id: "C", text: "Azure DevOps", correct: false },
          { id: "D", text: "Azure Key Vault", correct: false }
        ],
        explanation: "Azure Advisor analyzes your configurations and telemetry to provide actionable best practice recommendations."
      },
      {
        id: "az-m-4",
        question: "A company wants to prevent administrators from accidentally deleting a mission-critical Azure Cosmos DB account without preventing them from updating database items. What should be applied?",
        domain: "Azure Management & Governance",
        answers: [
          { id: "A", text: "A 'CanNotDelete' (Delete) Resource Lock", correct: true },
          { id: "B", text: "A 'ReadOnly' Resource Lock", correct: false },
          { id: "C", text: "An Azure Policy denying all modifications", correct: false },
          { id: "D", text: "A Network Security Group rule", correct: false }
        ],
        explanation: "A 'CanNotDelete' lock allows authorized users to read and modify resources while blocking deletion requests."
      },
      {
        id: "az-m-5",
        question: "Which hybrid connectivity option provides a private, dedicated physical connection between an on-premises datacenter and Azure that bypasses the public internet entirely?",
        domain: "Azure Architecture & Services",
        answers: [
          { id: "A", text: "Azure ExpressRoute", correct: true },
          { id: "B", text: "Site-to-Site VPN Gateway", correct: false },
          { id: "C", text: "Azure Front Door", correct: false },
          { id: "D", text: "Point-to-Site VPN", correct: false }
        ],
        explanation: "Azure ExpressRoute extends on-premises networks into Microsoft cloud over a private connection facilitated by a connectivity partner without traversing the public internet."
      }
    ],
    lab: {
      title: "Azure RBAC & Role Assignment Workshop",
      scenario: "A junior administrator needs permission to restart Azure Virtual Machines in the 'Production-RG' Resource Group without having permission to delete or modify networking.",
      steps: [
        {
          instruction: "Select the appropriate built-in Azure RBAC role and scope.",
          code: "az role assignment create --assignee user@company.com --role 'Virtual Machine Contributor' --resource-group 'Production-RG'",
          question: "Why is 'Virtual Machine Contributor' preferred over 'Owner' or 'Contributor'?",
          correctAnswer: "Because 'Virtual Machine Contributor' follows least privilege by restricting actions to VM management only without granting network or RBAC access."
        }
      ]
    }
  },

  google: {
    name: "Google Cloud Fundamentals (Cloud Digital Leader)",
    code: "GCP-CDL",
    flashcards: [
      {
        id: "gcp-fc-1",
        front: "What is the Google Cloud Resource Hierarchy?",
        back: "Organization (root) → Folders (departments/environments) → Projects (billing & resource boundary) → Resources (VMs, Buckets, Datasets).",
        category: "Resource Hierarchy"
      },
      {
        id: "gcp-fc-2",
        front: "What is Google BigQuery?",
        back: "A serverless, multi-cloud, petabyte-scale enterprise data warehouse enabling lightning-fast ANSI SQL queries and built-in ML (BigQuery ML).",
        category: "Data & Analytics"
      },
      {
        id: "gcp-fc-3",
        front: "What is Google Cloud IAM Roles hierarchy?",
        back: "Basic Roles (Owner, Editor, Viewer - avoid in prod), Predefined Roles (granular e.g. roles/storage.objectViewer), and Custom Roles (user-defined permissions).",
        category: "Security & IAM"
      },
      {
        id: "gcp-fc-4",
        front: "What is Google Cloud Run?",
        back: "A fully managed serverless compute platform that automatically runs and scales containerized applications with instant scale-to-zero and microsecond billing.",
        category: "Compute"
      },
      {
        id: "gcp-fc-5",
        front: "What is Cloud Spanner?",
        back: "A globally distributed relational database service providing horizontal scaling across regions, external ACID consistency, and a 99.999% SLA.",
        category: "Databases"
      },
      {
        id: "gcp-fc-6",
        front: "What are the 4 Cloud Storage classes?",
        back: "Standard (frequently accessed, no retrieval fee), Nearline (30-day min, accessed < 1/mo), Coldline (90-day min, accessed < 1/quarter), Archive (365-day min, lowest storage cost, ms retrieval).",
        category: "Storage"
      },
      {
        id: "gcp-fc-7",
        front: "What is Google Cloud Pub/Sub?",
        back: "A fully managed, global, asynchronous publish/subscribe messaging service that ingests millions of events per second and decouples microservices.",
        category: "Data & Messaging"
      },
      {
        id: "gcp-fc-8",
        front: "What is Google Cloud Armor?",
        back: "Enterprise Web Application Firewall (WAF) and DDoS defense service deployed at Google's edge to protect against OWASP Top 10 web vulnerabilities.",
        category: "Security"
      },
      {
        id: "gcp-fc-9",
        front: "What is Vertex AI & Gemini?",
        back: "Vertex AI is Google's unified AI/ML platform. Gemini is Google's multimodal foundation model natively processing text, code, audio, image, and video simultaneously.",
        category: "AI & ML"
      },
      {
        id: "gcp-fc-10",
        front: "What are Committed Use Discounts (CUDs)?",
        back: "Discount contracts (up to 57–70% savings) offered by Google Cloud in exchange for committing to a continuous baseline level of compute over 1 or 3 years.",
        category: "Billing & Cost"
      }
    ],
    quickQuiz: [
      {
        id: "gcp-q-1",
        question: "In Google Cloud, which entity is required to associate billing, enable APIs, and contain all active resources?",
        answers: [
          { id: "A", text: "A Google Cloud Project", correct: true },
          { id: "B", text: "A Cloud Storage Bucket", correct: false },
          { id: "C", text: "A Compute Engine VM", correct: false },
          { id: "D", text: "A VPC Subnet", correct: false }
        ],
        explanation: "All Google Cloud resources are allocated and grouped inside Projects, which manage billing, permissions, and enabled APIs."
      },
      {
        id: "gcp-q-2",
        question: "Which Google Cloud database service is a globally distributed, strongly consistent relational database with 99.999% availability?",
        answers: [
          { id: "A", text: "Cloud Spanner", correct: true },
          { id: "B", text: "Cloud SQL", correct: false },
          { id: "C", text: "Cloud Bigtable", correct: false },
          { id: "D", text: "Firestore", correct: false }
        ],
        explanation: "Cloud Spanner is Google's fully managed, mission-critical relational database combining ACID transactions with global scale and five 9s availability."
      },
      {
        id: "gcp-q-3",
        question: "An organization wants to run containerized microservices without managing Kubernetes clusters, with automatic scaling to zero when idle. Which service should they choose?",
        answers: [
          { id: "A", text: "Cloud Run", correct: true },
          { id: "B", text: "Compute Engine VM", correct: false },
          { id: "C", text: "Cloud Spanner", correct: false },
          { id: "D", text: "Filestore", correct: false }
        ],
        explanation: "Cloud Run is a fully managed serverless container runtime that scales automatically from 0 to thousands of instances based on incoming HTTP requests."
      },
      {
        id: "gcp-q-4",
        question: "Which Cloud Storage class is the most cost-effective option for storing legal compliance records that are kept for 10 years and accessed less than once a year?",
        answers: [
          { id: "A", text: "Archive Storage", correct: true },
          { id: "B", text: "Standard Storage", correct: false },
          { id: "C", text: "Nearline Storage", correct: false },
          { id: "D", text: "Persistent Disk HDD", correct: false }
        ],
        explanation: "Archive Storage offers the lowest storage price ($0.0012/GB/month) with 11 9s durability and millisecond retrieval latency."
      },
      {
        id: "gcp-q-5",
        question: "Which Google Cloud security practice recommends assigning specific Predefined Roles rather than broad Basic Roles (Owner/Editor/Viewer)?",
        answers: [
          { id: "A", text: "Principle of Least Privilege", correct: true },
          { id: "B", text: "Multi-Cloud Bursting", correct: false },
          { id: "C", text: "CapEx Amortization", correct: false },
          { id: "D", text: "Auto Mode VPC", correct: false }
        ],
        explanation: "The Principle of Least Privilege states that identities should receive only the minimal fine-grained permissions required to perform their duties."
      }
    ],
    mockExam: googleMockExam60,
    lab: {
      title: "Google Cloud Project & IAM Simulation",
      scenario: "Configure a service account with least privilege permissions to allow Cloud Dataflow jobs to read from Cloud Storage without admin privileges.",
      steps: [
        {
          instruction: "Evaluate the role 'roles/storage.objectViewer' vs 'roles/storage.admin'.",
          code: "gcloud projects add-iam-policy-binding my-gcp-proj --member='serviceAccount:sa@my-gcp-proj.iam.gserviceaccount.com' --role='roles/storage.objectViewer'",
          question: "What capability does this grant to the service account?",
          correctAnswer: "Grants permission to read and list objects in Cloud Storage buckets without permitting modifications or bucket deletion."
        }
      ]
    }
  },

  cisco: {
    name: "Cisco Certified Network Associate (CCNA 200-301)",
    code: "CCNA 200-301",
    flashcards: [
      {
        id: "cc-fc-1",
        front: "What is the difference between a Collision Domain and a Broadcast Domain?",
        back: "A collision domain is a physical network segment where data packets can collide (separated by Layer 2 switch ports). A broadcast domain is the area where a broadcast frame propagates (separated by Layer 3 routers).",
        category: "Fundamentals"
      },
      {
        id: "cc-fc-2",
        front: "What is the Administrative Distance (AD) of OSPF, EIGRP, and Static Routes?",
        back: "Directly Connected = 0, Static Route = 1, eBGP = 20, EIGRP (internal) = 90, OSPF = 110, RIP = 120 (Lower AD is preferred).",
        category: "Routing"
      },
      {
        id: "cc-fc-3",
        front: "What are the 3 RFC 1918 Private IPv4 address blocks?",
        back: "Class A: 10.0.0.0/8 (10.0.0.0 to 10.255.255.255)\nClass B: 172.16.0.0/12 (172.16.0.0 to 172.31.255.255)\nClass C: 192.168.0.0/16 (192.168.0.0 to 192.168.255.255)",
        category: "Addressing"
      },
      {
        id: "cc-fc-4",
        front: "What does IEEE 802.1Q frame tagging do on trunk links?",
        back: "Inserts a 4-byte header containing a 12-bit VLAN ID into Ethernet frames so multiple VLANs can share a single physical link.",
        category: "Switching"
      },
      {
        id: "cc-fc-5",
        front: "What are the 4 steps in the DHCP lease negotiation process?",
        back: "DORA: Discover (Client broadcast) -> Offer (Server unicast/broadcast) -> Request (Client broadcast) -> Acknowledge (Server unicast/broadcast).",
        category: "Services"
      }
    ],
    quickQuiz: [
      {
        id: "cc-q-1",
        question: "How many usable host IP addresses are available in a /28 subnet?",
        answers: [
          { id: "A", text: "14 usable hosts", correct: true },
          { id: "B", text: "16 usable hosts", correct: false },
          { id: "C", text: "30 usable hosts", correct: false },
          { id: "D", text: "6 usable hosts", correct: false }
        ],
        explanation: "A /28 mask leaves 4 host bits (32 - 28 = 4). Total addresses = 2^4 = 16. Usable addresses = 16 - 2 = 14 (subtracting network and broadcast addresses)."
      },
      {
        id: "cc-q-2",
        question: "Which Spanning Tree Protocol (STP) standard provides sub-2-second convergence by introducing Discarding, Learning, and Forwarding port states?",
        answers: [
          { id: "A", text: "Rapid Spanning Tree Protocol (RSTP - IEEE 802.1w)", correct: true },
          { id: "B", text: "Legacy STP (IEEE 802.1D)", correct: false },
          { id: "C", text: "VTP Version 3", correct: false },
          { id: "D", text: "CDP (Cisco Discovery Protocol)", correct: false }
        ],
        explanation: "RSTP (802.1w) drastically improves convergence time over legacy 802.1D by proactively negotiating port state transitions via handshakes."
      },
      {
        id: "cc-q-3",
        question: "What is the default wildcard mask for a /24 subnet (255.255.255.0) in an Extended Cisco ACL?",
        answers: [
          { id: "A", text: "0.0.0.255", correct: true },
          { id: "B", text: "255.255.255.0", correct: false },
          { id: "C", text: "0.0.255.255", correct: false },
          { id: "D", text: "255.255.0.0", correct: false }
        ],
        explanation: "A wildcard mask is the bitwise inversion of the subnet mask: 255.255.255.255 - 255.255.255.0 = 0.0.0.255."
      }
    ],
    mockExam: [
      {
        id: "cc-m-1",
        question: "A technician configures 'ip helper-address 10.1.1.50' on interface GigabitEthernet0/0. What does this accomplish?",
        domain: "IP Services",
        answers: [
          { id: "A", text: "Forwards broadcast DHCP Discover packets from local clients as unicast packets to the DHCP server at 10.1.1.50", correct: true },
          { id: "B", text: "Enables dynamic OSPF neighbor adjacency across interface G0/0", correct: false },
          { id: "C", text: "Blocks all unauthorized ARP spoofing attacks", correct: false },
          { id: "D", text: "Sets the default gateway of the router itself to 10.1.1.50", correct: false }
        ],
        explanation: "The 'ip helper-address' command enables DHCP Relay by converting broadcast DHCP client messages into routed unicast packets directed to the designated DHCP server."
      },
      {
        id: "cc-m-2",
        question: "Which routing protocol uses Dijkstra's Shortest Path First algorithm, maintains a Link-State Database (LSDB), and organizes routers into Areas?",
        domain: "IP Connectivity",
        answers: [
          { id: "A", text: "OSPF (Open Shortest Path First)", correct: true },
          { id: "B", text: "RIPv2", correct: false },
          { id: "C", text: "EIGRP", correct: false },
          { id: "D", text: "STP", correct: false }
        ],
        explanation: "OSPF is a link-state routing protocol that utilizes Dijkstra's SPF algorithm to calculate loop-free shortest paths within hierarchical areas anchored by Area 0."
      }
    ],
    lab: {
      title: "Interactive IPv4 Subnet Calculator & Practice Lab",
      scenario: "You have been allocated the IP block 192.168.10.0/24 and must create 4 separate subnets for Engineering, Sales, HR, and Guests.",
      steps: [
        {
          instruction: "Calculate the required new CIDR prefix to create 4 equal-sized subnets.",
          code: "Borrow 2 host bits (2^2 = 4 subnets) -> New mask = /26 (255.255.255.192)\nSubnet 1: 192.168.10.0/26 (Hosts: .1 to .62, Broadcast: .63)\nSubnet 2: 192.168.10.64/26 (Hosts: .65 to .126, Broadcast: .127)\nSubnet 3: 192.168.10.128/26 (Hosts: .129 to .190, Broadcast: .191)\nSubnet 4: 192.168.10.192/26 (Hosts: .193 to .254, Broadcast: .255)",
          question: "How many usable hosts does each /26 subnet support?",
          correctAnswer: "62 usable host addresses per subnet (64 total - 2 reserved for network & broadcast)."
        }
      ]
    }
  },

  comptia: {
    name: "CompTIA IT Fundamentals & A+",
    code: "CompTIA ITF+ / A+",
    flashcards: [
      {
        id: "cp-fc-1",
        front: "What are the 6 steps of the CompTIA Troubleshooting Methodology?",
        back: "1. Identify problem -> 2. Establish theory of probable cause -> 3. Test theory -> 4. Establish plan of action & implement -> 5. Verify full system functionality -> 6. Document findings.",
        category: "Troubleshooting"
      },
      {
        id: "cp-fc-2",
        front: "What is the difference between Type 1 and Type 2 Hypervisors?",
        back: "Type 1 (Bare-Metal) installs directly on hardware (ESXi, Hyper-V, KVM). Type 2 (Hosted) runs as software inside a host OS (VirtualBox, VMware Workstation).",
        category: "Virtualization"
      },
      {
        id: "cp-fc-3",
        front: "What is the 3-2-1 Backup Strategy?",
        back: "Maintain 3 copies of data, stored on 2 different storage media types, with at least 1 copy kept offsite or in the cloud.",
        category: "Data Management"
      },
      {
        id: "cp-fc-4",
        front: "What is the CIA Triad in Cybersecurity?",
        back: "Confidentiality (prevent unauthorized viewing), Integrity (prevent unauthorized alteration), Availability (ensure systems are accessible when needed).",
        category: "Security"
      }
    ],
    quickQuiz: [
      {
        id: "cp-q-1",
        question: "Which component inside a desktop PC retains dangerous high-voltage electric charge even after being completely unplugged from the wall?",
        answers: [
          { id: "A", text: "Power Supply Unit (PSU)", correct: true },
          { id: "B", text: "NVMe SSD", correct: false },
          { id: "C", text: "Graphics Card Fan", correct: false },
          { id: "D", text: "SATA Cable", correct: false }
        ],
        explanation: "Power supplies contain large high-voltage capacitors that hold lethal electrical charges long after power is disconnected. Never disassemble a PSU."
      },
      {
        id: "cp-q-2",
        question: "According to the CompTIA troubleshooting framework, what must you do immediately after verifying full system functionality?",
        answers: [
          { id: "A", text: "Document findings, actions, and outcomes in the ticket", correct: true },
          { id: "B", text: "Re-install the operating system", correct: false },
          { id: "C", text: "Question the user about new unrelated issues", correct: false },
          { id: "D", text: "Order replacement RAM modules", correct: false }
        ],
        explanation: "Step 6 is documenting findings, actions, and outcomes so future technicians can leverage the knowledge base."
      }
    ],
    mockExam: [
      {
        id: "cp-m-1",
        question: "A user reports they clicked a link in an unexpected email from their bank and entered their credentials. What type of social engineering attack is this?",
        domain: "Security Awareness",
        answers: [
          { id: "A", text: "Phishing", correct: true },
          { id: "B", text: "DDoS attack", correct: false },
          { id: "C", text: "SQL Injection", correct: false },
          { id: "D", text: "Tailgating", correct: false }
        ],
        explanation: "Phishing is the fraudulent practice of sending emails purporting to be from reputable companies to induce individuals to reveal personal info."
      },
      {
        id: "cp-m-2",
        question: "Which port number is used for secure encrypted remote command-line access via SSH?",
        domain: "Networking & Connectivity",
        answers: [
          { id: "A", text: "Port 22", correct: true },
          { id: "B", text: "Port 80", correct: false },
          { id: "C", text: "Port 3389", correct: false },
          { id: "D", text: "Port 443", correct: false }
        ],
        explanation: "Secure Shell (SSH) operates over TCP Port 22 to provide encrypted remote terminal sessions."
      }
    ],
    lab: {
      title: "Interactive PC Diagnostic & Troubleshooting Scenario",
      scenario: "A user turns on their desktop computer and hears 1 long beep followed by 2 short beeps from the motherboard speaker with no video display.",
      steps: [
        {
          instruction: "Consult the BIOS POST beep code matrix to diagnose the failing hardware.",
          code: "1 Long Beep + 2 Short Beeps = Video Adapter / Graphics Card fault or loose PCIe connection.",
          question: "What is the recommended physical remedy?",
          correctAnswer: "Power off PC, unplug power, ground yourself with an ESD wristband, reseat the discrete GPU firmly in the PCIe slot, and ensure PCIe power cables are connected."
        }
      ]
    }
  },

  kubernetes: {
    name: "Certified Kubernetes Administrator & Developer (CKA / CKAD)",
    code: "CKA / CKAD",
    flashcards: [
      {
        id: "k8-fc-1",
        front: "What is the difference between a Pod and a Container in Kubernetes?",
        back: "A container is the application process runtime. A Pod is the smallest deployable Kubernetes object that wraps one or more co-located containers sharing localhost networking and volumes.",
        category: "Workloads"
      },
      {
        id: "k8-fc-2",
        front: "What is the function of kube-scheduler?",
        back: "Watches for newly created Pods that have no assigned Node, and selects the optimal worker node for them to run on based on resource requests, constraints, and affinity.",
        category: "Control Plane"
      },
      {
        id: "k8-fc-3",
        front: "What is the difference between Liveness and Readiness probes?",
        back: "Liveness probe determines if a container is running (restarts container if failed). Readiness probe determines if a container is ready to accept user traffic (removes from Service endpoints if failed).",
        category: "Operations"
      },
      {
        id: "k8-fc-4",
        front: "What are the 4 Kubernetes Service types?",
        back: "1. ClusterIP (internal virtual IP), 2. NodePort (opens static port on every node), 3. LoadBalancer (provisions cloud LB), 4. ExternalName (maps to external DNS CNAME).",
        category: "Networking"
      },
      {
        id: "k8-fc-5",
        front: "What are PersistentVolumeClaims (PVC) and StorageClasses?",
        back: "A PVC is a user request for storage capacity/access mode. A StorageClass dynamically provisions the underlying physical cloud disk (PV) automatically via CSI drivers.",
        category: "Storage"
      }
    ],
    quickQuiz: [
      {
        id: "k8-q-1",
        question: "Which Kubernetes command line tool is used to deploy manifests, inspect logs, and manage cluster resources?",
        answers: [
          { id: "A", text: "kubectl", correct: true },
          { id: "B", text: "kubeadm only", correct: false },
          { id: "C", text: "etcdctl only", correct: false },
          { id: "D", text: "dockerd", correct: false }
        ],
        explanation: "`kubectl` is the official Kubernetes CLI for communicating with the kube-apiserver."
      },
      {
        id: "k8-q-2",
        question: "What happens when a container inside a Pod exceeds its declared 'resources.limits.memory' quota?",
        answers: [
          { id: "A", text: "The container is killed by the Linux kernel OOM killer (OOMKilled status)", correct: true },
          { id: "B", text: "The CPU frequency is throttled to 10%", correct: false },
          { id: "C", text: "The entire cluster is shut down", correct: false },
          { id: "D", text: "The container is automatically granted more host RAM without restart", correct: false }
        ],
        explanation: "Memory is an incompressible resource; when a container attempts to exceed its limit, the kernel terminates it with an Out of Memory (OOMKilled) signal."
      }
    ],
    mockExam: [
      {
        id: "k8-m-1",
        question: "Which Kubernetes object allows you to roll out rolling updates to a set of identical Pods and rollback to a previous version with zero downtime?",
        domain: "Workloads & Scheduling",
        answers: [
          { id: "A", text: "Deployment", correct: true },
          { id: "B", text: "DaemonSet", correct: false },
          { id: "C", text: "StatefulSet", correct: false },
          { id: "D", text: "Job", correct: false }
        ],
        explanation: "Deployments manage ReplicaSets to automate zero-downtime rolling updates and rollbacks for stateless workloads."
      },
      {
        id: "k8-m-2",
        question: "Which component runs on EVERY worker node to ensure that containers described in PodSpecs are running and healthy?",
        domain: "Cluster Architecture",
        answers: [
          { id: "A", text: "kubelet", correct: true },
          { id: "B", text: "kube-apiserver", correct: false },
          { id: "C", text: "kube-scheduler", correct: false },
          { id: "D", text: "etcd", correct: false }
        ],
        explanation: "The kubelet is the primary node agent that registers the node with the API server and orchestrates local container execution via the container runtime."
      }
    ],
    lab: {
      title: "Interactive Kubernetes YAML Manifest Inspector & Validator",
      scenario: "Review a Kubernetes Deployment manifest with a readiness probe and ClusterIP service to verify port mapping and selector alignment.",
      steps: [
        {
          instruction: "Verify that the Service 'selector.app' matches the Pod template 'labels.app'.",
          code: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: payment-api\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: payment\n  template:\n    metadata:\n      labels:\n        app: payment\n    spec:\n      containers:\n      - name: api\n        image: payment:v2.1\n        ports:\n        - containerPort: 8080",
          question: "What selector must a Service specify to forward traffic to these Pods?",
          correctAnswer: "selector:\n  app: payment\ntargetPort: 8080"
        }
      ]
    }
  }
};
