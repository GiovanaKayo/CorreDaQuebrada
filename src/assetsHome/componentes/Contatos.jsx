import Styles from '../css/Contatos.module.css';
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from 'react-icons/fa';

function Contatos() {
  return (
    <section className={Styles.container}>

      <div className={Styles.container_pedido}>
        <h1>
          Faça seu <span className={Styles.pedido}>pedido</span><br />
          solicitando um orçamento
        </h1>
        <p>
          Quer uma peça exclusiva feita só para você? Aqui é o lugar ideal para enviar suas ideias,
          solicitar orçamentos e combinar todos os detalhes da sua encomenda.
          Preencha o formulário e vamos criar algo lindo juntas!
        </p>
      </div>


      <div className={Styles.formulario}>
        <h2 className={Styles.formulario_titulo}>Preencha os campos abaixo</h2>
        <form className={Styles.forms}>
          <div className={Styles.entrada_icone}>
            <FaUser className={Styles.icone} />
            <input type="text" placeholder="Nome" />
          </div>

          <div className={Styles.entrada_icone}>
            <FaEnvelope className={Styles.icone} />
            <input type="email" placeholder="Email" />
          </div>

          <div className={Styles.entrada_icone}>
            <FaPhone className={Styles.icone} />
            <input type="tel" placeholder="Telefone" />
          </div>

          <div className={`${Styles.entrada_icone} ${Styles.texto_area}`}>
            <FaRegCommentDots className={`${Styles.icone} ${Styles.icone_area}`} />
            <textarea placeholder="Descrição do pedido" maxLength="500"></textarea>
          </div>

          <button type="submit" className={Styles.botao}>
            Solicitar orçamento
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contatos;
