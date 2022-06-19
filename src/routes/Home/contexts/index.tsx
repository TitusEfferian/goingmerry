import { del, get, set, update } from "idb-keyval";
import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { initialState, reducer } from "./reducers";
import { ACTIONTYPE, INITIAL_STATE } from "./types";

const HomeContext = createContext<INITIAL_STATE>({
  currentLocationTime: "",
  showCardTooltip: false,
  listOfTimezone: [],
});
const HomeDispatch = createContext<Dispatch<ACTIONTYPE>>(() => {});

interface AppProps {
  children: ReactNode;
}

const HomeProvider = ({ children }: AppProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInitialize = useCallback(async () => {
    const getListOfTimezoneIDB = await get("listOfTimezone");
    if (typeof getListOfTimezoneIDB === "undefined") {
      return;
    }
    dispatch({
      type: "INIT_LIST_OF_TIMEZONE",
      data: getListOfTimezoneIDB,
    });
  }, []);
  // check for IDB, and store to context
  useEffect(() => {
    handleInitialize();
  }, [handleInitialize]);

  const handleStoreIDB = useCallback(async () => {
    const getListOfTimezoneIDB = await get("listOfTimezone");
    if (typeof getListOfTimezoneIDB === "undefined") {
      await set("listOfTimezone", state.listOfTimezone);
    }
    await update("listOfTimezone", () => {
      return state.listOfTimezone;
    });
  }, [state.listOfTimezone]);

  // store every update to IDB
  useEffect(() => {
    if (state.listOfTimezone.length > 0) {
      handleStoreIDB();
    }
  }, [state.listOfTimezone, handleStoreIDB]);

  const handleCleanUpIDB = useCallback(async () => {
    const getListOfTimezoneIDB = await get("listOfTimezone");
    if (typeof getListOfTimezoneIDB === "undefined") {
      return;
    }
    await del("listOfTimezone");
  }, []);

  // cleanup IDB
  useEffect(() => {
    if (state.listOfTimezone.length === 0) {
      handleCleanUpIDB();
    }
  }, [state.listOfTimezone, handleCleanUpIDB]);

  const handleFuncInterval = useCallback(() => {
    const newDate = `${new Date().getHours()}:${String(
      new Date().getMinutes()
    ).padStart(2, "0")}`;
    if (state.currentLocationTime === newDate) {
      return;
    }
    dispatch({
      type: "SET_CURRENT_LOCATION_TIME",
      data: `${new Date().getHours()}:${String(
        new Date().getMinutes()
      ).padStart(2, "0")}`,
    });
  }, [state.currentLocationTime]);

  /**
   * init current time
   */
  useEffect(() => {
    const idInterval = setInterval(handleFuncInterval, 1000);
    return () => {
      clearInterval(idInterval);
    };
  }, [handleFuncInterval]);

  useEffect(() => {
    const handleAsyncIDB = async () => {
      const getTooltipData = await get("show-tooltip");
      // already show on previous visited
      if (typeof getTooltipData === "boolean" && !getTooltipData) {
        return;
      }
      // first visit
      if (typeof getTooltipData === "undefined") {
        dispatch({
          type: "SHOW_CARD_TOOLTIP",
        });
        return;
      }
    };
    handleAsyncIDB();
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
