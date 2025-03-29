import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-[calc(100dvh-5rem)] flex flex-col gap-6 items-center justify-center px-4 sm:px-6 md:px-8 sm:pb-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight">
        Take and Create Quiz
      </h1>

      <p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-sm md:max-w-md text-center leading-relaxed">
        Quizzes are good for fast learning and help quickly absorb information.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto sm:gap-8">
        <Link
          to="/quiz"
          className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] py-3 px-6 rounded-md text-white font-semibold cursor-pointer transition-colors shadow-md hover:shadow-lg w-full sm:w-36 text-sm sm:text-base text-center"
        >
          Take Quiz
        </Link>
        <Link
          to="/create"
          className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] py-3 px-6 rounded-md text-white font-semibold cursor-pointer transition-colors shadow-md hover:shadow-lg w-full sm:w-36 text-sm sm:text-base text-center"
        >
          Create Quiz
        </Link>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center w-full px-4 sm:px-8 pointer-events-none z-0">
        <img
          src="./assets/hero-left.svg"
          alt="Hero Image Left"
          className="h-[120px] sm:h-[180px] md:h-[200px] w-auto object-contain"
        />
        <img
          src="./assets/hero-right.svg"
          alt="Hero Image Right"
          className="h-[95px] sm:h-[155px] md:h-[175px] w-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Home;
