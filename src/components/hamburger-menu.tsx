import { useState } from 'react';
import { generateUniqueId } from '@/lib/generate-unique-id';

interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: (nextValue?: boolean) => void;
}

export const HamburgerMenu = (props: HamburgerMenuProps) => {
  // const [uniqueId] = useState(generateUniqueId('hamburger-menu-'));

  return (
    <button
      onClick={() => props.onToggle()}
      aria-expanded={props.isOpen}
      aria-controls="primary-navigation"
      aria-label={props.isOpen ? "Close menu" : "Open menu"}
      className="cursor-pointer p-4 flex flex-col gap-1 md:hidden"
    >
      <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${props.isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
      <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${props.isOpen ? 'opacity-0' : ''}`}></span>
      <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${props.isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
    </button>
  );
};
