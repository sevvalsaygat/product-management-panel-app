import { Fragment, useState } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import { ProductType } from '@types';
import OptionsScreen from './OptionsScreen';
import FormScreen from './FormScreen';

type ProductModalPropTypes = {
  isOpen: boolean;
  closeModal: () => void;
};

const ProductModal = ({ isOpen, closeModal }: ProductModalPropTypes) => {
  const [activeScreen, setActiveScreen] = useState<number>(0);
  const [productType, setProductType] = useState<ProductType>();

  function onSelectedOption(type: ProductType) {
    setProductType(type);
    setActiveScreen(1);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          closeModal();
          setTimeout(() => {
            setActiveScreen(0);
          }, 400);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full max-w-md overflow-y-scroll transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                style={{ maxHeight: '90vh' }}
              >
                <div className="mt-4">
                  {activeScreen === 0 ? (
                    <OptionsScreen onSelectedOption={onSelectedOption} />
                  ) : (
                    <FormScreen productType={productType!!} closeModal={closeModal} />
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProductModal;
