import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { markingPapers } from "../data/gameData";

function MarkingPapers() {
  const navigate = useNavigate();

  const [currentPaper, setCurrentPaper] = useState(0);
  const [decision, setDecision] = useState(null);
  const [score, setScore] = useState(0);

  const paper = markingPapers[currentPaper];

  const handleDecision = (type) => {
    if (decision !== null) return;

    setDecision(type);

    if (type === "partial") {
      setScore((previousScore) => previousScore + 5);
    }

    if (type === "correct") {
      setScore((previousScore) => previousScore + 10);
    }
  };

  const handleNext = () => {
    if (currentPaper < markingPapers.length - 1) {
      setCurrentPaper((previousPaper) => previousPaper + 1);
      setDecision(null);
    } else {
      navigate("/teacher-energy");
    }
  };

  return (
    <main className="marking-page">
      <section className="marking-container">

        {/* Header */}
        <header className="marking-header">
          <div>
            <span className="level-label">LEVEL 04</span>

            <h1>MARKING PAPERS</h1>

            <p>
              Let's see what your students wrote... 😂
            </p>
          </div>

          <div className="marks-display">
            <span>XP</span>
            <strong>{score}</strong>
          </div>
        </header>

        {/* Progress */}
        <div className="paper-progress">
          <div>
            PAPER {currentPaper + 1} / {markingPapers.length}
          </div>

          <div>
            ⭐ {score} XP
          </div>
        </div>

        {/* Paper */}
        <div className="paper-card">

          <div className="paper-top">
            <div className="student-paper-avatar">
              {paper.emoji}
            </div>

            <div className="student-paper-info">
              <span>STUDENT</span>
              <h2>{paper.student}</h2>
            </div>
          </div>

          {/* Question */}
          <div className="question-box">
            <span>QUESTION</span>

            <p>{paper.question}</p>
          </div>

          {/* Answer */}
          <div className="student-answer-box">
            <span>STUDENT'S ANSWER</span>

            <p>
              "{paper.answer}"
            </p>
          </div>

          {/* Correct answer */}
          {decision !== null && (
            <div className="correct-answer-box">
              <span>TEACHER'S NOTE</span>

              <p>
                Correct answer: <strong>{paper.correctAnswer}</strong>
              </p>

              <small>{paper.comment}</small>
            </div>
          )}

          {/* Decision buttons */}
          {decision === null ? (
            <div className="marking-actions">

              <button
                className="mark-button wrong-mark"
                onClick={() => handleDecision("wrong")}
              >
                <span>❌</span>
                <strong>WRONG</strong>
                <small>0 XP</small>
              </button>

              <button
                className="mark-button partial-mark"
                onClick={() => handleDecision("partial")}
              >
                <span>🤔</span>
                <strong>PARTIAL</strong>
                <small>+5 XP</small>
              </button>

              <button
                className="mark-button correct-mark"
                onClick={() => handleDecision("correct")}
              >
                <span>⭐</span>
                <strong>CORRECT</strong>
                <small>+10 XP</small>
              </button>

            </div>
          ) : (
            <button
              className="next-paper-button"
              onClick={handleNext}
            >
              {currentPaper === markingPapers.length - 1
                ? "FINISH MARKING →"
                : "NEXT PAPER →"}
            </button>
          )}

        </div>

        <p className="level-note">
          Level 04 • Marking Papers
        </p>

      </section>
    </main>
  );
}

export default MarkingPapers;