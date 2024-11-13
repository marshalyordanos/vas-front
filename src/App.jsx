import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRouting from "./app-routing";
import BackGroundImage from "./assets/back-ground-2.png";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import tokenService from "./api/token.service";
import { login } from "./redux/userSlice";
import api from "./api/api";
import { updateCategory } from "./redux/category";
import "./localization";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const res = tokenService.getUser();
    console.log("res", res);
    dispatch(login({ user: res?.user, token: res?.token }));
  }, []);
  useEffect(() => {
    fetchCategorybyId();
  }, []);

  const fetchCategorybyId = async () => {
    try {
      const res = await api.get("category");
      console.log("category detail: ", res.data);
      dispatch(updateCategory(res.data?.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <BackGroundStyle>
        <img src={BackGroundImage} alt="" />
      </BackGroundStyle>
      <div className="app_con">
        <div className="app">
          <AppRouting />
        </div>
      </div>
    </Container>
  );
}

const BackGroundStyle = styled.div`
  width: 100vw;
  height: 100vh;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: "center";
  position: absolute;
  img {
    max-height: 100vh;
  }
  z-index: -100;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  .app_con {
    width: 100vw;
    height: 100vh;
    /* border: 1px solid red; */
    display: flex;

    justify-content: center;
    align-items: center;
  }
  .app {
    /* border: 1px solid black; */
    max-width: 375px;
    max-height: 780px;
    height: 95vh;
    border-radius: 20px;
    overflow: hidden;
  }
`;

export default App;
