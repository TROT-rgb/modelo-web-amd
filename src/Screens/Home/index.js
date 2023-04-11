import "./index.css";
import React, { useContext } from "react";

import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";
import Resellers from "../../Components/Modules/Resellers";
import { Link, Redirect } from "react-router-dom";

import { LogoAMD, banner } from "../../Components/Provider";
import { UserContext } from "../../Components/Context/UserContext";

export default function HomeScreen() {
  const [user] = useContext(UserContext);
  console.log(user.isLoggedIn);
  if (user.isLoggedIn !== null) {
    return (

      <div className="o-hidden">
        {user.isLoggedIn === null ? <Redirect to="/Loading" /> : null}
        <Header />
        <div className="overlay-home flex-column">
          <div className="title-lay d-flex justify-center align-items-center w-100">
            <div className="cube-desing">
              <iframe
                className="cube-video"
                src="https://youtube.com/embed/8_ySFiLNv3o"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="title-text-lay d-flex justify-center align-items-center w-100">
            <div className="cube-desing-wide">
              <div className="case-home-lay flex-column">
                <img src={LogoAMD} className="title-img-logo" alt="home"></img>
                <div className="pl-10 pr-10 ml-10 mr-10">
                  <h1>Sobre AMD Red League</h1>
                  <p>
                    La AMD Red League, es una serie de contenidos y competencias
                    de Esports, que desde el 2017 forman el proyecto competitivo
                    de la compañía AMD, para generar a los nuevos deportistas.
                    En 2021 redobla la apuesta para poder formar a los futuros
                    profesionales de esta gran industria.
                  </p>
                  {user.isLoggedIn ? (
                    <div></div>
                  ) : (
                    <div>
                      <p className="text-register">
                        Si no tienes cuenta ¡Registrate!
                      </p>
                      <Link to="/SignUpScreen" className="buttom-case">
                        <span className="btn">Registrarse</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: 30, marginTop: 0 }}>
            <Link to="/ApkDownload" className="d-flex justify-center align-items-center">
              <div className="cube-desing">
                <img src={banner} className="img-adj" alt="home" />
              </div>
            </Link>
          </div>
          <Resellers />
        </div>
        <Footer />
      </div>
    );
  } else return <Redirect to="/Loading" />;
}
