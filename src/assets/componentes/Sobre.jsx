import Styles from '../css/Sobre.module.css'
import Losango from '../Imagens/Losango.png'
import ChaveiroFLor from '../Imagens/chaveiroFlor.png'



function Sobre() {
    return (



        <section className={Styles.home}>
            <div className={Styles.overlay}>
                
            <h1 className={Styles.feito}>🌸Feito à mão com amor, <br /> pensado para você🌸</h1>
            <p className={Styles.descubra}>Descubra peças únicas e artesanais em crochê que encantam e aquecem o <br /> coração. Cada criação é feita com cuidado, delicadeza e um toque especial <br /> de carinho. Vista sua casa e seu estilo com charme e autenticidade!</p>
            <div className={Styles.container}>
            <img className={Styles.losango} src={Losango} alt="" />    
            <img className={Styles.losango} src={Losango} alt="" />
            <img className={Styles.losango} src={Losango} alt="" />
            </div>
            <h1 className={Styles.pecas}>Peças customizadas</h1>
            <h1 className={Styles.recriacao}>Recriação de peças</h1>
            <h1 className={Styles.kits}>Kits completos</h1>
            <div className={Styles.vouve}><img className={Styles.chaveiroflor} src={ChaveiroFLor} alt="" /></div>
            <div className={Styles.caixabotao}>
            <button className={Styles.ver}>Ver catálogo</button>
            <button className={Styles.fazer}>Fazer pedido</button>
            </div>
            </div>
            
        </section>

    )
}

export default Sobre