export const UserRank = ({ userRank }) => {
  return (
    <div className="flex justify-between items-center mb-10 px-4 py-3 bg-gray-100 rounded-lg">
      <div className="text-sm font-semibold bg-primary-text text-white rounded-xl py-2 px-3">
        Your Rank
      </div>
      <div className="text-sm font-semibold text-black">
        {userRank?.rank}. {userRank?.name}
      </div>
      <div className="text-sm font-extrabold text-primary-text">
        {userRank?.points}
      </div>
    </div>
  );
};
