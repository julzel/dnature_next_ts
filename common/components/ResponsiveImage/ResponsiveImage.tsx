import { useMemo } from 'react';
import Image from 'next/image';
import { Image as ImageType } from '../../../common/types';

// styles
import styles from './ResponsiveImage.module.scss';

interface ResponsiveImageProps {
  image?: ImageType;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ image }) => {
  const imageRatio = useMemo(() => {
    return image ? image.src.height / image.src.width : 100;
  }, [image]);

  return (
    <div
      className={styles.responsiveImg}
      style={{ paddingBottom: imageRatio ? `${imageRatio * 100}%` : 0 }}
    >
      {image ? (
        <Image src={image.src} alt={image.alt} loading='lazy' fill />
      ) : null}
    </div>
  );
};

export default ResponsiveImage;
