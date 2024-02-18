import React from 'react';
import styles from './CampsPage.module.css';
import FAQComponent from './FAQComponent';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { InstagramEmbed } from 'react-social-media-embed';

export default function CampsPage() {
    return (
        <div>
            <br />
            <h1>ELEVATE Synchronized Skating Camp 2024</h1>
            <br />
            <div className={styles.registrationContainer}>
                <strong>Registration for the 2024 ELEVATE Synchro Camp is now live! Join us for 2 days of on-ice and off-ice training this July in Pleasant Prarie, WI!</strong>
                <Link to="https://portal.campnetwork.com/Register/Register.php?camp_id=398038">
                    {
                        <Button size={'lg'} className={styles.registrationButton} >
                            REGISTER HERE!
                        </Button>
                    }
                </Link>
            </div>
            <br />
            <h2 className={styles.headerStyles}>
                What to Expect
            </h2>
            <br />
            <div className={styles.whatToExpectContainer}>
                <div className={styles.whatToExpectInformationContainer}>
                    <p>
                        Skaters can expect each day to be filled with on-ice training, off-ice classes, and team building activities with Team USA athletes. Skaters will also have the opportunity to participate in Q&A sessions and learn from some of the best in the sport!
                    </p>
                    <br />
                    <h4>
                        <strong>Class topics will include:</strong>
                    </h4>

                    <div className={styles.topicContainer}>
                        <div className={styles.topicBubble}>Turns and Twizzles</div>
                        <div className={styles.topicBubble}>Pair Tricks and Transitions</div>
                        <div className={styles.topicBubble}>Stroking and Power</div>
                        <div className={styles.topicBubble}>Q&A Sessions</div>
                        <div className={styles.topicBubble}>Field Moves</div>
                        <div className={styles.topicBubble}>Recovery</div>
                        <div className={styles.topicBubble}>Flexibility</div>
                        <div className={styles.topicBubble}>Mental Training and Goal Setting</div>
                    </div>
                    <br />
                    <br />
                    <p>
                            Check out our 2023 ELEVATE Synchro Camp recap to see how much fun we had last year!
                    </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InstagramEmbed url="https://www.instagram.com/reel/CunuwY8Ok8v/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={500}/>
                </div>
            </div>
            <FAQComponent />
        </div>
        
    );
};