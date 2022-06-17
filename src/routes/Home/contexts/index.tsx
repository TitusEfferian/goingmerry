import { createContext, Dispatch, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducers";
import { ACTIONTYPE, INITIAL_STATE } from "./types";

const HomeContext = createContext<INITIAL_STATE>({
  openClockModal: false,
});
const HomeDispatch = createContext<Dispatch<ACTIONTYPE>>(() => {});

const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HomeDispatch.Provider value={dispatch}>
      <HomeContext.Provider value={state}>{children}</HomeContext.Provider>
    </HomeDispatch.Provider>
  );
};

const useHomeState = () => useContext(HomeContext);
const useHomeDispatch = () => useContext(HomeDispatch);

export { HomeProvider, useHomeDispatch, useHomeState };
