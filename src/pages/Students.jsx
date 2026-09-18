import { useState } from "react";
import { useNavigate } from "react-router-dom";
import students from "../data/students";

function Students() {
  const navigate = useNavigate();

  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <main className="students-page">
      <section className="students-container">

        {/* Header */}
        <header className="students-header">
          <div>
            <span className="level-label">LEVEL 02</span>

            <h1>MEET THE STUDENTS</h1>

            <p>
              Your first class has officially started! 👩‍🏫
            </p>
          </div>

          <div className="student-count">
            <span>CLASS</span>
            <strong>30</strong>
          </div>
        </header>

        {/* Mission */}
        <div className="student-mission">
          <span>🎯 YOUR MISSION</span>

          <p>
            Get to know your students before the real chaos begins. 😂
          </p>
        </div>

        {/* Student cards */}
        <div className="students-grid">
          {students.map((student) => (
            <button
              key={student.id}
              className="student-card"
              onClick={() => setSelectedStudent(student)}
            >
              <div className="student-avatar">
                {student.emoji}
              </div>

              <h2>{student.name}</h2>

              <span>{student.personality}</span>

              <div className="meet-label">
                TAP TO MEET →
              </div>
            </button>
          ))}
        </div>

        {/* Continue */}
        <button
          className="continue-button"
          onClick={() => navigate("/lesson-plan")}
        >
          CONTINUE TO LESSON
          <span>→</span>
        </button>

        <p className="level-note">
          Level 02 • Student Simulator
        </p>

      </section>

      {/* Student popup */}
      {selectedStudent && (
        <div
          className="student-overlay"
          onClick={() => setSelectedStudent(null)}
        >
          <div
            className="student-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setSelectedStudent(null)}
            >
              ×
            </button>

            <div className="modal-avatar">
              {selectedStudent.emoji}
            </div>

            <span className="modal-tag">
              STUDENT #{selectedStudent.id}
            </span>

            <h2>
              Hi Miss! I'm {selectedStudent.name} 👋
            </h2>

            <p className="personality">
              {selectedStudent.personality}
            </p>

            <div className="excuse-box">
              <span>💬 TODAY'S MESSAGE</span>

              <p>
                "{selectedStudent.excuse}"
              </p>
            </div>

            <button
              className="got-it-button"
              onClick={() => setSelectedStudent(null)}
            >
              GOT IT 😌
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Students;