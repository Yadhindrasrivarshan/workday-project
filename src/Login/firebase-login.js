import   firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA9xacPgyz0yi69zM9LJmhDKqbBs5yIER4",
    authDomain: "login-auth-ee820.firebaseapp.com",
    projectId: "login-auth-ee820",
    storageBucket: "login-auth-ee820.appspot.com",
    messagingSenderId: "30397216935",
    appId: "1:30397216935:web:eb91e962e42803b99fc382"
  };

  const  fire=firebase.initializeApp(firebaseConfig)

  export default fire