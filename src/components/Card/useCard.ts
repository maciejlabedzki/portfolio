import { MouseEventHandler } from 'react';

import { WithTestId, WithTestIdCategory } from '../../helper/ts/WithTestId';

export const CardArgTypes = {
  ...WithTestIdCategory,
};

export interface CardProps extends WithTestId {
  imgSrc?: string;
  imgBig?: string;
  imgAlt?: string;
  link?: string;
  linkName?: string;
  linkAvailable?: boolean;
  tags?: string[];
  desc?: string;
  name?: string;
  id?: string;
  type?: string;
  year?: string;
  handleModal?: MouseEventHandler<{
    imgBig?: string | undefined;
    imgAlt?: string;
    name?: string;
  }>;
  handleSearch?: MouseEventHandler<{ type?: string; option?: string }>;
}
