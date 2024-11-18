import { Header, Footer } from "~/components";
import { Button, Card, Divider, Layout, Row, Typography } from "antd";
import ContactDetails from "./contact-details";
import Branches from "./branches";
import FeedbackForm from "./feedback-form";
import { useState } from "react";
import { Heart } from "lucide-react";
export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Header />
      <Layout.Content
        style={{
          background: "#f2f2f2",
          flex: 1,
          padding: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "1200px",
            height: "auto",
            background: "#f2f2f2",
            borderRadius: "10px",
          }}
        >
          <Row justify="center">
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Contact Us
            </Typography>
          </Row>
          <ContactDetails />
          <Divider
            variant="dashed"
            type="horizontal"
            style={{
              borderColor: "#e0e0e0",
            }}
          />
          <Row justify="center" style={{ marginTop: "20px" }}>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Branch Offices
            </Typography>
          </Row>

          <Branches />
          <Divider
            variant="dashed"
            type="horizontal"
            style={{
              borderColor: "#e0e0e0",
            }}
          />
          <Row justify="center" style={{ marginTop: "20px" }}>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Feedback Form
            </Typography>
          </Row>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={openModal}
              style={{
                backgroundColor: "#F6F2FF",
                height: "auto",
                borderRadius: "20px",
                border: "1px solid #000",
              }}
            >
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                Better Us
                <Heart className="blinking-heart" />
              </Typography>
            </Button>
            <FeedbackForm isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <Divider
            variant="dashed"
            type="horizontal"
            style={{
              borderColor: "#e0e0e0",
            }}
          />
        </Card>
      </Layout.Content>
      <Footer />
    </>
  );
}
