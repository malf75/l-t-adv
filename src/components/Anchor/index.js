import styles from './Anchor.module.css'

export default function Anchor({reference, children}){
    return(
        <a className={styles.redirect__btn} href={reference}>{children}</a>
    )
}