/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import { useForm } from 'react-hook-form';

type FoodPropTypes = {};

const Food = ({}: FoodPropTypes) => {
  const [imageBase64, setImageBase64] = useState('');

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageBase64(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => data;

  return (
    <div>
      <form className="flex flex-col gap-3 py-6 px-10" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-15 leading-32">
            WEIGHT
          </label>
          <input
            type="number"
            {...register('weight', {
              required: 'Weight cannot be empty.',
            })}
            placeholder="Please enter the weight of the product"
            className="placeholder:text-13 placeholder-pink-300 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.weight && <span className="text-red-500 text-12">{errors.weight?.message as string}</span>}
        </div>
        <div>
          <label className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-15 leading-32">
            BRAND
          </label>
          <input
            type="text"
            {...register('brand', { required: 'Brand cannot be empty.' })}
            placeholder="Enter product brand"
            className="placeholder:text-13 placeholder-pink-300 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.brand && <span className="text-red-500 text-12">{errors.brand?.message as string}</span>}
        </div>
        <div>
          <label className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-15 leading-32">
            PRICE
          </label>
          <input
            type="number"
            {...register('price', { required: 'Price cannot be empty.' })}
            placeholder="Enter product price"
            className="placeholder:text-13 placeholder-pink-300 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.price && <span className="text-red-500 text-12">{errors.price?.message as string}</span>}
        </div>
        <div>
          <label className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-15 leading-32">
            FOTOĞRAF
          </label>
          <input
            type="file"
            onChange={handleFileInputChange}
            placeholder="Ürün fotoğrafını girin"
            className="placeholder:text-13 placeholder-pink-300 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.photo && <span className="text-red-500 text-12">{errors.photo?.message as string}</span>}

          {imageBase64 && <img src={imageBase64} alt={Image.name} />}
        </div>
        <div>
          <label className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-15 leading-32">
            DESCRIPTION
          </label>
          <input
            type="text"
            {...register('description', { required: false })}
            placeholder="Enter a description for the product"
            className="placeholder:text-13 placeholder-pink-300 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
        </div>
        <div>
          <label className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-15 leading-32">
            QUANTITY
          </label>
          <input
            type="number"
            {...register('quantity', { required: 'Quantity cannot be empty.' })}
            placeholder="Enter the quantity of products"
            className="placeholder:text-13 placeholder-pink-300 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.quantity && <span className="text-red-500 text-12">{errors.quantity?.message as string}</span>}
        </div>
        <div className="flex justify-end mt-4">
          <button className="flex items-center justify-center align-center bg-gradient-to-r from-purple-200 to-pink-300 hover:from-pink-300 hover:to-purple-200 text-pink-500 text-13 border-transparent w-full py-2 font-sans rounded-md">
            FORM
          </button>
        </div>
      </form>
    </div>
  );
};

export default Food;
