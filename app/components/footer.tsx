import { Layout, Row, Col, Input, Button, Space, Typography } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
        background: "#001529", // Dark background
        color: "#f6f6f6", // Light text color
        padding: "40px 0", // Add more padding for spacing
        fontWeight: "600",
      }}
    >
      {/* Main footer content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
        {/* Subscription Section */}
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Text style={{ color: "#fff", fontSize: "18px" }}>
              Subscribe to our Newsletter
            </Text>
          </Col>
          <Col xs={18} sm={12} md={8} lg={6}>
            <Input
              placeholder="Enter your email"
              style={{
                borderRadius: "20px",
                padding: "10px 15px",
                width: "100%",
              }}
            />
          </Col>
          <Col xs={6} sm={12} md={8} lg={6}>
            <Button
              type="primary"
              style={{
                borderRadius: "20px",
                backgroundColor: "#1890ff", // Ant Design primary color
                borderColor: "#1890ff",
                width: "100%",
              }}
            >
              Subscribe
            </Button>
          </Col>
        </Row>

        {/* Social Media Section */}
        <Row justify="center" align="middle" style={{ marginTop: "20px" }}>
          <Col>
            <Space size="large">
              <Button
                icon={<FacebookOutlined />}
                shape="circle"
                size="large"
                style={{ backgroundColor: "#3b5998", color: "#fff" }}
              />
              <Button
                icon={<TwitterOutlined />}
                shape="circle"
                size="large"
                style={{ backgroundColor: "#1da1f2", color: "#fff" }}
              />
              <Button
                icon={<LinkedinOutlined />}
                shape="circle"
                size="large"
                style={{ backgroundColor: "#0077b5", color: "#fff" }}
              />
              <Button
                icon={<InstagramOutlined />}
                shape="circle"
                size="large"
                style={{ backgroundColor: "#e4405f", color: "#fff" }}
              />
            </Space>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Col>
            <Text style={{ color: "#f6f6f6", fontSize: "14px" }}>
              Copyright ©2024 All rights reserved | by IJANA-International
              Journal Advanced Networking and Applications, Published by Eswar
              Publications.
            </Text>
          </Col>
        </Row>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
