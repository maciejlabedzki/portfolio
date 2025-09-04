import { twMerge } from 'tailwind-merge';
import { Bg1 } from '../../images';
import { getByTestId } from '../../lib/helper';

const Welcome = ({
  header,
  desc,
  imgAlt = 'Welcome',
  imgSrc = Bg1,
  testId,
}) => {
  return (
    <div
      className={twMerge(
        'bg-black-200 flex h-[200px] w-full',
        'justify-center items-center',
        'relative overflow-hidden flex flex-col',
      )}
      {...getByTestId(testId, 'container')}
    >
      {imgSrc && (
        <img
          className="absolute w-full h-full z-0 top-0 left-[-50%] ml-[+50%]"
          src={imgSrc}
          alt={imgAlt}
          {...getByTestId(testId, 'image')}
        />
      )}

      {header && (
        <p
          className="bg-opacity text-white text-3xl font-bold z-10 w-full text-center"
          {...getByTestId(testId, 'header')}
        >
          {header}
        </p>
      )}

      {desc && (
        <p
          className="bg-opacity my-2 text-white z-10 w-full text-center"
          {...getByTestId(testId, 'desc')}
        >
          {desc}
        </p>
      )}
    </div>
  );
};

export default Welcome;
