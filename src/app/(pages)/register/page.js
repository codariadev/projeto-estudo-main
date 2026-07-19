import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/primaryButton/primaryButton";

export default function Register() {
  return (
    <main className={styles.registerPage}>
      <form className={styles.registerCard}>
        <Image src="/logo.png" alt="logo" width={405} height={270} loading="eager"/>
        <div className={styles.registerForm}>
          <input type="email" name="email" id="email" placeholder="Email" />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Confirme sua senha"
          />

          <Button variant="primary">Registrar</Button>
        </div>
        <p className={styles.haveAccount}>
          Já tem conta?{" "}
          <a href="#" target="_blank">
            acesse
          </a>
        </p>
      </form>
    </main>
  );
}
