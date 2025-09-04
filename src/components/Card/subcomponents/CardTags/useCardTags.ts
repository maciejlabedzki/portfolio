import { WithTestId } from '../../../../helper/ts/WithTestId';

export interface CardTagsProps extends WithTestId {
  header?: string;
  onClick?: any;
  tags?: string[];
  tagsLimit?: number;
}
