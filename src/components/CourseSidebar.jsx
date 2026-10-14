
import { Link, useLocation } from "react-router-dom";
import { useLearning } from "../context/LearningContext";
import "./CourseSidebar.css";

function CourseSidebar() {
  const location = useLocation();
  const { getProviderProgress, openPracticeModal } = useLearning();

  const categories = [
    {
      name: "Cloud Platforms",
      courses: [
        {
          icon: "",
          name: "AWS Cloud",
          id: "aws",
          totalLessons: 18,
          path: "/certifications/aws/cloud-practitioner"
        },
        {
          icon: "",
          name: "AWS Architect",
          id: "aws-saa",
          totalLessons: 16,
          path: "/certifications/aws/solutions-architect"
        },
        {
          icon: "",
          name: "Microsoft Azure",
          id: "azure",
          totalLessons: 32,
          path: "/certifications/azure/az-900"
        },
        {
          icon: "",
          name: "Google Cloud",
          id: "google",
          totalLessons: 32,
          path: "/certifications/google/cloud-fundamentals"
        }
      ]
    },
    {
      name: "Infrastructure & Containers",
      courses: [
        {
          icon: "",
          name: "Kubernetes",
          id: "kubernetes",
          totalLessons: 12,
          path: "/certifications/kubernetes/fundamentals"
        },
        {
          icon: "",
          name: "Cisco CCNA",
          id: "cisco",
          totalLessons: 12,
          path: "/certifications/cisco/networking"
        }
      ]
    },
    {
      name: "Security & Foundations",
      courses: [
        {
          icon: "",
          name: "CompTIA ITF+",
          id: "comptia",
          totalLessons: 12,
          path: "/certifications/comptia/fundamentals"
        }
      ]
    }
  ];

  return (
    <aside className="course-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand-title">
          <h3>Certifications</h3>
          <span className="course-count">7 Active</span>
        </div>
      </div>

      <div className="courses-by-category">
        {categories.map((category) => (
          <div key={category.name} className="category-block">
            <h4 className="category-title">{category.name}</h4>

            <div className="category-courses">
              {category.courses.map((course) => {
                const progressInfo = getProviderProgress(course.id, course.totalLessons);
                const isActive = location.pathname.includes(course.id);

                return (
                  <Link
                    key={course.name}
                    to={course.path}
                    className={`course-item ${isActive ? "active-route" : ""} ${
                      progressInfo.percentage >= 50 ? "high-progress" : ""
                    }`}
                  >
                    <span className="course-icon">{course.icon}</span>
                    <div className="course-details">
                      <span className="course-name">{course.name}</span>
                      <div className="course-mini-bar">
                        <div
                          className="course-bar-fill"
                          style={{ width: `${progressInfo.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="course-percent">{progressInfo.percentage}%</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-bottom-action">
        <button
          className="sidebar-mock-exam-btn"
          onClick={() => openPracticeModal("mockExam", "aws")}
          title="Launch Timed 65-Question Certification Exam (Ctrl+M)"
        >
          ⏱️ Timed Mock Exam (Ctrl+M)
        </button>
        <Link to="/#certifications" className="explore-all-btn">
           Browse All Paths
        </Link>
      </div>
    </aside>
  );
}

export default CourseSidebar;
