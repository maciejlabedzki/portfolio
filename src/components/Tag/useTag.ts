import { WithTestId } from '../../helper/ts/WithTestId';

export interface TagProps extends WithTestId {
  onClick?: any;
  maxTextLength?: number;
  additionalClasses?: string;
  text?: string;
}
