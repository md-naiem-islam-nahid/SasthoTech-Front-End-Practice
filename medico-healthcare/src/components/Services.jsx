import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import ser1 from "../imgs/service1.png";
import ser2 from "../imgs/service2.png";
import ser3 from "../imgs/service3.png";
import ser4 from "../imgs/service4.png";

const Services = () => {
  return (
    <Container
      fluid
      style={{ height: "900px", padding: "100px 160px", display: "flex" }}
    >
      <Container
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            color: "#09a4ad",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "normal",
          }}
        >
          SERVICES & TREATMENTS
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              color: "#000",
              width: "550px",
              fontSize: "46px",
              lineHeight: "normal",
            }}
          >
            More than 40 specialty and health care services
          </h1>
          <Button
            style={{
              padding: "15px 20px",
              fontSize: "16px",
              backgroundColor: "#00a0aa",
              color: "white",
              border: "none",
              borderRadius: "10px",
              marginBottom: "40px",
            }}
          >
            See All Services
          </Button>
        </div>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
            margin: "0px 20px",
            rowGap: "10px",
            flexWrap:"wrap",
          }}
        >
          <Row
            style={{ display: "flex", marginBottom: "20px", columnGap: "30px" ,}}
          >
            {[ser1, ser2].map((service, index) => (
              <Col
                key={index}
                style={{
                  backgroundColor: "#f1efef",
                  padding: "20px",
                  borderRadius: "10px",
                  width: "387px",
                  paddingLeft: "100px",
                  paddingRight: "30px",
                  position: "relative",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <Image
                  src={service}
                  alt=""
                  style={{
                    position: "absolute",
                    width: "56px",
                    top: "60px",
                    left: "20px",
                  }}
                />
                <h2
                  style={{
                    color: "#000",
                    fontSize: "32px",
                    fontWeight: "700",
                    lineHeight: "normal",
                  }}
                >
                  {
                    [
                      "Mental Health Service",
                      "Eye Diseases Service",
                      "Vaccination Service",
                      "Cardiology Service",
                    ][index]
                  }
                </h2>
                <p
                  style={{
                    color: "#091e29",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "normal",
                    width: "80%",
                  }}
                >
                  The service provides immediate medical care to patients with
                  acute illnesses or injuries that require immediate attention.
                </p>
                <FaArrowRight
                  style={{
                    position: "absolute",
                    fontSize: "25px",
                    bottom: "0px",
                    right: "0px",
                    padding: "20px",
                    backgroundColor: "white",
                  }}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
            margin: "0px 20px",
            rowGap: "10px",
            flexWrap:"wrap",
          }}
        >
          <Row
            style={{ display: "flex", marginBottom: "20px", columnGap: "30px" ,}}
          >
            {[ser3, ser4].map((service, index) => (
              <Col
                key={index}
                style={{
                  backgroundColor: "#f1efef",
                  padding: "20px",
                  borderRadius: "10px",
                  width: "387px",
                  paddingLeft: "100px",
                  paddingRight: "30px",
                  position: "relative",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <Image
                  src={service}
                  alt=""
                  style={{
                    position: "absolute",
                    width: "56px",
                    top: "60px",
                    left: "20px",
                  }}
                />
                <h2
                  style={{
                    color: "#000",
                    fontSize: "32px",
                    fontWeight: "700",
                    lineHeight: "normal",
                  }}
                >
                  {
                    [
                  
                      "Vaccination Service",
                      "Cardiology Service",
                    ][index]
                  }
                </h2>
                <p
                  style={{
                    color: "#091e29",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "normal",
                    width: "80%",
                  }}
                >
                  The service provides immediate medical care to patients with
                  acute illnesses or injuries that require immediate attention.
                </p>
                <FaArrowRight
                  style={{
                    position: "absolute",
                    fontSize: "25px",
                    bottom: "0px",
                    right: "0px",
                    padding: "20px",
                    backgroundColor: "white",
                  }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Services;
