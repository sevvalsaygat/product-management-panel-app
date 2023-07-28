import { useState } from 'react';

import { useProducts } from '@hooks';
import { ProductModal, ProductTable } from '@components';

export default function Home() {
  const { clearAllProducts } = useProducts();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex flex-col p-40">
      <ProductModal isOpen={isOpen} closeModal={closeModal} />
      <div className="flex flex-col">
        <div className="flex justify-end px-48 mb-2">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md w-fit px-4 py-2 text-sm font-medium text-blue-500 text-13 bg-gradient-to-r from-blue-200 to-blue-300 hover:text-blue-700"
          >
            Create Product
          </button>
        </div>
        <div className="flex justify-end px-48 mb-8">
          <button
            type="button"
            onClick={clearAllProducts}
            className="rounded-md w-fit px-4 py-2 text-sm font-medium text-white text-13 bg-gradient-to-r from-red-400 to-red-500 hover:text-gray-100"
          >
            Clear All
          </button>
        </div>
      </div>

      <ProductTable products={[]} />
    </div>
  );
}
