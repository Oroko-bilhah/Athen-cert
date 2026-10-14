
import { useLearning } from "../context/LearningContext";
import "./UserProfile.css";

function UserProfile() {
  const { getOverallStats } = useLearning();
  const stats = getOverallStats();

  return (
    <div className="user-profile-card">
      <div className="profile-header">
        <div className="profile-avatar">
          <span></span>
        </div>

        <div className="profile-info">
          <h3>Alex Chen</h3>
          <span className="profile-badge">Cloud Engineer Pro</span>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <strong>{stats.activeCoursesCount}</strong>
          <small>Active Tracks</small>
        </div>
        <div className="stat-sep"></div>
        <div className="stat">
          <strong>{stats.totalCompletedLessons}</strong>
          <small>Lessons Done</small>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
