import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { PercentBadgeIcon, FireIcon, HeartIcon } from '@heroicons/react/24/solid';

const services = [
  {
    icon: PercentBadgeIcon,
    title: 'Cold',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    icon: FireIcon,
    title: 'Breath',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    icon: PercentBadgeIcon,
    title: 'Cold',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    icon: HeartIcon,
    title: 'Love',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
];

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
  block: {
    normal: ({ children }) => <>{children}</>, // no <p>, just raw inline content
  },
};

export const Services = (props: any) => {

  return (
    <div className="py-[3rem] md:py-[3rem] px-[1rem] bg-neutral-200">
      <div className="flex flex-col gap-[4rem]">
        <div className="max-w-[980px] mx-auto flex flex-col gap-[1.5rem] items-center">
          <h2 className="text-4xl w-full font-light text-center">
            <PortableText value={props.title} components={componentsClean} />
          </h2>

          <div className="flex flex-col gap-[1rem] text-center md:max-w-[80%]e">
            <PortableText value={props.description} components={components} />
          </div>
        </div>

        <div className="max-w-[1080px] mx-auto">
          <ul className="max-w-[480px] mx-auto grid grid-cols-1 sm:max-w-none mx-none sm:grid-cols-2 lg:flex lg:justify-center gap-[2rem]">
            {services.map((service) => (
              <li className="max-w-[320px] p-[2rem] md:p-[1.5rem] border border-neutral-500 rounded-4xl">
                <div className="flex flex-col gap-[1rem] items-center">
                  <service.icon className="w-[3rem] h-[3rem]" />
                  <h3 className="text-3xl font-thin">{service.title}</h3>
                  <p className="text-sm text-center">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
