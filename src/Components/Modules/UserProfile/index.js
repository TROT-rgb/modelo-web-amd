import "./index.css";
import React, { useContext, useEffect, useState } from "react";
import { LogoAMD, login } from "../../Provider";
import { UserContext } from "../../Context/UserContext";
import { FirebaseContext } from "../../Context/FirebaseContext";
import { Redirect } from "react-router-dom";
import { user as us, edit } from "../../Provider";
import Modal from "../Modal";

export default function UserProfile() {
    const [type, setType] = useState("");
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const firebase = useContext(FirebaseContext);

    async function logOut() {
        const loggedOut = await firebase.logOut();

        if (loggedOut) {
            setUser((state) => ({ ...state, isLoggedIn: false }));
        }
    }

    return (
        <div>
            {!user.isLoggedIn ? <Redirect to="/" /> : null}
            <Modal
                visible={visible}
                onHandleClose={() => setVisible(!visible)}
                type={type}
            ></Modal>
            <div className="overlay-user d-flex">
                <div style={{ flexWrap: "wrap" }} className="backk d-flex">
                    <div className="d-flex flex-column profile-case" style={{ padding : 0 }}>
                        <div className="image-responsive">
                            <div
                                className="profile-pic-case"
                                style={{ backgroundColor: "#fa0101" }}
                            >
                                {user.profilePhotoUrl === "default" ? (
                                    <img src={us} alt="profilePhoto" />
                                ) : (
                                    <img src={user.profilePhotoUrl} alt="profilePhoto" />
                                )}

                            </div>
                            <button
                                className="editButtom"
                                onClick={() => {
                                    setType("imageProf");
                                    setVisible(!visible);
                                }}
                            >
                                <img src={edit} alt="profile" className="editButtomimg" />
                            </button>
                        </div>
                        <div className="d-flex justify-center align-items-center">
                            <p>Nombre: {user.name}</p>
                        </div>
                        <div className="d-flex justify-center align-items-center">
                            <p>Apellido: {user.surname}</p>
                        </div>
                        <div className="profile-texts">
                            <div className="d-flex justify-center align-items-center">
                                <p>AMD user: {user.username}</p>
                                <button
                                    className="editButtom"
                                    onClick={() => {
                                        setType("username");
                                        setVisible(!visible);
                                    }}
                                >
                                    <img src={edit} alt="profile" className="editButtomimg" />
                                </button>
                            </div>
                        </div>
                        <img className="logo-profile" src={LogoAMD} alt="profile"></img>
                    </div>
                    <div className="vertical-separator" />
                    <div className="vertical-separator" />
                    <div className="vertical-separator" />
                    <div className="d-flex flex-column profile-case" style={{ padding : 0 }}>
                        <div className="profile-texts">
                            <p>Género: {user.gender}</p>
                            <p>E-Mail: {user.email}</p>
                            <div className="d-flex">
                                <p>Discord: {user.discord}</p>
                                <button
                                    className="editButtom"
                                    onClick={() => {
                                        setType("discord");
                                        setVisible(!visible);
                                    }}
                                >
                                    <img src={edit} alt="profile" className="editButtomimg" />
                                </button>
                            </div>
                            <div className="d-flex">
                                <p>Instagram: {user.instagram}</p>
                                <button
                                    className="editButtom"
                                    onClick={() => {
                                        setType("instagram");
                                        setVisible(!visible);
                                    }}
                                >
                                    <img src={edit} alt="profile" className="editButtomimg" />
                                </button>
                            </div>
                            <div className="d-flex">
                                <p>Facebook: {user.facebook}</p>
                                <button
                                    className="editButtom"
                                    onClick={() => {
                                        setType("facebook");
                                        setVisible(!visible);
                                    }}
                                >
                                    <img src={edit} alt="profile" className="editButtomimg" />
                                </button>
                            </div>

                            <div className="d-flex">
                                <p>Twitter: {user.twitter}</p>
                                <button
                                    className="editButtom"
                                    onClick={() => {
                                        setType("twitter");
                                        setVisible(!visible);
                                    }}
                                >
                                    <img src={edit} alt="profile" className="editButtomimg" />
                                </button>
                            </div>
                            <div className="separator-line" />
                            <p>Cumpleaños: {user.date}</p>
                            <div className="separator-line" />
                            <p>Mis juegos:</p>
                            <ul>
                                <li>
                                    <p>{user.games.valorant ? "Valorant" : ""}</p>
                                </li>
                                <li>
                                    <p>{user.games.lol ? "League of Legends" : ""}</p>
                                </li>
                                <li>
                                    <p>{user.games.fortnite ? "Fortnite" : ""}</p>
                                </li>
                                <li>
                                    <p>{user.games.csgo ? "CS:GO" : ""}</p>
                                </li>
                            </ul>
                            <div className="separator-line" />
                            <p>pais:</p>
                            <ul>
                                <li>
                                    <div className="d-flex">
                                        <p>Nacionalidad: {user.nacionality}</p>
                                        <button
                                            className="editButtom"
                                            onClick={() => {
                                                setType("nation");
                                                setVisible(!visible);
                                            }}
                                        >
                                            <img src={edit} alt="profile" className="editButtomimg" />
                                        </button>
                                    </div>
                                </li>
                                <li style={{ display: 'none' }}>
                                    <div className="d-flex">
                                        <p>Pais: {user.region}</p>
                                        <button
                                            className="editButtom"
                                            onClick={() => {
                                                setType("pais");
                                                setVisible(!visible);
                                            }}
                                        >
                                            <img src={edit} alt="profile" className="editButtomimg" />
                                        </button>
                                    </div>

                                </li>
                            </ul>
                        </div>
                        <div className="log-foot">
                            <p>Log Out:</p>
                            <div className="buttom-case">
                                <button onClick={logOut} className="btn">
                                    <img style={{ height: 15 }} src={login} alt="login" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
