import "./index.css";
import React, { useContext } from "react";

import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";

import { LogoAMD, apk } from "../../Components/Provider";
import { UserContext } from "../../Components/Context/UserContext";
import { Redirect } from "react-router-dom";

export default function ApkDownload() {
  const [user] = useContext(UserContext);
    if (user.isLoggedIn !== null) {
  return (
    <div className="o-hidden">
      <Header />
      <div className="overlay-comp2 flex-column">
        <div className="title-lay d-flex">
          <div className="cube-desing1">
            <h1>Próximamente en playstore</h1>
          </div>    
        </div>

        <div className="title-text-lay d-flex">
          <div className="cube-desing1">
            <div className="case-home-lay flex-column">
              <img src={LogoAMD} className="title-img-logo" alt="home"></img>
              <div className="pl-10 pr-10 ml-10 mr-10">
                <p>
                  Descarga la app de AMD Red League y forma parte de nuestra
                  comunidad! Entérate de las novedades de entretenimiento que
                  AMD tiene preparadas para ti para este 2021.
                </p>
                <h1>#JUGAMOSFUERTE</h1>
                <div>
                  <p className="text-register">¡Descárgala!</p>
                  <a href={apk} download className="buttom-case">
                    <span className="btn">Descargar</span>
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
