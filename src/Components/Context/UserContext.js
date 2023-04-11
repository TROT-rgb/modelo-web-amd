import React, { createContext, useState } from "react";

const UserContext = createContext([{}, () => {}]);

const UserProvider = (props) => {
  const [state, setState] = useState({
    username: "",
    mail: "",
    uid: "",
    isLoggedIn: null,
    profilePhotoUrl: "default",
    games: {},
    name: "",
    surname: "",
    gender: "",
    nacionality: "",
    discord: "",
    instagram: "",
    facebook: "",
    date: "",
    twitter: "",
    notifications: null,
    token: "",
    region: "",
    admin: null,
    tournaments: [],
    theme: "",
  });

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
