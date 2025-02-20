import React from "react";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";
import { FaLink } from "react-icons/fa";

function Achievements() {
  const data = [
    {
      id: 1,
      platform: "Codechef 2 Star",
      description: "2 Star Codechef",
      icon: <SiLeetcode />,
      link: "https://www.codechef.com/users/iamanubhav03",
    },
    {
      id: 2,
      platform: "500+ Leetcode Questions",
      description: "500+ Leetcode Questions",
      icon: <SiCodechef />,
      link: "https://leetcode.com/u/Anubhav_03/",
    },
    {
      id: 3,
      platform: "Google Kickstart",
      description: "Google Kickstart",
      icon: <FaGoogle />,
      link: "https://drive.google.com/file/d/1Xg8CtKjzose--amE-Fg6EoEOzMf2wdru/view?usp=sharing",
    },
    {
      id: 4,
      platform: "Coding Ninjas Code Kaze Round 1 & Round 2",
      description: "Code Kaze Round 1 and Round 2",
      icon: <SiCodingninjas />,
      link: "https://drive.google.com/file/d/1XafVGFROcIyRtkgzz58dZ8Qx8oyewn_Q/view?usp=sharing",
    },
    {
      id: 5,
      platform: "TCS Codevita Rank 1577",
      description: "",
      icon: "",
      link: "https://drive.google.com/file/d/1bYOd3bdt0dnZh9aFLqW2_qj4obCQ3TbG/view?usp=sharing",
    },
  ];
  return (
    <div className="p-10">
      {data &&
        data.map((value) => {
          return (
            <div key={value.id}>
              <div className="flex justify-between gap-2 items-center">
                <div className="flex text-lg font-medium items-center gap-2">
                  <div>{value.icon}</div>
                  <p>{value.platform}</p>
                </div>
                <a href={value.link}>
                  <FaLink />
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Achievements;
