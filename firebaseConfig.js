import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCipcRfagR0iEjY_FY6xcRn7Z62-6NussM",
    authDomain: "flutter-web-11.firebaseapp.com",
    projectId: "flutter-web-11",
    storageBucket: "flutter-web-11.firebasestorage.app",
    messagingSenderId: "994516059761",
    appId: "1:994516059761:web:fadd73a6fa6b256029fdd0"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)