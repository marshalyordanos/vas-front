import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

import api from "../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { Progress, Steps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateUserExtra } from "../redux/userSlice";
const { Step } = Steps;

const LessonContent = () => {
  const [data, setData] = useState(null);
  const { categoryId, courseId, id } = useParams();
  const length = data?.questions?.length;
  const [current, setCurrent] = useState(0);
  const [ans, setAns] = useState("");
  const [modal, setModal] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const navigate = useNavigate();
  useEffect(() => {
    fetchCategorybyId();
  }, []);
  console.log("====", data);

  const fetchCategorybyId = async () => {
    try {
      const res = await api.get("/lesson/" + id);
      console.log(" detail: ", res.data);
      setData(res.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNextQuestion = () => {
    if (ans == data?.questions[current]?.correctAnswer) {
      setModal("correct");
    } else {
      setModal("incorrect");
    }
  };
  const handleNext = async () => {
    setModal("");
    try {
      const res = await api.post("/question/addQuestionToUserProgress", {
        userId: user?._id,
        questionId: data?.questions[current]._id,
      });
      console.log(res);
      dispatch(updateUserExtra());
    } catch (error) {
      console.error(error);
    }
    if (current < length - 1) {
      setCurrent(current + 1);
    } else if (current == length - 1) {
      navigate("/lessons/" + categoryId + "/" + courseId);
    }
  };
  return (
    <div className="text-black relative h-[100%] flex flex-col  px-4">
      <div className="py-2 ">
        <Progress
          percent={((100 / length) * (current + 1)).toFixed(0)}
          percentPosition={{
            align: "start",
            type: "inner",
          }}
          size={["100%", 20]}
          strokeColor="#115e59"
        />
      </div>
      <div className="flex-1">
        {length > 0 && (
          <div className="flex flex-col h-full ">
            <div className="flex-1">
              <p className="text-2xl uppercase font-medium">
                {data?.questions[current].question}
              </p>
              <div className="flex justify-center my-5">
                <img
                  className="max-h-[200px]  max-w-[280px] rounded-2xl "
                  src={data?.questions[current]?.images}
                  alt=""
                />
              </div>
              <div>
                <p>{data?.questions[current].description}</p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 mb-5">
                {data?.questions[current].answerImage?.length > 0
                  ? data?.questions[current].answerImage?.map((ansImage) => (
                      <div
                        onClick={() => setAns(ansImage?.name)}
                        className={`border-8 border-transparent  rounded-3xl hover:border-[#0d9488] w-36  ${
                          ansImage?.name == ans && "border-[#0d9488]"
                        } `}
                      >
                        <div className="">
                          <img
                            className="object-cover h-32 w-36 rounded-2xl "
                            src={ansImage?.image}
                            alt=""
                          />
                        </div>
                      </div>
                    ))
                  : data?.questions[current].options?.map((op) => (
                      <>
                        <button
                          onClick={() => setAns(op)}
                          className={`border shadow block w-full my-2 py-2 rounded hover:border-4 capitalize  ${
                            op == ans &&
                            "border-primary-text text-primary-text border-4 font-bold"
                          } `}
                        >
                          {op}
                        </button>
                      </>
                    ))}
              </div>
              <div className="mb-5">
                <button
                  disabled={ans == "" || modal != ""}
                  onClick={handleNextQuestion}
                  className="bg-primary-text w-full py-2 rounded-xl text-white font-bold"
                >
                  {current == length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>

            {/* <div className="absolute left-0 bottom-0 w-full h-[clac(100% - 100px)] opacity-0 bg-gray-100"></div> */}
            {modal == "correct" && (
              <div className="absolute left-0 bottom-0 w-full z-50 h-[100px] bg-grasy-100">
                <div className="w-full h-[100px] bg-gray-100">
                  <div className="flex items-center  p-3">
                    <IoIosCheckmarkCircle size={30} color="#22c55e" />
                    <p className="text-[#22c55e] font-bold text-lg">
                      Excellent!{" "}
                    </p>
                  </div>
                  <div className="mx-5">
                    <button
                      onClick={handleNext}
                      className="bg-[#22c55e] w-full py-2 rounded-xl text-white font-bold"
                    >
                      CONTINUE
                    </button>
                  </div>
                </div>
              </div>
            )}
            {modal == "incorrect" && (
              <div className="absolute text-[#e11d48] left-0 bottom-0 w-full  h-[200px] bg-gray-100">
                <div className="w-full h-[100px] bg-gray-100">
                  <div className="flex items-center  p-3">
                    <IoCloseCircle size={30} color="#e11d48" />
                    <p className="text-[#e11d48] font-bold text-lg">
                      Incorrect{" "}
                    </p>
                  </div>
                  <p className="font-bold mx-5">Correct Answer:</p>
                  {data?.questions[current].answerImage?.length > 0 ? (
                    data?.questions[current].answerImage?.map((ansImage) => {
                      console.log(
                        ansImage?.name,
                        data?.questions[current]?.correctAnswer
                      );
                      if (
                        ansImage?.name ==
                        data?.questions[current]?.correctAnswer
                      ) {
                        return (
                          <div className="mx-5">
                            <img
                              className="object-cover h-24 my-2 w-24 rounded-2xl "
                              src={ansImage?.image}
                              alt=""
                            />
                          </div>
                        );
                      }
                      return null;
                    })
                  ) : (
                    <p className="mx-5 my-4">
                      {data?.questions[current]?.correctAnswer}
                    </p>
                  )}
                  <div className="mx-5">
                    <button
                      onClick={handleNext}
                      className="bg-[#e11d48] w-full py-2 rounded-xl text-white font-bold"
                    >
                      Got It
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
  ``;
};

export default LessonContent;
