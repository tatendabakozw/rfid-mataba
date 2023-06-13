/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const initialState = {
  code: '',
  ip_address: ''
};

export const Store = createContext();

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CODE":
      return { ...state, code: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
