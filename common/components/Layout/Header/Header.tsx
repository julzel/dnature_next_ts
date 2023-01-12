import Image from 'next/image';
import Link from 'next/link';
import Button from '../../Button/Button';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//styles
import styles from './Header.module.scss';

interface HeaderProps {
  logoUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl = '' }) => {
  console.log(logoUrl);
  return (
    <header className={styles.header}>
      {logoUrl ? (
        <Link href='/'>
          <Image
            className={styles.header__logo}
            src={logoUrl}
            alt='DNAture Logo'
            width={50}
            height={50}
            loading='lazy'
          />
        </Link>
      ) : null}
      <Button icon={faBars} onClick={() => console.log('working')} />
    </header>
  );
};

export default Header;
