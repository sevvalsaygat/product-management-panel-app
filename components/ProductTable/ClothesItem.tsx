/* eslint-disable @next/next/no-img-element */
import { ClothesProductType } from '@/types';

type ClothesItemPropTypes = {
  product: ClothesProductType;
};

const ClothesItem = ({ product }: ClothesItemPropTypes) => {
  return (
    <tr key={product.id}>
      <td className="px-6 py-4">{product.size}</td>
      <td className="px-6 py-4">{product.color}</td>
      <td className="px-6 py-4">{product.price}</td>
      <td className="px-6 py-4">
        <img src={product.photo} alt={product.description} width="50" />
      </td>
      <td className="px-6 py-4">{product.description}</td>
      <td className="px-6 py-4">{product.quantity}</td>
    </tr>
  );
};

export default ClothesItem;
