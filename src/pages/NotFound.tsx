import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import styles from "../styles/pages/NotFound.module.css";

export const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.textContainer}>
                <h1 className={styles.heading}>404</h1>
                <p className={styles.subheading}>Oops! Page not found</p>
                <a href="/" className={styles.link}>Return to Home</a>
            </div>
        </div>
    );
};