import {
  ArrowPathRoundedSquareIcon,
  GlobeAltIcon,
  PencilIcon,
  WrenchIcon,
} from '@heroicons/react/24/solid';
import { LightBulbIcon, PuzzlePieceIcon } from '../../../../images';

export const validTypeIcon = (value?: string) => {
  if (value === 'website') {
    return <GlobeAltIcon className="w-4 h-4" />;
  } else if (value === 'widget') {
    return <PuzzlePieceIcon className="w-4 h-4" />;
  } else if (value === 'design') {
    return <PencilIcon className="w-4 h-4" />;
  } else if (value === 'tool') {
    return <WrenchIcon className="w-4 h-4" />;
  } else if (value === 'animation') {
    return <ArrowPathRoundedSquareIcon className="w-4 h-4" />;
  } else {
    return <LightBulbIcon className="w-4 h-4" />;
  }
};
