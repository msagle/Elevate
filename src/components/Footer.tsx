import styles from "./Footer.module.css"
import elevateLogo from "../public/elevate-logo.png"
import RoutingBarFooter from "./Routing/RoutingBarFooter";

export default function Footer() {
    return (
       <footer className={styles.footerContainer}>
            <img 
                src={elevateLogo}
                className={styles.elevateLogo}
                alt="Elevate Logo: Three overlapping mountains are arranged over the word Elevate"
            />
            <div className={styles.footerText}>
                <RoutingBarFooter/>
                &copy; ELEVATE Synchronized Skating 2024, a 501(c)(3) not-for-profit corporation.
                All Rights Reserved.
            </div>
        </footer>
    );
}