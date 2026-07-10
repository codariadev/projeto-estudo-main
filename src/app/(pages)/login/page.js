'use client'
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from './page.module.css'

export default function Login() {

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, "email", "senha");
      console.log("Logado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.container}>
      {/* // Codigo HTML */}
    </main>
  );
}
