import "./index.css";
import React, { useContext, useEffect } from "react";
import { FirebaseContext } from "../../Components/Context/FirebaseContext";
import { UserContext } from "../../Components/Context/UserContext";
import { preloader } from "../../Components/Provider";

import { Redirect } from "react-router-dom";

export default function LoadingScreenUc() {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    setTimeout(async () => {
      const user = firebase.getCurrentUser();

      if (user) {
        const userInfo = await firebase.getUserInfo(user.uid);
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
      } else {
        setUser((state) => ({ ...state, isLoggedIn: false }));
      }
    }, 1500);
  }, [firebase, setUser]);

  return (
    <div className="o-hidden">
      {user.isLoggedIn !== null ? (
        <Redirect to="/universitychallenge" />
      ) : (
        <div className="preloader">
          <img src={preloader} alt="preloader" />
        </div>
      )}
    </div>
  );
}
