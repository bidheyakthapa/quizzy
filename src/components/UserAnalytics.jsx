const UserAnalytics = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-10 md:ml-8">Your Analytics</h1>
      <div className="flex flex-col sm:flex-row justify-evenly items-center space-x-8">
        <div className="flex flex-col text-center">
          <h2 className="text-4xl font-bold mb-1">13</h2>
          <p className="text-lg text-gray-700 font-semibold">Quiz Created</p>
        </div>
        <div className="flex flex-col text-center">
          <h2 className="text-4xl font-bold mb-1">10</h2>
          <p className="text-lg text-gray-700 font-semibold">Quiz Taken</p>
        </div>
        <div className="flex flex-col text-center">
          <h2 className="text-4xl font-bold mb-1">10</h2>
          <p className="text-lg text-gray-700 font-semibold">Perfect Score</p>
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics;
