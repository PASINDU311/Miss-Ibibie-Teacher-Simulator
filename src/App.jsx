import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FirstDay from "./pages/FirstDay";
import Students from "./pages/Students";
import LessonPlan from "./pages/LessonPlan";
import MarkingPapers from "./pages/MarkingPapers";
import TeacherEnergy from "./pages/TeacherEnergy";
import ClassroomChaos from "./pages/ClassroomChaos";
import SecretLevel from "./pages/SecretLevel";
import FinalLevel from "./pages/FinalLevel";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/first-day"
          element={<FirstDay />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/lesson-plan"
          element={<LessonPlan />}
        />

        <Route
          path="/marking-papers"
          element={<MarkingPapers />}
        />

        <Route
          path="/teacher-energy"
          element={<TeacherEnergy />}
        />

        <Route
          path="/classroom-chaos"
          element={<ClassroomChaos />}
        />

        <Route
          path="/secret-level"
          element={<SecretLevel />}
        />

        <Route
          path="/final-level"
          element={<FinalLevel />}
        />
      </Routes>
    </div>
  );
}

export default App;