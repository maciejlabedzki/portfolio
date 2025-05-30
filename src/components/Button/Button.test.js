import { describe, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';

const testId = 'button-test';

const TEST_IDS = {
  container: `${testId}-container`,
  button: 'button',
};

describe('Button component', () => {
  test('loads items eventually test', () => {
    render(<Button testId={testId} name="test" />);

    const elementContainer = screen.getByTestId(TEST_IDS.container);

    expect(elementContainer).toBeInTheDocument();

    expect(elementContainer.textContent).toBe('test');
  });

  test('loads items', () => {
    render(<Button testId={testId} name="test" />);

    const elementContainer = screen.getByTestId(TEST_IDS.container);

    expect(elementContainer).toBeInTheDocument();
  });

  test('exit option items', () => {
    render(<Button testId={testId} name="test" />);

    const elementContainer = screen.getByTestId(TEST_IDS.container);

    expect(elementContainer).toBeInTheDocument();
  });
});
