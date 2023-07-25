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
          className="rounded-md w-fit bg-black bg-opacity-30 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Create Product
        </button>
      </div>
      <ProductTable />
    </div>
  );
}
