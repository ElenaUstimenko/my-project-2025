import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Cookies from 'js-cookie';
import { Cookie } from './Cookie';

describe('Cookie accessibility', () => {
  beforeEach(() => {
    Cookies.remove('localConsent');
  });

  afterEach(() => {
    Cookies.remove('localConsent');
  });

  it('keeps consent actions accessible', async () => {
    const { container } = render(<Cookie />);

    expect(screen.getByRole('link', { name: /Узнать больше/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Принять/i })).toBeVisible();
    expect(await axe(container)).toHaveNoViolations();
  });
});
