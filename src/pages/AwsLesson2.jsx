import { Link } from "react-router-dom";
import { useState } from "react";
import "./AwsLesson.css";

function AwsLesson2() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [completed, setCompleted] = useState(false);

  const answers = [
    {
      id: 1,
      text: "A. Buying and maintaining more physical servers",
      correct: false,
    },
    {
      id: 2,
      text: "B. Paying for resources as you use them",
      correct: true,
    },
    {
      id: 3,
      text: "C. Building your own data center",
      correct: false,
    },
    {
      id: 4,
      text: "D. Replacing every computer annually",
      correct: false,
    },
  ];

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="lesson-page">

      

      <header className="lesson-header">

        <div className="lesson-brand">

          <Link to="/" className="lesson-logo">
            Athen<span>cert</span>
          </Link>

          <div className="lesson-divider"></div>

          <Link
            to="/certifications/aws/cloud-practitioner"
            className="lesson-certification"
          >
            AWS Cloud Practitioner
          </Link>

        </div>

        <div className="lesson-header-right">

          <span>
            Lesson 2 of 18
          </span>

          <div className="lesson-progress">
            <div style={{ width: "11%" }}></div>
          </div>

          <Link
            to="/certifications/aws/cloud-practitioner"
            className="exit-lesson"
          >
            Exit lesson
          </Link>

        </div>

      </header>


      

      <div className="lesson-layout">

        

        <aside className="lesson-sidebar">

          <span className="sidebar-label">
            CLOUD CONCEPTS
          </span>

          <h3>
            AWS Cloud Practitioner
          </h3>

          <div className="lesson-list">

            <Link
              to="/certifications/aws/cloud-practitioner/lesson/1"
              className="lesson-item"
            >
              <span className="lesson-number">
                01
              </span>

              <div>
                <strong>
                  What is Cloud Computing?
                </strong>

                <small>
                  8 min
                </small>
              </div>
            </Link>


            <div className="lesson-item active">

              <span className="lesson-number">
                02
              </span>

              <div>
                <strong>
                  Benefits of the Cloud
                </strong>

                <small>
                  7 min
                </small>
              </div>

            </div>


            <div className="lesson-item">

              <span className="lesson-number">
                03
              </span>

              <div>
                <strong>
                  Cloud Deployment Models
                </strong>

                <small>
                  9 min
                </small>
              </div>

            </div>


            <div className="lesson-item">

              <span className="lesson-number">
                04
              </span>

              <div>
                <strong>
                  AWS Global Infrastructure
                </strong>

                <small>
                  8 min
                </small>
              </div>

            </div>

          </div>

        </aside>


        

        <main className="lesson-content">

          <div className="lesson-category">
            CLOUD CONCEPTS
          </div>

          <h1>
            Benefits of Cloud Computing
          </h1>

          <p className="lesson-intro">
            Cloud computing provides organizations with flexible,
            scalable, and cost-effective access to computing resources.
          </p>


          

          <div className="key-idea">

            <span>
              KEY IDEA
            </span>

            <strong>
              Cloud computing lets organizations access technology
              resources without having to purchase and maintain
              all the underlying physical infrastructure.
            </strong>

          </div>


          

          <h2>
            Why use cloud computing?
          </h2>

          <p>
            Traditional IT environments often require organizations
            to purchase hardware before they can use it. This can
            require significant upfront investment and ongoing
            maintenance.
          </p>

          <p>
            Cloud computing changes this approach by allowing
            organizations to access computing resources when they
            need them and scale those resources as requirements change.
          </p>


          

          <div className="example-box">

            <div className="example-label">
              SIMPLE EXAMPLE
            </div>

            <h3>
              Traditional IT
            </h3>

            <p>
              Buy servers → Install them → Maintain them →
              Replace them when they become outdated
            </p>

            <h3>
              Cloud Computing
            </h3>

            <p>
              Choose resources → Use them → Scale when needed →
              Pay for what you use
            </p>

          </div>


          

          <h2>
            Four important benefits
          </h2>

          <div className="concept-grid">

            <div className="concept-card">

              <span>
                01
              </span>

              <h3>
                Scalability
              </h3>

              <p>
                Resources can be increased or decreased as
                your workload changes.
              </p>

            </div>


            <div className="concept-card">

              <span>
                02
              </span>

              <h3>
                Cost efficiency
              </h3>

              <p>
                Cloud services can reduce the need for large
                upfront investments in physical infrastructure.
              </p>

            </div>


            <div className="concept-card">

              <span>
                03
              </span>

              <h3>
                Flexibility
              </h3>

              <p>
                Resources can be provisioned quickly when
                new requirements arise.
              </p>

            </div>


            <div className="concept-card">

              <span>
                04
              </span>

              <h3>
                Global access
              </h3>

              <p>
                Cloud resources can be accessed from many
                locations through a network connection.
              </p>

            </div>

          </div>


          

          <div className="quick-check">

            <span>
              QUICK CHECK
            </span>

            <h2>
              Which is a benefit of cloud computing?
            </h2>

            {answers.map((answer) => (

              <button
                key={answer.id}
                onClick={() => handleAnswerClick(answer)}
              >

                <span>
                  {answer.id}
                </span>

                <span>
                  {answer.text}
                </span>

              </button>

            ))}


            {selectedAnswer && (

              <p>

                {selectedAnswer.correct
                  ? "Correct!"
                  : "Not quite. Try again."}

              </p>

            )}

          </div>


          

          <div className="lesson-navigation">

            <Link
              to="/certifications/aws/cloud-practitioner/lesson/1"
              className="previous-lesson"
            >
              ← Previous lesson
            </Link>


            <button
              className="complete-button"
              disabled={!selectedAnswer?.correct || completed}
              onClick={() => {

                if (selectedAnswer?.correct) {
                  setCompleted(true);
                }

              }}
            >

              {completed
                ? " Lesson completed"
                : selectedAnswer?.correct
                ? "Complete lesson →"
                : "Answer correctly to continue"}

            </button>

          </div>

        </main>

      </div>

    </div>
  );
}

export default AwsLesson2;