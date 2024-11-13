

// Utility function to format points
const formatPoints = (points) => {
  if (points >= 1e6) {
    return (points / 1e6).toFixed(1) + "M"; // Format to millions
  } else if (points >= 1e3) {
    return (points / 1e3).toFixed(1) + "K"; // Format to thousands
  }
  return points.toString(); 
};

const Leaderboard = ({ rank, totalPoints }) => {
  return (
    <div className="relative w-full mt-5">
      <h2 className="font-bold text-lg mb-2">Overview</h2>
      <div className="relative h-32">
        <div className="absolute bg-primary-text text-white px-3 py-4 rounded-lg w-[180px] top-0 left-0 z-10">
          <div className="flex items-center space-x-2">
            <div className="bg-primary-bg text-primary-text font-bold rounded-md p-2 w-10 h-10 flex items-center justify-center text-lg">
              #{rank}
            </div>
            <div>
              <p className="text-xs font-bold">Leaderboard</p>
              <p className="text-[0.6rem]">Current Rank</p>
            </div>
          </div>
        </div>

        <div className="absolute bg-primary-bg text-primary-text p-4 py-4 rounded-lg min-w-[230px] top-16 right-0">
          <div className="flex gap-2 items-center">
            <p className="text-lg bg-primary-text text-primary-bg p-2 rounded-md font-bold whitespace-nowrap">
              {formatPoints(totalPoints)} MP
            </p>
            <p className="text-xs font-bold text-left text-black">
              Total Points (MP)
            </p>
          </div>
          <button className="absolute bg-primary-text text-white text-xs py-2 px-2 right-0 rounded-md">
            Redeem Points
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
