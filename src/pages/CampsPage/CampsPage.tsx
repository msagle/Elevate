import styles from './CampsPage.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import FAQ from './Components/FAQ';
import WhatToExpect from './Components/WhatToExpect';
import InstructorCarousel from './Components/Instructor/InstructorCarousel';
import RotatingPicturesCarousel from './Components/RotatingPictures/RotatingPicturesCarousel'


export default function CampsPage() {
    return (
        <div>
            <br />
            <h1>ELEVATE Synchronized Skating Camp</h1>
            <br />
            <div className={styles.registrationContainer}>
                <strong>Registration for the 2025 ELEVATE Synchro Camp is not yet live. Please check back for updates regarding our 2025 camp soon!</strong>
                {/* <Link to="https://portal.campnetwork.com/Register/Register.php?camp_id=398038">
                    {
                        <Button size={'lg'} className={styles.registrationButton} >
                            REGISTER HERE!
                        </Button>
                    }
                </Link> */}
            </div>
            <br />
            <br />
            <div> 
            </div>
            <h4>Check out these awesome moments from our 2024 ELEVATE Synchronized Skating Camp!</h4>
            <RotatingPicturesCarousel />
            {/* <WhatToExpect /> */}
            <div className={styles.instructorContainer}>
                <br />
                <br />
                <h2 className={styles.headerStyles}>
                    Meet the 2024 Camp Instructors
                </h2>
                <br />
                <InstructorCarousel />
                <br />
                <br />
            </div>
            <br />
            <FAQ />
        </div>
        
    );
};