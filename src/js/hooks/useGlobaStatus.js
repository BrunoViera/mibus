// @flow

import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const useGlobalStatus = () => {
  const [state, setState] = useContext(AppContext);

  function getUser() {
    if (state.user) {
      return state.user.data();
    }
    return null;
  }

  function getTickets() {
    // if (state.user.collection('tickets')) {
    //   return state.user.userRef.collection('tickets').getDocuments();
    // }
    // return [];
    return [
      {
        id: 1,
        from: 'Montevideo, Terminal Tres Cruces',
        to: 'Rivera, Terminal',
        date: 'Martes 15, Julio 2019',
        seat: 24,
        bus: 'Omnibus super cama, coche n 02',
        isCurrent: true,
      },
      {
        id: 2,
        from: 'Montevideo, Terminal Tres Cruces',
        to: 'Tacuarembó, Terminal',
        date: 'Martes 24, Junio 2019',
        seat: 24,
        bus: 'Omnibus super cama, coche n 02',
        isCurrent: false,
      },
      {
        id: 3,
        from: 'Montevideo, Terminal Tres Cruces',
        to: 'Colonia, Terminal',
        date: 'Miercoles 16, Julio 2019',
        seat: 24,
        bus: 'Omnibus super cama, coche n 02',
        isCurrent: false,
      },
    ];
  }

  function getTicket() {
    return {
      id: 1,
      from: 'Montevideo, Terminal Tres Cruces',
      to: 'Rivera, Terminal',
      date: 'Martes 15, Julio 2019',
      seat: 24,
      bus: 'Omnibus super cama, coche n 02',
      isCurrent: true,
    };
  }

  function setUser(user) {
    setState((state) => ({ ...state, user }));
  }

  function showLoading(loading) {
    setState((state) => ({ ...state, isLoading: loading }));
  }

  function isLoading() {
    return state.isLoading;
  }

  return {
    getUser,
    setUser,
    isLoading,
    showLoading,
    getTicket,
    getTickets,
  };
};

export default useGlobalStatus;
