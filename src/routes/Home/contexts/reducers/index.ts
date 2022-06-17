import { ACTIONTYPE, INITIAL_STATE } from "../types";

const initialState: INITIAL_STATE = {
  openClockModal: false,
  currentLocationTime: "",
};

const reducer = (
  state: typeof initialState,
  action: ACTIONTYPE
): INITIAL_STATE => {
  switch (action.type) {
    case "OPEN_CLOCK_MODAL":
      return {
        ...state,
        openClockModal: true,
      };
    case "SET_CURRENT_LOCATION_TIME": {
      return {
        ...state,
        currentLocationTime: action.data,
      };
    }
    default:
      throw new Error();
  }
};

export { reducer, initialState };
