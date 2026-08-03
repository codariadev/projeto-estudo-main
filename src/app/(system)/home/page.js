import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/primaryButton/primaryButton";

export default function HomePage() {
  return (
    <main className={styles.home}>
      <div className='header'> {/* Criação da variavel css global para todos os headers*/}
        <h1>Dashboard Principal.</h1>
        <p>Bem-Vindo de volta, aqui está o resumo das suas atividades.</p>
      </div>
      <div className={styles.cardIcon}>
        <div className={styles.cardSection}>
          <div className={styles.iconMala}>
            <Image
              className={styles.ImageMala}
              src="/icon-dashboard-card-section/card-mala.svg"
              alt="logo"
              width={75}
              height={75}
              loading="eager"
            />
          </div>
          <p className={styles.text}>Projetos Ativos</p>
          <p className={styles.num}>12</p>
          <p className={styles.info}>
            <span>&uarr;20%</span> em relação ao mês anterior.
          </p>
        </div>
        <div className={styles.cardSection}>
          <div className={styles.iconRelogio}>
          <Image
            className={styles.ImageRelogioParede}
            src="/icon-dashboard-card-section/relogio-parede.svg"
            alt="Mala de viagem"
            width={75}
            height={75}
            loading="eager"
          />
          </div>
          <p className={styles.text}>Projetos Ativos</p>
          <p className={styles.num}>12</p>
          <p className={styles.info}>
            <span>&uarr;12%</span> em relação ao mês anterior.
          </p>
        </div>
        <div className={styles.cardSection}>
          <div className={styles.iconRelatorios}>
          <Image
            className={styles.ImageProjetosAtivos}
            src="/icon-dashboard-card-section/projetos-ativos.svg"
            alt="relogio"
            width={75}
            height={75}
            loading="eager"
          />
          </div>
          <p className={styles.text}>Projetos Ativos</p>
          <p className={styles.num}>12</p>
          <p className={styles.infoRelatorios}>
            <span>&uarr;5%</span> em relação ao mês anterior.
          </p>
        </div>
      </div>
      <div className={styles.actionsCard}>
        <h1>Ações Rápidas</h1>
        <p>Acesse as principais funcionalidades do sitema.</p>
        <div className={styles.btnActions}>
          <Button className={styles.btnIcon} variant="newProject"> <Image style={{fill:"aquamarine" }} src="sinal-de-mais.svg" alt="" width={30} height={30} />Criar novo projeto</Button>
          <Button className={styles.btnIcon} variant="viewProducts"> <Image src="relatorio-de-dados.svg" alt="" width={30} height={30} /> Ver Relatórios</Button>
        </div>
      </div>
    </main>
  );
}
