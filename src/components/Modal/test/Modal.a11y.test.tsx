import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Modal } from '../Modal';

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

  it('calls onClose when Escape is pressed', () => {
    const onClose = jest.fn();

    render(
      <Modal isOpen={true} onClose={onClose}>
        <p>Контент модального окна</p>
      </Modal>,
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when overlay is clicked', () => {
    const onClose = jest.fn();
    const { container } = render(
      <Modal isOpen={true} onClose={onClose}>
        <p>Контент модального окна</p>
      </Modal>,
    );

    const overlay = container.firstElementChild;

    expect(overlay).toBeInstanceOf(HTMLElement);

    fireEvent.click(overlay as HTMLElement);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('restores body overflow after unmount', () => {
    const { unmount } = render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <p>Контент модального окна</p>
      </Modal>,
    );

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).toBe('unset');
  });
});
