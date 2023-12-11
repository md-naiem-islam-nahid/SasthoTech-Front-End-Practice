import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import doctorImage from "../imgs/doctor.png";
import patientImage from "../imgs/patient.png";

const Welcome = ({color}) => {
  return (
    <Container  style={{ height: "677px", marginTop: "19px" }}>
      <Row 
        style={{
          padding: "0",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: 'wrap',
        }}
      >
        <Col
          xs={12}
          md={6}
          style={{ position: "relative", zIndex: "3", padding: "0 37.5px" }}
        >
          <div
            style={{
              position: "absolute",
              width: "453px",
              height: "389px",
              borderRadius: "20px",
              background: "#ffc567",
              top: "66px",
              left: "0px",
              zIndex: "1",
              marginTop: "33px",
            }}
          >
            <img
              src={doctorImage}
              alt="Doctor"
              style={{
                height: "424px",
                width: "auto",
                marginLeft: "40px",
                marginTop: "-35px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              width: "160px",
              height: "40px",
              paddingTop: "10px",
              top: "169px",
              left: "-63px",
              backgroundColor: "#fff",
              borderRadius: "5px",
              paddingLeft: "5px",
              zIndex: "2",
            }}
          >
            <img
              src={patientImage}
              alt="Patient badge"
              style={{
                width: "29px",
                height: "31px",
                marginLeft: "4px",
                marginTop: "0px",
                paddingRight: "5px",
              }}
            />
            <div
              style={{
                fontFamily: "Satoshi",
                fontSize: "14px",
                fontWeight: "500",
                paddingBottom:'10px',
              }}
            >
              More than 10K Patients treated
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "85px 0px 100px 0px",
            alignItems: "flex-start",
          }}
        >
          <h1
            style={{
              color: color,
              textAlign: "left",
              fontSize: "20px",
              fontWeight: "700",
              fontFamily: 'Satoshi',
            }}
          >
            Welcome to Medico Healthcare
          </h1>
          <p
            style={{
              color: "#000",
              marginTop: "0px",
              fontSize: "60px",
              fontWeight: "700",
              fontFamily: 'Satoshi',
            }}
          >
            Your Journey to <br /> Better Health <br />
            Starts Here
          </p>
          <Button
            style={{
              marginTop: "-20px",
              padding: "15px 20px",
              borderRadius: "10px",
              background: color,
              color: "#fff",
              fontSize: "20px",
              fontWeight: "700",
              border: "none",
              fontFamily: 'Satoshi',
            }}
          >
            Discover More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
