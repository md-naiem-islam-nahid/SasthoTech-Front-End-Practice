import { Container } from "react-bootstrap";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HealthCheckupPlans from "./components/HealthCheckupPlans";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import TopBar from "./components/TopBar";
import Treatment from "./components/Treatment";
import Welcome from "./components/Welcome";
import WhyChooseUs from "./components/WhyChooseUs";


function App() {
  const colorAll ='teal'
  return (
    <Container
      style={{ maxWidth: "1440px", margin: "auto", backgroundColor: "#F8F9FE", fontFamily: 'Satoshi', }}
    >
      <TopBar color={colorAll}/>
      <NavBar color={colorAll}/>
      <Welcome color={colorAll}/>
      <Treatment color={colorAll}/>
      <Services color={colorAll}/>
      <WhyChooseUs color={colorAll}/>
      <HealthCheckupPlans color={colorAll}/>
      <Testimonial color={colorAll}/>
      <ContactUs color={colorAll}/>
      <Footer color={colorAll}/>
    </Container>
  );
}

export default App;
