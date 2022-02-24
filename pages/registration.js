import Link from 'next/link'
import styles from '../styles/Auth.module.scss'


export default function Login() {
    return(
        <div className={styles.container}>
            <div>
                <Link href={'/'}>
                    <div className={styles.logo}>
                        <div>
                            <p>S</p>
                        </div>
                        <h3>Shopka</h3>
                    </div>
                </Link>
                <div className={styles.frame}>
                    <div className={styles.form__block}>
                        <h3>Регистрация</h3>                        
                        <form>
                            <input placeholder='Почта' />
                            <input placeholder='Пароль' />
                            <input placeholder='Пов-пароль' />
                            <button>Создать</button>
                        </form>
                        <p>
                            У вас уже есть аккаунт?
                            <Link href={'/login'}><a>Войти!</a></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}