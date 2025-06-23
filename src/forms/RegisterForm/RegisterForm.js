import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import * as yup from 'yup';
import { Button, Input } from '../../components';
import { getByTestId } from '../../lib/helper';
import { emailSchema } from '../../lib/yupHelpers';

const RegisterForm = ({ testId }) => {
  const { t } = useTranslation();
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const validationSchema = yup.object({
    firstName: yup.string().required(t('Form.FormErrorNotBlank')),
    lastName: yup.string().required(t('Form.FormErrorNotBlank')),
    email: emailSchema(t),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validateOnChange: validateAfterSubmit,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidateAfterSubmit(true);
    formik.handleSubmit();
  };

  return (
    <div
      className={twMerge(
        'w-full mt-2 flex flex-col',
        'justify-center items-center',
      )}
      {...getByTestId(testId, 'container')}
    >
      <label className="mb-4 mt-2">{t('Navigation.Register')}</label>

      <form onSubmit={handleSubmit} className={twMerge('flex flex-col')}>
        <Input
          id="firstName"
          label={t('Form.FirstName')}
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          additionalClasses="mb-2 h-[60px]"
          error={formik.errors.firstName}
        />

        <Input
          id="lastName"
          label={t('Form.LastName')}
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          additionalClasses="mb-2 h-[60px]"
          error={formik.errors.lastName}
        />

        <Input
          id="email"
          label={t('Form.EmailAdress')}
          name="email"
          type="email"
          placeholder="Email Adress"
          onChange={formik.handleChange}
          value={formik.values.email}
          additionalClasses="mb-2 h-[60px]"
          error={formik.errors.email}
        />

        <Button type="submit" name="Submit" additionalClasses={'m-0 mt-4'} />
      </form>
    </div>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  testId: PropTypes.string,
};

RegisterForm.defaultProps = {
  testId: '',
};
