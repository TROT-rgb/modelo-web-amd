import './index.css';
import React, { useContext } from "react";
import Header from "../../Components/Modules/Header";
import Footer from "../../Components/Modules/Footer";
import UserProfile from '../../Components/Modules/UserProfile';

import { UserContext } from "../../Components/Context/UserContext";
import { Redirect } from "react-router-dom";

export default function Profile() {
    const [user] = useContext(UserContext);
    if (user.isLoggedIn !== null) {
    return (
        <div className="o-hidden">
        {user.isLoggedIn === null ? <Redirect to="/Home" /> : null}
            <Header />
            <div className="overlay-signin">
                <UserProfile />
            </div>
            <Footer />
        </div>
    );
} else return <Redirect to="/Home" />;
}