import Image from "next/image";
import styles from "./page.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.menuList}>
        <Image
          src="/sidebar-logo.png"
          alt="side-bar logo"
          loading="eager"
          width={260}
          height={65}
        />
        <div className={styles.menuItem}>
          <li>
            <Image
              src="/icon-sidebar/home.svg"
              alt="home"
              loading="eager"
              width={30}
              height={30}
            />
            <span>Início</span>
          </li>
        </div>
        <div className={styles.menuItem}>
          <li>
            <Image
              src="/icon-sidebar/projetos.svg"
              alt="projetos"
              loading="eager"
              width={30}
              height={30}
            />
            <span>Projetos</span>
          </li>
        </div>
        <div className={styles.menuItem}>
          <li>
            <Image
              src="/icon-sidebar/minhas-tarefas.svg"
              alt="Minhas Tarefas"
              loading="eager"
              width={30}
              height={30}
            />
            <span>Minhas Tarefas</span>
          </li>
        </div>
        <div className={styles.menuItem}>
          <li>
            <Image
              src="/icon-sidebar/calendario.svg"
              alt="Calendário"
              loading="eager"
              width={30}
              height={30}
            />
            <span>Calendário</span>
          </li>
        </div>
        <div className={styles.menuItem}>
          <li>
            <Image
              src="/icon-sidebar/relatorios.svg"
              alt="relatorios"
              loading="eager"
              width={30}
              height={30}
            />
            <span>Relatórios</span>
          </li>
        </div>
        <div className={styles.menuItem}>
          <li>
            <Image
              src="/icon-sidebar/times.svg"
              alt="Times"
              loading="eager"
              width={30}
              height={30}
            />
            <span>Times</span>
          </li>
        </div>
        <div className={styles.menuItem}>
          <li>
            <Image
              src="/icon-sidebar/clientes.svg"
              alt="Clientes"
              loading="eager"
              width={30}
              height={30}
            />
            <span>Clientes</span>
          </li>
        </div>
        <div className={styles.menuItem}>
          <li>
            <Image
              src="/icon-sidebar/configuracao.svg"
              alt="projetos"
              loading="eager"
              width={30}
              height={30}
            />
            <span>Configurações</span>
          </li>
        </div>
      </div>

      <div className={styles.menuList}>
        <div className={styles.menuItem}>
          <li>
            <Image
              src="/icon-sidebar/sair.svg"
              alt="sair"
              loading="eager"
              width={30}
              height={30}
            />
            <span>Desconectar</span>
          </li>
        </div>
      </div>
    </aside>
  );
}
