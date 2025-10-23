import { useFormik } from 'formik';
import { useCallback, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import * as yup from 'yup';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Panel from '../../components/Panel/Panel';
import { UserContext } from '../../contexts/UserContext';
import { NewspaperIcon } from '../../images';
import { setLocalStorage } from '../../lib/localstorage';
import { adminLoginSchema, adminPasswordSchema } from '../../lib/yupHelpers';

const AdminForm = ({ testId }) => {
  const { t } = useTranslation();
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const { updateUserContext } = useContext(UserContext);

  const validationSchema = yup.object({
    login: adminLoginSchema(t),
    password: adminPasswordSchema(t),
  });

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validateOnChange: validateAfterSubmit,
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      handleUpdateAdmin(values, actions);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidateAfterSubmit(true);
    formik.handleSubmit();
  };

  const handleFormReset = () => {
    formik.resetForm({ login: '', password: '' });
  };

  const handleClearFormikField = (value) => {
    formik.setFieldValue(value, '');
  };

  const handleUpdateAdmin = useCallback(
    (values) => {
      if (!process.env.REACT_APP_ADMIN_LOGIN) {
        toast.error('Missing configuration for admin login');
        return;
      } else if (!process.env.REACT_APP_ADMIN_PASS) {
        toast.error('Missing configuration for admin password');
        return;
      }

      if (
        values.login === process.env.REACT_APP_ADMIN_LOGIN &&
        values.password === process.env.REACT_APP_ADMIN_PASS
      ) {
        updateUserContext?.((prevState) => ({
          ...prevState,
          isAdmin: true,
        }));
        setLocalStorage('userRoleAdmin', true);
        toast.success('Login as admin.');
      } else {
        toast.error('Incorrect login or password');
        formik.setFieldError('login', 'Incorrect login or password');
        formik.setFieldError('password', 'Incorrect login or password');
      }
    },
    [updateUserContext, formik],
  );

  return (
    <Panel
      name={t('Form.AdminLoginForm')}
      icon={<NewspaperIcon className="h-4 w-4 mr-2 text-gray" />}
    >
      <form onSubmit={handleSubmit} className={twMerge('flex flex-col')}>
        <Input
          id="login"
          label={t('Form.Login')}
          name="login"
          type="text"
          placeholder={t('Form.Login')}
          onChange={formik.handleChange}
          value={formik.values.login}
          additionalClasses="mb-2 h-[60px]"
          error={formik.errors.login}
          hasClear={true}
          isRequired={true}
          onClear={() => handleClearFormikField('login')}
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

export default AdminForm;
