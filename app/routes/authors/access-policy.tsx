import { Card, Typography } from "antd";

const AccessPolicy = () => {
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
        <ul style={{ listStyleType: "disc", marginLeft: "50px" }}>
          <li>
            <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
              International Journal of Advanced Networking and Applications
              (IJANA) is an open access publication which means that all
              published manuscripts are freely available for unlimited access.
            </Typography>
          </li>
          <li>
            <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
              Open access publishing provides immediate, worldwide free access
              to all published manuscripts. Readers can view, download, print,
              and redistribute any article without any financial barrier,
              enabling greater distribution of an article.
            </Typography>
          </li>
          <li>
            <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
              This is a non commercial license where the use of published
              articles for commercial purposes is prohibited.
            </Typography>
          </li>
        </ul>
      </Card>
    </>
  );
};
export default AccessPolicy;
