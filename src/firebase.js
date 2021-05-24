import firebase from 'firebase'

var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBKNOOSX_cFOlZFySfCiOLhqWP-_o_vNo8",
    authDomain: "project-1-5ac6b.firebaseapp.com",
    projectId: "project-1-5ac6b",
    storageBucket: "project-1-5ac6b.appspot.com",
    messagingSenderId: "912700053390",
    appId: "1:912700053390:web:6141f28a36f1617debf6df"
  });


var database=firebaseConfig.firestore()
var fire=firebaseConfig 
export default fire