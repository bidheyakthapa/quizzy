import { FaArrowRightLong } from "react-icons/fa6";
import QuizCard from "./QuizCard";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const YourQuiz = ({ yourQuiz }) => {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    const quizToEdit = yourQuiz.find((quiz) => quiz.id === id);
    if (quizToEdit) {
      navigate(`/edit/${id}`);
    }
  };

  const handleStart = (id) => {
    navigate(`/quiz/${id}`);
  };
  return (
    <div>
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-2xl font-bold my-10 md:ml-8">Your Quiz</h1>
        <p className="text-gray-500 cursor-pointer flex items-center font-medium text-sm gap-2">
          View All <FaArrowRightLong />
        </p>
      </div>

      <div className="md:ml-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-16 mt-4">
        {yourQuiz &&
          yourQuiz.map((quiz) => (
            <QuizCard
              key={quiz.id}
              title={quiz.title}
              timeLimit={quiz.timeLimit}
              type={quiz.type}
              questionsCount={quiz.questions.length}
              desc={quiz.desc}
              handleEdit={() => handleEdit(quiz.id)}
              handleStart={() => handleStart(quiz.id)}
            />
          ))}
      </div>
    </div>
  );
};

YourQuiz.propTypes = {
  yourQuiz: PropTypes.array.isRequired,
};

export default YourQuiz;
