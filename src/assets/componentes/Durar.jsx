import { useState, useEffect, useRef } from 'react';
import Styles from '../css/Durar.module.css';
import Losango from '../Imagens/losangoPreto.png';
import Tapete1 from '../Imagens/tapeteAmarelo.jpeg';
import Tapete2 from '../Imagens/tapeteAzul.jpeg';
import Tapete3 from '../Imagens/tapeteMarrom.jpeg';
import Tapete4 from '../Imagens/tapeteRosa.jpeg';
import Tapete5 from '../Imagens/tapeteJuntos.jpeg';

function Servicos() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const images = [Tapete1, Tapete2, Tapete3, Tapete4, Tapete5];
    const textElementsRef = useRef([]);

    const nextImage = () => {
        setIsAutoPlaying(false);
        setCurrentImage((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const prevImage = () => {
        setIsAutoPlaying(false);
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(Styles.visible);
                }
            });
        }, { threshold: 0.1 });

        textElementsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            textElementsRef.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <section className={Styles.servicos}>
            <h1 className={Styles.proposito} ref={(el) => textElementsRef.current[0] = el}>
                Arte em crochê feita para durar
            </h1>
            <p className={Styles.atersanais} ref={(el) => textElementsRef.current[1] = el}>
                Tradição e afeto se unem em peças artesanais cheias de personalidade.   <br /> Crochê feito com paciência, capricho e aquele toque especial que só o feito <br /> à mão tem. Leve mais calor para sua vida!
            </p>
            
            <div className={Styles.container} ref={(el) => textElementsRef.current[2] = el}>
                <img className={Styles.losangopreto} src={Losango} alt="" />    
                <img className={Styles.losangopreto} src={Losango} alt="" />
                <img className={Styles.losangopreto} src={Losango} alt="" />
            </div>
            
            <h1 className={Styles.exclusivas} ref={(el) => textElementsRef.current[3] = el}>
                Modelos sob medida.
            </h1>
            <h1 className={Styles.adaptacao} ref={(el) => textElementsRef.current[4] = el}>
                Peças inspiradas em fotos ou ideias.
            </h1>
            <h1 className={Styles.combos} ref={(el) => textElementsRef.current[5] = el}>
                Kits prontos para presentear.
            </h1>
            
            <div className={Styles.slideshowContainer}>
                <div className={Styles.vouve}>
                    <img className={Styles.cachepo} src={images[currentImage]} alt="Produtos de crochê" />
                </div>
            </div>
            
            <div className={Styles.caixabotao} ref={(el) => textElementsRef.current[6] = el}>
                <button className={Styles.orçamento}>Solicitar orçamento</button>
            </div>
        </section>
    )
}

export default Servicos