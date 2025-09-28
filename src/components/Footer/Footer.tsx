import Link from 'next/link';
import Image from 'next/image';
import classes from './Footer.module.scss';
import logo from '@images/logo/logo_blue.webp';
import Telegram from '@images/icons/telegram.svg';


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer} id="contacts">
      <div className={classes.footer_wrapper}>
        <div className={classes.footer_firstContainer}>
          <div className={classes.footer_firstContainerWrapper}>
            <div className={classes.footer_firstContainerLeft}>
              <div className={classes.footer_logoWrapper}>
                <Link href='/'>
                  <Image src={logo} className={classes.footer_logo} alt='логотип компании с самолётом облетающим земной шар' />
                </Link>
                <p className={classes.footer_titleText}>Путешествие в Республику Корея</p>
              </div>
            </div>
            <div className={classes.footer_linkUpWrapper}>
              <Link className={classes.footer_linkUp} href='#top'>Наверх</Link>
            </div>
            <div className={classes.footer_firstContainerRight}>
              <div className={classes.footer_phonesWrapper}>
                <div className={classes.footer_phones}>
                  <Link href='https://t.me/elena_6464' target='_blanck'>
                  <Telegram className={classes.footer_logoSocialLink}
                  /></Link>
                  <Link className={classes.btn_animationLine} href='tel:89628786400'>
                    <span>&nbsp;8 962 878 64 00&nbsp;</span>
                    <span aria-hidden='true' className={classes.btn_animationLineHoverText}>&nbsp;8 962 878 64 00&nbsp;</span>
                  </Link>
                  <Link className={classes.btn_animationLine} href='mailto:ystimenko.e@mail.ru'>
                    <span>&nbsp;ystimenko.e@mail.ru&nbsp;</span>
                    <span aria-hidden='true' className={classes.btn_animationLineHoverText}>&nbsp;ystimenko.e@mail.ru&nbsp;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footer_lastContainer}>
          <p className={classes.footer_text}>© {currentYear}. Design & Develop by Ustimenko Elena</p>
        </div>
      </div>
    </footer>
  );
};