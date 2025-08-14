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
      style={{ filter: filterTheme[theme] }}
      {...getByTestId(testId, 'container')}
    >
      <Spinner className={'w-6 h-6'} />
    </div>
  );
};

export default Loader;
