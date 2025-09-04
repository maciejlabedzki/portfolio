export const getByTestId = (
    testId: string | undefined,
    suffix?: string,
    testIdPropName: string = 'data-testid'
): { [key: string]: string } | undefined => {
    if (!testId) {
      return;
    }
    if (!suffix) {
      return { [testIdPropName]: testId };
    }
    return {
      [testIdPropName]: `${testId}-${suffix}`,
    };
  };