import React from "react";
import { useNavigate } from "react-router-dom";

function TopNav({ title }) {
  const navigate = useNavigate();
  return (
    <div className="col-3 grid  grid-cols-4 pt-8 pb-4 px-[6px]  w-full">
      {/* the top nav */}
      <div className="col-span-1 items-center justify-center">
        <button onClick={() => navigate(-1)}>
          <svg
            width="24"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12L4 12M4 12L10 18M4 12L10 6"
              stroke="#141414"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="col-span-2 ">
        <div className="flex justify-center">
          <h1 className="text-[20px]   text-[#141414]  h-[24px] leading-6 font-sans font-bold ">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
