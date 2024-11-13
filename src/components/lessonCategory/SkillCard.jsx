import { Progress } from "antd";
import LockIcon from "../../assets/icons/Lock.svg";
import { useNavigate, useParams } from "react-router-dom";
import { FaLock } from "react-icons/fa";

const SkillCard = ({
  user,
  categoryId,
  skill,
  completed,
  id,
  icon,
  status,
}) => {
  const isLocked = status === "locked";
  console.log(isLocked);
  const navigate = useNavigate();
  const isLock = user?.course?.some((c) => c.courseId !== id);
  const course = user?.course?.find((c) => c.courseId == id);
  // const { id } = useParams();
  return (
    <div
      onClick={() => {
        if (isLock) {
        } else {
          navigate("/lessons/" + categoryId + "/" + id);
        }
      }}
      className="bg-gray-100 cursor-pointer  text-black hover:text-white  hover:bg-primary-text shadow-sm rounded-lg w-full max-w-xs relative"
    >
      {isLock && (
        <div className="absolute flex justify-center items-center rounded z-50 opacity-[0.8] bg-primary-text w-full h-full">
          <FaLock size={40} color="white" />
        </div>
      )}
      <div className="p-2">
        <h2 className="text-sm font-bold text-center">{skill}</h2>

        <div className="flex justify-center mb-1 relative">
          <img
            src={icon}
            alt={skill}
            className="h-auto py-2 w-32 object-contain"
          />

          {isLocked && (
            <div className="absolute inset-1 bg-primary-text opacity-90 z-50 rounded-lg flex items-center justify-center">
              <img src={LockIcon} className="w-5 text-white" />
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <p className="text-center mb-2 text-xs font-bold">Completed</p>
          <p className="text-center text-xs  font-semibold">{completed}%</p>
        </div>

        {/* <div className="w-full bg-gray-200 rounded-full h-2.5">
  <div
    className={`h-1.5 rounded-full ${
      isLocked ? "bg-gray-400" : "bg-primary-text"
    }`}
    style={{ width: `${completed}%` }}
  ></div>
</div> */}
        <div>
          <Progress
            percent={isLock ? 0 : Number(course?.userProgress).toFixed(0)}
            strokeColor="#a9b414"
            // format={(percent) => (
            //   <div
            //     className="flex justify-center p-2 items-center"
            //     style={{ color: "#0c4652ff", fontWeight: 700 }}
            //   >
            //     p
            //   </div>
            // )}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
