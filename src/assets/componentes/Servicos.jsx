import { useState, useEffect, useRef } from 'react';
import Styles from '../css/Servicos.module.css';
import Losango from '../Imagens/losangoPreto.png';
import Cachepo from '../Imagens/cachepo.jpeg';
import Cachepo2 from '../Imagens/cachepos.jpeg';
import Cachepo3 from '../Imagens/outroCachepo.jpeg';


function Servicos() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const images = [Cachepo, Cachepo2, Cachepo3];
    const sectionRef = useRef(null);
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
        <section className={Styles.servicos} id="servicosok" ref={sectionRef}>
            <div className={Styles.conheca} ref={(el) => textElementsRef.current[0] = el}>
                <h1>Conheça os meus serviços de crochê</h1>
            </div>
            <div className={Styles.carinho} ref={(el) => textElementsRef.current[1] = el}>
                <p>Peças feitas à mão com carinho, sob medida para você ou para presentear.</p>
            </div>
            
            <h1 className={Styles.proposito} ref={(el) => textElementsRef.current[2] = el}>
                Crochê com propósito, <br /> beleza que abraça
            </h1>
            <p className={Styles.atersanais} ref={(el) => textElementsRef.current[3] = el}>
                Dê vida a ideias com peças artesanais feitas sob medida, cheias de  <br /> personalidade. Cada ponto carrega cuidado e intenção para transformar o  <br /> simples em especial. Para o seu lar, seu look ou um presente inesquecível.
            </p>
            
            <div className={Styles.container} ref={(el) => textElementsRef.current[4] = el}>
                <img className={Styles.losangopreto} src={Losango} alt="" />    
                <img className={Styles.losangopreto} src={Losango} alt="" />
                <img className={Styles.losangopreto} src={Losango} alt="" />
            </div>
            
            <h1 className={Styles.exclusivas} ref={(el) => textElementsRef.current[5] = el}>
                Peças exclusivas sob encomenda
            </h1>
            <h1 className={Styles.adaptacao} ref={(el) => textElementsRef.current[6] = el}>
                Adaptações em crochê
            </h1>
            <h1 className={Styles.combos} ref={(el) => textElementsRef.current[7] = el}>
                Combos temáticos personalizados
            </h1>
            
            <div className={Styles.slideshowContainer}>
                <div className={Styles.vouve}>
                    <img className={Styles.cachepo} src={images[currentImage]} alt="Produtos de crochê" />
                </div>
           
            </div>
            
            <div className={Styles.caixabotao} ref={(el) => textElementsRef.current[8] = el}>
                <button className={Styles.orçamento}>Solicitar orçamento</button>
            </div>
        </section>
    )
}

export default Servicos