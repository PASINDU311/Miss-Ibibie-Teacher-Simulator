import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TeacherEnergy() {
  const navigate = useNavigate();

  const [energy, setEnergy] = useState(65);
  const [coffee, setCoffee] = useState(0);
  const [message, setMessage] = useState(
    "The school day is getting harder... 😭"
  );

  const drinkCoffee = () => {
    if (coffee >= 3) {
      setMessage("Miss has had enough coffee already. 😂☕");
      return;
    }

    setCoffee((previousCoffee) => previousCoffee + 1);

    setEnergy((previousEnergy) =>
      Math.min(previousEnergy + 15, 100)
    );

    setMessage("Teacher energy restored! ☕✨");
  };

  const handleStudentProblem = () => {
    setEnergy((previousEnergy) =>
      Math.max(previousEnergy - 10, 0)
    );

    setMessage("Another student needs help... 😭");
  };

  const receiveThanks = () => {
    setEnergy((previousEnergy) =>
      Math.min(previousEnergy + 20, 100)
    );

    setMessage("A student said 'Thank you Miss!' ❤️");
  };

  return (
    <main className="energy-page">
      <section className="energy-container">

        {/* Header */}
        <header className="energy-header">
          <span className="level-label">LEVEL 05</span>

          <h1>TEACHER ENERGY</h1>

          <p>
            How long can Miss survive the school day? 😂
          </p>
        </header>

        {/* Energy Card */}
        <div className="energy-main-card">

          <div className="energy-icon">
            🔋
          </div>

          <span className="energy-title">
            TEACHER ENERGY
          </span>

          <h2>{energy}%</h2>

          <div className="energy-track">
            <div
              className="energy-fill"
              style={{ width: `${energy}%` }}
            />
          </div>

          <p className="energy-status">
            {energy >= 80
              ? "Miss is unstoppable! 🔥"
              : energy >= 50
              ? "Still surviving... 😌"
              : energy >= 25
              ? "Coffee might help... ☕"
              : "EMERGENCY COFFEE REQUIRED! 🚨"}
          </p>

        </div>

        {/* Coffee */}
        <div className="coffee-card">

          <div className="coffee-top">
            <div>
              <span>☕ COFFEE COUNTER</span>
              <h2>{coffee} / 3</h2>
            </div>

            <div className="coffee-cups">
              {"☕".repeat(coffee)}
            </div>
          </div>

          <button
            className="coffee-button"
            onClick={drinkCoffee}
          >
            DRINK COFFEE ☕
          </button>

        </div>

        {/* Event */}
        <div className="energy-event">

          <span>📢 SCHOOL EVENT</span>

          <p>{message}</p>

        </div>

        {/* Actions */}
        <div className="energy-actions">

          <button
            className="energy-action problem"
            onClick={handleStudentProblem}
          >
            <span>🧑‍🎓</span>
            <strong>STUDENT PROBLEM</strong>
            <small>-10 ENERGY</small>
          </button>

          <button
            className="energy-action thanks"
            onClick={receiveThanks}
          >
            <span>❤️</span>
            <strong>THANK YOU MISS</strong>
            <small>+20 ENERGY</small>
          </button>

        </div>

        {/* Continue */}
        <button
          className="continue-button"
          onClick={() => navigate("/classroom-chaos")}
        >
          SURVIVE THE NEXT LEVEL
          <span>→</span>
        </button>

        <p className="level-note">
          Level 05 • Teacher Energy
        </p>

      </section>
    </main>
  );
}

export default TeacherEnergy;