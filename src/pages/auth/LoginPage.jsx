import React, { useState } from "react";
import LoginImage from "../../assets/login.png";
import WhiteLogo from "../../assets/icons/white-logo.png";

import { styled } from "styled-components";
import { Checkbox, Form, Input, InputNumber, Select } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../api/api";
import { useTranslation } from "react-i18next";
const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const onChangeCheckBox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleLogin = async () => {
    try {
      setLoading(true);
      console.log("------------------");
      const res = await api.post("/auth/otp", {
        phoneNumber: phoneNumber,
        type: "login",
      });
      console.log("res: ", res);
      navigate("/verify/" + phoneNumber + "/#login");
    } catch (error) {}
  };
  return (
    <LoginStyle>
      <div className="top">
        <div className=" z-10 relative flex justify-end">
          <div className="w-[100px] text-white m-5">
            <Select
              className=" text-whit "
              defaultValue="EN"
              style={{ fontWieght: 700 }}
              onChange={(value) => {
                i18n.changeLanguage(value);
              }}
              options={[
                {
                  value: "EN",
                  label: "EN",
                },
                {
                  value: "ET",
                  label: "AMH",
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

      <Form onFinish={handleLogin}>
        <div className="form-sec text-black z-10 relative h-[400px] border bg-white mt-[-50px] rounded-t-[40px]">
          <p className=" text-center font-bold text-2xl mt-8">{t("login")}</p>
          <p className="text-center text-sm ">Welcome back!!</p>

          <div className="flex  h-[50px] items-center mx-7 gap-2 mt-10">
            <p className="bg-black text-white px-1 py-[2px] rounded">+251</p>
            <Form.Item
              name={"phoneNumber"}
              rules={[
                {
                  required: true,
                  message: "please provide valid phone number!",
                },
              ]}
              className=" w-full p-0 m-0"
            >
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1"
                placeholder="987654321"
              />
            </Form.Item>
          </div>
          <Checkbox className="mx-7 mt-3" onChange={onChangeCheckBox}>
            {t("remember_me")}
          </Checkbox>
          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              // onClick={}
              className="w-[220px] mt-10 bg-[#0C4651] py-1 text-white rounded-lg"
            >
              Login
            </button>
            <p className="text-sm mt-3">
              If you don't have an account,{" "}
              <NavLink
                to={"/signup"}
                className={"text-md text-blue-700 font-bold underline"}
              >
                Sign up
              </NavLink>
            </p>
          </div>
        </div>
      </Form>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  /* background-color: white;
  height: 100%;
  width: 370px;
  position: relative;
  border: 1px solid black; */
  /* border: 1px solid red; */
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
    border: 1px solid red;
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

export default LoginPage;
