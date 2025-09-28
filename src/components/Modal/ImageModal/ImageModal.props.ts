import { StaticImageData } from 'next/image';

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: StaticImageData;
    alt: string;
  } | null;
}
