import styles from './Main.module.scss';
import character from 'assets/main/character.png';
import background from 'assets/main/aot_background.jpg';
import ImagePanel from 'components/imagepanel/ImagePanel';

export default function Main() {
    return <>
        <ImagePanel 
            backgroundImage={background} 
            panelImage={character} 
            panelImageAlt='Levi do anime Attack On Titan'
        >
            <div className={styles.info_panel}>
                <h1 className={styles.info_panel__title}>Anime Bites</h1>
                <p className={styles.info_panel__description}>description</p>
            </div>
        </ImagePanel>
    </>;
}