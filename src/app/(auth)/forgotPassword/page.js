import styles from "./page.module.css";
import Image from "next/image";

import Button from "@/components/primaryButton/primaryButton";

export default function forgot() {
  return (
    <main className={styles.forgotPasswordPage}>
      <form className={styles.forgotPasswordCard}>
        <Image src="/logo.png" alt="logo" width={405} height={270} loading="eager"/>
        <div className={styles.forgotPasswordForm}>
          <input type="email" name="email" id="email" placeholder="Email" />
          <Button variant="btn-primary" size="btn-sm">Recuperar</Button>
        </div>
      </form>
    </main>
  );
}
