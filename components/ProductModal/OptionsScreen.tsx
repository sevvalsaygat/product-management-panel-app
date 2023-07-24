import React from 'react';

import { ProductType } from '@types';

type OptionsScreenPropTypes = {
  onSelectedOption: (type: ProductType) => void;
};

const OptionsScreen = ({ onSelectedOption }: OptionsScreenPropTypes) => {
  return (
    <div className="flex flex-col p-10">
      <button
        className="border p-1 rounded-md hover:bg-gray-100 font-mono text-15 leading-32 text-gray-700"
        onClick={() => {
          onSelectedOption(ProductType.CLOTHES);
        }}
      >
        Clothes
      </button>
      <button
        className="border p-1 rounded-md hover:bg-gray-100 font-mono text-15 leading-32 text-gray-700"
        onClick={() => {
          onSelectedOption(ProductType.FOOD);
        }}
      >
        Food
      </button>
      <button
        className="border p-1 rounded-md hover:bg-gray-100 font-mono text-15 leading-32 text-gray-700"
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
