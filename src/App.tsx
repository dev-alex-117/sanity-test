import { useEffect, useState } from 'react';
import { sanityClient } from './lib/sanity-client';
import './App.css';

const landingPageQuery = `*[_type == "landingPage"][0] {
  title,
  slug,
}`;

interface LandingPage {
  title: string;
  slug: {
    current: string;
  };
}

function App() {
  const [data, setData] = useState<LandingPage | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(landingPageQuery)
      .then(data => {
        console.log('data', data);
        setData(data);
      });
  }, []);

  return (
    <>
      {!data && <div>Loading...</div>}
      {data && (
        <h1>{ data.title }</h1>
      )}
    </>
  )
}

export default App
