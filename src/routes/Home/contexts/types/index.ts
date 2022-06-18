interface SELECTED_TIMEZONE {
  timezone: string;
  label: string;
}

interface LIST_OF_TIMEZONE {
  swrKey: string;
  city: string;
  label: string;
}

interface INITIAL_STATE {
  currentLocationTime: string;
  showCardTooltip: boolean;
  listOfTimezone: LIST_OF_TIMEZONE[];
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

type DELETE_SELECTED_TIMEZONE = {
  type: "DELETE_SELECTED_TIMEZONE";
  data: string;
};

type INIT_LIST_OF_TIMEZONE = {
  type: "INIT_LIST_OF_TIMEZONE";
  data: LIST_OF_TIMEZONE[];
};

type ACTIONTYPE =
  | SET_CURRENT_LOCATION_TIME
  | SHOW_CARD_TOOLTIP
  | CLOSE_CARD_TOOLTIP
  | SET_SELECTED_TIMEZONE
  | DELETE_SELECTED_TIMEZONE
  | INIT_LIST_OF_TIMEZONE;

export type { INITIAL_STATE, ACTIONTYPE };
