import styles from './Button.module.css'

export default function Button({reference, children, poshg}){
    return (
        <a className={`${styles.redirect__contato} ${styles[poshg]}`} href={reference}>{children}</a>
    )
}