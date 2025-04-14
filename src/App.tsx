import { useEffect, useState } from 'react';
import { sanityClient } from './lib/sanity-client';
import { Navbar } from './modules/Navbar.tsx';
import { getSanityImageUrl } from './lib/get-sanity-image-url';
import './App.css';

const landingPageQuery = `*[_type == "landingPage"][0] {
  title,
  slug,
}`;

const navbarQuery = `*[_type == "navbar"][0] {
  logo,
  navigationLinks,
  navigationCtas,
}`;

interface LandingPage {
  title: string;
  slug: {
    current: string;
  };
}

function App() {
  const [pageData, setPageData] = useState<any>({});
  const [logo, setLogo] = useState<{ src: string, alt: string }>({ src: '', alt: '' });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(landingPageQuery)
      .then(x => {
        sanityClient
          .fetch(navbarQuery)
          .then(y => {
            setPageData({ ...pageData, ...x, ...y });
            setLogo({
              src: getSanityImageUrl(y.logo.image),
              alt: y.logo.alt,

            });
            setLoaded(true);
          });
      });
  }, []);

  console.log('data', pageData);
  // {_type: 'link', label: 'Services', _key: '53c58388d82c', url: '#services'}
  return (
    <>
      {!loaded && (<>Loading...</>)}
      {loaded && (
        <>
          <Navbar
            logo={logo}
            links={pageData.navigationLinks.map((link: any) => ({
              label: link.label,
              url: link.url,
            }))}
            ctas={pageData.navigationCtas.map((cta: any) => ({
              label: cta.label,
              url: cta.url,
            }))}
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>

          <div id="services">
            <h2>About</h2>
            <h2>About</h2>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex deserunt quisquam necessitatibus dolorum quaerat eligendi quam aliquid aut possimus repellat eos iure accusantium nam vitae fugiat et deleniti inventore!</p>
          </div>
        </>
      )}
    </>
  )
}

export default App
