import React from 'react';
import st from '../assets/contactus.module.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className={st.content}>
      <div className={st.container}>
        <div className={st.appointment}>
          <div className={st.text1}>APPOINTMENT</div>
          <div className={st.text2}>
            Get in touch to book <br />your first appointment
          </div>
          <div className={st.text3}>
            Far far away, behind the word mountains, far <br />from the countries Vokalia and Consonantia.
          </div>
          <div className={st.text4}>
            <FaPhone className={st.icon1} /> (123) 456-7890
          </div>
          <div className={st.text5}>
            <FaEnvelope className={st.icon2} /> medico@health.care
          </div>
        </div>
        <div className={st.contactform}>
          <form>
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Phone" />
            <input type="email" placeholder="Email" />
            <select name="appointmentType">
              <option value="">Select Appointment Type</option>
              {/* Add more options here */}
            </select>
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
