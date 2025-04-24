import { getSanityImageUrl } from '@/lib/get-sanity-image-url';
import { StarIcon } from '@heroicons/react/24/solid';
import { useRef, useState, useEffect } from 'react';

const Testimonial = (props: any) => {
  const [imageSrc, setImageSrc] = useState('');

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setImageSrc(getSanityImageUrl(props.avatar.image.asset._ref));
  }, [props.avatar]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const pRef = useRef<HTMLParagraphElement>(null);
  const [isClamped, setIsClamped] = useState(false);

  const checkClamping = () => {
    if (pRef.current) {
      const lineHeight = parseFloat(getComputedStyle(pRef.current).lineHeight);
      const maxHeight = lineHeight * 7;
      setIsClamped(pRef.current.scrollHeight > maxHeight);
    }
  };

  useEffect(() => {
    checkClamping();

    const mediaQueryList = window.matchMedia('(min-width: 768px), (min-width: 1024px)');
    const handleResize = () => checkClamping();

    mediaQueryList.addEventListener('change', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      mediaQueryList.removeEventListener('change', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <article className="flex flex-col gap-[1rem] md:gap-[1.5rem] md:w-1/3">
      <div className="flex gap-[0.25rem]">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} className="w-[1.5rem] h-[1.5rem] md:w-[1.75rem] md:h-[1.75rem] text-yellow-500" />
        ))}
      </div>

      <blockquote className="flex flex-col">
        <p
          ref={pRef}
          className={`transition-all duration-300 ${!isExpanded ? 'line-clamp-7' : ''
            }`}
        >
          {props.quote}
        </p>

        {isClamped && (
          <button
            onClick={() => toggleExpand()}
            className="text-xs text-blue-600 hover:text-blue-800 ml-1 cursor-pointer self-end mt-2"
          >
            {isExpanded ? 'read less' : 'read more'}
          </button>
        )}
      </blockquote>

      <div className="flex">
        <div className="border-r border-neutral-500 pr-[1.25rem] mr-[1.25rem]">
          {imageSrc && (
            <img className="w-[4rem] h-[4rem] rounded-full object-cover" src={imageSrc} alt={props.name} />
          )}
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <cite>{props.name}</cite>
          <p>{props.occupation}</p>
        </div>
      </div>
    </article>
  );
};

export const Testimonials = (props: any) => {

  return (
    <div className="py-[3rem] md:py-[3rem] px-[1rem] bg-purple-100" id={props.sectionId}>
      <div className="flex flex-col max-w-[980px] mx-auto gap-[2rem]">
        <div className="flex flex-col gap-[1.5rem] items-center">
          <h2 className="text-4xl w-full font-light text-center">
            {props.title}
          </h2>

          <p className="text-center">
            {props.subtitle}
          </p>
        </div>

        <section className="flex flex-col gap-[4rem] md:gap-[5rem] md:flex-row md:justify-center">
          {props.testimonials.map((testimonial: any) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </section>
      </div>
    </div>
  );
};
