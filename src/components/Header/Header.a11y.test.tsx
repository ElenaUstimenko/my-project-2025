import type { SVGProps } from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Header } from './Header';

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

describe('Header accessibility', () => {
  it('keeps menu buttons accessible', async () => {
    const { container } = render(<Header />);

    expect(screen.getByRole('button', { name: /Открыть меню/i })).toBeVisible();
    expect(await axe(container)).toHaveNoViolations();
  });
});
