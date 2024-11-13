import { useState } from "react";
import BookIcon from "../../assets/lesson/book-icon.svg";
import Lesson from "./Lesson";
// import LessonModal from "./LessonModal";

const Unit = ({ user, unit, expandedUnit, toggleUnitExpansion }) => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonClick = (lesson) => {
    setSelectedLesson((prev) => (prev?.id === lesson.id ? null : lesson));
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="mb-6   border-gray-900 rounded-lg shadow-sm">
      <div
        className="flex  rounded-lg  text-white justify-between items-center cursor-pointer py-2 px-4  bg-[#0C4651]"
        onClick={() => toggleUnitExpansion(unit.id)}
      >
        <div>
          <span className="text-md font-bold">{unit.title}</span>
          <span className="text-gray-200 text-sm font-semibold ml-6">
            {truncateText(unit.description, 20)}
          </span>
        </div>
        <div className="text-gray-900">
          <img src={BookIcon} alt="icon" className="w-5 h-5" />
        </div>
      </div>

      {
        // expandedUnit === unit.id
        true && (
          <div className="px-4 py-2 bg-gray-50">
            <div className="flex justify-center flex-col items-center">
              {unit.lessons.map((lesson, index) => {
                let alignmentClass = "";

                return (
                  <Lesson
                    user={user}
                    key={`${unit.id}-${lesson.id}`}
                    total={unit?.lessons.length}
                    lesson={lesson}
                    current={true}
                    index={index}
                    selectedLesson={selectedLesson}
                    onClick={handleLessonClick}
                    isSelected={selectedLesson?.id === lesson.id}
                    alignmentClass={alignmentClass}
                    onClose={() => setSelectedLesson(null)}
                  />
                );
              })}
              {/* <LessonModal
              lesson={selectedLesson}
              onClose={() => setSelectedLesson(null)}
            /> */}
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Unit;
