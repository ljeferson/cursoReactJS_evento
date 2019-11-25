import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDalp8lZzFRQ_z-gcFi6OWS1WPsp4Gq_es",
    authDomain: "eventos-41236.firebaseapp.com",
    databaseURL: "https://eventos-41236.firebaseio.com",
    projectId: "eventos-41236",
    storageBucket: "eventos-41236.appspot.com",
    messagingSenderId: "751699255164",
    appId: "1:751699255164:web:0d80043baa16529bb34ef9",
    measurementId: "G-0G11WLVY1F"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
  firebase.analytics();