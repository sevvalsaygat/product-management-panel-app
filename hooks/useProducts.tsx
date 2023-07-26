import React, { createContext, useState, useEffect } from 'react';

import { nanoid } from 'nanoid';

import { STORAGE_KEYS } from '@constants';
import { ClothesProductType, FoodProductType, DrinkProductType } from '@types';

type UseProductsReturnTypes = {
  products: Array<ClothesProductType | FoodProductType | DrinkProductType>;
  createProduct: (product: ClothesProductType | FoodProductType | DrinkProductType) => void;
};

const ProductsContext = createContext<UseProductsReturnTypes>({} as UseProductsReturnTypes);

export const ProductsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const localProducts = window.localStorage.getItem(STORAGE_KEYS.PRODUCTS);
  const initialProducts = localProducts ? JSON.parse(localProducts) : [];
  const [products, setProducts] =
    useState<Array<ClothesProductType | FoodProductType | DrinkProductType>>(initialProducts);

  function createProduct(product: ClothesProductType | FoodProductType | DrinkProductType) {
    setProducts([...products, { ...product, id: nanoid() }]);
  }

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        createProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default function useProducts() {
  return React.useContext(ProductsContext);
}
