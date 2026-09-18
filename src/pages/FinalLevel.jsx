import { useNavigate } from "react-router-dom";

function FinalLevel() {
  const navigate = useNavigate();

  return (
    <main className="final-page">
      <section className="final-container">

        {/* Celebration */}
        <div className="final-celebration">
          🎉
        </div>

        <span className="final-label">
          TEACHER JOURNEY COMPLETE
        </span>

        <h1>
          YOU SURVIVED
          <br />
          TEACHER LIFE! 👩‍🏫
        </h1>

        <p className="final-subtitle">
          Congratulations, Miss Ibibie! ✨
        </p>

        {/* Result Card */}
        <div className="final-card">

          <div className="final-trophy">
            🏆
          </div>

          <span className="rank-label">
            FINAL TEACHER RANK
          </span>

          <h2>
            AMAZING TEACHER
          </h2>

          {/* Stats */}
          <div className="final-stats">

            <div className="final-stat">
              <span>📚</span>
              <strong>06</strong>
              <small>LEVELS</small>
            </div>

            <div className="final-stat">
              <span>⭐</span>
              <strong>100%</strong>
              <small>EFFORT</small>
            </div>

            <div className="final-stat">
              <span>❤️</span>
              <strong>∞</strong>
              <small>DEDICATION</small>
            </div>

          </div>

          {/* Message */}
          <div className="final-message">

            <span>💌 A LITTLE MESSAGE</span>

            <p>
              Miss, your teacher journey is only
              beginning. Keep learning, keep smiling,
              and keep being the amazing teacher
              you're becoming. 👩‍🏫✨
            </p>

            <strong>
              I'm proud of you, Miss. ❤️
            </strong>

            <small>
              — Pasindu
            </small>

          </div>

        </div>

        {/* Buttons */}
        <button
          className="final-button"
          onClick={() => navigate("/")}
        >
          PLAY AGAIN
          <span>↻</span>
        </button>

        <p className="final-note">
          MISS IBIBIE • TEACHER SIMULATOR • 2026
        </p>

      </section>
    </main>
  );
}

export default FinalLevel;