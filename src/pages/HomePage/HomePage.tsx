import { Link } from 'react-router-dom';
import Testimonial from '../../components/Testimonial'
import Announcement from '../TeamPage/Headshots/elevate2024.png';
import styles from './HomePage.module.css';
import { Button } from 'react-bootstrap';

export default function HomePage() {
    return (
        <div className={styles.bodyHomePage}>
            <br />
            <h1><strong>ELEVATE SYNCHRONIZED SKATING</strong></h1>
            <h3>Dedicated to inspiring and educating the next generation of synchronized skaters</h3>
            <p className={styles.messageText}>
                <strong>Registration for the 2024 ELEVATE Synchro Camp is now open!</strong>
            </p>
            <div>
                <img
                    className={styles.elevateAnnouncement}
                    src={Announcement}
                    alt={"Announcement for ELEVATE CAMP 2024"}
                />
            </div>
            <br />
            <Link to="/camps">
                    {
                        <Button size={'lg'}>
                            More Information
                        </Button>
                    }
            </Link>
            <br />
            <Testimonial />
        </div>
    );
};