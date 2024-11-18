import { Card, Row, Typography } from "antd";

const ReviewProcess = () => {
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
              Papers will be reviewed by two independent reviewers on the basis
              of technical quality, originality, significance, clarity and scope
              of further research.
            </Typography>
          </li>
          <li>
            <Typography
              style={{
                fontWeight: "600",
                fontSize: "18px",
                marginTop: "5px",
              }}
            >
              The editor evaluates the recommendation and notifies the author of
              the manuscript status. The manuscript may be:
            </Typography>
          </li>

          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "90px",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            <li>Accepted for publication as is</li>
            <li>
              Accepted for publication with minor changes, with no re-review
              necessary
            </li>
            <li>
              Accepted for publication after substantial revision and additional
              review, or
            </li>
            <li>Rejected.</li>
          </ul>
          <li>
            <Typography
              style={{
                fontWeight: "600",
                fontSize: "18px",
                marginTop: "5px",
              }}
            >
              The comments of the anonymous reviewers will be forwarded to the
              authors, and when the authors are ready to submit their revised
              manuscript, read the comments of the editors and reviewers, and
              respond to them by telling what modifications they have made in
              their manuscript or why they have not made the suggested changes.
              Note that revisions must be completed and submitted within two
              weeks after the authors received the reviewer`s comments.
            </Typography>
          </li>
        </ul>
        <Row>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "5px",
            }}
          >
            Page Proof
          </Typography>
        </Row>
        <ul style={{ listStyleType: "disc", marginLeft: "50px" }}>
          <li>
            <Typography
              style={{ fontWeight: "600", marginTop: "5px", fontSize: "18px" }}
            >
              The author`s of the accepted manuscript will receive a publication
              details like volume number, issue number, page number and months
              etc. It is the responsibility of the authors to make sure that the
              contents are correctly documented and formatted.
            </Typography>
          </li>
        </ul>
        <Row>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "5px",
            }}
          >
            Processing Fees
          </Typography>
        </Row>
        <ul style={{ listStyleType: "disc", marginLeft: "50px" }}>
          <li>
            <Typography
              style={{ fontWeight: "600", marginTop: "5px", fontSize: "18px" }}
            >
              We are not collecting any fees for publication of manuscript in
              any form, which means that it is a free un-paid journal.
            </Typography>
          </li>
        </ul>
      </Card>
    </>
  );
};
export default ReviewProcess;
