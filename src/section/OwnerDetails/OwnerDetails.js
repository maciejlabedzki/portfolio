import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import Paragraph from '../../components/Paragraph/Paragraph';
import { SocialLinkedIn, UserIcon } from '../../images';
import { getByTestId } from '../../lib/helper';

const OwnerDetails = ({ data, testId }) => {
  const { t } = useTranslation();

  if (!data?.name && !data?.surname && !data?.phone && !data?.email) {
    return;
  }

  const handleLinkedIn = () => {
    if (data?.linkedIn) {
      window.open(data.linkedIn, 'blank');
    }
  };

  return (
    <div
      className={twMerge('bg-black-200 justify-center flex')}
      {...getByTestId(testId, 'container')}
    >
      <div
        className={twMerge(
          'items-center w-full max-w-[1000px] justify-between',
          'flex flex-col sm:flex-row pt-2 pb-2',
        )}
      >
        {(data?.name || data?.surname) && (
          <Paragraph
            icon={
              data.linkedIn ? (
                <SocialLinkedIn className="w-4 h-4 mr-1" />
              ) : (
                <UserIcon />
              )
            }
            name={[data?.name, data?.surname].filter(Boolean).join(' ')}
            onClick={handleLinkedIn}
            additionalIconClass={'mr-2'}
            additionalClass={twMerge(
              data.linkedIn && 'cursor-pointer hover:underline',
            )}
            title={t('Section.OwnerDetails.LinkedInProfilePage')}
          />
        )}

        {data?.phone && (
          <Paragraph
            icon={<PhoneIcon />}
            name={data?.phone}
            title={t('Section.OwnerDetails.PhoneNumber')}
          />
        )}

        {data?.email && (
          <Paragraph
            icon={<EnvelopeIcon />}
            name={data?.email}
            title={t('Section.OwnerDetails.EmailAdress')}
          />
        )}
      </div>
    </div>
  );
};

export default OwnerDetails;
