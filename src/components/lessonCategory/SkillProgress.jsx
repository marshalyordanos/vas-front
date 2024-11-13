import SpeakingImage from "../../assets/Speaking.png";
import ListeningImage from "../../assets/Listening.png";
import WritingImage from "../../assets/Writing.png";
import ReadingImage from "../../assets/Reading.png";
import SkillCard from "./SkillCard";

function SkillProgress({ user, category }) {
  // JSON object to map skills to images
  const skillImages = {
    Speaking: SpeakingImage,
    Listening: ListeningImage,
    Writing: WritingImage,
    Reading: ReadingImage,
  };
  console.log("cc: ", category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-5">
      {category?.coursesList?.map((item, index) => (
        <SkillCard
          user={user}
          id={item?.id}
          categoryId={category?._id}
          key={index}
          skill={item?.title}
          completed={50}
          icon={skillImages["Speaking"]}
          status={""}
        />
      ))}
    </div>
  );
}

export default SkillProgress;
