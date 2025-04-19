
const logos = [
  {
    src: 'https://www.vicemediagroup.com/wp-content/uploads/2020/10/VICE_LOGO_BLACK-e1617894708861.png',
    alt: 'Vice',
  },
  {
    src: 'https://static.wixstatic.com/media/38f134_474aa34fe666457b8f89d90515d570ee~mv2.png/v1/fit/w_180,h_180,q_90,enc_avif,quality_auto/38f134_474aa34fe666457b8f89d90515d570ee~mv2.png',
    alt: 'Joe Rogan Podcast',
  },
  {
    src: 'https://static.wixstatic.com/media/38f134_fc41ff49cfd945dbaa3e544498f4eae9~mv2.png/v1/fit/w_99,h_99,q_90,enc_avif,quality_auto/38f134_fc41ff49cfd945dbaa3e544498f4eae9~mv2.png 1x, https://static.wixstatic.com/media/38f134_fc41ff49cfd945dbaa3e544498f4eae9~mv2.png/v1/fit/w_180,h_180,q_90,enc_avif,quality_auto/38f134_fc41ff49cfd945dbaa3e544498f4eae9~mv2.png 2x, https://static.wixstatic.com/media/38f134_fc41ff49cfd945dbaa3e544498f4eae9~mv2.png/v1/fit/w_180,h_180,q_90,enc_avif,quality_auto/38f134_fc41ff49cfd945dbaa3e544498f4eae9~mv2.png 3x, https://static.wixstatic.com/media/38f134_fc41ff49cfd945dbaa3e544498f4eae9~mv2.png/v1/fit/w_180,h_180,q_90,enc_avif,quality_auto/38f134_fc41ff49cfd945dbaa3e544498f4eae9~mv2.png 4x, https://static.wixstatic.com/media/38f134_fc41ff49cfd945dbaa3e544498f4eae9~mv2.png/v1/fit/w_180,h_180,q_90,enc_avif,quality_auto/38f134_fc41ff49cfd945dbaa3e544498f4eae9~mv2.png 5x',
    alt: 'Tedx',
  },
  {
    src: 'https://www.vicemediagroup.com/wp-content/uploads/2020/10/VICE_LOGO_BLACK-e1617894708861.png',
    alt: 'Vice',
  },
  {
    src: 'https://static.wixstatic.com/media/38f134_474aa34fe666457b8f89d90515d570ee~mv2.png/v1/fit/w_180,h_180,q_90,enc_avif,quality_auto/38f134_474aa34fe666457b8f89d90515d570ee~mv2.png',
    alt: 'Joe Rogan Podcast',
  },
];

export function LogoCarousel() {
  return (
    <div className="py-[2rem] md:py-[3rem] px-[1rem] bg-blue-100">
      <h2 className="text-xl font-normal mb-4 text-center">
        Learn more about the Wim Hof Method:
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-7 md:max-w-3xl mx-auto">
        {logos.map((logo) => (
          <a 
            key={logo.src}
            href={'#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-[100px] h-[100px] flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain max-w-[100px] max-h-[100px]"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

