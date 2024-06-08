import Anchor from '../Anchor'
import Button from '../Button'
import styles from './Header.module.css'

export default function Header(){
    const location = window.location.pathname
    if(location === '/'){
        return(
            <header className={styles.header} id='inicio'>
                    <div className={styles.logo}>
                        <img className={styles.logo__img} src='./images/Prancheta 1.png' alt='logo'/>
                    </div>
                    <div className='redirects'>
                        <Anchor reference={'#quem-somos'}>Quem Somos</Anchor>
                        <Anchor reference={'#areas'}>Áreas de Atuação</Anchor>
                    </div>
                    <div>
                        <Button reference={'#contato'}>CONTATO</Button>
                    </div>
            </header>
            )
    } else {
        return (
            <header className={styles.header} id='inicio'>
                    <div className={styles.logo}>
                        <img className={styles.logo__img} src='.././images/Prancheta 1.png' alt='logo'/>
                    </div>
                    <div>
                        <Button reference={'/'}>VOLTAR</Button>
                    </div>
            </header>
        )
    }
    
}