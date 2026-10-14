import { useState } from "react";
import { practiceData } from "../data/practiceData";
import "./PracticeModals.css";

function FlashcardsModal({ provider = "aws", onClose }) {
  const data = practiceData[provider] || practiceData.aws;
  const rawCards = data.flashcards || [];

  const [cards, setCards] = useState(rawCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState(new Set());

  const currentCard = cards[currentIndex] || cards[0];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(cards.length - 1);
    }
  };

  const handleToggleMastery = (cardId) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(cardId)) next.delete(cardId);
      else next.add(cardId);
      return next;
    });
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
  };

  const masteredCount = masteredIds.size;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-flashcards" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-eyebrow"> FLASHCARD REVISION DECK</span>
            <h2>{data.name}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            
          </button>
        </div>

        <div className="modal-body">
          <div className="flashcards-top-bar">
            <div className="fc-progress-info">
              <span>
                Card {currentIndex + 1} of {cards.length}
              </span>
              <span className="fc-mastered-count">
                ⭐ {masteredCount} Mastered
              </span>
            </div>

            <button className="fc-shuffle-btn" onClick={handleShuffle}>
               Shuffle Deck
            </button>
          </div>

          {currentCard && (
            <div
              className={`flashcard-3d-scene ${isFlipped ? "flipped" : ""}`}
              onClick={handleFlip}
            >
              <div className="flashcard-card-inner">
                
                <div className="flashcard-face flashcard-front">
                  <div className="fc-category-badge">{currentCard.category}</div>
                  <div className="fc-main-text">{currentCard.front}</div>
                  <div className="fc-hint-text">Click anywhere to flip & reveal definition ↷</div>
                </div>

                
                <div className="flashcard-face flashcard-back">
                  <div className="fc-category-badge badge-back">ANSWER & DEFINITION</div>
                  <div className="fc-main-text fc-back-text">{currentCard.back}</div>
                  <div className="fc-hint-text">Click anywhere to flip back ↶</div>
                </div>
              </div>
            </div>
          )}

          <div className="flashcard-controls">
            <button className="fc-nav-btn" onClick={handlePrev} title="Previous card">
              ← Previous
            </button>

            {currentCard && (
              <button
                className={`fc-mastery-btn ${masteredIds.has(currentCard.id) ? "is-mastered" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleMastery(currentCard.id);
                }}
              >
                {masteredIds.has(currentCard.id) ? " Marked as Mastered" : " Mark as Mastered"}
              </button>
            )}

            <button className="fc-nav-btn primary" onClick={handleNext} title="Next card">
              Next Card →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashcardsModal;
