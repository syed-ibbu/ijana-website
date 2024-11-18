import { Header, Footer } from "~/components";
import { Card, Col, Divider, Layout, Row, Typography } from "antd";
import EditorialContent from "./editorial-content";
import ReviewProcess from "./review-process";
import Reviewers from "./reviewers";
import BoardMembers from "./board-members/board-members.json";
export default function Editorial() {
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
              Editor-in-Chief
            </Typography>
          </Row>
          {/* <Divider
            variant="dashed"
            type="horizontal"
            style={{
              borderColor: "#e0e0e0",
            }}
          /> */}

          <EditorialContent
            name="Dr. E.Karthikeyan"
            role="Professor"
            department="Department of Computer Science"
            collegeName="GAC Udumalpet, Bharathiar University, India"
            mailID="e_karthi@yahoo.com"
            imgSrc="./Karthikeyan.png"
          />
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
              Associate Editor-in-Chief
            </Typography>
          </Row>

          <Row gutter={10}>
            {BoardMembers.map((e, index) => (
              <Col span={12} key={index}>
                <EditorialContent
                  name={e.name}
                  role={e.role}
                  department={e.department}
                  collegeName={e.collegeName}
                  mailID={e.mailID}
                  imgSrc={e.imgSrc}
                />
              </Col>
            ))}
          </Row>
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
              Review Process
            </Typography>
          </Row>

          <ReviewProcess />
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
              Reviewers
            </Typography>
          </Row>
          <Reviewers />
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
