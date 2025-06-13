import * as yup from 'yup';

export const emailSchema = (t) =>
  yup
    .string()
    .email(t('Form.FormErrorEnterValidEmail'))
    .required(t('Form.FormErrorEmailIsRequired'));
