import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Child from './Child';

describe('React Child.jsx Component', () => {
  test('matches the snapshot', () => {
    const { asFragment } = render(<Child message="Vitest supports Hot Module Replacement" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
