import { Link } from 'react-router-dom';
//import Testimonial from '../../components/Testimonial'
import Announcement from './ELEVATE2024Poster.png';
import styles from './HomePage.module.css';
import { Button } from 'react-bootstrap';
import { InstagramEmbed } from 'react-social-media-embed';
import { Helmet } from 'react-helmet'

export default function HomePage() {
    const elevateBlue = getComputedStyle(document.documentElement).getPropertyValue('--elevate-blue');

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
                </div>
                <div className={styles.campInfoContainer}>
                        <div className={styles.saveTheDateContainer}>
                            {/* <h4 className={styles.messageText}>
                                <strong>Registration for the 2024 ELEVATE Synchro Camp is now open!</strong>
                            </h4> */}
                            <div></div>
                            <h4 className={styles.messageText}>
                                <strong>Are YOU interested in becoming a part of the team behind ELEVATE synchro? Join us!</strong>
                            </h4>
                            <div className={styles.internshipContainer}>
                                <strong>ELEVATE</strong> is looking for interns! If you are passionate about synchronized skating, interested in 
                                working for ELEVATE, and are skilled in
                                <strong style={{ color: elevateBlue }}> Event Planning</strong>, 
                                <strong style={{ color: elevateBlue }}> Social Media Marketing</strong>, or
                                <strong style={{ color: elevateBlue }}> Accounting/Budgeting/Finance </strong>
                                please consider applying for one of our internship positions
                            </div>
                            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScBUYj4fWtcGudI4NjKO1RRmHMeX6Mru8R-mXeiwCWRwEA_9A/viewform">
                            {
                                <Button size={'lg'} className={styles.registrationButton}>
                                    Apply here!
                                </Button>
                            }
                            </Link>
                            <div id={styles["insta"]}>
                                <InstagramEmbed url="https://www.instagram.com/p/C-8VW6_Srd6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={415} height={615}/>
                            </div>
                            {/* <img
                                className={styles.elevateAnnouncement}
                                src={Announcement}
                                alt={"Announcement for ELEVATE CAMP 2024"}
                            /> */}
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