interface INITIAL_STATE {
  currentLocationTime: string;
  showCardTooltip: boolean;
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
type ACTIONTYPE =
  | SET_CURRENT_LOCATION_TIME
  | SHOW_CARD_TOOLTIP
  | CLOSE_CARD_TOOLTIP;

export type { INITIAL_STATE, ACTIONTYPE };
