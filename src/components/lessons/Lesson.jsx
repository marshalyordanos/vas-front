import LessonModal from "./LessonModal";
import { FaStar } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Popover, Progress } from "antd";

const Lesson = ({
  lesson,
  onClick,
  isSelected,
  alignmentClass,
  selectedLesson,
  current,
  index,
  total,
  onClose,
  user,
}) => {
  // console.log(index);
  const cycleLength = 8;
  const cycleINdex = index % cycleLength;
  let indetationLevel;
  if (cycleINdex <= 2) {
    indetationLevel = cycleINdex;
  } else if (cycleINdex <= 4) {
    indetationLevel = 4 - cycleINdex;
  } else if (cycleINdex <= 6) {
    indetationLevel = 4 - cycleINdex;
  } else {
    indetationLevel = cycleINdex - 8;
  }
  const rightPosition = indetationLevel * 30;
  const isFirst = index === 0;
  const islast = index == -total;
  const isCompleted = !current && !lesson?.unlocked;
  const Icon = isCompleted ? FaCheck : islast ? FaCrown : FaStar;
  const isLock = !user?.lesson?.some((l) => {
    return (
      l.lessonId === lesson?._id ||
      (l.lessonId && l.lessonId.id === lesson?._id)
    );
  });
  const userlesson = user?.lesson?.find((l) => {
    console.log("=========+++++++:::", l.lessonId, lesson?._id);
    return (
      l.lessonId == lesson?._id || (l.lessonId && l.lessonId.id === lesson?._id)
    );
  });
  console.log(isLock, userlesson, user);
  const href = isCompleted ? `/lesson/${id}` : "/lesson";
  return (
    // <div
    //   className={` relative shadow-2xl rounded-full border flex ${alignmentClass} items-center mb-4`}
    //   onClick={() => lesson.unlocked && onClick(lesson)}
    // >
    //   <div  className="h-12 w-12 rounded-full z-40 flex justify-center items-center cursor-pointer overflow-hidden">
    //     <div
    //       className="h-full w-full bg-cover bg-center"
    //       style={{
    //         backgroundImage: `url(${lesson.image})`,
    //         filter: lesson.unlocked ? "none" : "blur(8px)",
    //       }}
    //     ></div>
    //   </div>

    //   {/* {isSelected && <div>{isSelected}</div>} */}

    //   {isSelected && <LessonModal lesson={selectedLesson} onClose={onClose} />}
    // </div>
    <div>
      <div
        className=" relative text-black "
        style={{
          right: `${rightPosition}px`,
          // marginTop: isFirst && !isCompleted ? 20 : 10,
        }}
      >
        {userlesson?.status != "Finished" ? (
          <>
            {isLock ? (
              <div
                // onClick={() => onClick(lesson)}
                className="h-[90px] w-[102px] relative "
              >
                <Progress
                  type="circle"
                  percent={0}
                  size={65}
                  strokeColor="#e5e7eb"
                  strokeWidth={7}
                  format={(percent) => (
                    <div className="flex justify-center p-2 items-center">
                      <button className=" h-[50px] flex justify-center items-center w-[50px] border-b-8 border-b-gray-300  rounded-full ">
                        <FaCrown size={24} color="" />
                      </button>
                    </div>
                  )}
                />
                {isSelected && (
                  <LessonModal lesson={selectedLesson} onClose={onClose} />
                )}
              </div>
            ) : (
              <Popover
                content={
                  <div>
                    <p>{lesson?.description}</p>
                  </div>
                }
                title={lesson?.title}
              >
                <div
                  onClick={() => onClick(lesson)}
                  className="h-[90px] w-[102px] relative "
                >
                  {isFirst && (
                    <div className=" absolute -top-6 left-2.5 text-sm px-3 py-1.5 border-2 font-bold uppercase text-green-500 bg-white rounded-xl animate-bounce tracking-wide z-10">
                      <p> Start</p>
                      <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2"></div>
                    </div>
                  )}
                  <Progress
                    type="circle"
                    percent={isLock ? 0 : userlesson?.userProgress}
                    size={65}
                    strokeColor="#22c55e"
                    strokeWidth={7}
                    format={(percent) => (
                      <div
                        className="flex  justify-center p-2 items-center"
                        style={{ color: "#0c4652ff", fontWeight: 700 }}
                      >
                        <button className=" bg-[#22c55e] h-[50px] flex justify-center items-center w-[50px] border-b-8 border-b-[#15803d] hover:border-b-green-900 rounded-full ">
                          <FaCrown size={24} color="white" />
                        </button>
                      </div>
                    )}
                  />
                  {isSelected && (
                    <LessonModal lesson={selectedLesson} onClose={onClose} />
                  )}
                </div>
              </Popover>
            )}
          </>
        ) : (
          <div
            className="flex justify-center p-2 items-center"
            style={{ color: "#1c7080", fontWeight: 700 }}
          >
            <button className="bg-[#449bac] h-[50px] flex justify-center items-center w-[50px] border-b-8 border-b-[#113238] hover:border-b-green-900 rounded-full ">
              <FaCheck size={24} color="white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lesson;
