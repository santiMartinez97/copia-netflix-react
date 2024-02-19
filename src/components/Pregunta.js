import "../stylesheets/Pregunta.css";
import iconoAbrir from "../images/icono-faq.svg";
import iconoAbrirMini from "../images/icono-faq-mini.svg";

let Pregunta = props => (
    <details className="pregunta">
        <summary className="titulo-pregunta">
            <span>{props.pregunta}</span>
            <img
                className="icono-abrir-pregunta"
                src={iconoAbrir}
                alt="Icono"
            />
            <img 
                className="icono-abrir-pregunta-mini"
                src={iconoAbrirMini}
                alt="Icono"
            />
        </summary>
        <div className="respuesta">{props.respuesta}</div>
    </details>
);

export default Pregunta;