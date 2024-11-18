import { Card, Col, Image, Row, Typography } from "antd";

const branches = [
  {
    country: "USA",
    company: "Eswar Publications",
    address: "132 Colony Club Drive, Sayreville, NJ 08872, USA",
    flagSrc: "./usa_flag.webp",
  },
  {
    country: "Australia",
    company: "Eswar Publications",
    address:
      "13/74 St. Hilliers Rd, Auburn, New South Wales State, Australia -2144",
    flagSrc: "./aus_flag.webp",
  },
];

const Branches = () => {
  return (
    <Row gutter={10} justify={"space-between"}>
      {branches.map((branch, index) => (
        <Col span={12} key={index}>
          <Card
            type="inner"
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              border: "0.5px solid #fffdf4",
              marginTop: "10px",
              height: "210px",
            }}
          >
            <Row>
              <Col span={12}>
                <Row>
                  <Typography style={{ fontWeight: "700", fontSize: "20px" }}>
                    {branch.country}
                  </Typography>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                  <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
                    {branch.company},
                  </Typography>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                  <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
                    {branch.address}
                  </Typography>
                </Row>
              </Col>
              <Col span={12}>
                <Image
                  src={branch.flagSrc}
                  preview={false}
                  style={{ border: "1px solid #e0e0e0" }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Branches;
