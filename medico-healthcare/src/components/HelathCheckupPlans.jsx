// HealthCheckupPlans.js
import React from 'react';
import st from '../assets/healthcheckupplans.module.css'
import logo from '../imgs/medico.png';
import womanWithLaptop from '../imgs/styleimg1.png';
import { ArrowIcon } from './WhyChooseUs';
const HealthCheckupPlans = () => {
  return (
    <div className={st.content}>
      <div className={st.container}>
        <header className={st.header}>
          <h1 className={st.title}>Health Checkup Plans</h1>
          <p className={st.description}>
            They live in Bookmarks grove right at the coast of the Semantics, a large language ocean named flows.
          </p>
          <div className={st.buttonContainer}>
            <button className={st.buttons}>Woman Health</button>
            <button className={st.buttons}>Cancer Screening</button>
            <button className={st.buttons}>Kids Vaccines</button>
          </div>
        </header>
        <div className={st.row}>
          <div className={st.checkupList}>
            <img src={logo} alt="Medico Logo" className={st.logo} />
            <h2 className={st.listTitle}>Women Health Checkup</h2>
            <p className={st.listDescription}>
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.
            </p>
            <ul className={st.list}>
              <li> <ArrowIcon/>  Complete Blood Count with ESR</li>
              <li>  <ArrowIcon/>  Lipid Profile, Live Profile, kidney Profile </li>
              <li>  <ArrowIcon/> USG Abdomen with Pelvis, Mammography</li>

            </ul>
            <button className={st.appointmentButton}>Take An Appointment</button>
          </div>

          <div className={st.womanWithLaptop}>
            <div className={st.blank}></div>
            <img src={womanWithLaptop} alt="Woman with Laptop" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default HealthCheckupPlans;
