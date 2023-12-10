import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import st from '../assets/navbar.module.css';
import MedicoLogo from '../imgs/medico.png';

const NavBar = () => {
  return (
    <div className={st.content}>
      <div className={st.container}>
        <div className={st.logo}>
          <img src={MedicoLogo} alt="Medico Logo" />
          <span> Medico</span>
        </div>
        <div className={st.navitems}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Health Checkup</li>
            <li>Doctors</li>
            <li>Departments</li>
          </ul>
        </div>
        <div className={st.number}> <FiPhoneCall size="20px" /> 1005-346-272 </div>
        <div className={st.appointment}> <button>Appointment </button></div>
      </div>
    </div>
  );
};

export default NavBar;
