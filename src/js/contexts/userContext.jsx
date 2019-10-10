import React, { useState } from 'react';

const UserContext = React.createContext({});

const UsersProvider = (props) => {
  const [state, setState] = useState({ name: 'javier' });
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UsersProvider };
