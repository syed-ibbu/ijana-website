import { Card, Row, Typography } from "antd";
import { ArrowBigDown } from "lucide-react";

const PlagiarismPolicy = () => {
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
              Plagiarism is defined as presenting another person`s work as one`s
              own work. Presentation includes copying or reproducing it without
              the acknowledgement of the source. All of the following are
              considered plagiarism:
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
            <li>turning in someone else`s work as your own</li>
            <li>
              copying words or ideas from someone else without giving credit
            </li>
            <li>failing to put a quotation in quotation marks</li>
            <li>
              giving incorrect information about the source of a quotation
            </li>
            <li>
              changing words but copying the sentence structure of a source
              without giving credit
            </li>
            <li>
              copying so many words or ideas from a source that it makes up the
              majority of your work, whether you give credit or not (see our
              section on `fair use` rules)
            </li>
          </ul>
          <li>
            <Typography
              style={{
                fontWeight: "600",
                fontSize: "18px",
                marginTop: "5px",
              }}
            >
              All the authors are requested to follow the standard plagiarism
              policy and submit their papers for publications. More can be seen
              by downloading UGC plagiarism policy by clicking here{" "}
              <a
                href="https://www.ijana.in/papers/Ethics.pdf"
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
      </Card>
    </>
  );
};
export default PlagiarismPolicy;
