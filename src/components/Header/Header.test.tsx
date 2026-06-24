import type { SVGProps } from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { KETA_URL, WOWPASS_URL } from '@utils/constants';

jest.mock('@images/btn/burger_menu_white.svg', () => ({
  __esModule: true,
  default: function MenuIcon(props: SVGProps<SVGSVGElement>) {
    return <svg data-testid="menu-icon" {...props} />;
  },
}));

jest.mock('@images/btn/burger_close_white.svg', () => ({
  __esModule: true,
  default: function CloseIcon(props: SVGProps<SVGSVGElement>) {
    return <svg data-testid="close-icon" {...props} />;
  },
}));

describe('Header', () => {
  it('renders city navigation links with expected href and target', () => {
    render(<Header />);

    [
      { name: /Сеул/, href: '/cities/seoul' },
      { name: /Пусан/, href: '/cities/busan' },
      { name: /Чеджу/, href: '/cities/jeju' },
    ].forEach(({ name, href }) => {
      const link = screen.getByRole('link', { name });

      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).not.toHaveAttribute('rel');
    });
  });

  it('renders external links with safe blank-target attributes', () => {
    render(<Header />);

    [
      { name: /К-ЕТА/, href: KETA_URL },
      { name: /WOWPASS/, href: WOWPASS_URL },
    ].forEach(({ name, href }) => {
      const link = screen.getByRole('link', { name });

      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders contact links without opening a new tab', () => {
    render(<Header />);

    const phoneLink = screen.getByRole('link', { name: /8 962 878 64 00/ });
    const emailLink = screen.getByRole('link', {
      name: /elena\.iartseva64@gmail\.com/,
    });

    expect(phoneLink).toHaveAttribute('href', 'tel:89628786400');
    expect(phoneLink).not.toHaveAttribute('target');
    expect(phoneLink).not.toHaveAttribute('rel');

    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:elena.iartseva64@gmail.com',
    );
    expect(emailLink).not.toHaveAttribute('target');
    expect(emailLink).not.toHaveAttribute('rel');
  });
});
