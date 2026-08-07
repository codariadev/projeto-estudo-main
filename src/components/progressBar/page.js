import styles from './page.module.css'

export default function ProgressBar({ percentual }) {
    const valor = Math.min(Math.max(percentual, 0), 100);

    return (
        <div className={styles.bar}>
            <div className={styles.fill} style={{ width: `${valor}%` }} />
            <span className={styles.text}>{valor}%</span>

        </div>
    )

}