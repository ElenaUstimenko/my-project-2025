import classes from '../Header.module.scss';
import { contactLinks } from '../Header.data';
import { HeaderLink } from '../HeaderLink/HeaderLink';

export const ContactLinks = () => (
  <div className={classes.header_contactsWrapper}>
    <div className={classes.header_containerForLink}>
      {contactLinks.map((link) => (
        <HeaderLink
          key={link.href}
          {...link}
          className={classes.btn_animationLine}
          openInNewTab={false}
        />
      ))}
    </div>
  </div>
);
