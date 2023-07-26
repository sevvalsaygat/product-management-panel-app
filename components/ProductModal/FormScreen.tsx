import React from 'react';

import { ProductForm } from '@components';
import { ProductType } from '@types';

type FormScreenPropTypes = {
  productType: ProductType;
  closeModal: () => void;
};

const FormScreen = ({ productType, closeModal }: FormScreenPropTypes) => {
  if (productType === ProductType.CLOTHES) {
    return <ProductForm.Clothes closeModal={closeModal} />;
  }

  if (productType === ProductType.DRINK) {
    return <ProductForm.Drink closeModal={closeModal} />;
  }

  return <ProductForm.Food closeModal={closeModal} />;
};

export default FormScreen;
