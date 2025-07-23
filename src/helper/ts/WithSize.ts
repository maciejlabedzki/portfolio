export interface WithSize {
  /**
   * Component height
   * @default fit
   */
  height?: 'small' | 'normal' | 'big' | 'huge' | 'auto' | 'fit';
  /**
   * Component width
   * @default fit
   */
  width?: 'small' | 'normal' | 'big' | 'huge' | 'auto' | 'fit';
}

export const WithSizeCategory = {
  height: { table: { category: 'Size' } },
  width: { table: { category: 'Size' } },
};

export const styleHeight = {
  small: 'h-3',
  normal: 'h-4',
  big: 'h-6',
  huge: 'h-8',
  auto: 'h-auto',
  fit: 'h-fit',
};

export const styleWidth = {
  small: 'w-3',
  normal: 'w-4',
  big: 'w-6',
  huge: 'w-8',
  auto: 'w-auto',
  fit: 'w-fit',
};
