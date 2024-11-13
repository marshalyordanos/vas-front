import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

function SettingFooter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <footer>
      <div className=" text-white p-4 text-center  flex flex-col justify-center gap-y-[10px]">
        <div className="  flex justify-center items-center">
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
            className="cursor-pointer bg-[#E4465A] text-[#FFFFFF]  w-[234px] h-40px rounded-[10px] items-center justify-center flex flex-row gap-[10px] px-[60px] py-[8px] text-white"
          >
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 12C20.5 14.1217 19.6571 16.1566 18.1569 17.6569C16.6566 19.1571 14.6217 20 12.5 20C10.3783 20 8.34344 19.1571 6.84315 17.6569C5.34285 16.1566 4.5 14.1217 4.5 12"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12.5 14V4M12.5 4L9.5 7M12.5 4L15.5 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <h1 className=" font-bold leading-4">Logout</h1>
            </div>
          </button>
        </div>
        <div className="text-[#141414] leading-3 text-[12px] font-medium">
          Version 0.0
        </div>
      </div>
    </footer>
  );
}

export default SettingFooter;
