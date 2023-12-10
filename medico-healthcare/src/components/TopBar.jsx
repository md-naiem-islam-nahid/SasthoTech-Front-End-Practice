import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  const iconStyle = { color: "#F8F9FE", fontSize: "18px", fontWeight: "500" };
  const whatsappStyle = {
    color: "#F8F9FE",
    fontSize: "16px",
    fontWeight: "700",

  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "teal",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row style={{ width: "100%", padding: "0 156px" }}>
        <Col
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              ...iconStyle,
              display: "flex",
              alignItems: "center",
              gap: "20px",
              columnGap: "48px",
              fontFamily: 'Satoshi',
            }}
          >
            <MdLocationOn size="27px" /> 90919 Madie run Apt. 790
            <AiOutlineMail size="27px" /> medico@health.care
          </div>
          <div
            style={{
              ...whatsappStyle,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: 'Satoshi',
            }}
          >
            <FaWhatsapp size="32px" /> Connect on Whatsapp
          </div>
        </Col>
      </Row>
    </Container>
  );
}
