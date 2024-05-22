import styles from "./Footer.module.css"
import elevateLogo from "../public/elevate-logo.png"
import RoutingBarFooter from "./RoutingBarFooter";

export default function Footer() {
    return (
       <div className={styles.footerContainer}>
            <img 
                src={elevateLogo}
                className={styles.elevateLogo}
                alt="Elevate Logo: Three overlapping mountains are arranged over the word Elevate"
            />
            <RoutingBarFooter/>
            <div style={{"paddingBottom": "15px"}}>
                &copy; Elevate Synchronized Skating 2024. All Rights Reserved
                <br></br>
                <small className={styles.credits}>
                    Site by Mikayla Sagle
                </small>
            </div>
        </div>
    );
}