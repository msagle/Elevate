import { Link } from 'react-router-dom';
import Testimonial from '../../components/Testimonial'
import Announcement from '../TeamPage/Headshots/elevate2024.png';
import styles from './HomePage.module.css';
import { Button } from 'react-bootstrap';
import { InstagramEmbed } from 'react-social-media-embed';

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
                        <Button size={'lg'} style={{boxShadow: "0 0 5px black"}}>
                            Click for more info!
                        </Button>
                    }
                    </Link>
                </div>
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InstagramEmbed url="https://www.instagram.com/p/C3YYWdKRzqe/" width={450}/>
                </div>
            </div>
            {/* <br />
            <br />
            <br />
            <Testimonial /> */}
        </div>
    );
};