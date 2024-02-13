import styles from "./Footer.module.css"
import elevateLogo from "../public/elevate-logo.png"
import RoutingBar from "./RoutingBar";

export default function Footer() {
    return (
       <div className={styles.footerContainer}>
            <img 
                src={elevateLogo}
                className={styles.elevateLogo}
                alt="Elevate Logo: Three overlapping mountains are arranged over the word Elevate"
            />
            <RoutingBar textColor="rgb(90, 90, 90)"/>
            <p>
                &copy; Elevate Synchronized Skating 2023. All Rights Reserved
                <br></br>
                <small className={styles.credits}>
                    Site by Mikayla Sagle &nbsp;&nbsp; | &nbsp;&nbsp;Feature Photo Credits
                    Elissa Kempisty
                </small>
            </p>
        </div>
    );
}