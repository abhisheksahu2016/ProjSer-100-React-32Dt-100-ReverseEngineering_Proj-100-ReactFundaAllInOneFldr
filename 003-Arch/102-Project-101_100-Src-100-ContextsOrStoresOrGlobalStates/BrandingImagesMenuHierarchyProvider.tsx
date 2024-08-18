import React, { useMemo, useReducer, ReactNode, FunctionComponent } from 'react';
import { getActions } from './actions';
import { initialState, reducer } from './reducer';
import * as selectors from './selectors';
import { BrandingImagesMenuHierarchyContext } from './BrandingImagesMenuHierarchyContext';

export const BrandingImagesMenuHierarchyContextProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useMemo(() => getActions(dispatch), [dispatch]);

  return (
    <BrandingImagesMenuHierarchyContext.Provider value={{ actions, state, selectors }}>
      {children}
    </BrandingImagesMenuHierarchyContext.Provider>
  );
};

export default BrandingImagesMenuHierarchyContextProvider;