import { aboutMeData } from '../data/portfolioData';

function AboutMe() {
  return (
    <section id="about" className="scroll-mt-20 bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
          About Me
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
          {aboutMeData.bio}
        </p>

        <div className="mt-10">
          <h3 className="mb-4 text-center text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Core Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {aboutMeData.coreSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {aboutMeData.keyValues.map((value) => (
            <div
              key={value.title}
              className="rounded-xl bg-white p-5 text-center shadow-sm"
            >
              <p className="font-semibold text-gray-900">{value.title}</p>
              <p className="mt-1 text-sm text-gray-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
