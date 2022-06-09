import firebase from "firebase"
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyDM9W_PIgRm_GzJXcfXDbI1FSXMv29oOZE",
    authDomain: "crudfilmes-c8d5f.firebaseapp.com",
    projectId: "crudfilmes-c8d5f",
    storageBucket: "crudfilmes-c8d5f.appspot.com",
    messagingSenderId: "700633525666",
    appId: "1:700633525666:web:297c06045589f756f5d6fb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
