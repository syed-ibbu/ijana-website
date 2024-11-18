import { Card, Col, Divider, Image, Layout, Row, Typography } from "antd";
import { Header, Footer } from "../components";
import AimScope from "./home/aim-scope";
import Action from "./home/action";

export default function Index() {
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
          <Row gutter={10}>
            <Col xs={24} md={16}>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "90px",
                  lineHeight: "90px",
                }}
              >
                International Journal Advanced Networking and Applications
              </Typography>
            </Col>
            <Col xs={24} md={8}>
              <Image
                width="100%"
                height={380}
                src="./ijana.webp"
                preview={false}
                style={{ border: "1px solid #e0e0e0" }}
              />
            </Col>
          </Row>
          <Divider
            variant="dashed"
            type="horizontal"
            style={{
              borderColor: "#e0e0e0",
            }}
          />
          <Row>
            <Typography
              style={{
                marginTop: "5px",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              The International Journal of Advanced Networking and Applications
              (IJANA) is an international open access journal, published SIX
              times in a year by Eswar Publications since 2009. The journal
              welcomes research contributions, surveys and notes in all areas
              relating to computer networks and its applications thereof. It
              would aim to provide an interactive and dynamic forum for
              professionals, researchers and academicians for knowledge sharing
              and dissemination especially innovations and strategies as applied
              to information and communications technologies, applications etc,.
            </Typography>
          </Row>
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
              Aim and Scope
            </Typography>
          </Row>
          <AimScope />
          <Divider
            variant="dashed"
            type="horizontal"
            style={{
              borderColor: "#e0e0e0",
            }}
          />
          <Action />
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
