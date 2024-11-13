const Achievements = ({ achievements }) => {
  return (
    <div className="mt-10 w-full">
      <div className="flex justify-between">
        <h3 className="text-sm font-bold">
          Achievements ({achievements.length})
        </h3>
        <a href="#" className="text-xs font-bold">
          See all
        </a>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-2">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="text-center">
            <img
              src={achievement.imageUrl}
              alt={achievement.name}
              className="w-20 h-14 mx-auto rounded-full object-cover"
            />
            <p className="text-[0.65rem] font-semibold">{achievement.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
