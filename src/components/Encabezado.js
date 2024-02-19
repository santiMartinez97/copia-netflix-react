import React from "react";
import "../stylesheets/Encabezado.css";
import Idioma from "./Idioma";

let Encabezado = () => (
    <header className="encabezado">
        <div className="encabezado-interior">
            <div className="encabezado-izquierda">
                <div className="contenedor-logo">
                    <img 
                        className="imagen-logo"
                        src={require("../images/main-logo.png")}
                        alt="Logo de Netflix"
                    />
                </div>
            </div>
            <div className="encabezado-derecha">
                <div className="encabezado-opciones">
                    <Idioma />
                    <div className="contenedor-boton">
                        <button className="boton-login">Iniciar sesión</button>
                    </div>
                </div>
            </div>
        </div>
    </header>   
);

export default Encabezado;