import './index.css';
import React, { useContext } from 'react';

import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";
import { Link } from 'react-router-dom';

import { LogoAMD } from '../../Components/Provider';
import { UserContext } from '../../Components/Context/UserContext';
import { Redirect } from "react-router-dom";

export default function CompValorant() {
    const [user,] = useContext(UserContext);
    if (user.isLoggedIn !== null) {

    return (
        <div className="o-hidden">
            <Header />
            <div className="overlay-comp2 flex-column">
                <div className="title-lay d-flex justify-center align-items-center w-100">
                    <div className="cube-desing">
                        <iframe
                            className="cube-video"
                            src="https://www.youtube.com/embed/lEJcEdlgCYg"
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
                                <h1>VALORANT – RIOT GAMES (2019)</h1>
                                <h1>“Si me pasa algo, que sea algo espectacular”, Raze.</h1>
                                <p>Se trata de un juego de disparos en primera persona (FPS) multijugador 5v5 donde un equipo ataca y el otro defiende. El objetivo del equipo atacante es colocar una bomba (llamada pincho) y hacer que detone, mientras que el equipo defensor intenta evitarlo. Si un escuadrón es eliminado antes de que se cumpla cualquier otra condición de victoria, el escuadrón contrario ganará.</p>
                                <p>Los partidos tienen una duración de 25 rondas, y cada una dura 100 segundos. El primer equipo en ganar 13 rondas gana el partido en general. Al comienzo de la ronda, tendrás 30 segundos para comprar armas y equipo para esa ronda. Si mueres en una ronda, tendrás que esperar hasta la siguiente para esa ronda. Si mueres en una ronda. Tendrás que esperar hasta la siguiente ronda para reaparecer. Este modo de juego principal se puede jugar en partidas clasificadas o no clasificadas.</p>
                                <h2><b>#JUGAMOSVALORANT #JUGAMOSFUERTE</b></h2>
                                <div style={{ display: 'none' }}>
                                    <p className="text-register">Si no tienes cuenta ¡Registrate!</p>
                                    <Link to="/SignUpScreen" className="buttom-case">
                                        <span className="btn">Registrarse</span>
                                    </Link>
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