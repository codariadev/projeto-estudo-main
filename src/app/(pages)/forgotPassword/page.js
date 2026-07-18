import styles from './page.module.css'

export default function forgotPassword() {
  return (
    <main className={styles.forgotPasswordPage}>
            <form className={styles.forgotPasswordCard}>
              <img src="/logo.png" alt="logo"/>
                <div className={styles.forgotPasswordForm}>      
                    <input type="email" name="email" id="email" placeholder='Email'/>
                    {/* <button className={styles.submit} type="submit">Recuperar</button> */}
                </div>
            </form>
    </main>
  );
}