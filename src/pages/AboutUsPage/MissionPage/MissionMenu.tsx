import styles from "./MissionPage.module.css"
import { Link } from "react-router-dom";

/**
 * MissionMenu component renders a menu within the Mission page. 
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function MissionMenu() {
    return (
        <div className={styles.missionMenuContainer}>
            <Link to={"/mission"}><strong>Our Mission</strong></Link> 
            <Link to={"/reports"}><strong>Reports & Disclosures</strong></Link> 
        </div>
    );
};