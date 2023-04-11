import "./index.css";
import React, { useState } from "react";
import { FirebaseContext } from "../../Context/FirebaseContext";
import { UserContext } from "../../Context/UserContext";

export default function Modal({ visible = true, onHandleClose, type }) {
  const [username, setUsername] = React.useState("");
  const [instagram, setInstagram] = React.useState("");
  const [valueCh, setValueCh] = React.useState("");
  const firebase = React.useContext(FirebaseContext);
  const [_, setUser] = React.useContext(UserContext);
  const [profilePhotoUrl, setImage] = useState(null);


  const pickImage = () => {
    document.getElementById("files").click();
  };

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleChange = async (e) => {
    e.preventDefault();
    if (type === "username" && username !== "") {
      await firebase.updateUsername(username);
      setUser((state) => ({ ...state, username }));
    } else if (type === "instagram" && instagram !== "") {
      await firebase.updateInstagram(instagram);
      setUser((state) => ({ ...state, instagram }));
    } else if (type === "facebook" && valueCh !== "") {
      await firebase.updateFacebook(valueCh);
      setUser((state) => ({ ...state, valueCh }));
    } else if (type === "twitter" && valueCh !== "") {
      await firebase.updateTwitter(valueCh);
      setUser((state) => ({ ...state, valueCh }));
    } else if (type === "discord" && valueCh !== "") {
      await firebase.updateDiscord(valueCh);
      setUser((state) => ({ ...state, valueCh }));
    } else if (type === "nation" && valueCh !== "") {
      await firebase.updateNacionality(valueCh);
      setUser((state) => ({ ...state, valueCh }));
    } else if (type === "pais" && valueCh !== "") {
      await firebase.updateRegion(valueCh);
      setUser((state) => ({ ...state, valueCh }));
    } 
  };

  const submitImage =async(e)=>{
    e.preventDefault();
    if (type === "imageProf" && profilePhotoUrl !== null) {
      await firebase.uploadProfilePhoto(profilePhotoUrl);
      setUser((state) => ({ ...state, profilePhotoUrl }));
    }
    onHandleClose();
  }
  return (
    <button className={visible ? "modal" : "modal_close"}>
      <div className="window_display">
        <form onSubmit={handleChange}>
          {type === "username" ? (
            <>
              <p>Username: </p>
              <input
                style={{ color: "#000" }}
                placeholder="nuevo username"
                value={username}
                onChange={(username) => setUsername(username.target.value)}
              ></input>
              <button className="editButtom" onClick={onHandleClose}>Cancel</button>
            </>
          ) : type === "instagram" ? (
            <>
              <p>Instagram: </p>
              <input
                style={{ color: "#000" }}
                placeholder="nuevo instagram"
                value={instagram}
                onChange={(instagram) => setInstagram(instagram.target.value)}
              ></input>
              <button className="editButtom" onClick={onHandleClose}>Cancel</button>
            </>
          ) : type === "facebook" ? (
            <>
              <p>facebook: </p>
              <input
                style={{ color: "#000" }}
                placeholder="nuevo Facebook"
                value={valueCh}
                onChange={(valueCh) => setValueCh(valueCh.target.value)}
              ></input>
              <button className="editButtom" onClick={onHandleClose}>Cancel</button>
            </>
          ) : type === "twitter" ? (
            <>
              <p>Twitter: </p>
              <input
                style={{ color: "#000" }}
                placeholder="nuevo twitter"
                value={valueCh}
                onChange={(valueCh) => setValueCh(valueCh.target.value)}
              ></input>
              <button className="editButtom" onClick={onHandleClose}>Cancel</button>
            </>
          ) : type === "discord" ? (
            <>
              <p>Discord: </p>
              <input
                style={{ color: "#000" }}
                placeholder="nuevo Discord"
                value={valueCh}
                onChange={(valueCh) => setValueCh(valueCh.target.value)}
              ></input>
              <button className="editButtom" onClick={onHandleClose}>Cancel</button>
            </>
          ) : type === "nation" ? (
            <>
              <p>Nacionalidad: </p>
              <input
                style={{ color: "#000" }}
                placeholder="nueva nacionalidad"
                value={valueCh}
                onChange={(valueCh) => setValueCh(valueCh.target.value)}
              ></input>
              <button className="editButtom" onClick={onHandleClose}>Cancel</button>
            </>
          ) : type === "pais" ? (
            <>
              <p>Pais: </p>
              <input
                style={{ color: "#000" }}
                placeholder="Nuevo Pais"
                value={valueCh}
                onChange={(valueCh) => setValueCh(valueCh.target.value)}
              ></input>
              <button className="editButtom" onClick={onHandleClose}>Cancel</button>
            </>
          ) : type === "imageProf" ? (
            <>
              <p style={{margin : 15}}>Imagen: </p>
              <input
                placeholder="Nueva Imagen"
                accept="image/*"
                type="file"
                id="files"
                style={{ display: 'none' }}
                onChange={handleImage}
              />
              <button className="button-image-prof" onClick={pickImage}>
                {profilePhotoUrl ? (
                  <img src={profilePhotoUrl} alt="news" className="img-news" />
                ) : (
                  <span>Añadir imagen</span>
                )}
              </button>
              {profilePhotoUrl?(
                <button className="editButtom" onClick={submitImage}>Subir</button>
              ):null}
              

              <button className="editButtom" onClick={onHandleClose}>Cancel</button>
            </>
          ) : null}
        </form>
      </div>
    </button>
  );
}
