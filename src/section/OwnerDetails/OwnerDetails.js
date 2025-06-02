import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { Paragraph } from '../../components';
import { SocialLinkedIn } from '../../images';
import { getByTestId } from '../../lib/helper';

const OwnerDetails = ({ data, testId }) => {
  const { t } = useTranslation();

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
          title={t('Section.OwnerDetails.LinkedInProfilePage')}
        />

        <Paragraph
          icon={<PhoneIcon />}
          name={data?.phone}
          title={t('Section.OwnerDetails.PhoneNumber')}
        />

        <Paragraph
          icon={<EnvelopeIcon />}
          name={data?.email}
          title={t('Section.OwnerDetails.EmailAdress')}
        />
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
