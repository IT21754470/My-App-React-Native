import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBr5gWY9jCiVXFqmEZEkWF8KanO35sCXDA",
    authDomain: "react-native-24974.firebaseapp.com",
    projectId: "react-native-24974",
    storageBucket: "react-native-24974.appspot.com",
    messagingSenderId: "388579629492",
    appId: "1:388579629492:web:0699e75f816876a8a9fae1",
    measurementId: "G-PTCKBQC3LW"
  };
 
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };