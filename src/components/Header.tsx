import styles from "./Header.module.css"
import elevateLogo from "../public/elevate-logo-white.png"
import RoutingBar from "./RoutingBar";


export default function Header() {
    return (
        <div className={styles.headerContainer}> 
            <img 
                src={elevateLogo}
                className={styles.elevateLogo}
                alt="Elevate Logo: Three overlapping mountains are arranged over the word Elevate" 
            />
            <RoutingBar textColor={"white"} footer={false}/>
        </div>
    );
};