import { Link } from "react-router-dom";
import "./CertificationRoadmap.css";

const roadmaps = {
  azure: {
    provider: "Microsoft Azure",
    shortName: "AZ",
    description:
      "Explore Microsoft Azure certifications and follow a structured path from cloud fundamentals to advanced solutions architect and specialty roles.",
    levels: [
      {
        id: "foundational",
        title: "Foundational",
        description: "Begin your Azure journey with core cloud concepts and the Azure platform.",
        certifications: [
          {
            id: "az-fundamentals",
            code: "AZ-900",
            title: "Azure Fundamentals",
            description: "Learn cloud computing fundamentals and the core Azure services, architecture, and pricing models.",
            level: "Foundational",
            status: "available",
            path: "/certifications/azure/az-900",
          },
          {
            id: "az-basics",
            code: "AZ-104",
            title: "Azure Administrator",
            description: "Develop the practical skills needed to manage, monitor, and optimize Azure subscriptions, resources, and services.",
            level: "Foundational",
            status: "coming-soon",
          },
        ],
      },
      {
        id: "associate",
        title: "Associate",
        description: "Develop expertise in Azure administration, application development, and cloud operations.",
        certifications: [
          {
            id: "az-dev",
            code: "AZ-204",
            title: "Azure Developer",
            description: "Build cloud applications and services with Azure SDKs, APIs, and platforms for scalable solutions.",
            level: "Associate",
            status: "coming-soon",
          },
          {
            id: "az-security",
            code: "AZ-500",
            title: "Azure Security Operations",
            description: "Protect Azure environments with identity, access management, and threat-focused security controls.",
            level: "Associate",
            status: "coming-soon",
          },
        ],
      },
      {
        id: "expert",
        title: "Expert",
        description: "Become an expert in designing, implementing, and managing enterprise Azure solutions.",
        certifications: [
          {
            id: "az-architect",
            code: "AZ-305",
            title: "Azure Solutions Architect",
            description: "Design secure, scalable, resilient Azure solutions aligned with business requirements.",
            level: "Expert",
            status: "coming-soon",
          },
          {
            id: "az-infrastructure",
            code: "AZ-104-E",
            title: "Azure Infrastructure Operations",
            description: "Manage complex Azure infrastructure, networking, storage, and high-availability systems.",
            level: "Expert",
            status: "coming-soon",
          },
        ],
      },
    ],
  },
  google: {
    provider: "Google Cloud",
    shortName: "GCP",
    description:
      "Explore Google Cloud certifications and follow a structured path from cloud foundations to data, infrastructure, and platform specialization.",
    levels: [
      {
        id: "foundational",
        title: "Foundational",
        description: "Build the core platform knowledge needed for modern cloud roles.",
        certifications: [
          {
            id: "cloud-fundamentals",
            code: "GCPF",
            title: "Google Cloud Fundamentals",
            description: "Learn cloud concepts, Google Cloud architecture, and the core services used to build cloud-native workloads.",
            level: "Foundational",
            status: "available",
            path: "/certifications/google/cloud-fundamentals",
          },
          {
            id: "associate-cloud-engineer",
            code: "ACE",
            title: "Associate Cloud Engineer",
            description: "Develop practical skills for deploying, managing, and monitoring cloud systems on Google Cloud.",
            level: "Foundational",
            status: "coming-soon",
          },
        ],
      },
      {
        id: "professional",
        title: "Professional",
        description: "Advance into platform, data, and infrastructure design roles.",
        certifications: [
          {
            id: "cloud-architect",
            code: "PCA",
            title: "Professional Cloud Architect",
            description: "Design secure, scalable, and resilient architectures across Google Cloud services.",
            level: "Professional",
            status: "coming-soon",
          },
          {
            id: "data-engineer",
            code: "PDE",
            title: "Professional Data Engineer",
            description: "Build and optimize data pipelines, warehouses, and analytics systems on Google Cloud.",
            level: "Professional",
            status: "coming-soon",
          },
        ],
      },
    ],
  },
  cisco: {
    provider: "Cisco",
    shortName: "CCNA",
    description:
      "Explore Cisco certifications from networking fundamentals to enterprise infrastructure and network operations.",
    levels: [
      {
        id: "entry",
        title: "Entry",
        description: "Start with the core networking and connectivity concepts used in enterprise environments.",
        certifications: [
          {
            id: "networking-fundamentals",
            code: "CCNA",
            title: "Cisco Networking Fundamentals",
            description: "Learn networking essentials such as IP addressing, switching, routing, troubleshooting, and connectivity.",
            level: "Entry",
            status: "available",
            path: "/certifications/cisco/networking",
          },
          {
            id: "networking-basics",
            code: "CCT",
            title: "Cisco Certified Technician",
            description: "Develop the practical skills needed to support, troubleshoot, and maintain Cisco technology.",
            level: "Entry",
            status: "coming-soon",
          },
        ],
      },
      {
        id: "associate",
        title: "Associate",
        description: "Deepen your skills in networking design, implementation, and operational support.",
        certifications: [
          {
            id: "enterprise-networking",
            code: "CCNP",
            title: "Cisco Certified Network Professional",
            description: "Design and manage complex enterprise network environments with advanced routing and switching expertise.",
            level: "Associate",
            status: "coming-soon",
          },
          {
            id: "security-networking",
            code: "SCOR",
            title: "Cisco Security Operations",
            description: "Explore secure network access, segmentation, and threat-focused network defense strategies.",
            level: "Associate",
            status: "coming-soon",
          },
        ],
      },
    ],
  },
  kubernetes: {
    provider: "Kubernetes",
    shortName: "K8S",
    description:
      "Explore Kubernetes certifications and learning paths focused on containers, orchestration, and cloud-native operations.",
    levels: [
      {
        id: "foundational",
        title: "Foundational",
        description: "Learn the basic concepts behind containers, orchestration, and cluster operations.",
        certifications: [
          {
            id: "kubernetes-fundamentals",
            code: "K8S-F",
            title: "Kubernetes Fundamentals",
            description: "Understand pods, deployments, services, scaling, and the core concepts behind Kubernetes orchestration.",
            level: "Foundational",
            status: "available",
            path: "/certifications/kubernetes/fundamentals",
          },
          {
            id: "container-basics",
            code: "CKA-P",
            title: "Container & Orchestration Essentials",
            description: "Build the practical knowledge needed to work confidently with containers before deeper Kubernetes study.",
            level: "Foundational",
            status: "coming-soon",
          },
        ],
      },
      {
        id: "professional",
        title: "Professional",
        description: "Progress into cluster operations, troubleshooting, and production workloads.",
        certifications: [
          {
            id: "cka",
            code: "CKA",
            title: "Certified Kubernetes Administrator",
            description: "Design and manage Kubernetes clusters in production, including networking, storage, and troubleshooting.",
            level: "Professional",
            status: "coming-soon",
          },
          {
            id: "cks",
            code: "CKS",
            title: "Certified Kubernetes Security Specialist",
            description: "Focus on securing Kubernetes workloads and strengthening cluster hardening and runtime controls.",
            level: "Professional",
            status: "coming-soon",
          },
        ],
      },
    ],
  },
  comptia: {
    provider: "CompTIA",
    shortName: "ITF+",
    description:
      "Explore CompTIA learning paths built for foundational technical support, troubleshooting, and cybersecurity readiness.",
    levels: [
      {
        id: "foundational",
        title: "Foundational",
        description: "Build confidence with the core knowledge needed for IT support and technical environments.",
        certifications: [
          {
            id: "fundamentals",
            code: "ITF+",
            title: "CompTIA Fundamentals",
            description: "Learn the basics of IT systems, connectivity, security, and troubleshooting.",
            level: "Foundational",
            status: "available",
            path: "/certifications/comptia/fundamentals",
          },
          {
            id: "a-plus",
            code: "A+",
            title: "CompTIA A+",
            description: "Develop practical IT support skills for hardware, software, security, and customer troubleshooting.",
            level: "Foundational",
            status: "coming-soon",
          },
        ],
      },
      {
        id: "associate",
        title: "Associate",
        description: "Move toward roles that require deeper technical support and security awareness.",
        certifications: [
          {
            id: "security-plus",
            code: "SEC+",
            title: "CompTIA Security+",
            description: "Cover core security operations, threat management, and mitigations used in modern IT environments.",
            level: "Associate",
            status: "coming-soon",
          },
          {
            id: "network-plus",
            code: "NET+",
            title: "CompTIA Network+",
            description: "Understand networking design, troubleshooting, infrastructure, and operations at a practical level.",
            level: "Associate",
            status: "coming-soon",
          },
        ],
      },
    ],
  },
};

import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { getBreadcrumbSchema, getItemListSchema } from "../utils/structuredData";

function CertificationRoadmap({ provider }) {
  const selected = roadmaps[provider];

  if (!selected) {
    return <div className="roadmap-page">Certification roadmap not found.</div>;
  }

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: `${selected.provider} Certification Roadmap` }
  ];

  const allCertsInRoadmap = selected.levels.flatMap((lvl) => lvl.certifications);

  const roadmapStructuredData = [
    getBreadcrumbSchema(
      breadcrumbItems.map((b) => ({ name: b.label, url: b.path || `/certifications/${provider}` }))
    ),
    getItemListSchema(
      allCertsInRoadmap,
      `${selected.provider} Certification Roadmap`,
      `/certifications/${provider}`
    )
  ];

  return (
    <div className="roadmap-page">
      <SEO
        title={`${selected.provider} Certification Roadmap & Career Pathways`}
        description={`${selected.description} Explore foundational, associate, and expert certification milestones on Athencert.`}
        keywords={[
          selected.provider,
          selected.shortName,
          "certification roadmap",
          "career learning path",
          "cloud certifications",
          "IT career progression"
        ]}
        canonicalPath={`/certifications/${provider}`}
        structuredData={roadmapStructuredData}
      />

      <header className="roadmap-header" aria-label="Roadmap Header">
        <Link to="/" className="roadmap-logo" aria-label="Athencert Home">
          Athen<span>cert</span>
        </Link>

        <nav aria-label="Roadmap Nav">
          <Link to="/">Home</Link>
          <Link to={`/certifications/${provider}`}>{selected.provider} Roadmap</Link>
        </nav>

        <Link to="/dashboard" className="roadmap-signin">
          Dashboard
        </Link>
      </header>

      <main id="roadmap-main">
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "16px 24px 0 24px" }}>
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="roadmap-hero" aria-labelledby="roadmap-hero-title">
          <div className="roadmap-hero-content">
            <span className="roadmap-eyebrow">{selected.shortName}</span>
            <h1 id="roadmap-hero-title">
              {selected.provider}
              <br />
              <span>Roadmap</span>
            </h1>
            <p>{selected.description}</p>
          </div>
        </section>

        <section className="aws-certification-roadmap" aria-labelledby="path-heading">
          <div className="roadmap-introduction">
            <span>CERTIFICATION PATH</span>
            <h2 id="path-heading">Find your path</h2>
            <p>Start with the certification stage that matches your current experience and career goals.</p>
          </div>

          <div className="certification-levels">
            {selected.levels.map((level) => (
              <section className="certification-level" key={level.id} aria-labelledby={`level-${level.id}`}>
                <div className="level-header">
                  <div>
                    <span>{level.title.toUpperCase()}</span>
                    <h2 id={`level-${level.id}`}>{level.title}</h2>
                  </div>
                  <p>{level.description}</p>
                </div>

                <div className="certification-grid">
                  {level.certifications.map((certification) => (
                    <CertificationCard key={certification.id} certification={certification} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <footer className="roadmap-footer">
        <div className="roadmap-logo">
          Athen<span>cert</span>
        </div>
        <p>Learn the skills. Earn the certification. Build the career.</p>
        <small>© 2026 Athencert. All rights reserved.</small>
      </footer>
    </div>
  );
}

function CertificationCard({ certification }) {
  const available = certification.status === "available";

  return (
    <div className={`roadmap-cert-card ${available ? "available" : "coming-soon-card"}`}>
      <div className="cert-card-top">
        <span className="cert-code">{certification.code}</span>
        {available ? (
          <span className="available-label">AVAILABLE</span>
        ) : (
          <span className="soon-label">COMING SOON</span>
        )}
      </div>

      <h3>{certification.title}</h3>
      <p>{certification.description}</p>

      {available ? (
        <Link to={certification.path} className="roadmap-card-link">
          Start learning →
        </Link>
      ) : (
        <span className="roadmap-disabled-link">Coming soon</span>
      )}
    </div>
  );
}

export default CertificationRoadmap;
