import React from "react";
import { Card, Typography, Col, Row } from "antd";

const { Title } = Typography;

const typoStyle = {
  fontWeight: "600",
  marginTop: "5px",
  fontSize: "18px",
};

const AimScope = () => {
  return (
    <>
      <Card
        type="inner"
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "0.5px solid #fffdf4",
          marginTop: "10px",
          padding: "20px",
        }}
      >
        <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
          IJANA welcomes unpublished papers or extended and enhanced versions of
          papers presented at conferences for possible publication. Papers of
          applied research and development work with direct relevance to
          industries and case studies, critical overviews, short papers on the
          ongoing research and development activities in the area of Networking
          and Applications will be given preference. The Papers are invited in
          the following topics:
        </Typography>

        <Row gutter={[16, 16]} justify="start" style={{ marginTop: "20px" }}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                <Typography style={typoStyle}>
                  Autonomic Computing and Communication.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Multimedia Networking and Video Streaming.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Cellular and Wireless Communication.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Network Management and Administration.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Communication Protocol and Architecture.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Network Security and Cryptography.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Congestion Control Mechanisms.
                </Typography>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                <Typography style={typoStyle}>
                  Network Performance Analysis & Evaluation.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Electronic Commerce and Its Applications.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Parallel, Distributed and Grid Computing.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  High-Speed Communication and Network.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Protocol Verification and Validation.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Intelligent Networking.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Quality Of Services (QoS) Parameters.
                </Typography>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                <Typography style={typoStyle}>
                  Information Theory & Information Systems.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Routing and Traffic Management.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Internet and Web Technologies.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Satellite and Mobile Communications.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Innovative Networking and Applications.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Social, Ethical Issues Of Networked World.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Mobile Ad-Hoc and Sensor Network.
                </Typography>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                <Typography style={typoStyle}>
                  Low-Power Network & Embedded System.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Virtual Private Networks.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Multimedia Networking and Video Streaming.
                </Typography>
              </li>
              <li>
                <Typography style={typoStyle}>
                  Voice Over Internet Protocol.
                </Typography>
              </li>
            </ul>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default AimScope;
