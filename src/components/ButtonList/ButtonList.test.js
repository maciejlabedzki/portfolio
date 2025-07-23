import { describe, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ButtonList from './ButtonList';

const testId = 'buttonList-test';

const TEST_IDS = {
  container: `${testId}-container`,
};

const BUTTONS_DATA = [{ value: 'lorem', name: 'Lorem' }];

describe('ButtonList component', () => {
  test('loads items eventually test', () => {
    render(<ButtonList testId={testId} data={BUTTONS_DATA} />);

    const elementContainer = screen.getByTestId(TEST_IDS.container);

    expect(elementContainer).toBeInTheDocument();

    expect(elementContainer.textContent).toBe(BUTTONS_DATA[0].name);
  });
});
