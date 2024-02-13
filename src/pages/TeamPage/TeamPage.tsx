import React from 'react';
import styles from "./TeamPage.module.css"
import Profile from './Profile';
import { profiles } from "../TeamPage/ProfileInterface";


export default function TeamPage() {
    return (
        <div>
            <p>teamm page baybaaaaaay!</p>
            <p>spacer</p>
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