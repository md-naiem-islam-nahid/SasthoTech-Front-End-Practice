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

<<<<<<< HEAD
import st from './App.module.css'

function App() {
  const colorAll ='teal'
=======
function App() {
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
  return (
    <Container
      style={{ maxWidth: "1440px", margin: "auto", backgroundColor: "#F8F9FE", fontFamily: 'Satoshi', }}
    >
<<<<<<< HEAD
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
=======
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
>>>>>>> 60beb26e1529c449fab26b0fd3842cd6cfab2905
    </Container>
  );
}

export default App;
