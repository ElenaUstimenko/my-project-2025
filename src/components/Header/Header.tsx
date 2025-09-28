'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import classes from './Header.module.scss';
import Menu from '@images/btn/burger_menu_white.svg';
import Close from '@images/btn/burger_close_white.svg';
import logo from '@images/logo/logo_blue.webp';
import { KETA_URL } from '@utils/constants';
import { WOWPASS_URL } from '@utils/constants';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 1024 && isMenuOpen) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

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
        `.${classes.header_sectionFirst}`
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
          }
        );

        observer.observe(firstSection);

        return () => {
          observer.disconnect();
        };
      }
    }
  }, []);

  return (
    <header className={classes.header} id='top'>
      <div className={classes.header_sectionFirst}>
        <div className={classes.header_containerForLogo}>
          <Link href='/'>
            <Image
              src={logo}
              className={classes.header_logo}
              alt='логотип компании с самолётом облетающим земной шар'
            />
          </Link>
          <p className={classes.header_titleText}>
            Путешествие в Республику Корея
          </p>
        </div>
        <div className={classes.header_contactsWrapper}>
          <div className={classes.header_containerForLink}>
            <Link className={classes.btn_animationLine} href='tel:89628786400'>
              <span>&nbsp;8 962 878 64 00 &nbsp;</span>
              <span
                aria-hidden='true'
                className={classes.btn_animationLineHoverText}
              >
                &nbsp;8 962 878 64 00 &nbsp;
              </span>
            </Link>
            <Link
              className={classes.btn_animationLine}
              href='mailto:ystimenko.e@mail.ru'
            >
              <span>&nbsp;ystimenko.e@mail.ru &nbsp;</span>
              <span
                aria-hidden='true'
                className={classes.btn_animationLineHoverText}
              >
                &nbsp;ystimenko.e@mail.ru &nbsp;
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
            >
              <Close className={classes.header_menuOpen} />
            </button>
            <div className={classes.btn_animationLine}></div>
            <Link
              className={`${classes.btn_animationLine} ${classes.header_linkOpen}`}
              href='/cities/seoul'
              target='_blanck'
              onClick={handleLinkClick}
            >
              <span>&nbsp;Сеул&nbsp;</span>
              <span
                aria-hidden='true'
                className={classes.btn_animationLineHoverText}
              >
                &nbsp;Сеул&nbsp;
              </span>
            </Link>
            <Link
              className={`${classes.btn_animationLine} ${classes.header_linkOpen}`}
              href='/cities/busan'
              target='_blanck'
              onClick={handleLinkClick}
            >
              <span>&nbsp;Пусан&nbsp;</span>
              <span
                aria-hidden='true'
                className={classes.btn_animationLineHoverText}
              >
                &nbsp;Пусан&nbsp;
              </span>
            </Link>
            <Link
              className={`${classes.btn_animationLine} ${classes.header_linkOpen}`}
              href='/cities/jeju'
              target='_blanck'
              onClick={handleLinkClick}
            >
              <span>&nbsp;Чеджу&nbsp;</span>
              <span
                aria-hidden='true'
                className={classes.btn_animationLineHoverText}
              >
                &nbsp;Чеджу&nbsp;
              </span>
            </Link>
            <Link
              href={KETA_URL}
              target='_blanck'
              onClick={handleLinkClick}
              className={`${classes.btn_animationLine} ${classes.header_linkOpen}`}
            >
              <span>&nbsp;К-ЕТА &nbsp;</span>
              <span
                aria-hidden='true'
                className={classes.btn_animationLineHoverText}
              >
                &nbsp;К-ЕТА &nbsp;
              </span>
            </Link>
            <Link
              href={WOWPASS_URL}
              target='_blanck'
              onClick={handleLinkClick}
              className={`${classes.btn_animationLine} ${classes.header_linkOpen}`}
            >
              <span>&nbsp;WOWPASS&nbsp;</span>
              <span
                aria-hidden='true'
                className={classes.btn_animationLineHoverText}
              >
                &nbsp;WOWPASS&nbsp;
              </span>
            </Link>
          </nav>
        ) : (
          <nav
            className={`${classes.header_list} ${
              isMenuOpen ? classes.open : ''
            }`}
          >
            <div className={classes.header_linkOpenMenuWrapper}>
              <Link
                className={`${classes.header_link} ${classes.btn_animationLine}`}
                href='/cities/seoul'
                target='_blanck'
                onClick={handleLinkClick}
              >
                <span>&nbsp;Сеул&nbsp;</span>
                <span
                  aria-hidden='true'
                  className={classes.btn_animationLineHoverText}
                >
                  &nbsp;Сеул&nbsp;
                </span>
              </Link>
              <Link
                className={`${classes.header_link} ${classes.btn_animationLine}`}
                href='/cities/busan'
                target='_blanck'
                onClick={handleLinkClick}
              >
                <span>&nbsp;Пусан&nbsp;</span>
                <span
                  aria-hidden='true'
                  className={classes.btn_animationLineHoverText}
                >
                  &nbsp;Пусан&nbsp;
                </span>
              </Link>
              <Link
                className={`${classes.header_link} ${classes.btn_animationLine}`}
                href='/cities/jeju'
                target='_blanck'
                onClick={handleLinkClick}
              >
                <span>&nbsp;Чеджу&nbsp;</span>
                <span
                  aria-hidden='true'
                  className={classes.btn_animationLineHoverText}
                >
                  &nbsp;Чеджу&nbsp;
                </span>
              </Link>
            </div>
            {/* fixed part of header */}
            {isFixed ? (
              <div className={classes.header_linklWrapperFixed}>
                <div className={classes.header_linkContainerFixed}>
                  <Image
                    src={logo}
                    className={classes.header_logo}
                    alt='лого'
                  />
                </div>
                <Link
                  href={KETA_URL}
                  target='_blanck'
                  onClick={handleLinkClick}
                  className={`${classes.header_link} ${classes.header_linkFixed} ${classes.btn_animationLine}`}
                >
                  <span>&nbsp;К-ЕТА &nbsp;</span>
                  <span
                    aria-hidden='true'
                    className={classes.btn_animationLineHoverText}
                  >
                    &nbsp;К-ЕТА &nbsp;
                  </span>
                </Link>
                <Link
                  href={WOWPASS_URL}
                  target='_blanck'
                  onClick={handleLinkClick}
                  className={`${classes.header_link} ${classes.header_linkFixed} ${classes.btn_animationLine}`}
                >
                  <span>&nbsp;WOWPASS&nbsp;</span>
                  <span
                    aria-hidden='true'
                    className={classes.btn_animationLineHoverText}
                  >
                    &nbsp;WOWPASS&nbsp;
                  </span>
                </Link>
                <button
                  className={`${classes.burger} ${classes.burgerFixed}`}
                  onClick={toggleMenu}
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
                <Link
                  href={KETA_URL}
                  target='_blanck'
                  onClick={handleLinkClick}
                  className={`${classes.header_link} ${classes.btn_animationLine}`}
                >
                  <span>&nbsp;К-ЕТА &nbsp;</span>
                  <span
                    aria-hidden='true'
                    className={classes.btn_animationLineHoverText}
                  >
                    &nbsp;К-ЕТА &nbsp;
                  </span>
                </Link>
                <Link
                  href={WOWPASS_URL}
                  target='_blanck'
                  onClick={handleLinkClick}
                  className={`${classes.header_link} ${classes.btn_animationLine}`}
                >
                  <span>&nbsp;WOWPASS&nbsp;</span>
                  <span
                    aria-hidden='true'
                    className={classes.btn_animationLineHoverText}
                  >
                    &nbsp;WOWPASS&nbsp;
                  </span>
                </Link>
              </div>
            )}
          </nav>
        )}
      </div>
      <button className={classes.burger} onClick={toggleMenu}>
        {isMenuOpen ? '' : <Menu className={classes.header_menu} />}
      </button>
      {isMenuOpen && <div className={classes.overlay} onClick={closeMenu} />}
    </header>
  );
};
