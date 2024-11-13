import DefaultAvator from "../../assets/default-ant.png";
import ProfileRing from "../../assets/Profile-ring.png";
import SettingsIcon from "../../assets/icons/setting-icon.svg";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ profileImage, name, phone }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full text-black py-4 relative">
      <div className="relative w-24 h-24">
        <img
          src={ProfileRing}
          alt="Background"
          className="w-full h-full rounded-full"
        />
        <img
          src={profileImage || DefaultAvator}
          alt="Profile"
          className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-sm font-semibold text-gray-500">{phone}</p>

      {/* Settings Icon */}
      <div
        onClick={() => navigate("/setting")}
        className="cursor-pointer absolute top-10 right-0"
      >
        <img src={SettingsIcon} alt="Settings" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default ProfileHeader;
