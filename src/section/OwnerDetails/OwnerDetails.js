import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import Loader from '../../components/Loader/Loader';
import Paragraph from '../../components/Paragraph/Paragraph';
import { Github, SocialLinkedIn, UserIcon } from '../../images';
import { getByTestId } from '../../lib/helper';

const OwnerDetails = ({ data, loading = false, hidden = false, testId }) => {
  const { t } = useTranslation();

  const handleLinkedIn = () => {
    if (data?.linkedIn) {
      window.open(data.linkedIn, 'blank');
    }
  };

  const handleGithub = () => {
    if (data?.github) {
      window.open(data.github, 'blank');
    }
  };

  return (
    <div
      className={twMerge(
        'bg-black-200 justify-center flex min-h-[44px]',
        hidden && 'hidden',
      )}
      {...getByTestId(testId, 'container')}
    >
      <div
        className={twMerge(
          'items-center w-full max-w-[1000px] justify-between',
          'flex flex-col sm:flex-row pt-2 pb-2',
        )}
      >
        {loading && <Loader theme="light" additionalClasses="m-auto" />}

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
              'whitespace-nowrap',
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

        {data?.github && (
          <Paragraph
            icon={<Github className="w-4 h-4" />}
            name={data?.github}
            title={t('Section.OwnerDetails.Github')}
            onClick={handleGithub}
            additionalIconClass={'mr-2'}
            additionalClass={twMerge(
              data.github && 'cursor-pointer hover:underline',
            )}
          />
        )}
      </div>
    </div>
  );
};

export default OwnerDetails;
