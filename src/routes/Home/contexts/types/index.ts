interface INITIAL_STATE {
  openClockModal: boolean;
  currentLocationTime: string;
}

type OPEN_CLOCK_MODAL = {
  type: "OPEN_CLOCK_MODAL";
  data: boolean;
};

type SET_CURRENT_LOCATION_TIME = {
  type: "SET_CURRENT_LOCATION_TIME";
  data: string;
};
type ACTIONTYPE = OPEN_CLOCK_MODAL | SET_CURRENT_LOCATION_TIME;

export type { INITIAL_STATE, ACTIONTYPE };
