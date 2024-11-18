import { Footer, Header } from "~/components";
import { Card, Divider, Layout, Row, Typography } from "antd";
import PublicationEthics from "./publication-ethics";
import PlagiarismPolicy from "./plagiarism-policy";
import Guidelines from "./guidelines";
import AccessPolicy from "./access-policy";

export default function Authors() {
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
              Instruction for Authors
            </Typography>
          </Row>
          <Guidelines />

          <Divider
            variant="dashed"
            type="horizontal"
            style={{
              borderColor: "#e0e0e0",
            }}
          />
          <Row justify="center" style={{ marginTop: "20px" }}>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Publication Ethics
            </Typography>
          </Row>

          <PublicationEthics />
          <Divider
            variant="dashed"
            type="horizontal"
            style={{
              borderColor: "#e0e0e0",
            }}
          />
          <Row justify="center" style={{ marginTop: "20px" }}>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Plagiarism Policy
            </Typography>
          </Row>

          <PlagiarismPolicy />
          <Divider
            variant="dashed"
            type="horizontal"
            style={{
              borderColor: "#e0e0e0",
            }}
          />
          <Row justify="center" style={{ marginTop: "20px" }}>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Open Access Policy
            </Typography>
          </Row>
          <AccessPolicy />
          <Divider
            variant="dashed"
            type="horizontal"
            style={{
              borderColor: "#e0e0e0",
            }}
          />
        </Card>
      </Layout.Content>
      <Footer />
    </>
  );
}
