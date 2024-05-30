import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from "./RoutingBar.module.css";

const privacyPolicy = "https://drive.google.com/file/d/1LwiHcFSBCj93Lm909axDVtoEewirSRfe/view?usp=sharing";

export default function RoutingBarFooter() {
    return (
        <div className={styles.linkContainerFooter}>
            <Link to={"/"}><strong>Home</strong></Link> 
            <Link to={"/mission"}><strong>About Us</strong></Link> 
            <Link to={"/team"}><strong>Our Team</strong></Link> 
            <Link to={"/camps"}><strong>Camps</strong></Link> 
            <Link to={"/contact"}><strong>Contact Us</strong></Link> 
            <a href={privacyPolicy} target="_blank"
                    rel="noreferrer"> 
                    <strong>Privacy Policy</strong>
            </a>
            <Link to={"https://www.instagram.com/elevatesynchro/"}><FaInstagram /></Link>
            <Link to={"https://www.facebook.com/elevatesynchro/"}><FaFacebook /></Link>
        </div>
    );
};

