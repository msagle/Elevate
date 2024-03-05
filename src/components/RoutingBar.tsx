import { Link } from "react-router-dom";
import styles from "./RoutingBar.module.css";

export default function RoutingBar(props: RoutingBarProps) {
    return (
        <div className={styles.linkContainer}>
            <Link to={"/"} style={{color: props.textColor, textDecoration: "none"}}><strong>Home</strong></Link> 
            <Link to={"/mission"} style={{color: props.textColor, textDecoration: "none"}}><strong>Mission</strong></Link> 
            <Link to={"/team"} style={{color: props.textColor, textDecoration: "none"}}><strong>Our Team</strong></Link> 
            <Link to={"/camps"} style={{color: props.textColor, textDecoration: "none"}}><strong>Camps</strong></Link> 
        </div>
    );
};

export interface RoutingBarProps {
    textColor: string;
    footer: boolean;
}
