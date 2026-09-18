import { useState } from "react";
import { useNavigate } from "react-router-dom";
import lessonQuestions from "../data/questions";

import {
  playSuccessSound,
  playWrongSound,
} from "../utils/sound";

function LessonPlan() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = lessonQuestions[currentQuestion];

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (index === question.correctAnswer) {
      setScore((previousScore) => previousScore + 10);
      playSuccessSound();
    } else {
      playWrongSound();
    }

    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < lessonQuestions.length - 1) {
      setCurrentQuestion((previousQuestion) => previousQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      navigate("/marking-papers");
    }
  };

  return (
    <main className="lesson-page">
      <section className="lesson-container">

        {/* Header */}
        <header className="lesson-header">
          <div>
            <span className="level-label">
              LEVEL 03
            </span>

            <h1>LESSON PLAN</h1>

            <p>
              Let's see what kind of teacher you are! 👩‍🏫
            </p>
          </div>

          <div className="xp-display">
            <span>XP</span>

            <strong>{score}</strong>
          </div>
        </header>

        {/* Progress */}
        <div className="lesson-progress">
          <div className="progress-top">

            <span>
              QUESTION {currentQuestion + 1} /{" "}
              {lessonQuestions.length}
            </span>

            <span>
              ⭐ {score} XP
            </span>

          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    lessonQuestions.length) *
                  100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="lesson-card">

          <div className="subject-icon">
            {question.emoji}
          </div>

          <span className="subject-name">
            {question.subject}
          </span>

          <h2>
            {question.question}
          </h2>

          {/* Answers */}
          <div className="answer-list">

            {question.options.map((option, index) => {

              let answerClass = "";

              if (selectedAnswer !== null) {

                if (
                  index === question.correctAnswer
                ) {
                  answerClass = "correct";
                } else if (
                  index === selectedAnswer
                ) {
                  answerClass = "wrong";
                }

              }

              return (
                <button
                  key={option}
                  className={`answer-button ${answerClass}`}
                  onClick={() =>
                    handleAnswer(index)
                  }
                >

                  <span className="answer-number">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span>
                    {option}
                  </span>

                </button>
              );
            })}

          </div>

          {/* Result */}
          {showResult && (
            <div
              className={
                selectedAnswer ===
                question.correctAnswer
                  ? "answer-result success"
                  : "answer-result failure"
              }
            >

              {selectedAnswer ===
              question.correctAnswer ? (
                <>
                  <strong>
                    ✨ Excellent choice!
                  </strong>

                  <p>
                    {question.successMessage}
                  </p>
                </>
              ) : (
                <>
                  <strong>
                    😅 Not quite, Miss!
                  </strong>

                  <p>
                    Don't worry. Even the best
                    teachers learn from every class.
                  </p>
                </>
              )}

            </div>
          )}

          {/* Next Button */}
          {showResult && (
            <button
              className="next-question-button"
              onClick={handleNext}
            >
              {currentQuestion ===
              lessonQuestions.length - 1
                ? "FINISH LESSON →"
                : "NEXT QUESTION →"}
            </button>
          )}

        </div>

        {/* Level Note */}
        <p className="level-note">
          Level 03 • Lesson Plan
        </p>

      </section>
    </main>
  );
}

export default LessonPlan;