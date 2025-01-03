import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyCGHybdT1--FRtUSJi4p6cU1YsCeEXDGP0",
    authDomain: "dynamicmap-ea3a0.firebaseapp.com",
    projectId: "dynamicmap-ea3a0",
    storageBucket: "dynamicmap-ea3a0.firebasestorage.app",
    messagingSenderId: "719405200432",
    appId: "1:719405200432:web:0d344dcd886eb4378029f5",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return {
    provide: {
      firebaseApp: app,
      db: db,
    },
  };
});
