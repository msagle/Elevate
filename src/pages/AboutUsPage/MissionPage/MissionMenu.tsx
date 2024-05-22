import React from 'react';
import { Link } from "react-router-dom";
import styles from "./MissionPage.module.css"

export default function MissionMenu() {
    return (
        <div className={styles.missionMenuContainer}>
            <Link to={"/mission"}><strong>Our Mission</strong></Link> 
            <Link to={"/reports"}><strong>Reports & Disclosures</strong></Link> 
        </div>
    );
};