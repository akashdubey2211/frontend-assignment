import React from "react";
import { Layout, Typography, Row, Col } from "antd";
import logo from "../assets/logo.svg"; // Replace with your logo path

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header style={{ background: "#fff", padding: "8px 20px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
      <Row align="middle" justify="space-between" style={{ height: "100%" }}>
        {/* Logo Section */}
        <Col>
          <img src={logo} alt="App Logo" style={{ height: "40px" }} />
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
