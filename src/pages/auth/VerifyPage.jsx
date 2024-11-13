import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import OtpInput from "react-otp-input";
import Countdown from "react-countdown";
import { NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import api from "../../api/api";
import { useDispatch } from "react-redux";
import AuthService from "../../api/auth.service";
import { login } from "../../redux/userSlice";
const VerifyPage = () => {
  const [otp, setOtp] = useState("");
  const [otpDisable, setOtpDisable] = useState(false);
  const { phone } = useParams();
  const [style, setStyle] = useState("otpinput");
  const navigete = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const hash = location.hash;
  // useEffect(() => {
  //   if (otp.length == 4) {
  //     console.log(otp);
  //   }
  // }, [otp]);
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <span>Time's up!</span>;
    } else {
      return (
        <span className="font-bold">{`${String(minutes).padStart(
          2,
          "0"
        )}:${String(seconds).padStart(2, "0")}`}</span>
      );
    }
  };
  const handleVerify = async () => {
    try {
      const res = await AuthService.login({
        phoneNumber: phone,
        otp: otp,
      });
      dispatch(login({ user: res.user, token: res.token }));
      // const res = await api.post("/auth/signin");

      if (hash == "#signup") {
        navigete("/select-languages");
      } else {
        navigete("/successful");
      }
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <div className="border h-[100%]">
      <div className="mx-5 mt-12">
        <div className=" cursor-pointer" onClick={() => navigete(-1)}>
          <FaArrowLeft color="black" size={20} />
        </div>{" "}
      </div>

      <div className="text-black felx flex-col items-center justify-center">
        <p className="text-2xl font-bold text-center mt-8">Verify</p>
        <p className="mx-10 text-center mt-2">
          Enter the 6-digit code sent to your phone to verify your account
        </p>
        <div className="flex justify-center  items-center mt-7 mx-5">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={style}
            // focusStyle="otpfocus"
            // containerStyle="border border-green-900 w-full"
            inputType="number"
            shouldAutoFocus={true}
            // renderSeparator={<span>{" - "}</span>}
            renderInput={(props) => <input {...props} />}
          />
          <Countdown
            // onComplete={() => setOtpDisable(true)}
            date={Date.now() + 30000}
            renderer={renderer}
          />
        </div>
        <div className="mt-10    flex flex-col items-center justify-center">
          <p>Didn’t receive the code?</p>
          <button className="font-medium underline">Resend</button>
          <button
            // disabled={otp}
            onClick={handleVerify}
            className="w-[220px] mt-10 bg-[#0C4651] py-1 text-white rounded-lg"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
