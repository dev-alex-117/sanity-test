import { useEffect, useState } from 'react';
import { PortableText, type PortableTextComponents  } from '@portabletext/react';
import { getSanityImageUrl } from '../lib/get-sanity-image-url';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <>{children}</>, // no <p>, just raw inline content
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
};

export const Hero = (props: any) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    setImageSrc(getSanityImageUrl(props.heroImage.image.asset._ref));
  }, [props.heroImage]);

  return (
    <div className="py-[2rem] md:py-[3rem] px-[1rem] bg-stone-200" id={props.sectionId}>
      <div className="max-w-[980px] mx-auto flex flex-col gap-[2rem] items-center justify-center">
        <div className="flex flex-col gap-[1.5rem] items-center md:justify-between">
          <div className="flex flex-col gap-[1rem]">
            <h1 className="text-[2.75rem] font-light text-center">
              <PortableText value={props.title} components={components} />
            </h1>
            <h2 className="text-base w-full text-center md:text-left">
              <PortableText value={props.subtitle} components={components} />
            </h2>
          </div>

          <div className="items-center text-center flex flex-col gap-[1.5rem] px-[1rem]">
            <p className="text-md">
              {props.description}
            </p>

            <a
              href={props.cta.url}
              className="w-fit block px-[2.25rem] py-[0.75rem] md:px-[3rem] md:py-[0.5rem] text-lg text-white border border-stone-700 md:p-1 md:m-0 bg-stone-700 hover:text-stone-700 hover:bg-stone-200 transition-colors duration-300 md:px-[1.5rem] md:p-3"
            >
              {props.cta.label}
            </a>
          </div>
        </div>

        {imageSrc && (
          <img className="object-cover max-h-[420px] w-full" src={imageSrc} alt={props.imageAlt} />
        )}
      </div>
    </div>
  );
};
