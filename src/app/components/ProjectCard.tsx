import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  link: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-xl transition-all duration-300 p-8 h-full bg-white dark:bg-[#1C1C1C]">
        <h3 className="text-2xl font-bold mb-3 group-hover:opacity-70 transition-opacity">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>
	    {technologies?.length && (
		    <div className="flex flex-wrap gap-2 mt-4">
		      {technologies.map((tech, index) => (
		        <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full">
					{tech}
				</span>
		      ))}
		    </div>
	    )}
      </div>
    </a>
  );
}