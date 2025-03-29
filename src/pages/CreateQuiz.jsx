import QuizDetailsForm from "../components/QuizDetailsForm";

function CreateQuiz() {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 ml-16">
        Create Quiz
      </h1>
      <QuizDetailsForm />
    </div>
  );
}
export default CreateQuiz;
