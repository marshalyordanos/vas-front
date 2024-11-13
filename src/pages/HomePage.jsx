import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

import DashboardHeader from "../components/home/DashboardHeader";
import CardGrid from "../components/home/cardData";
import SliderComponent from "../components/home/sliderLeaderBoard";
import DailyQuestCard from "../components/home/dailyBoard";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/api";
import { updateUser } from "../redux/userSlice";
const HomePage = () => {
  const userData = useSelector((state) => state.user);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    setSelectedCategory(userData?.user?.category[0]);
  }, [userData?.user]);
  useEffect(() => {
    fetchUserInfo();
  }, []);
  const fetchUserInfo = async () => {
    try {
      const res2 = tokenService.getUser();

      const res = await api.get("/user/" + res2?.user?._id);
      console.log("home: ", res.data);
      dispatch(updateUser({ ...userData, user: res.data?.data }));
    } catch (error) {
      console.error(error);
    }
  };
  console.log("home user", selectedCategory, userData?.user);
  return (
    <HomeStyled>
      <DashboardHeader
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        category={userData?.user?.category}
      />
      <CardGrid category={selectedCategory} />
      <div style={{ marginTop: "30px", marginBottom: "25px" }}>
        <SliderComponent />
      </div>
      <DailyQuestCard />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  background-color: white;
  height: 100%;
  width: 370px;
  padding: 12px; /* Adding padding to all borders */
`;

export default HomePage;
