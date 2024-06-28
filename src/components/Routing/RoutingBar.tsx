import { Link } from "react-router-dom";
import styles from "./RoutingBar.module.css";
import { RoutingLinks, routes } from "./RoutingLinks";

export default function RoutingBar(props: RoutingBarProps) {

    const handleOnClick = () => {
        props.setDisplay(!props.display);
    };

    return (
        <div className={props.display? styles.linkContainerMenu : styles.linkContainer}>
            {routes.map((r: RoutingLinks) => (
                <Link key={r.id} to={r.route} onClick={handleOnClick}><strong>{r.displayName}</strong></Link>
            ))}
        </div>
    );
};

export interface RoutingBarProps {
    display: boolean;
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}
