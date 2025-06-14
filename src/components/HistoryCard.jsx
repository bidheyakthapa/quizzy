const HistoryCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Quiz Title</h1>
        <p className="text-gray-600 mb-4">
          A short summary of what the quiz was about.
        </p>

        <div className="grid grid-cols-2 text-sm text-gray-500 gap-2">
          <p>
            <span className="font-semibold text-gray-700">Score:</span> 4/5
          </p>
          <p>
            <span className="font-semibold text-gray-700">Date:</span> Jun 12,
            2025
          </p>
        </div>
      </div>

      <div className="mt-6 text-right">
        <button className="bg-green-500 w-full hover:bg-green-600 text-white py-2 px-8 rounded font-semibold text-sm shadow cursor-pointer">
          Retake
        </button>
      </div>
    </div>
  );
};

export default HistoryCard;
