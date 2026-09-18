import { useNavigate } from "react-router-dom";

function SecretLevel() {
  const navigate = useNavigate();

  return (
    <main className="secret-page">
      <section className="secret-container">

        {/* Header */}
        <header className="secret-header">
          <span className="level-label">SECRET LEVEL 🔐</span>

          <h1>ONE SPECIAL STUDENT</h1>

          <p>
            Miss discovered something unexpected... 👀
          </p>
        </header>

        {/* Secret Card */}
        <div className="secret-card">

          <div className="secret-avatar">
            👨‍🎓
          </div>

          <span className="secret-tag">
            STUDENT PROFILE
          </span>

          <h2>PASINDU</h2>

          <p className="secret-role">
            The Special Student 😌
          </p>

          {/* Stats */}
          <div className="secret-stats">

            <div className="secret-stat">
              <span>📅</span>
              <small>ATTENDANCE</small>
              <strong>100%</strong>
            </div>

            <div className="secret-stat">
              <span>📚</span>
              <small>HOMEWORK</small>
              <strong>QUESTIONABLE 😂</strong>
            </div>

            <div className="secret-stat">
              <span>😇</span>
              <small>BEHAVIOUR</small>
              <strong>NEEDS IMPROVEMENT</strong>
            </div>

            <div className="secret-stat special">
              <span>❤️</span>
              <small>RESPECT FOR MISS</small>
              <strong>∞</strong>
            </div>

          </div>

          {/* Teacher Note */}
          <div className="teacher-note">

            <span>📝 TEACHER'S NOTE</span>

            <p>
              "This student may be a little troublesome...
              but he always supports Miss." ❤️
            </p>

          </div>

          {/* Special Status */}
          <div className="special-status">
            <span>⭐ SPECIAL STATUS</span>

            <strong>
              FAVOURITE STUDENT
            </strong>
          </div>

        </div>

        {/* Continue */}
        <button
          className="continue-button"
          onClick={() => navigate("/final-level")}
        >
          COMPLETE TEACHER JOURNEY
          <span>→</span>
        </button>

        <p className="level-note">
          Secret Level • Special Student
        </p>

      </section>
    </main>
  );
}

export default SecretLevel;