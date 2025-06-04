import PropTypes from "prop-types";
import { createContext, useState } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [details, setDetails] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const updateDetails = (newDetails) => {
    setDetails((prev) => ({
      ...prev,
      ...newDetails,
    }));
  };

  const updateQuestion = (index, questionData) => {
    setDetails((prev) => {
      const updatedQuestions = [...(prev.questions || [])];
      updatedQuestions[index] = questionData;

      return {
        ...prev,
        questions: updatedQuestions,
      };
    });
  };

  return (
    <QuizContext.Provider
      value={{ details, updateDetails, setCurrentStep, currentStep, updateQuestion }}
    >
      {children}
    </QuizContext.Provider>
  );
}

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuizContext;
