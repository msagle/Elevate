import React from 'react';
import styles from "./TeamPage.module.css"
import Profile from './Profile';
import { profiles } from "../TeamPage/ProfileInterface";


export default function TeamPage() {
    return (
        <div className={styles.bodyTeamPage}>
            <br />
            <h1>Meet the ELEVATE Team</h1>
            <div className={styles.teamMessageContainer}>
                The individuals behind it all. ELEVATE Synchronized Skating is composed of passionate and driven student 
                athletes who work year-round to make this organization possible. They are the backbone of our organization 
                and are dedicated to making our mission a reality!
            </div>
            <div className={styles.profilesBody}>
                <div className={styles.profileContainer}>
                    {profiles.map(function(profile) {
                        return (
                            <div className={styles.profilesGridItem}>
                            <Profile profile={profile} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}