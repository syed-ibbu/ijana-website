import React from "react";
import { Modal, Form, Input, Button, Rate, Typography } from "antd";
import PropTypes from "prop-types";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const FeedbackForm = ({ isOpen, onClose }) => {
  type FormValues = {
    name: string;
    email: string;
    feedback: string;
  };

  const onFinish = (values: FormValues) => {
    console.log("Feedback submitted:", values);
    onClose();
  };

  return (
    <Modal
      title={
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography style={{ fontWeight: "bold" }}>FEEDBACK FORM</Typography>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={null}
    >
      <Form
        size="small"
        labelAlign="left"
        colon={false}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item label="Name" name="name">
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: "email", message: "Please enter a valid email!" }]}
        >
          <Input type="email" placeholder="Enter your email" />
        </Form.Item>
        <Form.Item label="Mobile No" name="number">
          <Input placeholder="Enter your mobile no" />
        </Form.Item>
        <Form.Item
          label="How satisfied are you with our service?"
          name="ratings"
        >
          <Rate
            defaultValue={3}
            character={({ index = 0 }) => customIcons[index + 1]}
          />
        </Form.Item>
        <Form.Item label="Feedback" name="feedback">
          <Input.TextArea placeholder="Enter your feedback" rows={4} />
        </Form.Item>
        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              backgroundColor: "#F6F2FF",
              height: "auto",
              borderRadius: "20px",
              border: "1px solid #000",
            }}
            htmlType="submit"
          >
            <Typography style={{ fontWeight: "bold" }}>Submit</Typography>
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

FeedbackForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FeedbackForm;
