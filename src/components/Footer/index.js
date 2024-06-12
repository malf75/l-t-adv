import styles from './Footer.module.css'

export default function Footer(){
    const location = window.location.pathname
    return(
        <div className={styles.footer}>
            <div className={styles.localizacao}>
                <h2 className={styles.titulo__localizacao}>Localização</h2>
                <p>Conjunto Dom Adelmo Machado,
                Térreo, Sala 33 - Cruz das Almas,
                Maceió-AL, CEP: 57038-050.
                </p>
            </div>
            <div className={styles.developed}>
                <h4 className={styles.sign}>Developed by MaLf</h4>
                <a href='mailto:malfbf6@gmail.com' className={styles.email__developed}>Malfbf6@gmail.com</a>
                <a href='https://github.com/malf75' className={styles.github__developed}>Github</a>
            </div>
            <div className={styles.logo__footer}>
                <img className={styles.logo__img} src={location === '/' ? './images/Prancheta 1.png' : '.././images/Prancheta 1.png'} alt='logo'/>
            </div>
        </div>
    )
}