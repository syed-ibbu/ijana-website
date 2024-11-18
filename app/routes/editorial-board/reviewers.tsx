import { Card, Typography } from "antd";

const Reviewers = () => {
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
              The International Journal of Advanced Networking and Applications
              (IJANA) welcomes the interested researchers and academicians to
              join us as reviewers. Being a reviewer is a matter of prestige and
              personnel achievement. We follow the peer review policy guidelines
              for reviewing the papers while accepting them.
            </Typography>
          </li>
          <li>
            <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
              Interested person can send their resume to{" "}
              <a href="mailto:editor.ijana@gmail.com">editor.ijana@gmail.com</a>{" "}
              for considering the reviewers.
            </Typography>
          </li>
        </ul>
      </Card>
    </>
  );
};
export default Reviewers;
