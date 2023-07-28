import React from 'react';

import { Icons } from '@components';
import { ProductType } from '@types';

type OptionsScreenPropTypes = {
  onSelectedOption: (type: ProductType) => void;
};

const OptionsScreen = ({ onSelectedOption }: OptionsScreenPropTypes) => {
  return (
    <div className="flex flex-col p-10">
      <button
        className="justify-center w-full border border-blue-100 p-1 rounded-md hover:bg-gray-100 font-mono text-15 leading-32 text-blue-700 flex items-center"
        onClick={() => {
          onSelectedOption(ProductType.CLOTHES);
        }}
      >
        <div className="flex items-center w-24">
          <Icons.SvgClothes className="w-6 h-6 mr-2" />
          <span>Clothes</span>
        </div>
      </button>
      <button
        className="justify-center w-full border border-blue-100 p-1 rounded-md hover:bg-gray-100 font-mono text-15 leading-32 text-blue-700 flex items-center"
        onClick={() => {
          onSelectedOption(ProductType.FOOD);
        }}
      >
        <div className="flex items-center w-24">
          <Icons.SvgFood className="w-8 h-8 mr-2" />
          <span>Food</span>
        </div>
      </button>
      <button
        className="justify-center w-full border border-blue-100 p-1 rounded-md hover:bg-gray-100 font-mono text-15 leading-32 text-blue-700 flex items-center"
        onClick={() => {
          onSelectedOption(ProductType.DRINK);
        }}
      >
        <div className="flex items-center w-24">
          <Icons.SvgDrink className="w-8 h-8 mr-2" />
          <span>Drink</span>
        </div>
      </button>
    </div>
  );
};

export default OptionsScreen;
