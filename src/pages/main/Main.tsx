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
                <hr className={styles.info_panel__line} />
                <p className={styles.info_panel__description}>
                Anime Bites é o lugar onde sua paixão pelo anime se encontra com pratos deliciosos. 
                Explore um cardápio inspirado em seus personagens favoritos, saboreie os sabores do 
                Japão e mergulhe em uma atmosfera otaku única. É a fusão perfeita entre culinária e 
                cultura anime em um só lugar
                </p>
            </div>
        </ImagePanel>
    </>;
}