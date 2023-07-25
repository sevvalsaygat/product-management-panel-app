/* eslint-disable @next/next/no-img-element */
import { FoodProductType } from '@/types';

type FoodItemPropTypes = {
  product: FoodProductType;
};

const FoodItem = ({ product }: FoodItemPropTypes) => {
  return (
    <tr key={product.id}>
      <td className="px-6 py-4">{product.weight}</td>
      <td className="px-6 py-4">{product.brand}</td>
      <td className="px-6 py-4">{product.price}</td>
      <td className="px-6 py-4">
        <img src={product.photo} alt={product.description} width="50" />
      </td>
      <td className="px-6 py-4">{product.description}</td>
      <td className="px-6 py-4">{product.quantity}</td>
    </tr>
  );
};

export default FoodItem;
