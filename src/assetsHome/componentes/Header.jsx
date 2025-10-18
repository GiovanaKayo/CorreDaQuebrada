import Styles from '../css/Header.module.css'
import Logo from '../Imagens/Logo.png'
import Lupa from '../Imagens/lupa.png'

function Header2() {

    return (
        <header className={Styles.header}>
            <div className={Styles.logo}>
                <nav><a href="#"> <img src={Logo} alt="Logo" /></a></nav>
            </div>

            <div className={Styles.pesquisa}>
                <form action="">
                    <div className={Styles.borda}>
                        <img src={Lupa} alt="lupa" className={Styles.icone} />
                        <input
                            className={Styles.caixa}
                            type="text"
                            placeholder="Pesquisar"
                        />
                    </div>
                </form>
            </div>
            <nav className={Styles.navigation}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Catálogos</a></li>
                    <li><a href="#">Projetos</a></li>
                </ul>
            </nav>
            <button className={Styles.pedido}>Fazer pedido</button>
        </header>
    )
}

export default Header2