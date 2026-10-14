import { useState } from "react";
import { useLearning } from "../context/LearningContext";
import { practiceData } from "../data/practiceData";
import "./PracticeModals.css";

function QuickQuizModal({ provider = "aws", onClose }) {
  const { recordQuizScore } = useLearning();
  const data = practiceData[provider] || practiceData.aws;
  const questions = data.quickQuiz || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optionId) => {
    if (showExplanation || isFinished) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionId
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      let correct = 0;
      questions.forEach((q, idx) => {
        const sel = selectedAnswers[idx];
        const correctOpt = q.answers.find((a) => a.correct)?.id;
        if (sel === correctOpt) correct++;
      });
      recordQuizScore(provider, correct, questions.length);
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setShowExplanation(false);
    setIsFinished(false);
  };

  const scoreCount = questions.reduce((acc, q, idx) => {
    const sel = selectedAnswers[idx];
    const correctOpt = q.answers.find((a) => a.correct)?.id;
    return sel === correctOpt ? acc + 1 : acc;
  }, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-quiz" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-eyebrow"> QUICK PRACTICE QUIZ</span>
            <h2>{data.name}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            
          </button>
        </div>

        {!isFinished ? (
          <div className="modal-body">
            <div className="quiz-progress-row">
              <span>
                Question {currentIndex + 1} of {questions.length}
              </span>
              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-fill"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h3 className="quiz-question-text">{currentQ.question}</h3>

            <div className="quiz-options-list">
              {currentQ.answers.map((ans) => {
                const isSelected = selectedAnswers[currentIndex] === ans.id;
                const isCorrect = ans.correct;
                let optionClass = "quiz-opt-btn";

                if (showExplanation) {
                  if (isCorrect) optionClass += " opt-correct";
                  else if (isSelected && !isCorrect) optionClass += " opt-incorrect";
                } else if (isSelected) {
                  optionClass += " opt-selected";
                }

                return (
                  <button
                    key={ans.id}
                    className={optionClass}
                    onClick={() => handleSelectOption(ans.id)}
                    disabled={showExplanation}
                  >
                    <span className="opt-letter">{ans.id}</span>
                    <span className="opt-text">{ans.text}</span>
                    {showExplanation && isCorrect && <span className="opt-badge"> Correct</span>}
                    {showExplanation && isSelected && !isCorrect && (
                      <span className="opt-badge badge-wrong"> Incorrect</span>
                    )}
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="quiz-explanation-box">
                <strong> Explanation</strong>
                <p>{currentQ.explanation}</p>
                <div className="quiz-footer-actions">
                  <button className="primary-action-btn" onClick={handleNext}>
                    {currentIndex < questions.length - 1 ? "Next question →" : "View results →"}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="modal-body modal-result-view">
            <div className="result-celebration-circle">
              <span className="result-score">
                {scoreCount} / {questions.length}
              </span>
              <small>Score</small>
            </div>

            <h3>
              {scoreCount === questions.length
                ? "Perfect Score! "
                : scoreCount >= questions.length * 0.7
                ? "Great Job! Passed "
                : "Good Effort! Keep practicing "}
            </h3>
            <p>
              You answered {scoreCount} out of {questions.length} questions correctly (
              {Math.round((scoreCount / questions.length) * 100)}%). This score has been added to your
              learning progress.
            </p>

            <div className="result-actions">
              <button className="secondary-action-btn" onClick={handleRestart}>
                 Retry Quiz
              </button>
              <button className="primary-action-btn" onClick={onClose}>
                Done & Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuickQuizModal;
