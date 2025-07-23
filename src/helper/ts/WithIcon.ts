import { ReactNode } from 'react';

export interface WithIcon {
  /**
   * Component icon
   */
  icon?: ReactNode;
  /**
   * Icon position
   * @default left
   */
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * Icon animation
   * @default none
   */
  iconAnimation?: 'none' | 'bounce' | 'pulse' | 'ping' | 'spin';
  /**
   * Icon additional classes
   */
  additionalClassesIcon?: string;
}

export const WithIconCategory = {
  icon: { control: 'text', table: { category: 'Icon' } },
  iconPosition: { control: 'radio', table: { category: 'Icon' } },
  iconAnimation: { control: 'radio', table: { category: 'Icon' } },
  additionalClassesIcon: { control: 'text', table: { category: 'Icon' } },
};

export const styleIconPosition = {
  left: 'flex-row',
  right: 'flex-row-reverse',
  top: 'flex-col',
  bottom: 'flex-col-reverse',
};

export const styleIconAnimation = {
  none: 'animate-none',
  bounce: 'animate-bounce',
  pulse: 'animate-pulse',
  ping: 'animate-ping',
  spin: 'animate-spin',
};
