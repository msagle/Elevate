import { Link } from "react-router-dom";
import styles from "./RoutingBar.module.css";

export default function RoutingBar(props: RoutingBarProps) {
    return (
        <div className={styles.linkContainer}>
            <Link to={"/"} style={{color: props.textColor, textDecoration: "none"}}>Home</Link> 
            <Link to={"/mission"} style={{color: props.textColor, textDecoration: "none"}}>Mission</Link> 
            <Link to={"/team"} style={{color: props.textColor, textDecoration: "none"}}>Our Team</Link> 
            <Link to={"/camps"} style={{color: props.textColor, textDecoration: "none"}}>Camps</Link> 
        </div>
    );
};

export interface RoutingBarProps {
    textColor: string;
}
