import styles from './Navbar.module.scss';
import Searchbar from '../searchbar/Searchbar';

export default function Navbar() {
    return <>
        <nav className={styles.navbar}>
            <h1 className={styles.navbar__title}>ANIME BITES</h1>
            <Searchbar placeholder='Pesquisar...' />
        </nav>
    </>;
}