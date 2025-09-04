import { MouseEventHandler } from 'react';
import {
  BaseMarginSize,
  BaseSpaceSize,
  BaseTheme,
} from '../../helper/ts/Types';
import { WithTestId, WithTestIdCategory } from '../../helper/ts/WithTestId';

export const ButtonListArgTypes = {
  ...WithTestIdCategory,
};

export interface ButtonItemProps {
  value: string;
  name: string;
}

export interface ButtonListProps extends WithTestId {
  data?: Array<ButtonItemProps>;
  selected?: ButtonItemProps;
  space?: BaseSpaceSize;
  margin?: BaseMarginSize;
  theme?: BaseTheme;
  themeSelected?: BaseTheme;
  additionalButtonClasses?: string;
  additionalClasses?: string;
  onClick?: MouseEventHandler;
}
