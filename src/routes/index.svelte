<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import 'firebaseui/dist/firebaseui.css'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBymINyZcWd_0mWmz2dqPoMPI-Io65OzQs",
  authDomain: "sveltekitauth007.firebaseapp.com",
  projectId: "sveltekitauth007",
  storageBucket: "sveltekitauth007.appspot.com",
  messagingSenderId: "705326568792",
  appId: "1:705326568792:web:ac257ecca558bf1767c12d",
  measurementId: "G-E1463GMFE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
</script>

<h1>Happy Hobbit</h1>
<p>The numero uno hobbit-hole-swapping app in the Shire</p>

<style>

h1 {
	color: orange;
	font-family: 'helvetica', cursive;
	font-size: 8em;
  }

p {
	color: purple;
	font-family: 'Comic Sans MS', cursive;
	font-size: 2em;
  }

</style>

