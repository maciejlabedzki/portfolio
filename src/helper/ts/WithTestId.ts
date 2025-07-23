export interface WithTestId {
  /**
   * Is component disabled
   */
  testId?: string;
}

export const WithTestIdCategory = {
  testId: { control: 'text', table: { category: 'Test' } },
};
