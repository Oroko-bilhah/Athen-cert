import { useState } from "react";
import { practiceData } from "../data/practiceData";
import "./PracticeModals.css";

function InteractiveLabModal({ provider = "aws", onClose }) {
  const data = practiceData[provider] || practiceData.aws;
  const lab = data.lab || {
    title: "Hands-on Interactive Lab",
    scenario: "Step-by-step diagnostic and scenario validation.",
    steps: []
  };

  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [copiedCode, setCopiedCode] = useState(false);

  const handleToggleReveal = (idx) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleCopy = (codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-lab" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-eyebrow"> INTERACTIVE SCENARIO & LAB</span>
            <h2>{lab.title}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            
          </button>
        </div>

        <div className="modal-body">
          <div className="lab-scenario-banner">
            <strong> Scenario Overview</strong>
            <p>{lab.scenario}</p>
          </div>

          <div className="lab-steps-list">
            {lab.steps.map((step, idx) => (
              <div key={idx} className="lab-step-card">
                <div className="step-num-badge">Exercise {idx + 1}</div>
                <h4>{step.instruction}</h4>

                {step.code && (
                  <div className="lab-code-block">
                    <div className="code-header">
                      <span>Configuration / Command Snippet</span>
                      <button
                        className="copy-snippet-btn"
                        onClick={() => handleCopy(step.code)}
                      >
                        {copiedCode ? " Copied" : " Copy"}
                      </button>
                    </div>
                    <pre>
                      <code>{step.code}</code>
                    </pre>
                  </div>
                )}

                <div className="lab-question-box">
                  <p>
                    <strong>Prompt:</strong> {step.question}
                  </p>

                  <button
                    className="lab-reveal-btn"
                    onClick={() => handleToggleReveal(idx)}
                  >
                    {revealedAnswers[idx] ? "Hide Solution ▲" : "Reveal Solution & Analysis ▼"}
                  </button>

                  {revealedAnswers[idx] && (
                    <div className="lab-solution-box">
                      <strong> Verified Solution:</strong>
                      <p>{step.correctAnswer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="modal-footer-bar">
            <button className="primary-action-btn" onClick={onClose}>
              Complete Lab & Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteractiveLabModal;
