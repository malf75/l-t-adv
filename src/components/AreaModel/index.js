import styles from './AreaModel.module.css'

export default function AreaModel({children, titulo}){
    return (
        <article className={styles.areaModeloContainer}>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>
            <div className={styles.areaConteudoContainer}>
                {children}
            </div>
        </article>
    )
}