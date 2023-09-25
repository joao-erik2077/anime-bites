import styles from './ImagePanel.module.scss';

interface ImagePanelProps {
    backgroundImage: string;
    panelImage?: string;
    panelImageAlt?: string;
    children?: any;
}

export default function ImagePanel(props: ImagePanelProps) {
    return <>
        <div 
            className={styles.background_image} 
            style={{backgroundImage: `url(${props.backgroundImage})`}}
        >
            <div className={styles.main_panel}>
                {
                    props.panelImage && 
                    <img 
                        src={props.panelImage} 
                        className={styles.main_panel__background_character} 
                        alt={props.panelImageAlt}
                    />
                }
                {props.children}
            </div>
            <div className={styles.backdrop_blur}></div>
        </div>
    </>;
}