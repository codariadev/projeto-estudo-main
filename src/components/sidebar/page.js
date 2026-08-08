"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/home",
      icon: "/icon-sidebar/home.svg",
      alt: "Início",
      label: "Início",
    },
    {
      href: "/projects",
      icon: "/icon-sidebar/projetos.svg",
      alt: "Projetos",
      label: "Projetos",
    },
    {
      href: "#",
      icon: "/icon-sidebar/minhas-tarefas.svg",
      alt: "Minhas Tarefas",
      label: "Minhas Tarefas",
    },
    {
      href: "#",
      icon: "/icon-sidebar/calendario.svg",
      alt: "Calendário",
      label: "Calendário",
    },
    {
      href: "#",
      icon: "/icon-sidebar/relatorios.svg",
      alt: "Relatórios",
      label: "Relatórios",
    },
    {
      href: "#",
      icon: "/icon-sidebar/times.svg",
      alt: "Times",
      label: "Times",
    },
    {
      href: "#",
      icon: "/icon-sidebar/clientes.svg",
      alt: "Clientes",
      label: "Clientes",
    },
    {
      href: "#",
      icon: "/icon-sidebar/configuracao.svg",
      alt: "Configurações",
      label: "Configurações",
    },
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

        <ul className={styles.menuList}>
          {menuItems.map((item, index) => {
            const isActive = item.href !== "#" && pathname === item.href;

            return (
              <Link key={index} className={`${styles.menuItem} ${isActive ? styles.active : ''}`} href={item.href}>
                <Image
                  className={styles.icon}
                  src={item.icon}
                  alt={item.alt}
                  width={30}
                  height={30}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
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
