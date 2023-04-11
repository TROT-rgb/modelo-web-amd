import './index.css';
import React, { useContext } from 'react';

import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";

import { LogoAMD } from '../../Components/Provider';

import { UserContext } from "../../Components/Context/UserContext";
import { Redirect } from "react-router-dom"

export default function CompCsgo() {
    const [user] = useContext(UserContext);
    if (user.isLoggedIn !== null) {
    return (
        <div className="o-hidden">
        {user.isLoggedIn === null ? <Redirect to="/Home" /> : null}
            <Header />
            <div className="overlay-comp1 flex-column">
                <div className="title-lay d-flex justify-center align-items-center w-100">
                    <div className="cube-desing">
                        <iframe
                            className="cube-video"
                            src="https://www.youtube.com/embed/PCJ_PathaKw"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
                <div className="title-text-lay d-flex">
                    <div className="cube-desing-wide">
                        <div className="case-home-lay flex-column">
                            <img src={LogoAMD} className="title-img-logo" alt="home"></img>
                            <div className="pl-10 pr-10 ml-10 mr-10">
                                <h1>CS:GO – VALVE CORPORATION (1999)</h1>
                                <p>Counter Strike: Global Offensive (CS:GO) es el legendario juego de acción por equipos del género disparos en primera persona (FPS).</p>
                                <p>CS:GO es la última versión de la saga que incorpora nuevos mapas, personajes y armas. Ofrece versiones actualizadas de contenido clásico de CS (por ejemplo de_dust). Además, presenta nuevos modos de juego, matchmaking y marcadores.</p>
                                <p>Counter-Strike tomó a la industria de los videojuegos por sorpresa cuando, contra todo pronóstico, el MOD se convirtió en el juego de acción online para PC más jugado del mundo tras su lanzamiento en agosto de 1999", dijo Doug Lombardi de Valve. "En los últimos 12 años, ha continuado siendo uno de los juegos más jugados del mundo, el protagonista de los torneos de videojuegos competitivos y se han vendido más de 25 millones de copias por todo el mundo. CS: GO promete ampliar la aclamada jugabilidad de CS y ofrecerla a los jugadores de PC, así como a los de las consolas de última generación y Mac”.</p>
                                <h1>#JUGAMOSCSGO #JUGAMOSFUERTE</h1>
                                <div>
                                    <p className="text-register">Si no te inscribiste ¡Registrate!</p>
                                    <a href="https://linktr.ee/amdredleague" target="__blank" className="buttom-case">
                                        <span className="btn">Inscribirse</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
} else return <Redirect to="/Home" />;
}