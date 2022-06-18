import { ACTIONTYPE, INITIAL_STATE } from "../types";

const initialState: INITIAL_STATE = {
  currentLocationTime: "",
  showCardTooltip: false,
};

const reducer = (
  state: typeof initialState,
  action: ACTIONTYPE
): INITIAL_STATE => {
  switch (action.type) {
    case "SET_CURRENT_LOCATION_TIME": {
      return {
        ...state,
        currentLocationTime: action.data,
      };
    }
    case "SHOW_CARD_TOOLTIP": {
      return {
        ...state,
        showCardTooltip: true,
      };
    }
    case "CLOSE_CARD_TOOLTIP": {
      return {
        ...state,
        showCardTooltip: false,
      };
    }
    default:
      throw new Error();
  }
};

export { reducer, initialState };
