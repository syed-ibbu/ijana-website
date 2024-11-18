import { Card, Col, Image, Row, Typography } from "antd";
import { MailQuestion } from "lucide-react";
import PropTypes from "prop-types";

const EditorialContent = ({
  name,
  department,
  collegeName,
  mailID,
  imgSrc,
  role,
}) => {
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
        <Row gutter={10}>
          <Col>
            <Row style={{ marginTop: "10px" }}>
              <Image
                style={{ border: "1px solid #e0e0e0" }}
                height="100px"
                width="100px"
                src={imgSrc}
                preview={false}
              />
            </Row>
          </Col>
          <Col>
            <Row>
              <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
                {name}
              </Typography>
            </Row>
            <Row style={{ marginTop: "3px" }}>
              <Typography style={{ fontWeight: "600" }}>{role}</Typography>
            </Row>
            <Row style={{ marginTop: "3px" }}>
              <Typography style={{ fontWeight: "600" }}>
                {department}
              </Typography>
            </Row>
            <Row style={{ marginTop: "3px" }}>
              <Typography style={{ fontWeight: "600" }}>
                {collegeName}
              </Typography>
            </Row>
            <Row
              style={{
                marginTop: "4px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <MailQuestion size="16px" />
              <Typography style={{ fontWeight: "600" }}>
                <a href={`mailto:${mailID}`}>{mailID}</a>
              </Typography>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  );
};

EditorialContent.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  collegeName: PropTypes.string.isRequired,
  mailID: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
};
export default EditorialContent;
