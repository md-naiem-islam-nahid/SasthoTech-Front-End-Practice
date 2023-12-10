// Services.js
import React from 'react';
import st from '../assets/services.module.css';
import ser1 from '../imgs/service1.png'
import ser2 from '../imgs/service2.png'
import ser3 from '../imgs/service3.png'
import ser4 from '../imgs/service4.png'
import { FaArrowRight } from 'react-icons/fa';


const Services = () => {
  return (
    <div className={st.content}>
      <div className={st.container}>
        <div className={st.smallHeading}>
          SERVICES & TREATMENTS
        </div>
        <div className={st.bigHead}>
          <h1>
            More than 40 specialty and health care services
          </h1>
          <button>See All Services</button>
        </div>
        <div className={st.serviceItems}>
          <div className={st.row}>
            <div className={st.item}>
            <img src={ser1} alt="" />
              <h2>Mental Health Service</h2>
              <p>The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.</p>
              <FaArrowRight className={st.arrowright}/>
            </div>
            <div className={st.item}>
            <img src={ser2} alt="" />
              <h2>Eye Diseases Service</h2>
              <p>The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.</p>
              <FaArrowRight className={st.arrowright}/>
            </div>
            
          </div>
          <div className={st.row}>
            <div className={st.item}>
            <img src={ser3} alt="" />
              <h2>Vaccination Service</h2>
              <p>The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.</p>
              <FaArrowRight className={st.arrowright}/>
            </div>
            <div className={st.item}>
            <img src={ser4} alt="" />
              <h2>Cardiology Service</h2>
              <p>The service provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.</p>
              <FaArrowRight className={st.arrowright}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
