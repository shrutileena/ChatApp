import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC36PixJakZCuQ--LtJBhifywjHmA9hkI8",
    authDomain: "whatsapp-clone-35df1.firebaseapp.com",
    projectId: "whatsapp-clone-35df1",
    storageBucket: "whatsapp-clone-35df1.appspot.com",
    messagingSenderId: "635677554455",
    appId: "1:635677554455:web:5d536ea5b6720fbb61a952",
    measurementId: "G-RTVE3G5THG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;