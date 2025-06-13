import PropTypes from "prop-types";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const Summary = ({ score, isTimeUp, totalQuestions, onRetake }) => {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="min-h-[calc(100vh-6rem)] flex justify-center items-center bg-gray-100">
        <div className="p-4 sm:py-8 mx-4 bg-white rounded-lg shadow-lg text-center max-w-lg w-full">
          {isTimeUp ? (
            <h1 className="text-3xl font-bold mb-4 text-red-600">
              Time Over!!!
            </h1>
          ) : (
            <h1 className="text-3xl font-bold mb-4 text-green-600">
              Quiz Completed!!!
            </h1>
          )}
          <p className="text-lg">
            You scored
            <span className="font-semibold text-blue-600 ml-2">
              {score} out of {totalQuestions}
            </span>
          </p>
          <p className="text-lg mb-6">
            {score === totalQuestions
              ? "Perfect!"
              : score > totalQuestions / 2
              ? "Good job!"
              : "Keep practicing!"}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/quiz")}
              className="py-3 px-6 bg-blue-500 rounded text-white font-semibold cursor-pointer hover:bg-blue-600 transition duration-300"
            >
              Take another quiz
            </button>
            <button
              onClick={onRetake}
              className="py-3 px-6 bg-green-500 rounded text-white font-semibold cursor-pointer hover:bg-green-600 transition duration-300"
            >
              Retake
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Summary.propTypes = {
  score: PropTypes.number.isRequired,
  isTimeUp: PropTypes.bool.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onRetake: PropTypes.func.isRequired,
};

export default Summary;
