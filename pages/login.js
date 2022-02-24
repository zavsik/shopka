import styles from '../styles/Navbar.module.scss'

export default function Login() {
    return(
        <div>
            <div>
                <div className={styles.logo}>
                    <div>
                        <p>S</p>
                    </div>
                    <h3>Shopka</h3>
                </div>

                <div>
                    <form>
                        <input placeholder='Почта' />
                        <input placeholder='Пароль' />
                        <button>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}