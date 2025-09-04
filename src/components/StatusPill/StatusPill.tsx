import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';
import { StatusPillProps } from './useStatusPill';

const StatusPill = ({
  additionalClasses,
  text,
  title = '',
  onClick,

  // With test id
  testId,
}: StatusPillProps) => {
  return (
    <span
      className={twMerge(
        'm-1 z-10',
        'text-xs rounded-full bg-gray',
        'bg-white text-black border border-gray w-[25px] h-[25px] text-center',
        'text-[10px] flex justify-center items-center text-black font-bold',
        additionalClasses,
      )}
      title={title}
      onClick={onClick}
      {...getByTestId(testId, 'container')}
    >
      {text}
    </span>
  );
};

export default StatusPill;
