import { useContext, useEffect, useState } from "react";
import QuizContext from "../context/QuizContext";
import Option from "./Option";
import Toast from "./Toast";

function QuizQuestionForm() {
  const { details, setCurrentStep, updateQuestion } = useContext(QuizContext);

  const [options, setOptions] = useState([
    { title: "", isCorrect: false },
    { title: "", isCorrect: false },
    { title: "", isCorrect: false },
  ]);

  const [questionNumber, setQuestionNumber] = useState(1);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [question, setQuestion] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    if (questionNumber === details.numQuestions) {
      setIsLastQuestion(true);
    } else {
      setIsLastQuestion(false);
    }
    handleLoadQuestions(questionNumber - 1);
  }, [questionNumber, details.numQuestions]);

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleTextChange = (index, text) => {
    const updated = [...options];
    updated[index].title = text;
    setOptions(updated);
  };

  const validateForm = () => {
    if (question.trim() === "") {
      setToastMessage({
        message: "Please enter a question.",
        status: "error",
      });
      return false;
    }
    if (options.some((opt) => opt.title.trim() === "")) {
      setToastMessage({
        message: "Please fill out all options.",
        status: "error",
      });
      return false;
    }
    if (!options.some((opt) => opt.isCorrect)) {
      setToastMessage({
        message: "Please select a correct answer.",
        status: "error",
      });
      return false;
    }
    setToastMessage(null);
    return true;
  };

  const handleCorrectChange = (index) => {
    const updated = options.map((opt, i) => ({
      ...opt,
      isCorrect: i === index ? !opt.isCorrect : false,
    }));
    setOptions(updated);
  };

  const handleAddOptions = () => {
    setOptions([...options, { title: "", isCorrect: false }]);
  };

  const handleLoadQuestions = (index) => {
    const q = details.questions[index];
    console.log({ q });
    if (q) {
      setQuestion(q.question || "");
      setOptions(
        q.options || [
          { title: "", isCorrect: false },
          { title: "", isCorrect: false },
          { title: "", isCorrect: false },
        ]
      );
    } else {
      setQuestion("");
      setOptions([
        { title: "", isCorrect: false },
        { title: "", isCorrect: false },
        { title: "", isCorrect: false },
      ]);
    }
  };

  const handlePrev = () => {
    if (questionNumber === 1) {
      setCurrentStep(1);
    } else {
      setQuestionNumber((prev) => prev - 1);

      updateQuestion(questionNumber - 1, {
        question: question,
        options: [...options],
      });
    }
  };

  const handleNext = () => {
    if (!validateForm()) {
      return;
    }

    if (questionNumber >= details.numQuestions) {
      return;
    }

    if (questionNumber < details.numQuestions) {
      updateQuestion(questionNumber - 1, {
        question: question,
        options: [...options],
      });
      setQuestionNumber((prev) => prev + 1);
      setIsLastQuestion(false);
    }
  };

  return (
    <div className="p-2 sm:p-4 md:p-6 flex justify-center">
      <div className="bg-white flex flex-col p-4 sm:p-6 md:p-8 w-full md:min-w-[650px] lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg">
        <h1 className="font-extrabold text-2xl sm:text-3xl">
          Question {questionNumber}
        </h1>
        <input
          type="text"
          onChange={handleChange}
          value={question}
          placeholder="Enter your question here..."
          className="p-2 sm:p-3 bg-[#F7F7F7] shadow-inner-sm border border-[#c9c9c9] w-full font-semibold text-lg sm:text-xl rounded my-2 sm:my-3"
        />

        <div className="max-h-64 overflow-y-auto space-y-3">
          {options.map((option, index) => (
            <Option
              key={index}
              id={index}
              value={option.title} // Changed from `text` to `title`
              isChecked={option.isCorrect}
              onTextChange={(text) => handleTextChange(index, text)}
              onSelect={() => handleCorrectChange(index)}
            />
          ))}
        </div>

        <button
          onClick={handleAddOptions}
          className="w-full text-center p-2 sm:p-3 bg-[var(--color-secondary)] text-white font-semibold text-base sm:text-lg cursor-pointer rounded my-2 sm:my-3"
        >
          Add Options +
        </button>
        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            className="text-center px-3 sm:px-5 py-1 sm:py-2 bg-[var(--color-secondary)] text-white font-semibold text-base sm:text-lg cursor-pointer rounded"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="text-center px-3 sm:px-5 py-1 sm:py-2 bg-[var(--color-primary)] text-white font-semibold text-base sm:text-lg cursor-pointer rounded"
          >
            {isLastQuestion ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      {toastMessage && (
        <Toast
          message={toastMessage.message}
          status={toastMessage.status}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}

export default QuizQuestionForm;
