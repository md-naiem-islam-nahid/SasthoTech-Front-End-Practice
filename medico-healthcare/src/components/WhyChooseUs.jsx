import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import img from "../imgs/styleimg.png";
import { ArrowIcon } from "./ArrowIcon"; // Assuming ArrowIcon is a custom component

const WhyChooseUs = () => {
  return (
    <Container
      fluid
      style={{
        height: "842px",
        padding: "10px 160px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Row
          style={{
            display: "flex",
            columnGap: "100px",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            marginBottom: "50px",
          }}
        >
          <Col style={{ flex: "1", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                width: "385px",
                height: "128px",
                borderRadius: "20px",
                background: "#ffc567",
                bottom: "4px",
                left: "0px",
              }}
            ></div>
            <Image
              src={img}
              alt="Why Choose Us"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                marginLeft: "-100px",
              }}
            />
          </Col>
          <Col style={{ flex: "1" }}>
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#000",
                textAlign: "start",
                fontFamily: 'Satoshi',
              }}
            >
              Why Choose Us?
            </h1>
            <ul
              style={{
                listStyle: "none",
                padding: "100",
                color: "#000",
                marginLeft: "-40px",
                fontFamily: 'Satoshi',
                fontWeight:'500',
              }}
            >
              <li
                style={{
                  padding: "10px",
                }}
              >
                <ArrowIcon /> Safety First Quality Must
              </li>
              <li
               style={{
                padding: "10px",
              }}
              >


                <ArrowIcon /> Patient-Centric Approach
              </li >
              <li  style={{
                  padding: "10px",
                }}>
                <ArrowIcon /> Focused Leadership
              </li>
              <li  style={{
                  padding: "10px",
                }}>
                <ArrowIcon /> Cutting-Edge Technology
              </li>
              <li  style={{
                  padding: "10px",
                }}>
                <ArrowIcon /> Transparent Pricing
              </li >
              <li  style={{
                  padding: "10px",
                }}>
                <ArrowIcon /> Coordinate Care
              </li>
            </ul>
          </Col>
        </Row>
        <Row
          style={{
            textAlign: "start",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "700",
              marginBottom: "20px",
              color: "#000",
              fontFamily: 'Satoshi',
            }}
          >
            Wellness, Compassion, Quality
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "20px",
              color: "#000",
              paddingRight: "200px",
              paddingBottom: "30px",
              fontFamily: 'Satoshi',
            }}
          >
            They live in Bookmarks grove right at the coast of the Semantics, a
            large language ocean. A small river named Duden flows by their place
            and supplies it.
          </p>
          <Button
            style={{
              padding: "15px 20px",
              fontSize: "20px",
              backgroundColor: "#00a0aa",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontWeight: "700",
              fontFamily: 'Satoshi',
            }}
          >
            Take An Appointment
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default WhyChooseUs;
