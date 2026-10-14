import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { awsLessons } from "../data/awsLessons";
import { awsSaaLessons } from "../data/awsSaaLessons";
import { azureLessons } from "../data/azureLessons";
import { googleLessons } from "../data/googleLessons";
import { ciscoLessons } from "../data/ciscoLessons";
import { comptiaLessons } from "../data/comptiaLessons";
import { kubernetesLessons } from "../data/kubernetesLessons";
import "./PracticeModals.css";

const ALL_SEARCHABLE_ITEMS = [
  {
    type: "Certification",
    title: "AWS Certified Cloud Practitioner",
    category: "Cloud",
    provider: "aws",
    path: "/certifications/aws/cloud-practitioner",
    description: "Cloud computing, AWS global infrastructure, core services, IAM security, and pricing."
  },
  {
    type: "Certification",
    title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    category: "Cloud Architecture",
    provider: "aws-saa",
    path: "/certifications/aws/solutions-architect",
    description: "Design secure, resilient, high-performing, and cost-optimized multi-tier architectures on AWS."
  },
  {
    type: "Certification",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    category: "Cloud",
    provider: "azure",
    path: "/certifications/azure/az-900",
    description: "Azure architecture, services, management tools, governance, security, and SLAs."
  },
  {
    type: "Certification",
    title: "Google Cloud Fundamentals",
    category: "Cloud",
    provider: "google",
    path: "/certifications/google/cloud-fundamentals",
    description: "GCP architecture, compute, storage, BigQuery, IAM, and security governance."
  },
  {
    type: "Certification",
    title: "Cisco Networking Fundamentals (CCNA)",
    category: "Infrastructure",
    provider: "cisco",
    path: "/certifications/cisco/networking",
    description: "OSI model, IP subnetting, VLANs, OSPF routing, ACLs, NAT/PAT, wireless, and diagnostics."
  },
  {
    type: "Certification",
    title: "CompTIA IT Fundamentals & A+",
    category: "Security & IT",
    provider: "comptia",
    path: "/certifications/comptia/fundamentals",
    description: "Hardware, operating systems, networking, cybersecurity, databases, and troubleshooting."
  },
  {
    type: "Certification",
    title: "Kubernetes Fundamentals (CKA / CKAD)",
    category: "Infrastructure",
    provider: "kubernetes",
    path: "/certifications/kubernetes/fundamentals",
    description: "Containers, Control plane, Pods, Deployments, Services, Ingress, PV/PVC, and HPA."
  },
  ...awsLessons.map((l) => ({
    type: "Lesson",
    title: l.title,
    category: `AWS Cloud Practitioner • ${l.category}`,
    provider: "aws",
    path: `/certifications/aws/cloud-practitioner/lesson/${l.id}`,
    description: l.intro
  })),
  ...awsSaaLessons.map((l) => ({
    type: "Lesson",
    title: l.title,
    category: `AWS Solutions Architect • ${l.category}`,
    provider: "aws-saa",
    path: `/certifications/aws/solutions-architect/lesson/${l.id}`,
    description: l.intro
  })),
  ...azureLessons.map((l) => ({
    type: "Lesson",
    title: l.title,
    category: `Azure • ${l.category}`,
    provider: "azure",
    path: `/certifications/azure/az-900/lesson/${l.id}`,
    description: l.intro
  })),
  ...googleLessons.map((l) => ({
    type: "Lesson",
    title: l.title,
    category: `Google Cloud • ${l.category}`,
    provider: "google",
    path: `/certifications/google/cloud-fundamentals/lesson/${l.id}`,
    description: l.intro
  })),
  ...ciscoLessons.map((l) => ({
    type: "Lesson",
    title: l.title,
    category: `Cisco • ${l.category}`,
    provider: "cisco",
    path: `/certifications/cisco/networking/lesson/${l.id}`,
    description: l.intro
  })),
  ...comptiaLessons.map((l) => ({
    type: "Lesson",
    title: l.title,
    category: `CompTIA • ${l.category}`,
    provider: "comptia",
    path: `/certifications/comptia/fundamentals/lesson/${l.id}`,
    description: l.intro
  })),
  ...kubernetesLessons.map((l) => ({
    type: "Lesson",
    title: l.title,
    category: `Kubernetes • ${l.category}`,
    provider: "kubernetes",
    path: `/certifications/kubernetes/fundamentals/lesson/${l.id}`,
    description: l.intro
  }))
];

function GlobalSearchModal({ onClose }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return ALL_SEARCHABLE_ITEMS.slice(0, 8); 
    }
    const q = query.toLowerCase();
    return ALL_SEARCHABLE_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    ).slice(0, 15);
  }, [query]);

  const handleSelect = (item) => {
    navigate(item.path);
    onClose();
  };

  return (
    <div className="modal-overlay search-overlay" onClick={onClose}>
      <div className="modal-content modal-search" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-header">
          <span className="search-mag-icon"></span>
          <input
            type="text"
            className="search-main-input"
            placeholder="Search lessons, concepts, certifications (e.g. Subnetting, IAM, Kubernetes, OSPF)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <span className="search-esc-badge">ESC</span>
        </div>

        <div className="search-results-box">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, idx) => (
              <div
                key={idx}
                className="search-result-row"
                onClick={() => handleSelect(item)}
              >
                <div className="res-icon">
                  {item.type === "Certification" ? "" : ""}
                </div>
                <div className="res-details">
                  <div className="res-title-row">
                    <strong>{item.title}</strong>
                    <span className="res-type-pill">{item.type}</span>
                  </div>
                  <small className="res-category">{item.category}</small>
                  <p className="res-snippet">{item.description}</p>
                </div>
                <span className="res-jump-arrow">→</span>
              </div>
            ))
          ) : (
            <div className="search-empty-state">
              <p>No matches found for "{query}". Try searching for AWS, Subnet, Pods, or Security.</p>
            </div>
          )}
        </div>

        <div className="search-footer-hint">
          <span>ProTip: Press <kbd>Ctrl</kbd> + <kbd>K</kbd> anywhere to open search</span>
        </div>
      </div>
    </div>
  );
}

export default GlobalSearchModal;
