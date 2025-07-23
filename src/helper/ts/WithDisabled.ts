export interface WithDisabled {
  /**
   * Is component disabled
   * @default false
   */
  disabled?: boolean;
}

export const WithDisabledCategory = {
  disabled: { control: 'boolean', table: { category: 'Option' } },
};
