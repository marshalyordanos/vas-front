import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../api/api";
import ProfileHeader from "../components/profile/ProfileHeader";
import Leaderboard from "../components/profile/Leaderboard";
import Achievements from "../components/profile/Achievements";
import Achievement1 from "../assets/icons/Achievement-Icons/achievement-1.png";

const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [profileData, setProfileData] = useState({
    name: "",
    phone: "",
    rank: null,
    totalPoints: 0,
    achievements: [],
    profileImage: null,
  });

  console.log(user);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch rank and top users from API
        const response = await api.post(
          "/user/TopUsers",
          { userId: user._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { loggedInUserRank } = response.data;

        // Set profile data from Redux and API
        setProfileData({
          name: `User ${user.phoneNumber}`, // Customized name fon now
          phone: `+251 ${user.phoneNumber}`,
          rank: loggedInUserRank.rank,
          totalPoints: user.balance,
          achievements: user.achievement.map((ach) => ({
            imageUrl: ach.imageUrl || Achievement1, // Replace with real imageUrl
            name: ach.name,
          })),
          profileImage: null, // value not setted fornow
        });
      } catch (error) {
        console.error("Error fetching rank data:", error);
      }
    };

    fetchUserData();
  }, [user, token]);

  return (
    <div className="flex flex-col items-center text-black py-4 px-6">
      <ProfileHeader
        profileImage={profileData.profileImage}
        name={profileData.name}
        phone={profileData.phone}
      />
      <Leaderboard
        rank={profileData.rank}
        totalPoints={profileData.totalPoints}
      />
      <Achievements achievements={profileData.achievements} />
    </div>
  );
};

export default ProfilePage;
