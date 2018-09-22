import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCdrkDkU1TdJWTdQLMyN1k_dB1XL0nGfMo",
    authDomain: "firestore-tutorial-stiles.firebaseapp.com",
    databaseURL: "https://firestore-tutorial-stiles.firebaseio.com",
    projectId: "firestore-tutorial-stiles",
    storageBucket: "firestore-tutorial-stiles.appspot.com",
    messagingSenderId: "312045212903"
});

export const db = firebaseApp.firestore();