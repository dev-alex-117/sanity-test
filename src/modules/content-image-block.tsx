import { useEffect, useState } from 'react';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { getSanityImageUrl } from '../lib/get-sanity-image-url';

const components: PortableTextComponents = {
  // block: {
  //   normal: ({ children }) => <p className="my-[1rem]">{children}</p>,
  // },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
};

const componentsClean: PortableTextComponents = {
  ...components,
  // block: {
  //   normal: ({ children }) => <>{children}</>, // no <p>, just raw inline content
  // },
};

export const ContentImageBlock = (props: any) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    setImageSrc(getSanityImageUrl(props.image.image.asset._ref));
  }, [props.image]);

  return (
    <div className="py-[3rem] md:py-[3rem] px-[1rem] bg-zinc-300">
      <div className="flex flex-col max-w-[980px] mx-auto gap-[2rem] md:flex-row">
        <div className="flex flex-col gap-[1rem] items-center md:w-1/2">
          <div className="flex flex-col gap-[1.5rem]">
            <h2 className="text-4xl w-full font-thin text-center md:text-left">
              <PortableText value={props.title} components={componentsClean} />
            </h2>

            <div className="flex flex-col gap-[1rem]">
              <PortableText value={props.content} components={components} />
            </div>
          </div>

          <div className="flex justify-end w-full md:justify-start">
            <a
              href={props.cta.url}
              className="w-fit block px-[2.25rem] py-[0.75rem] md:px-[3rem] md:py-[0.5rem] text-lg text-white border border-stone-700 md:p-1 md:m-0 bg-stone-700 hover:text-stone-700 hover:bg-stone-200 transition-colors duration-300 md:px-[1.5rem] md:p-3"
            >
              {props.cta.label}
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          {imageSrc && (
            <img className="object-cover w-full md:h-full" src={imageSrc} alt={props.imageAlt} />
          )}
        </div>
      </div>
    </div>
  );
};
