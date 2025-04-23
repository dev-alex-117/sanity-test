import { Header } from './modules/header.tsx';
import { Hero } from './modules/hero.tsx';
import { ContentImageBlock } from './modules/content-image-block.tsx';
import { FeatureCards } from './modules/feature-cards.tsx';

import { useSanity } from './contexts/sanity-provider';
import { Testimonials } from './modules/testimonials.tsx';
import { ContactForm } from './modules/contact-form.tsx';
import { LogoCarousel } from './modules/logo-carousel.tsx';
import { Footer } from './modules/footer.tsx';

const App = () => {
  const { state } = useSanity();

  return (
    <>
      {state.data.header && (
        <Header
          {...state.data.header}
        />
      )}

      {state.data.page?.items.map((item: any) => {
        switch (item._type) {
          case 'hero':
            return <Hero key={item._key} {...item} />;
          case 'contentImageBlock':
            return <ContentImageBlock key={item._key} {...item} />;
          case 'testimonials':
            return <Testimonials key={item._key} {...item} />;
          case 'logoCarousel':
            return <LogoCarousel key={item._key} {...item} />;
          case 'featureCards':
            return <FeatureCards key={item._key} {...item} />;
          case 'contactForm':
            return <ContactForm key={item._key} {...item} />;
          default:
            return null;
        }
      })}

      <Footer />
    </>
  );
};

export default App;
