import React, {useEffect} from "react";
import "../stylesheets/Faq.css";
import Pregunta from "./Pregunta";
import Suscripcion from "./Suscripcion";
import datosFaq from "../data/preguntas.json";

let Faq = () => {
    useEffect(() => {
        const allDetails = document.querySelectorAll("details");
        
        const handleToggle = (e) => {
            if (e.target.open) {
                allDetails.forEach((details) => {
                    if (details !== e.target && details.open) {
                        details.open = false;
                    }
                });
            }
        };
        
        allDetails.forEach((details) => {
            details.addEventListener("toggle", handleToggle);
        });

        return () => {
            allDetails.forEach((details) => {
                details.removeEventListener("toggle", handleToggle);
            });
        };
    }, []);

    const faqKeys = Object.keys(datosFaq);

    return (
    <section className="seccion-faq">
        <div className="interior-faq">
            <h2 className="titulo-faq">Preguntas frecuentes</h2>
            <div className="contenedor-consultas">
                <div className="lista-preguntas">
                    {
                        faqKeys.map(key => (
                            <Pregunta key={key} {...datosFaq[key]} />
                        ))
                    }
                </div>
                <Suscripcion />
            </div>
        </div>
    </section>
)};

export default Faq;