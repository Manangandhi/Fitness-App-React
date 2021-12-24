import { sidebarActionTypes } from "../actionTypes/sidebarActionTypes";

export const showNavigationMenu = () => ({
  type: sidebarActionTypes.SHOW_NAVIGATION_MENU,
});
export const hideNavigationMenu = () => ({
  type: sidebarActionTypes.HIDE_NAVIGATION_MENU,
});

export const toggleNavigationMenu = () => ({
  type: sidebarActionTypes.TOGGLE_NAVIGATION_MENU,
});
