import styles from './Anchor.module.css'

export default function Anchor({reference, children}){
    console.log('test')
    return(
        <a className={styles.redirect__btn} href={reference}>{children}</a>
    )
}