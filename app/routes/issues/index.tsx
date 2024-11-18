import { Header, Footer } from "~/components";
import { Card, Divider, Layout, Row, Typography } from "antd";
import ArchiveVolume from "./archive-volume";
import SpecialIssues from "./special-issues";
export default function Issues() {
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
          <SpecialIssues />
          <Divider
            variant="dashed"
            type="horizontal"
            style={{
              borderColor: "#e0e0e0",
            }}
          />

          <Row justify="center">
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Archive Volumes
            </Typography>
          </Row>

          <ArchiveVolume />
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
