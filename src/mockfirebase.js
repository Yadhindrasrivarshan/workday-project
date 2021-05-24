import firebase from 'firebase'

var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC9FJfiWLjkw4Ontjx6zAdyszyrFU7MvxY",
    authDomain: "project-2-b5675.firebaseapp.com",
    projectId: "project-2-b5675",
    storageBucket: "project-2-b5675.appspot.com",
    messagingSenderId: "140775821311",
    appId: "1:140775821311:web:1360268f166cd43dd1e1ca"
  });


var database=firebaseConfig.firestore()
const fire=firebaseConfig
export  {fire,database}