import { useState } from 'react';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { IndividaulProject } from './IndividaulProject';

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    <>
      {projects &&
        projects.map((project) => (
          <li
            key={project.projectId}
            data-doc-id={project.docId}
            data-testid='project-action'
            className={
              active === project.projectId
                ? 'active sidebar__project'
                : 'sidebar__project'
            }
          >
            <div
              aria-label={`Select ${project.name} as the task project`}
              role='button'
              tabIndex={0}
              onKeyDown={() => {
                setActive(project.projectId);
                setSelectedProject(project.projectId);
              }}
              onClick={() => {
                setActive(project.projectId);
                setSelectedProject(project.projectId);
              }}
            >
              <IndividaulProject project={project} />
            </div>
          </li>
        ))}
    </>
  );
};
