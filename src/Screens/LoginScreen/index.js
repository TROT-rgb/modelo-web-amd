import "./index.css";

import React, { useContext, useState } from "react";
import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";
import { logo } from "../../Components/Provider";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../Components/Context/FirebaseContext";
import { UserContext } from "../../Components/Context/UserContext";
import { Redirect } from "react-router-dom";

export default function LoginScreen() {
  const [error, setError] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = useContext(UserContext);

  async function signIn(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Error: complete los campos para iniciar sesión");
    } else {
      setLoading(true);
      try {
        await firebase.signIn(email, password);
        const uid = firebase.getCurrentUser().uid;

        const userInfo = await firebase.getUserInfo(uid);

        setUser({
          email: userInfo.email,
          date: userInfo.date,
          username: userInfo.username,
          uid: user.uid,
          name: userInfo.name,
          surname: userInfo.surname,
          gender: userInfo.gender,
          nacionality: userInfo.nacionality,
          discord: userInfo.discord,
          instagram: userInfo.instagram,
          facebook: userInfo.facebook,
          twitter: userInfo.twitter,
          games: userInfo.games,
          profilePhotoUrl: userInfo.profilePhotoUrl,
          notifications: userInfo.notifications,
          region: userInfo.region,
          token: userInfo.token,
          admin: userInfo.admin,
          isLoggedIn: true,
          tournaments: userInfo.tournaments,
          theme: userInfo.theme,
        });
      } catch (err) {
        console.log(`Error @signIn: ${err.message}`);
        if (
          err.message ===
          "The password is invalid or the user does not have a password."
        ) {
          alert(`Error: usuario y/o contraseña incorrectos`);
        } else if (err.message === "The email address is badly formatted.") {
          alert(`Error: el email ingresado no es valido`);
        } else if (
          err.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          alert(`Error: el usuario ingresado no existe`);
        }
      } finally {
        setLoading(false);
      }
    }
  }
  if (user.isLoggedIn !== null) {

  return (
    <div className="o-hidden">
      <Header />
      {user.isLoggedIn ? <Redirect to="/" /> : null}
      <div className="overlay-login">
        <div className="overlog-lay d-flex flex-columns">
          <div className="cube-desing2">
            <div className="d-flex justify-center">
              <img className="title-img-logo" src={logo} alt="main"></img>
            </div>
            <div className="d-flex flex-column">
              <form onSubmit={signIn} className="d-flex flex-column">
                <div className="login-lay d-flex">
                  <div className="d-flex justify-center align-items-center flex-column" style={{ marginTop: 30 }}>
                    <p>Email:</p>
                    <input
                      className="textbox-desing1"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(email) => setMail(email.target.value)}
                    ></input>
                    <p style={{ marginTop: 20 }}>Contraseña:</p>
                    <input
                      className="textbox-desing1"
                      type="password"
                      id="contraseña"
                      value={password}
                      onChange={(password) =>
                        setPassword(password.target.value)
                      }
                    ></input>
                  </div>
                </div>
                <div className="buttom-case">
                  <button onClick={signIn} className="btn">
                    INICIAR SESIÓN
                  </button>
                </div>
              </form>
              <p className="text-register">Si no tienes cuenta ¡Registrate!</p>
              <Link to="/SignUpScreen" className="buttom-case">
                <span className="btn">Registrarse</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} else return <Redirect to="/Home" />;
}
