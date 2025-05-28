import PropTypes from 'prop-types';
import { Spinner } from '../../images';
import { getByTestId } from '../../lib/helper';

const Loader = ({ testId }) => {
  return (
    <div {...getByTestId(testId, 'container')}>
      <Spinner className="w-6 h-6" />
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  testId: PropTypes.string,
};
