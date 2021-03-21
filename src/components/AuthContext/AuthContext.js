import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'

firebase.initializeApp(firebaseConfig);

export const facebookSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider).then(result => {
      const user = result.user;
      return user;
    }).catch(function(error) {
      console.log(error);
    });
  
  }

export const emailSignUp = (email,password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    console.log(error)
   
  });
}
