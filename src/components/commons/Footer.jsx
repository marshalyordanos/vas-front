import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  const location = useLocation();
  const Home = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12.204C2 9.915 2 8.771 2.52 7.823C3.038 6.874 3.987 6.286 5.884 5.108L7.884 3.867C9.889 2.622 10.892 2 12 2C13.108 2 14.11 2.622 16.116 3.867L18.116 5.108C20.013 6.286 20.962 6.874 21.481 7.823C22 8.772 22 9.915 22 12.203V13.725C22 17.625 22 19.576 20.828 20.788C19.656 22 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.788C2.001 19.576 2 17.626 2 13.725V12.204Z"
        stroke={location.pathname == "/home" ? "white" : "black"}
        stroke-width="1.5"
      />
      <path
        d="M12 15V18"
        stroke={location.pathname == "/home" ? "white" : "black"}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );

  const Earn = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 6C16 4.114 16 3.172 15.414 2.586C14.828 2 13.886 2 12 2C10.114 2 9.172 2 8.586 2.586C8 3.172 8 4.114 8 6M2 14C2 10.229 2 8.343 3.172 7.172C4.344 6.001 6.229 6 10 6H14C17.771 6 19.657 6 20.828 7.172C21.999 8.344 22 10.229 22 14C22 17.771 22 19.657 20.828 20.828C19.656 21.999 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2.001 19.656 2 17.771 2 14Z"
        stroke={location.pathname == "/earn" ? "white" : "black"}
        stroke-width="1.5"
      />
      <path
        d="M12 17.333C13.105 17.333 14 16.587 14 15.667C14 14.747 13.105 14 12 14C10.895 14 10 13.254 10 12.333C10 11.413 10.895 10.667 12 10.667M12 17.333C10.895 17.333 10 16.587 10 15.667M12 17.333V18M12 10.667V10M12 10.667C13.105 10.667 14 11.413 14 12.333"
        stroke={location.pathname == "/earn" ? "white" : "black"}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );

  const Leaderboard = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 22C2 20.585 2 19.878 2.44 19.44C2.879 19 3.585 19 5 19C6.415 19 7.122 19 7.56 19.44C8 19.879 8 20.586 8 22V13C8 11.585 8 10.878 8.44 10.44C8.879 10 9.586 10 11 10H13C14.415 10 15.122 10 15.56 10.44C16 10.879 16 11.586 16 13V22V19C16 17.585 16 16.878 16.44 16.44C16.879 16 17.585 16 19 16C20.415 16 21.122 16 21.56 16.44C22 16.879 22 17.586 22 19V22"
        stroke={location.pathname == "/leaderboard" ? "white" : "black"}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M11.146 3.023C11.526 2.34 11.716 2 12 2C12.284 2 12.474 2.34 12.854 3.023L12.952 3.199C13.06 3.393 13.114 3.489 13.198 3.553C13.283 3.617 13.388 3.641 13.598 3.688L13.788 3.732C14.526 3.899 14.895 3.982 14.983 4.264C15.071 4.546 14.819 4.841 14.316 5.429L14.186 5.581C14.043 5.748 13.971 5.831 13.939 5.935C13.907 6.039 13.918 6.15 13.939 6.373L13.959 6.576C14.035 7.361 14.073 7.754 13.844 7.928C13.614 8.103 13.268 7.943 12.577 7.625L12.399 7.543C12.202 7.453 12.104 7.407 12 7.407C11.896 7.407 11.798 7.453 11.601 7.543L11.423 7.625C10.732 7.943 10.386 8.103 10.156 7.928C9.92604 7.754 9.96504 7.361 10.041 6.576L10.061 6.373C10.082 6.15 10.093 6.039 10.061 5.935C10.029 5.831 9.95704 5.748 9.81404 5.581L9.68404 5.429C9.18104 4.841 8.92904 4.547 9.01704 4.264C9.10504 3.982 9.47404 3.899 10.212 3.732L10.402 3.688C10.612 3.641 10.717 3.618 10.802 3.553C10.886 3.489 10.94 3.393 11.048 3.199L11.146 3.023Z"
        stroke={location.pathname == "/leaderboard" ? "white" : "black"}
        stroke-width="1.5"
      />
    </svg>
  );
  const Profile = () => (
    <svg
      width="16"
      height="21"
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 9C10.2091 9 12 7.20914 12 5C12 2.79086 10.2091 1 8 1C5.79086 1 4 2.79086 4 5C4 7.20914 5.79086 9 8 9Z"
        stroke={location.pathname == "/profile" ? "white" : "black"}
        stroke-width="1.5"
      />
      <path
        d="M8 20C11.866 20 15 18.2091 15 16C15 13.7909 11.866 12 8 12C4.13401 12 1 13.7909 1 16C1 18.2091 4.13401 20 8 20Z"
        stroke={location.pathname == "/profile" ? "white" : "black"}
        stroke-width="1.5"
      />
    </svg>
  );

  return (
    <Container className="text-black flex bg-gray-200 mx-5 my-2 py-4 px-5 rounded-full justify-between   border">
      <NavLink className={"flex items-center gap-1"} to={"/home"}>
        <Home />
        <p className="hidden">Home</p>
      </NavLink>
      <NavLink className={"flex items-center gap-1"} to={"/leaderboard"}>
        <Leaderboard />
        <p className="hidden">Leaderboard</p>
      </NavLink>
      <NavLink className={"flex items-center gap-1"} to={"/earn"}>
        <Earn />
        <p className="hidden">Earn</p>
      </NavLink>

      <NavLink className={"flex items-center gap-1"} to={"/profile"}>
        <Profile />
        <p className="hidden">Profile</p>
      </NavLink>
    </Container>
  );
};
const Container = styled.div`
  .active {
    padding: 4px 10px;
    border-radius: 100px;
    background: #0c4651;
  }
  .active p {
    display: block;
    color: white;
  }
`;

export default Footer;
