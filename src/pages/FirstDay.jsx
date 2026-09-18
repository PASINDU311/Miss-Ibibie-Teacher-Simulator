import { useNavigate } from "react-router-dom";

function FirstDay() {
  const navigate = useNavigate();

  return (
    <main className="first-day">
      <section className="first-day-container">

        {/* Header */}
        <div className="first-day-header">
          <span className="day-label">DAY 01</span>

          <h1>FIRST CLASS</h1>

          <p>Welcome back, Miss 👩‍🏫</p>
        </div>

        {/* Stats */}
        <div className="stats-grid">

          <div className="stat-card">
            <span className="stat-label">👩‍🎓 STUDENTS</span>
            <strong>30</strong>
          </div>

          <div className="stat-card">
            <span className="stat-label energy">⚡ ENERGY</span>
            <strong>100%</strong>
          </div>

          <div className="stat-card">
            <span className="stat-label patience">💗 PATIENCE</span>
            <strong>100%</strong>
          </div>

          <div className="stat-card">
            <span className="stat-label coffee">☕ COFFEE</span>
            <strong>0</strong>
          </div>

        </div>

        {/* Mission */}
        <div className="mission-card">

          <span className="mission-label">
            📖 TODAY'S MISSION
          </span>

          <h2>Welcome, Miss!</h2>

          <p>
            Your first class starts in 5 minutes.
            Stay confident and show them who's the teacher! ✨
          </p>

        </div>

        {/* Classroom */}
        <div className="classroom-preview">
          <div className="board">
            <span>WELCOME</span>
            <strong>MISS IBIBIE 👩‍🏫</strong>
          </div>

          <div className="desks">
            <span>🧑‍🎓</span>
            <span>👩‍🎓</span>
            <span>🧑‍🎓</span>
            <span>👩‍🎓</span>
            <span>🧑‍🎓</span>
          </div>
        </div>

        {/* Button */}
        <button
          className="enter-class-button"
          onClick={() => navigate("/students")}
        >
          ENTER CLASSROOM
          <span>→</span>
        </button>

        <p className="level-note">
          Level 01 • First Day
        </p>

      </section>
    </main>
  );
}

export default FirstDay;