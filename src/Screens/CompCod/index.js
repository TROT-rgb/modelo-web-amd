import './index.css';
import React, { useContext } from 'react';

import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";
import { Link } from 'react-router-dom';

import { LogoAMD } from '../../Components/Provider';
import { UserContext } from '../../Components/Context/UserContext';
import { Redirect } from "react-router-dom";




export default function CompCod() {
    const [user,] = useContext(UserContext);
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
                            src="https://www.youtube.com/embed/4yJ9y0biUUM"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="title-text-lay d-flex">
                    <div className="cube-desing-wide">
                        <div className="case-home-lay flex-column">
                            <img src={LogoAMD} className="title-img-logo" alt="home"></img>
                            <div className="pl-10 pr-10 ml-10 mr-10">
                                <h1>CALL OF DUTY WARZONE - ACTIVISION (2020)</h1>
                                <p>COD Warzone es un videojuego de acción de disparos en primera persona del tipo Battle Royale para PC, PlayStation 4 y Xbox One. El juego es apto para hasta 150 jugadores. El juego presenta tanto un juego multiplataforma como una progresión multiplataforma entre tres juegos.</p>
                                <p>Warzone permite el combate multijugador en línea entre 150 jugadores, aunque algunos modos de juego por tiempo limitado admiten 200 jugadores. </p>
                                <h3>#JUGAMOSCODWARZONE #JUGAMOSFUERTE</h3>
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