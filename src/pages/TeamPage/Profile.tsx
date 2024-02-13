import styles from "../TeamPage/TeamPage.module.css";
import { TeamProfile } from './ProfileInterface';

export default function Profile(props: ProfileProps) {
    return (
        <div className={styles.profile}>
            <div className={styles.profileHeader} />
            <div className={styles.profileBody}>
                <img 
                    src={props.profile.picture}
                    alt="Profile of an Elevate Synchro team member" 
                />
                <p className={styles.profileName}>
                    {props.profile.name}
                </p>
                <p className={styles.profileDescription}>
                    {props.profile.description}
                </p>
            </div>
        </div>
    );
}

export interface ProfileProps {
    profile: TeamProfile;
}
