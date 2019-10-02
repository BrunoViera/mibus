// @flow

import React from 'react';

// import firebase from './db';

export default function dashboard() {
  return (
    <div className="layout">
      <div className="heading">
        <div className="heading__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.51">
            <path d="M6.241 13.289L.362 7.409A.749.749 0 0 1 0 6.767a.748.748 0 0 1 .1-.378.744.744 0 0 1 .128-.171.751.751 0 0 1 .078-.068L6.238.218a.751.751 0 0 1 1.061 0 .751.751 0 0 1 0 1.061L2.56 6.017h12.688a.75.75 0 0 1 .75.751.75.75 0 0 1-.75.75H2.588l4.711 4.711a.751.751 0 0 1 0 1.061.749.749 0 0 1-.531.219.749.749 0 0 1-.527-.22z" fill="#454f63" />
          </svg>
        </div>
        <div className="heading__title">
          <p className="heading__title">Mis Pasajes</p>
        </div>
      </div>
    </div>
  );
}
