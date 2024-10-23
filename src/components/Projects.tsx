"use client";

import { Project } from "@/types/Projects";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { ArrowUpRight, Github } from "lucide-react";

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simalation for fetching projects from an API
    const fetchProjects = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setProjects([
        {
          id: 1,
          title: "E-commerce Platform",
          description:
            "A full-stack e-commerce solution with React and Node.js",
          imageUrl: "/images/placeholder.svg?height=300&width=400",
          link: "#",
          shareSource: false,
          srcLink: "https://github.com/sSwapping",
        },
        {
          id: 2,
          title: "Weather App",
          description: "Real-time weather forecasts using OpenWeatherMap API",
          imageUrl: "/images/placeholder.svg?height=300&width=400",
          link: "#",
          shareSource: true,
          srcLink: "https://github.com/sSwapping",
        },
        {
          id: 3,
          title: "Task Manager",
          description:
            "A productivity app for tasks built with React and Firebase",
          imageUrl: "/images/placeholder.svg?height=300&width=400",
          link: "#",
          shareSource: true,
          srcLink: "https://github.com/sSwapping",
        },
        {
          id: 4,
          title: "Portfolio Website",
          description: "A responsive portfolio site using Next.js and Tailwind",
          imageUrl: "/images/placeholder.svg?height=300&width=400",
          link: "#",
          shareSource: false,
          srcLink: "https://github.com/sSwapping",
        },
      ]);
      setLoading(false);
    };

    fetchProjects();
  }, []);
  return (
    <div className='mt-16 md:mt-20'>
      <div className='px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <h2 className='text-3xl font-bold text-center'>
            Check out my latest work
          </h2>
          <p className='mb-12 text-center text-neutral-200/80 text-xs/relaxed md:text-base/relaxed lg:text-xl/relaxed'>
            I&apos;ve worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
          {loading ? (
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className='overflow-hidden border rounded-lg shadow-md border-neutral-800/50 bg-neutral-900'
                >
                  <Skeleton className='w-full h-48' />
                  <div className='p-6'>
                    <Skeleton className='w-3/4 h-6 mb-4' />
                    <Skeleton className='w-full h-4 mb-4' />
                    <Skeleton className='w-2/3 h-4' />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className='overflow-hidden transition-transform duration-300 rounded-lg shadow-md border-neutral-800/50 bg-neutral-900 hover:scale-105'
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className='object-cover w-full h-48'
                  />
                  <div className='p-6'>
                    <h3 className='mb-2 text-xl font-semibold'>
                      {project.title}
                    </h3>
                    <p className='mb-4 text-neutral-50/80'>
                      {project.description}
                    </p>
                    <div className='flex items-center justify-between'>
                      <Button asChild variant='outline'>
                        <a
                          href={project.link}
                          className='inline-flex items-center'
                        >
                          View Project
                          <ArrowUpRight className='w-4 h-4 ml-2' />
                        </a>
                      </Button>
                      {project.shareSource ? (
                        <Button variant='outline'>
                          <a
                            href={project.srcLink}
                            className='inline-flex items-center'
                          >
                            Source Code
                            <Github className='w-4 h-4 ml-2' />
                          </a>
                        </Button>
                      ) : (
                        <Button variant='outline' disabled>
                          <a href='#' className='inline-flex items-center'>
                            Source Code
                            <Github className='w-4 h-4 ml-2' />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
