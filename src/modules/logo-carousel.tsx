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

const Logo = (props: any) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    setImageSrc(getSanityImageUrl(props.image.image.asset._ref));
  }, [props.image]);

  return (
    <a
      href={'#'}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[100px] h-[100px] flex items-center justify-center"
    >
      <img
        src={imageSrc}
        alt={props.image.alt}
        className="w-full h-full object-contain max-w-[100px] max-h-[100px]"
      />
    </a>
  );
};

export function LogoCarousel(props: any) {
  return (
    <div className="py-[2rem] md:py-[3rem] px-[1rem] bg-blue-100">
      <h2 className="text-xl font-normal mb-4 text-center">
        <PortableText value={props.title} components={components} />
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-7 md:max-w-3xl mx-auto">
        {props.logos.map((logo: any) => (
          <Logo key={logo.image.image.asset._ref} {...logo} />
        ))}
      </div>
    </div>
  );
}

