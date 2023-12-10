import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Treatment from "./components/Treatment";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HealthCheckupPlans from "./components/HealthCheckupPlans";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Container
      style={{ maxWidth: "1440px", margin: "auto", backgroundColor: "#F8F9FE", fontFamily: 'Satoshi', }}
    >
      <TopBar />
      <NavBar />
      <Welcome />
      <Treatment />
      <Services />
      <WhyChooseUs />
      <HealthCheckupPlans />
      <Testimonial />
      <ContactUs />
      <Footer />
    </Container>
  );
}

export default App;
