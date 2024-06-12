import { useState } from 'react';
import styles from './InstructorProfile.module.css';
import { Instructors } from './Instructors';
import LauraBio from "./Bios/LauraBio24.png";


export default function InstructorProfile(props: InstructorProfileProps) {
    const [displayBio, setDisplayBio] = useState<Boolean>(true);

    const toggleBio = () => {
        setDisplayBio(!displayBio);
    };

    return ( 
        <div onClick={toggleBio}>
                {displayBio && (
                    <div className={styles.instructorProfileContainer}>
                        <div className={styles.instructorImage}>
                            <img src={props.profile.picture} alt="Laura" />
                        </div>
                        <div className={styles.instructorInfo}>
                            <h3>{props.profile.name}</h3>
                            <h6>{props.profile.team}</h6>
                        </div>
                    </div>
                )}
                {!displayBio && (
                    <div>
                        <p>lauraBio!!!</p>
                        <img src={LauraBio} alt="Laura" />
                    </div>
                )} 
        </div>
    );
}

export interface InstructorProfileProps {
    profile: Instructors;
}