import { FiExternalLink } from 'solid-icons/fi';
import { Component } from 'solid-js';

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  tags: string[];
}

const Project: Component<ProjectProps> = ({
  name,
  description,
  link,
  tags,
}: ProjectProps) => {
  return (
    <>
      <div class="flex items-center space-x-1">
        <h2 class="text-lg pb-1">{name}</h2>
        <a href={link}>
          <FiExternalLink
            title={name}
            class="pb-1"
            size={20}
            color={'#AE3967'}
          />
        </a>
      </div>
      <p>{description}</p>
      <div class="flex space-x-1">
        {tags.map((tag) => (
          <div>{tag}</div>
        ))}
      </div>
    </>
  );
};

export default Project;
