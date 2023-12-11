import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import img from "../imgs/styleimg.png";
import { ArrowIcon } from "./ArrowIcon"; // Assuming ArrowIcon is a custom component

<<<<<<< HEAD
const WhyChooseUs = ({color}) => {
=======
const WhyChooseUs = () => {
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
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
<<<<<<< HEAD
                <ArrowIcon color={color}/> Safety First Quality Must
=======
                <ArrowIcon /> Safety First Quality Must
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
              </li>
              <li
               style={{
                padding: "10px",
              }}
              >


<<<<<<< HEAD
                <ArrowIcon color={color}/> Patient-Centric Approach
=======
                <ArrowIcon /> Patient-Centric Approach
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
              </li >
              <li  style={{
                  padding: "10px",
                }}>
<<<<<<< HEAD
                <ArrowIcon color={color}/> Focused Leadership
=======
                <ArrowIcon /> Focused Leadership
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
              </li>
              <li  style={{
                  padding: "10px",
                }}>
<<<<<<< HEAD
                <ArrowIcon color={color}/> Cutting-Edge Technology
=======
                <ArrowIcon /> Cutting-Edge Technology
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
              </li>
              <li  style={{
                  padding: "10px",
                }}>
<<<<<<< HEAD
                <ArrowIcon color={color}/> Transparent Pricing
=======
                <ArrowIcon /> Transparent Pricing
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
              </li >
              <li  style={{
                  padding: "10px",
                }}>
<<<<<<< HEAD
                <ArrowIcon color={color}/> Coordinate Care
=======
                <ArrowIcon /> Coordinate Care
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
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
<<<<<<< HEAD
              backgroundColor: color,
=======
              backgroundColor: "#00a0aa",
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
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
