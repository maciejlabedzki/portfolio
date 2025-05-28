import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { Paragraph } from '../../components';
import { getByTestId } from '../../lib/helper';

const Footer = ({ testId }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={twMerge(
        'fixed bottom-0 bg-black-200',
        'z-40 flex justify-center w-full ',
      )}
      {...getByTestId(testId, 'container')}
    >
      <Paragraph
        additionalNameClass="text-xs"
        name={`Copyright ${currentYear} by Maciej Łabędzki`}
      />
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  testId: PropTypes.string,
};

Footer.defaultProps = {
  testId: '',
};
