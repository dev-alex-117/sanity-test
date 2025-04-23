import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'x4cnt0sa',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});
