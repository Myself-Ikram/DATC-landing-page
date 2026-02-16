import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Promotion } from '../components/sections/Promotion';
import { About } from '../components/sections/About';
import { CompanyFeatures } from '../components/sections/CompanyFeatures';
import { BrandsHeading } from '../components/sections/BrandsHeading';
import { BrandStarGoodLuck } from '../components/sections/BrandStarGoodLuck';
import { BrandDiamondMixture } from '../components/sections/BrandDiamondMixture';
import { BrandStar } from '../components/sections/BrandStar';
import { BrandMahekElachi } from '../components/sections/BrandMahekElachi';

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Promotion />
        <BrandsHeading />
        <BrandMahekElachi />
        <BrandStarGoodLuck />
        <BrandDiamondMixture />
        <BrandStar />
        <About />
        <CompanyFeatures />
      </main>
      <Footer />
    </>
  );
}
