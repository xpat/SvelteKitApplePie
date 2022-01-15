import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBymINyZcWd_0mWmz2dqPoMPI-Io65OzQs",
    authDomain: "sveltekitauth007.firebaseapp.com",
    projectId: "sveltekitauth007",
    storageBucket: "sveltekitauth007.appspot.com",
    messagingSenderId: "705326568792",
    appId: "1:705326568792:web:ac257ecca558bf1767c12d",
    measurementId: "G-E1463GMFE9"
  };

export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider(); 
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});
export const db = getFirestore(app);
export const auth = getAuth(app);
auth.languageCode = 'es';
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}