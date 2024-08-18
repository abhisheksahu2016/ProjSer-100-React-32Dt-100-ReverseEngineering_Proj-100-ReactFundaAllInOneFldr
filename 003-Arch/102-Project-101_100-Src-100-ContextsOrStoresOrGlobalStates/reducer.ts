import { LOAD_BRANDING_MENU, BRANDING_MENU_LOADED, SYNC_FAILED } from './actionTypes';

export const initialState = {
  error: null,
  loaded: false,
  brandingimagesmenuHierarchy: [],
  syncing: false,
};

export const reducer = (state = initialState, action: { type: any; payload?: any }) => {
  switch (action.type) {
    case LOAD_BRANDING_MENU:
      return { ...state, error: null, syncing: true };
    case BRANDING_MENU_LOADED:
      return {
        ...state,
        error: null,
        brandingimagesmenuHierarchy: action.payload,
        syncing: false,
        loaded: true,
      };
    case SYNC_FAILED:
      return { ...state, syncing: false, error: action.payload };
    default:
      return state;
  }
};