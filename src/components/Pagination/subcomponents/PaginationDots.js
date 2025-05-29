import { twMerge } from 'tailwind-merge';

const PaginationDots = () => {
  return (
    <span
      className={twMerge(
        'w-4 h-4 flex justify-center items-center text-gray-50',
      )}
    >
      ...
    </span>
  );
};

export default PaginationDots;
