import { Layout } from "antd";
import { Header, Footer } from "../components";

export default function Index() {
  return (
    <>
      <Header />
      <Layout.Content
        style={{
          padding: "24px",
          background: "#f6f6f6",
          flex: 1,
          overflowY: "auto",
        }}
      >
        <p>Home</p>
      </Layout.Content>
      <Footer />
    </>
  );
}
