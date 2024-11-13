import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import flags from "../../contraint/languages";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdStars } from "react-icons/md";
import api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/userSlice";
const lanNames = { EN: "English", ET: "Amharic", ES: "Spanish" };

const SelectLanguages = () => {
  const [selectedLanExperience, setSelectedLanExperience] = useState(null);
  const userData = useSelector((state) => state.user);
  console.log("userData", userData);
  const [index, setIndext] = useState(0);
  const [selectedLan, setSelectedLan] = useState(null);
  const [langs, setLangs] = useState([]);
  const naviget = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getLang();
  }, []);
  const getLang = async () => {
    try {
      const res = await api.get("/category");
      console.log("langs: ", res.data?.data);
      setLangs(res.data?.data);
    } catch (error) {}
  };

  const handleCreateProfile = async () => {
    try {
      const res = await api.patch("/user/update/" + userData?.user?._id, {
        category: {
          categoryId: selectedLan._id,
          startedDate: Date.now(),
          status: "started",
          experienceStatus: selectedLanExperience?.name,
        },
      });
      console.log("update user: ", res);
      dispatch(updateUser({ ...userData, user: res.data?.user }));
      naviget("/home");
    } catch (error) {}
  };
  return index == 0 ? (
    <div className="h-[100%] bg-[#fbfbfb] border">
      <div className="text-black ">
        <div className="mx-5 flex justify-between items-center mt-12">
          <div className=" cursor-pointer" onClick={() => naviget(-1)}>
            <FaArrowLeft color="black" size={20} />
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          <button
            onClick={() => {
              if (selectedLan) {
                setIndext(1);
              } else {
                alert("you have to select language");
              }
            }}
            className=" border bg-white border-gray-300 shadow-lg py-1 px-3 rounded-lg font-bold"
          >
            Next
          </button>
        </div>
        <div>
          {" "}
          <p className="text-2xl font-bold text-center mt-8">Select Language</p>
          <p className="mx-5 text-center mt-2">
            Choose the language you want to learn and start your journey to
            fluency!{" "}
          </p>
          <div className="flex pr-4 bg-[#EDEDED] mx-5 mt-8  rounded-md items-center ">
            <input
              placeholder="Language search"
              className="bg-transparent border px-4 py-2  outline-none flex-1"
            />
            <IoIosSearch size={24} />
          </div>
          <div className="mt-7 mx-5">
            <ul>
              {langs.map((lang) => (
                <button
                  disabled={userData?.user?.category?.some((x) => {
                    return x?.categoryId?._id == lang._id;
                  })}
                  onClick={() => {
                    if (selectedLan && lang._id == selectedLan._id) {
                      setSelectedLan(null);
                    } else {
                      setSelectedLan(lang);
                    }
                  }}
                  className={`border w-full flex items-center justify-between py-2 border-gray-300 rounded-lg my-3 px-3 hover:bg-[#0C4651] hover:text-white ${
                    selectedLan?._id == lang?._id ||
                    userData?.user?.category?.some((x) => {
                      return x?.categoryId?._id == lang._id;
                    })
                      ? "bg-[#0C4651] text-white"
                      : ""
                  }`}
                  key={lang._id}
                >
                  <div className="flex gap-3 items-center">
                    <p>{flags[lang.name]} </p>
                    <p>{lanNames[lang.name]}</p>
                  </div>
                  <div>
                    {(selectedLan?._id == lang?._id ||
                      userData?.user?.category?.some((x) => {
                        return x?.categoryId?._id == lang?._id;
                      })) && <FaRegCheckCircle size={24} color="#E2F20F" />}
                  </div>
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <SelectExperience
      setSelectedLanExperience={setSelectedLanExperience}
      selectedLanExperience={selectedLanExperience}
      setIndext={setIndext}
      handleCreateProfile={handleCreateProfile}
    />
  );
};

const experiences = [
  { id: 0, name: "Beginner", level: 1 },
  { id: 1, name: "Intermediate", level: 2 },
  { id: 2, name: "Advanced", level: 3 },
  { id: 3, name: "Superior", level: 4 },
];

const SelectExperience = ({
  setIndext,
  setSelectedLanExperience,
  selectedLanExperience,
  handleCreateProfile,
}) => {
  const naviget = useNavigate();

  return (
    <div className="h-[100%] bg-[#fbfbfb] border">
      <div className="flex h-[100%] flex-col text-black ">
        <div className="flex-1">
          <div className="mx-5 flex  items-center mt-12">
            <div className=" cursor-pointer" onClick={() => setIndext(0)}>
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
                    onClick={() => setSelectedLanExperience(exp)}
                    className={`border flex items-center justify-between py-3 border-gray-300 rounded-lg my-3 px-3 hover:bg-[#0C4651] hover:text-white ${
                      selectedLanExperience?.id == exp.id
                        ? "bg-[#0C4651] text-white"
                        : ""
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
                              selectedLanExperience?.id != exp.id
                                ? "gray"
                                : "#E2F20F"
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

export default SelectLanguages;
