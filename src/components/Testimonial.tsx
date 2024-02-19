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
                <h1 className={styles.testimonialCard}>
                    Maddie loved it! oiuytrdfghjklkjhgfdfghjklkjhg fdcvhjklkjhgfdfgk
                </h1>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className={styles.testimonialCard}>
                    cant wait for next year!
                </h1>
              </Carousel.Item>
              <Carousel.Item>
                <h1 className={styles.testimonialCard}>
                  ya ya yaaaaa
                </h1>
              </Carousel.Item>
            </Carousel>
        </div>
    );
};