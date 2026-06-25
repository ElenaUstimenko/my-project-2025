import { render, screen } from '@testing-library/react';
import Cookies from 'js-cookie';
import { Cookie } from '../Cookie';

describe('Cookie', () => {
  beforeEach(() => {
    Cookies.remove('localConsent');
  });

  afterEach(() => {
    Cookies.remove('localConsent');
  });

  it('renders privacy policy link with safe blank-target attributes', () => {
    render(<Cookie />);

    const privacyPolicyLink = screen.getByRole('link', {
      name: /Узнать больше/i,
    });

    expect(privacyPolicyLink).toHaveAttribute('href', '/legal/privacy-policy');
    expect(privacyPolicyLink).toHaveAttribute('target', '_blank');
    expect(privacyPolicyLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
