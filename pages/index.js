import Layout from '../components/Layout';
import BannerSecc from '../components/BannerSecc';
import GalleryHome from '../components/BeautyGallerySection';
import Testimonials from '../components/BeautyTestimonials';
import Servicess from '../components/BeautyServicess';
import BackToTop from '../components/BackToTop';
import AppntCta from '../components/BeautyAppntCta';
import BeautyProductCta from '../components/BeautyProductCta';


export default function Home() {
  return (
    <Layout title="Salon">
    
     <BannerSecc />
      <Servicess />
      <AppntCta/>
      <BeautyProductCta/>
      <GalleryHome />
      <Testimonials />
      <BackToTop />
    </Layout>
  );
}




