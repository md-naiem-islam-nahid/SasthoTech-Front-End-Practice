import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import logo from "../imgs/medico.png";

const Footer = ({color}) => {
  return (
    <Container fluid style={{ height: "437px", backgroundColor: "#026cdd" }}>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          background: color,
          padding: "100px 169px 50px 170px",
          fontFamily: 'Satoshi',
        }}
      >
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            height: "221px",
            padding: "20px",
            columnGap: "75px",
          }}
        >
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                
              }}
            >
              <img
                src={logo}
                alt="Medico Logo"
                style={{ width: "37px", height: "37px", marginRight: "10px" }}
              />
              <p style={{ color: "#fff", fontSize: "24px", fontWeight: "700" }}>
                Medico
              </p>
            </div>
            <Button
              variant="outline-light"
              style={{
                marginTop: "10px",
                width: "285px",
                height: "56px",
                fontSize: "20px",
                fontWeight: "700",
                fontFamily: 'Satoshi',
                borderRadius:'10px',
              }}
            >
              <FaArrowRight style={{ paddingRight: "20px",  }} /> Take an
              Appointment
            </Button>
            <Button
              variant="outline-light"
              style={{
                marginTop: "10px",
                width: "285px",
                height: "56px",
                fontSize: "20px",
                fontWeight: "700",
                fontFamily: 'Satoshi',
                borderRadius:'10px',
              }}
            >
              <FaWhatsapp /> Connect on Whatsapp
            </Button>
          </Col>
          <FooterSection
            title="SERVICES"
            items={["Pathology", "Ambulance", "Radiology", "Pharmacy"]}
          />
          <FooterSection
            title="HEALTH CHECKUP"
            items={[
              "Woman Health",
              "Cancer Screening",
              "Cardiac Health",
              "MRI Checkup",
            ]}
          />
          <FooterSection
            title="DEPARTMENTS"
            items={["General", "Dermatology", "Cardiology", "Cancer"]}
          />
          <FooterSection title="QUICK LINKS" items={["License", "Changelog"]} />
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0",
            listStyleType: "none",
          }}
        >
          <SocialIcon
            url="https://www.facebook.com"
            fgColor="#FFFFFF"
            style={{ height: "35px", width: "35px", marginRight: "17px" }}
          />
          <SocialIcon
            url="https://www.twitter.com"
            fgColor="#FFFFFF"
            style={{ height: "35px", width: "35px", marginRight: "17px" }}
          />
          <SocialIcon
            url="https://www.pinterest.com"
            fgColor="#FFFFFF"
            style={{ height: "35px", width: "35px", marginRight: "17px" }}
          />
          <SocialIcon
            url="https://www.instagram.com"
            fgColor="#FFFFFF"
            style={{ height: "35px", width: "35px", marginRight: "17px" }}
          />
        </Row>
      </Container>
    </Container>
  );
};

const FooterSection = ({ title, items }) => (
  <Col
    style={{
      color: "#fff",
      textAlign: "start",
      fontSize: "18px",
      fontWeight: "500",
      fontFamily:"Satoshi",
    }}
  >
    <p>{title}</p>
    <ul style={{ listStyleType: "none", padding: "0" }}>
      {items.map((item, index) => (
        <li
          key={index}
          style={{
            paddingTop: "10px",
            color: "#fff",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  </Col>
);

export default Footer;
