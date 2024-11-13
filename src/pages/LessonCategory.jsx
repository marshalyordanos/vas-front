import { useState, useEffect } from "react";
import SkillProgress from "../components/lessonCategory/SkillProgress";
import api from "../api/api";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserCategory } from "../redux/category";

const LessonCategory = () => {
  const [skills, setSkills] = useState([]);
  const category = useSelector((state) => state.category?.category);
  const user = useSelector((state) => state.user?.user);

  const { id } = useParams();
  const curentCategory = category?.filter((cat) => cat.id == id) || [];

  console.log("curentCategory", curentCategory);
  useEffect(() => {
    // API call (mocked for now)
    const fetchData = async () => {
      const apiData = [
        {
          skill: "Speaking",
          completed: 75,
        },
        {
          skill: "Writing",
          completed: 50,
        },
        {
          skill: "Listening",
          completed: 100,
        },
        {
          skill: "Reading",
          completed: 0,
          status: "locked",
        },
      ];
      setSkills(apiData);
    };

    fetchData();
  }, []);

  return (
    <div className="pt-0">
      <SkillProgress
        user={user}
        category={curentCategory.length > 0 && curentCategory[0]}
      />
    </div>
  );
};

export default LessonCategory;
