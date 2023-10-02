import styles from './Product.module.scss';

type ProductProps = {
    name: string;
    img: string;
    price: number;
};

export default function Product({name, img, price}: ProductProps) {
    return <>
        <div className={styles.product}>
            <div className={styles.product__image_container}>
                <img src={img} alt={name} className={styles.product__image_container__image} />
            </div>
            <div className={styles.product__info}>
                <p className={styles.product__info__name}>{ name }</p>
                <p className={styles.product__info__price}>{ price }</p>
            </div>
        </div>
    </>;
}