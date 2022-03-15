import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHORjQW_5u-dJMcLmbxtT0RMLfPkMMp90",
  authDomain: "linkedin-clone-d7c10.firebaseapp.com",
  projectId: "linkedin-clone-d7c10",
  storageBucket: "linkedin-clone-d7c10.appspot.com",
  messagingSenderId: "843644833129",
  appId: "1:843644833129:web:e5f58c5c2352da65afc1f8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
