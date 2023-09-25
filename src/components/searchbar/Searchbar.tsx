import styles from './Searchbar.module.scss';

interface SearchbarProps {
    placeholder?: string;
}

export default function Searchbar(props: SearchbarProps) {
    return <>
        <input type="text" className={styles.input} placeholder={props.placeholder} />
    </>;
}