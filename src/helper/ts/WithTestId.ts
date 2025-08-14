export interface WithTestId {
  /**
   * Component test id
   */
  testId?: string;
}

export const WithTestIdCategory = {
  testId: { control: 'text', table: { category: 'Test' } },
};
