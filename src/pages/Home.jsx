import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      {/* Decorative classroom elements */}
      <div className="decor decor-book">📚</div>
      <div className="decor decor-pencil">✏️</div>
      <div className="decor decor-star star-one">⭐</div>
      <div className="decor decor-star star-two">✨</div>
      <div className="decor decor-flower">🌸</div>

      {/* Main content */}
      <section className="home-content">
        <div className="teacher-badge">
          👩‍🏫
        </div>

        <p className="welcome-text">
          WELCOME TO THE CLASSROOM
        </p>

        <h1>
          MISS <span>IBBE</span>
        </h1>

        <h2>Teacher Simulator</h2>

        <p className="tagline">
          Can you survive your first year as a teacher? 🎮
        </p>

        <button
          className="start-button"
          onClick={() => navigate("/first-day")}
        >
          START TEACHER LIFE
          <span>→</span>
        </button>

        <p className="version">
          Teacher Simulator • 2026
        </p>
      </section>
    </main>
  );
}

export default Home;