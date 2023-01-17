import { Layout } from '../../common/components';
import Hero from './Components/Hero';
import Welcome from './Components/Welcome';
import heroImage from '/public/images/Home/hero_mobile.jpg';

import { welcomeItems } from './home-data';

const Home = () => {
  return (
    <Layout>
      <Hero image={{ src: heroImage, alt: 'Healthy dog eating raw food' }} />
      <Welcome items={welcomeItems} />
    </Layout>
  );
};

export default Home;
