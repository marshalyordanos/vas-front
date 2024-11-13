import React from "react";
import { styled } from "styled-components";
import SamplePage from "../components/setting/head";
import TopNav from "../components/setting/topNav";
import SettingMenu from "../components/setting/settingMenu";
import SettingFooter from "../components/setting/settingFooter";

const SettingPage = () => {
  // const navigate =
  return (
    <HomeStyled>
      {/* <SamplePage className="bg-blue0-300"/> */}
      <div className="flex  flex-col h-full">
        <div className="flex-1">
          <TopNav title={"Setting"} />
          <SettingMenu />
        </div>
        <SettingFooter />
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  background-color: white;
  height: 100%;
  /* border: 1px solid red; */
  /* width: 370px; */
  padding: 12px; /* Adding padding to all borders */
`;

export default SettingPage;
