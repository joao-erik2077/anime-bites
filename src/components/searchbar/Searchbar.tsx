import styles from './Searchbar.module.scss';

type SearchbarProps = {
    placeholder?: string;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function Searchbar({placeholder, search, setSearch}: SearchbarProps) {
    return <>
        <input 
            type="text" 
            className={styles.input} 
            placeholder={placeholder}
            value={search}
            onChange={e => setSearch(e.target.value)} />
    </>;
}