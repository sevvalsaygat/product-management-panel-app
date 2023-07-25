/* eslint-disable @next/next/no-img-element */
import { DrinkProductType } from '@/types';

type DrinkItemPropTypes = {
  product: DrinkProductType;
};

const DrinkItem = ({ product }: DrinkItemPropTypes) => {
  return (
    <tr key={product.id}>
      <td className="px-6 py-4">{product.liter}</td>
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

export default DrinkItem;
