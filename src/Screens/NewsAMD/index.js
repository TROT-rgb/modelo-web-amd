import "./index.css";
import React, { useEffect, useContext } from "react";

import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";
import News from "../../Components/Modules/News";
import fondo from "../../Components/Images/WallPaper/1080x1920/Fondo Blanco 1080x1920.png";
import { FirebaseContext } from "../../Components/Context/FirebaseContext";
import { UserContext } from "../../Components/Context/UserContext";
import { Redirect } from "react-router-dom";


export default function NewsAMD() {
  const [news, setNews] = React.useState([]);

  const firebase = React.useContext(FirebaseContext);

  useEffect(() => {
    firebase.fetchNews((news) => setNews(news));
  }, [firebase]);
  const [user] = useContext(UserContext);
  if (user.isLoggedIn !== null) {
    return (
      <div className="o-hidden">
        <img src={fondo} className="image-fixed" alt="fondo" />
        <Header />
        <div className="news-overlay">
          <News prop={news} />
        </div>
        <Footer />
      </div>
    );
  } else return <Redirect to="/Home" />;
}
