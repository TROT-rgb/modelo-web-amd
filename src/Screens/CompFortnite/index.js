import './index.css';
import React, { useContext } from 'react';

import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";
import { Link } from 'react-router-dom';

import { LogoAMD } from '../../Components/Provider';
import { UserContext } from '../../Components/Context/UserContext';
import { Redirect } from "react-router-dom";


export default function CompFortnite() {
    const [user,] = useContext(UserContext);
    if (user.isLoggedIn !== null) {
    return (
        <div className="o-hidden">
            <Header />
            <div className="overlay-comp2 flex-column">
                <div className="title-lay d-flex d-flex justify-center align-items-center w-100">
                    <div className="cube-desing">
                        <iframe
                            className="cube-video"
                            src="https://www.youtube.com/embed/uDNEVzDgJVE"
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
                                <h1>FORTNITE – EPIC GAMES (2017)</h1>
                                <h1>“EAT, SLEEP, FORTNITE, REPEAT”</h1>
                                <p>Fortnite es un Battle Royale con disparos en tercera persona. El juego consiste en pelear contra olas de enemigos, controlados por una inteligencia artificial, llamados Husks. El jugador puede estar en un equipo con otros tres jugadores, solo con un equipo de bots o puede incluso desactivar los bots para tener una experiencia completamente en solitario.</p>
                                <p>Los jugadores son liberados en paracaídas sobre una isla donde hay otros 96 jugadores de distintos niveles y deben completar misiones y eliminar enemigos con el objetivo de ser el último superviviente. Además, deben evitar tormentas que reducen el espacio de juego y les perjudican. Para ello y para defenderse, pueden construir estructuras de distintos materiales.</p>
                                <h2>#JUGAMOSFORTNITE #JUGAMOSFUERTE</h2>
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