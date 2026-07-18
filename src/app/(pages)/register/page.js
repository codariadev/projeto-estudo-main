import styles from './page.module.css'

export default function Login() {
  return (
    <main className={styles.container}>
        
            <h1>Register Page</h1>  
            <form className={styles.form}>
                <div className={styles.divForm}>
                    <label for="email" className={styles.labelForm}>Email</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div className={styles.divForm}>
                    <label for="password" className={styles.labelForm}>Password</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div className={styles.divForm}>
                    <label for="confirmPassword" className={styles.labelForm}>Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword"/>
                </div>
                <button className={styles.submit} type="submit">Register</button>
            </form>
        
    </main>
  );
}
