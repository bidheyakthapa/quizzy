import { useState } from "react";
import Card from "../components/Card";
import quizzes from "../components/questions.json";
import ConfirmQuizStart from "../components/ConfirmQuizStart";
import { useNavigate } from "react-router-dom";

const TakeQuiz = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const navigate = useNavigate();

  const handleClick = (quiz) => {
    setSelectedQuiz(quiz);
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
    setSelectedQuiz(null);
  };

  const handleStart = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-16 mt-8">
      {quizzes.map((quiz) => (
        <Card
          key={quiz.id}
          title={quiz.title}
          desc={quiz.desc}
          onClick={() => handleClick(quiz)}
        />
      ))}

      {isModalOpen && (
        <ConfirmQuizStart
          quiz={selectedQuiz}
          onClose={onClose}
          onStart={() => handleStart(selectedQuiz.id)}
        />
      )}
    </div>
  );
};

export default TakeQuiz;
