import type { NextPage } from 'next'
import Hero from '../components/Hero';
import FeatureCategorys from '../components/FeatureCategorys';
import TopRatedProduct from '../components/TopRatedProduct';
import LatestProduct from '../components/LatestProduct';
import Testimonial from '../components/Testimonial';
import Banner from '../components/Banner';
import LatestEvents from '../components/LatestEvents';

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <FeatureCategorys />
      <TopRatedProduct />
      <Banner />
      <LatestProduct />
      <Testimonial />
      <LatestEvents />
    </main>
  )
}

export default Home;