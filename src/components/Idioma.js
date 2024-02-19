import "../stylesheets/Idioma.css";
import iconoIdioma from "../images/icono-idioma.svg";
import selectArrow from "../images/select-arrow.svg";

let Idioma = () => (
    <div className="contenedor-idioma">
        <div className="contenedor-icono-idioma">
            <img
                className="icono-idioma"
                src={iconoIdioma}
                alt="Icono"
            />
        </div>
        <select className="selector-idioma" name="Idioma">
            <option value={"Espanol"}>Español</option>
            <option value={"English"}>English</option>
        </select>
        <div className="contenedor-icono-flecha">
            <img
                className="icono-flecha"
                src={selectArrow}
                alt="Icono"
            />
        </div>
    </div>
);

export default Idioma;