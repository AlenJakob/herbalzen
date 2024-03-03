// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBYHL0J6JXaLQiDu6RVr6CVswBgvJJwvI8",
	authDomain: "herbalzen-1d1bd.firebaseapp.com",
	projectId: "herbalzen-1d1bd",
	storageBucket: "herbalzen-1d1bd.appspot.com",
	messagingSenderId: "288907347903",
	appId: "1:288907347903:web:dd34c8bbe52782bf04830a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
