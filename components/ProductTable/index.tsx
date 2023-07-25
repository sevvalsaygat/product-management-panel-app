/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import { Tab } from '@headlessui/react';

import { useProducts } from '@hooks';
import { ClothesProductType, DrinkProductType, FoodProductType, ProductType } from '@/types';
import ClothesItem from './ClothesItem';
import DrinkItem from './DrinkItem';
import FoodItem from './FoodItem';

type TablePropTypes = {
  products: Array<ClothesProductType>;
};

const Table = ({}: TablePropTypes) => {
  const { products } = useProducts();

  function classNames(...products: any[]) {
    return products.filter(Boolean).join(' ');
  }

  const [categories] = useState({
    Recent: [{}],
    Popular: [{}],
    Trending: [{}],
  });

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                )}
              ></Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Table;
