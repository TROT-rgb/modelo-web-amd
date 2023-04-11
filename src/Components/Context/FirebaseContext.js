import React, { createContext, useState } from "react";

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import config from "../Config/firebase";

const FirebaseContext = createContext();

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();

const Firebase = {
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },

  createUser: async (user, games) => {
    await (
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
    ).user.sendEmailVerification();
    const uid = Firebase.getCurrentUser().uid;
    let notifications = true;
    let profilePhotoUrl = "default";

    await db.collection("users").doc(uid).set({
      name: user.name,
      surname: user.surname,
      gender: user.gender,
      date: user.date,
      nacionality: user.nacionality,
      username: user.username,
      email: user.email,
      region: user.region,
      games,
      discord: user.discord,
      instagram: user.instagram,
      facebook: user.facebook,
      twitter: user.twitter,
      notifications,
      profilePhotoUrl,
      token: "default",
      admin: false,
      theme: "light",
    });

    if (user.profilePhoto) {
      profilePhotoUrl = await Firebase.uploadProfilePhoto(user.profilePhoto);
    }

    delete user.password;

    return { ...user, profilePhotoUrl, uid, games, notifications };
  },

  uploadProfilePhoto: async (uri) => {
    const uid = Firebase.getCurrentUser().uid;

    try {
      const photo = await Firebase.getBlob(uri);

      const imageRef = firebase.storage().ref("profilePhotos").child(uid);
      await imageRef.put(photo);

      const url = await imageRef.getDownloadURL();

      await db.collection("users").doc(uid).update({
        profilePhotoUrl: url,
      });

      return url;
    } catch (err) {
      console.error(`Error @uploadProfilePhoto: ${err.message}`);
    }
  },

  getUserInfo: async (uid) => {
    try {
      const user = await db.collection("users").doc(uid).get();

      if (user.exists) {
        return user.data();
      }
    } catch (err) {
      console.error(`Error @getUserInfo: ${err.message}`);
    }
  },

  logOut: async () => {
    try {
      await firebase.auth().signOut();

      return true;
    } catch (err) {
      console.error(`Error @logOut: ${err.message}`);
    }
    return false;
  },

  signIn: async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  updatePassword: async (email) => {
    return await firebase.auth().sendPasswordResetEmail(email);
  },
  updateGames: async (games) => {
    try {
      const uid = Firebase.getCurrentUser().uid;
      await db.collection("users").doc(uid).update({
        games,
      });
      return true;
    } catch (err) {
      console.error(`Error @updateGames: ${err.message}`);
    }
    return false;
  },
  updateUsername: async (username) => {
    try {
      const uid = Firebase.getCurrentUser().uid;
      await db.collection("users").doc(uid).update({
        username,
      });
      return true;
    } catch (err) {
      console.error(`Error @updateUsername: ${err.message}`);
    }
    return false;
  },
  updateDiscord: async (discord) => {
    try {
      const uid = Firebase.getCurrentUser().uid;
      await db.collection("users").doc(uid).update({
        discord,
      });
      return true;
    } catch (err) {
      console.error(`Error @updateSteam: ${err.message}`);
    }
    return false;
  },
  updateInstagram: async (instagram) => {
    try {
      const uid = Firebase.getCurrentUser().uid;
      await db.collection("users").doc(uid).update({
        instagram,
      });
      return true;
    } catch (err) {
      console.error(`Error @updateRiot: ${err.message}`);
    }
    return false;
  },
  updateFacebook: async (facebook) => {
    try {
      const uid = Firebase.getCurrentUser().uid;
      await db.collection("users").doc(uid).update({
        facebook,
      });
      return true;
    } catch (err) {
      console.error(`Error @updateRiot: ${err.message}`);
    }
    return false;
  },
  updateTwitter: async (twitter) => {
    try {
      const uid = Firebase.getCurrentUser().uid;
      await db.collection("users").doc(uid).update({
        twitter,
      });
      return true;
    } catch (err) {
      console.error(`Error @updateRiot: ${err.message}`);
    }
    return false;
  },
  updateNacionality: async (nacionality) => {
    try {
      const uid = Firebase.getCurrentUser().uid;
      await db.collection("users").doc(uid).update({
        nacionality,
      });
      return true;
    } catch (err) {
      console.error(`Error @updateRiot: ${err.message}`);
    }
    return false;
  },
  updateRegion: async (region) => {
    try {
      const uid = Firebase.getCurrentUser().uid;
      await db.collection("users").doc(uid).update({
        region,
      });
      return true;
    } catch (err) {
      console.error(`Error @updateRegion: ${err.message}`);
    }
    return false;
  },
  updateNotifications: async (notifications) => {
    try {
      const uid = Firebase.getCurrentUser().uid;
      await db.collection("users").doc(uid).update({
        notifications,
      });
      return true;
    } catch (err) {
      console.error(`Error @updateNotifications: ${err.message}`);
    }
    return false;
  },

  createNews: async (news) => {
    try {
      const randomCos =
        Math.floor(Math.random() * 10000) +
        "-" +
        Math.floor(Math.random() * 50000) +
        "-" +
        Math.floor(Math.random() * 10000);
      console.log(randomCos);
      let image = "default";

      await db.collection("news").doc(randomCos).set({
        title: news.title,
        description: news.description,
        link: news.link,
        community: news.community,
        image,
      });

      if (news.image) {
        image = await Firebase.uploadNewsPhoto(news.image, randomCos);
      }

      return { ...news, image };
    } catch (error) {
      console.log(`Error @createNews: ${error.message}`);
    }
  },

  uploadNewsPhoto: async (uri, doc) => {
    try {
      const photo = await Firebase.getBlob(uri);

      const imageRef = firebase.storage().ref("news").child(doc);
      await imageRef.put(photo);

      const url = await imageRef.getDownloadURL();

      await db.collection("news").doc(doc).update({
        image: url,
      });

      return url;
    } catch (err) {
      console.error(`Error @uploadNewsPhoto: ${err.message}`);
    }
  },

  getBlob: async (uri) => {
    return await new Promise((resolve, reject) => {
      const xml = new XMLHttpRequest();

      xml.onload = () => {
        resolve(xml.response);
      };
      xml.onerror = () => {
        reject(new TypeError("Network request failed"));
      };

      xml.responseType = "blob";
      xml.open("GET", uri, true);
      xml.send(null);
    });
  },
  fetchNews: (callback) => {
    try {
      const response = firebase.firestore().collection("news");
      response.onSnapshot((snapshot) => {
        let _dates = [];
        snapshot.forEach((doc) => {
          _dates.push({ id: doc.id, ...doc.data() });
        });
        callback(_dates);
      });
    } catch (error) {
      console.error(`Error @fetchNews: ${error.message}`);
    }
  },
  deleteNews: async (id) => {
    try {
      const deleted = await firebase
        .firestore()
        .collection("news")
        .doc(id)
        .delete();
      if (deleted) {
        return true;
      }
    } catch (err) {
      console.error(`Error @deletingNews: ${err.message}`);
    }
    return false;
  },
};

const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={Firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, FirebaseContext };
