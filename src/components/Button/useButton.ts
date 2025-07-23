import { MouseEventHandler } from 'react';
import {
  BaseBorder,
  BaseButtonType,
  BaseMarginSize,
  BaseRadiusSize,
  BaseSpaceSize,
  BaseTheme,
} from '../../helper/ts/Types';
import {
  WithDisabled,
  WithDisabledCategory,
} from '../../helper/ts/WithDisabled';
import { WithIcon, WithIconCategory } from '../../helper/ts/WithIcon';
import { WithSize, WithSizeCategory } from '../../helper/ts/WithSize';
import { WithTestId, WithTestIdCategory } from '../../helper/ts/WithTestId';

export const ButtonArgTypes = {
  ...WithIconCategory,
  ...WithSizeCategory,
  ...WithDisabledCategory,
  ...WithTestIdCategory,
};

export interface ButtonProps
  extends WithIcon,
    WithSize,
    WithDisabled,
    WithTestId {
  radius?: BaseRadiusSize;
  space?: BaseSpaceSize;
  margin?: BaseMarginSize;
  border?: BaseBorder;
  /**
   * Button if is selected
   */
  isSelected?: true | false;
  /**
   * Button theme
   */
  theme?: BaseTheme;
  /**
   * Button theme on selected
   */
  themeSelected?: BaseTheme;
  /**
   * Button theme change on hover
   */
  themeHover?: 'none' | 'primary' | 'secondary' | 'inherit' | 'fade';
  /**
   * Button type
   */
  type?: BaseButtonType;
  /**
   * Button name
   */
  name?: string;
  /**
   * Button title. Visible on long hover
   */
  title?: string;
  /**
   * Button additional class for container
   */
  additionalClasses?: string;
  /**
   * Button additional class for name element
   */
  additionalClassesName?: string;
  onClick?: MouseEventHandler;
}

export const styleDisabled =
  'bg-gray text-gray-50 hover:bg-gray hover:text-gray-50 hover:opacity-50 cursor-not-allowed';

export const styleBorderRadius = {
  none: 'rounded-none',
  small: 'rounded-sm',
  normal: 'rounded-md',
  big: 'rounded-lg',
  huge: 'rounded-xl',
  full: 'rounded-full',
};

export const styleBorder = {
  none: 'border-0',
  normal: 'border border-gray-50',
  secondary: 'border border-black-400',
};

export const styleSpace = {
  none: 'p-0',
  small: 'px-1 py-0.5',
  normal: 'px-2 py-1',
  slim: 'px-2 py-0.5',
};

export const styleMargin = {
  none: 'm-0',
  tiny: 'm-0.5',
  small: 'm-1',
  normal: 'm-2',
};

export const styleHeight = {
  small: 'h-3',
  normal: 'h-4',
  big: 'h-6',
  huge: 'h-8',
  auto: 'h-auto',
  fit: 'h-fit',
};

export const styleWidth = {
  small: 'w-3',
  normal: 'w-4',
  big: 'w-6',
  huge: 'w-8',
  auto: 'w-auto',
  fit: 'w-fit',
};

export const styleTheme = {
  none: '',
  primary: 'bg-tahiti-700 text-white hover:opacity-80',
  secondary: 'text-green bg-white border border-gray-100 hover:text-tahiti-800',
  transparent: 'bg-transparent text-white hover:bg-tahiti-700 hover:text-white',
  pattern_1_on: 'bg-transparent text-white hover:bg-white hover:text-black',
  pattern_1_off: 'bg-white text-black hover:bg-transparent hover:text-white',
};

export const styleThemeHover = {
  none: '',
  primary: 'hover:bg-tahiti-700 hover:text-white',
  secondary: 'hover:bg-white hover:text-tahiti-800',
  inherit: 'hover:bg-inherit hover:text-inherit',
  fade: 'hover:opacity-50 hover:bg-inherit hover:text-inherit',
};
