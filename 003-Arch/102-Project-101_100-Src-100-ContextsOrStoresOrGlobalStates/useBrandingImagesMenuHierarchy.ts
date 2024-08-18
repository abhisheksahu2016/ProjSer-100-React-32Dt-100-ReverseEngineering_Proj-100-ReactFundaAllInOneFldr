import { useContext } from 'react';
import { BrandingImagesMenuHierarchyContext } from './BrandingImagesMenuHierarchyContext';

const useBrandingImagesMenuHierarchy = () => {
  return useContext(BrandingImagesMenuHierarchyContext);
};

export default useBrandingImagesMenuHierarchy;