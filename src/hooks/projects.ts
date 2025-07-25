import { allProjects } from '../constants/projects';
import { CATEGORYENUM } from '../types';

export const useGetAllProjects = () => {
  return allProjects;
};

export const useGetProjectsByCategoty = (category: CATEGORYENUM) => {
  const projects = useGetAllProjects();

  return projects
    .filter(project => project.category.includes(category))
    .sort((a, b) => b.position - a.position);
};

export const useGetProject = (projectId: string) => {
  const projects = useGetAllProjects();

  const project = projects.find(project => project.id === projectId);
  return project || null;
};
