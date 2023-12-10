import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { ArrowIcon } from "./ArrowIcon";
import logo from "../imgs/medico.png";
import womanWithLaptop from "../imgs/styleimg1.png";

const HealthCheckupPlans = () => {
  return (
    <Container
      fluid
      style={{
        height: "977px",
        padding: "0px 190px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <header style={{ padding: "20px", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "40px",
              marginBottom: "10px",
              color: "#091e29",
              fontWeight: "700",
              fontFamily: 'Satoshi',
            }}
          >
            Health Checkup Plans
          </h1>
          <p style={{ color: "#091e29", fontSize: "18px", fontWeight: "500", fontFamily: 'Satoshi', }}>
            They live in Bookmarks grove right at the coast of the Semantics, a
            large language ocean named flows.
          </p>
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              padding: "40px",
              justifyContent: "center",
              gap: "10px",
              borderRadius: "10px",
            }}
          >
            <Button
              style={{
                backgroundColor: "rgb(57, 190, 190)",
                border: "none",
                borderRadius: "10px",
                color: "black",
                padding: "15px 20px",
                fontWeight: "700",
                fontSize: "20px",
                fontFamily: 'Satoshi',
              }}
            >
              Woman Health
            </Button>
            <Button
              style={{
                backgroundColor: "rgb(57, 190, 190)",
                border: "none",
                borderRadius: "10px",
                color: "black",
                padding: "15px 20px",
                fontWeight: "700",
                fontSize: "20px",
                fontFamily: 'Satoshi',
              }}
            >
              Cancer Screening
            </Button>
            <Button
              style={{
                backgroundColor: "rgb(57, 190, 190)",
                border: "none",
                borderRadius: "10px",
                color: "black",
                padding: "15px 20px",
                fontWeight: "700",
                fontSize: "20px",
                fontFamily: 'Satoshi',
              }}
            >
              Kids Vaccines
            </Button>
          </div>
        </header>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
            alignItems: "flex-start",
          }}
        >
          <Col
            md={6}
            style={{
              padding: "20px",
              paddingLeft: "0px",
              borderRadius: "10px",
            }}
          >
            <Image
              src={logo}
              alt="Medico Logo"
              style={{
                backgroundColor: "teal",
                padding: "10px",
                borderRadius: "50%",
                width: "36px",
              }}
            />
            <h2
              style={{ color: "#091e29", fontSize: "32px", fontWeight: "700", fontFamily: 'Satoshi', }}
            >
              Women Health Checkup
            </h2>
            <p
              style={{ color: "#091e29", fontSize: "18px", fontWeight: "500", fontFamily: 'Satoshi', }}
            >
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring.
            </p>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "21px",
                listStyleType: "none",
                color: "#091e29",
                fontSize: "18px",
                fontWeight: "500",
                marginLeft: "-40px",
                fontFamily: 'Satoshi',
              }}
            >
              <li>
                <ArrowIcon /> Complete Blood Count with ESR
              </li>
              <li>
                <ArrowIcon /> Lipid Profile, Live Profile, kidney Profile{" "}
              </li>
              <li>
                <ArrowIcon /> USG Abdomen with Pelvis, Mammography
              </li>
            </ul>
            <Button
              style={{
                backgroundColor: "rgb(58, 175, 175)",
                border: "none",
                borderRadius: "10px",
                color: "white",
                marginTop: "30px",
                padding: "15px 20px",
                fontWeight: "700",
                fontSize: "20px",
                fontFamily: 'Satoshi',
              }}
            >
              Take An Appointment
            </Button>
          </Col>
          <Col md={6} style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                backgroundColor: "#ffc567",
                width: "362px",
                height: "111px",
                bottom: "4px",
                left: "140px",
                borderRadius: "20px",
                zIndex: "1",
              }}
            ></div>
            <Image
              src={womanWithLaptop}
              alt="Woman with Laptop"
              style={{
                position: "relative",
                width: "auto",
                height: "100%",
                borderRadius: "10px",
                zIndex: "2",
              }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HealthCheckupPlans;
