import { Card, Collapse, Row, Col, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const { Panel } = Collapse;

const Faq = () => {
  const [faqData, setFaqData] = useState([]);

  // Fetch the JSON file from the public folder
  useEffect(() => {
    fetch("/faq-ques-ans.json")
      .then((response) => response.json())
      .then((data) => setFaqData(data))
      .catch((error) => console.error("Error loading FAQ data:", error));
  }, []);

  return (
    <>
      <Card
        type="inner"
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "0.5px solid #fffdf4",
          marginTop: "10px",
          padding: "20px",
        }}
      >
        <Typography
          className="faq-title"
          style={{ fontWeight: "600", fontSize: "18px" }}
        >
          We`re sure you have questions about IJANA, so we`ve put together a
          list of the most frequently asked questions about us.
        </Typography>
        <Typography
          className="faq-title"
          style={{
            fontWeight: "600",
            fontSize: "18px",
            marginTop: "20px",
          }}
        >
          However, should you not find an answer, please{" "}
          <a href="Contact">contact us</a> and we`ll be more than happy to help.
        </Typography>

        {/* Row for the FAQs */}
        <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
          <Col xs={24} sm={24} md={24} lg={18} xl={16}>
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              style={{ background: "transparent" }}
              size="small"
            >
              {faqData.map((e, i) => (
                <Panel
                  key={i}
                  header={
                    <div style={{ fontWeight: "bold" }}>{e.question}</div>
                  }
                >
                  <Typography style={{ fontWeight: "600" }}>
                    Ans: {e.answer}
                  </Typography>
                </Panel>
              ))}
            </Collapse>
          </Col>
        </Row>
        <Typography
          style={{ fontWeight: "600", marginTop: "20px", fontSize: "18px" }}
        >
          If you have any more questions please do send a mail to :{" "}
          <a href="mailto:editor.ijana@gmail.com">editor.ijana@gmail.com</a> .
        </Typography>
      </Card>
    </>
  );
};

export default Faq;
