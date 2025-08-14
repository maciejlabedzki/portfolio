import { WithTestId } from '../../../../helper/ts/WithTestId';

export interface CardDescriptionProps extends WithTestId {
  desc?: string;
  header?: string;
  textOpen?: string;
  textClose?: string;
}
