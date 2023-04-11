import "./index.css";

import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../../Components/Context/UserContext";
import Footer from "../../Components/Modules/Footer";
import Header from "../../Components/Modules/Header";
import { logoSinFondo } from "../../Components/Provider";
import { user as us } from "../../Components/Provider";
import { FirebaseContext } from "../../Components/Context/FirebaseContext";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [community, setComm] = useState(false);
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [user, _] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const pickImage = () => {
    document.getElementById("files").click();
  };

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleNews = async () => {
    try {
      setLoading(true);
      const news = { title, description, image, community, link };
      if (title === "" || description === "" || image === null) {
        alert("Debe completar todos los campos para continuar");
      } else {
        await firebase.createNews(news);
      }
    } catch (error) {
      console.log(`Error @handleNews: ${error}`);
    } finally {
      setLoading(false);
      setTitle("");
      setDescription("");
      setImage(null);
    }
  };

  return (
    <>
      {user.admin ? (
        <div className="o-hidden">
          <Header />
          <div className="overlay-signin">
            <div className="oversign-lay d-flex flex-columns">
              <div style={{textAlign: '-webkit-center'}} className="cube-desing1">
                <img
                  className="title-img-admin"
                  src={logoSinFondo}
                  alt="main"
                ></img>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row justify-center align-center">
                    <div className="d-flex flex-column justify-center align-center">
                      <input
                        accept="image/*"
                        type="file"
                        id="files"
                        style={{ display: "none" }}
                        onChange={handleImage}
                      />
                      <button className="button-image" onClick={pickImage}>
                        {image ? (
                          <img src={image} alt="news" className="img-news" />
                        ) : (
                          <span>Añadir imagen</span>
                        )}
                      </button>
                      <p>Título:</p>
                      <input
                        className="textbox-desing"
                        id="title"
                        placeholder="Título de la noticia"
                        value={title}
                        onChange={(title) => setTitle(title.target.value)}
                      ></input>
                      <p className="mt-10">Link:</p>
                      <input
                        className="textbox-desing"
                        id="links"
                        value={link}
                        onChange={(link) => setLink(link.target.value)}
                      ></input>
                      <p className="mt-10">Descripción:</p>
                      <textarea
                        className="textarea-design1"
                        id="description"
                        value={description}
                        onChange={(description) =>
                          setDescription(description.target.value)
                        }
                      ></textarea>
                      <input
                        type="checkbox"
                        value={community}
                        onChange={(comm) => setComm(comm.target.checked)}
                      ></input>
                      <p className="mt-10">Community? (default AMD)</p>
                    </div>
                  </div>
                  <div className="buttom-case">
                    <button className="btn" onClick={handleNews}>
                      {loading ? "Cargando" : "Añadir noticias"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
