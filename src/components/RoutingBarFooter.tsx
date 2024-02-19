import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from "./RoutingBar.module.css";

export default function RoutingBarFooter(props: RoutingBarProps) {
    return (
        <div className={styles.linkContainer}>
            <Link to={"/"} style={{color: props.textColor, textDecoration: "none"}}><strong>Home</strong></Link> 
            <Link to={"/mission"} style={{color: props.textColor, textDecoration: "none"}}><strong>Mission</strong></Link> 
            <Link to={"/team"} style={{color: props.textColor, textDecoration: "none"}}><strong>Our Team</strong></Link> 
            <Link to={"/camps"} style={{color: props.textColor, textDecoration: "none"}}><strong>Camps</strong></Link> 
            <Link to={"https://www.instagram.com/elevatesynchro/"} style={{color: props.textColor, textDecoration: "none"}}><FaInstagram /></Link>
            <Link to={"https://www.facebook.com/elevatesynchro/"} style={{color: props.textColor, textDecoration: "none"}}><FaFacebook /></Link>
        </div>
    );
};

export interface RoutingBarProps {
    textColor: string;
    footer: boolean;
}
