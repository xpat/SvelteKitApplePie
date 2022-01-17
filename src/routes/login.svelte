<script lang='ts'>

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBymINyZcWd_0mWmz2dqPoMPI-Io65OzQs",
    authDomain: "sveltekitauth007.firebaseapp.com",
    projectId: "sveltekitauth007",
    storageBucket: "sveltekitauth007.appspot.com",
    messagingSenderId: "705326568792",
    appId: "1:705326568792:web:ac257ecca558bf1767c12d",
    measurementId: "G-E1463GMFE9"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
const login = async () => {
  signInWithPopup(auth, provider);
}
console.log(auth)
</script>
<h1>Login</h1>
<button on:click={login}>Login</button> 