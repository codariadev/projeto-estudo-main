import styles from './primaryButton.module.css'

export default function Button ({ children, variant = 'primary'}) {
    const buttonClass = `${styles[variant]}`;

    return ( 
        <button className={buttonClass}>
            {children}
        </button>
    );
}