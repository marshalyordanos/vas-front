import React from "react";
import { Progress, Avatar, Row, Col, Typography, Button, Card } from "antd";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";
const flagSpain = "https://example.com/spain-flag.png";
const flagUSA = "https://example.com/usa-flag.png";
const flagOther = "https://example.com/other-flag.png";

import Flag from "react-world-flags";
import flags from "../../contraint/languages";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const DashboardHeader = ({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  console.log("category", selectedCategory);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Row align="middle">
        {/* Text greeting */}
        <Col span={12}>
          <Typography.Text style={{ fontSize: "20px", color: "#8f8f8fff" }}>
            {t("welcome")}
          </Typography.Text>
          <Typography.Title
            level={3}
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: 30,
              color: "#0c4652ff",
            }}
          >
            {/* User */}
          </Typography.Title>

          {/* Flags Section */}
          <div style={{ marginTop: "10px" }}>
            {/* <Avatar src={flagSpain} size="small" style={{ marginRight: '5px' }} />
            <Avatar src={flagUSA} size="small" style={{ marginRight: '5px' }} />
            <Avatar src={flagOther} size="small" style={{ marginRight: '5px' }} /> */}
            <div className="flex gap-1  items-center">
              {/* <p className="border text-black"> {JSON.stringify(category)}</p> */}
              {category?.map((cat) => (
                <div
                  onClick={() => setSelectedCategory(cat)}
                  key={cat?._id}
                  className={`text-black border-2  rounded  px-2 ${
                    cat._id == selectedCategory?._id
                      ? "border-lime-800"
                      : "border-white"
                  }`}
                >
                  <p>{flags[cat?.categoryId?.name]}</p>
                </div>
              ))}
              {/* <Flag code="US" style={{ width: "50px", height: "30px" }} />
              <Flag code="GB" style={{ width: "50px", height: "30px" }} />
              <Flag code="FR" style={{ width: "50px", height: "30px" }} /> */}
              <Button
                onClick={() => navigate("/select-languages")}
                shape="circle"
                icon={<BoldIcon />}
              />
            </div>

            {/* <Button shape="circle" icon={<PlusOutlined />} /> */}
          </div>
        </Col>

        {/* Progress Circle */}

        <Col span={12} style={{ textAlign: "right" }}>
          <Progress
            type="circle"
            percent={category && category[0]?.userProgress}
            width={90}
            strokeColor="#0c4652ff"
            strokeWidth={11}
            format={(percent) => (
              <span style={{ color: "#0c4652ff", fontWeight: 700 }}>
                {percent}
                <span style={{ fontWeight: 900, fontSize: "20px" }}>%</span>
              </span>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

const BoldIcon = styled(PlusOutlined)`
  font-size: 25px; /* Increase the font size */
  font-weight: 700; /* Adjust weight for a bolder effect */
`;
export default DashboardHeader;
