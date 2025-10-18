import Styles from '../css/Pecas.module.css'
import Chaveiro from '../Imagens/chaveiro.png'
import Tapete from '../Imagens/tapetePorta.png'
import Quarto from '../Imagens/tapeteQuarto.png'
import Souplat from '../Imagens/souplat.png'
import Banheiro from '../Imagens/jogoBanheiro.png'
import TesteProps from '../componentes/PecasProps'

function Apoio() {
    return(
            
        <>          
         <div className={Styles.area} id="pecasok">
            <TesteProps
            imagem ={Chaveiro}
            titulo = 'Chaveiro de coração'
            preco = 'R$180,00'
            />
           <TesteProps
            titulo = 'Souplat com 4 peças'
            imagem ={Souplat}
            preco = 'R$100,00'
            />
            <TesteProps
            titulo = 'Tapete de porta'
            imagem ={Tapete}
            preco = 'R$35,00'
            />
            <TesteProps
            titulo = 'Tapete de quarto'
            imagem ={Quarto}
            preco = 'R$200,00'
            />
            <TesteProps
            titulo = 'Jogo de banheiro'
            imagem ={Banheiro}
            preco = 'R$110,00'
            />
            </div>

        
        </>
    )
}

export default Apoio