import { Link } from "react-router-dom";
import "./RelatedCertifications.css";

const ALL_TRACKS = [
  {
    id: "aws",
    title: "AWS Cloud Practitioner",
    shortCode: "CLF-C02",
    icon: "",
    level: "Foundational",
    lessonsCount: 20,
    route: "/certifications/aws/cloud-practitioner",
    description: "Cloud computing concepts, AWS global infrastructure, IAM security, EC2, S3, and pricing models.",
    accent: "gold"
  },
  {
    id: "aws-saa",
    title: "AWS Solutions Architect",
    shortCode: "SAA-C03",
    icon: "",
    level: "Associate",
    lessonsCount: 16,
    route: "/certifications/aws/solutions-architect",
    description: "Design resilient, scalable, secure, and cost-effective distributed systems on AWS.",
    accent: "gold"
  },
  {
    id: "azure",
    title: "Microsoft Azure Fundamentals",
    shortCode: "AZ-900",
    icon: "",
    level: "Foundational",
    lessonsCount: 20,
    route: "/certifications/azure/az-900",
    description: "Azure architecture, virtual machines, storage redundancy, Entra ID, governance, and SLAs.",
    accent: "blue"
  },
  {
    id: "google",
    title: "Google Cloud Digital Leader",
    shortCode: "CDL",
    icon: "",
    level: "Foundational",
    lessonsCount: 20,
    route: "/certifications/google/cloud-fundamentals",
    description: "GCP architecture, BigQuery data warehousing, Cloud Run containers, IAM, and security governance.",
    accent: "indigo"
  },
  {
    id: "kubernetes",
    title: "Kubernetes Fundamentals & CKA",
    shortCode: "CKA/CKAD",
    icon: "",
    level: "Associate",
    lessonsCount: 16,
    route: "/certifications/kubernetes/fundamentals",
    description: "Containerization, Pods, Deployments, ClusterIP Services, Ingress, PV/PVC, and HPA autoscaling.",
    accent: "cyan"
  },
  {
    id: "cisco",
    title: "Cisco Certified Network Associate",
    shortCode: "CCNA 200-301",
    icon: "",
    level: "Associate",
    lessonsCount: 16,
    route: "/certifications/cisco/networking",
    description: "OSI 7 layers, IPv4/IPv6 subnetting, VLANs, OSPF dynamic routing, ACLs, NAT, and CLI diagnostics.",
    accent: "emerald"
  },
  {
    id: "comptia",
    title: "CompTIA IT Foundations & A+",
    shortCode: "ITF+ / A+",
    icon: "",
    level: "Foundational",
    lessonsCount: 16,
    route: "/certifications/comptia/fundamentals",
    description: "Hardware architectures, operating systems, cybersecurity, databases, and 6-step troubleshooting.",
    accent: "orange"
  }
];

function RelatedCertifications({ currentProvider }) {
  const relatedTracks = ALL_TRACKS.filter((t) => t.id !== currentProvider).slice(0, 3);

  return (
    <aside className="related-certifications-section" aria-labelledby="related-certs-heading">
      <div className="related-certs-header">
        <span className="related-badge">EXPLORE COMPLEMENTARY PATHS</span>
        <h2 id="related-certs-heading">Expand Your Cloud & IT Certification Portfolio</h2>
        <p>Cross-skilling across cloud providers and networking unlocks higher earning potential and architectural flexibility.</p>
      </div>

      <div className="related-certs-grid">
        {relatedTracks.map((track) => (
          <Link
            key={track.id}
            to={track.route}
            className={`related-cert-card accent-${track.accent}`}
            aria-label={`Explore ${track.title} (${track.shortCode})`}
          >
            <div className="related-card-top">
              <span className="related-icon" aria-hidden="true">{track.icon}</span>
              <span className="related-code">{track.shortCode}</span>
              <span className="related-level">{track.level}</span>
            </div>
            <h3 className="related-title">{track.title}</h3>
            <p className="related-desc">{track.description}</p>
            <div className="related-card-footer">
              <span className="related-lessons-count">{track.lessonsCount} Curated Lessons</span>
              <span className="related-arrow" aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default RelatedCertifications;
