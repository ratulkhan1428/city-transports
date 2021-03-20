import firebase from "firebase/app";
import "firebase/auth";
const app = firebase.initializeApp({
    apiKey: "AIzaSyAl0CItVWveYDaJ8RJcKWUA5nKM6tV21Ac",
    authDomain: "city-transports.firebaseapp.com",
    projectId: "city-transports",
    storageBucket: "city-transports.appspot.com",
    messagingSenderId: "325275242297",
    appId: "1:325275242297:web:70bb767844a1316403e2e8"
  });

  export const auth = app.auth()
  export default app;