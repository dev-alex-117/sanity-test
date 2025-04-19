export const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-[2rem] md:py-[3rem] px-[1rem]">
      <div className="max-w-[980px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} One Breath. All rights reserved.</p>
        </div>
        
        <nav>
          <ul className="flex gap-6 text-sm">
            <li>
              <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:text-stone-300 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
