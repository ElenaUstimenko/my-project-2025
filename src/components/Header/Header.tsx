'use client';

import Link from 'next/link';
import Image from 'next/image';
import classes from './Header.module.scss';
import Menu from '@images/btn/burger_menu_white.svg';
import logo from '@images/logo/logo_blue.webp';
import { useHeaderState } from '@hooks/useHeaderState';
import { ContactLinks } from './ContactLinks/ContactLinks';
import { DesktopNav } from './DesktopNav/DesktopNav';
import { MobileNav } from './MobileNav/MobileNav';

export const Header = () => {
  const { closeMenu, handleLinkClick, isFixed, isMenuOpen, toggleMenu } =
    useHeaderState({
      firstSectionClassName: classes.header_sectionFirst,
    });

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
        <ContactLinks />
      </div>
      <div
        className={`${classes.header_sectionSecond} ${
          isFixed ? classes.header_sectionSecondFixed : ''
        }`}
      >
        {isMenuOpen ? (
          <MobileNav onClose={closeMenu} onLinkClick={handleLinkClick} />
        ) : (
          <DesktopNav
            isFixed={isFixed}
            onMenuToggle={toggleMenu}
            onLinkClick={handleLinkClick}
          />
        )}
      </div>
      <button
        type="button"
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
