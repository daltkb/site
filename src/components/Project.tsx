import { TbExternalLink } from 'solid-icons/tb';
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
        <h2 class="text-xl pb-1">{name}</h2>
        <a href={link}>
          <TbExternalLink size={20} />
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
