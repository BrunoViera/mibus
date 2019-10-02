// @flow

import React, { useState, useEffect } from 'react';
import firebase from './db';

export default function App() {
  const [showSplash, setShowSplash] = useState(1);

  setTimeout(() => {
    setShowSplash(0);
  }, 5000);


  // get user data
  // if user has a session created show dashboard
  // if no user has a valid sign in the app show the login page


  useEffect(() => {
    console.log('adfsdf');
    const origenes = firebase.firestore().collection('origen');
    origenes.get().then((docs) => {
      docs.forEach((doc) => console.log(doc.data()));
    });
  });


  function getContent() {
    if (showSplash) {
      return (
        <div>
          <h1>MiBus</h1>
          <p>estamos cargando la aplicación, estará lista en segundos ...</p>
        </div>
      );
    }
    return <h1>muestro la home</h1>;
  }

  return (
    getContent()
  );
}
