import styles from './Areas.module.css'
import areas from '../../json/areas.json'
import Button from '../Button'

export default function Areas(){

    areas.forEach(area => {
        return area
    })

    return (
        <div className={styles.Areas1} id='areas'>
                <div className={styles.titulo}>
                <h1>Áreas de Atuação</h1>
                </div>
                <div>
                <ul className={styles.Areas}>
                    {areas.map((area) => (
                        <li key={area.id} className={styles.Area__card}>
                            <img src='./images/4.png' alt='algemas'/>
                            <h3 className={styles.Area__titulo}>{area.titulo}</h3>
                            <Button reference={`areas/${area.id}`} poshg='poshg'>SAIBA MAIS</Button>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
    )
}