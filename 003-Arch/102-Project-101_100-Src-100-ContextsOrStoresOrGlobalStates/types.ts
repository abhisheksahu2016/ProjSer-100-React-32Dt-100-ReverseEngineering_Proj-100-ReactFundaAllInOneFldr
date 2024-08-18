
import { AxiosError } from 'axios';

export interface IHierarchyBrandingImagesMenu {
  value: string;
  name: string;
  displayName?: string | null;
  nodeType: string;
  parentId?: string | null;
  children?: IHierarchyBrandingImagesMenu[];
  isHidden?: boolean;
  mainDisplay : string;
}

export interface IBrandingImagesMenuHierarchyState {
  error: AxiosError | null;
  loaded: boolean;
  brandingimagesmenuHierarchy: IHierarchyBrandingImagesMenu[];
  syncing: boolean;
}

export interface IBrandingImagesMenuHierarchyActions {
  loadBrandingImagesMenuHierarchy: () => void;
}

export interface IBrandingImagesMenuHierarchySelectors {
  selectIndexedBrandingImagesMenu: (
    state: IBrandingImagesMenuHierarchyState,
  ) => Record<string, IHierarchyBrandingImagesMenu>;
  selectBrandingImagesMenu: (state: IBrandingImagesMenuHierarchyState, id: string) => IHierarchyBrandingImagesMenu | null;
}

export interface IBrandingImagesMenuHierarchyContext {
  state: IBrandingImagesMenuHierarchyState;
  actions: IBrandingImagesMenuHierarchyActions;
  selectors: IBrandingImagesMenuHierarchySelectors;
}
