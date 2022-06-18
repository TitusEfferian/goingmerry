import { ACTIONTYPE, INITIAL_STATE } from "../types";

const initialState: INITIAL_STATE = {
  currentLocationTime: "",
  showCardTooltip: false,
  listOfTimezone: [],
};

const reducer = (
  state: typeof initialState,
  action: ACTIONTYPE
): INITIAL_STATE => {
  switch (action.type) {
    case "SET_CURRENT_LOCATION_TIME": {
      if (action.data === state.currentLocationTime) {
        return state;
      }
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
    case "SET_SELECTED_TIMEZONE": {
      return {
        ...state,
        listOfTimezone: [
          ...state.listOfTimezone,
          {
            city: action.data.timezone.split("/")[1].replace(/_/g, " ") ?? "",
            label: action.data.label,
            swrKey: action.data.timezone,
          },
        ],
      };
    }
    case "DELETE_SELECTED_TIMEZONE": {
      return {
        ...state,
        listOfTimezone: state.listOfTimezone.filter(
          (data) => data.swrKey !== action.data
        ),
      };
    }
    case "INIT_LIST_OF_TIMEZONE": {
      return {
        ...state,
        listOfTimezone: action.data,
      };
    }
    default:
      throw new Error();
  }
};

export { reducer, initialState };
