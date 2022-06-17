interface INITIAL_STATE {
  openClockModal: boolean;
}

type OPEN_CLOCK_MODAL = {
  type: "OPEN_CLOCK_MODAL";
  payload: boolean;
};
type ACTIONTYPE = OPEN_CLOCK_MODAL;

export type { INITIAL_STATE, ACTIONTYPE };
