"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Button from "@/components/primaryButton/primaryButton";

export default function Login() {
  const router = useRouter();

  async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api-firebase-auth.vercel.app/api/login'; 

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login efetuado com sucesso!');
        
        localStorage.setItem('sincroalign_token', data.token);

        // router.push('/dashboard'); 
      } else {
        alert(`Erro no login: ${data.error}`);
      }
    } catch (error) {
      console.error('Erro de ligação ao servidor:', error);
      alert('Não foi possível ligar ao servidor de autenticação.');
    }
  }

  return (
    <main className={styles.loginPage}>
      <form className={styles.loginCard} onSubmit={handleLogin}>
        <Image src="/logo.png" alt="logo" width={405} height={270} loading="eager" />
        <div className={styles.loginForm}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            id="password"
            placeholder="Senha"
            required
          />

          <Button variant="primary" type="submit">Login</Button>

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