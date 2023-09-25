import styles from './Main.module.scss';
import character from 'assets/main/character.png';

export default function Main() {
    return <>
        <div className={styles.background_image}>
            <div className={styles.main_panel}>
                <img src={character} className={styles.background_character} alt='Levi do anime Attack On Titan' />
                <div className={styles.info_panel}>
                    <h1 className={styles.info_panel__title}>Anime Bites</h1>
                    <p className={styles.info_panel__description}>description</p>
                </div>
            </div>
            <div className={styles.backdrop_blur}></div>
        </div>
    </>;
}