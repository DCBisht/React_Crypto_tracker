// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/database"
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDeY1MbtzFKam2jnskETn1WdR_1KxvRYOc",
  authDomain: "cryptotracker-5aaba.firebaseapp.com",
  projectId: "cryptotracker-5aaba",
  storageBucket: "cryptotracker-5aaba.appspot.com",
  messagingSenderId: "500225835871",
  appId: "1:500225835871:web:f2c7e3f66d408407202cea"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// export {app, auth};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const fireDb = firebase.initializeApp(firebaseConfig)

export {app,auth};
export default fireDb.database().ref()