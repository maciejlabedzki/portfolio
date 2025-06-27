import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { XMarkIcon } from '../../images';
import { Button, Loader } from '../index';

const Modal = ({ data, open, handleClose }) => {
  const { t } = useTranslation();
  const [imgLoaded, setImgLoaded] = useState(false);

  if (!open) {
    return;
  }

  return (
    <div
      className={twMerge(
        'fixed top-0 left-0',
        'w-full flex justify-center',
        'h-[100vh] items-center z-50',
        'overflow-hidden',
      )}
    >
      <div
        className={twMerge(
          'bg-black w-full h-full top-0 left-0',
          'absolute top-0 left-0 z-10 opacity-50',
          'cursor-pointer',
        )}
        onClick={handleClose}
      />

      <div
        className={twMerge(
          'bg-white border border-gray',
          'min-w-auto sm:min-w-[300px]',
          'min-h-auto sm:min-h-[300px] z-20',
          'rounded-xl relative',
          'overflow-hidden w-[90%] h-auto',
        )}
      >
        <div className="absolute top-0 right-1">
          <Button
            icon={<XMarkIcon className="w-5 h-5" />}
            onClick={handleClose}
            theme="pattern_1_off"
            space="small"
            margin="normal"
            hover="fade"
          />
        </div>

        {data?.name && (
          <div
            className={twMerge(
              'border-b border-gray-100 w-full',
              'flex items-center justify-start',
              'px-4 py-2 font-bold uppercase',
            )}
          >
            {data?.name}
          </div>
        )}

        {!imgLoaded && (
          <div className="w-full flex flex-col justify-center items-center h-20">
            <Loader className="w-8 h-8" />
            <span className="text-sm px-2">Loading</span>
          </div>
        )}

        {data?.imgBig && (
          <div className="bg-white mb-[60px] flex justify-center items-center h-[calc(100%-100px)]">
            <img
              src={data?.imgBig}
              alt={data?.imgAlt}
              onLoad={() => setImgLoaded(true)}
              className={twMerge(
                'px-2 py-2 w-auto h-auto',
                'max-w-[80%] max-h-[80%]',
                'overflow-hidden rounded-xl',
                'w-auto',
              )}
            />
          </div>
        )}

        <div
          className={twMerge(
            'absolute bottom-0 flex justify-center',
            'item-center w-full',
            'border-t border-gray-100 py-2',
          )}
        >
          <Button
            name={t('Global.Close')}
            onClick={handleClose}
            theme="primary"
            space="normal"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
