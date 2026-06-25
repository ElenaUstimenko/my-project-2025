import type { City } from '@components/CityPage/CityPage.props';

const cityImage = (city: string, name: string) =>
  `/images/cities/${city}/${name}.webp`;

const cityVideo = (city: string, name: string) =>
  `/video/cities/${city}/${name}.webm`;

const videoPoster = (city: string, name: string) =>
  `/video/img_for_video/${city}/${name}.webp`;

export const cityList = [
  {
    id: 1,
    path: 'seoul',
    name: 'Сеул',
    text0: 'Cтолица и крупнейший город Республики Корея.',
    text1:
      'Расположен на северо-западе Республики Корея вблизи Жёлтого моря, на равнине в окружении гор, на берегах реки Ханган, в 24 км от границы с КНДР',
    images: [
      {
        id: 1,
        src: cityImage('seoul', 'seoul1'),
        alt: 'деревня Namsangol Hanok Village',
      },
      {
        id: 2,
        src: cityImage('seoul', 'seoul2'),
        alt: 'Сеульская телебашня Seoul Tower',
      },
      { id: 3, src: cityImage('seoul', 'seoul3'), alt: 'улицы города Сеул' },
      {
        id: 4,
        src: cityImage('seoul', 'seoul4'),
        alt: 'деревня Namsangol Hanok Village',
      },
      {
        id: 5,
        src: cityImage('seoul', 'seoul5'),
        alt: 'обзорная площадка Seoul Sky',
      },
      { id: 6, src: cityImage('seoul', 'seoul6'), alt: 'дворец Чхандокку́н' },
      { id: 7, src: cityImage('seoul', 'seoul7'), alt: 'мост «Фонтан радуги»' },
      { id: 8, src: cityImage('seoul', 'seoul8'), alt: 'дворец Кёнбоккун' },
      { id: 9, src: cityImage('seoul', 'seoul9'), alt: 'улицы города Сеул' },
      {
        id: 10,
        src: cityImage('seoul', 'seoul10'),
        alt: 'цветущая вишня возле озера Сокчхон',
      },
      {
        id: 11,
        src: cityImage('seoul', 'seoul11'),
        alt: 'деревня Namsangol Hanok Village',
      },
      {
        id: 12,
        src: cityImage('seoul', 'seoul12'),
        alt: 'ручей Чхонгечхо́н в центре Сеула',
      },
      {
        id: 13,
        src: cityImage('seoul', 'seoul13'),
        alt: 'отдыхающая на ветке красная панда',
      },
      { id: 14, src: cityImage('seoul', 'seoul14'), alt: 'улицы города Сеул' },
      {
        id: 15,
        src: cityImage('seoul', 'seoul15'),
        alt: 'парк на горе Намсан в центре Сеула',
      },
    ],
    video: [
      { id: 1, src: cityVideo('seoul', 'seoul_v1'), img: videoPoster('seoul', 'seoul1') },
      { id: 2, src: cityVideo('seoul', 'seoul_v2'), img: videoPoster('seoul', 'seoul2') },
      { id: 3, src: cityVideo('seoul', 'seoul_v3'), img: videoPoster('seoul', 'seoul3') },
      { id: 4, src: cityVideo('seoul', 'seoul_v4'), img: videoPoster('seoul', 'seoul4') },
      { id: 5, src: cityVideo('seoul', 'seoul_v5'), img: videoPoster('seoul', 'seoul5') },
      { id: 6, src: cityVideo('seoul', 'seoul_v6'), img: videoPoster('seoul', 'seoul6') },
      { id: 7, src: cityVideo('seoul', 'seoul_v7'), img: videoPoster('seoul', 'seoul7') },
      { id: 8, src: cityVideo('seoul', 'seoul_v8'), img: videoPoster('seoul', 'seoul8') },
      { id: 9, src: cityVideo('seoul', 'seoul_v9'), img: videoPoster('seoul', 'seoul9') },
      { id: 10, src: cityVideo('seoul', 'seoul_v10'), img: videoPoster('seoul', 'seoul10') },
      { id: 11, src: cityVideo('seoul', 'seoul_v11'), img: videoPoster('seoul', 'seoul11') },
      { id: 12, src: cityVideo('seoul', 'seoul_v12'), img: videoPoster('seoul', 'seoul12') },
      { id: 13, src: cityVideo('seoul', 'seoul_v13'), img: videoPoster('seoul', 'seoul13') },
      { id: 14, src: cityVideo('seoul', 'seoul_v14'), img: videoPoster('seoul', 'seoul14') },
      { id: 15, src: cityVideo('seoul', 'seoul_v15'), img: videoPoster('seoul', 'seoul15') },
      { id: 16, src: cityVideo('seoul', 'seoul_v16'), img: videoPoster('seoul', 'seoul16') },
      { id: 17, src: cityVideo('seoul', 'seoul_v17'), img: videoPoster('seoul', 'seoul17') },
      { id: 18, src: cityVideo('seoul', 'seoul_v18'), img: videoPoster('seoul', 'seoul18') },
      { id: 19, src: cityVideo('seoul', 'seoul_v19'), img: videoPoster('seoul', 'seoul19') },
      { id: 20, src: cityVideo('seoul', 'seoul_v20'), img: videoPoster('seoul', 'seoul20') },
      { id: 21, src: cityVideo('seoul', 'seoul_v21'), img: videoPoster('seoul', 'seoul21') },
      { id: 22, src: cityVideo('seoul', 'seoul_v22'), img: videoPoster('seoul', 'seoul22') },
    ],
  },
  {
    id: 2,
    path: 'busan',
    name: 'Пусан',
    text0: 'Второй по величине город Республики Корея после Сеула.',
    text1:
      'Крупнейший порт страны, известный как «морская столица Республики Корея».',
    text2:
      'Расположен на юго-восточной оконечности Корейского полуострова на берегу Корейского пролива',
    images: [
      { id: 1, src: cityImage('busan', 'busan1'), alt: 'Пляж Хэундэ' },
      {
        id: 2,
        src: cityImage('busan', 'busan2'),
        alt: 'рельсы с туристическими трамваями',
      },
      {
        id: 3,
        src: cityImage('busan', 'busan3'),
        alt: 'город Пусан, Южная Корея',
      },
      {
        id: 4,
        src: cityImage('busan', 'busan4'),
        alt: 'город Пусан, Южная Корея',
      },
      { id: 5, src: cityImage('busan', 'busan5'), alt: 'Храм Хэдон Ёнгунса' },
      {
        id: 6,
        src: cityImage('busan', 'busan6'),
        alt: 'пешеходная инсталляция «Space Walk»',
      },
      {
        id: 7,
        src: cityImage('busan', 'busan7'),
        alt: 'пешеходная инсталляция «Space Walk»',
      },
      { id: 8, src: cityImage('busan', 'busan8'), alt: 'бамбуковый Лес Ахопсан' },
    ],
    video: [
      { id: 1, src: cityVideo('busan', 'busan_v1'), img: videoPoster('busan', 'busan1') },
      { id: 2, src: cityVideo('busan', 'busan_v2'), img: videoPoster('busan', 'busan2') },
      { id: 3, src: cityVideo('busan', 'busan_v3'), img: videoPoster('busan', 'busan3') },
      { id: 4, src: cityVideo('busan', 'busan_v4'), img: videoPoster('busan', 'busan4') },
      { id: 5, src: cityVideo('busan', 'busan_v5'), img: videoPoster('busan', 'busan5') },
      { id: 6, src: cityVideo('busan', 'busan_v6'), img: videoPoster('busan', 'busan6') },
      { id: 7, src: cityVideo('busan', 'busan_v7'), img: videoPoster('busan', 'busan7') },
      { id: 8, src: cityVideo('busan', 'busan_v8'), img: videoPoster('busan', 'busan8') },
      { id: 9, src: cityVideo('busan', 'busan_v9'), img: videoPoster('busan', 'busan9') },
      { id: 10, src: cityVideo('busan', 'busan_v10'), img: videoPoster('busan', 'busan10') },
    ],
  },
  {
    id: 3,
    path: 'jeju',
    name: 'Чеджу',
    text0: 'Самый большой остров и самая маленькая провинция Республики Корея.',
    text1: 'Находится на самом юге страны. Размеры острова: ~75 х 31 км.',
    text2: 'И находится остров в 85км от материковой Южной Кореи',
    images: [
      { id: 1, src: cityImage('jeju', 'jeju1'), alt: 'Водопад Sojeongbang Falls' },
      {
        id: 2,
        src: cityImage('jeju', 'jeju2'),
        alt: 'пешеходная деревянная дорожка в лесу',
      },
      {
        id: 3,
        src: cityImage('jeju', 'jeju3'),
        alt: 'вулканический конус-кратер Seongsan Ilchulbong',
      },
    ],
    video: [
      { id: 1, src: cityVideo('jeju', 'jeju_v1'), img: videoPoster('jeju', 'jeju1') },
      { id: 2, src: cityVideo('jeju', 'jeju_v2'), img: videoPoster('jeju', 'jeju2') },
      { id: 3, src: cityVideo('jeju', 'jeju_v3'), img: videoPoster('jeju', 'jeju3') },
      { id: 4, src: cityVideo('jeju', 'jeju_v4'), img: videoPoster('jeju', 'jeju4') },
      { id: 5, src: cityVideo('jeju', 'jeju_v5'), img: videoPoster('jeju', 'jeju5') },
      { id: 6, src: cityVideo('jeju', 'jeju_v6'), img: videoPoster('jeju', 'jeju6') },
      { id: 7, src: cityVideo('jeju', 'jeju_v7'), img: videoPoster('jeju', 'jeju7') },
    ],
  },
] satisfies City[];
