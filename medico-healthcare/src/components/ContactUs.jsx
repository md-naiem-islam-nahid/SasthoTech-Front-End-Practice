import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone } from "react-icons/fa";

<<<<<<< HEAD
const ContactUs = ({color}) => {
=======
const ContactUs = () => {
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
  return (
    <Container
      fluid
      style={{
        height: "750px",
        padding: "100px 175px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: 'Satoshi',
      }}
    >
      <Row style={{ display: "flex", width: "100%", columnGap: "65px" }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "20px",
            width: "45%",
            fontFamily: 'Satoshi',
          }}
        >
          <div
            style={{
<<<<<<< HEAD
              color: color,
=======
              color: "#09a4ad",
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            APPOINTMENT
          </div>
          <div
            style={{
              paddingTop: "20px",
              color: "#000",
              fontSize: "40px",
              fontWeight: "700",
            }}
          >
            Get in touch to book <br />
            your first appointment
          </div>
          <div
            style={{
              paddingTop: "40px",
              color: "#000",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Far far away, behind the word mountains, far <br />
            from the countries Vokalia and Consonantia.
          </div>
          <div
            style={{
              alignItems: "center",
              paddingTop: "30px",
              color: "#000",
              fontSize: "20px",
              fontWeight: "500",
              gap: "10px",
            }}
          >
            <FaPhone
              style={{ fontSize: "1.2em", transform: "rotate(90deg)" }}
            />{" "}
            (123) 456-7890
          </div>
          <div
            style={{
              alignItems: "center",
              paddingTop: "30px",
              color: "#000",
              fontSize: "20px",
              fontWeight: "500",
              gap: "10px",
            }}
          >
            <FaEnvelope style={{ fontSize: "1.2em" }} /> medico@health.care
          </div>
        </Col>
        <Col
          style={{
            flex: "1",
            padding: "30px",
            margin:'0px 30px',
            borderRadius: "20px",
            boxShadow: "-1px 1px 11px -1px rgba(.1, 0.1, 0.1, 0.1)",
            fontFamily: 'Satoshi',
          }}
        >
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                style={{
                  padding: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  width: "93%",
                  marginBottom: "15px",
                  fontFamily: 'Satoshi',
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Phone"
                style={{
                  padding: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  width: "93%",
                  marginBottom: "15px",
                  fontFamily: 'Satoshi',
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                style={{
                  padding: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  width: "93%",
                  marginBottom: "15px",
                  fontFamily: 'Satoshi',
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                name="appointmentType"
                style={{
                  padding: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  width: "100%",
                  marginBottom: "15px",
                  fontFamily: 'Satoshi',
                }}
              >
                <option value="">Select Appointment Type</option>
               
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Message"
                style={{
                  border: "1px solid #ccc",
                  height: "129px",
                  width: "93%",
                  resize: "none",
                  marginBottom: "15px",
                  borderRadius: "10px",
                  padding:'15px',
                  fontFamily: 'Satoshi',
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                
<<<<<<< HEAD
                backgroundColor: color,
=======
                backgroundColor: "#09a4ad",
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
                color: "white",
                padding: "15px 15px",
                width: '100%',
                border:'none',
                borderRadius:'10px',
                fontFamily: 'Satoshi',
              }}
            >
              Submit Now
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
