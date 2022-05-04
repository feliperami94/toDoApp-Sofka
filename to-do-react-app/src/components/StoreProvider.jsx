import React, { createContext, useReducer } from 'react'
import reducer from './reducer';

const initialState={
    note:{
        id: '',
        title: '',
        message: '',
        done: false
    },
    listOfNotes:{
        id: '0',
        title: 'title by default',
        message: 'Any message written here',
        done: true
    }
}

const Store = createContext(initialState);


const StoreProvider = ({ children }) => {

  const[state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{state, dispatch}}>
      {children}
    </Store.Provider>
  )
}

export default StoreProvider
export {Store, initialState}