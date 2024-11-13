import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import languages from "../../contraint/languages";
import { MdStars } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const experiences = [
  { id: 0, name: "Beginner", level: 1 },
  { id: 1, name: "Intermediate", level: 2 },
  { id: 2, name: "Advanced", level: 3 },
  { id: 3, name: "Superior", level: 4 },
];

const SelectExperience = () => {
  const [selectedLan, setSelectedLan] = useState(null);
  const naviget = useNavigate();

  const handleCreateProfile = async () => {
    naviget("/home");
  };
  return (
    <div className="h-[100%] bg-[#fbfbfb] border">
      <div className="flex h-[100%] flex-col text-black ">
        <div className="flex-1">
          <div className="mx-5 flex  items-center mt-12">
            <div className=" cursor-pointer" onClick={() => naviget(-1)}>
              <FaArrowLeft color="black" size={20} />
            </div>{" "}
            <div className="flex flex-1  justify-center gap-1">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>

              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>
            {/* <button className=" border bg-white border-gray-300 shadow-lg py-1 px-3 rounded-lg font-bold">
              Next
            </button> */}
          </div>
          <div>
            {" "}
            <p className="text-2xl font-bold text-center mt-8">
              Select Experience
            </p>
            <p className="mx-5 text-center mt-2">
              Choose your proficiency level for the selected language
            </p>
            <div className="mt-7 mx-5">
              <ul>
                {experiences.map((exp) => (
                  <li
                    onClick={() => setSelectedLan(exp)}
                    className={`border flex items-center justify-between py-3 border-gray-300 rounded-lg my-3 px-3 hover:bg-[#0C4651] hover:text-white ${
                      selectedLan?.id == exp.id ? "bg-[#0C4651] text-white" : ""
                    }`}
                    key={exp.id}
                  >
                    <div className="flex gap-3 items-center">
                      <p>{exp.name}</p>
                    </div>
                    <div className="flex gap-[1px]">
                      {Array(exp.level)
                        .fill(1)
                        .map((_) => (
                          <MdStars
                            size={24}
                            color={`${
                              selectedLan?.id != exp.id ? "gray" : "#E2F20F"
                            }`}
                          />
                        ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-20 flex justify-center">
          <button
            onClick={handleCreateProfile}
            className="w-[220px] mt-10 bg-[#0C4651] py-1 text-white rounded-lg"
          >
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectExperience;
