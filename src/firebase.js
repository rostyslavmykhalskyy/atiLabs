import firebase from 'firebase'

require("firebase/firestore");
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBnY9i905wrhzEq2FEu99jLzMf3-LEpoc8',
  authDomain: 'ankiety-35c4d.firebaseapp.com',
  databaseURL: 'https://ankiety-35c4d.firebaseio.com',
  projectId: 'ankiety-35c4d',
  storageBucket: 'ankiety-35c4d.appspot.com',
  messagingSenderId: '663790302532'
}
const fb = firebase.initializeApp(config);
const db = firebase.firestore();

export {fb,db}