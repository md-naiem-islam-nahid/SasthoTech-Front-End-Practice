import React from 'react';
import styles from '../assets/welcome.module.css';
import doctorImage from '../imgs/doctor.png';
import patientImage from '../imgs/patient.png';

const Welcome = () => {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.docImg}>
                    <div className={styles.blank}>
                        <img src={doctorImage} alt="Doctor" />
                    </div>
                    <div className={styles.patientBadge}>
                        <div>
                            <img src={patientImage} alt="Patient badge" />
                        </div>

                        <div>
                            More than 10K Patients treated
                        </div>
                    </div>
                </div>
                <div className={styles.txt}>
                    <h1 className={styles.title}>Welcome to Medico Healthcare</h1>
                    <p className={styles.subtitle}>
                        Your Journey to <br /> Better Health <br />
                        Starts Here
                    </p>
                    <button className={styles.discoverButton}>Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
