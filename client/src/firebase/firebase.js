  // Initialize Firebase
  import firebase from 'firebase';
  
  const config = {
    apiKey: "AIzaSyDm7PnQxiL-fXofz9ldiE4lLrjMGBMTPCM",
    authDomain: "photo-page-8770a.firebaseapp.com",
    databaseURL: "https://photo-page-8770a.firebaseio.com",
    projectId: "photo-page-8770a",
    storageBucket: "photo-page-8770a.appspot.com",
    messagingSenderId: "337605064284"
  };
  firebase.initializeApp(config);

  var db = firebase.firestore();

  export default db;