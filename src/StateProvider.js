// this is kind of basic standard
//set up data layer
//keep record of basket
import React, { createContext, useContext, useReducer } from "react";

//this is the data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

//this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);