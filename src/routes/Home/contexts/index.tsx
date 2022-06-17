import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { initialState, reducer } from "./reducers";
import { ACTIONTYPE, INITIAL_STATE } from "./types";

const HomeContext = createContext<INITIAL_STATE>({
  openClockModal: false,
  currentLocationTime: "",
});
const HomeDispatch = createContext<Dispatch<ACTIONTYPE>>(() => {});

const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * init current time
   */

  useEffect(() => {
    const handleFuncInterval = () => {
      dispatch({
        type: "SET_CURRENT_LOCATION_TIME",
        data: `${new Date().getHours()}:${new Date().getMinutes()}`,
      });
    };
    const idInterval = setInterval(handleFuncInterval, 1000);
    return () => {
      clearInterval(idInterval);
    };
  }, []);
  return (
    <HomeDispatch.Provider value={dispatch}>
      <HomeContext.Provider value={state}>{children}</HomeContext.Provider>
    </HomeDispatch.Provider>
  );
};

const useHomeState = () => useContext(HomeContext);
const useHomeDispatch = () => useContext(HomeDispatch);

export { HomeProvider, useHomeDispatch, useHomeState };
