import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Modal } from './Modal';

describe('Modal accessibility', () => {
  it('renders an accessible dialog without axe violations', async () => {
    const { container } = render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <p>Контент модального окна</p>
      </Modal>,
    );

    expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByRole('button', { name: /Закрыть/i })).toBeVisible();
    expect(await axe(container)).toHaveNoViolations();
  });
});
