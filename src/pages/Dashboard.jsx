import UserAnalytics from "../components/UserAnalytics";
import YourHistory from "../components/YourHistory";
import YourQuiz from "../components/YourQuiz";
import yourQuiz from "../components/questions.json";

const Dashboard = () => {
  return (
    <div className="my-16">
      <h1 className="text-4xl font-bold">Welcome User!!!</h1>
      <UserAnalytics />
      <YourQuiz yourQuiz={yourQuiz} />
      <YourHistory />
    </div>
  );
};

export default Dashboard;
