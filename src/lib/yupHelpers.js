import * as yup from 'yup';

export const emailSchema = (t) =>
  yup
    .string()
    .email(t('Form.FormErrorEnterValidEmail'))
    .required(t('Form.FormErrorEmailIsRequired'));

export const simplePasswordSchema = (t) =>
  yup
    .string()
    .min(8, t('Form.FormErrorPasswordMinimumLength', { length: 8 }))
    .required(t('Form.FormErrorPasswordIsRequired'));

export const adminPasswordSchema = (t) =>
  yup
    .string()
    .min(3, t('Form.FormErrorPasswordMinimumLength', { length: 3 }))
    .required(t('Form.FormErrorPasswordIsRequired'));

export const adminLoginSchema = (t) =>
  yup
    .string()
    .min(3, t('Form.FormErrorLoginMinimumLength', { length: 3 }))
    .required(t('Form.FormErrorLoginIsRequired'));
