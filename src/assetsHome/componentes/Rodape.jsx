import Styles from '../css/Rodape.module.css'
import Logo from '../Imagens/logoBranca.png'

function Rodape() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.logo_branca}>
                <img className={Styles.logobranca} src={Logo} alt="" />
                <div className={Styles.paragrafo_ascend}>
                    <p>Feito à mão com amor, pensado para você</p>
                </div>
            </div>
            <div className={Styles.navegacao}>
                <h3>Navegação</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Catálogo</a></li>
                    <li><a href="#">Seriços</a></li>
                    <li><a href="#">Clientes</a></li>
                </ul>
            </div>
            <div className={Styles.contato}>
                <h3>Contato</h3>
                <p><i class="bi bi-envelope"></i>priscilakayo02@gmail.com</p>
                <p>(11) 97667-1466</p>
            </div>

            <div className={Styles.redes_sociais}>
                <h3>Redes Sociais</h3>
                <a href="#"><i class="bi bi-whatsapp"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>

            </div>
        </footer>
    )
}

export default Rodape