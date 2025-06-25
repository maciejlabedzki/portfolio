import PropTypes from 'prop-types';
import { Spinner } from '../../images';
import { getByTestId } from '../../lib/helper';

const Loader = ({ testId, theme }) => {
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

Loader.propTypes = {
  testId: PropTypes.string,
};

Loader.defaultProps = {
  testId: '',
  theme: 'dark',
};
