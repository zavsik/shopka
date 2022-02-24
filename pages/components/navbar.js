import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.scss'

function Navbar(props) {
    return(
        <Link href={'/'}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <div>
                        <p>{props.icon}</p>
                        </div>
                        <h3>Shopka</h3>
                    </div>
                <div className={styles.search__field}>
                    <div className={styles.input__set}>
                    <Image src={'/icons/search__icon.svg'} width={17.5} height={17.5}/>
                    <input placeholder={'Поиск...'} type='search'/>
                    </div>
                </div>
                <div className={styles.login__btn}>
                    <Link href={'/login'}>
                        <a>
                            <button>Войти</button>
                        </a>
                    </Link>

                    <button onClick={props.createProduct}>ADD</button>
                </div>
            </div>
        </Link>
    )
}

export default Navbar