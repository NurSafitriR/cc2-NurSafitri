import { heroData } from '../data/portfolioData';

function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="flex min-h-screen scroll-mt-20 flex-col items-center justify-center gap-6 px-4 pt-24 text-center"
    >
      <img
        src={heroData.photoUrl}
        alt={`Photo of ${heroData.name}`}
        className="h-40 w-40 rounded-full border-4 border-indigo-100 object-cover shadow-lg md:h-48 md:w-48"
      />

      <div>
        <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
          {heroData.name}
        </h1>
        <p className="mt-2 text-lg font-medium text-indigo-600 md:text-xl">
          {heroData.jobTitle}
        </p>
      </div>

      <p className="max-w-xl text-base text-gray-600 md:text-lg">
        {heroData.intro}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => scrollToSection('portfolio')}
          className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700"
        >
          View Portfolio
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('contact')}
          className="rounded-full border border-indigo-600 px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Hero;
