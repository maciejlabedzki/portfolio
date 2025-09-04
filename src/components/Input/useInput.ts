import { ChangeEventHandler, Ref } from 'react';
import { WithTestId, WithTestIdCategory } from '../../helper/ts/WithTestId';

export const InputArgTypes = {
  ...WithTestIdCategory,
};

export interface InputProps extends WithTestId {
  id?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  type?: string;
  error?: string;
  label?: string;
  testId?: string;
  autocomplete?: string;
  hasClear?: string;
  onClear?: () => void;
  additionalClasses?: string;
  additionalInputClasses?: string;
  additionalLabelClasses?: string;
  isRequired?: string;
  hasShowHide?: string;
  ref?: Ref<HTMLInputElement>;
}
