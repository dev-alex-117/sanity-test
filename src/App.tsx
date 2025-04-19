import { Header } from './modules/header.tsx';
import { Hero } from './modules/hero.tsx';
import { ContentImageBlock } from './modules/content-image-block.tsx';
import { Services } from './modules/services.tsx';
import tmp from './tmp.json';

import { useSanity } from './contexts/sanity-provider';
import { Testimonials } from './modules/testimonials.tsx';
import { ContactForm } from './modules/contact.tsx';
import { LogoCarousel } from './modules/logo-carousel.tsx';
import { Footer } from './modules/footer.tsx';
const App = () => {
  const { state } = useSanity();

  console.log(state);

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
          default:
            return null;
        }
      })}

      <ContentImageBlock
        cta={{ label: 'Test', url: 'https://www.google.com' }}
        image={{ image: { asset: { _ref: 'image-bced4f445af4fb326ea1c6fef22e74334f901c58-525x280-png' } } }}
        imageAlt="Test"
        title={tmp.contentImageBlockTitle}
        content={tmp.contentImageBlockContent}
      />

      <Services
        title={tmp.servicesTitle}
        description={tmp.servicesDescription}
      />

      <Testimonials
      />

      <LogoCarousel />

      <ContactForm />

      <Footer />
    </>
  );
};

export default App;
