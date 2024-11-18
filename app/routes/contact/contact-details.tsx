import { Card, Col, Image, Row, Typography } from "antd";
import { Mail, PhoneCall } from "lucide-react";

const ContactDetails = () => {
  return (
    <>
      <Card
        type="inner"
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "0.5px solid #fffdf4",
          marginTop: "10px",
        }}
      >
        <Row>
          <Col span={16}>
            <Row>
              <Typography style={{ fontWeight: "bold", fontSize: "30px" }}>
                Eswar Publications,
              </Typography>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
                W-3/133-C, Sivasakthi Colony,Udumalpet-642126,
              </Typography>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
                Tiruppur Dist,Tamil Nadu. India.
              </Typography>
            </Row>

            <Row style={{ marginTop: "40px" }}>
              <Col span={2}>
                <PhoneCall />
              </Col>
              <Col>
                <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
                  +91 9080204827 / +91 9443845784
                </Typography>
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col span={2}>
                <Mail />
              </Col>
              <Col>
                <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
                  <a href="mailto:editor.ijana@gmail.com">
                    editor.ijana@gmail.com
                  </a>{" "}
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Image
              width="auto"
              height="auto"
              src="./india_flag.webp"
              preview={false}
              style={{ border: "1px solid #e0e0e0" }}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ContactDetails;
