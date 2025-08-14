import { MouseEventHandler, ReactElement } from 'react';

import { WithTestId } from '../../helper/ts/WithTestId';

export interface StatusPillProps extends WithTestId {
  title?: string;
  text?: string | ReactElement;
  additionalClasses?: string;
  onClick?: MouseEventHandler;
}
