'use client';
import Cookies from 'js-cookie';
import classes from './Cookie.module.scss';
import { useEffect, useState } from 'react';

export const Cookie = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    if (Cookies.get('localConsent')) {
      setShowConsent(false);
    }
  }, []);

  const acceptCookie = () => {
    setShowConsent(false);
    Cookies.set('localConsent', 'true', { expires: 365, path: '/' });
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className={classes.modalOverlay}>
      <div className={`${classes.container} ${classes.modalWindow}`}>
        <h2 className={classes.cookie_title}>Cookie</h2>
        <p className={classes.cookie_text}>
          Мы используем файлы cookies для улучшения пользовательского опыта и
          сбора статистики
        </p>
        <a
          type='button'
          className={classes.btnLink}
          href='/privacy-policy'
          target='_blank'
        >
          Узнать больше
        </a>
        <button
          type='button'
          className={classes.btnAccept}
          onClick={acceptCookie}
        >
          Принять
        </button>
      </div>
    </div>
  );
};
