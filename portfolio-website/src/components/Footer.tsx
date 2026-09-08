import { heroData } from '../data/portfolioData';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 px-4 py-6 text-center text-xs text-gray-400">
      © {year} {heroData.name}. Built with React, Vite, TypeScript & Tailwind CSS.
    </footer>
  );
}

export default Footer;
