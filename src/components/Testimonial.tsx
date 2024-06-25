import Carousel from 'react-bootstrap/Carousel';
import styles from "./Testimonial.module.css";

export default function Testimonial() {
    return (
        <div className={styles.testimonialContainer}>
            <h2>
                Testimonials
            </h2>
            <Carousel>
              <Carousel.Item>
                <h3 className={styles.testimonialCard}>
                    oiuytrdfghjklkjhgfdfghjklkjhg fdcvhjklkjhgfdfgk
                </h3>
              </Carousel.Item>
            </Carousel>
        </div>
    );
};