import React, { useEffect } from 'react';

import firebase from '../../modules/db';
import useGlobalStatus from '../../hooks/useGlobaStatus';

export default function Login() {
  const { setUser, showLoading } = useGlobalStatus();

  function initComponent() {
    firebase.auth().onAuthStateChanged((logedUser) => {
      if (logedUser && logedUser.uid) {
        firebase.firestore().collection('usuario').doc(logedUser.uid).get()
          .then(
            (doc) => {
              if (doc.exists) {
                setUser(doc);
                showLoading(false);

                if (window.location.pathname === '/login') {
                  window.location = '/';
                }
              } else {
                const newUser = {
                  nombre: logedUser.displayName,
                  email: logedUser.email,
                  tickets: {},
                };

                doc.ref.set(newUser).then(() => {
                  setUser(newUser);
                  showLoading(false);

                  if (window.location.pathname === '/login') {
                    window.location = '/';
                  }
                }).catch((error) => {
                  console.error(error);
                });
              }
            },
          );
      } else {
        showLoading(false);
      }
    });
  }

  useEffect(initComponent, []);

  function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().languageCode = 'es';
    firebase.auth().signInWithRedirect(provider);
  }

  return (
    <div className="layout is-signin">
      <div className="btn-group">
        <button type="button" className="btn-group__button"><p className="btn-group__text">Registrarse</p></button>
        <button type="button" className="btn-group__button is-active"><p className="btn-group__text">Ingresar</p></button>
      </div>

      <div className="signin-container">
        {/* <input type="text" name="name" placeholder="Nombre" />
        <input type="email" name="email" placeholder="Correo Electrónico" />
        <input type="password" name="name" placeholder="Contraseña" /> */}
        <button onClick={loginGoogle} type="button" className="btn">Login con Google</button>
      </div>

      {/* <div className="btn-group">
        <button type="button" className="btn-group__button"><p className="btn-group__text">Registrarse</p></button>
        <button type="button" className="btn-group__button is-active"><p className="btn-group__text">Ingresar</p></button>
      </div>

      <div className="signin-container">
        <input type="email" name="email" placeholder="Correo Electrónico" />
        <input type="password" name="name" placeholder="Contraseña" />
        <div className="link-wrapper">
          <a href="/">Olvide mi contraseña</a>
        </div>
        <button type="button" className="btn">Continuar</button>
      </div> */}
    </div>
  );
}
