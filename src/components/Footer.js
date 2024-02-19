import "../stylesheets/Footer.css";
import FooterLink from "./FooterLink";
import Idioma from "./Idioma";
import footerData from "../data/footer-links.json";

let Footer = () => {
    const footerKeys = Object.keys(footerData);

    return (
    <footer>
        <div className="footer-interior">
            <div className="footer-fila">
                <div className="footer-telefono">
                    ¿Preguntas? Llama al <a href="tel: 1 (408) 600-1722  (USA)"> 1 (408) 600-1722  (USA)</a>
                </div>
            </div>
            <div className="footer-fila">
                <div className="footer-contenedor-links">
                    <ul className="footer-lista-links">
                        {
                            footerKeys.map(key => (
                                <FooterLink key={key} {...footerData[key]} />
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="footer-fila">
                <div className="footer-contenedor-idioma">
                    <Idioma />
                </div>
            </div>
            <div className="footer-fila">
                <div className="footer-netflix">
                    Netflix Uruguay
                </div>
            </div>
        </div>
    </footer>
)};

export default Footer;