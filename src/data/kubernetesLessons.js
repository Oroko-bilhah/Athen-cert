export const kubernetesLessons = [
  {
    id: 1,
    title: "Introduction to Containers & Kubernetes Architecture",
    category: "Container Basics",
    duration: "9 min",
    intro:
      "Modern cloud-native applications run inside lightweight, isolated containers. Kubernetes is the open-source platform that orchestrates and manages them across cluster environments.",
    keyIdea:
      "Containers bundle code and dependencies together; Kubernetes automates deployment, scaling, and operational management of those containers.",
    sections: [
      {
        heading: "From Monoliths to Containers",
        paragraphs: [
          "Traditional bare-metal and VM architectures run monolithic software that is difficult to update and scale independently.",
          "Container technology (like Docker and containerd) packages applications into immutable images that run consistently across development, staging, and production.",
          "Kubernetes (K8s) provides the automated control plane needed to schedule, self-heal, and load-balance thousands of containers."
        ]
      }
    ],
    example: {
      title: "CONTAINER DEPLOYMENT",
      traditional: "Configure application runtime and libraries on every virtual machine manually",
      cloud: "Build an OCI container image once and deploy it across any Kubernetes cluster with zero environment drift"
    },
    concepts: [
      {
        number: "01",
        title: "OCI Container Images",
        description: "Standardized, portable application packages containing code, binaries, and runtime."
      },
      {
        number: "02",
        title: "Orchestration",
        description: "Automated provisioning, scaling, networking, and healing of containerized workloads."
      },
      {
        number: "03",
        title: "Declarative State",
        description: "You declare desired state in YAML; Kubernetes continually works to match actual state to desired state."
      }
    ],
    quiz: {
      question: "What is the primary role of Kubernetes in a modern infrastructure stack?",
      answers: [
        { id: "A", text: "Automating the deployment, scaling, and management of containerized applications", correct: true },
        { id: "B", text: "Serving as a physical hardware manufacturer", correct: false },
        { id: "C", text: "Replacing all network routers with analog switches", correct: false },
        { id: "D", text: "Compiling source code into operating system kernels", correct: false }
      ]
    }
  },
  {
    id: 2,
    title: "The Control Plane & Worker Node Components",
    category: "Kubernetes Architecture",
    duration: "10 min",
    intro:
      "A Kubernetes cluster consists of a control plane that makes global decisions and worker nodes that run the actual container workloads.",
    keyIdea:
      "The control plane manages the cluster state via etcd and kube-apiserver; worker nodes execute pods via kubelet and container runtimes.",
    sections: [
      {
        heading: "Control Plane Components",
        paragraphs: [
          "kube-apiserver: The frontend REST API gateway that validates and configures data for pods, services, and controllers.",
          "etcd: High-availability distributed key-value store that holds all cluster data and desired configuration state.",
          "kube-scheduler: Watches for unscheduled pods and selects the optimal worker node based on resource availability and constraints.",
          "kube-controller-manager: Runs core controller loops (Node controller, Deployment controller, EndpointSlice controller)."
        ]
      },
      {
        heading: "Worker Node Components",
        paragraphs: [
          "kubelet: The node agent that communicates with the apiserver and ensures containers described in PodSpecs are running and healthy.",
          "kube-proxy: Maintains network rules on nodes to allow network communication to pods from inside or outside the cluster.",
          "Container Runtime: Software (containerd, CRI-O) responsible for pulling images and running container processes."
        ]
      }
    ],
    example: {
      title: "SCHEDULING A WORKLOAD",
      traditional: "Sysadmin logs into a server and starts a process manually",
      cloud: "User submits YAML to kube-apiserver → etcd stores state → kube-scheduler assigns node → kubelet runs container"
    },
    concepts: [
      {
        number: "01",
        title: "kube-apiserver",
        description: "The central hub and sole component that directly communicates with the etcd database."
      },
      {
        number: "02",
        title: "etcd",
        description: "Consistent, distributed key-value store maintaining single source of truth for the cluster."
      },
      {
        number: "03",
        title: "kubelet",
        description: "Node-level agent ensuring pods are running and reporting node health back to the control plane."
      }
    ],
    quiz: {
      question: "Which Kubernetes component is the distributed key-value store that holds all cluster state and configuration?",
      answers: [
        { id: "A", text: "etcd", correct: true },
        { id: "B", text: "kube-proxy", correct: false },
        { id: "C", text: "kubelet", correct: false },
        { id: "D", text: "CoreDNS", correct: false }
      ]
    }
  },
  {
    id: 3,
    title: "Pods, Multi-Container Patterns & Init Containers",
    category: "Workloads",
    duration: "8 min",
    intro:
      "A Pod is the smallest deployable computing unit in Kubernetes, encapsulating one or more containers that share network and storage namespaces.",
    keyIdea:
      "Containers in the same pod share localhost networking and shared storage volumes, enabling multi-container patterns like Sidecars and Init Containers.",
    sections: [
      {
        heading: "Pod Anatomy & Shared Context",
        paragraphs: [
          "Every pod is assigned a unique IP address in the cluster. All containers inside the pod communicate with each other over localhost.",
          "Multi-container Pod Patterns: Sidecar (helper container, e.g. log shipper, proxy), Adapter (standardizes output), Ambassador (proxies connections to external DBs).",
          "Init Containers: Specialized containers that run to completion sequentially before application containers start (e.g. schema migration, waiting for DB service readiness)."
        ]
      }
    ],
    example: {
      title: "SIDECAR PATTERN EXAMPLE",
      traditional: "Install a log forwarding daemon directly onto the operating system of every server",
      cloud: "Run main web server container alongside a Fluentbit sidecar container in the same pod reading shared log files"
    },
    concepts: [
      {
        number: "01",
        title: "Pod IP & Localhost",
        description: "Containers in the same pod share a network namespace and port space via localhost."
      },
      {
        number: "02",
        title: "Init Containers",
        description: "Run sequentially before app containers start to perform prerequisite initialization."
      },
      {
        number: "03",
        title: "Sidecar Pattern",
        description: "Extends or enhances the main container without modifying its application code."
      }
    ],
    quiz: {
      question: "How do two containers within the same Kubernetes Pod communicate with each other over the network?",
      answers: [
        { id: "A", text: "Via localhost and shared network ports", correct: true },
        { id: "B", text: "Through public external internet routers", correct: false },
        { id: "C", text: "Over optical fiber cables", correct: false },
        { id: "D", text: "They cannot communicate with each other", correct: false }
      ]
    }
  },
  {
    id: 4,
    title: "Deployments, ReplicaSets & Rolling Updates",
    category: "Workloads & Scaling",
    duration: "10 min",
    intro:
      "Deployments provide declarative updates for Pods and ReplicaSets, enabling zero-downtime rolling updates and instant rollbacks.",
    keyIdea:
      "Deployments manage ReplicaSets to ensure the desired number of identical Pods are always running and healthy.",
    sections: [
      {
        heading: "Managing Desired State",
        paragraphs: [
          "ReplicaSet: Ensures a specified number of pod replicas are running at any given time using label selectors.",
          "Deployment Controller: Manages ReplicaSets to transition from old version (v1) to new version (v2) seamlessly.",
          "RollingUpdate Strategy: Uses maxSurge and maxUnavailable parameters to incrementally replace old pods without application downtime."
        ]
      },
      {
        heading: "Rollouts and Rollbacks",
        paragraphs: [
          "Check rollout progress with `kubectl rollout status deployment/<name>`.",
          "View deployment history and instantly revert faulty releases with `kubectl rollout undo deployment/<name>`."
        ]
      }
    ],
    example: {
      title: "ZERO DOWNTIME UPGRADE",
      traditional: "Take servers offline during maintenance window at 2 AM to update binaries",
      cloud: "Update container image tag in Deployment YAML → Kubernetes spins up v2 pods before draining and deleting v1 pods"
    },
    concepts: [
      {
        number: "01",
        title: "ReplicaSet",
        description: "Maintains a stable set of replica Pods running at any given time."
      },
      {
        number: "02",
        title: "Rolling Updates",
        description: "Incrementally replaces old pods with new pods while keeping the service available."
      },
      {
        number: "03",
        title: "Rollback",
        description: "Reverts deployment specification back to a previous revision in case of failure."
      }
    ],
    quiz: {
      question: "Which kubectl command immediately rolls back a Deployment to its previous revision?",
      answers: [
        { id: "A", text: "kubectl rollout undo deployment/<name>", correct: true },
        { id: "B", text: "kubectl delete cluster", correct: false },
        { id: "C", text: "kubectl stop all", correct: false },
        { id: "D", text: "kubectl rollback force", correct: false }
      ]
    }
  },
  {
    id: 5,
    title: "Workload Controllers: StatefulSets, DaemonSets & Jobs",
    category: "Workloads",
    duration: "10 min",
    intro:
      "Not all workloads are stateless web servers. Kubernetes provides specialized workload controllers for databases, system daemons, and batch processing.",
    keyIdea:
      "StatefulSets provide stable identities for databases; DaemonSets run one pod per node; Jobs run batch tasks to completion.",
    sections: [
      {
        heading: "Specialized Controllers",
        paragraphs: [
          "StatefulSets: Manages stateful apps (Cassandra, PostgreSQL, ZooKeeper). Pods receive unique, stable ordinal names (e.g. web-0, web-1) and dedicated persistent storage that survives pod deletion.",
          "DaemonSets: Ensures that all (or some) nodes run a copy of a pod (e.g. cluster log collectors like Fluentd, node monitoring agents like Prometheus node-exporter).",
          "Jobs & CronJobs: A Job creates one or more pods and ensures a specified number of them terminate successfully. CronJobs run jobs on a recurring time schedule (cron syntax)."
        ]
      }
    ],
    example: {
      title: "LOGGING DAEMON ACROSS 50 NODES",
      traditional: "SSH into each of 50 worker servers individually and configure syslog daemon service",
      cloud: "Deploy a DaemonSet; Kubernetes automatically runs exactly one log collector pod on every existing and newly joined node"
    },
    concepts: [
      {
        number: "01",
        title: "StatefulSets",
        description: "Guarantees ordering, stable network hostnames, and persistent volume attachments."
      },
      {
        number: "02",
        title: "DaemonSets",
        description: "Automatically schedules exactly one replica per worker node in the cluster."
      },
      {
        number: "03",
        title: "Jobs & CronJobs",
        description: "Runs batch and scheduled tasks until completion rather than running continuously."
      }
    ],
    quiz: {
      question: "Which Kubernetes workload controller is best suited for deploying a monitoring daemon that must run on every node in the cluster?",
      answers: [
        { id: "A", text: "DaemonSet", correct: true },
        { id: "B", text: "CronJob", correct: false },
        { id: "C", text: "ReplicaSet", correct: false },
        { id: "D", text: "HorizontalPodAutoscaler", correct: false }
      ]
    }
  },
  {
    id: 6,
    title: "Services & Cluster Networking",
    category: "Networking",
    duration: "10 min",
    intro:
      "Because Pods are ephemeral and frequently recreated with new IP addresses, Kubernetes Services provide a stable IP, DNS name, and load balancing across pods.",
    keyIdea:
      "Services use label selectors to track matching pod endpoints and expose them via ClusterIP, NodePort, or LoadBalancer.",
    sections: [
      {
        heading: "Service Types and Discovery",
        paragraphs: [
          "ClusterIP (Default): Exposes the Service on an internal IP reachable only from within the cluster.",
          "NodePort: Exposes the Service on each Node's IP at a static port (in the default range 30000-32767).",
          "LoadBalancer: Provisions a cloud provider external load balancer (AWS NLB, GCP Load Balancer) that forwards traffic into NodePort/ClusterIP.",
          "CoreDNS: In-cluster DNS service that automatically creates DNS records for every service (e.g., `my-service.my-namespace.svc.cluster.local`)."
        ]
      }
    ],
    example: {
      title: "SERVICE DISCOVERY",
      traditional: "Hardcode backend server IP addresses in frontend configuration files",
      cloud: "Frontend accesses backend service at `http://backend-service:8080`, and CoreDNS resolves it to healthy backend pods"
    },
    concepts: [
      {
        number: "01",
        title: "ClusterIP",
        description: "Internal-only virtual IP providing stable access and load balancing inside the cluster."
      },
      {
        number: "02",
        title: "NodePort & LoadBalancer",
        description: "Exposes services to external clients outside the Kubernetes network."
      },
      {
        number: "03",
        title: "Label Selectors",
        description: "Connects the Service to matching Pods and automatically updates EndpointSlices."
      }
    ],
    quiz: {
      question: "What is the default Service type in Kubernetes that provides an internal virtual IP accessible only within the cluster?",
      answers: [
        { id: "A", text: "ClusterIP", correct: true },
        { id: "B", text: "NodePort", correct: false },
        { id: "C", text: "LoadBalancer", correct: false },
        { id: "D", text: "ExternalName", correct: false }
      ]
    }
  },
  {
    id: 7,
    title: "Ingress Controllers & HTTP/HTTPS Routing Rules",
    category: "Networking",
    duration: "9 min",
    intro:
      "An Ingress object manages external access to the services in a cluster, typically providing HTTP and HTTPS routing, SSL/TLS termination, and path-based routing.",
    keyIdea:
      "Ingress exposes HTTP/HTTPS routes from outside the cluster to services within the cluster using a single external load balancer.",
    sections: [
      {
        heading: "Ingress vs Ingress Controller",
        paragraphs: [
          "Ingress Resource: The YAML specification that defines routing rules (hostnames, paths, and target backend services).",
          "Ingress Controller: The active daemon (e.g. NGINX Ingress, Traefik, AWS Load Balancer Controller) that fulfills Ingress rules by configuring an edge reverse proxy.",
          "Path & Host Routing: Route `api.example.com` to `api-service` and `example.com/app` to `frontend-service` under one SSL certificate."
        ]
      }
    ],
    example: {
      title: "CONSOLIDATING LOAD BALANCERS",
      traditional: "Create 10 separate expensive cloud load balancers for 10 microservices",
      cloud: "Use one Ingress Controller with rules routing 10 different paths to 10 internal ClusterIP services"
    },
    concepts: [
      {
        number: "01",
        title: "Ingress Controller",
        description: "The underlying reverse proxy (NGINX, Envoy, Traefik) that executes routing rules."
      },
      {
        number: "02",
        title: "Host & Path Routing",
        description: "Directs web traffic based on domain name or URL prefix to target services."
      },
      {
        number: "03",
        title: "TLS Termination",
        description: "Manages HTTPS certificates centrally via Kubernetes Secret objects."
      }
    ],
    quiz: {
      question: "What is required for Kubernetes Ingress YAML rules to actually function and route traffic?",
      answers: [
        { id: "A", text: "An active Ingress Controller (such as NGINX or Traefik) running in the cluster", correct: true },
        { id: "B", text: "A physical fiber optic cable connection", correct: false },
        { id: "C", text: "Disabling DNS resolution completely", correct: false },
        { id: "D", text: "Deleting all ClusterIP services", correct: false }
      ]
    }
  },
  {
    id: 8,
    title: "NetworkPolicies & Pod Traffic Isolation",
    category: "Security & Networking",
    duration: "9 min",
    intro:
      "By default, all pods in a Kubernetes cluster can communicate freely with all other pods. NetworkPolicies provide granular layer 3/4 firewall rules for pods.",
    keyIdea:
      "NetworkPolicies implement zero-trust network segmentation by selecting pods and specifying allowed Ingress and Egress traffic.",
    sections: [
      {
        heading: "Zero-Trust Pod Isolation",
        paragraphs: [
          "By default, pods are non-isolated (accept traffic from any source). Applying a NetworkPolicy isolates matching pods.",
          "Traffic can be filtered based on: `podSelector` (matching pod labels), `namespaceSelector` (matching namespace labels), or `ipBlock` (CIDR IP ranges).",
          "A CNI plugin supporting NetworkPolicies (Calico, Cilium, Weave Net) must be installed in the cluster to enforce rules."
        ]
      }
    ],
    example: {
      title: "DATABASE SECURITY",
      traditional: "Allow any server on the internal subnet to connect directly to the MySQL database port",
      cloud: "Apply a NetworkPolicy allowing incoming traffic on port 5432 to the database pod ONLY from pods with label `role: backend-api`"
    },
    concepts: [
      {
        number: "01",
        title: "Default Allow to Default Deny",
        description: "Applying a NetworkPolicy shifts selected pods to default-deny isolation."
      },
      {
        number: "02",
        title: "Ingress & Egress",
        description: "Rules specify allowed incoming (Ingress) and outgoing (Egress) connections."
      },
      {
        number: "03",
        title: "CNI Enforcement",
        description: "Network policy rules are enforced by network plugins like Calico or Cilium."
      }
    ],
    quiz: {
      question: "What is the default networking behavior between pods in a standard Kubernetes cluster before applying NetworkPolicies?",
      answers: [
        { id: "A", text: "All pods can communicate with all other pods across all namespaces", correct: true },
        { id: "B", text: "All pod traffic is blocked completely by default", correct: false },
        { id: "C", text: "Pods can only communicate with the control plane", correct: false },
        { id: "D", text: "Pods cannot receive any HTTP requests", correct: false }
      ]
    }
  },
  {
    id: 9,
    title: "ConfigMaps & Secrets: Configuration Decoupling",
    category: "Security & Configuration",
    duration: "8 min",
    intro:
      "Decoupling configuration artifacts from container image content allows applications to remain portable across dev, test, and production environments.",
    keyIdea:
      "ConfigMaps store non-confidential configuration key-value pairs; Secrets store confidential data like passwords, API keys, and TLS certificates.",
    sections: [
      {
        heading: "Injecting Configurations",
        paragraphs: [
          "Environment Variables: Inject individual keys or all keys from a ConfigMap/Secret into container environment variables.",
          "Volume Mounts: Mount ConfigMaps and Secrets as directories of configuration files inside the container filesystem.",
          "Secret Encryption: Secrets are base64-encoded by default; etcd encryption at rest should be enabled for production security."
        ]
      }
    ],
    example: {
      title: "ENVIRONMENT PORTABILITY",
      traditional: "Bake database passwords and API URLs directly into the application code binary",
      cloud: "Build one container image; inject database host from ConfigMap and database password from Secret at runtime"
    },
    concepts: [
      {
        number: "01",
        title: "ConfigMap",
        description: "Stores configuration variables and config files in key-value format."
      },
      {
        number: "02",
        title: "Secret",
        description: "Stores sensitive credentials, tokens, and TLS certificates with restricted access."
      },
      {
        number: "03",
        title: "Volume Projection",
        description: "Mounts key-value configurations as live files inside the container."
      }
    ],
    quiz: {
      question: "What is the primary difference between a ConfigMap and a Secret in Kubernetes?",
      answers: [
        { id: "A", text: "ConfigMaps store plain text configuration; Secrets store sensitive credentials and keys", correct: true },
        { id: "B", text: "ConfigMaps only work on Windows nodes", correct: false },
        { id: "C", text: "Secrets can only be used by root users", correct: false },
        { id: "D", text: "There is no difference between them", correct: false }
      ]
    }
  },
  {
    id: 10,
    title: "Persistent Storage: Volumes, PVs, PVCs & StorageClasses",
    category: "Storage",
    duration: "10 min",
    intro:
      "Because container storage is ephemeral and erased when containers restart, Kubernetes provides persistent storage abstractions.",
    keyIdea:
      "StorageClasses dynamically provision PersistentVolumes (PV), which are bound to PersistentVolumeClaims (PVC) requested by Pods.",
    sections: [
      {
        heading: "Storage Abstraction Layers",
        paragraphs: [
          "PersistentVolume (PV): A piece of storage provisioned in the cluster (e.g. AWS EBS, GCP Persistent Disk, NFS).",
          "PersistentVolumeClaim (PVC): A user's request for storage with specific capacity and access mode.",
          "StorageClass: Defines the 'provisioner' (e.g. `kubernetes.io/aws-ebs`) that creates PVs automatically on-demand.",
          "Access Modes: ReadWriteOnce (RWO - single node), ReadOnlyMany (ROX - many nodes read), ReadWriteMany (RWX - shared filesystem like NFS)."
        ]
      }
    ],
    example: {
      title: "DYNAMIC STORAGE PROVISIONING",
      traditional: "Call storage administrator to manually carve out a 50 GB LUN on a SAN for a new database",
      cloud: "Developer submits a PVC for 50 GB; StorageClass automatically talks to cloud API and creates an attached disk in seconds"
    },
    concepts: [
      {
        number: "01",
        title: "PersistentVolume (PV)",
        description: "Cluster-level storage resource created manually or dynamically by a StorageClass."
      },
      {
        number: "02",
        title: "PersistentVolumeClaim (PVC)",
        description: "Pod-level request for storage capacity, volume type, and access mode."
      },
      {
        number: "03",
        title: "Dynamic Provisioning",
        description: "Eliminates manual PV creation by automating volume provisioning via StorageClasses."
      }
    ],
    quiz: {
      question: "Which access mode allows a persistent volume to be mounted as read-write by many nodes simultaneously?",
      answers: [
        { id: "A", text: "ReadWriteMany (RWX)", correct: true },
        { id: "B", text: "ReadWriteOnce (RWO)", correct: false },
        { id: "C", text: "ReadOnlyOnce (ROO)", correct: false },
        { id: "D", text: "WriteOnlyMany (WOM)", correct: false }
      ]
    }
  },
  {
    id: 11,
    title: "Namespaces, Resource Requests, Limits & Quotas",
    category: "Operations & Governance",
    duration: "8 min",
    intro:
      "Multi-tenant Kubernetes clusters require logical partitioning with Namespaces, alongside CPU and Memory resource management to prevent 'noisy neighbor' issues.",
    keyIdea:
      "Requests guarantee minimum required CPU/memory for scheduling; Limits cap maximum resource consumption to avoid cluster exhaustion.",
    sections: [
      {
        heading: "Multi-Tenancy & Resource Boundaries",
        paragraphs: [
          "Namespaces: Virtual clusters inside a physical cluster (e.g. `kube-system`, `production`, `staging`). Provides scope for unique object names.",
          "Resource Requests: Minimum CPU and Memory required by a container; used by `kube-scheduler` to place pods on appropriate nodes.",
          "Resource Limits: Maximum CPU and Memory a container is allowed to consume. Exceeding memory limit results in container termination (OOMKilled - exit code 137).",
          "ResourceQuotas: Enforces total aggregate resource consumption (e.g. max 20 CPUs, 50 GB RAM) per namespace."
        ]
      }
    ],
    example: {
      title: "RESOURCE GUARANTEE",
      traditional: "A rogue batch script on a shared server consumes 100% memory, crashing the production database",
      cloud: "Set Memory Limit on batch container; if it leaks memory, only that container is restarted while production runs unaffected"
    },
    concepts: [
      {
        number: "01",
        title: "Requests vs. Limits",
        description: "Requests are for scheduling guarantees; Limits are hard ceiling enforcement."
      },
      {
        number: "02",
        title: "OOMKilled (Exit 137)",
        description: "Occurs when a container exceeds its defined memory limit."
      },
      {
        number: "03",
        title: "ResourceQuotas",
        description: "Namespace-level limits on compute resources and total object counts."
      }
    ],
    quiz: {
      question: "What happens when a container exceeds its configured memory limit?",
      answers: [
        { id: "A", text: "The container is terminated by the kernel with an OOMKilled error (Exit Code 137)", correct: true },
        { id: "B", text: "The entire physical server is powered off", correct: false },
        { id: "C", text: "The cluster automatically buys more RAM online", correct: false },
        { id: "D", text: "Nothing, limits are purely advisory", correct: false }
      ]
    }
  },
  {
    id: 12,
    title: "Workload Scaling: HPA, VPA & Cluster Autoscaler",
    category: "Workloads & Scaling",
    duration: "9 min",
    intro:
      "Kubernetes enables three-dimensional autoscaling: Horizontal (pod count), Vertical (pod sizing), and Cluster-level (node count).",
    keyIdea:
      "Horizontal Pod Autoscaler (HPA) adjusts replica counts based on metrics; Cluster Autoscaler adds worker nodes when pods cannot be scheduled.",
    sections: [
      {
        heading: "Autoscaling Mechanisms",
        paragraphs: [
          "Horizontal Pod Autoscaler (HPA): Queries Metrics Server to calculate required pod replicas based on target CPU/memory percentage or custom Prometheus metrics.",
          "Vertical Pod Autoscaler (VPA): Analyzes historical usage and automatically adjusts resource requests/limits on pods over time.",
          "Cluster Autoscaler: Automatically adds cloud VMs to the cluster node pool when pods are in 'Pending' state due to insufficient resources, and removes underutilized nodes."
        ]
      }
    ],
    example: {
      title: "BLACK FRIDAY TRAFFIC SURGE",
      traditional: "Engineers manually wake up to provision 30 additional servers during a midnight flash sale",
      cloud: "HPA scales checkout pods from 5 to 50 based on CPU load; Cluster Autoscaler provisions 4 new worker nodes automatically"
    },
    concepts: [
      {
        number: "01",
        title: "HPA (Horizontal Scaling)",
        description: "Scales pod replica count dynamically based on observed resource utilization."
      },
      {
        number: "02",
        title: "Cluster Autoscaler",
        description: "Provisions new worker nodes when pending pods cannot fit on existing nodes."
      },
      {
        number: "03",
        title: "Metrics Server",
        description: "Lightweight cluster-wide aggregator of container resource usage metrics."
      }
    ],
    quiz: {
      question: "Which Kubernetes component dynamically scales the number of pod replicas based on observed CPU utilization metrics?",
      answers: [
        { id: "A", text: "Horizontal Pod Autoscaler (HPA)", correct: true },
        { id: "B", text: "kube-apiserver", correct: false },
        { id: "C", text: "CoreDNS", correct: false },
        { id: "D", text: "etcd", correct: false }
      ]
    }
  },
  {
    id: 13,
    title: "Container Health Checks & Pod Lifecycle",
    category: "Operations",
    duration: "9 min",
    intro:
      "Kubernetes monitors container health using configurable probes to self-heal failed processes and protect traffic during startup.",
    keyIdea:
      "Liveness probes restart hung containers; Readiness probes control whether pods receive traffic; Startup probes protect slow-booting apps.",
    sections: [
      {
        heading: "The Three Health Probes",
        paragraphs: [
          "Liveness Probe: Determines if a container is running. If the probe fails, kubelet kills the container and initiates a restart.",
          "Readiness Probe: Determines if a container is ready to accept network traffic. If it fails, endpoints controller removes the pod IP from all Services.",
          "Startup Probe: Disables liveness and readiness checks until the application finishes initial slow startup (e.g., legacy Java apps, large cache loading)."
        ]
      },
      {
        heading: "Probe Mechanisms",
        paragraphs: [
          "HTTP GET (`httpGet`): Probes a health endpoint (e.g. `/healthz`). Returns success on 200-399 status code.",
          "TCP Socket (`tcpSocket`): Attempts to open a TCP socket connection on a specified port.",
          "Exec Command (`exec`): Runs a command inside container; returns success on exit code 0."
        ]
      }
    ],
    example: {
      title: "PREVENTING TRAFFIC TO CRASHED APPS",
      traditional: "Load balancer continues sending user requests to a frozen server with a deadlocked thread",
      cloud: "Readiness probe detects failed /healthz check; removes pod from Service endpoints so 0 users receive error pages"
    },
    concepts: [
      {
        number: "01",
        title: "Liveness Probe",
        description: "Detects deadlocks and restarts broken containers automatically."
      },
      {
        number: "02",
        title: "Readiness Probe",
        description: "Prevents traffic routing to pods that are initializing or overloaded."
      },
      {
        number: "03",
        title: "Startup Probe",
        description: "Allows slow-starting applications sufficient time to boot before liveness checks kick in."
      }
    ],
    quiz: {
      question: "What happens when a container's Readiness Probe fails?",
      answers: [
        { id: "A", text: "The pod is temporarily removed from Service load balancer endpoints so it receives no traffic", correct: true },
        { id: "B", text: "The entire Kubernetes cluster is rebooted", correct: false },
        { id: "C", text: "The pod is deleted permanently from the cluster", correct: false },
        { id: "D", text: "The worker node is marked as cordoned", correct: false }
      ]
    }
  },
  {
    id: 14,
    title: "Cluster Security: RBAC & ServiceAccounts",
    category: "Security",
    duration: "10 min",
    intro:
      "Role-Based Access Control (RBAC) regulates access to the Kubernetes API, determining which users and automated processes can perform operations on cluster resources.",
    keyIdea:
      "RBAC binds Roles (permissions on resources in a namespace) or ClusterRoles (cluster-wide permissions) to Subjects (Users, Groups, ServiceAccounts).",
    sections: [
      {
        heading: "RBAC Architecture",
        paragraphs: [
          "Role: Defines what API actions (verbs: get, list, watch, create, delete) can be performed on resources within a specific namespace.",
          "ClusterRole: Non-namespaced permissions (e.g. viewing nodes, persistent volumes, or all namespaces).",
          "RoleBinding: Grants permissions defined in a Role/ClusterRole to a user, group, or ServiceAccount within a specific namespace.",
          "ClusterRoleBinding: Grants permissions defined in a ClusterRole to subjects across the entire cluster."
        ]
      },
      {
        heading: "ServiceAccounts",
        paragraphs: [
          "Provide an identity for processes that run in Pods to authenticate against the kube-apiserver.",
          "Tokens are automatically mounted into pod filesystems at `/var/run/secrets/kubernetes.io/serviceaccount`."
        ]
      }
    ],
    example: {
      title: "LEAST PRIVILEGE RBAC",
      traditional: "Give all developers root admin access to the production datacenter",
      cloud: "Create a 'developer-role' that grants 'get, list, logs' permissions on pods in the 'staging' namespace only"
    },
    concepts: [
      {
        number: "01",
        title: "Role & ClusterRole",
        description: "Specifies allowed API verbs on target resource types."
      },
      {
        number: "02",
        title: "RoleBinding",
        description: "Attaches a Role to a user, group, or ServiceAccount."
      },
      {
        number: "03",
        title: "ServiceAccount",
        description: "Identity assigned to automated pod workloads to authenticate to the apiserver."
      }
    ],
    quiz: {
      question: "Which RBAC object is used to grant cluster-wide permissions (such as listing worker nodes) to a user across all namespaces?",
      answers: [
        { id: "A", text: "ClusterRoleBinding linking to a ClusterRole", correct: true },
        { id: "B", text: "Local Role in the default namespace", correct: false },
        { id: "C", text: "ConfigMap object", correct: false },
        { id: "D", text: "PersistentVolumeClaim", correct: false }
      ]
    }
  },
  {
    id: 15,
    title: "Helm Package Management, CRDs & Operators",
    category: "Operations & Extensibility",
    duration: "9 min",
    intro:
      "Deploying complex multi-tier applications with dozens of YAML files is simplified using Helm charts, Custom Resource Definitions, and Operators.",
    keyIdea:
      "Helm is the package manager for Kubernetes; CRDs and Operators extend the Kubernetes API to automate complex domain-specific application operations.",
    sections: [
      {
        heading: "Helm Charts",
        paragraphs: [
          "Helm Packages: Bundles related Kubernetes manifests into parameterized templates called Charts.",
          "`values.yaml`: Allows users to customize configurations (replica count, image tags, ingress hostnames) without altering raw template files.",
          "Release Management: `helm install`, `helm upgrade`, and `helm rollback` manage the lifecycle of complex applications."
        ]
      },
      {
        heading: "CRDs and the Operator Pattern",
        paragraphs: [
          "CustomResourceDefinition (CRD): Extends the Kubernetes API with custom resource types (e.g. `kind: Prometheus` or `kind: PostgresCluster`).",
          "Operators: Custom controllers that encode human domain knowledge (automated backups, failover, cluster healing) into software running in the cluster."
        ]
      }
    ],
    example: {
      title: "PACKAGED DEPLOYMENTS",
      traditional: "Manually write and apply 25 separate YAML files to install Prometheus and Grafana monitoring",
      cloud: "Run `helm install monitoring prometheus-community/kube-prometheus-stack` to deploy full monitoring in 30 seconds"
    },
    concepts: [
      {
        number: "01",
        title: "Helm Charts",
        description: "Templated, reusable packages containing all resources needed to run an application."
      },
      {
        number: "02",
        title: "values.yaml",
        description: "Configuration file for passing custom variables into Helm chart templates."
      },
      {
        number: "03",
        title: "Kubernetes Operator",
        description: "Automated controller managing complex stateful application lifecycles using CRDs."
      }
    ],
    quiz: {
      question: "What is the primary function of Helm in Kubernetes?",
      answers: [
        { id: "A", text: "Serving as a package manager that parameterizes and manages deployments of Kubernetes applications", correct: true },
        { id: "B", text: "Replacing Docker with a virtual machine hypervisor", correct: false },
        { id: "C", text: "Routing physical internet cables to server racks", correct: false },
        { id: "D", text: "Encrypting hard drives on bare metal nodes", correct: false }
      ]
    }
  },
  {
    id: 16,
    title: "Troubleshooting & Diagnostics for CKA/CKAD",
    category: "Troubleshooting",
    duration: "10 min",
    intro:
      "A core requirement of the CKA and CKAD exams is diagnosing and fixing broken pods, cluster nodes, and control plane failures under timed exam conditions.",
    keyIdea:
      "Master `kubectl describe`, `kubectl logs`, and identifying root causes for CrashLoopBackOff, ImagePullBackOff, Pending, and Node NotReady states.",
    sections: [
      {
        heading: "Common Pod Failure States",
        paragraphs: [
          "ImagePullBackOff / ErrImagePull: Invalid image name, nonexistent image tag, or missing private registry credentials (ImagePullSecrets).",
          "CrashLoopBackOff: Container process starts and immediately crashes (exit code > 0). Inspect application logs with `kubectl logs <pod-name> --previous`.",
          "Pending State: Pod cannot be scheduled due to insufficient CPU/memory on nodes, missing PVC, or unmet nodeSelector/toleration requirements.",
          "OOMKilled (Exit 137): Container exceeded its configured memory limit."
        ]
      },
      {
        heading: "Diagnostic Command Toolkit",
        paragraphs: [
          "`kubectl describe pod <name>`: Displays recent lifecycle events and probe failure messages at the bottom.",
          "`kubectl exec -it <name> -- /bin/sh`: Spawns an interactive shell inside a running container to test network connectivity and files.",
          "`kubectl get nodes`: Inspects node status; if NotReady, check `kubelet` service status on the worker node with `systemctl status kubelet`."
        ]
      }
    ],
    example: {
      title: "DEBUGGING CRASHLOOPBACKOFF",
      traditional: "Server won't boot and leaves no error messages on screen",
      cloud: "Run `kubectl describe pod` to see exit code → Run `kubectl logs --previous` to see the exact fatal exception line"
    },
    concepts: [
      {
        number: "01",
        title: "kubectl describe",
        description: "The primary diagnostic tool to inspect status, volumes, and cluster lifecycle events."
      },
      {
        number: "02",
        title: "CrashLoopBackOff",
        description: "Container application crashes repeatedly after startup; check application code logs."
      },
      {
        number: "03",
        title: "Node NotReady",
        description: "Worker node failed health check; inspect kubelet daemon and container runtime."
      }
    ],
    quiz: {
      question: "Which command shows detailed pod lifecycle events, volume mount details, and probe failure reasons?",
      answers: [
        { id: "A", text: "kubectl describe pod <pod-name>", correct: true },
        { id: "B", text: "kubectl delete pod <pod-name>", correct: false },
        { id: "C", text: "kubectl reboot cluster", correct: false },
        { id: "D", text: "kubectl format disk", correct: false }
      ]
    }
  }
];
