import PropTypes from "prop-types";

const ConfirmQuizStart = ({ quiz, onClose, onStart }) => {
  const min = Math.floor(quiz.timeLimit / 60);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 backdrop-blur-sm backdrop-brightness-80 px-4">
      <div className="bg-white p-8 pt-2 rounded-lg shadow-lg max-w-xl w-full">
        <div className="flex justify-end">
          <p
            onClick={onClose}
            className="cursor-pointer text-red-600 font-semibold text-xl"
          >
            x
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl lg-text-4xl mb-2 font-semibold">
            {quiz.title}
          </h1>
          <p>{quiz.desc}</p>
          <p>
            No of Questions:{" "}
            <span className="font-semibold">{quiz.numQuestion}</span>
          </p>
          <p>
            Quiz Type: <span className="font-semibold">{quiz.type}</span>
          </p>
          <p>
            Time: <span className="font-semibold">{min} minutes</span>
          </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onStart}
            className="bg-green-400 text-white rounded py-2 px-4 font-semibold cursor-pointer"
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

ConfirmQuizStart.propTypes = {
  quiz: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
};

export default ConfirmQuizStart;
