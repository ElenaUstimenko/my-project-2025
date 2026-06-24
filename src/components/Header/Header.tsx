'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import classes from './Header.module.scss';
import Menu from '@images/btn/burger_menu_white.svg';
import Close from '@images/btn/burger_close_white.svg';
import logo from '@images/logo/logo_blue.webp';
import { KETA_URL } from '@utils/constants';
import { WOWPASS_URL } from '@utils/constants';

interface HeaderLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface AnimatedHeaderLinkProps extends HeaderLink {
  className: string;
  onClick?: () => void;
}

const cityLinks: HeaderLink[] = [
  { href: '/cities/seoul', label: 'Сеул' },
  { href: '/cities/busan', label: 'Пусан' },
  { href: '/cities/jeju', label: 'Чеджу' },
];

const externalLinks: HeaderLink[] = [
  { href: KETA_URL, label: 'К-ЕТА ', isExternal: true },
  { href: WOWPASS_URL, label: 'WOWPASS', isExternal: true },
];

const AnimatedHeaderLink = ({
  href,
  label,
  isExternal,
  className,
  onClick,
}: AnimatedHeaderLinkProps) => (
  <Link
    className={className}
    href={href}
    target="_blank"
    rel={isExternal ? 'noopener noreferrer' : undefined}
    onClick={onClick}
  >
    <span>&nbsp;{label}&nbsp;</span>
    <span aria-hidden="true" className={classes.btn_animationLineHoverText}>
      &nbsp;{label}&nbsp;
    </span>
  </Link>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    },
    [closeMenu, isMenuOpen],
  );

  const handleResize = useCallback(() => {
    if (window.innerWidth > 1024 && isMenuOpen) {
      closeMenu();
    }
  }, [closeMenu, isMenuOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleKeyDown, handleResize]);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      closeMenu();
    }
  };

  /* for header scroll */
  useEffect(() => {
    const header = document.getElementById('top');
    if (header) {
      const firstSection = header.querySelector(
        `.${classes.header_sectionFirst}`,
      ) as HTMLElement;
      if (firstSection) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsFixed(!entry.isIntersecting);
          },
          {
            root: null,
            threshold: 0,
            rootMargin: `-${firstSection.offsetHeight}px`,
          },
        );

        observer.observe(firstSection);

        return () => {
          observer.disconnect();
        };
      }
    }
  }, []);

  return (
    <header className={classes.header} id="top">
      <div className={classes.header_sectionFirst}>
        <div className={classes.header_containerForLogo}>
          <Link href="/">
            <Image
              src={logo}
              className={classes.header_logo}
              alt="логотип компании с самолётом облетающим земной шар"
            />
          </Link>
          <p className={classes.header_titleText}>
            Путешествие в Республику Корея
          </p>
        </div>
        <div className={classes.header_contactsWrapper}>
          <div className={classes.header_containerForLink}>
            <Link className={classes.btn_animationLine} href="tel:89628786400">
              <span>&nbsp;8 962 878 64 00 &nbsp;</span>
              <span
                aria-hidden="true"
                className={classes.btn_animationLineHoverText}
              >
                &nbsp;8 962 878 64 00 &nbsp;
              </span>
            </Link>
            <Link
              className={classes.btn_animationLine}
              href="mailto:elena.iartseva64@gmail.com"
            >
              <span>&nbsp;elena.iartseva64@gmail.com &nbsp;</span>
              <span
                aria-hidden="true"
                className={classes.btn_animationLineHoverText}
              >
                &nbsp;elena.iartseva64@gmail.com &nbsp;
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${classes.header_sectionSecond} ${
          isFixed ? classes.header_sectionSecondFixed : ''
        }`}
      >
        {isMenuOpen ? (
          <nav
            className={`${classes.header_list} ${
              isMenuOpen ? classes.open : ''
            }`}
          >
            <button
              className={`${classes.burger} ${classes.burgerFixed}`}
              onClick={closeMenu}
              aria-label="Закрыть меню"
            >
              <Close className={classes.header_menuOpen} />
            </button>
            <div className={classes.btn_animationLine}></div>
            {[...cityLinks, ...externalLinks].map((link) => (
              <AnimatedHeaderLink
                key={link.href}
                {...link}
                className={`${classes.btn_animationLine} ${classes.header_linkOpen}`}
                onClick={handleLinkClick}
              />
            ))}
          </nav>
        ) : (
          <nav
            className={`${classes.header_list} ${
              isMenuOpen ? classes.open : ''
            }`}
          >
            <div className={classes.header_linkOpenMenuWrapper}>
              {cityLinks.map((link) => (
                <AnimatedHeaderLink
                  key={link.href}
                  {...link}
                  className={`${classes.header_link} ${classes.btn_animationLine}`}
                  onClick={handleLinkClick}
                />
              ))}
            </div>
            {/* fixed part of header */}
            {isFixed ? (
              <div className={classes.header_linklWrapperFixed}>
                <div className={classes.header_linkContainerFixed}>
                  <Image
                    src={logo}
                    className={classes.header_logo}
                    alt="лого"
                  />
                </div>
                {externalLinks.map((link) => (
                  <AnimatedHeaderLink
                    key={link.href}
                    {...link}
                    className={`${classes.header_link} ${classes.header_linkFixed} ${classes.btn_animationLine}`}
                    onClick={handleLinkClick}
                  />
                ))}
                <button
                  className={`${classes.burger} ${classes.burgerFixed}`}
                  onClick={toggleMenu}
                  aria-label="Открыть меню"
                >
                  {isMenuOpen ? (
                    ''
                  ) : (
                    <Menu
                      className={`${classes.header_menu} ${classes.header_menuFixed}`}
                    />
                  )}
                </button>
              </div>
            ) : (
              <div className={classes.header_containerForlinkFixed}>
                {externalLinks.map((link) => (
                  <AnimatedHeaderLink
                    key={link.href}
                    {...link}
                    className={`${classes.header_link} ${classes.btn_animationLine}`}
                    onClick={handleLinkClick}
                  />
                ))}
              </div>
            )}
          </nav>
        )}
      </div>
      <button
        className={classes.burger}
        onClick={toggleMenu}
        aria-label="Открыть меню"
      >
        {isMenuOpen ? '' : <Menu className={classes.header_menu} />}
      </button>
      {isMenuOpen && <div className={classes.overlay} onClick={closeMenu} />}
    </header>
  );
};
