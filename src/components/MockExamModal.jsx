import { useState, useEffect, useCallback, useMemo } from "react";
import { useLearning } from "../context/LearningContext";
import { practiceData } from "../data/practiceData";
import "./PracticeModals.css";

function MockExamModal({ provider = "aws", onClose }) {
  const { recordMockExamScore } = useLearning();
  const pKey = (provider || "aws").toLowerCase().trim();
  const data = practiceData[pKey] || practiceData.aws;
  const questions = useMemo(() => data.mockExam || [], [data.mockExam]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const initialSeconds = useMemo(() => {
    if (questions.length >= 50) return 90 * 60; 
    if (questions.length >= 20) return 45 * 60;
    return 15 * 60;
  }, [questions.length]);

  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);
  const [isFinished, setIsFinished] = useState(false);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState(() => new Set());
  const [navigatorFilter, setNavigatorFilter] = useState("all"); 
  const [reportFilter, setReportFilter] = useState("all"); 
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    setSecondsRemaining(initialSeconds);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
    setShowConfirmFinish(false);
    setFlaggedQuestions(new Set());
    setMobileSidebarOpen(false);
  }, [pKey, initialSeconds]);

  const handleSubmitExam = useCallback(() => {
    let count = 0;
    questions.forEach((q, idx) => {
      const sel = selectedAnswers[idx];
      const correctOpt = q.answers.find((a) => a.correct)?.id;
      if (sel === correctOpt) count++;
    });

    const scorePercentage = Math.round((count / (questions.length || 1)) * 100);
    const isPassed = scorePercentage >= 70;

    recordMockExamScore(pKey, scorePercentage, 100, isPassed);
    setIsFinished(true);
    setShowConfirmFinish(false);
  }, [questions, selectedAnswers, recordMockExamScore, pKey]);

  useEffect(() => {
    if (isFinished) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isFinished, handleSubmitExam]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const currentQ = questions[currentIndex];

  const handleSelectOption = useCallback((optionId) => {
    if (isFinished) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionId
    }));
  }, [isFinished, currentIndex]);

  const handleToggleFlag = useCallback((index) => {
    setFlaggedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  useEffect(() => {
    if (isFinished || showConfirmFinish) return;

    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1));
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        handleToggleFlag(currentIndex);
      } else if (["1", "2", "3", "4"].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        if (currentQ?.answers?.[idx]) {
          handleSelectOption(currentQ.answers[idx].id);
        }
      } else if (["a", "b", "c", "d", "A", "B", "C", "D"].includes(e.key)) {
        const letter = e.key.toUpperCase();
        const targetAns = currentQ?.answers?.find((a) => a.id === letter);
        if (targetAns) {
          handleSelectOption(targetAns.id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFinished, showConfirmFinish, currentIndex, questions.length, currentQ, handleToggleFlag, handleSelectOption]);

  let correctCount = 0;
  questions.forEach((q, idx) => {
    const sel = selectedAnswers[idx];
    const correctOpt = q.answers.find((a) => a.correct)?.id;
    if (sel === correctOpt) correctCount++;
  });
  const scorePct = Math.round((correctCount / (questions.length || 1)) * 100);
  const passed = scorePct >= 70;
  const answeredCount = Object.keys(selectedAnswers).length;
  const unansweredCount = questions.length - answeredCount;

  const filteredIndices = useMemo(() => {
    return questions.map((_, idx) => idx).filter((idx) => {
      if (navigatorFilter === "flagged") return flaggedQuestions.has(idx);
      if (navigatorFilter === "unanswered") return selectedAnswers[idx] === undefined;
      return true;
    });
  }, [questions, navigatorFilter, flaggedQuestions, selectedAnswers]);

  const filteredReviewQuestions = useMemo(() => {
    return questions.map((q, idx) => ({ q, idx })).filter(({ q, idx }) => {
      const sel = selectedAnswers[idx];
      const correctOpt = q.answers.find((a) => a.correct)?.id;
      const isCorrect = sel === correctOpt;
      const isFlagged = flaggedQuestions.has(idx);

      if (reportFilter === "incorrect") return !isCorrect;
      if (reportFilter === "correct") return isCorrect;
      if (reportFilter === "flagged") return isFlagged;
      return true;
    });
  }, [questions, selectedAnswers, flaggedQuestions, reportFilter]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-exam" onClick={(e) => e.stopPropagation()}>
        
        <header className="modal-header exam-header">
          <div className="exam-header-left">
            <div className="exam-header-title-wrap">
              <span className="modal-eyebrow">
                ⏱️ OFFICIAL CERTIFICATION EXAM SIMULATOR
              </span>
              <h2>{data.name}</h2>
            </div>
            {!isFinished && (
              <span className="exam-track-pill">
                {data.code || pKey.toUpperCase()}
              </span>
            )}
          </div>

          <div className="exam-header-right">
            {!isFinished && (
              <>
                <button
                  className="mobile-nav-toggle-btn"
                  onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                  title="Toggle Question Grid Navigator"
                  aria-label="Toggle Question Grid Navigator"
                >
                   Grid ({answeredCount}/{questions.length})
                </button>

                <div
                  className={`exam-timer ${secondsRemaining < 300 ? "timer-warning" : ""}`}
                  title="Remaining Exam Time"
                >
                  <span className="timer-icon" aria-hidden="true">⏳</span>
                  <div className="timer-content">
                    <small>TIME REMAINING</small>
                    <strong>{formatTime(secondsRemaining)}</strong>
                  </div>
                </div>
              </>
            )}

            <button
              className="modal-close-btn"
              onClick={() => {
                if (!isFinished && answeredCount > 0) {
                  setShowConfirmFinish(true);
                } else {
                  onClose();
                }
              }}
              title="Close Exam Simulator (Esc)"
              aria-label="Close"
            >
              
            </button>
          </div>
        </header>

        
        {!isFinished && currentQ ? (
          <div className="modal-body exam-body-layout">
            
            <section className="exam-question-panel" aria-label="Current Exam Question">
              
              <div className="exam-q-top-bar">
                <div className="exam-q-meta-left">
                  <span className="exam-q-num-badge">
                    Question {currentIndex + 1} of {questions.length}
                  </span>
                  {currentQ.domain && (
                    <span className="exam-domain-tag">
                       Domain: {currentQ.domain}
                    </span>
                  )}
                </div>

                <div className="exam-q-meta-right">
                  <button
                    className={`flag-btn ${flaggedQuestions.has(currentIndex) ? "flagged" : ""}`}
                    onClick={() => handleToggleFlag(currentIndex)}
                    title="Flag question for review (F)"
                  >
                     {flaggedQuestions.has(currentIndex) ? "Flagged for Review" : "Flag for Review"}
                    <kbd className="exam-kbd">F</kbd>
                  </button>
                </div>
              </div>

              
              <div className="exam-linear-progress" aria-hidden="true">
                <div
                  className="exam-linear-fill"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>

              
              <div className="exam-question-scroll-area">
                <div className="exam-question-container">
                  <h3 className="exam-question-heading">{currentQ.question}</h3>
                  <p className="exam-instruction-text">
                    Select the single best answer from the options below:
                  </p>

                  <div className="exam-options-list" role="radiogroup">
                    {currentQ.answers.map((ans, optIdx) => {
                      const isSelected = selectedAnswers[currentIndex] === ans.id;
                      return (
                        <button
                          key={ans.id}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          className={`exam-option-card ${isSelected ? "selected" : ""}`}
                          onClick={() => handleSelectOption(ans.id)}
                        >
                          <div className="opt-checkbox" aria-hidden="true">
                            {ans.id}
                          </div>
                          <div className="opt-text">{ans.text}</div>
                          {isSelected && (
                            <span className="opt-selected-indicator"> Selected</span>
                          )}
                          <span className="opt-key-hint">{optIdx + 1}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              
              <footer className="exam-bottom-nav">
                <div className="exam-nav-left">
                  <button
                    className="secondary-action-btn"
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                    title="Go to previous question (←)"
                  >
                    ← Previous
                    <kbd className="exam-kbd">←</kbd>
                  </button>
                </div>

                <div className="exam-nav-center-status">
                  <span>
                    Answered: <strong>{answeredCount}</strong> / {questions.length}
                  </span>
                  <span className="status-separator">•</span>
                  <span>
                    Flagged: <strong>{flaggedQuestions.size}</strong>
                  </span>
                </div>

                <div className="exam-nav-right">
                  {currentIndex < questions.length - 1 ? (
                    <button
                      className="primary-action-btn next-q-btn"
                      onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                      title="Go to next question (→)"
                    >
                      Next Question →
                      <kbd className="exam-kbd">→</kbd>
                    </button>
                  ) : (
                    <button
                      className="finish-exam-btn"
                      onClick={() => setShowConfirmFinish(true)}
                      title="Submit all answers and grade your exam"
                    >
                      Submit Exam 
                    </button>
                  )}
                </div>
              </footer>
            </section>

            
            <aside
              className={`exam-nav-sidebar ${mobileSidebarOpen ? "mobile-open" : ""}`}
              aria-label="Question Grid Navigator"
            >
              <div className="sidebar-header-bar">
                <h4>Question Grid</h4>
                <span className="sidebar-total-badge">{questions.length} Questions</span>
              </div>

              
              <div className="sidebar-filter-tabs">
                <button
                  className={`filter-tab-btn ${navigatorFilter === "all" ? "active" : ""}`}
                  onClick={() => setNavigatorFilter("all")}
                >
                  All ({questions.length})
                </button>
                <button
                  className={`filter-tab-btn ${navigatorFilter === "flagged" ? "active" : ""}`}
                  onClick={() => setNavigatorFilter("flagged")}
                >
                   Flagged ({flaggedQuestions.size})
                </button>
                <button
                  className={`filter-tab-btn ${navigatorFilter === "unanswered" ? "active" : ""}`}
                  onClick={() => setNavigatorFilter("unanswered")}
                >
                  Pending ({unansweredCount})
                </button>
              </div>

              
              <div className="navigator-grid-wrapper">
                <div className="navigator-grid">
                  {filteredIndices.map((idx) => {
                    const isAnswered = selectedAnswers[idx] !== undefined;
                    const isFlagged = flaggedQuestions.has(idx);
                    const isCurrent = idx === currentIndex;

                    let itemClass = "nav-grid-item";
                    if (isCurrent) itemClass += " current";
                    if (isAnswered) itemClass += " answered";
                    if (isFlagged) itemClass += " flagged";

                    return (
                      <button
                        key={questions[idx]?.id || idx}
                        type="button"
                        className={itemClass}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setMobileSidebarOpen(false);
                        }}
                        title={`Question ${idx + 1}: ${
                          isAnswered ? "Answered" : "Unanswered"
                        }${isFlagged ? " (Flagged)" : ""}`}
                      >
                        <span className="grid-item-num">{idx + 1}</span>
                        {isFlagged && <span className="grid-item-flag"></span>}
                        {isAnswered && !isFlagged && <span className="grid-item-check"></span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              
              <div className="nav-legend">
                <div className="legend-item">
                  <span className="dot dot-current"></span> Current Question
                </div>
                <div className="legend-item">
                  <span className="dot dot-answered"></span> Answered ({answeredCount})
                </div>
                <div className="legend-item">
                  <span className="dot dot-flagged"></span> Flagged ({flaggedQuestions.size})
                </div>
                <div className="legend-item">
                  <span className="dot dot-unanswered"></span> Pending ({unansweredCount})
                </div>
              </div>

              
              <button
                className="sidebar-finish-btn"
                onClick={() => setShowConfirmFinish(true)}
              >
                End & Grade Exam
              </button>
            </aside>
          </div>
        ) : (
          
          <div className="modal-body exam-report-view">
            <div className={`report-hero-badge ${passed ? "badge-pass" : "badge-fail"}`}>
              <span className="report-status-label">
                {passed ? " EXAM PASSED" : " NEEDS IMPROVEMENT"}
              </span>
              <h1 className="report-score-number">{scorePct}%</h1>
              <p className="report-criteria-sub">
                Official Benchmark: <strong>70%</strong> | Result:{" "}
                <strong>{passed ? "PASS" : "FAIL"}</strong> ({correctCount} of {questions.length} Correct)
              </p>
            </div>

            <div className="report-stats-grid">
              <div className="report-stat-card">
                <span>Correct Answers</span>
                <strong>
                  {correctCount} / {questions.length}
                </strong>
                <small className="stat-sub">{scorePct}% accuracy</small>
              </div>
              <div className="report-stat-card">
                <span>Questions Answered</span>
                <strong>
                  {answeredCount} / {questions.length}
                </strong>
                <small className="stat-sub">{unansweredCount} skipped</small>
              </div>
              <div className="report-stat-card">
                <span>Time Utilized</span>
                <strong>{formatTime(Math.max(0, initialSeconds - secondsRemaining))}</strong>
                <small className="stat-sub">of {formatTime(initialSeconds)} total</small>
              </div>
              <div className="report-stat-card">
                <span>Flagged Questions</span>
                <strong>{flaggedQuestions.size}</strong>
                <small className="stat-sub">marked for review</small>
              </div>
            </div>

            
            <div className="report-breakdown-section">
              <div className="report-review-header">
                <h3>Detailed Question & Answer Review</h3>
                <div className="report-filter-bar">
                  <button
                    className={`report-pill-btn ${reportFilter === "all" ? "active" : ""}`}
                    onClick={() => setReportFilter("all")}
                  >
                    All ({questions.length})
                  </button>
                  <button
                    className={`report-pill-btn btn-incorrect ${reportFilter === "incorrect" ? "active" : ""}`}
                    onClick={() => setReportFilter("incorrect")}
                  >
                    Incorrect ({questions.length - correctCount})
                  </button>
                  <button
                    className={`report-pill-btn btn-correct ${reportFilter === "correct" ? "active" : ""}`}
                    onClick={() => setReportFilter("correct")}
                  >
                    Correct ({correctCount})
                  </button>
                  {flaggedQuestions.size > 0 && (
                    <button
                      className={`report-pill-btn ${reportFilter === "flagged" ? "active" : ""}`}
                      onClick={() => setReportFilter("flagged")}
                    >
                       Flagged ({flaggedQuestions.size})
                    </button>
                  )}
                </div>
              </div>

              <div className="review-questions-list">
                {filteredReviewQuestions.map(({ q, idx }) => {
                  const sel = selectedAnswers[idx];
                  const correctOpt = q.answers.find((a) => a.correct);
                  const isCorrect = sel === correctOpt?.id;

                  return (
                    <div
                      key={q.id || idx}
                      className={`review-q-card ${isCorrect ? "q-correct" : "q-wrong"}`}
                    >
                      <div className="review-q-header">
                        <span className="review-q-badge">
                          {isCorrect ? " Correct" : " Incorrect"}
                        </span>
                        <strong>Question {idx + 1}</strong>
                        {q.domain && (
                          <span className="review-domain-pill">{q.domain}</span>
                        )}
                        {flaggedQuestions.has(idx) && (
                          <span className="review-flag-pill"> Flagged</span>
                        )}
                      </div>

                      <p className="review-q-text">{q.question}</p>

                      <div className="review-answers-grid">
                        <div className="review-ans-col">
                          <small>Your Choice:</small>
                          <p className={isCorrect ? "text-success" : "text-danger"}>
                            {sel
                              ? `${sel}. ${q.answers.find((a) => a.id === sel)?.text}`
                              : "No answer selected"}
                          </p>
                        </div>
                        <div className="review-ans-col">
                          <small>Correct Answer:</small>
                          <p className="text-success">
                            {correctOpt?.id}. {correctOpt?.text}
                          </p>
                        </div>
                      </div>

                      {q.explanation && (
                        <div className="review-explanation-text">
                          <strong> Rationale:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            
            <div className="report-footer-actions">
              <button
                className="secondary-action-btn"
                onClick={() => {
                  setSelectedAnswers({});
                  setFlaggedQuestions(new Set());
                  setSecondsRemaining(initialSeconds);
                  setCurrentIndex(0);
                  setIsFinished(false);
                }}
              >
                 Retake Full Exam
              </button>
              <button className="primary-action-btn" onClick={onClose}>
                Return to Course Hub
              </button>
            </div>
          </div>
        )}

        
        {showConfirmFinish && (
          <div className="sub-modal-backdrop" onClick={() => setShowConfirmFinish(false)}>
            <div className="confirm-finish-card" onClick={(e) => e.stopPropagation()}>
              <div className="confirm-icon"></div>
              <h3>Ready to Submit & Grade?</h3>
              <p>
                You have completed <strong>{answeredCount}</strong> of{" "}
                <strong>{questions.length}</strong> questions.
              </p>

              {unansweredCount > 0 && (
                <div className="confirm-warning-box">
                   <strong>Notice:</strong> You still have{" "}
                  <strong>{unansweredCount} unanswered questions</strong> that will be marked
                  incorrect if submitted now.
                </div>
              )}

              {flaggedQuestions.size > 0 && (
                <div className="confirm-info-box">
                   You have <strong>{flaggedQuestions.size} flagged questions</strong> marked for
                  review.
                </div>
              )}

              <div className="confirm-actions">
                <button
                  className="secondary-action-btn"
                  onClick={() => setShowConfirmFinish(false)}
                >
                  ← Return to Exam
                </button>
                <button className="primary-action-btn" onClick={handleSubmitExam}>
                  Yes, Submit & Grade Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MockExamModal;
