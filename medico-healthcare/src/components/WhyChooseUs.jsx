// WhyChooseUs.js
import React from 'react';
import st from '../assets/whychooseus.module.css';
import img from '../imgs/styleimg.png';

const WhyChooseUs = () => {
  return (
    <div className={st.content}>
      <div className={st.container}>
        <div className={st.imgList}>
          <div className={st.imageWrapper}>
            <div className={st.blank}></div>
            <img src={img} alt="Why Choose Us" className={st.styleImage} />
          </div>
          <div className={st.listWrapper}>
            <h1 className={st.heading}>Why Choose Us?</h1>
            <ul className={st.reasonsList}>
              <li> <ArrowIcon className={st.arrow}/> Safety First Quality Must</li>
              <li>  <ArrowIcon className={st.arrow}/> Patient-Centric Approach</li>
              <li> <ArrowIcon className={st.arrow}/> Focused Leadership</li>
              <li> <ArrowIcon className={st.arrow}/> Cutting-Edge Technology</li>
              <li> <ArrowIcon className={st.arrow}/> Transparent Pricing</li>
              <li> <ArrowIcon className={st.arrow}/> Coordinate Care</li>
            </ul>
          </div>
        </div>
        <div className={st.textSection}>
          <h1 className={st.subHeading}>Wellness, Compassion, Quality</h1>
          <p className={st.description}>
            They live in Bookmarks grove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it.
          </p>
          <button className={st.appointmentButton}>Take An Appointment</button>
        </div>
      </div>
    </div>
  );
};


export const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" padding-right="10" viewBox="0 0 21 20" fill="none">
    <circle cx="10.5" cy="10" r="10" fill="#00A0AA"/>
    <path d="M13.5775 8.64727L9.14801 12.6886C9.10943 12.7239 9.06359 12.7519 9.01312 12.771C8.96264 12.7902 8.90852 12.8 8.85387 12.8C8.79921 12.8 8.7451 12.7902 8.69462 12.771C8.64415 12.7519 8.5983 12.7239 8.55973 12.6886L6.62184 10.9205C6.58321 10.8853 6.55257 10.8434 6.53166 10.7974C6.51076 10.7513 6.5 10.702 6.5 10.6521C6.5 10.6023 6.51076 10.5529 6.53166 10.5069C6.55257 10.4608 6.58321 10.419 6.62184 10.3838C6.66047 10.3485 6.70632 10.3206 6.75679 10.3015C6.80726 10.2824 6.86135 10.2726 6.91598 10.2726C6.97061 10.2726 7.0247 10.2824 7.07517 10.3015C7.12564 10.3206 7.1715 10.3485 7.21013 10.3838L8.85421 11.8838L12.9899 8.11116C13.0679 8.03999 13.1737 8 13.284 8C13.3943 8 13.5001 8.03999 13.5782 8.11116C13.6562 8.18234 13.7 8.27887 13.7 8.37953C13.7 8.48019 13.6562 8.57672 13.5782 8.6479L13.5775 8.64727Z" fill="white"/>
  </svg>
);


export default WhyChooseUs;
