import { useEffect, useState } from 'react';
import { HamburgerMenu } from '../components/hamburger-menu.tsx';
import { useToggle } from '@/hooks/use-toggle.tsx';
import { getSanityImageUrl } from '@/lib/get-sanity-image-url.ts';

export const headerQuery = `*[_type == "header"][0] {
  logo,
  navigationLinks,
  navigationCtas,
}`;

// interface Image {
//   src: string;
//   alt: string;
// }

// interface HeaderProps {
//   sanityClient: SanityClient;
//   logo: Image;
//   links: Array<{ label: string; url: string }>;
//   ctas: Array<{ label: string; url: string }>;
// }

export const Header = (props: any) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isOpen, toggle] = useToggle(false);

  useEffect(() => {
    setImageSrc(getSanityImageUrl(props.logo.image.asset._ref));
  }, [props.logo]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <header className="bg-[#f2f3ed] relative sticky top-0 z-50">
      <div className="flex items-center justify-between p-[1rem] max-w-[980px] mx-auto">

        {imageSrc && (
          <a className="h-[4rem]" href="/">
            <img className="h-full" src={imageSrc} alt={props.logo.alt} />
          </a>
        )}

        <HamburgerMenu
          isOpen={isOpen}
          onToggle={toggle}
        />

        <nav
          className={`
            absolute top-full left-0 w-full bg-white transition-all duration-300 ease-in-out flex flex-col gap-4
            ${isOpen ? 'h-[calc(100vh-5rem)] overflow-y-auto opacity-100' : 'h-0 overflow-hidden'}
            md:static md:h-auto md:opacity-100 md:overflow-visible md:w-fit md:bg-transparent md:flex-row md:gap-[2rem]
          `}
        >
          {props.links?.length > 0 && (
            <ul className={'flex flex-col md:flex-row md:space-x-6 md:h-auto'}>
              {props.links.map((link: any) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className="block p-4 text-gray-800 w-fit hover:underline underline-offset-3 md:p-1 md:m-0"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {props.ctas?.length > 0 && (
            <ul className={'flex flex-col lg:flex-row lg:space-x-6 lg:h-auto'}>
              {props.ctas.map((link: any) => (
                <li key={link.label} className="flex items-center justify-center">
                  <div className="w-[80%] md:w-[100%]">
                    <a
                      href={link.url}
                      className="block p-3 text-lg text-center text-white border border-stone-700 md:p-1 md:m-0 bg-stone-700 hover:text-stone-700 hover:bg-stone-200 transition-colors duration-300 md:px-[1.5rem]"
                    >
                      {link.label}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};
