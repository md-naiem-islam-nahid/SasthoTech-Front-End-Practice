
import React from 'react';
import styles from '../assets/Testimonial.module.css';
import img1 from '../imgs/styleimg2.png';
import { FaStar } from 'react-icons/fa';
import leftar from '../imgs/leftarrow.png'
import quoteimg from '../imgs/quote.png'


const Testimonial = () => {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={leftar} alt="Left Arrow" className={styles.leftarrow} />
                    <img src={img1} alt="Mr. Williams" className={styles.testimonialImage} />
                    <div className={styles.blank}></div>
                </div>
                <div className={styles.textContainer}>

                    <img src={quoteimg} alt="Quote Sign" className={styles.quotes} />
                    <img src={leftar} alt="Left Arrow" className={styles.rightarrow} />

                    <div className={styles.stars}>
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className={styles.goldStar} />
                        ))}
                    </div>
                    <blockquote className={styles.quote}>
                        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy"
                    </blockquote>
                    <p className={styles.author}>
                        Mr. Williams
                        <br />
                        <span>
                            Diabetes Patient
                        </span>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;
