import React from "react";
import "../stylesheets/Beneficio.css";

let Beneficio = props => (
    <div className="contenedor-beneficio">
        <div className={"contenedor-interior " + (props.estilo ? props.estilo : "")}>
            <div className="contenedor-texto-beneficio">
                <h2 className="titulo-beneficio">{props.titulo}</h2>
                <p className="texto-beneficio">{props.texto}</p>
            </div>
            <div className="contenedor-imagen">
                <img
                    className="imagen-beneficio"
                    src={require(`../images/beneficio-${props.imagen}.png`)}
                    alt={props.altImagen}
                />
            </div>        
        </div>
    </div>
);

export default Beneficio;