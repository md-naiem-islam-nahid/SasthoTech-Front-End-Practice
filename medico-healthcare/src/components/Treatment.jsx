// Treatment.js
import React from 'react';
import st from '../assets/treatment.module.css';
import img1 from '../imgs/img1.png';
import img2 from '../imgs/img2.png';
import img3 from '../imgs/img3.png';

const Treatment = () => {
  return (
    <div className={st.content}>
      <div className={st.container}>
        <div className={st.textSection}>
          <h1 className={st.heading}>
            Dedicated to providing the best treatment.
          </h1>
          <p className={st.description}>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
          </p>
        </div>
        <div className={st.treatments}>
          <div className={st.treatmentItem}>
            <img src={img1} alt="Pediatrician" className={st.treatmentImage} />
            <div className={st.banner}><span>For your health</span> Pediatrician</div>
          </div>
          <div className={st.treatmentItem}>
            <img src={img2} alt="Cardiologist" className={st.treatmentImage} />
            <div className={st.banner}><span>For your health</span> Cardiologist</div>
          </div>
          <div className={st.treatmentItem}>
            <img src={img3} alt="Dermatologist" className={st.treatmentImage} />
            <div className={st.banner}><span>For your health</span> Dermatologist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
