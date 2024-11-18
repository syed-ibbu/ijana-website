import { Footer, Header } from "~/components";
import { Card, Layout, Row, Typography } from "antd";

export default function About() {
  return (
    <>
      <Header />
      <Layout.Content
        style={{
          background: "#f2f2f2",
          flex: 1,
          padding: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "1200px",
            height: "auto",
            background: "#f2f2f2",
            borderRadius: "10px",
          }}
        >
          <Row justify="center">
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Special Issues
            </Typography>
          </Row>
        </Card>
      </Layout.Content>
      <Footer />
    </>
  );
}
