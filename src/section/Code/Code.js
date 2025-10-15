import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const Code = ({ data, selected, onClick, testId }) => {
  if (data?.length === 0) {
    return;
  }

  return (
    <div
      className={twMerge(
        'bg-black-300  px-2 py-3 w-full',
        'justify-center items-center',
        'border-black-400 border-1 border-t',
      )}
      {...getByTestId(testId, 'container')}
    >
      <div className="flex flex-wrap sm:flex-row max-w-[620px] m-auto">
        {data?.map((code) => (
          <img
            src={code.img}
            alt={code.name}
            title={code.name}
            key={code.id}
            className={twMerge(
              'h-10 sm:h-20 w-10 sm:w-20 m-1 hover:opacity-80',
              'cursor-pointer',
              selected === code.tag && 'border border-4 border-green',
            )}
            hidden={!code.visible}
            onClick={() => onClick(code.tag)}
          />
        ))}
      </div>
    </div>
  );
};

export default Code;
