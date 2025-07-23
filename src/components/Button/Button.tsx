import { twMerge } from 'tailwind-merge';
import {
  styleIconAnimation,
  styleIconPosition,
} from '../../helper/ts/WithIcon';
import { getByTestId } from '../../lib/helpers';
import {
  ButtonProps,
  styleBorder,
  styleBorderRadius,
  styleDisabled,
  styleHeight,
  styleMargin,
  styleSpace,
  styleTheme,
  styleThemeHover,
  styleWidth,
} from './useButton';

const Button = ({
  name,
  title,

  radius = 'normal',
  space = 'small',
  margin = 'small',
  border = 'none',
  isSelected = false,
  type = 'button',

  // Theme
  theme = 'primary',
  themeSelected = 'primary',
  themeHover = 'none',

  // Handler
  onClick,

  // Additional Classes
  additionalClasses,
  additionalClassesName,

  // With disabled
  disabled = false,

  // With Size
  height = 'fit',
  width = 'fit',

  // With Icon Properties
  icon,
  iconPosition = 'left',
  iconAnimation = 'none',
  additionalClassesIcon,

  // With test id
  testId,
}: ButtonProps) => {
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
        styleTheme[isSelected ? themeSelected : theme],
        styleThemeHover[themeHover],
        styleIconPosition[iconPosition],
        additionalClasses,
        disabled && styleDisabled,
      )}
      disabled={disabled}
      title={title}
      onClick={onClick}
      type={type}
      {...getByTestId(testId, 'container')}
    >
      {icon && (
        <span
          className={twMerge(
            name && iconPosition === 'left' && 'mr-1',
            name && iconPosition === 'right' && 'ml-1',
            styleIconAnimation[iconAnimation],
            additionalClassesIcon,
          )}
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
