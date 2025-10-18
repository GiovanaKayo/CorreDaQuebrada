import Styles from '../css/PecasProps.module.css'

function TesteProps({titulo, texto, preco, imagem}) {
    return(
        <>
     
            <div className={Styles.caixa}>
            <img className={Styles.imagem} src= {imagem} alt="imagens" />
            <h3 className={Styles.titulo}> {titulo}</h3>           
            <p className={Styles.texto}>{texto}</p>
            <h4 className={Styles.preco}>{preco}</h4>
    
            </div>
            
        
        
        </>


    )
    
}



export default TesteProps