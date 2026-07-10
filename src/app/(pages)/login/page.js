import styles from './page.module.css'

export default function Login() {
  return (
    <main>
        <section>
            <h1>Login</h1>  
            <form className={styles.form}>
                <div className={styles.div-form}>
                    <label for="email" className={styles.label-form}>Email</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div className={styles.div-form}>
                    <label for="password" className={styles.label-form}>Password</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <p className={styles.p}><a href="#" target="_blank">Forgot password?</a></p>
                <button className={styles.submit} type="submit">Log in</button>
                <p className={styles.p}>Don't have an account? <a href="#" target="_blank">Sign up</a></p>
            </form>
        </section>
    </main>
  );
}
