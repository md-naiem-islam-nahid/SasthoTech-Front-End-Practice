import React from 'react';
import { MdLocationOn } from 'react-icons/md'; 
import { AiOutlineMail } from 'react-icons/ai'; 
import { FaWhatsapp } from 'react-icons/fa'; 


import st from '../assets/topbar.module.css';

export default function TopBar() {
  return (
    <div className={st.content}>
      <div className={st.container}>
        <div className={st.first}>
          <div>
          <MdLocationOn  size="27px"/> 90919 Madie run Apt. 790
          </div>
          <div>
          <AiOutlineMail size="27px"/>  medico@health.care
          </div>
        </div>
        <div className={st.end}>
        <FaWhatsapp size="32px"/>  Connect on Whatsapp
        </div>
      </div>
        
    </div>
  );
}
