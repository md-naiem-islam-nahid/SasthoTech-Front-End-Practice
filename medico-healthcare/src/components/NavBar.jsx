import React, { useState } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import MedicoLogo from "../imgs/medico.png";

const NavBar = () => {

 
  const [hoverIndex, setHoverIndex] = useState(-1);


  return (
    <Container fluid style={{ marginTop: "31px", padding: "0px 152px" }}>
      <Row
        style={{
          borderRadius: "7px",
          height: "55px",
          boxShadow: "1px 1px 1px 1px rgba(0.1, 0.1, 0.1, 0.1)",
          display: "flex",
          alignItems: "center",
          padding: "20px 28px",
          justifyContent: "space-between",
        }}
      >
        <Col style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={MedicoLogo}
            alt="Medico Logo"
            style={{ width: "23px", height: "23px" }}
          />
          <span style={{ color: "#000", fontSize: "20px", fontWeight: "700",  fontFamily: 'Satoshi',}}>
            Medico
          </span>
        </Col>
        <Col>
          <Nav
            className="justify-content-end"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              fontFamily: 'Satoshi',
            }}
          >
            {['Home', 'About', 'Health Checkup', 'Doctors', 'Departments'].map((item, index) => (
              <Nav.Item
                key={item}
                style={{
                  color: hoverIndex === index ? "#00a0aa" : "#000",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "0 12.5px",
                  cursor: "pointer",
                  fontFamily: 'Satoshi',
                  backgroundColor: hoverIndex === index ? "#e9ecef" : "transparent",
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(-1)}
              >
                {item}
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col
          md="auto"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <FiPhoneCall size="20px" />
          <span style={{ color: "#000", fontSize: "20px", fontWeight: "700",  fontFamily: 'Satoshi',}}>
            1005-346-272
          </span>
        </Col>
        <Col md="auto">
          <Button
            style={{
              borderRadius: "10px",
              background: "#00a0aa",
              border: "none",
              padding: "15px 20px",
              color: "#FFF",
              fontSize: "20px",
              fontWeight: "700",
              fontFamily: 'Satoshi',
            }}
          >
            Appointment
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
