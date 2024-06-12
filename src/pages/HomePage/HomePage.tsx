import { Link } from 'react-router-dom';
import Testimonial from '../../components/Testimonial'
import Announcement from './ELEVATE2024Poster.png';
import styles from './HomePage.module.css';
import { Button } from 'react-bootstrap';
import { InstagramEmbed } from 'react-social-media-embed';
import { Helmet } from 'react-helmet'

export default function HomePage() {
    return (
        <div>
            <Helmet>
                <title>ELEVATE Synchronized Skating Camp</title>
                <meta name="description" content="Midwestern Synchronized Skating Camp"/>
            </Helmet>
            <div className={styles.bodyHomePage}>
                <br />
                <div className={styles.homeHeaders}>
                    <h1><strong>ELEVATE SYNCHRONIZED SKATING CAMP</strong></h1>
                    <h3>Dedicated to inspiring and educating the next generation of synchronized skaters</h3>
                    <span className={styles.animate}></span>
                </div>
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
                    </div>
                    {/* <br />
                    <br />
                    <br />
                    <Testimonial /> */}
                </div>
        </div>
    );
};