import React from 'react';

import * as app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyCItLM5rJ0BW2h8j3pDthJBGcgPQ6tyfps",
  authDomain: "lunchyclub.firebaseapp.com",
  databaseURL: "https://lunchyclub.firebaseio.com",
  projectId: "lunchyclub",
  storageBucket: "lunchyclub.appspot.com",
  messagingSenderId: "341779644521"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.firestore = app.firestore();
  }

  login = () => {
    const provider = new app.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.auth.signInWithRedirect(provider);
  };

  logout = () => this.auth.signOut();

}

export default Firebase;

const FirebaseContext = React.createContext(null);
export { FirebaseContext };