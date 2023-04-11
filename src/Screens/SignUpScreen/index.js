import React, { useContext, useState } from 'react';
import './index.css';

import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";
import { logoSinFondo } from '../../Components/Provider';
import { FirebaseContext } from '../../Components/Context/FirebaseContext';
import { UserContext } from '../../Components/Context/UserContext';
import { Redirect } from 'react-router-dom';

let gamesObj = {
    valorant: false,
    lol: false,
    csgo: false,
    fortnite: false
};

export default function SignUpScreen() {
    const [username, setUsername] = useState("");
    const [email, setMail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("Hombre");
    const [nacionality, setNacionality] = useState("");
    const [discord, setDiscord] = useState("");
    const [instagram, setInstagram] = useState("");
    const [twitter, setTwitter] = useState("");
    const [facebook, setFacebook] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    const [region, setRegion] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const firebase = useContext(FirebaseContext);
    const [user, setUser] = useContext(UserContext);

    const handleRegister = async () => {
        const user = {
            username, email, password, profilePhoto, region,
            name, surname, gender, nacionality, instagram, facebook, twitter, discord, date
        };
        const games = { ...gamesObj };

        if (email === "" || password === "" || passwordRepeat === "" || username === ""
            || name === "" || surname === "" || gender === "" || nacionality === "" || date === "") {
            alert("Error: complete los campos para crear la cuenta");
        } else if (password !== passwordRepeat) {
            alert("Error: las contraseñas no coinciden");
        } else if (password.length < 6) {
            alert("Error: la contraseña debe tener al menos 6 caracteres");
        } else {
            setLoading(true);
            try {
                const createdUser = await firebase.createUser(user, games);
                if (createdUser) {
                    setUser({ ...createdUser, isLoggedIn: true });
                }
            } catch (err) {
                console.log(`Error @signUp: ${err.message}`);
                if (err.message === "The email address is already in use by another account.") {
                    alert(`Error: el email ingresado ya esta en uso`);
                } else if (err.message === "The email address is badly formatted.") {
                    alert(`Error: el email ingresado no es valido`);
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
                {
                    user.isLoggedIn ? <Redirect to="/" /> : null
                }
                <div className="overlay-signin">
                    <div className="oversign-lay d-flex flex-columns">
                        <div className="cube-desing1">
                            <div className="d-flex justify-center align-items-center">
                                <img className="title-img-logo" src={logoSinFondo} alt="main"></img>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="signin-lay d-flex">
                                    <div className="card-1">
                                        <p>Nombre:</p>
                                        <input className="textbox-desing" type="text" id="nombreApellido"
                                            value={name} onChange={(name) => setName(name.target.value)}></input>
                                        <p>Apellido:</p>
                                        <input className="textbox-desing" type="text" id="nombreApellido"
                                            value={surname} onChange={(surname) => setSurname(surname.target.value)}></input>
                                        <p>E-mail:</p>
                                        <input className="textbox-desing" type="email" id="eMail"
                                            value={email} onChange={(email) => setMail(email.target.value)}></input>
                                        <p>Fecha de Nacimiento:</p>
                                        <input className="textbox-desing" type="date" id="fecha"
                                            value={date} onChange={(date) => setDate(date.target.value)}></input>
                                        <p>Género:</p>
                                        <select className="textbox-desing" name="gender" id="genero" placeholder="Gender"
                                            onChange={(gender) => setGender(gender.target.value)}>
                                            <option value="Otro">Otro</option>
                                            <option value="Hombre">Hombre</option>
                                            <option value="Mujer">Mujer</option>
                                            <option value="No binario">No binario</option>
                                        </select>
                                        <p>Nacionalidad:</p>
                                        <input className="textbox-desing" id="nacionalidad"
                                            value={nacionality} onChange={(nacionality) => setNacionality(nacionality.target.value)}></input>

                                        <div style={{ display: 'none' }}>
                                            <p>Region:</p>
                                            <input className="textbox-desing" id="nacionalidad"
                                                value={region} onChange={(region) => setRegion(region.target.value)}></input>
                                        </div>

                                        <p>Juegos Preferidos:</p>

                                        <p><input value="fortnite" type="checkbox" onChange={() => gamesObj.fortnite = !gamesObj.fortnite} />Fortnite</p>
                                        <p><input value="lol" type="checkbox" onChange={() => gamesObj.lol = !gamesObj.lol} />League of Legends</p>
                                        <p><input value="valorant" type="checkbox" onChange={() => gamesObj.valorant = !gamesObj.valorant} />Valorant</p>
                                        <p><input value="csgo" type="checkbox" onChange={() => gamesObj.csgo = !gamesObj.csgo} />CS:GO</p>

                                    </div>
                                    <div className="card-2">
                                        <p>Usuario:</p>
                                        <input className="textbox-desing" id="dc"
                                            value={username} onChange={(username) => setUsername(username.target.value)}></input>
                                        <p>ID Discord:</p>
                                        <input className="textbox-desing" id="dc"
                                            value={discord} onChange={(discord) => setDiscord(discord.target.value)}></input>
                                        <p>Instagram:</p>
                                        <input className="textbox-desing" id="ig"
                                            value={instagram} onChange={(instagram) => setInstagram(instagram.target.value)}></input>
                                        <p>Facebook:</p>
                                        <input className="textbox-desing" id="fb"
                                            value={facebook} onChange={(facebook) => setFacebook(facebook.target.value)}></input>
                                        <p>Twitter:</p>
                                        <input className="textbox-desing" id="tw"
                                            value={twitter} onChange={(twitter) => setTwitter(twitter.target.value)}></input>
                                        <p style={{ marginTop: 50 }}>Contraseña:</p>
                                        <input className="textbox-desing" id="contraseña" type="password"
                                            value={password} onChange={(password) => setPassword(password.target.value)}></input>
                                        <p>Confirmar Contraseña:</p>
                                        <input className="textbox-desing" id="confirm" type="password"
                                            value={passwordRepeat} onChange={(password) => setPasswordRepeat(password.target.value)}></input>
                                    </div>
                                </div>

                                <div className="buttom-case">
                                    <button className="btn" onClick={handleRegister}>
                                        {
                                            loading ? "Cargando" : "REGISTRARSE"
                                        }
                                    </button>
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