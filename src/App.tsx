import { Header } from './modules/header.tsx';
import { Hero } from './modules/hero.tsx';
import { useSanity } from './contexts/sanity-provider';

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
    </>
  );
};

export default App;
