import { useEffect, useState } from "react";
import { Collapse, Table, Typography, Spin, Card, Row } from "antd";
import { CaretRightOutlined, CloudDownloadOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const { Panel } = Collapse;
const typoStyle = {
  fontWeight: "600",
  marginTop: "5px",
  fontSize: "18px",
};
// Define the types for your data

const SpecialIssues = () => {
  const [conferences, setConferences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/conferences.json")
      .then((response) => response.json())
      .then((data) => {
        setConferences(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Define table columns
  const columns = [
    {
      title: "Paper Details",
      dataIndex: "paperDetails",
      key: "paperDetails",
      render: (text: string) => (
        <span style={{ fontWeight: "600" }}>{text}</span>
      ),
    },
    {
      title: "Publisher",
      dataIndex: "publisherName",
      key: "publisherName",
      render: (text: string) => (
        <span style={{ color: "#1890ff", fontWeight: "600" }}>{text}</span>
      ),
    },
    {
      title: "CrossRef",
      dataIndex: "crossRef",
      key: "crossRef",
      render: (text: string) => (
        <span style={{ fontWeight: "600" }}>{text}</span>
      ),
    },
    {
      title: "Pages",
      dataIndex: "pageCount",
      key: "pageCount",
      render: (text: string) => (
        <span style={{ fontWeight: "600" }}>{text}</span>
      ),
    },
    {
      title: "Download",
      dataIndex: "download",
      key: "download",
      render: (_, record) => (
        <a href={record.crossRef} download>
          <CloudDownloadOutlined style={{ fontSize: "28px" }} />
        </a>
      ),
    },
  ];

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spin />
        <Typography.Text>Loading data...</Typography.Text>
      </div>
    );
  }

  return (
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
          <Typography style={typoStyle}>
            IJANA welcomes a proposal from academician to bring out a special
            issue of the journal.
          </Typography>
        </li>
        <li>
          <Typography style={typoStyle}>
            Selected best papers may be considered for publication in the
            special issue.
          </Typography>
        </li>
      </ul>
      <Row style={{ marginTop: "20px" }}>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{ background: "transparent" }}
          size="small"
        >
          {conferences.map((conference, index) => (
            <Panel
              header={
                <div style={{ fontWeight: "bold" }}>{conference.title}</div>
              }
              key={index}
            >
              <Table
                dataSource={conference.data}
                columns={columns}
                pagination={false}
                rowKey="key"
                bordered
              />
            </Panel>
          ))}
        </Collapse>
      </Row>
    </Card>
  );
};
SpecialIssues.propTypes = {
  key: PropTypes.string.isRequired,
  paperDetails: PropTypes.string.isRequired,
  publisherName: PropTypes.string.isRequired,
  crossRef: PropTypes.string.isRequired,
  pageCount: PropTypes.string.isRequired,
};

export default SpecialIssues;
