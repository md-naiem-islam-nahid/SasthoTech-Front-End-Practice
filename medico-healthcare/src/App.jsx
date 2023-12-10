import TopBar from "./components/TopBar"
import NavBar from "./components/NavBar"
import Welcome from "./components/Welcome"
import Treatment from "./components/Treatment"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import HelathCheckupPlans from "./components/HelathCheckupPlans"
import Testimonial from "./components/Testimonial"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

import st from './App.module.css'

function App() {


  return ( 
    <div className={st.container}>
      <TopBar />
      <NavBar />
      <Welcome />
      <Treatment />
      <Services />
      <WhyChooseUs />
      < HelathCheckupPlans />
      <Testimonial />
      <ContactUs />

      <Footer />
    </div>
  )
}

export default App
