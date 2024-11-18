import {
  Layout,
  Row,
  Col,
  Menu,
  Button,
  Typography,
  Drawer,
  Space,
} from "antd";
import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import {
  MenuOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: "Home",
    to: "/",
  },
  {
    key: "2",
    label: "About",
    to: "/about",
  },
  {
    key: "3",
    label: "For Authors",
    to: "/authors",
  },
  {
    key: "4",
    label: "Issues & Archives",
    to: "/issues",
  },
  {
    key: "5",
    label: "Editorial Board",
    to: "/editorial-board",
  },
  {
    key: "6",
    label: "Contact",
    to: "/contact",
  },
];

const Header = () => {
  const [current, setCurrent] = useState("1");
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const matchingItem = items.find((item) => location.pathname === item.to);
    if (matchingItem) {
      setCurrent(matchingItem.key);
    }
  }, [location.pathname]);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!isDrawerVisible);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#001529",
        padding: "0 20px",
      }}
    >
      <Row gutter={16} justify="space-between" align="middle">
        {/* Logo */}
        <Col xs={16} sm={8} md={6} lg={5}>
          <img src="/logo-ijana.webp" style={{ height: "41px" }} alt="logo" />
        </Col>

        {/* Hamburger Icon for Small Screens */}
        <Col xs={8} sm={0} md={0} lg={0} style={{ textAlign: "right" }}>
          <MenuOutlined
            style={{ fontSize: "24px", color: "#fff", cursor: "pointer" }}
            onClick={toggleDrawer}
          />
        </Col>

        {/* Desktop Menu */}
        <Col xs={0} sm={14} md={14} lg={16}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[current]}
            onClick={handleClick}
          >
            {items.map((item) => (
              <Menu.Item key={item.key}>
                <Link to={item.to}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Col>

        {/* Submission Button */}
        <Col xs={0} sm={6} md={4} lg={3}>
          <Button
            style={{
              backgroundColor: "#F6F2FF",
              height: "auto",
              borderRadius: "20px",
              border: "1px solid #000",
              width: "100%",
            }}
          >
            <Typography style={{ fontWeight: "bold", fontSize: "14px" }}>
              Make a Submission
            </Typography>
          </Button>
        </Col>
      </Row>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={isDrawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        {/* Mobile Menu */}
        <Menu
          mode="vertical"
          selectedKeys={[current]}
          onClick={(e) => {
            handleClick(e);
            closeDrawer();
          }}
          style={{ borderRight: "none" }}
        >
          {items.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={item.to}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>

        {/* Social Media Links */}
        <Space
          size="large"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center", // Horizontally center the content
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Button
            icon={<FacebookOutlined />}
            shape="circle"
            size="large"
            style={{ backgroundColor: "#3b5998", color: "#fff" }}
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          />
          <Button
            icon={<TwitterOutlined />}
            shape="circle"
            size="large"
            style={{ backgroundColor: "#1da1f2", color: "#fff" }}
            onClick={() => window.open("https://www.twitter.com", "_blank")}
          />
          <Button
            icon={<InstagramOutlined />}
            shape="circle"
            size="large"
            style={{ backgroundColor: "#e4405f", color: "#fff" }}
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          />
          <Button
            icon={<LinkedinOutlined />}
            shape="circle"
            size="large"
            style={{ backgroundColor: "#0077b5", color: "#fff" }}
            onClick={() => window.open("https://www.linkedin.com", "_blank")}
          />
        </Space>
      </Drawer>
    </Layout.Header>
  );
};

export default Header;
