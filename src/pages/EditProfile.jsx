import React, { useState } from "react";
import { styled } from "styled-components";
import TopNav from "../components/setting/topNav";
import EditProfileFooter from "../components/setting/editProfileFooter";
import EditGoal from "../components/setting/EditGoal";
import { Form, Input, Select, Upload } from "antd";
import {
  InboxOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import ProfilePic from "../components/setting/ProfilePic";
import Dragger from "antd/es/upload/Dragger";
import { BsNutFill } from "react-icons/bs";
import api from "../api/api";
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState("");

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("image", fileList[0].originFileObj); // Append each file to the FormData

      console.log(formData, fileList[0].originFileObj);
      const data = await api.post(
        "/user/update/67220a81bfe2099a1d2a8416",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set correct headers
          },
        }
      );

      console.log("data", data);
    } catch (error) {}
    console.log(values);
  };

  const onChangeImages = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(newFileList);
  };
  const beforeUpload = (file) => {
    console.log("file type: ", file.type);
    const isJpgOrPng = file.type.startsWith("image");
    if (!isJpgOrPng) {
      message.error("You can only upload image file!");
      return Upload.LIST_IGNORE;
    }
    const isLt2M = file.size / 1024 / 1024 < 10;
    if (!isLt2M) {
      message.error("Image must smaller than 10MB!");
      return Upload.LIST_IGNORE;
    }
    return false;
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <HomeStyled>
      {/* <SamplePage className="bg-blue0-300"/> */}
      <div className=" flex flex-col ">
        <div className="flex-grow">
          <TopNav title={"Account Settings"} />
          <Form
            form={form}
            layout="vertical"
            name="nest-messages"
            onFinish={onFinish}
            onError={() => {}}
            validateMessages={validateMessages}
          >
            <div className="flex"></div>
            <div className=" rounded-full flex justify-center my-5">
              <Upload
                //   action="http://localhost:5173"
                className=" rounded-full"
                listType="picture-circle"
                fileList={fileList}
                onChange={onChangeImages}
                onPreview={handlePreview}
                action={null}
                beforeUpload={beforeUpload}
              >
                {fileList.length < 1 && "+ Upload"}
              </Upload>

              {previewImage && (
                <Image
                  wrapperStyle={{
                    display: "none",
                  }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) =>
                      !visible && setPreviewImage(""),
                  }}
                  src={previewImage}
                />
              )}
            </div>
            <div>
              <Form.Item
                className=" flex-1 my-5"
                name={"fullName"}
                label="Full name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input className="border-gray-400 py-2" />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                className=" flex-1 my-5"
                name={"phoneNumber"}
                label="Phone Number"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input disabled className="border-gray-400 py-2" />
              </Form.Item>
            </div>
            {/* <div style={{ marginTop: 16 }}>
          <h3>Uploaded Files:</h3>
          <ul>
            {fileList.map((file) => (
              <li key={file.uid}>
                {file.name} - {file.size / 1024} KB
              </li>
            ))}
          </ul>
        </div> */}
            {/* <ProfilePic /> */}
            {/* <NameForm />
          <PhoneForm /> */}
            <EditGoal />
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white rounded-xl py-1 mt-8 bg-primary-text w-[200px] "
              >
                Update Setting
              </button>
            </div>{" "}
          </Form>
        </div>
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  background-color: white;
  height: 100%;
  width: 370px;
  padding: 12px; /* Adding padding to all borders */
`;

const NameForm = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <div className=" w-full">
          <div className="text-black text-sm font-medium">Full name</div>
          <div className="text-black text-sm font-normal">
            <Input type="int" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PhoneForm = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <div className=" w-full">
          <div className="text-black text-sm font-medium">Phone Number</div>
          <div className="text-black text-sm font-normal">
            <Input type="int" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return (
    <div className="text-white  mt-10 text-center  flex flex-col justify-center mb-20 ">
      <div className="  flex justify-center items-center">
        <a
          href="#s"
          className=" w-35 bg-[#0C4651] text-[#FFFFFF]   rounded-[10px] items-center justify-center flex flex-row gap-[10px] px-[60px] py-[6px] text-white"
          onClick={() => setPlan("basic")}
        >
          <div>
            <h1 className=" font-medium leading-3 text-[10px]">
              Update Settings
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default EditProfile;
