import React, { useState } from "react";
import LoginImage from "../../assets/auth/signup.png";

import WhiteLogo from "../../assets/icons/white-logo.png";

import { styled } from "styled-components";
import { Checkbox, Input, InputNumber, Select } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../api/api";
const SignupPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const onChangeCheckBox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleSignup = async () => {
    try {
      setLoading(true);
      const res = await api.post("/auth/otp", {
        phoneNumber: phoneNumber,
        type: "signup",
      });
      console.log("res: ", res);

      navigate("/verify/" + phoneNumber + "/#signup");
    } catch (error) {}
  };
  return (
    <LoginStyle>
      <div className="top">
        <div className=" z-10 relative flex justify-end">
          <div className="w-[70px] text-white m-5">
            <Select
              className=" text-whit "
              defaultValue="EN"
              style={{ fontWieght: 700 }}
              options={[
                {
                  value: "EN",
                  label: "EN",
                },
              ]}
            />
          </div>
        </div>
        <div className="logo">
          <img className="w-[120px]" src={WhiteLogo} />
        </div>
        <div className=" background  ">
          <img className="w-[370px] h-[407px]  z-0" src={LoginImage} alt="" />
        </div>
      </div>

      <div className="form-sec text-black z-10 relative h-[400px] border bg-white mt-[-50px] rounded-t-[40px]">
        <p className=" text-center font-bold text-2xl mt-8">Sign Up</p>
        <p className="text-center text-sm mx-5 ">
          Start Learning a New Language Today! Sign up now and be one of our
          first learners!
        </p>

        <div className="flex items-center mx-7 gap-2 mt-10">
          <p className="bg-black text-white px-1 py-[2px] rounded">+251</p>
          <Input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="flex-1"
            placeholder="987654321"
          />{" "}
        </div>
        <Checkbox className="mx-7 mt-3" onChange={onChangeCheckBox}>
          I agree to the Terms and Conditions.
        </Checkbox>
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={handleSignup}
            className="w-[220px] mt-10 bg-[#0C4651] py-1 text-white rounded-lg"
          >
            Sign Up
          </button>
          <p className="text-sm mt-3">
            Back to,{" "}
            <NavLink
              to={"/login"}
              className={"text-md text-blue-700 font-bold underline"}
            >
              Login{" "}
            </NavLink>
          </p>
        </div>
      </div>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  /* background-color: white;
  height: 100%;
  width: 370px;
  position: relative;
  border: 1px solid black; */
  overflow-y: auto;

  .top {
    height: 407px;
    display: flex;
    flex-direction: column;
  }

  .background {
    height: 407px;
    width: 370px;
    top: 0;
    /* border: 3px solid red; */
    /* object-fit: cover; */
    position: absolute;
    z-index: 0;
  }
  .logo {
    position: relative;
    z-index: 10;
    text-align: center;
    /* border: 2px solid; */
    height: 290px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    z-index: 100;
    position: relative;
    border: 3px solid red;
  }
`;

export default SignupPage;
