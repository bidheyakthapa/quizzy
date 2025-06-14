import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

const QuizCard = ({
  title,
  desc,
  type,
  questionsCount,
  timeLimit,
  handleEdit,
  handleStart,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-600 mb-4">{desc}</p>

        <div className="grid grid-cols-3 text-sm text-gray-500 gap-2">
          <p>
            <span className="font-semibold text-gray-700">Type:</span>
            {type}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Questions:</span>
            {questionsCount}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Time:</span>
            {timeLimit ? `${timeLimit} min` : "Untimed"}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          title="Edit Quiz"
          onClick={handleEdit}
          className="text-yellow-500 hover:text-yellow-600 text-xl transition cursor-pointer"
        >
          <FaEdit />
        </button>

        <button
          onClick={handleStart}
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded font-semibold text-sm shadow cursor-pointer"
        >
          Start Quiz
        </button>

        <button
          title="Delete Quiz"
          className="text-red-500 hover:text-red-600 text-xl transition cursor-pointer"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

QuizCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  questionsCount: PropTypes.number.isRequired,
  timeLimit: PropTypes.number,
  handleEdit: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
};

export default QuizCard;
