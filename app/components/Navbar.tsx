"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("/");

  return (
    <div className="flex w-full justify-center pt-4 bg-white rounded-lg overflow-hidden">
      {[
        { name: "Projects", path: "/", id:1 },
        { name: "Experience", path: "/experience", id:2 },
        { name: "Achievements", path: "/achievements", id:3 },
      ].map((tab) => (
        <Link key={tab.path} href={tab.path} onClick={() => setActiveTab(tab.path)}>
          <div
            className={`p-2 min-w-16 border lg:min-w-24 focus:shadow-none rounded-lg ${tab.id == 1 ? "rounded-r-none" : ""} ${tab.id == 2 ? "rounded-l-none rounded-r-none" : ""} ${tab.id == 3 ? "rounded-l-none" : ""} box-border border-r text-center cursor-pointer transition-all duration-100 ease-out
            ${
              activeTab === tab.path
                ? "border-b shadow-inner"
                : "nav-item"
            }`}
            // 
          >
            {tab.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
