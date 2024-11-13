import { useState } from "react";
import Lesson1 from "../assets/lesson/lesson1.png";
import Lesson2 from "../assets/lesson/lesson2.png";
import Lesson3 from "../assets/lesson/lesson3.png";
import Unit from "../components/lessons/Unit";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const LessonPage = () => {
  const [expandedUnit, setExpandedUnit] = useState("");
  const category = useSelector((state) => state.category?.category);
  const user = useSelector((state) => state.user?.user);

  const { categoryId, courseId } = useParams();
  // Sample data for units and lessons

  const categoryData = category?.find((cat) => cat.id == categoryId) || [];

  console.log("categoryData", categoryData);
  // Find course by ID in category
  const course = categoryData?.coursesList?.find(
    (course) => course._id === courseId
  );

  // Get chapters if the course exists
  const chapters = course ? course?.chapters : [];
  console.log("chapters", chapters);
  // Function to toggle unit accordion
  const toggleUnitExpansion = (unitId) => {
    setExpandedUnit(expandedUnit === unitId ? null : unitId);
  };

  return (
    <Container className="p-4 max-w-lg mx-auto  ">
      {chapters.map((unit) => (
        <Unit
          user={user}
          key={unit.id}
          unit={unit}
          expandedUnit={expandedUnit}
          toggleUnitExpansion={toggleUnitExpansion}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-height: 600px;
  overflow-y: auto;
`;

export default LessonPage;
