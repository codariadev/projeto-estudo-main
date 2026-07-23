import Image from 'next/image';
import Button from '../primaryButton/primaryButton';
import styles from './page.module.css';

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.searchContainer}>
        <input placeholder='Procurar'/>
        <Button variant="search">Pesquisar</Button>
      </div>
      <div className={styles.rightIcon}>
        <Image src="/icon-sidebar/notificacao.svg" alt='notifcação' width={25} height={25}/>
        <Image src="/icon-sidebar/email.svg" alt='email' width={25} height={25}/>
        <Image src="/icon-sidebar/perfil.svg" alt='perfil' width={25} height={25}/>
      </div>
    </header>
  );
}