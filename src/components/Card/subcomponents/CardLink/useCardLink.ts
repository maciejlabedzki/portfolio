import { WithTestId } from '../../../../helper/ts/WithTestId';

export interface CardLinkProps extends WithTestId {
  linkAvailable?: boolean;
  header?: string;
  path?: string;
  pathName?: string;
  target?: string;
  rel?: string;
}
