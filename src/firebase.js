import firebase from "firebase/compat/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClod6IcWbzWA7fwSGG3rHE8fNVkK4HEHU",
  authDomain: "twitter-clone-746e7.firebaseapp.com",
  projectId: "twitter-clone-746e7",
  storageBucket: "twitter-clone-746e7.appspot.com",
  messagingSenderId: "168994391392",
  appId: "1:168994391392:web:459089841e6d35045cca05",
  measurementId: "G-RBKXJ4K9T1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;