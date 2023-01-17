import React from 'react';
import Image from 'next/image';

// local imports
// components

// styles
import styles from './Welcome.module.scss';
import { WelcomeSectionItemType } from '../home-types';

// images
// import rawFoodPlate from '../../../public/images/our-ingredients-plate.png'

interface WelcomeProps {
  items: WelcomeSectionItemType[];
}

const Welcome: React.FC<WelcomeProps> = ({ items }) => {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeContent}>
        <h2 className={`title ${styles.title}`}>Alimentación DNAture</h2>

        <div className={styles.welcomeIntro}>
          <p>
            Nuestra gama de recetas, snacks y suplementos, ha sido seleccionada
            con el objetivo de brindar la nutrición ideal para tu mascota, de
            acuerdo a su fisiología y su genética.
          </p>
        </div>

        <div className={styles.welcomeItems}>
          <ul>
            {items.map((item, i) => {
              const animation =
                i % 2 === 0 ? 'fade-in-from-left' : 'fade-in-from-right';
              return (
                <li key={i} className={styles.welcomeItemsItem}>
                  <div
                    className={styles.welcomeItemsImage}
                    style={{
                      width: item.smallIcon ? '65px' : '',
                    }}
                  >
                    <Image src={item.icon} alt={item.title} />
                  </div>
                  <h4 className={styles.welcomeItemsTitle}>{item.title}</h4>
                  <p className={styles.welcomeItemsText}>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className='flex-row'>
          <div className={styles.welcomeImage}>
            <div>
              {/* <Image
                  src={rawFoodPlate}
                  alt='Plato comida natural para mascotas'
                /> */}
            </div>
          </div>

          <div className={styles.welcomeQuote}>
            <blockquote>
              <span>&ldquo;</span>La calidad de vida de nuestras mascotas{' '}
              <span>depende enormemente de la comida</span> que les damos. Las
              recetas de DNAture han sido formuladas para{' '}
              <span>mejorar y preservar esa calidad de vida</span>.
              <span>&rdquo;</span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
