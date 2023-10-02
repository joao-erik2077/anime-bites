import productsData from 'data/products.json';
import styles from './Products.module.scss';
import Searchbar from '../../components/searchbar/Searchbar';
import Product from 'components/product/Product';
import { useState } from 'react';

export default function Products() {
    const [search, setSearch] = useState('');

    return <>
        <main className={styles.main}>
            <div className={styles.main__searchbar}>
                <Searchbar placeholder='Pesquisar...' search={search} setSearch={setSearch} />
            </div>
            <div className={styles.main__products}>
                {
                    productsData
                        .filter(e => (e.nome.toLowerCase().indexOf(search.toLowerCase()) !== -1))
                        .map(e => <Product name={e.nome} price={e.price} img={e.img} />)
                }
            </div>
        </main>
    </>;
}