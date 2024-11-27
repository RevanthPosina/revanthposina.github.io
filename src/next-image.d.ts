declare module 'next/image' {
    import { ImgHTMLAttributes } from 'react';
    import { StaticImageData } from 'next/image';
    import { ImageProps as NextImageProps } from 'next/dist/client/image';
  
    const Image: React.FC<NextImageProps & ImgHTMLAttributes<HTMLImageElement>>;
    export default Image;
  }
  