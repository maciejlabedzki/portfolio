import { WithTestId } from '../../../../helper/ts/WithTestId';

export interface CardImagesProps extends WithTestId {
  imgSrc?: string;
  imgBig?: string;
  imgAlt?: string;
  link?: string;
  linkName?: string;
  linkAvailable?: boolean;
  tags?: Array<{ value: string }>;
  desc?: string;
  name?: string;
  id?: string;
  type?: string;
  year?: string;
  textOpen?: string;
  handleModal?: any;
  handleSearch?: any;
}
