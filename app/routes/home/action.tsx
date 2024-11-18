import { Button, Card, Col, Row, Typography } from "antd";
import { FileText, FileUp, Headset, PhoneCall } from "lucide-react";

const Action = () => {
  const buttonStyle = {
    backgroundColor: "#F6F2FF",
    height: "auto",
    borderRadius: "20px",
    width: "100%",
    border: "1px solid #000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
  };

  return (
    <Card
      type="inner"
      style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        border: "0.5px solid #fffdf4",
        marginTop: "10px",
        height: "auto",
      }}
    >
      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        <Col xs={24} sm={12} md={6}>
          <Button style={buttonStyle} aria-label="Call for Paper">
            <PhoneCall style={{ marginRight: "8px" }} />
            <Typography.Text strong>Call for Paper</Typography.Text>
          </Button>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Button style={buttonStyle} aria-label="Online Submission">
            <FileUp style={{ marginRight: "8px" }} />
            <Typography.Text strong>Online Submission</Typography.Text>
          </Button>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Button style={buttonStyle} aria-label="Latest Issue">
            <FileText style={{ marginRight: "8px" }} />
            <Typography.Text strong>Latest Issue</Typography.Text>
          </Button>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Button style={buttonStyle} aria-label="FAQs">
            <Headset style={{ marginRight: "8px" }} />
            <Typography.Text strong>FAQs</Typography.Text>
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Action;
{
  /* <Row style={{ marginTop: "20px" }}>
                <Typography style={{ fontWeight: "600", fontSize: "20px" }}>
                  The journal has an electronic ISSN (E-ISSN) of 0975-0282 and a
                  print ISSN (P-ISSN) of 0975-0290. It is published in English
                  on a bi-monthly basis and was established in 2009. Articles
                  submitted to the journal undergo a double-blind peer-review
                  process, where referees evaluate the submissions anonymously.
                  The time taken for the first decision ranges from 2 to 8 weeks
                  after the submission date. Acceptance may take anywhere from 4
                  to 15 weeks, depending on the number of required revision
                  cycles. Once the final version of a submission is ready,
                  publication generally occurs within 2 to 3 weeks in the
                  forthcoming issue. The current Editor-in-Chief of the journal
                  is Dr. E. Karthikeyan.
                </Typography>
              </Row> */
}
