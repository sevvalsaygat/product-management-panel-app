/* eslint-disable @next/next/no-img-element */
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

  const categories: {
    CLOTHES: ClothesProductType[];
    DRINK: DrinkProductType[];
    FOOD: FoodProductType[];
  } = {
    CLOTHES: [],
    DRINK: [],
    FOOD: [],
  };

  products.forEach((product) => {
    if (product.type === ProductType.CLOTHES) {
      categories.CLOTHES.push(product as ClothesProductType);
    } else if (product.type === ProductType.DRINK) {
      categories.DRINK.push(product as DrinkProductType);
    } else if (product.type === ProductType.FOOD) {
      categories.FOOD.push(product as FoodProductType);
    }
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
            {Object.values(categories).map((category, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                )}
              >
                <table className="max-w-3xl w-full border">
                  <thead className="text-xs text-gray-700 bg-gray-200 dark:text-gray-700">
                    <tr>
                      {category[0]?.type === ProductType.CLOTHES && (
                        <>
                          <th scope="col" className="px-6 py-5">
                            SIZE
                          </th>
                          <th scope="col" className="px-6 py-3">
                            COLOR
                          </th>
                        </>
                      )}
                      {category[0]?.type === ProductType.FOOD && (
                        <>
                          <th scope="col" className="px-6 py-3">
                            WEIGHT
                          </th>
                          <th scope="col" className="px-6 py-3">
                            BRAND {/* Eklediğimiz sütun */}
                          </th>
                        </>
                      )}
                      {category[0]?.type === ProductType.DRINK && (
                        <>
                          <th scope="col" className="px-6 py-3">
                            LITER
                          </th>
                          <th scope="col" className="px-6 py-3">
                            BRAND {/* Eklediğimiz sütun */}
                          </th>
                        </>
                      )}
                      <th scope="col" className="px-6 py-3">
                        PRICE
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PHOTO
                      </th>
                      <th scope="col" className="px-6 py-3">
                        DESCRIPTION
                      </th>
                      <th scope="col" className="px-6 py-3">
                        QUANTITY
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.map((product) => {
                      if (product.type === ProductType.CLOTHES) {
                        return <ClothesItem key={product.id} product={product as ClothesProductType} />;
                      }
                      if (product.type === ProductType.DRINK) {
                        return <DrinkItem key={product.id} product={product as DrinkProductType} />;
                      }
                      return <FoodItem key={product.id} product={product as FoodProductType} />;
                    })}
                  </tbody>
                </table>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Table;
