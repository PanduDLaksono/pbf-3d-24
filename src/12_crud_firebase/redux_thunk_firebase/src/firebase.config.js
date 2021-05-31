import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAodw7Mn5FQuO5zTkSmgVIJs95yiheyZyk",
    authDomain: "react-pbf.firebaseapp.com",
    databaseURL: "https://react-pbf-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-pbf",
    storageBucket: "react-pbf.appspot.com",
    messagingSenderId: "389568950430",
    appId: "1:389568950430:web:59766fb6f7aadb34184b8f",
    measurementId: "G-3ESMNN4SDL"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();