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
            <section className={styles.details}>
                <div className={styles.details__info_panel}>
                    <h1 className={styles.details__info_panel__title}>ANIME BITES</h1>
                    <hr className={styles.details__info_panel__line} />
                    <p className={styles.details__info_panel__description}>
                    Onde a ficção encontra a realidade
                    </p>
                </div>
            </section>
        </ImagePanel>
        <div style={{height: '150vh'}}></div>
    </>;
}