// @flow

import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';
import firebase from './db';

export default function Dashboard() {
  // function logout() {
  //   firebase.auth().signOut()
  //     .then(() => {
  //       console.log('sesion terminada');
  //     })
  //     .catch((error) => {
  //       console.log('error, ', error);
  //     });
  // }

  // return (
  //   <div className="layout">
  //     <div className="heading">
  //       <button className="heading__icon" onClick={logout} type="button">
  //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.51">
  //           <path d="M6.241 13.289L.362 7.409A.749.749 0 0 1 0 6.767a.748.748 0 0 1 .1-.378.744.744 0 0 1 .128-.171.751.751 0 0 1 .078-.068L6.238.218a.751.751 0 0 1 1.061 0 .751.751 0 0 1 0 1.061L2.56 6.017h12.688a.75.75 0 0 1 .75.751.75.75 0 0 1-.75.75H2.588l4.711 4.711a.751.751 0 0 1 0 1.061.749.749 0 0 1-.531.219.749.749 0 0 1-.527-.22z" fill="#454f63" />
  //         </svg>
  //       </button>
  //       <div className="heading__title">
  //         <p className="heading__title">Mis Pasajes</p>
  //       </div>
  //     </div>
  //   </div>
  // );

  const [state, setState] = useContext(UserContext);

  console.log("Name:", state.name);

  setTimeout(() => {
    setState((stateToUpdate) => ({ ...stateToUpdate, name: 'clicked!' }));
  }, 1000);

  console.log(state.name);

  return null;
}
