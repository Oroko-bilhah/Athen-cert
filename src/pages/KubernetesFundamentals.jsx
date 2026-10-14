
import CertificationTemplate from "../components/CertificationTemplate";

const topics = [
  {
    number: "01",
    title: "Container Basics & Kubernetes Architecture",
    description:
      "Understand container runtimes (containerd), Linux cgroups/namespaces, Control Plane, and Worker Nodes.",
    status: "completed",
    path: "/certifications/kubernetes/fundamentals/lesson/1"
  },
  {
    number: "02",
    title: "Control Plane & Worker Node Internals",
    description:
      "Explore kube-apiserver, etcd key-value database, kube-scheduler, kube-controller-manager, and kubelet.",
    status: "current",
    path: "/certifications/kubernetes/fundamentals/lesson/2"
  },
  {
    number: "03",
    title: "Workloads: Pods, Deployments & StatefulSets",
    description:
      "Master single/multi-container Pods, Init Containers, RollingUpdates, StatefulSets, DaemonSets, and CronJobs.",
    status: "available",
    path: "/certifications/kubernetes/fundamentals/lesson/3"
  },
  {
    number: "04",
    title: "Cluster Networking, Services, Ingress & NetworkPolicies",
    description:
      "Learn ClusterIP, NodePort, LoadBalancer, CoreDNS, Ingress Controllers, and zero-trust NetworkPolicy isolation.",
    status: "available",
    path: "/certifications/kubernetes/fundamentals/lesson/6"
  },
  {
    number: "05",
    title: "Storage, Config, Scaling & RBAC Security",
    description:
      "Master ConfigMaps, Secrets, PV/PVC persistent storage, HPA autoscaling, health probes, and RBAC authorization.",
    status: "available",
    path: "/certifications/kubernetes/fundamentals/lesson/9"
  },
  {
    number: "06",
    title: "Helm Package Management & CKA/CKAD Troubleshooting",
    description:
      "Deploy Helm charts, Operators, and debug CrashLoopBackOff, ImagePullBackOff, Pending pods, and Node NotReady states.",
    status: "available",
    path: "/certifications/kubernetes/fundamentals/lesson/15"
  }
];

const practiceCards = [
  {
    icon: "",
    title: "Cluster & Pods Quiz",
    description: "Test your understanding of pods, deployments, control planes, and services.",
    button: "Launch Quiz"
  },
  {
    icon: "",
    title: "K8s Flashcards",
    description: "Review CLI commands, probe definitions, and resource manifest specs.",
    button: "Flip Cards"
  },
  {
    icon: "⏱️",
    title: "CKA / CKAD Mock Exam",
    description: "Try timed scenario questions simulating real-world Kubernetes administration.",
    button: "Start Mock Exam"
  },
  {
    icon: "",
    title: "YAML Manifest Inspector Lab",
    description: "Inspect and validate Kubernetes Deployment, Service, and ConfigMap YAML specs.",
    button: "Launch Lab"
  }
];

function KubernetesFundamentals() {
  return (
    <CertificationTemplate
      provider="kubernetes"
      title="Kubernetes Fundamentals & CKA"
      shortTitle="CKA / CKAD"
      description="Learn container orchestration in production, from pods and services to deployments, ingress, dynamic storage, horizontal autoscaling, and cluster security."
      icon=""
      heroColor="cyan"
      maxLessons={16}
      topics={topics}
      practiceCards={practiceCards}
      onStartLearning="/certifications/kubernetes/fundamentals/lesson/1"
      examDetails={{
        code: "CKA / CKAD",
        duration: "120 minutes",
        questions: "15-20 performance-based tasks",
        passingScore: "66% passing score",
        format: "Hands-on command-line terminal simulation"
      }}
    />
  );
}

export default KubernetesFundamentals;
