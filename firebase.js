import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC2ZBz64Jp7Z8mJESRb1jphXMSI0eYJ5C0",
  authDomain: "distinctiontask9.firebaseapp.com",
  projectId: "distinctiontask9",
  storageBucket: "distinctiontask9.appspot.com",
  messagingSenderId: "769399884173",
  appId: "1:769399884173:web:76cabbca7258cbca52d5c4",
  measurementId: "G-RGBPP0E20H"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const imageDb=getStorage(app)
export const firestoreDb = getFirestore(app);