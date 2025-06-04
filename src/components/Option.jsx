import PropTypes from "prop-types";

function Option({ value, onTextChange, isChecked, onSelect }) {
  return (
    <div className="flex bg-[#f7f7f7] p-2 justify-between rounded border border-[#c9c9c9] my-3 flex-col sm:flex-row gap-y-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Enter option"
        className="flex-1 border-none outline-none text-lg sm:mr-4 p-2"
      />

      <div
        onClick={onSelect}
        className="flex items-center gap-2 justify-end sm:ml-4 cursor-pointer select-none"
      >
        <span className={`${isChecked ? "text-black" : "text-gray-400"}`}>
          Correct Answer
        </span>
        <div
          className={`w-4 h-4 border-2 rounded-full transition-all ${
            isChecked ? "bg-black border-black" : "bg-white border-gray-400"
          }`}
        />
      </div>
    </div>
  );
}
Option.propTypes = {
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  onTextChange: PropTypes.func,
  onSelect: PropTypes.func,
};

export default Option;
