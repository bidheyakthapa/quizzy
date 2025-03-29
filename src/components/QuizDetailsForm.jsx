import Toast from "./Toast";
import { useState } from "react";

function QuizDetailsForm() {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    numQuestion: "",
    type: "",
    timeLimit: "",
  });
  const [isTimed, setIsTimed] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleTimedChange = () => {
    setIsTimed(!isTimed);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, desc, numQuestion, type, timeLimit } = formData;

    if (!title || !desc || !numQuestion || !type) {
      setToastMessage({
        status: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    if (isNaN(numQuestion) || numQuestion <= 0) {
      setToastMessage({
        status: "error",
        message: "Please enter a valid number of questions.",
      });
      return;
    }

    if (isTimed && (isNaN(timeLimit) || timeLimit <= 0)) {
      setToastMessage({
        status: "error",
        message: "Please enter a valid time limit.",
      });
      return;
    }

    const submissionData = {
      title: formData.title,
      description: formData.desc,
      numQuestions: Number(formData.numQuestion),
      type: formData.type,
      ...(isTimed && { timeLimit: Number(formData.timeLimit) }),
    };

    console.log("Valid submission data:", submissionData);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 flex justify-center">
      <form className="bg-white flex flex-col p-6 sm:p-8 w-full md:w-3/4 md:min-w-[650px] lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter your title here..."
            className="w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="desc" className="block font-medium mb-2">
            Description
          </label>
          <textarea
            name="desc"
            id="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Enter your description here..."
            rows="2"
            className="w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {/* Number of Questions */}
          <div className="flex flex-col items-start sm:items-center">
            <label
              htmlFor="nq"
              className="block font-medium mb-2 text-left sm:text-center whitespace-nowrap text-sm sm:text-base"
            >
              Number of Questions
            </label>
            <input
              type="number"
              id="nq"
              name="numQuestion"
              min="1"
              value={formData.numQuestion}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
            />
          </div>

          {/* Quiz Type */}
          <div className="flex flex-col items-start sm:items-center">
            <label
              htmlFor="type"
              className="block font-medium mb-2 text-left sm:text-center whitespace-nowrap text-sm sm:text-base"
            >
              Type
            </label>
            <select
              name="type"
              id="type"
              defaultValue=" "
              value={formData.type}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
            >
              <option value="" hidden></option>
              <option value="MCQ">MCQ</option>
              <option value="YN">Yes/No</option>
              <option value="TF">True/False</option>
            </select>
          </div>

          {/* Time Limit */}
          <div className="flex flex-col items-start sm:items-center">
            <label className="block font-medium mb-2 text-left sm:text-center flex items-center gap-2 whitespace-nowrap text-sm sm:text-base">
              <input
                type="checkbox"
                checked={isTimed}
                onChange={handleTimedChange}
                className="h-4 w-4"
              />
              Time Limit (minutes)
            </label>
            <input
              type="number"
              disabled={!isTimed}
              name="timeLimit"
              min="1"
              value={formData.timeLimit}
              onChange={handleChange}
              className={`w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center ${
                !isTimed ? "opacity-50 cursor-not-allowed" : ""
              }`}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium py-2 px-6 cursor-pointer rounded-sm shadow hover:shadow-md transition-all duration-200 self-end"
        >
          Next
        </button>
      </form>

      {toastMessage && (
        <Toast
          status={toastMessage.status}
          message={toastMessage.message}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}

export default QuizDetailsForm;
