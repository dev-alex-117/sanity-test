import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './sanity-client';

const builder = imageUrlBuilder(sanityClient);

export const getSanityImageUrl = (source: any) => {
  return builder.image(source).url();
};
