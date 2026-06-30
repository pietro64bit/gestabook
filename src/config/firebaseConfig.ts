import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzjaTByB7hdn5y7HxVvmvlfAeOF_1YGv0",
  authDomain: "gestabook-ignite.firebaseapp.com",
  projectId: "gestabook-ignite",
  storageBucket: "gestabook-ignite.firebasestorage.app",
  messagingSenderId: "902133629640",
  appId: "1:902133629640:web:d39136709d37116f265bfd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider

export { auth, googleProvider };