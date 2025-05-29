/*********************************************** 
 yarn test src/components/Input/Input.test.js 
************************************************/
import { describe, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Input from './Input';

// Const
const testId = 'input';
const TEST_IDS = {
  container: `${testId}-container`,
};

describe('input', () => {
  test('loads items eventually', () => {
    render(<Input testId={testId} />);

    const elementContainer = screen.getByTestId(TEST_IDS.container);

    expect(elementContainer).toBeInTheDocument();
  });
});
