"use client";
import React from "react";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import Image from "next/image";

function Projects() {
  const projectData = [
    {
      project_title: "Vidtube",
      date: "December 2024",
      description: "",
      tech_stack: ["Reactjs", "TailwindCSS", "Nodejs", "Express", "MongoDB"],
      github_url: "https://vidtube-flame.vercel.app/",
      live_link: "https://vidtube-flame.vercel.app/",
      youtube_link: "https://vidtube-flame.vercel.app/",
      image: "https://res.cloudinary.com/dzg7eemfm/image/upload/v1740071714/rpehfykjg1rvlblreg8h.png",
      id: 1,
    },
    {
      project_title: "Diner's Find",
      date: "November 2024",
      description: "",
      tech_stack: ["Reactjs", "TailwindCSS", "Nodejs", "Express", "MongoDB"],
      github_url: "https://diners-find.vercel.app/",
      live_link: "https://diners-find.vercel.app/",
      youtube_link: "https://diners-find.vercel.app/",
      image: "https://res.cloudinary.com/dzg7eemfm/image/upload/v1740071714/qtq8dsdw3dp9m8onykge.png",
      id: 2,
    },
    {
        project_title: "Study Notion",
        date: "October 2024",
        description: "",
        tech_stack: ["Reactjs", "TailwindCSS", "Nodejs", "Express", "MongoDB"],
        github_url: "https://study-notion-nu-six.vercel.app/",
        live_link: "https://study-notion-nu-six.vercel.app/",
        youtube_link: "https://study-notion-nu-six.vercel.app/",
        image: "https://res.cloudinary.com/dzg7eemfm/image/upload/v1740071714/vhzbojfri4sptnwuh8wa.png",
        id: 3,
      },
  ];
  return (
    <div className="w-full flex flex-col gap-5 p-5 md:p-10">
      {projectData &&
        projectData.map((data) => {
          return (
            <div key={data.id} className="flex md:flex-row flex-col w-full md:h-48 gap-4 md:gap-0 rounded-lg p-5 border border-b-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 w-fit">
                  <p className="font-semibold">{data.project_title}</p>
                  <div className="bg-gray-100 text-xs px-1 py-1 rounded">
                    <p>{data.date}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.tech_stack.map((tech,index) => {
                    return (
                      <div key={index} className="bg-gray-100 text-xs w-fit text-black rounded px-1 py-1">
                        {tech}
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-2 mt-2">
                  <Button className="border h-fit font-medium px-2 py-2 rounded-md">
                    <a href={data.github_url} target="_blank">
                      <FaGithub />
                    </a>
                  </Button>
                  <Button className="border h-fit font-medium px-2 py-2 rounded-md">
                    <a href={data.youtube_link} target="_blank">
                      <FaYoutube />
                    </a>
                  </Button>
                  <Button className="border h-fit font-medium px-2 py-2 rounded-md">
                    <a href={data.live_link} target="_blank">
                      <AiOutlineGlobal />
                    </a>
                  </Button>
                </div>
              </div>
              <div><Image className="h-32 rounded-lg" src={data.image} alt={data.project_title} /></div>
            </div>
          );
        })}
    </div>
  );
}

export default Projects;
