import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanity-client'

const builder = imageUrlBuilder(sanityClient)

export const getSanityImageUrl = (source: any) => {
  console.log('source', source)
  return builder.image(source).url();
};
