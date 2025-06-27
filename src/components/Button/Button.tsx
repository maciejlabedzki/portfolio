import { MouseEventHandler, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helpers';

interface Props {
  name?: string;
  icon?: any;
  title?: string;
  additionalClasses?: string;
  additionalClassesIcon?: string;
  additionalClassesName?: string;
  testId?: any;
  radius?: 'none' |'small' |'normal' |'big' |'huge' |'full';
  space?: 'none' | 'small' | 'normal' | 'slim';
  margin?: 'none' | 'tiny' | 'small' | 'normal';
  height?:  'small' | 'normal' | 'big' | 'huge' | 'auto' | 'fit' ;
  width?: 'small' | 'normal' | 'big' | 'huge' | 'auto' | 'fit' ;
  border?: 'none' | 'normal' | 'secondary';
  theme?: 'none' | 'primary' | 'secondary' | 'transparent' | 'pattern_1_on' | 'pattern_1_off';
  hover?: 'none' | 'primary' | 'secondary' | 'inherit' | 'fade'; 
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler;
  children: ReactNode;
}

const Button = ({
  name = "",
  radius = "normal",
  space = "small",
  margin = "small",
  height = "fit",
  width = "fit",
  border = "none",
  icon = "",
  theme = "primary",
  title = "",
  hover = "none",
  additionalClasses = "",
  additionalClassesIcon = "",
  additionalClassesName = "",
  type = "button",
  testId = "",
  onClick,
  children,
}: Props) => {
  const styleBorder = {
    none: 'border-0',
    normal: 'border border-gray-50',
    secondary: 'border border-black-400',
  };

  const styleBorderRadius = {
    none: 'rounded-none',
    small: 'rounded-sm',
    normal: 'rounded-md',
    big: 'rounded-lg',
    huge: 'rounded-xl',
    full: 'rounded-full',
  };

  const styleSpace = {
    none: 'p-0',
    small: 'px-1 py-0.5',
    normal: 'px-2 py-1',
    slim: 'px-2 py-0.5',
  };

  const styleMargin = {
    none: 'm-0',
    tiny: 'm-0.5',
    small: 'm-1',
    normal: 'm-2',
  };

  const styleHeight = {
    small: 'h-3',
    normal: 'h-4',
    big: 'h-6',
    huge: 'h-8',
    auto: 'h-auto',
    fit: 'h-fit',
  };

  const styleWidth = {
    small: 'w-3',
    normal: 'w-4',
    big: 'w-6',
    huge: 'w-8',
    auto: 'w-auto',
    fit: 'w-fit',
  };

  const styleTheme = {
    none: '',
    primary: 'bg-tahiti-700 text-white hover:opacity-80',
    secondary:
      'text-green bg-white border border-gray-100 hover:text-tahiti-800',
    transparent:
      'bg-transparent text-white hover:bg-tahiti-700 hover:text-white',
    pattern_1_on: 'bg-transparent text-white hover:bg-white hover:text-black',
    pattern_1_off: 'bg-white text-black hover:bg-transparent hover:text-white',
  };

  const styleHover = {
    none: '',
    primary: 'hover:bg-tahiti-700 hover:text-white',
    secondary: 'hover:bg-white hover:text-tahiti-800',
    inherit: 'hover:bg-inherit hover:text-inherit',
    fade: 'hover:opacity-50 hover:bg-inherit hover:text-inherit',
  };

  return (
    <button
      className={twMerge(
        'flex justify-center items-center h-4',
        styleBorder[border],
        styleWidth[width],
        styleHeight[height],
        styleMargin[margin],
        styleSpace[space],
        styleBorderRadius[radius],
        styleTheme[theme],
        styleHover[hover],
        additionalClasses,
      )}
      title={title || name}
      onClick={onClick}
      type={type}
      {...getByTestId(testId, 'container')}
    >
      {icon && (
        <span
          className={twMerge(additionalClassesIcon)}
          {...getByTestId(testId, 'icon')}
        >
          {icon}
        </span>
      )}

      {(name || children) && (
        <span
          className={twMerge(additionalClassesName)}
          {...getByTestId(testId, 'name')}
        >
          {name || children}
        </span>
      )}
    </button>
  );
};

export default Button;

 
 