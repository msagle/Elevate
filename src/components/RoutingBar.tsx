import { Link } from "react-router-dom";
import styles from "./RoutingBar.module.css";

export default function RoutingBar(props: RoutingBarProps) {
    return (
        <div className={styles.linkContainer}>
            <Link to={"/"}><strong>Home</strong></Link> 
            <Link to={"/mission"}><strong>Mission</strong></Link> 
            <Link to={"/team"}><strong>Our Team</strong></Link> 
            <Link to={"/camps"}><strong>Camps</strong></Link> 
        </div>
    );
};

export interface RoutingBarProps {
    textColor: string;
    footer: boolean;
}
