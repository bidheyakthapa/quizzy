import PropTypes from "prop-types";

const Card = ({ title, desc, onClick }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center flex flex-col h-full">
      <div className="flex-grow">
        <h1 className="text-2xl font-bold pb-2">{title}</h1>
        <p className="pb-4 text-gray-500">{desc}</p>
      </div>
      <button
        onClick={onClick}
        className="bg-green-400 py-2 px-4 rounded shadow text-white font-semibold cursor-pointer mt-auto"
      >
        Start Quiz
      </button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Card;
