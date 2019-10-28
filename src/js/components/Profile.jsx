// @flow

import React from 'react';

import Header from './header';
import useGlobalStatus from '../hooks/useGlobaStatus';
import firebase from '../firebase';

export default function Dashboard() {
  const { getUser } = useGlobalStatus();

  function logout() {
    firebase.auth().signOut()
      .then(() => {
        window.location = '/login';
      });
  }

  return (
    <div className="layout">
      <Header title="Perfil" />
      <h2>
        Hola
        {' '}
        {getUser().nombre}
      </h2>
      <button onClick={logout} type="button" className="btn">Cerrar sesión</button>
    </div>
  );
}
