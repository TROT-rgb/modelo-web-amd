import React, { useContext } from "react";

import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";

import { UserContext } from "../../Components/Context/UserContext";
import { Redirect } from "react-router-dom";

export default function Streaming() {
  const [user] = useContext(UserContext);
  let source = 'https://player.twitch.tv/?amd_latam&parent=https://amdredleague.com';
  if (user.isLoggedIn !== null) {
    return (
      <div className="o-hidden">
        {user.isLoggedIn === null ? <Redirect to="/Home" /> : null}
        <Header />
        <div className="overlay-home flex-column">
          <div className="title-lay d-flex justify-center align-items-center w-100">
            <div
              style={{ margin: 50, marginLeft: 50, marginTop: 0 }}
              className="cube-desing "
            >
              <iframe
                className="cube-video"
                src={source}
                title="twitch video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else return <Redirect to="/Home" />;
}
