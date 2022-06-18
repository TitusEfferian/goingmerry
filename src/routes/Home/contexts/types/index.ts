interface SELECTED_TIMEZONE {
  timezone: string;
  label: string;
}

interface INITIAL_STATE {
  currentLocationTime: string;
  showCardTooltip: boolean;
  listOfTimezone: {
    swrKey: string;
    city: string;
    label: string;
  }[];
}

type SHOW_CARD_TOOLTIP = {
  type: "SHOW_CARD_TOOLTIP";
};

type CLOSE_CARD_TOOLTIP = {
  type: "CLOSE_CARD_TOOLTIP";
};

type SET_CURRENT_LOCATION_TIME = {
  type: "SET_CURRENT_LOCATION_TIME";
  data: string;
};

type SET_SELECTED_TIMEZONE = {
  type: "SET_SELECTED_TIMEZONE";
  data: SELECTED_TIMEZONE;
};

type ACTIONTYPE =
  | SET_CURRENT_LOCATION_TIME
  | SHOW_CARD_TOOLTIP
  | CLOSE_CARD_TOOLTIP
  | SET_SELECTED_TIMEZONE;

export type { INITIAL_STATE, ACTIONTYPE };
