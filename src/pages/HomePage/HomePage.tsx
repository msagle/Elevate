import styles from './HomePage.module.css';
import Announcement from '../../public/elevate-save-date-2024.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { InstagramEmbed } from 'react-social-media-embed';
import Testimonial from '../../components/Testimonial'

export default function HomePage() {
    return (
        <div className={styles.bodyHomePage}>
            <br />
            <h1><strong>ELEVATE SYNCHRONIZED SKATING</strong></h1>
            <h3>Dedicated to inspiring and educating the next generation of synchronized skaters</h3>
            <div className={styles.campInfoContainer}>
                <div className={styles.saveTheDateContainer}>
                    <h4 className={styles.messageText}>
                        <strong>Registration for the 2024 ELEVATE Synchro Camp is now open!</strong>
                    </h4>
                    <img
                        className={styles.elevateAnnouncement}
                        src={Announcement}
                        alt={"Announcement for ELEVATE CAMP 2024"}
                    />
                    <Link to="/camps">
                    {
                        <Button size={'lg'} className={styles.registrationButton}>
                            Click for more info!
                        </Button>
                    }
                    </Link>
                </div>
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InstagramEmbed url="https://www.instagram.com/p/C3YYWdKRzqe/" width={400}/>
                </div>
            </div>
            {/* <br />
            <br />
            <br />
            <Testimonial /> */}
        </div>
    );
};