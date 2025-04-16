import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { sanityClient } from './lib/sanity-client.ts';
import { SanityProvider } from './contexts/sanity-provider.tsx';
import App from './App.tsx';
import './index.css';

const currentSlug = window.location.pathname.split('/').pop() || '';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SanityProvider sanityClient={sanityClient} slug={currentSlug}>
      <App />
    </SanityProvider>
  </StrictMode>,
);
