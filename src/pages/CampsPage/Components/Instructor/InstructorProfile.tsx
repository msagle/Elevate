import { useState } from 'react';
import styles from './InstructorProfile.module.css';
import { Instructors } from './Instructors';
import { Modal } from 'react-bootstrap';


export default function InstructorProfile(props: InstructorProfileProps) {
    const [displayBio, setDisplayBio] = useState<boolean>(false);

    const toggleBio = () => {
        setDisplayBio(!displayBio);
    };

    return ( 
        <div>
            <div onClick={toggleBio} className={styles.instructorProfileContainer}>
                <div className={styles.instructorImage}>
                    <img src={props.profile.picture} alt={props.profile.name} />
                </div>
                <div className={styles.instructorInfo}>
                    <h3>{props.profile.name}</h3>
                    <h6>{props.profile.team}</h6>
                </div>
            </div>

            <Modal show={displayBio} 
                   onHide={toggleBio}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.bios}>
                        <img src={props.profile.bio} alt={props.profile.name + "Bio"} />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export interface InstructorProfileProps {
    profile: Instructors;
}