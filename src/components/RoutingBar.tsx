import { Link } from "react-router-dom";
import styles from "./RoutingBar.module.css";

export default function RoutingBar() {
    return (
        <div className={styles.linkContainer}>
            <Link to={"/"} style={{color: "white"}}>Home</Link> 
            <Link to={"/mission"} style={{color: "white"}}>Mission</Link> 
            <Link to={"/team"} style={{color: "white"}}>Our Team</Link> 
            <Link to={"/camps"} style={{color: "white"}}>Camps</Link> 
        </div>
    );
};
