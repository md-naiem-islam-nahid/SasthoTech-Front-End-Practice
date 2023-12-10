// Footer.jsx

import React from 'react';
import styles from '../assets/footer.module.css';
import logo from '../imgs/medico.png';
import { SocialIcon } from 'react-social-icons';
import { FaWhatsapp } from 'react-icons/fa';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';




const Footer = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.col1}>
            <div className={styles.medico}>
              <img src={logo} alt="Medico Logo" />
              <p>Medico</p>
            </div>
            <button className={styles.appointmentButton}>
       
<ArrowIco/>  Take an Appointment
            </button>
            <button className={styles.whatsappButton}>
              <FaWhatsapp /> Connect on Whatsapp
            </button>
          </div>

          <div className={styles.footerSection}>
            <FooterSection title="SERVICES" items={['Pathology', 'Ambulance', 'Radiology', 'Pharmacy']} />
          </div>

          <div className={styles.footerSection}>
            <FooterSection title="HEALTH CHECKUP" items={['Woman Health', 'Cancer Screening', 'Cardiac Health', 'MRI Checkup']} />
          </div>

          <div className={styles.footerSection}>
            <FooterSection title="DEPARTMENTS" items={['General', 'Dermatology', 'Cardiology', 'Cancer']} />
          </div>

          <div className={styles.footerSection}>
            <FooterSection title="QUICK LINKS" items={['License', 'Changelog']} />
          </div>
        </div>

        <div className={styles.social}>
          <ul>
            <li><SocialIcon url="https://www.facebook.com" fgColor="#FFFFFF" style={{ height: 35, width: 35 }} /></li>
            <li><SocialIcon url="https://www.twitter.com" fgColor="#FFFFFF" style={{ height: 35, width: 35 }} /></li>
            <li><SocialIcon url="https://www.pinterest.com" fgColor="#FFFFFF" style={{ height: 35, width: 35 }} /></li>
            <li><SocialIcon url="https://www.instagram.com" fgColor="#FFFFFF" style={{ height: 35, width: 35 }} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const FooterSection = ({ title, items }) => (
  <div className={styles.footerSection}>
    <p>{title}</p>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);


const ArrowIco = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
  <path d="M13 1.00027C13.0001 0.810648 12.9462 0.624917 12.8448 0.464742C12.7434 0.304568 12.5985 0.176552 12.4271 0.0956298C12.2557 0.014707 12.0649 -0.0157876 11.8768 0.00770329C11.6888 0.0311942 11.5113 0.107702 11.365 0.228303L0.36583 9.28994C-0.357721 9.88592 0.0640173 11.0619 1.00144 11.0619H6.58997C6.80495 11.0619 7.01741 11.1081 7.21295 11.1975C7.40849 11.2868 7.58253 11.4173 7.72327 11.5799L11.2451 15.6527C11.8507 16.3527 13 15.9237 13 14.9977V1.00027ZM1.00144 10.0619L12.0006 1.00027V14.9977L8.4788 10.9259C8.2443 10.6548 7.95426 10.4373 7.62836 10.2882C7.30245 10.1391 6.94832 10.062 6.58997 10.0619H1.00144Z" fill="white"/>
</svg>
);


export default Footer;
