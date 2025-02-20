import type { Metadata } from "next";
import { MdVerified } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { SiApplemusic } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io5";
import Button from "./components/Button";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import "./globals.css";
import LeetCodeCard from "./components/Leetcode";

export const metadata: Metadata = {
  title: "Anubhav Ghosh - Full Stack Developer",
  description: "Portfolio of Anubhav Ghosh, Full Stack Developer specializing in MERN stack and ReScript.",
  keywords: "Anubhav Ghosh, full stack developer, MERN stack, ReScript, Next.js, web development, Juspay",
  openGraph: {
    title: "Anubhav Ghosh - Full Stack Developer",
    description: "Portfolio of Anubhav Ghosh, showcasing web development projects and skills.",
    type: "website",
    url: "https://anubhavghosh.vercel.app/",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D03AQFr8hKX8UZSag/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709994469261?e=1745452800&v=beta&t=y1UbiNIeLgLxNACz41m8yONaYMi6xeI6rLe-T3w1ZxY", // Change this
        width: 1200,
        height: 630,
        alt: "Anubhav Ghosh",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div className="flex gap-2 md:gap-0 md:flex-row flex-col p-2 md:p-10 text-black w-screen justify-between">
          <div className="overflow-y-auto h-screen [&::-webkit-scrollbar]:hidden md:w-[50%] border border-r-1 rounded-l-lg rounded-r-lg md:rounded-r-none p-4 md:p-10">
            {/* left */}
            <div className="flex flex-col gap-2">
              <a href="https://anubhavghosh.vercel.app/">https://anubhavghosh.vercel.app/</a>
              <div className="flex items-center gap-2">
                <p className="text-4xl font-semibold">Anubhav Ghosh</p>
                <MdVerified className="text-2xl font-semibold" />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg">Currently coding</p>
                <IoCodeSlash className="text-lg" />
                <p className="text-lg">with</p>
                <SiApplemusic className="text-lg" />
              </div>
              <div>
                <p>
                  Hey 👋 Anubhav here! I am a student and Intern at Juspay. I
                  build full stack web applications
                </p>
              </div>
              <div className="flex flex-wrap h-16 items-center gap-2">
                <Button className="bg-black border hover:bg-white hover:text-black transition-all text-white font-medium px-2 py-1 rounded-md">
                  <a href="https://www.youtube.com/@AnubhavGhosh03" target="_blank">
                    Youtube
                  </a>
                </Button>
                <Button className="border font-medium px-2 py-1 rounded-md">
                  <a href="" target="_blank">
                    Resume
                  </a>
                </Button>
                <Button className="border font-medium px-2 py-2 rounded-md">
                  <a href="https://github.com/Anubhav-Ghosh1" target="_blank">
                    <FaGithub />
                  </a>
                </Button>
                <Button className="border font-medium px-2 py-2 rounded-md">
                  <a href="https://www.youtube.com/@AnubhavGhosh03" target="_blank">
                    <FaYoutube />
                  </a>
                </Button>
                <Button className="border font-medium px-2 py-2 rounded-md">
                  <a href="https://www.linkedin.com/in/anubhav-ghosh11/" target="_blank">
                    <FaLinkedin />
                  </a>
                </Button>
                <Button className="border font-medium px-2 py-2 rounded-md">
                  <a href="mailto:iamanubhav11@gmail.com">
                    <MdMailOutline />
                  </a>
                </Button>
                <Button className="border font-medium px-2 py-2 rounded-md">
                  <a href="https://x.com/guywhocodess" target="_blank">
                    <IoLogoTwitter />
                  </a>
                </Button>
              </div>
            </div>
            <Skills />
            <LeetCodeCard />
          </div>
          <div className="overflow-y-auto border border-l-2 md:border-l-0 rounded-l-lg md:rounded-l-none rounded-r-lg md:w-[50%] h-screen">
            {/* right */}
            <Navbar />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
