import Link from 'next/link';
import classes from '../Footer.module.scss';
import Telegram from '@images/icons/telegram.svg';
import { AnimatedTextLink } from '@/components/AnimatedTextLink/AnimatedTextLink';
import { contactLinks } from '@utils/contactLinks';

const TELEGRAM_URL = 'https://t.me/elena_6464';

export const FooterContactLinks = () => (
  <div className={classes.footer_phonesWrapper}>
    <div className={classes.footer_phones}>
      <Link href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
        <Telegram className={classes.footer_logoSocialLink} />
      </Link>
      {contactLinks.map((link) => (
        <AnimatedTextLink
          key={link.href}
          {...link}
          className={classes.btn_animationLine}
          hoverTextClassName={classes.btn_animationLineHoverText}
          openInNewTab={false}
        />
      ))}
    </div>
  </div>
);
