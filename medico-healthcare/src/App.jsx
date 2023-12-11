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

import st from './App.module.css'

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
