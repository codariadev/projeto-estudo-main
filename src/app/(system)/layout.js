import Sidebar from '@/components/sidebar/page';
import Topbar from '@/components/topbar/page';
import styles from './layout.module.css';

export default function SystemLayout({ children }) {
  return (
    <div className={styles.systemContainer}>
      <div className={styles.sidebarArea}>
        <Sidebar />
      </div>
      <div className={styles.topbarArea}>
        <Topbar />
      </div>
      <main className={styles.mainArea}>
        {children}
      </main>
    </div>
  );
}