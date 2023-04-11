import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router";

import { UserContext } from "../../Components/Context/UserContext";

import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";
import fondo from "../../Components/Images/WallPaper/1080x1920/Fondo Blanco 1080x1920.png";
import NewsComm from "../../Components/Modules/NewComm";
import { FirebaseContext } from "../../Components/Context/FirebaseContext";

export default function NewsCommunity() {
  const [news, setNews] = React.useState([]);

  const firebase = React.useContext(FirebaseContext);
  const [user, _] = useContext(UserContext);


  useEffect(() => {
    firebase.fetchNews((news) => setNews(news));
  }, [firebase]);
  if (user.isLoggedIn !== null) {
    return (
      <>
        {user.isLoggedIn ? (
          <div className="o-hidden">
            <img src={fondo} className="image-fixed" alt="fondo" />
            <Header />
            <div className="news-overlay">
              <NewsComm prop={news} />
            </div>
            <Footer />
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </>
    );
  } else return <Redirect to="/Home" />;
}
