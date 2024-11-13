import { Avatar } from "antd";
import React from "react";
import Fire from "../../assets/solar_fire-square-bold.png";
import Ticket from "../../assets/solar_ticker-star-bold.png";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user?.user);

  return (
    <Container className="text-black border">
      <div className="flex  justify-between items-center mx-8  my-2 ">
        <div className=" p-1 border-[#0c4652ff] rounded-full ">
          <Avatar
            style={{
              backgroundColor: "#0c4652ff",
              verticalAlign: "middle",
            }}
            size={35}
          >
            M
          </Avatar>
        </div>
        <div className="font-black flex gap-2  items-center">
          <div className="flex bg-slate-100 px-3 rounded-md  items-center">
            <img src={Fire} alt="" />
            <p>{user?.streak?.count}</p>
          </div>
          <div className="flex bg-slate-100 px-3 rounded-md   items-center">
            <img src={Ticket} alt="" />
            <p>{user?.balance}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .image {
    border-style: dashed;
    border-width: 4px;
    border-color: #4b5563; /* Tailwind's gray-500 */
    border-spacing: 10px; /* This controls the dash gap size */
    border-image: linear-gradient(
        to right,
        #4b5563 33%,
        rgba(255, 255, 255, 0) 33%
      )
      1; /* Customize dash length */
  }
`;

export default Navbar;
