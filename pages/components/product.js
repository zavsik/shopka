import styles from '../../styles/Product.module.scss'
import Image from 'next/image'

export default function Product(props) {

    return(
        <div className={styles.container}>
            <div>
                <Image src={props.link} width={250} height={250} />
            </div>
            <div>
                <p>Товар для лохов, а дороги ... тоже для Лохов!</p>
            </div>
            <div>
                <button>Купить</button>
            </div>
        </div>
    )
}