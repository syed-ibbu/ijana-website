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
              href={`https://https://ijana.in`}
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
      dataIndex: "issues",
      key: "issues",
    },
  ];

  const dataSource = [
    {
      key: 1,
      volume: "Volume - 1",
      year: "2009 - 2010",
      issues: "Published by: - IJANA",
    },
    {
      key: 2,
      volume: "Volume - 2",
      year: "2010 - 2011",
      issues: "Published by: - IJANA",
    },
    {
      key: 3,
      volume: "Volume - 3",
      year: "2011 - 2012",
      issues: "Published by: - IJANA",
    },
    {
      key: 4,
      volume: "Volume - 4",
      year: "2012 - 2013",
      issues: "Published by: - IJANA",
    },
    {
      key: 5,
      volume: "Volume - 5",
      year: "2013 - 2014",
      issues: "Published by: - IJANA",
    },
    {
      key: 6,
      volume: "Volume - 6",
      year: "2014 - 2015",
      issues: "Published by: - IJANA",
    },
    {
      key: 7,
      volume: "Volume - 7",
      year: "2015 - 2016",
      issues: "Published by: - IJANA",
    },
    {
      key: 8,
      volume: "Volume - 8",
      year: "2016 - 2017",
      issues: "Published by: - IJANA",
    },
    {
      key: 9,
      volume: "Volume - 9",
      year: "2017 - 2018",
      issues: "Published by: - IJANA",
    },
    {
      key: 10,
      volume: "Volume - 10",
      year: "2018 - 2019",
      issues: "Published by: - IJANA",
    },
    {
      key: 11,
      volume: "Volume - 11",
      year: "2019 - 2020",
      issues: "Published by: - IJANA",
    },
    {
      key: 12,
      volume: "Volume - 12",
      year: "2020 - 2021",
      issues: "Published by: - IJANA",
    },
    {
      key: 13,
      volume: "Volume - 13",
      year: "2021 - 2022",
      issues: "Published by: - IJANA",
    },
    {
      key: 14,
      volume: "Volume - 14",
      year: "2022 - 2023",
      issues: "Published by: - IJANA",
    },
    {
      key: 15,
      volume: "Volume - 15",
      year: "2023 - 2024",
      issues: "Published by: - IJANA",
    },
    {
      key: 16,
      volume: "Volume - 16",
      year: "2024 - 2025",
      issues: "Published by: - IJANA",
    },
  ];

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
        />
      </Card>
    </>
  );
};
export default ArchiveVolume;
