import { useMemo } from 'react';
import Footer from './Footer';

const FooterContainer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return <Footer year={year} />;
};

export default FooterContainer;
