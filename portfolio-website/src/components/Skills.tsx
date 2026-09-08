import { skillsData } from '../data/portfolioData';

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Skills
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {skillsData.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 text-center text-lg font-semibold text-gray-800">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md"
                    >
                      <Icon className="h-8 w-8 text-indigo-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
