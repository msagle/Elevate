import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from "./RoutingBar.module.css";
import { routes } from "./RoutingLinks";

const privacyPolicy = "https://drive.google.com/file/d/1LwiHcFSBCj93Lm909axDVtoEewirSRfe/view?usp=sharing";

export default function RoutingBarFooter() {
    return (
        <div className={styles.linkContainerFooter}>
            {routes.map((r) => (
                <Link key={r.id} to={r.route}><strong>{r.displayName}</strong></Link>
            ))}
            <a href={privacyPolicy} target="_blank"
                    rel="noreferrer"> 
                    <strong>Privacy Policy</strong>
            </a>
            <Link to={"https://www.instagram.com/elevatesynchro/"}><FaInstagram /></Link>
            <Link to={"https://www.facebook.com/elevatesynchro/"}><FaFacebook /></Link>
        </div>
    );
};