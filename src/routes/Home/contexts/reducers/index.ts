import { ACTIONTYPE, INITIAL_STATE } from "../types";

const initialState: INITIAL_STATE = { openClockModal: false };

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
    default:
      throw new Error();
  }
};

export { reducer, initialState };
