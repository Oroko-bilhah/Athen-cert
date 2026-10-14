import { Link } from "react-router-dom";
import awsCertifications from "../data/awsCertifications";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { getBreadcrumbSchema, getItemListSchema } from "../utils/structuredData";
import "./AwsRoadmap.css";

function AwsRoadmap() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "AWS Certification Roadmap" }
  ];

  const allAwsCerts = awsCertifications.levels.flatMap((lvl) => lvl.certifications);

  const awsRoadmapStructuredData = [
    getBreadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.label, url: b.path || "/certifications/aws" }))),
    getItemListSchema(allAwsCerts, "AWS Certification Roadmap", "/certifications/aws")
  ];

  return (
    <div className="aws-roadmap-page">
      <SEO
        title="AWS Certification Roadmap & Career Pathways (2026)"
        description="Explore the complete AWS Certification Roadmap from Cloud Practitioner (CLF-C02) and Solutions Architect to Security and DevOps Specialty milestones."
        keywords={[
          "AWS Certification Roadmap",
          "AWS Cloud Practitioner",
          "AWS Solutions Architect Associate",
          "AWS SysOps Administrator",
          "AWS Developer Associate",
          "AWS DevOps Engineer Professional",
          "cloud career path"
        ]}
        canonicalPath="/certifications/aws"
        structuredData={awsRoadmapStructuredData}
      />

      

      <header className="roadmap-header" aria-label="AWS Roadmap Header">

        <Link to="/" className="roadmap-logo" aria-label="Athencert Home">
          Athen<span>cert</span>
        </Link>

        <nav aria-label="Roadmap Navigation">
          <Link to="/">Home</Link>
          <Link to="/certifications/aws">AWS Roadmap</Link>
        </nav>

        <Link to="/dashboard" className="roadmap-signin">
          Dashboard
        </Link>

      </header>


      

      <main id="aws-roadmap-main">
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "16px 24px 0 24px" }}>
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="roadmap-hero" aria-labelledby="aws-roadmap-title">

          <div className="roadmap-hero-content">

            <span className="roadmap-eyebrow">
              AMAZON WEB SERVICES
            </span>

            <h1>
              AWS Certification
              <br />
              <span>Roadmap</span>
            </h1>

            <p>
              Explore AWS certifications from foundational knowledge
              to advanced cloud expertise. Choose a certification,
              follow the learning path, and prepare for the exam.
            </p>

          </div>

        </section>


        

        <section className="aws-certification-roadmap">

          <div className="roadmap-introduction">

            <span>
              CERTIFICATION PATH
            </span>

            <h2>
              Find your path
            </h2>

            <p>
              Start with the certification that matches your current
              experience and career goals.
            </p>

          </div>


          <div className="certification-levels">

            {awsCertifications.levels.map((level) => (

              <section
                className="certification-level"
                key={level.id}
              >

                <div className="level-header">

                  <div>

                    <span>
                      {level.title.toUpperCase()}
                    </span>

                    <h2>
                      {level.title}
                    </h2>

                  </div>

                  <p>
                    {level.description}
                  </p>

                </div>


                <div className="certification-grid">

                  {level.certifications.map((certification) => (

                    <CertificationCard
                      key={certification.id}
                      certification={certification}
                    />

                  ))}

                </div>

              </section>

            ))}

          </div>

        </section>

      </main>


      

      <footer className="roadmap-footer">

        <div className="roadmap-logo">
          Cert<span>Path</span>
        </div>

        <p>
          Learn the skills. Earn the certification. Build the career.
        </p>

        <small>
          © 2026 Athencert. All rights reserved.
        </small>

      </footer>

    </div>
  );
}




function CertificationCard({ certification }) {

  const available =
    certification.status === "available";


  return (

    <div
      className={`roadmap-cert-card ${
        available ? "available" : "coming-soon-card"
      }`}
    >

      <div className="cert-card-top">

        <span className="cert-code">
          {certification.code}
        </span>

        {available ? (

          <span className="available-label">
            AVAILABLE
          </span>

        ) : (

          <span className="soon-label">
            COMING SOON
          </span>

        )}

      </div>


      <h3>
        {certification.title}
      </h3>


      <p>
        {certification.description}
      </p>


      {available ? (

        <Link
          to={certification.path}
          className="roadmap-card-link"
        >
          Start learning →
        </Link>

      ) : (

        <span className="roadmap-disabled-link">
          Coming soon
        </span>

      )}

    </div>

  );
}


export default AwsRoadmap;