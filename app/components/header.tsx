import { Layout, Row, Col, Menu } from "antd";
import { Link } from "@remix-run/react";
import { useState } from "react";

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

const Header = () => {
  const [current, setCurrent] = useState("1");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout.Header
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
    </Layout.Header>
  );
};

export default Header;
