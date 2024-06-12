import { Link } from "react-router-dom";
import styles from "./RoutingBar.module.css";
import { useState } from 'react';

export default function RoutingBar(props: RoutingBarProps) {

    const handleOnClick = () => {
        props.setDisplay(!props.display);
    };

    return (
        <div className={props.display? styles.linkContainerMenu : styles.linkContainer}>
            <Link to="/" onClick={handleOnClick}><strong>Home</strong></Link>
            <Link to="/mission" onClick={handleOnClick}><strong>About Us</strong></Link>
            <Link to="/camps" onClick={handleOnClick}><strong>Camps</strong></Link>
            <Link to="/contact" onClick={handleOnClick}><strong>Contact Us</strong></Link>
        </div>
    );
};

export interface RoutingBarProps {
    display: boolean;
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}
