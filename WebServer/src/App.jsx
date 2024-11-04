import { useState } from 'react'

import './App.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCdAVtdU55xbal7j3a4VIRIyitYrwAl96M",
  authDomain: "web-server-fde2a.firebaseapp.com",
  projectId: "web-server-fde2a",
  storageBucket: "web-server-fde2a.firebasestorage.app",
  messagingSenderId: "781688432058",
  appId: "1:781688432058:web:c08d5756e493536465e983",
  measurementId: "G-HX23KEPNBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

}

export default App
