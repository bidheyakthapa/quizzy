import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import CreateQuiz from "./pages/CreateQuiz";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-[50px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateQuiz />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
