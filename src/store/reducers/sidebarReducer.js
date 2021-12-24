import { sidebarActionTypes } from "../actionTypes/sidebarActionTypes";

const initialState = {
  sidebarMenu: false,
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case sidebarActionTypes.SHOW_NAVIGATION_MENU:
      return {
        ...state,
        sidebarMenu: true,
      };
    case sidebarActionTypes.HIDE_NAVIGATION_MENU:
      return {
        ...state,
        sidebarMenu: false,
      };
    case sidebarActionTypes.TOGGLE_NAVIGATION_MENU:
      return {
        ...state,
        sidebarMenu: !state.sidebarMenu,
      };
    default:
      return state;
  }
};
