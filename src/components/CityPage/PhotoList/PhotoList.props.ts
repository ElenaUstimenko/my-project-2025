import { StaticImageData } from 'next/image';

export interface CityImage {
  id: number;
  src: StaticImageData;
  alt: string;
}

export interface PhotoListProps {
  city: {
    images?: CityImage[];
  };
}
