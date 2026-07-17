import styles from './page.module.css'

export default function Register() {
  return (
    <main className={styles.registerPage}>
            <form className={styles.registerCard}>
              <img src="/logo.png" alt="logo"/>
                <div className={styles.registerForm}>      
                    <input type="email" name="email" id="email" Placeholder='Email'/>
                
                    <input type="password" name="password" id="password" Placeholder='Senha'/>

                    <input type="password" name="password" id="password" placeholder='Confirme sua senha'/>
                    {/* <button className={styles.submit} type="submit">Log in</button> */}
                </div>
              <p className={styles.haveAccount}>Já tem conta? <a href="#" target="_blank">acesse</a></p>
            </form>
    </main>
  );
}