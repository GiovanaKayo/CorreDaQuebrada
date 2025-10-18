import Styles from '../css/AvaliacoesProps.module.css'

function TesteProps({nome, comentario, imagem, peca}) {
    return(
        <>
            <div className={Styles.caixa}>
            <img className={Styles.imagem} src= {imagem} alt="imagens" />
            <h3 className={Styles.nome}> {nome}</h3> 
            <p className={Styles.comentario}>{comentario}</p>
            </div>
               
        </>


    )
    
}



export default TesteProps