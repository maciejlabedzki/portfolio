import { twMerge } from 'tailwind-merge';

const Suggestions = ({ data, handleSearch, searchValue, title, option }) => {
  return (
    <div
      className={twMerge(
        'flex flex-wrap sm:flex-row max-w-full min-w-full',
        'mt-0 pt-2 pb-2 w-full justify-center',
        'bg-black-300 border-t border-black-300',
        'text-white relative',
      )}
    >
      <label className="text-white px-2">{title}</label>

      <div className="flex flex-wrap justify-center">
        {data?.map((item) => (
          <button
            key={item}
            className={twMerge(
              'mb-2 px-2 border border-black-400 mt-1',
              'rounded-full text-sm mr-2 last:mr-0',
              'hover:bg-white hover:text-black',
              'w-fit min-w-[100px] select-none',
              searchValue === item &&
                'bg-white text-black pointer-events-none cursor-default select-none',
            )}
            onClick={() => handleSearch(item, option)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
