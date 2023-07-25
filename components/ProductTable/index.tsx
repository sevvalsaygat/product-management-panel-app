/* eslint-disable @next/next/no-img-element */
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

  return (
    <div className="flex justify-center">
      <table className="w-2/3 border">
        <thead className="text-xs text-gray-700 bg-gray-200 dark:text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-5">
              SIZE
            </th>
            <th scope="col" className="px-6 py-3">
              COLOR
            </th>
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
          {products.map((product) => {
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
    </div>
  );
};

export default Table;
