import { useState, useEffect, useRef } from 'react';
import Styles from '../css/Estilo.module.css';
import Losango from '../Imagens/losangoPreto.png';
import Souplat1 from '../Imagens/souplatVerde.jpeg';
import Souplat2 from '../Imagens/souplatCoracao.jpeg';
import Souplat3 from '../Imagens/souplatRosa.jpeg';
import Souplat4 from '../Imagens/souplatVermelho.jpeg';
import Souplat5 from '../Imagens/souplatBranco.jpeg'

function Estilo() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const images = [Souplat1, Souplat2, Souplat3, Souplat4, Souplat5];
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
            <h1 className={Styles.ponto} ref={(el) => textElementsRef.current[0] = el}>
                Seu estilo em cada ponto
            </h1>
            <p className={Styles.memorias} ref={(el) => textElementsRef.current[1] = el}>
                Do aconchego à originalidade, crie memórias com peças únicas feitas à   <br /> mão. Um trabalho artesanal pensado para refletir quem você é com  <br />charme, conforto e autenticidade em cada detalhe.
            </p>
            
            <div className={Styles.container} ref={(el) => textElementsRef.current[2] = el}>
                <img className={Styles.losangopreto} src={Losango} alt="" />    
                <img className={Styles.losangopreto} src={Losango} alt="" />
                <img className={Styles.losangopreto} src={Losango} alt="" />
            </div>
            
            <h1 className={Styles.personalizadas} ref={(el) => textElementsRef.current[3] = el}>
                Encomendas personalizadas
            </h1>
            <h1 className={Styles.inspiracoes} ref={(el) => textElementsRef.current[4] = el}>
                Inspirações transformadas em realidade
            </h1>
            <h1 className={Styles.criativos} ref={(el) => textElementsRef.current[5] = el}>
                Kits criativos para ocasiões especiais
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

export default Estilo