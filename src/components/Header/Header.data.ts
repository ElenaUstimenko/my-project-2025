import { KETA_URL, WOWPASS_URL } from '@utils/constants';
import type { HeaderLinkItem } from './Header.types';

export { contactLinks } from '@utils/contactLinks';

export const cityLinks: HeaderLinkItem[] = [
  { href: '/cities/seoul', label: 'Сеул' },
  { href: '/cities/busan', label: 'Пусан' },
  { href: '/cities/jeju', label: 'Чеджу' },
];

export const externalLinks: HeaderLinkItem[] = [
  { href: KETA_URL, label: 'К-ЕТА ', isExternal: true },
  { href: WOWPASS_URL, label: 'WOWPASS', isExternal: true },
];
