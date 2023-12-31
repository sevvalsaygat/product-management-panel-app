/* eslint-disable @next/next/no-img-element */
import { useForm } from 'react-hook-form';

import { useProducts } from '@hooks';
import { Form } from '@components';
import { ClothesProductType, ProductType } from '@types';

type ClothesPropTypes = {
  closeModal: () => void;
};

type FormTypes = {
  size: string;
  color: string;
  price: number;
  photo: string;
  description?: string;
  quantity: number;
};

const Clothes = ({ closeModal }: ClothesPropTypes) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormTypes>();

  const { createProduct } = useProducts();

  const onSubmit = (data: FormTypes) => {
    createProduct({
      size: data.size,
      color: data.color,
      price: data.price,
      photo: data.photo,
      description: data.description,
      quantity: data.quantity,
      type: ProductType.CLOTHES,
    } as ClothesProductType);

    reset();
    closeModal();
  };

  return (
    <div>
      <form className="flex flex-col gap-3 py-6 px-10" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 text-15 leading-32">
            SIZE
          </label>
          <input
            type="text"
            {...register('size', {
              required: 'Size cannot be empty.',
            })}
            placeholder="Please enter the size of the product"
            className="placeholder:text-13 placeholder-blue-300 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.size && <span className="text-red-500 text-12">{errors.size?.message as string}</span>}
        </div>
        <div>
          <label className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 text-15 leading-32">
            COLOR
          </label>
          <input
            type="color"
            {...register('color', { required: 'Color cannot be empty.' })}
            className="flex w-full justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.color && <span className="text-red-500 text-12">{errors.color?.message as string}</span>}
        </div>
        <div>
          <label className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 text-15 leading-32">
            PRICE
          </label>
          <input
            type="number"
            {...register('price', { required: 'Price cannot be empty.' })}
            placeholder="Enter product price"
            className="placeholder:text-13 placeholder-blue-300 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.price && <span className="text-red-500 text-12">{errors.price?.message as string}</span>}
        </div>
        <div>
          <label className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 text-15 leading-32">
            FOTOĞRAF
          </label>
          <Form.FileInput control={control} errors={errors} watch={watch} setValue={setValue} name="photo" />
        </div>
        <div>
          <label className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 text-15 leading-32">
            DESCRIPTION
          </label>
          <input
            type="text"
            {...register('description', { required: false })}
            placeholder="Enter a description for the product"
            className="placeholder:text-13 placeholder-blue-300 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
        </div>
        <div>
          <label className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 text-15 leading-32">
            QUANTITY
          </label>
          <input
            type="number"
            {...register('quantity', { required: 'Quantity cannot be empty.' })}
            placeholder="Enter the quantity of products"
            className="placeholder:text-13 placeholder-blue-300 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.quantity && <span className="text-red-500 text-12">{errors.quantity?.message as string}</span>}
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="flex items-center justify-center align-center bg-gradient-to-r from-blue-200 to-blue-300 text-blue-500 hover:text-blue-700 text-13 border-transparent w-full py-2 font-sans rounded-md"
          >
            FORM
          </button>
        </div>
      </form>
    </div>
  );
};

export default Clothes;
