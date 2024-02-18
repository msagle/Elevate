import React from 'react';
import styles from "./HomePage.module.css";
import ThreeSkates from "../../public/three-skates.jpeg"
import ElevateLogo from "../../public/elevate-logo.png"

export default function HomePage() {
    return (
        <div>
            <div className={styles.marquee}>
                <div className={styles.marqueeone}>
                    Registration for the 2024 ELEVATE Synchro Camp is now open! Come train with us July 12th to the 14th!
                </div>
                <div className={styles.marqueetwo}>
                    Registration for the 2024 ELEVATE Synchro Camp is now open! Come train with us July 12th to the 14th!
                </div>
                <div className={styles.marqueethree}>
                    Registration for the 2024 ELEVATE Synchro Camp is now open! Come train with us July 12th to the 14th!
                </div>
                <div className={styles.marqueefour}>
                    Registration for the 2024 ELEVATE Synchro Camp is now open! Come train with us July 12th to the 14th!
                </div>
            </div>

            <br />
            <br />
            <br />

            <h3 style={{color: 'black'}}>Dedicated to inspiring and educating the next generation of synchronized skaters</h3>
            <p>
                why is this bugging? yaaaaa
            </p>
        </div>
    );
};