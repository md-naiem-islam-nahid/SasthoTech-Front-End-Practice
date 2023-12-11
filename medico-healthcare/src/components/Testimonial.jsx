import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import img1 from "../imgs/styleimg2.png";
import leftar from "../imgs/leftarrow.png";
import quoteimg from "../imgs/quote.png";

const Testimonial = () => {
  return (
    <Container
      fluid
      style={{
        height: "565px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 152px 0px 152px",
      }}
    >
      <Row
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Col md={6} style={{ position: "relative", paddingTop: "60px" }}>
          <Image
            src={leftar}
            alt="Left Arrow"
            style={{
              position: "absolute",
              left: "0",
              top: "40%",
              width: "53px",
            }}
          />
          <Image
            src={img1}
            alt="Mr. Williams"
            style={{
              position: "relative",
              width: "auto",
              height: "365px",
              zIndex: "2",
              paddingLeft:'50px',
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "362px",
              backgroundColor: "#ffc567",
              height: "111px",
              borderRadius: "10px",
              bottom: "140px",
              left: "110px",
              zIndex: "1",
            }}
          ></div>
        </Col>
        <Col
          md={6}
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            
            position: "relative",
          }}
        >
          <Image
            src={quoteimg}
            alt="Quote Sign"
            style={{
              backgroundColor: "black",
              width: "30px",
              padding: "15px 20px 20px 10px",
              borderRadius: "0 0 100% 0",
              border: "0px",
              marginBottom: "20px",
            }}
          />
          <Image
            src={leftar}
            alt="Left Arrow"
            style={{
              width: "53px",
              position: "absolute",
              right: "0px",
              transform: "rotate(180deg)",
            }}
          />
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                style={{
                  color: "#ffd700",
                  marginRight: "5px",
                  width: "27.09px",
                  height: "25.8px",
                }}
              />
            ))}
          </div>
          <blockquote
            style={{
              fontSize: "32px",
              color: "#091e29",
              marginTop: "20px",
              width: "80%",
              fontWeight: "700",
              marginLeft: "0px",
              fontFamily: 'Satoshi',
            }}
          >
            "A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy"
          </blockquote>
          <p
            style={{
              fontSize: "20px",
              color: "#091e29",
              marginTop: "0px",
              fontWeight: "500",
              fontFamily: 'Satoshi',
            }}
          >
            Mr. Williams
            <br />
            <span style={{ fontSize: "16px", fontWeight: "400" , fontFamily: 'Satoshi',}}>
              Diabetes Patient
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
