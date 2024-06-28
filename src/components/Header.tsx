import styles from "./Header.module.css"
import elevateLogo from "../public/elevate-logo-white.png"
import RoutingBar from "./Routing/RoutingBar";
import { useState } from 'react';


export default function Header() {
    const [displayDropdown, setDisplayDropdown] = useState<boolean>(false);

    const handleOnClick = () => {
        setDisplayDropdown(!displayDropdown);
    };

    return (
        <div className={styles.headerContainer}> 
            <img 
                src={elevateLogo}
                className={styles.elevateLogo}
                alt="Elevate Logo: Three overlapping mountains are arranged over the word Elevate" 
            />
            <i className='bx bx-menu' id={styles['menu-item']} onClick={handleOnClick}></i>
            <RoutingBar display={displayDropdown} setDisplay={setDisplayDropdown}/>
        </div>
    );
};