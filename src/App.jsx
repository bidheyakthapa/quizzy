import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
// import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";
import QuizPlayer from "./pages/QuizPlayer";
import Dashboard from "./pages/Dashboard";
import quizz from "./components/question.json";
import CreateQuizWithProvider from "./pages/CreateQuiz";
import Auth from "./pages/Auth";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/quiz/:id" element={<QuizPlayer />} />
          <Route path="/login" element={<Auth isLogin={true} />} />
          <Route path="/signup" element={<Auth isLogin={false} />} />
          <Route
            path="*"
            element={
              <>
                <Nav />
                <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-[50px]">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                      path="/create"
                      element={<CreateQuizWithProvider isEdit={false} />}
                    />
                    <Route path="/quiz" element={<TakeQuiz />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route
                      path="/edit/:id"
                      element={
                        <CreateQuizWithProvider
                          isEdit={true}
                          quizDetails={quizz}
                        />
                      }
                    />
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
