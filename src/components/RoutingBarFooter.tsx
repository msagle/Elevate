import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from "./RoutingBar.module.css";
import pdf from "../types.s";

const privacyPDF = pdf("/docs/PrivacyPolicy.pdf");

export default function RoutingBarFooter() {
    return (
        <div className={styles.linkContainerFooter}>
            <Link to={"/"}><strong>Home</strong></Link> 
            <Link to={"/mission"}><strong>About Us</strong></Link> 
            <Link to={"/team"}><strong>Our Team</strong></Link> 
            <Link to={"/camps"}><strong>Camps</strong></Link> 
            <a href={privacyPDF} target="_blank"
                    rel="noreferrer"> 
                    <strong>Privacy Policy</strong>
            </a>
            <Link to={"https://www.instagram.com/elevatesynchro/"}><FaInstagram /></Link>
            <Link to={"https://www.facebook.com/elevatesynchro/"}><FaFacebook /></Link>
        </div>
    );
};

