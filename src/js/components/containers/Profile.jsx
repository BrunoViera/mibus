// @flow

import React from 'react';

import Header from '../presentational/Header';
import useGlobalStatus from '../../hooks/useGlobaStatus';
import firebase from '../../modules/db';

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
