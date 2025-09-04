import { BaseTheme } from '../../helper/ts/Types';
import { WithTestId, WithTestIdCategory } from '../../helper/ts/WithTestId';

export const DropdownArgTypes = {
  ...WithTestIdCategory,
};

export interface DropdownProps extends WithTestId {
  theme?: 'dark' | 'light';
  align?: 'topRight' | 'topLeft' | 'center';
  hasBackdrop?: boolean;
  icon?: any;
  name?: string;
  additionalClasses?: string;
  additionalBackdropClasses?: string;
  additionalButtonClasses?: string;
  additionalBoxClasses?: string;
  children?: any;
  themeButton?: BaseTheme;
}

export const styleTheme = {
  dark: ' bg-black-300 text-white border-gray',
  light: ' bg-white text-black',
};

export const styleAlign = {
  topRight: 'sm:top-0 sm:right-0',
  topLeft: 'sm:top-0 sm:left-0',
  center: 'top-0 right-0 mr-[calc(-150%-10px)]',
};
