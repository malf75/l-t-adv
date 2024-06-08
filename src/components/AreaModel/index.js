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
            <a href='#inicio' className='ancora__inicio'><div><i className="fa-solid fa-angle-up"></i></div> 
            Voltar para o início</a>
        </article>
    )
}