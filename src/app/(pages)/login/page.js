import Image from "next/image";
import styles from "./page.module.css";

import Button from "@/components/primaryButton/primaryButton";

export default function Login() {
  return (
    <main className={styles.loginPage}>
      <form className={styles.loginCard}>
        <Image src="/logo.png" alt="logo" width={405} height={270} loading="eager" />
        <div className={styles.loginForm}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />

          <Button variant="primary">Login</Button>

          {/* <button className={styles.submit} type="submit">Log in</button> */}
          <p className={styles.forgotPassword}>
            <a href="#" target="_blank">
              Esqueceu sua senha?
            </a>
          </p>
        </div>
        <p className={styles.noAccount}>
          Ainda não tenho conta?
          <a href="#" target="_blank">
            inscrever-se
          </a>
        </p>
      </form>
    </main>
  );
}
