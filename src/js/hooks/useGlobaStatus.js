// @flow

import { useContext } from 'react';
import { AppContext } from '../AppContext';

const useGlobalStatus = () => {
  const [state, setState] = useContext(AppContext);

  function getUser() {
    if (state.user) {
      return state.user;
    }
    return null;
  }

  function setUser(user) {
    setState((state) => ({ ...state, user }));
  }

  function setLoading(loading) {
    setState((state) => ({ ...state, isLoading: loading }));
  }

  function isLoading() {
    return state.isLoading;
  }

  return {
    getUser,
    setUser,
    setLoading,
    isLoading,
  };
};

export default useGlobalStatus;
