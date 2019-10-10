// @flow

import React, { useState } from 'react';
import firebase from './db';
import Login from './login';
import Dashboard from './dashboard';
import { UsersProvider } from '../contexts/userContext';

export default function Home() {
  const [showSplash, setShowSplash] = useState(1);
  const [user, setUser] = useState(null);

  /**
   * get user data
   */
  if (user === null) {
    firebase.auth().onAuthStateChanged((logedUser) => {
      if (logedUser && logedUser.uid) {
        console.log(logedUser.email, ' | ', logedUser.uid);
        const dbUser = firebase.firestore().collection('usuario').doc(logedUser.uid).get()
          .then(
            (doc) => {
              if (doc.exists) {
                setUser(doc.data());
                setShowSplash(0);
              } else {
                const newUser = {
                  nombre: logedUser.displayName,
                  email: logedUser.email,
                  tickets: {},
                };

                doc.ref.set(newUser).then((e) => {
                  setUser(newUser);
                  setShowSplash(0);
                }).catch((error) => {
                  console.error(error);
                });
              }
            },
          );
      } else {
        setShowSplash(0);
      }
    });
  } else {
    console.log('nada');
  }

  // if user has a session created show dashboard

  // if no user has a valid sign in the app show the login page

  console.log('cuerpo del componente', user);
  // const origenes = firebase.firestore().collection('origen');
  // origenes.get().then((docs) => {
  //   console.log('muestro datos');
  //   // docs.forEach((doc) => console.log(doc.data()));
  // });


  function renderContent() {
    // if (user === null && showSplash) {
    //   return (
    //     <div>
    //       <h1>MiBus</h1>
    //       <p>estamos cargando la aplicación, estará lista en segundos ...</p>
    //     </div>
    //   );
    // } if (user) {
    return <UsersProvider><Dashboard /></UsersProvider>;
    // }

    // return <Login />;
  }

  return (
    renderContent()
  );
}
