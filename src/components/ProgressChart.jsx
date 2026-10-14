
import "./ProgressChart.css";

function ProgressChart({ lessons = 0, maxLessons = 26, questions = 0, accuracy = 0, streak = 0 }) {
  const lessonPercent = maxLessons > 0 ? (lessons / maxLessons) * 100 : 0;

  return (
    <div className="progress-chart-container">
      <svg viewBox="0 0 400 120" className="chart-svg" preserveAspectRatio="xMidYMid meet">
        
        <g className="chart-grid" opacity="0.4">
          <line x1="50" y1="20" x2="50" y2="100" strokeWidth="1" stroke="#F26B5B" />
          <line x1="120" y1="20" x2="120" y2="100" strokeWidth="1" stroke="#F26B5B" />
          <line x1="190" y1="20" x2="190" y2="100" strokeWidth="1" stroke="#F26B5B" />
          <line x1="260" y1="20" x2="260" y2="100" strokeWidth="1" stroke="#F26B5B" />
          <line x1="330" y1="20" x2="330" y2="100" strokeWidth="1" stroke="#F26B5B" />
        </g>

        
        <rect x="30" y="70" width="80" height="8" rx="4" fill="#F26B5B" />
        <rect x="30" y="70" width={Math.min((lessonPercent / 100) * 80, 80)} height="8" rx="4" fill="#F26B5B" />

        
        <circle cx="50" cy="30" r="12" fill="#FFF5E8" stroke="#F26B5B" strokeWidth="1.5" />
        <text x="50" y="34" textAnchor="middle" className="chart-metric-value" fill="#292A2D">{lessons}</text>

        <circle cx="120" cy="30" r="12" fill="#FFF5E8" stroke="#F26B5B" strokeWidth="1.5" />
        <text x="120" y="34" textAnchor="middle" className="chart-metric-value" fill="#292A2D">{questions}</text>

        <circle cx="190" cy="30" r="12" fill="#FFF5E8" stroke="#F26B5B" strokeWidth="1.5" />
        <text x="190" y="34" textAnchor="middle" className="chart-metric-value" fill="#292A2D">{accuracy}</text>

        <circle cx="260" cy="30" r="12" fill="#FFF5E8" stroke="#F26B5B" strokeWidth="1.5" />
        <text x="260" y="34" textAnchor="middle" className="chart-metric-value" fill="#292A2D">{streak}</text>
      </svg>

      <div className="chart-legend">
        <div className="legend-item blue">
          <span>{lessons}</span> Lessons
        </div>
        <div className="legend-item purple">
          <span>{questions}</span> Questions
        </div>
        <div className="legend-item green">
          <span>{accuracy}%</span> Accuracy
        </div>
        <div className="legend-item gold">
          <span>{streak}</span> Day streak
        </div>
      </div>
    </div>
  );
}

export default ProgressChart;
