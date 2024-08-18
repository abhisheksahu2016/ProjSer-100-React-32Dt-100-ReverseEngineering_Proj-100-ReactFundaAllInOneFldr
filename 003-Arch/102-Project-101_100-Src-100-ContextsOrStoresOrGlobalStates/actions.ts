import { BRANDING_MENU_GET_DEFAULT_MENU } from '../../shared/helpers/service-url-helper';
import { get } from '../../shared/httpClient';
import { LOAD_BRANDING_MENU, BRANDING_MENU_LOADED, SYNC_FAILED } from './actionTypes';

export const initialActionsState = {
  loadBrandingImagesMenuHierarchy: () => {},
};

export const getActions = (dispatch: {
  (value: { type: any; payload?: any }): void;
  (arg0: { type: string; payload?: any }): void;
}) => ({
  loadBrandingImagesMenuHierarchy: async () => {
    dispatch({
      type: LOAD_BRANDING_MENU,
    });

    const { data, error } = await get(BRANDING_MENU_GET_DEFAULT_MENU);

    if (data) {
        dispatch({
          type: BRANDING_MENU_LOADED,
          payload: data,
        });
      } else {
        dispatch({
          type: SYNC_FAILED,
          payload: error,
        });
      }
  },
});
