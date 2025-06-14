import { useContext, useEffect, useState } from "react";
import QuizDetailsForm from "../components/QuizDetailsForm";
import QuizQuestionForm from "../components/QuizQuestionForm";
import QuizContext, { QuizProvider } from "../context/QuizContext";
import PropTypes from "prop-types";

function CreateQuiz({ isEdit, quizDetails }) {
  const { updateDetails, currentStep } = useContext(QuizContext);
  const [isLoading, setIsLoading] = useState(isEdit);

  useEffect(() => {
    const editMode = isEdit;
    const quiz = quizDetails;
    console.log("Updating details:", quiz);

    if (editMode && quiz) {
      updateDetails({
        title: quiz.title,
        description: quiz.desc,
        numQuestions: quiz.questions.length,
        type: quiz.type,
        timeLimit: quiz.timeLimit,
        questions: quiz.questions,
      });
      setIsLoading(false);
    }
  }, [isEdit, quizDetails]);
  if (isLoading) {
    return <div>Loading quiz data...</div>;
  }

  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 ml-16">
        {isEdit ? "Edit Quiz" : "Create Quiz"}
      </h1>
      {currentStep === 1 && <QuizDetailsForm />}
      {currentStep === 2 && <QuizQuestionForm />}
    </div>
  );
}
CreateQuiz.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  quizDetails: PropTypes.object,
};
export default function CreateQuizWithProvider({ isEdit, quizDetails }) {
  return (
    <QuizProvider key={isEdit ? "edit" : "create"}>
      <CreateQuiz isEdit={isEdit} quizDetails={quizDetails} />
    </QuizProvider>
  );
}
CreateQuizWithProvider.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  quizDetails: PropTypes.object,
};
