import React from "react";
import "../stylesheets/Principal.css";
import Suscripcion from "./Suscripcion";

let Principal = () => (
    <main className="contenedor-main">
        <div className="interior-main">
            <h1 className="titulo-main">Películas y series ilimitadas y mucho más</h1>
            <p  className="texto-main">Disfruta donde quieras. Cancela cuando quieras.</p>
            <Suscripcion />
        </div>
    </main> 
);

export default Principal;