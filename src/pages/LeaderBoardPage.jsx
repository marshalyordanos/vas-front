import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../api/api";
import { UserRank } from "../components/leaderboard/UserRank";
import { Top3Leaderboard } from "../components/leaderboard/Top3Leaderboard";
import { RestLeaderboard } from "../components/leaderboard/RestLeaderboard";
import Lion from "../assets/leaderboard/Lion.png";
import Eagle from "../assets/leaderboard/Eagle.png";
import Parrot from "../assets/leaderboard/Parrot.png";

const Leaderboard = () => {
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const [userRank, setUserRank] = useState(null);
  const [top3, setTop3] = useState([]);
  const [rest, setRest] = useState([]);
  console.log(token);
  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await api.post(
          "/user/TopUsers",
          { userId: user._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { topUsers, loggedInUserRank } = response.data;
        console.log(topUsers, loggedInUserRank);
        // Map top 3 users
        const top3Users = topUsers.slice(0, 3).map((user, index) => ({
          id: user.user._id,
          name: `User ${user.user.phoneNumber}`, // Customizeed name
          points: `${user.user.balance} MP`,
          image: index === 0 ? Parrot : index === 1 ? Lion : Eagle,
          crown: index === 0, // Crown only for the first rank
        }));

        // Map remaining users
        const restUsers = topUsers.slice(3).map((user) => ({
          id: user.user._id,
          name: `User ${user.user.phoneNumber}`, // Customized name
          points: `${user.user.balance} MP`,
          image: Parrot, // Replace with a dynamic image if available
        }));

        setTop3(top3Users);
        setRest(restUsers);
        setUserRank({
          rank: loggedInUserRank.rank,
          name: `User ${loggedInUserRank.user.phoneNumber}`,
          points: `${loggedInUserRank.user.balance} MP`,
        });
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboardData();
  }, [user, token]);

  return (
    <div className="max-w-md mx-auto  bg-white text-primary-text p-6 rounded-lg">
      <h1 className="text-center text-xl font-bold py-5 text-black">
        LeaderBoard
      </h1>
      {userRank && <UserRank userRank={userRank} />}
      <Top3Leaderboard top3={top3} />
      <RestLeaderboard rest={rest} />
    </div>
  );
};

export default Leaderboard;
