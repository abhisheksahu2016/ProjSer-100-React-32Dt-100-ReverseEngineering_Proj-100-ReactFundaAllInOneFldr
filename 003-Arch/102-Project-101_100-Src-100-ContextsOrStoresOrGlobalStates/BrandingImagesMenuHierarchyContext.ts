import { createContext } from 'react';
import { initialActionsState } from './actions';
import { initialState } from './reducer';
import { initialSelectors } from './selectors';
import { IBrandingImagesMenuHierarchyContext } from './types';

export const BrandingImagesMenuHierarchyContext = createContext<IBrandingImagesMenuHierarchyContext>({
  state: initialState,
  actions: initialActionsState,
  selectors: initialSelectors,
});
