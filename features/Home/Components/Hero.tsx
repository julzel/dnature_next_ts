import { ColorText, ResponsiveImage } from '../../../common/components';
import { Image as ImageType } from '../../../common/types';
import styles from './Hero.module.scss';

interface HeroProps {
  image?: ImageType;
}

const Hero: React.FC<HeroProps> = ({ image }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <ColorText>La mejor alimentación</ColorText>{' '}
          <ColorText variant='secondary'>natural</ColorText>{' '}
          <ColorText>para mascotas</ColorText>
        </h1>
        <p className={styles.heroParagraph}>
          Nuestras recetas llenas de nutrientes son cuidadosamente elaboradas
          por nuestros nutricionistas veterinarios, teniendo en cuenta la
          calidad, el sabor y la textura. Es lo que nos gusta llamar ciencia
          deliciosa. Y es lo que a todas las mascotas les vuelve locas.
        </p>
      </div>
      <div className={styles.heroImageContainer}>
        {image ? <ResponsiveImage image={image} /> : null}
      </div>
    </div>
  );
};

export default Hero;
