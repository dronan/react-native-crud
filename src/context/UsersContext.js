import React, {createContext, useReducer} from 'react';
import users from '../data/users';

const initialState = {users};

const UsersContext = createContext({});

export const UsersProvider = props => {
  //dispatch é a função que será chamada para atualizar o estado
  function reducer(state, action) {
    console.log(action);
    return state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{state, dispatch}}>
      {props.children}
    </UsersContext.Provider>
  );
};
export default UsersContext;
