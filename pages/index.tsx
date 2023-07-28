import { useState } from 'react';

import { ProductModal, ProductTable } from '@components';

export default function Home() {
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
      <div className="flex justify-end px-48 mb-10">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md w-fit px-4 py-2 text-sm font-medium text-blue-500 text-13 bg-gradient-to-r from-blue-200 to-blue-300 hover:text-blue-700"
        >
          Create Product
        </button>
      </div>
      <ProductTable products={[]} />
    </div>
  );
}
