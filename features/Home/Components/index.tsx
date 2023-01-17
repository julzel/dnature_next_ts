import { Layout } from '../../../common/components';
import Hero from './Hero';
import heroImage from '/public/images/Home/hero_mobile.jpg';

const Home = () => {
  return (
    <Layout>
      <Hero image={{ src: heroImage, alt: 'Healthy dog eating raw food' }} />
    </Layout>
  );
};

export default Home;
