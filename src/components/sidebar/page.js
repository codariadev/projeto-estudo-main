import Image from "next/image";
import styles from "./page.module.css";

export default function Sidebar() {
  const menuItems = [
    { href: "#", icon: "/icon-sidebar/home.svg", alt: "Início", label: "Início" },
    { href: "#", icon: "/icon-sidebar/projetos.svg", alt: "Projetos", label: "Projetos" },
    { href: "#", icon: "/icon-sidebar/minhas-tarefas.svg", alt: "Minhas Tarefas", label: "Minhas Tarefas" },
    { href: "#", icon: "/icon-sidebar/calendario.svg", alt: "Calendário", label: "Calendário" },
    { href: "#", icon: "/icon-sidebar/relatorios.svg", alt: "Relatórios", label: "Relatórios" },
    { href: "#", icon: "/icon-sidebar/times.svg", alt: "Times", label: "Times" },
    { href: "#", icon: "/icon-sidebar/clientes.svg", alt: "Clientes", label: "Clientes" },
    { href: "#", icon: "/icon-sidebar/configuracao.svg", alt: "Configurações", label: "Configurações" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.menuContainer}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.sidebarLogo}
            src="/sidebar-logo.png"
            alt="side-bar logo"
            loading="eager"
            width={260}
            height={65}
          />
        </div>

        {/* MUDANÇA: Utiliza map() para renderizar os itens de forma dinâmica e limpa sem necessidade de fazer li por li */}
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <Image src={item.icon} alt={item.alt} width={30} height={30} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.logoffContainer}>
        <li className={styles.logoffButton}>
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
    </aside>
  );
}