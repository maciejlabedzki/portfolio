import { Spinner } from '../../images';
import { getByTestId } from '../../lib/helper';

const Loader = ({ testId, theme = 'dark' }) => {
  const filterTheme = {
    light: `invert(1)`,
    dark: `invert(0)`,
  };

  return (
    <div
      className="text-white"
      {...getByTestId(testId, 'container')}
      style={{ filter: filterTheme[theme] }}
    >
      <Spinner className={'w-6 h-6'} />
    </div>
  );
};

export default Loader;
