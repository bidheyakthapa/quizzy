import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";
import QuizPlayer from "./pages/QuizPlayer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/quiz/:id" element={<QuizPlayer />} />
          <Route
            path="*"
            element={
              <>
                <Nav />
                <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-[50px]">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateQuiz />} />
                    <Route path="/quiz" element={<TakeQuiz />} />
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
