import React from 'react';
import styles from "./HomePage.module.css";
import ThreeSkates from "../../public/three-skates.jpeg"

export default function HomePage() {
    return (
        <div>
            <img 
                src={ThreeSkates}
                width={"100%"}
                style={{opacity: 0.5}}
                alt={"Three skates"}
            />
            <span>Dedicated to inspiring and educating the next generation of synchronized skaters</span>
        </div>
    );
};