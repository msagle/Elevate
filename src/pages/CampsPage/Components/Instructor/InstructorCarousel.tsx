import Carousel from 'react-bootstrap/Carousel';
import styles from "./InstructorCarousel.module.css";
import InstructorProfile from './InstructorProfile';
import { Instructors, profiles } from './Instructors';
import useWindowWidth from '../../../../hooks/useWindowWidth';

export default function InstructorCarousel() {
    const width = useWindowWidth();

    const instructorsPerPage = width < 1000 ? (width < 600 ? 1 : 2) : 3;
    const splitInstructors = (profiles: Instructors[], split: number) => {
        const chunks = [];
        for (let i = 0; i < profiles.length; i += split) {
          chunks.push(profiles.slice(i, i + split));
        }
        return chunks;
      };

    const instructorPages = splitInstructors(profiles, instructorsPerPage);

    return (
        <Carousel>
            {instructorPages.map((chunk, index) => (
                <Carousel.Item>
                    <div className={styles.carouselSlide}>
                        {chunk.map((item) => (
                            <InstructorProfile profile={item}></InstructorProfile>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
      );
}
