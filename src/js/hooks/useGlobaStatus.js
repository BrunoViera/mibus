// @flow

import { useContext } from 'react';
import { AppContext } from '../AppContext';

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
    return [];
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
    getTickets,
  };
};

export default useGlobalStatus;
