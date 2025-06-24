import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import * as yup from 'yup';
import { Button, Input, Panel } from '../../components';
import { NewspaperIcon } from '../../images';
import { emailSchema, simplePasswordSchema } from '../../lib/yupHelpers';

const RegisterForm = ({ testId }) => {
  const { t } = useTranslation();
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const validationSchema = yup.object({
    firstName: yup.string().required(t('Form.FormErrorNotBlank')),
    lastName: yup.string().required(t('Form.FormErrorNotBlank')),
    email: emailSchema(t),
    password: simplePasswordSchema(t),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
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

  const handleFormReset = () => {
    formik.resetForm({ email: '', password: '' });
  };

  const handleClearFormikField = (value) => {
    formik.setFieldValue(value, '');
  };

  return (
    <Panel
      name={t('Form.RegisterForm')}
      icon={<NewspaperIcon className="h-4 w-4 mr-2 text-gray" />}
    >
      <form onSubmit={handleSubmit} className={twMerge('flex flex-col')}>
        <Input
          id="firstName"
          label={t('Form.FirstName')}
          name="firstName"
          type="text"
          placeholder={t('Form.FirstName')}
          onChange={formik.handleChange}
          value={formik.values.firstName}
          additionalClasses="mb-2 h-[60px]"
          error={formik.errors.firstName}
          hasClear={true}
          isRequired={true}
          onClear={() => handleClearFormikField('firstName')}
        />

        <Input
          id="lastName"
          label={t('Form.LastName')}
          name="lastName"
          type="text"
          placeholder={t('Form.LastName')}
          onChange={formik.handleChange}
          value={formik.values.lastName}
          additionalClasses="mb-2 h-[60px]"
          error={formik.errors.lastName}
          hasClear={true}
          isRequired={true}
          onClear={() => handleClearFormikField('lastName')}
        />

        <Input
          id="email"
          label={t('Form.EmailAdress')}
          name="email"
          type="email"
          placeholder={t('Form.EmailAdress')}
          onChange={formik.handleChange}
          value={formik.values.email}
          additionalClasses="mb-2 h-[60px]"
          error={formik.errors.email}
          hasClear={true}
          isRequired={true}
          onClear={() => handleClearFormikField('email')}
        />

        <Input
          id="password"
          label={t('Form.Password')}
          name="password"
          type="password"
          placeholder={t('Form.Password')}
          autocomplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.password}
          additionalClasses="mb-2 h-[60px]"
          error={formik.errors.password}
          isRequired={true}
          hasClear={true}
          onClear={() => handleClearFormikField('password')}
          hasShowHide={true}
        />

        <div className="flex flex-row m-auto">
          <Button
            type="submit"
            name={t('Form.Submit')}
            additionalClasses={'m-0 mt-4 px-4 mr-2'}
          />

          <Button
            type="reset"
            name={t('Form.Reset')}
            theme="secondary"
            hover="primary"
            onClick={handleFormReset}
            additionalClasses={'m-0 mt-4 px-4'}
          />
        </div>
      </form>
    </Panel>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  testId: PropTypes.string,
};

RegisterForm.defaultProps = {
  testId: '',
};
