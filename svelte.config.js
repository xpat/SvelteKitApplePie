import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

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


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
		postcss: false 
		}),
	],

	kit: {
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: false,
			env: {
				host: 'HOST',
				port: 'PORT'
			}
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
                vite: ({
		      ssr: {
			external: ['firebase']
		}
	    })

	}
};

export default config;
