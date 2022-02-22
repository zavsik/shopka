import styles from '../../styles/Product.module.scss'
import Image from 'next/image'

export default function Product(props) {

    return(
        <div className={styles.container}>
            <Image src={props.link} width={250} height={250} />
            <button>Купить</button>
        </div>
    )
}