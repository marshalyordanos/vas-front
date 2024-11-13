import { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LessonModal = ({ lesson, onClose }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const { categoryId, courseId, lessonId } = useParams();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close the modal if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!lesson) return null; // Return null if no lesson is selected

  return (
    <div
      ref={modalRef} // Reference to detect outside clicks
      className="absolute border top-[50%] min-w-[150px]  mt-2 py-2 px-4 z-50 bg-white shadow-lg rounded-lg w-[45%] text-black"
    >
      <div className="text-xs font-semibold mb-1 text-justify">
        {lesson.name}
      </div>
      {true ? (
        <button
          onClick={() => {
            navigate(
              "/lessons-content/" +
                categoryId +
                "/" +
                courseId +
                "/" +
                lesson._id
            );
          }}
          className="bg-primary-text text-xs text-white px-1 py-2 rounded-xl w-full"
        >
          Start +{lesson?.balance}MP
        </button>
      ) : (
        <div className="text-center text-gray-500">This lesson is locked</div>
      )}
    </div>
  );
};

export default LessonModal;
