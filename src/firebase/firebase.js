import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD3IhI6f54MSJxz_fUC8pIeybNBgWn5RgM",
    authDomain: "style-suggestions.firebaseapp.com",
    projectId: "style-suggestions",
    storageBucket: "style-suggestions.appspot.com",
    messagingSenderId: "516212008718",
    appId: "1:516212008718:web:12736ee027ae9806bf995f"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
