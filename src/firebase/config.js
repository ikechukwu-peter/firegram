import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBSP__GI_JvcwVQTZEV8SuJYdzUVjz3zRI",
    authDomain: "firegram-54190.firebaseapp.com",
    databaseURL: "https://firegram-54190.firebaseio.com",
    projectId: "firegram-54190",
    storageBucket: "firegram-54190.appspot.com",
    messagingSenderId: "539132965630",
    appId: "1:539132965630:web:d9e9b31af39b8284106baf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp}