import type { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl"
      >
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="max-h-80 w-full bg-gray-100 object-contain"
          />
        )}

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
              {project.title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-indigo-600 hover:underline"
            >
              View on GitHub ↗
            </a>
          )}

          <div className="mt-6 space-y-5">
            <div>
              <h4 className="text-sm font-bold tracking-wide text-indigo-600 uppercase">
                Situation
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                {project.star.situation}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wide text-indigo-600 uppercase">
                Task
              </h4>
              <p className="mt-1 text-sm text-gray-600">{project.star.task}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wide text-indigo-600 uppercase">
                Action
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                {project.star.action}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wide text-indigo-600 uppercase">
                Result
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                {project.star.result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
