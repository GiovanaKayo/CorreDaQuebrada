import Styles from '../css/Avaliacoes.module.css'
import Adriana from '../Imagens/adriana.png'
import Sabrina from '../Imagens/sabrina.png'
import Victor from '../Imagens/victor.png'
import Props from '../componentes/AvaliacoesProps'

function Apoio() {
    return(
            
        <>   
         <div className={Styles.avaliacoes}><h1>Avaliações</h1></div>       
         <div className={Styles.area}>
            <Props
            imagem ={Adriana}
            nome = 'Adriana Mendes Lima'
            peca = 'Kit de Banheiro de Crochê'
            comentario = 'Lindo e bem feito! O kit é artesanal, com ótimo acabamento e materiais de qualidade. As cores deixaram o banheiro mais aconchegante e elegante. As peças encaixam perfeitamente e o tapete não escorrega.'  
            />
           <Props
            nome = 'Victor de Melo Souza'
            imagem ={Victor}
            comentario = 'Perfeitos e cheios de charme! Os sousplats são lindos, com acabamento impecável e pontos bem feitos. Deram um toque especial à minha mesa e impressionaram as visitas. As cores vieram exatamente como pedi. Muito capricho e entrega no prazo. Recomendo demais!'
            />
            <Props
            nome = 'Sabrina Fernandes'
            imagem ={Sabrina}
            comentario = 'O kit é feito com muito capricho, pontos firmes e ótimo acabamento. Deixou meu banheiro muito mais bonito e acolhedor. As peças se encaixam certinho e o material é de ótima qualidade.'
            />
            </div>

        
        </>
    )
}

export default Apoio