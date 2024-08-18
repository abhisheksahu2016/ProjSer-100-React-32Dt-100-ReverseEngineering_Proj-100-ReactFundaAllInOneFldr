import { AxiosError } from 'axios';
import { createSelector } from 'reselect';
import { convertTreeToFlat } from '../../utils/object';
import { IHierarchyBrandingImagesMenu } from './types';

export const initialSelectors = {
  selectIndexedBrandingImagesMenu: () => ({}),
  selectBrandingImagesMenu: () => null,
};

export const selectLoadedState = (state: { loaded: boolean }) => state.loaded;
export const selectBrandingImagesMenus = (state: { brandingimagesmenuHierarchy: IHierarchyBrandingImagesMenu[] }) =>
  state.brandingimagesmenuHierarchy;
export const selectSyncError = (state: { error: AxiosError | null }) => state.error;
export const selectSyncState = (state: { syncing: boolean }) => state.syncing;

export const selectIndexedBrandingImagesMenu = createSelector(
  selectBrandingImagesMenus,
  (brandingImagesMenu: IHierarchyBrandingImagesMenu[]) =>
    convertTreeToFlat<IHierarchyBrandingImagesMenu>(brandingImagesMenu, 'value'),
);
export const selectBrandingImagesMenu = createSelector(
  [selectIndexedBrandingImagesMenu, (_: any, id: any) => id],
  (indexedBrandingImagesMenu, id) => indexedBrandingImagesMenu[id],
);