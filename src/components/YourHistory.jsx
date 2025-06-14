import { FaArrowRightLong } from "react-icons/fa6";
import HistoryCard from "./HistoryCard";

const YourHistory = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-2xl font-bold my-10 md:ml-8">Your History</h1>
        <p className="text-gray-500 cursor-pointer flex items-center font-medium text-sm gap-2">
          View All <FaArrowRightLong />
        </p>
      </div>
      <div className="md:ml-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-16 mt-4">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </div>
  );
};

export default YourHistory;
