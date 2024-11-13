import React from "react";
import { useNavigate } from "react-router-dom";

function SettingMenu() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="grid grid-row gap-4">
        <button
          onClick={() => navigate("/edit-profile")}
          className="hover:bg-neutral-100 px-4 py-2 flex flex-row justify-between"
        >
          <div className="text-black  font-[16px]">Edit Profile</div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="24"
                rx="4"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#EDEDED"
                fill-opacity="0.4"
              />
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
        {/* <button
          onClick={() => navigate("/subscription")}
          className=" hover:bg-neutral-100 px-4 py-2 flex flex-row justify-between"
        >
          <div className="text-black font-[16px]">Subscription</div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="24"
                rx="4"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#EDEDED"
                fill-opacity="0.4"
              />
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
        <button
          onClick={() => navigate("/notification")}
          className="hover:bg-neutral-100 px-4 py-2 flex flex-row justify-between"
        >
          <div className="text-black font-[16px]">Account Settings</div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="24"
                rx="4"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#EDEDED"
                fill-opacity="0.4"
              />
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
        <button
          onClick={() => navigate("/security")}
          className="hover:bg-neutral-100 px-4 py-2 flex flex-row justify-between"
        >
          <div className="text-black font-[16px]">Security</div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="24"
                rx="4"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#EDEDED"
                fill-opacity="0.4"
              />
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button> */}
      </div>
    </div>
  );
}

export default SettingMenu;
