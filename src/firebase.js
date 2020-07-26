import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBdoXsW9JH4oxgW-bZpxQQWK0itulilSMs",
  authDomain: "clone-b2f06.firebaseapp.com",
  databaseURL: "https://clone-b2f06.firebaseio.com",
  projectId: "clone-b2f06",
  storageBucket: "clone-b2f06.appspot.com",
  messagingSenderId: "984385913299",
  appId: "1:984385913299:web:1a8096bf56cfbf606b2f26",
  measurementId: "G-ELCKDW5BD9"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };