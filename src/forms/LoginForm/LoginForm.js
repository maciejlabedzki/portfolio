import { useFormik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import * as yup from 'yup';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Panel from '../../components/Panel/Panel';
import { NewspaperIcon } from '../../images';
import { emailSchema, simplePasswordSchema } from '../../lib/yupHelpers';

const LoginForm = ({ testId }) => {
  const { t } = useTranslation();
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const validationSchema = yup.object({
    email: emailSchema(t),
    password: simplePasswordSchema(t),
  });

  const formik = useFormik({
    initialValues: {
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
      name={t('Form.LoginForm')}
      icon={<NewspaperIcon className="h-4 w-4 mr-2 text-gray" />}
    >
      <form onSubmit={handleSubmit} className={twMerge('flex flex-col')}>
        <Input
          id="email"
          label={t('Form.EmailAdress')}
          name="email"
          type="email"
          placeholder={t('Form.EmailAdress')}
          autocomplete="email"
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
            themeHover="primary"
            onClick={handleFormReset}
            additionalClasses={'m-0 mt-4 px-4'}
          />
        </div>
      </form>
    </Panel>
  );
};

export default LoginForm;
