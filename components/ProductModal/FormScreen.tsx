import React from 'react';

import { ProductForm } from '@components';
import { ProductType } from '@types';

type FormScreenPropTypes = {
  productType: ProductType;
};

const FormScreen = ({ productType }: FormScreenPropTypes) => {
  if (productType === ProductType.CLOTHES) {
    return <ProductForm.Clothes />;
  }

  if (productType === ProductType.DRINK) {
    return <ProductForm.Drink />;
  }

  return <ProductForm.Food />;
};

export default FormScreen;
