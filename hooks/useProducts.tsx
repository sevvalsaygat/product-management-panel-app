import React, { createContext, useState } from 'react';

import { nanoid } from 'nanoid';

import { ClothesProductType, FoodProductType, DrinkProductType } from '@types';

type UseProductsReturnTypes = {
  products: Array<ClothesProductType | FoodProductType | DrinkProductType>;
  createProduct: (product: ClothesProductType | FoodProductType | DrinkProductType) => void;
};

const ProductsContext = createContext<UseProductsReturnTypes>({} as UseProductsReturnTypes);

export const ProductsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<Array<ClothesProductType | FoodProductType | DrinkProductType>>([]);

  function createProduct(product: ClothesProductType | FoodProductType | DrinkProductType) {
    setProducts([...products, { ...product, id: nanoid() }]);
  }

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
