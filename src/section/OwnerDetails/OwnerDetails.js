import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { Paragraph } from '../../components';
import { SocialLinkedIn } from '../../images';
import { getByTestId } from '../../lib/helper';

const OwnerDetails = ({ data, testId }) => {
  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/maciejlabedzki/', 'blank');
  };

  return (
    <div
      className={twMerge('bg-black-200 justify-center flex')}
      {...getByTestId(testId, 'container')}
    >
      <div className="items-center w-full max-w-[1000px] justify-between flex flex-col sm:flex-row pt-2 pb-2">
        <Paragraph
          icon={<SocialLinkedIn className="w-4 h-4 mr-1" />}
          name={`${data?.name} ${data?.surname}`}
          onClick={handleLinkedIn}
          additionalIconClass={'mr-2'}
          additionalClass="cursor-pointer hover:underline"
          title="Linked In Profile Page"
        />

        <Paragraph icon={<PhoneIcon />} name={data?.phone} />

        <Paragraph icon={<EnvelopeIcon />} name={data?.email} />
      </div>
    </div>
  );
};

export default OwnerDetails;

OwnerDetails.propTypes = {
  testId: PropTypes.string,
};

OwnerDetails.defaultProps = {
  testId: '',
};
