import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

const Treatment = ({color}) => {
  const cardStyle = {
    width: "300px",
    marginBottom: "10px",
    borderRadius: "10px",
    position: "relative",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    fontFamily: 'Satoshi',
  };

  const bannerStyle = {
    position: "absolute",
    backgroundColor: color,
    color: "white",
    padding: "20px 10px",
    width: "192px",
    height: "60px",
    textAlign: "center",
    borderRadius: "10px",
    bottom: "-40px",
    fontSize: "24px",
    fontWeight: "700",
    display: "block",
  };

  const bannerSpanStyle = {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "400",
    paddingBottom: "10px",
    fontFamily: 'Satoshi',
  };

  return (
    <Container fluid style={{ height: "600px", padding: "0px 153px" }}>
      <Row
        className="justify-content-md-center"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Col md={12} style={{ textAlign: "start" }}>
          <h1
            style={{
              color: "#000",
              fontSize: "46px",
              fontWeight: "700",
              marginBottom: "20px",
              fontFamily: 'Satoshi',
            }}
          >
            Dedicated to providing the best treatment.
          </h1>
          <p
            style={{
              width: "900px",
              color: "#302e2e",
              fontSize: "20px",
              fontWeight: "500",
              fontFamily: 'Satoshi',
            }}
          >
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine.
          </p>
        </Col>
        <Row
          style={{
            paddingTop: "50px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {[img1, img2, img3].map((img, index) => (
            <Col key={index} style={cardStyle}>
              <Card.Img
                variant="top"
                src={img}
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                  height: "200px",
                  width: "300px",
                }}
              />
              <div style={bannerStyle}>
                <span style={bannerSpanStyle}>For your health</span> <br />
                {["Pediatrician", "Cardiologist", "Dermatologist"][index]}
              </div>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default Treatment;
