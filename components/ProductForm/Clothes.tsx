import React from 'react';

import { useForm } from 'react-hook-form';

type ClothesPropTypes = {};

const Clothes = ({}: ClothesPropTypes) => {
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
          <label className="text-15 leading-32 font-thin">SIZE</label>
          <input
            type="text"
            {...register('size', {
              required: 'Size cannot be empty.',
            })}
            placeholder="Please enter the size of the product"
            className="placeholder:text-13 placeholder-gray-500 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.size && <span className="text-red-500 text-12">This field is required!</span>}
        </div>
        <div>
          <label className="text-15 leading-32 font-thin">COLOR</label>
          <input
            type="color"
            {...register('color', { required: 'Color cannot be empty.' })}
            className="placeholder:text-13 placeholder-gray-500 placeholder-opacity-50 flex w-full justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.size && <span className="text-red-500 text-12">This field is required!</span>}
        </div>
        <div>
          <label className="text-15 leading-32 font-thin">PRICE</label>
          <input
            type="number"
            {...register('price', { required: 'Price cannot be empty.' })}
            placeholder="Enter product price"
            className="placeholder:text-13 placeholder-gray-500 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.size && <span className="text-red-500 text-12">This field is required!</span>}
        </div>
        <div>
          <label className="text-15 leading-32 font-thin">PHOTO</label>
          <input
            type=""
            {...register('photo', { required: 'Photo cannot be empty.' })}
            placeholder="Enter product photo"
            className="placeholder:text-13 placeholder-gray-500 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.size && <span className="text-red-500 text-12">This field is required!</span>}
        </div>
        <div>
          <label className="text-15 leading-32 font-thin">DESCRIPTION</label>
          <input
            type="text"
            {...register('description', { required: false })}
            placeholder="Enter a description for the product"
            className="placeholder:text-13 placeholder-gray-500 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
        </div>
        <div>
          <label className="text-15 leading-32 font-thin">PIECE</label>
          <input
            type="number"
            {...register('piece', { required: 'Piece cannot be empty.' })}
            placeholder="Enter the piece of products"
            className="placeholder:text-13 placeholder-gray-500 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
          ></input>
          {errors.size && <span className="text-red-500 text-12">This field is required!</span>}
        </div>
        <div className="flex justify-end">
          <button className=" flex text-13 border w-fit py-1 px-4 font-sans rounded-md">FORM</button>
        </div>
      </form>
    </div>
  );
};

export default Clothes;
