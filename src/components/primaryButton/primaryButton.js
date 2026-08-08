import styles from './primaryButton.module.css'

export default function Button ({ children, variant = 'primary', size = 'md'}) {
    const buttonClass = `${styles.btn} ${styles[variant]} ${styles[size]}`;

    return ( 
        <button className={buttonClass}>
            {children}
        </button>
    );
}