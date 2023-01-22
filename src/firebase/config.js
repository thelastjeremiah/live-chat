import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACZHhEd2Rv88OKNU7yrAVAtwq2UWMgvEM",
  authDomain: "vue-firebase-project-91ea0.firebaseapp.com",
  projectId: "vue-firebase-project-91ea0",
  storageBucket: "vue-firebase-project-91ea0.appspot.com",
  messagingSenderId: "176776252744",
  appId: "1:176776252744:web:0df7c9f9ab4a3cdbb1377d"
};


// init firebase 

firebase.initializeApp(firebaseConfig)

const projetFirestore  = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export {projetFirestore, timeStamp }