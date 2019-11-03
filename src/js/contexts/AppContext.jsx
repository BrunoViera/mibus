// @flow

import React, { useState } from 'react';
import type { Node } from 'react';

type Props = {
  children: Node
};

const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props: Props) => {
  const [state, setState] = useState({});
  const { children } = props;

  return (
    <AppContext.Provider value={[state, setState]}>
      { children }
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
