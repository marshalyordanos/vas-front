import React from "react";
import Navbar from "./components/commons/Navbar";
import Footer from "./components/commons/Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutApp = () => {
  return (
    <LoginStyle>
      <Navbar />
      <div className="flex-1 border routes">
        <Outlet />
      </div>

      <Footer />
    </LoginStyle>
  );
};
const LoginStyle = styled.div`
  background-color: white;
  height: 100%;
  width: 370px;
  position: relative;
  display: flex;
  flex-direction: column;
  .routes {
    /* background-color: #6b2c2c; */

    height: calc(100% - 140px);
    /* height: 100%; */
    /* height: 600px;
    max-height: 600px; */
    overflow-x: hidden;

    overflow-y: auto;
  }
  /* @media (min-width: 768px) {
    .routes {
      height: calc(100% - 180px);
    }
  } */
  /* border: 1px solid black; */
`;

export default LayoutApp;
