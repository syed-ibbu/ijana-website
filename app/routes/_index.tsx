import { Col, Layout, Menu, Row } from "antd";
import { useState } from "react";
import { Link } from "@remix-run/react";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: "Home",
    to: "/",
  },
  {
    key: "2",
    label: "About",
    to: "./about",
  },
  {
    key: "3",
    label: "For Authors",
    to: "./authors",
  },
  {
    key: "4",
    label: "Issues & Archives",
    to: "./issues",
  },
  {
    key: "5",
    label: "Editorial Board",
    to: "./editorial-board",
  },
  {
    key: "6",
    label: "Contact",
    to: "./contact",
  },
];

export default function Index() {
  const [current, setCurrent] = useState("1");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{ position: "sticky", top: 0, zIndex: 1, minHeight: "70px" }}
      >
        <Row gutter={10} justify="space-between" align="middle">
          <Col span={13}>
            <span
              style={{
                fontWeight: "bold",
                color: "#f6f6f6",
                fontSize: "20px",
              }}
            >
              International Journal Advanced Networking & Applications
            </span>
          </Col>
          <Col span={11}>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[current]}
              onClick={handleClick}
              style={{ flex: 1, minWidth: 0 }}
            >
              {items.map((item) => (
                <Menu.Item key={item.key}>
                  <Link to={item.to}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: "24px",
          background: "#f6f6f6",
          flex: 1,
          overflowY: "auto",
        }}
      ></Content>
      <Footer
        style={{
          textAlign: "center",
          position: "sticky",
          bottom: 0,
          background: "#001529",
          color: "#f6f6f6",
        }}
      >
        © 2024 International Journal Advanced Networking & Applications
      </Footer>
    </Layout>
  );
}
