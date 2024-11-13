export const RestLeaderboard = ({ rest }) => {
  return (
    <div className="space-y-4">
      {rest.map((user) => (
        <div key={user?.id} className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src={user?.image}
              alt={user?.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="text-sm font-semibold">{user?.id}.</div>
            <div className="text-sm font-semibold text-black">{user?.name}</div>
          </div>
          <div className="text-primary-text font-extrabold">{user?.points}</div>
        </div>
      ))}
    </div>
  );
};
