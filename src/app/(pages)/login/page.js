import styles from './page.module.css'

export default function Login() {
  return (
    <main className={styles.loginPage}>  
            <form className={styles.loginCard}>
              <img src="" alt="logo"/>
                <div className={styles.loginForm}>
                    <label for="email" className={styles.labelForm}>Email</label>
                    <input type="email" name="email" id="email" required/>
                
                    <label for="password" className={styles.labelForm}>Password</label>
                    <input type="password" name="password" id="password"/>

                    {/* <button className={styles.submit} type="submit">Log in</button> */}
                    <p className={styles.p}><a href="#" target="_blank">Forgot password?</a></p>
                </div>
                <p className={styles.p}>Don't have an account? <a href="#" target="_blank">Sign up</a></p>
            </form>
    </main>
  );
}
