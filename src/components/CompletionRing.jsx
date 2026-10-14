
import "./CompletionRing.css";

function CompletionRing({ percentage = 0, size = 120, title = "Progress" }) {
  const radius = size / 2 - 10;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (Math.min(100, Math.max(0, percentage)) / 100) * circumference;

  return (
    <div className="completion-ring-wrapper" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="completion-ring-svg">
        
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="completion-ring-bg"
        />

        
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="completion-ring-progress"
          stroke="#F26B5B"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>

      <div className="completion-ring-content">
        <strong className="completion-percentage">{percentage}%</strong>
        <small className="completion-label">{title}</small>
      </div>
    </div>
  );
}

export default CompletionRing;
