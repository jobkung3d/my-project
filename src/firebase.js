import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCl12yGEWjb0ezkOxH9-PJt7GoizBsKHMY",
    authDomain: "disco-domain-120215.firebaseapp.com",
    databaseURL: "https://disco-domain-120215.firebaseio.com",
    projectId: "disco-domain-120215",
    storageBucket: "disco-domain-120215.appspot.com",
    messagingSenderId: "916454456383",
    appId: "1:916454456383:web:26462c0981114b73"
  };

firebase.initializeApp(firebaseConfig);

export default firebase