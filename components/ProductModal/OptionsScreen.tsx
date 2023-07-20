import React from 'react';

import { ProductType } from '@types';

type OptionsScreenPropTypes = {
  onSelectedOption: (type: ProductType) => void;
};

const OptionsScreen = ({ onSelectedOption }: OptionsScreenPropTypes) => {
  return (
    <div className="flex flex-col">
      <button
        onClick={() => {
          onSelectedOption(ProductType.CLOTHES);
        }}
      >
        Clothes
      </button>
      <button
        onClick={() => {
          onSelectedOption(ProductType.FOOD);
        }}
      >
        Food
      </button>
      <button
        onClick={() => {
          onSelectedOption(ProductType.DRINK);
        }}
      >
        Drink
      </button>
    </div>
  );
};

export default OptionsScreen;
