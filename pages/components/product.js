import styles from '../../styles/Product.module.scss'

export default function Product({children}) {

    return(
        <div className={styles.container}>
            <p>{children}</p>
        </div>
    )
}