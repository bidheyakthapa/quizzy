import { useContext } from "react";
import QuizDetailsForm from "../components/QuizDetailsForm";
import QuizQuestionForm from "../components/QuizQuestionForm";
import QuizContext, { QuizProvider } from "../context/QuizContext";

function CreateQuiz() {
  const { currentStep } = useContext(QuizContext);
  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 ml-16">
        Create Quiz
      </h1>
      {currentStep === 1 && <QuizDetailsForm />}
      {currentStep === 2 && <QuizQuestionForm />}
    </div>
  );
}
export default function CreateQuizWithProvider() {
  return (
    <QuizProvider>
      <CreateQuiz />
    </QuizProvider>
  );
}
