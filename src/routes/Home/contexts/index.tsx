import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { initialState, reducer } from "./reducers";
import { ACTIONTYPE, INITIAL_STATE } from "./types";

const HomeContext = createContext<INITIAL_STATE>({
  currentLocationTime: "",
  showCardTooltip: false,
});
const HomeDispatch = createContext<Dispatch<ACTIONTYPE>>(() => {});

interface AppProps {
  children: ReactNode;
}

const HomeProvider = ({ children }: AppProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * init current time
   */

  useEffect(() => {
    const handleFuncInterval = () => {
      dispatch({
        type: "SET_CURRENT_LOCATION_TIME",
        data: `${new Date().getHours()}:${String(
          new Date().getMinutes()
        ).padStart(2, "0")}`,
      });
    };
    const idInterval = setInterval(handleFuncInterval, 1000);
    return () => {
      clearInterval(idInterval);
    };
  }, []);
  useEffect(() => {
    fetch("https://worldtimeapi.org/api/timezone/asia/singapore")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  useEffect(() => {
    dispatch({
      type: "SHOW_CARD_TOOLTIP",
    });
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
