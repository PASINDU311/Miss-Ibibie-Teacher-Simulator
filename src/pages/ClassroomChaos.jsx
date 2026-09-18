import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const chaosEvents = [
  {
    id: 1,
    emoji: "🗣️",
    title: "STUDENTS TALKING",
    message: "Miss! They're talking again! 😭",
  },
  {
    id: 2,
    emoji: "😴",
    title: "SOMEONE IS SLEEPING",
    message: "Miss... Ravi has entered sleep mode. 😂",
  },
  {
    id: 3,
    emoji: "😂",
    title: "SOMEONE IS LAUGHING",
    message: "Miss! Nobody knows why they're laughing! 😂",
  },
  {
    id: 4,
    emoji: "📚",
    title: "HOMEWORK QUESTION",
    message: "Miss, I forgot how to do the homework... 😭",
  },
  {
    id: 5,
    emoji: "👀",
    title: "MISSING STUDENT",
    message: "Miss... where did Dinu go? 👀",
  },
];

function ClassroomChaos() {
  const navigate = useNavigate();

  const [remainingEvents, setRemainingEvents] =
    useState(chaosEvents);

  const [timeLeft, setTimeLeft] = useState(30);

  const [message, setMessage] = useState(
    "The classroom has completely lost control! 😂"
  );

  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    if (timeLeft <= 0) {
      setMessage(
        "Time's up! But a real teacher never gives up. 😎"
      );
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, finished]);

  const resolveChaos = (event) => {
    setRemainingEvents((previousEvents) =>
      previousEvents.filter(
        (item) => item.id !== event.id
      )
    );

    setMessage(`✅ ${event.message}`);

    if (remainingEvents.length === 1) {
      setFinished(true);
      setMessage(
        "🎉 CLASSROOM RESTORED! Miss saved the day!"
      );
    }
  };

  const restartLevel = () => {
    setRemainingEvents(chaosEvents);
    setTimeLeft(30);
    setMessage(
      "The classroom has completely lost control! 😂"
    );
    setFinished(false);
  };

  return (
    <main className="chaos-page">
      <section className="chaos-container">

        {/* Header */}
        <header className="chaos-header">
          <span className="level-label">LEVEL 06</span>

          <h1>CLASSROOM CHAOS</h1>

          <p>
            Everything was going fine... until now. 😂
          </p>
        </header>

        {/* Mission */}
        <div className="chaos-mission">
          <span>🚨 FINAL BOSS</span>

          <h2>RESTORE ORDER</h2>

          <p>
            Deal with every classroom problem before
            time runs out!
          </p>
        </div>

        {/* Timer */}
        <div className="chaos-timer">
          <span>⏱️ TIME LEFT</span>
          <strong>{timeLeft}s</strong>
        </div>

        {/* Status */}
        <div className="chaos-status">
          {message}
        </div>

        {/* Progress */}
        <div className="chaos-progress">
          <div className="progress-top">
            <span>CHAOS CONTROL</span>

            <span>
              {chaosEvents.length -
                remainingEvents.length}{" "}
              / {chaosEvents.length}
            </span>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${
                  ((chaosEvents.length -
                    remainingEvents.length) /
                    chaosEvents.length) *
                  100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Chaos cards */}
        {!finished && timeLeft > 0 && (
          <div className="chaos-grid">
            {remainingEvents.map((event) => (
              <button
                key={event.id}
                className="chaos-card"
                onClick={() => resolveChaos(event)}
              >
                <span className="chaos-emoji">
                  {event.emoji}
                </span>

                <strong>{event.title}</strong>

                <small>
                  TAP TO FIX →
                </small>
              </button>
            ))}
          </div>
        )}

        {/* Finished */}
        {finished && (
          <div className="chaos-success">
            <div className="success-icon">
              🎉
            </div>

            <h2>CLASSROOM SAVED!</h2>

            <p>
              Somehow, Miss managed to survive the
              chaos. 👩‍🏫✨
            </p>

            <button
              className="continue-button"
              onClick={() =>
                navigate("/secret-level")
              }
            >
              ENTER SECRET LEVEL
              <span>→</span>
            </button>
          </div>
        )}

        {/* Retry */}
        {!finished && timeLeft <= 0 && (
          <button
            className="retry-button"
            onClick={restartLevel}
          >
            TRY AGAIN 🔄
          </button>
        )}

        <p className="level-note">
          Level 06 • Classroom Chaos
        </p>

      </section>
    </main>
  );
}

export default ClassroomChaos;