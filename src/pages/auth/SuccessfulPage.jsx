import React from "react";
import StartImage from "../../assets/auth/solar_star-shine-linear.png";
import { useNavigate } from "react-router-dom";

const SuccessfulPage = () => {
  const naviget = useNavigate();
  return (
    <div className="h-[100%] flex flex-col">
      <div className="text-black flex-1 flex flex-col justify-center items-center">
        <img src={StartImage} className="mb-10" alt="" />
        <p className="text-3xl font-bold">Successful</p>
        <p className="mx-5 text-center text-sm mt-3">
          Congratulations! Your account has been successfully verified. You can
          now log in and start your language learning journey!
        </p>
      </div>
      <div className="mb-20 flex justify-center">
        <button
          onClick={() => naviget("/home")}
          className="w-[220px] mt-10 bg-[#0C4651] py-1 text-white rounded-lg"
        >
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default SuccessfulPage;
