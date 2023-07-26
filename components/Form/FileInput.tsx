/* eslint-disable @next/next/no-img-element */
import { Control, Controller, FieldErrors, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/outline';

type FileInputPropTypes = {
  control: Control<any, any>;
  errors: FieldErrors<any>;
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
  name: string;
};

const FileInput = ({ control, errors, watch, name, setValue }: FileInputPropTypes) => {
  const photoWatch = watch(name);
  return (
    <>
      {!photoWatch && (
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              <input
                onChange={(e) => {
                  if (e.target.files) {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      field.onChange(reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                type="file"
                placeholder="Ürün fotoğrafını girin"
                className="placeholder:text-13 placeholder-pink-300 placeholder-opacity-50 flex w-full p-2 justify-center items-center border border-gray-300 rounded-md"
              ></input>
            );
          }}
        />
      )}
      {errors.photo && <span className="text-red-500 text-12">{errors.photo?.message as string}</span>}

      {photoWatch && (
        <div className="flex flex-col gap-2">
          <XMarkIcon
            onClick={() => {
              setValue(name, '');
            }}
            className="w-6 h-6 text-red-500"
          />
          <img src={photoWatch} alt="image" />
        </div>
      )}
    </>
  );
};

export default FileInput;
