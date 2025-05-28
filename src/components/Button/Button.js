import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { getByTestId } from '../../lib/helper';

const Button = ({
  name,
  color,
  radius,
  space,
  margin,
  height,
  width,
  border,
  onClick,
  icon,
  theme,
  title,
  additionalClasses,
  additionalClassesIcon,
  additionalClassesName,
  testId,
}) => {
  const styleBorder = {
    none: 'border-0',
    normal: 'border border-gray-50',
  };

  const styleColor = {
    blue: 'bg-tahiti-700 text-white',
    white: 'bg-white',
    transparent: 'bg-transparent',
  };

  const styleBorderRadius = {
    none: 'rounded-none',
    small: 'rounded-sm',
    normal: 'rounded-md',
    big: 'rounded-lg',
    full: 'rounded-full',
  };

  const styleSpace = {
    none: 'px-0 py-0',
    normal: 'px-2 py-1',
    small: 'px-1 py-1',
    leftRight: 'px-1 py-0',
    topBottom: 'px-0 py-1',
  };

  const styleMargin = {
    none: 'm-0',
    normal: 'm-1',
  };

  const styleHeight = {
    auto: 'h-auto',
    fit: 'h-fit',
  };

  const styleWidth = {
    auto: 'w-auto',
    fit: 'w-fit',
  };

  const styleTheme = {
    none: '',
    white:
      'text-green text-sm bg-white ' +
      'rounded-xl border border-gray-100 ' +
      'hover:text-tahiti-800 px-2',
    primary: '',
    secondary: '',
    blue: 'bg-tahiti-700 text-white',
  };

  return (
    <button
      className={twMerge(
        'flex justify-center items-center h-4',
        'hover:opacity-80',
        styleBorder[border],
        styleWidth[width],
        styleHeight[height],
        styleMargin[margin],
        styleSpace[space],
        styleColor[color],
        styleBorderRadius[radius],
        styleTheme[theme],
        additionalClasses,
      )}
      title={title}
      onClick={onClick}
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

      {name && (
        <span
          className={twMerge(additionalClassesName)}
          {...getByTestId(testId, 'name')}
        >
          {name}
        </span>
      )}
    </button>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.any,
  testId: PropTypes.string,
  radius: PropTypes.string,
};

Button.defaultProps = {
  name: '',
  testId: '',
  radius: 'normal',
  color: 'blue',
  space: 'leftRight',
  margin: 'normal',
  height: 'fit',
  width: 'fit',
  border: 'none',
  theme: 'none',
  title: '',
};
