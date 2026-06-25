import Link from 'next/link';
import type { MouseEventHandler } from 'react';

interface AnimatedTextLinkProps {
  href: string;
  label: string;
  className: string;
  hoverTextClassName: string;
  isExternal?: boolean;
  openInNewTab?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const AnimatedTextLink = ({
  href,
  label,
  className,
  hoverTextClassName,
  isExternal,
  openInNewTab,
  onClick,
}: AnimatedTextLinkProps) => {
  const shouldOpenInNewTab = openInNewTab ?? isExternal;

  return (
    <Link
      className={className}
      href={href}
      target={shouldOpenInNewTab ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={onClick}
    >
      <span>&nbsp;{label}&nbsp;</span>
      <span aria-hidden="true" className={hoverTextClassName}>
        &nbsp;{label}&nbsp;
      </span>
    </Link>
  );
};
