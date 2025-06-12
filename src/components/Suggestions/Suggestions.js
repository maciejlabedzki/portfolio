import { twMerge } from 'tailwind-merge';
import { Button } from '../../components';

const Suggestions = ({ data, handleSearch, searchValue, title, option }) => {
  return (
    <div
      className={twMerge(
        'flex flex-wrap sm:flex-row max-w-full min-w-full',
        'mt-0 pt-2 pb-2 w-full justify-center items-center',
        'bg-black-300 border-t border-black-300',
        'text-white relative',
      )}
    >
      <label className="text-white px-2">{title}</label>

      <div className="flex flex-wrap justify-center">
        {data?.map((item) => (
          <Button
            key={item}
            name={item}
            theme={searchValue === item ? 'pattern_1_off' : 'pattern_1_on'}
            border="secondary"
            radius="full"
            width="fit"
            margin="small"
            space="slim"
            onClick={() => handleSearch(item, option)}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
