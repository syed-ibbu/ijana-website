import { Card, Row, Typography } from "antd";
import { ArrowBigDown } from "lucide-react";

const Guidelines = () => {
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
        <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
          Authors are expected to ensure that their works are original and are
          required to declare that this work has not been published before in
          any conference, journal or Book Chapter and not being considered for
          publication, that is simultaneous submission. Paper may a research
          paper, review article or survey paper related to networking.
        </Typography>
        <Row>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "10px",
            }}
          >
            Paper Preparation Formats:
          </Typography>
        </Row>
        <ul style={{ listStyleType: "disc", marginLeft: "50px" }}>
          <li>
            <Typography
              style={{ fontWeight: "600", marginTop: "5px", fontSize: "18px" }}
            >
              IJANA accepts an unpublished papers or extended and enhanced
              versions of papers presented at conferences may be submitted for
              possible publication.
            </Typography>
          </li>
          <li>
            <Typography
              style={{ fontWeight: "600", marginTop: "5px", fontSize: "18px" }}
            >
              Papers from applied research and development work with direct
              relevance to industries and case studies, critical overviews,
              short papers on the on-going research and development activities
              in Information Technology.
            </Typography>
          </li>
          <li>
            <Typography
              style={{ fontWeight: "600", marginTop: "5px", fontSize: "18px" }}
            >
              Download the Paper template from here.{" "}
              <a
                href="https://www.ijana.in/papers/Guidelines.doc"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Download Now <ArrowBigDown style={{ marginLeft: "5px" }} />
              </a>
            </Typography>
          </li>
          <li>
            <Typography
              style={{ fontWeight: "600", marginTop: "5px", fontSize: "18px" }}
            >
              Submit the papers to{" "}
              <a href="mailto:editor.ijana@gmail.com">editor.ijana@gmail.com</a>{" "}
              .
            </Typography>
          </li>
        </ul>
        <Row>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "10px",
            }}
          >
            Copyright:
          </Typography>
        </Row>
        <ul style={{ listStyleType: "disc", marginLeft: "50px" }}>
          <li>
            <Typography
              style={{ fontWeight: "600", marginTop: "5px", fontSize: "18px" }}
            >
              The condition of publication is that manuscripts submitted to the
              journal have not been published, accepted for publication, nor
              simultaneously submitted for publication elsewhere.
            </Typography>
          </li>
          <li>
            <Typography
              style={{ fontWeight: "600", marginTop: "5px", fontSize: "18px" }}
            >
              By submitting a manuscript, the author`s` agree that copyright for
              the article is transferred to the publisher, once the paper is
              accepted for publication.
            </Typography>
          </li>
          <li>
            <Typography
              style={{ fontWeight: "600", marginTop: "5px", fontSize: "18px" }}
            >
              Click to Download Copyright form.{" "}
              <a
                href="https://www.ijana.in/papers/Copy Right Form1.doc"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Download Now <ArrowBigDown style={{ marginLeft: "5px" }} />
              </a>
            </Typography>
          </li>
        </ul>
        <Row>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "10px",
            }}
          >
            Article Processing Charge:
          </Typography>
        </Row>
        <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
          We are not collecting any form fess such as Article Processing Charge
          or Publication Charges from the authors. The publication is completely
          free.
        </Typography>
        <Typography
          style={{ fontWeight: "600", fontSize: "18px", marginTop: "10px" }}
        >
          Publication Ethics & Publication Malpractice Statement:
        </Typography>
        <ul style={{ listStyleType: "disc", marginLeft: "50px" }}>
          <li>
            <Typography
              style={{ fontWeight: "600", marginTop: "5px", fontSize: "18px" }}
            >
              Publication Ethics & Publication Malpractice Statement (based on
              Elsevier recommendations and COPE`s Best Practice Guidelines for
              Journal Editors)
            </Typography>
          </li>
          <li>
            <Typography
              style={{ fontWeight: "600", marginTop: "5px", fontSize: "18px" }}
            >
              International Journal of Advanced Networking and Applications
              (IJANA) is committed to maintaining the highest ethical standards.
              In order to ensure the outcome of providing our readers with an
              academic journal of high quality, IJANA is guided by the following
              principles:
            </Typography>
          </li>
        </ul>
      </Card>
    </>
  );
};
export default Guidelines;
