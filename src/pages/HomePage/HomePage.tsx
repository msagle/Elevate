import React from 'react';
import styles from "./HomePage.module.css";
import ThreeSkates from "../../public/three-skates.jpeg"
import ElevateLogo from "../../public/elevate-logo.png"
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function HomePage() {
    return (
        <div className={styles.carousel}>
            <img src={ThreeSkates} alt={"Three skates"}/>
             <h3 style={{color: 'black'}}>Dedicated to inspiring and educating the next generation of synchronized skaters</h3>
        </div>
    );
};