import { StarIcon } from '@heroicons/react/24/solid';
import { useRef, useState, useEffect } from 'react';
const stories = [
  {
    name: 'Adventurous Fox',
    image: 'https://optiminds-demo.my.canva.site/images/5033e1617dbfd9095cdf981bafdb3e84.png',
    description: 'Explorer',
    quote: 'Every walk is an adventure! When I see something exciting, I just have to chase it - squirrels, birds, even falling leaves. My human keeps calling "come back!" but there\'s just too much fun to be had! The worst part is when the walk ends - I go full drama mode, flopping on the ground and whining. Sometimes I even have to be carried back to the car like a big baby. But hey, tomorrow\'s another walk!',
  },
  {
    name: 'Jealous Ginger',
    image: 'https://optiminds-demo.my.canva.site/images/5033e1617dbfd9095cdf981bafdb3e84.png',
    description: 'Glutton',
    quote: 'I\'m absolutely obsessed with my ball - I could play fetch all day long! But you know what I love even more? FOOD! The second my bowl is empty, I\'ll push it all around the kitchen making as much noise as possible. Who cares if I just ate? I\'m a growing girl! And don\'t you dare give attention to anyone else - those belly rubs are MINE! Sometimes I even hop onto the dining table just to make sure everyone remembers I\'m the star of this household. What can I say? I\'m just too cute to resist!',
  },
  {
    name: 'Baby-girl Heidi',
    image: 'https://optiminds-demo.my.canva.site/images/5033e1617dbfd9095cdf981bafdb3e84.png',
    description: 'Baby',
    quote: 'I\'m the sweetest little baby girl you\'ll ever meet! I listen to every command (well, most of them) and love making new friends wherever I go - humans only though, other dogs trying to sniff my butt better watch out! My superpower? These ears of mine catch EVERYTHING - from treat bags rustling three rooms away to squirrels plotting outside. Just one tiny request: breakfast needs to happen first thing in the morning, or I\'ll be your adorable little shadow, following you around with those irresistible puppy eyes until you feed me. What can I say? A girl\'s gotta eat!',
  },

];

const Testimonial = (props: { quote: string; image: string; name: string; description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const pRef = useRef<HTMLParagraphElement>(null);
  const [isClamped, setIsClamped] = useState(false);

  const checkClamping = () => {
    if (pRef.current) {
      const lineHeight = parseFloat(getComputedStyle(pRef.current).lineHeight);
      const maxHeight = lineHeight * 7; // for line-clamp-7
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
        {Array.from({ length: 5 }).map(() => (
          <StarIcon className="w-[1.5rem] h-[1.5rem] md:w-[1.75rem] md:h-[1.75rem] text-yellow-500" />
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
          <img className="w-[4rem] h-[4rem] rounded-full object-cover" src={props.image} alt={props.name} />
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <cite>{props.name}</cite>
          <p>{props.description}</p>
        </div>
      </div>
    </article>
  );
};

export const Testimonials = () => {
  return (
    <div className="py-[3rem] md:py-[3rem] px-[1rem] bg-purple-100">
      <div className="flex flex-col max-w-[980px] mx-auto gap-[2rem]">
        <div className="flex flex-col gap-[1.5rem] items-center">
          <h2 className="text-4xl w-full font-light text-center">
            {/* {props.title} */}
            Tres Doggos
          </h2>

          <p className="text-center">
            {/* {props.description} */}
            Checkout the cutest bandit in the neighborhood
          </p>
        </div>

        <section className="flex flex-col gap-[4rem] md:gap-[5rem] md:flex-row md:justify-center">
          {stories.map((story) => (
            <Testimonial {...story} />
          ))}
        </section>
      </div>
    </div>
  );
};
