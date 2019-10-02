// @flow

import React from 'react';

import firebase from './db';

export default function Login() {
  // firebase.auth().getRedirectResult().then((result) => {
  //   if (result.credential) {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const token = result.credential.accessToken;
  //     console.log(result);

  //     // ...
  //   }
  //   // The signed-in user info.
  //   const { user } = result;
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log(error);
  //   // The email of the user's account used.
  //   const { email } = error;
  //   // The firebase.auth.AuthCredential type that was used.
  //   const { credential } = error;
  //   // ...
  // });

  function loginGoogle(e) {
    console.log('muestro el logín con google', e);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().languageCode = 'es';
    firebase.auth().signInWithRedirect(provider);
  }

  return (
    <div className="layout is-signin">
      <div className="btn-group">
        <button type="button" className="btn-group__button is-active"><p className="btn-group__text">Registrarse</p></button>
        <button type="button" className="btn-group__button"><p className="btn-group__text">Ingresar</p></button>
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
