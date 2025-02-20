"use client";
import React from "react";

function Skills() {
  return (
    <div className="flex flex-col mt-12 rounded-lg p-4 gap-2 border-l-4">
      <div className="flex items-center gap-1">
        <p className="font-semibold">Languages:</p>
        <p className="opacity-60">C,C++,Python,Javascript,Typescript</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-semibold">Frontend:</p>
        <p className="opacity-60">React, Next.js, TailwindCSS</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-semibold">Backend:</p>
        <p className="opacity-60">Node, MySQL, MongoDB, Redis, Express</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-semibold">DevOps:</p>
        <p className="opacity-60">Docker</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-semibold">Tools:</p>
        <p className="opacity-60">Git, BitBucket</p>
      </div>
    </div>
  );
}

export default Skills;
