import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3EmFO-COCc24NDUbp8w_b21GswnlKYPY",
  authDomain: "e-commence-mine-redux.firebaseapp.com",
  databaseURL: "https://e-commence-mine-redux.firebaseio.com",
  projectId: "e-commence-mine-redux",
  storageBucket: "e-commence-mine-redux.appspot.com",
  messagingSenderId: "956242602091",
  appId: "1:956242602091:web:9a63fd4be2e53e5c79692e",
};

//creating new user profile
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
