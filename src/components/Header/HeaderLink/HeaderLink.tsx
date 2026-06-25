import classes from '../Header.module.scss';
import { AnimatedTextLink } from '@/components/AnimatedTextLink/AnimatedTextLink';
import type { HeaderLinkItem } from '../Header.types';

interface HeaderLinkProps extends HeaderLinkItem {
  className: string;
  onClick?: () => void;
  openInNewTab?: boolean;
}

export const HeaderLink = ({
  href,
  label,
  isExternal,
  className,
  onClick,
  openInNewTab,
}: HeaderLinkProps) => (
  <AnimatedTextLink
    className={className}
    href={href}
    label={label}
    hoverTextClassName={classes.btn_animationLineHoverText}
    isExternal={isExternal}
    openInNewTab={openInNewTab}
    onClick={onClick}
  />
);
