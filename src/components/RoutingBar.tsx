import { Link } from "react-router-dom";
import styles from "./RoutingBar.module.css";

export default function RoutingBar() {
    return (
        <div className={styles.linkContainer}>
            <Link to={"/"}><strong>Home</strong></Link> 
            <Link to={"/mission"}><strong>About Us</strong></Link> 
            <Link to={"/team"}><strong>Our Team</strong></Link> 
            <Link to={"/camps"}><strong>Camps</strong></Link> 
            <Link to={"/contact"}><strong>Contact Us</strong></Link> 
        </div>
    );
};
