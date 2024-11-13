import Crown from "../../assets/leaderboard/Crown.svg";

export const Top3Leaderboard = ({ top3 }) => {
  const reorderedTop3 = [top3[1], top3[0], top3[2]];
  console.log(top3);
  return (
    <div className="flex justify-around items-center mb-6">
      {reorderedTop3.map((user, index) => (
        <div
          key={user?.id}
          className={`text-center relative ${
            index === 1 ? "transform scale-110" : ""
          }`}
        >
          {user?.crown && (
            <div className="absolute -top-5 z-10 left-1/2 transform -translate-x-1/2">
              <img src={Crown} alt="crown" className="w-7 h-7" />
            </div>
          )}
          <div className="relative">
            <img
              src={user?.image}
              alt={user?.name}
              className={`${
                index === 1 ? "w-16 h-16" : "w-14 h-14"
              } rounded-full mx-auto`}
            />
            <div className="absolute bg-white w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-sm font-bold -bottom-3 left-1/2 transform -translate-x-1/2">
              {top3.findIndex((u) => u.id === user?.id) + 1}
            </div>
          </div>
          <div className="mt-4">
            <div className="font-semibold text-black text-sm truncate w-[5.3rem]">
              {user?.name}
            </div>
            <div className="text-primary-text font-extrabold text-sm">
              {user?.points}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
