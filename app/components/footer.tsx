import { Layout } from "antd";

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
        position: "sticky",
        bottom: 0,
        background: "#001529",
        color: "#f6f6f6",
      }}
    >
      © 2024 International Journal Advanced Networking & Applications
    </Layout.Footer>
  );
};

export default Footer;
