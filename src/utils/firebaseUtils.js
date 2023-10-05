import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhzna47wskvPzSMD9FJtTnEaECZ31FZB8",
    authDomain: "pizzaruth-541af.firebaseapp.com",
    projectId: "pizzaruth-541af",
    storageBucket: "pizzaruth-541af.appspot.com",
    messagingSenderId: "530271566508",
    appId: "1:530271566508:web:b77842cc453796ebfafd09",
    measurementId: "G-SEZYSLJSW7"
  };

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();