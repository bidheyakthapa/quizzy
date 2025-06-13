import { useEffect, useState } from "react";
import quiz from "../components/question.json";
import { useNavigate } from "react-router-dom";
import Summary from "../components/Summary";

const QuizPlayer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(
    quiz.timeLimit ? quiz.timeLimit : null
  );

  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft <= 0) {
      setIsTimeUp(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  const time = `${minutes} : ${seconds}`;

  const handleRetake = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(null);
    setTimeLeft(quiz.timeLimit ? quiz.timeLimit : null);
    setIsTimeUp(false);
  };

  const handleCheck = () => {
    const selected = quiz.questions[currentQuestion].options[selectedOption];
    const isAnswerCorrect = selected.isCorrect;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setIsAnswered(true);
  };

  const handleContinue = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((question) => question + 1);
      setIsAnswered(false);
      setIsCorrect(null);
      setSelectedOption(null);
    }
  };

  if (
    isTimeUp ||
    (currentQuestion == quiz.questions.length - 1 && isAnswered)
  ) {
    return (
      <Summary
        score={score}
        totalQuestions={quiz.questions.length}
        onRetake={handleRetake}
        isTimeUp={isTimeUp}
      />
    );
  }

  return (
    <div>
      <div className="px-4 sm:px-6 md:px-12 lg:px-[50px] py-4">
        <div className="flex flex-col sm:flex-row sm:items-center mt-4 mb-8 gap-4 sm:gap-6">
          <img
            src="../logo.svg"
            alt="Logo"
            onClick={() => navigate("/quiz")}
            className="h-10 w-auto hidden md:block cursor-pointer"
          />

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-1 gap-2 sm:gap-6">
            <h1 className="text-xl lg:text-3xl font-semibold sm:text-left md:text-center md:flex-1">
              {quiz.title}
            </h1>

            <div className="flex gap-4 items-center justify-between md:justify-start whitespace-nowrap">
              {timeLeft !== null ? (
                <p className="text-sm sm:text-base">{time}</p>
              ) : (
                <p className="text-2xl">∞</p>
              )}
              <p className="text-sm sm:text-base">
                {currentQuestion + 1}/{quiz.questions.length}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center my-0 mx-auto">
          <div className="w-full max-w-2xl text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold my-4 mb-10">
              {quiz.questions[currentQuestion].question}
            </h1>

            <p className="mb-4 text-lg font-thin text-gray-600">
              Select correct option
            </p>

            {quiz.questions[currentQuestion].options.map((opt, i) => (
              <label
                key={i}
                htmlFor={`opt-${i}`}
                className="flex items-center mb-4 border border-gray-300 bg-white p-3 rounded cursor-pointer shadow-inner text-xl"
              >
                <input
                  type="radio"
                  name="options"
                  id={`opt-${i}`}
                  className="mr-2"
                  checked={selectedOption === i}
                  onChange={() => setSelectedOption(i)}
                />
                <span>{opt.title}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${
          isCorrect === null
            ? "bg-white"
            : isCorrect
            ? "bg-green-400"
            : "bg-purple-600"
        } p-8 shadow-[0_-2px_4px_rgba(0,0,0,0.1)] flex  md:pr-16 fixed bottom-0 w-full items-center gap-2 text-xl`}
      >
        <div className="flex items-center gap-2 w-full">
          <h1
            className={`flex-1 font-bold text-xl md:text-3xl ${
              !isCorrect ? "text-white" : "text-black"
            } md:whitespace-nowrap`}
          >
            {isCorrect === null
              ? ""
              : isCorrect
              ? "Great Work"
              : "Oops! That's not correct."}
          </h1>

          <div className="hidden md:block">
            <p
              className={`${
                isCorrect === null
                  ? "text-black"
                  : isCorrect
                  ? "text-black"
                  : "text-white"
              }`}
            >
              Press enter to
            </p>
          </div>

          <button
            onClick={isAnswered ? handleContinue : handleCheck}
            className={`${
              isAnswered ? "w-fit" : "w-full"
            } py-3 md:w-auto px-6 text-white font-semibold rounded shadow ${
              isAnswered
                ? isCorrect
                  ? "bg-gray-800"
                  : "bg-green-400"
                : selectedOption === null
                ? "bg-gray-400 cursor-text"
                : "bg-green-400 cursor-pointer"
            }`}
          >
            {isAnswered ? "Continue" : "Check"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPlayer;
