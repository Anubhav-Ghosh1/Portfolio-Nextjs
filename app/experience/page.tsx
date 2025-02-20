"use client";
import React from "react";

function Experience() {
  let expericenData = [
    {
      company: "Vidtube",
      date: "December 2024",
      description: ["Hello"],
      role: "Software Development Engineer",
      tech_stack: ["Reactjs", "TailwindCSS", "Python", "Rescript", "FastAPI"],
      id: 1,
    },
  ];
  return (
    <div className="p-10">
      {expericenData &&
        expericenData.map((data) => {
          return (
            <div key={data.id}>
              <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="text-xl font-semibold">{data.company}</div>
                <div className="bg-gray-100 w-fit text-xs px-1 py-1 rounded">
                  <p className="w-fit">Onsite</p>
                </div>
              </div>
              <p className="text-sm">{data.date} - Present</p>
              </div>
              <p className="font-medium">{data.role}</p>
              <ul className="list-disc pl-5">
                {data.description.length > 0 &&
                  data.description.map((value, index) => {
                    return (
                      <li className="marker:text-* marker:text-xs" key={index}>
                        {value}
                      </li>
                    );
                  })}
              </ul>
            </div>
          );
        })}
    </div>
  );
}

export default Experience;
