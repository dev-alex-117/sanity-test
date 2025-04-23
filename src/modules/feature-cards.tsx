import { useState, useEffect } from 'react';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { getSanityImageUrl } from '@/lib/get-sanity-image-url';

const components: PortableTextComponents = {
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-blue-500 hover:underline"
        target={value?.newTab ? '_blank' : undefined}
        rel={value?.newTab ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
};

const Feature = (props: any) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    setImageSrc(getSanityImageUrl(props.icon.asset._ref));
  }, [props.icon]);

  return (
    <div className="flex flex-col gap-[1rem] items-center">
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          className="w-[3rem] h-[3rem]"
        />
      )}
      <h3 className="text-3xl font-thin">{props.title}</h3>
      <p className="text-sm text-center">
        <PortableText value={props.description} components={components} />
      </p>
    </div>
  );
};

export const FeatureCards = (props: any) => {

  return (
    <div className="py-[3rem] md:py-[3rem] px-[1rem] bg-neutral-200">
      <div className="flex flex-col gap-[4rem]">
        <div className="max-w-[980px] mx-auto flex flex-col gap-[1.5rem] items-center">
          <h2 className="text-4xl w-full font-light text-center">
            {props.title}
          </h2>

          <div className="flex flex-col gap-[1rem] text-center md:max-w-[80%]e">
            <PortableText value={props.description} components={components} />
          </div>
        </div>

        <div className="max-w-[1080px] mx-auto">
          <ul className="max-w-[480px] mx-auto grid grid-cols-1 sm:max-w-none mx-none sm:grid-cols-2 lg:flex lg:justify-center gap-[2rem]">
            {props.cards.map((card: any) => (
              <li className="max-w-[320px] p-[2rem] md:p-[1.5rem] border border-neutral-500 rounded-4xl">
                <Feature key={card.title} {...card} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
