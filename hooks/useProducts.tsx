import React, { createContext, useState } from 'react';
import { ClothesProductType, FoodProductType, DrinkProductType } from '@types';

type UseProductsReturnTypes = {
  products?: Array<ClothesProductType | FoodProductType | DrinkProductType>;
};

const ProductsContext = createContext<UseProductsReturnTypes>({});

export const ProductsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<Array<ClothesProductType | FoodProductType | DrinkProductType>>([]);

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default function useProducts() {
  return React.useContext(ProductsContext);
}
