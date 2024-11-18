import { Card, Typography } from "antd";

const PublicationEthics = () => {
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
          The International Journal of Advanced Networking and Applications
          (IJANA) welcomes the interested researchers and academicians to join
          us as reviewers. Being a reviewer is a matter of prestige and
          personnel achievement. We follow the peer review policy guidelines for
          reviewing the papers while accepting them.
        </Typography>
        <ul style={{ listStyleType: "disc", marginLeft: "50px" }}>
          <li>
            <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
              The editors of IJANA, published by Eswar publications are
              responsible for deciding which of the articles submitted to the
              journal should be published. In evaluating the submitted works,
              the editors should limit themselves only to the intellectual
              content. The editors can choose to ignore any material that breaks
              legal requirements regarding libel, copyright infringement and
              plagiarism. The editors must ensure the confidentiality of the
              submitted works until they are published, except in the case of
              suspicion of double submission. In case the editors decide not to
              publish a material, the manuscript should not be used for other
              purposes without the express written consent of the author. The
              editor of a submitted manuscript must not have a stake in the
              authors.
            </Typography>
          </li>
          <li>
            <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
              The reviewers of the journal assist the editors in taking the
              decision of publishing a submitted manuscript. The reviewers are
              bound to treat the manuscript received for peer reviewing as
              confidential, and must not use the information obtained through
              peer review for personal advantage. The reviewers should not
              consider manuscripts in which they have conflicts of interest with
              any of the authors, companies, or institutions connected to the
              papers.
            </Typography>
          </li>
          <li>
            <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
              The authors should ensure that they have written entirely original
              works. When the authors use other materials, sources should be
              appropriately cited. Any attempt of plagiarism should be followed
              by the rejection of the submitted manuscript. Authors should not
              submit the same work or describe essentially the same research in
              more than one journal. Submitting the same manuscript to more than
              one journal concurrently constitutes unethical publishing
              behavior, unless otherwise specified.
            </Typography>
          </li>
        </ul>
      </Card>
    </>
  );
};
export default PublicationEthics;
