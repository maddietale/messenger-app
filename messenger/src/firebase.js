import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCLBsaLbBKRrjD3lazhiTEUWX4kniKcDPE",
    authDomain: "frame-d8896.firebaseapp.com",
    projectId: "frame-d8896",
    storageBucket: "frame-d8896.appspot.com",
    messagingSenderId: "496073893606",
    appId: "1:496073893606:web:0e370476bc279f033dbd27",
}).auth();