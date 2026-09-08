import { experienceData } from '../data/portfolioData';

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Experience
        </h2>

        <ol className="mt-10 space-y-10 border-l-2 border-indigo-200 pl-6">
          {experienceData.map((exp) => (
            <li key={exp.id} className="relative">
              <div className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full bg-indigo-600" />

              <p className="text-sm font-medium text-indigo-600">
                {exp.duration}
              </p>
              <h3 className="mt-1 text-lg font-bold text-gray-900">
                {exp.jobTitle}
              </h3>
              <p className="text-sm text-gray-500">{exp.company}</p>

              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-gray-600">
                {exp.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
