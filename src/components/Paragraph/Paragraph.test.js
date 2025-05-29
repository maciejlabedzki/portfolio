import { describe, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Paragraph from './Paragraph';

const testId = 'paragraph';
const TEST_IDS = {
  container: `${testId}-container`,
  container2: 1,
};

describe('Paragraph', () => {
  test('loads items eventually', () => {
    render(<Paragraph testId={testId} />);

    const elementContainer = screen.getByTestId(TEST_IDS.container);

    expect(elementContainer).toBeInTheDocument();
  });
});
