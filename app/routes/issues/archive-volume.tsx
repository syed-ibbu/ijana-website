import { Card, Table } from "antd";

const ArchiveVolume = () => {
  const columns = [
    {
      title: "VOLUMES",
      children: [
        {
          title: "Volume",
          dataIndex: "volume",
          key: "volume",
          render: (volume) => (
            <a
              href={`https://ijana.in`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "none" }}
            >
              {volume}
            </a>
          ),
        },
        {
          title: "Year",
          dataIndex: "year",
          key: "year",
        },
      ],
    },
    {
      title: "PUBLISHER",
      dataIndex: "Publisher",
      key: "Publisher",
    },
  ];

  const expandColumns = [
    {
      title: "Issues",
      dataIndex: "Issue",
      key: "Issue",
      // render: (volume) => (
      //   <a
      //     href={`https://ijana.in`}
      //     target="_blank"
      //     rel="noopener noreferrer"
      //     style={{ color: "blue", textDecoration: "none" }}
      //   >
      //     {volume}
      //   </a>
      // ),
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
  ];

  const expandDataSource = [
    {
      key: 1,
      Issue: "Issue 1",
      year: `Jul-Aug 2009`,
    },
    {
      key: 2,
      Issue: "Issue 2",
      year: `Sep-Oct 2009`,
    },
    {
      key: 3,
      Issue: "Issue 3",
      year: `Nov-Dec 2009`,
    },
    {
      key: 4,
      Issue: "Issue 4",
      year: `Jan-Feb 2010`,
    },
    {
      key: 5,
      Issue: "Issue 5",
      year: `Mar-Apr 2010`,
    },
    {
      key: 6,
      Issue: "Issue 6",
      year: `May-Jun 2010`,
    },
  ];

  const dataSource = [
    {
      key: 1,
      volume: "Volume - 1",
      year: "2009 - 2010",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 2,
      volume: "Volume - 2",
      year: "2010 - 2011",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 3,
      volume: "Volume - 3",
      year: "2011 - 2012",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 4,
      volume: "Volume - 4",
      year: "2012 - 2013",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 5,
      volume: "Volume - 5",
      year: "2013 - 2014",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 6,
      volume: "Volume - 6",
      year: "2014 - 2015",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 7,
      volume: "Volume - 7",
      year: "2015 - 2016",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 8,
      volume: "Volume - 8",
      year: "2016 - 2017",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 9,
      volume: "Volume - 9",
      year: "2017 - 2018",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 10,
      volume: "Volume - 10",
      year: "2018 - 2019",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 11,
      volume: "Volume - 11",
      year: "2019 - 2020",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 12,
      volume: "Volume - 12",
      year: "2020 - 2021",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 13,
      volume: "Volume - 13",
      year: "2021 - 2022",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 14,
      volume: "Volume - 14",
      year: "2022 - 2023",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 15,
      volume: "Volume - 15",
      year: "2023 - 2024",
      Publisher: "Published by: - IJANA",
    },
    {
      key: 16,
      volume: "Volume - 16",
      year: "2024 - 2025",
      Publisher: "Published by: - IJANA",
    },
  ];

  const expandedRowRender = () => (
    <Table
      columns={expandColumns}
      pagination={false}
      dataSource={expandDataSource}
      bordered
    />
  );

  return (
    <>
      <Card
        type="inner"
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "0.5px solid #fffdf4",
          marginTop: "10px",
          height: "auto",
        }}
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          bordered
          expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
        />
      </Card>
    </>
  );
};
export default ArchiveVolume;
