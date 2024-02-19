import buttonArrow from "../images/button-arrow.svg";
import "../stylesheets/Suscripcion.css";

let Suscripcion = () => (
    <div className="contenedor-suscripcion">
        <h3 className="texto-suscripcion">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
        <div className="contenedor-form">
            <div className="contenedor-input">
                <div className="contenedor-casilla"> 
                    <input
                        type="text"
                        autoComplete="email"
                        className="casilla-email"
                    />
                    <div className="estilo-casilla"></div>
                </div>
                <label className="etiqueta-email">Email</label>
            </div>
            <button className="boton-suscripcion">
               Comenzar
                <div className="contenedor-boton-flecha">
                    <img 
                        className="boton-flecha"
                        src={buttonArrow}
                        alt="Icono"
                    />
                </div>
            </button>
        </div>
    </div>
);

export default Suscripcion;