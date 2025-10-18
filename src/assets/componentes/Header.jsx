import Styles from '../css/Header.module.css';
import Logo from '../Imagens/Logo.png';
import Lupa from '../Imagens/lupa.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>
        <nav><Link to="/"> <img src={Logo} alt="Logo" /></Link></nav>
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
          <li><Link to="/home">Home</Link></li>
            <li><a href="#pecasok">Catálogos</a></li>

          <li><a href="#servicosok">Serviços</a></li>
        </ul>
      </nav>
      <button className={Styles.pedido}><Link to="/pedido"> <a>Fazer pedido</a></Link></button>
    </header>
  );
}

export default Header