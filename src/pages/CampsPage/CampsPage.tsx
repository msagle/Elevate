import React from 'react';
import styles from './CampsPage.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import FAQ from './Components/FAQ';
import WhatToExpect from './Components/WhatToExpect';
import InstructorCarousel from './Components/Instructor/InstructorCarousel';


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
            <br />
            <div> 
            </div>
            <WhatToExpect />
            <FAQ />
            <InstructorCarousel />
        </div>
        
    );
};