import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  link: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full">
        <h3 className="text-2xl font-semibold text-primary mb-2 dark:text-slate-900">{title}</h3>
        <p className='dark:text-slate-900'>{description}</p>
	    {technologies?.length && (
		    <ul>
		      {technologies.map((tech, index) => (
		        <li key={index} className="dark:text-slate-900">{tech}</li>
		      ))}
		    </ul>
	    )}
      </div>
    </a>
  );
}