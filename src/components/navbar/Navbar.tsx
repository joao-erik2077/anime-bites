import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }

        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [showNavbar]);
    return <>
        <nav className={styles.navbar} style={{visibility: showNavbar ? 'visible' : 'hidden'}}>
            <h1 className={styles.navbar__title}>ANIME BITES</h1>
        </nav>
    </>;
}