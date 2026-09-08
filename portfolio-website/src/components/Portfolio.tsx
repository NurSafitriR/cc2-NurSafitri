import { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types';
import ProjectModal from './ProjectModal';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null,
  );

  return (
    <section id="portfolio" className="scroll-mt-20 bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Portfolio
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
            >
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  {project.title}
                </h3>

                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-3 flex-1 text-sm text-gray-600">
                  {project.shortDescription}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="self-start rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    View Details
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-indigo-600 hover:underline"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Portfolio;
