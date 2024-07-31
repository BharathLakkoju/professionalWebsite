"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Icon } from "@/components/ui/evervault-card";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { CircleCheck } from "lucide-react";

const skills = [
  {
    name: "Programming Languages",
    details: [
      {
        name: "Java",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000"
            width={16}
            height={16}
            className="size-4 mr-1"
            alt="java"
          />
        ),
      },
      {
        name: "Typescript",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
            width={16}
            height={16}
            alt="typescript"
            className="size-4 mr-1"
          />
        ),
      },
      {
        name: "HTML5",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="html"
          />
        ),
      },
      {
        name: "CSS3",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="css"
          />
        ),
      },
    ],
  },
  {
    name: "Frameworks & Libraries",
    details: [
      {
        name: "React",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="react"
          />
        ),
      },
      {
        name: "Next.js",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
            className="size-4 mr-1"
            width={20}
            height={20}
            alt="next.js"
          />
        ),
      },
      {
        name: "Tailwind CSS",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="tailwindcss"
          />
        ),
      },
    ],
  },
  {
    name: "Databases",
    details: [
      {
        name: "SQL / MySQL",
        Icon: (
          <Image
            src="https://img.icons8.com/color/48/000000/mysql-logo.png"
            className="size-4 mr-1"
            alt="mysql"
            width={300}
            height={300}
          />
        ),
      },
      {
        name: "PostgreSQL",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
            width={16}
            height={16}
            alt="postgresql"
            className="size-4 mr-1"
          />
        ),
      },
    ],
  },
  {
    name: "Tools & Technologies",
    details: [
      {
        name: "Git",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
            width={16}
            height={16}
            alt="git"
            className="size-4 mr-1"
          />
        ),
      },
      {
        name: "Node.js",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
            alt="NodeJS"
            width={16}
            height={16}
            className="size-4 mr-1"
          />
        ),
      },
      {
        name: "REST APIs",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=45057&format=png&color=000000"
            className="size-4 mr-1"
            alt="python"
            width={300}
            height={300}
          />
        ),
      },
    ],
  },
  {
    name: "Interests",
    details: [
      {
        name: "Data Structures & Algorithms",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=JHNvegaTfHjR&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="data structures and algorithms"
          />
        ),
      },
      {
        name: "Full Stack Development",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=VZfYlLgRZtdK&format=png&color=000000"
            width={16}
            height={16}
            className="size-4 mr-1"
            alt="java"
          />
        ),
      },
      {
        name: "Object Oriented Programming",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=Qr2SiTYGyj82&format=png&color=000000"
            width={16}
            height={16}
            className="size-4 mr-1"
            alt="java"
          />
        ),
      },
      {
        name: "Software Development",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=0fGIa9F35rk7&format=png&color=000000"
            width={16}
            height={16}
            className="size-4 mr-1"
            alt="java"
          />
        ),
      },
    ],
  },
];

export default function HomePage() {
  const [isHovered1, setIsHovered1] =
    React.useState<React.RefObject<HTMLDivElement>>();
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const textRef1 = React.useRef<HTMLDivElement>(null);
  const textRef2 = React.useRef<HTMLDivElement>(null);
  const textRef3 = React.useRef<HTMLDivElement>(null);
  const textRef4 = React.useRef<HTMLDivElement>(null);
  const textRef5 = React.useRef<HTMLDivElement>(null);
  const videoRef1 = React.useRef<HTMLVideoElement>(null);
  const videoRef2 = React.useRef<HTMLVideoElement>(null);
  const videoRef3 = React.useRef<HTMLVideoElement>(null);
  const videoRef4 = React.useRef<HTMLVideoElement>(null);
  const videoRef5 = React.useRef<HTMLVideoElement>(null);
  const videoRef6 = React.useRef<HTMLVideoElement>(null);

  const handleCertMouseEnter = (
    e: React.MouseEvent,
    textRef: React.RefObject<HTMLDivElement>
  ) => {
    setIsHovered1(textRef);
    updateCertPosition(e, textRef);
  };

  const handleCertMouseMove = (
    e: React.MouseEvent,
    textRef: React.RefObject<HTMLDivElement>
  ) => {
    updateCertPosition(e, textRef);
  };

  const handleCertMouseLeave = () => {
    setIsHovered1(undefined);
  };

  const updateCertPosition = (
    e: React.MouseEvent,
    textRef: React.RefObject<HTMLDivElement>
  ) => {
    if (textRef.current) {
      const { left, top } = textRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - left,
        y: e.clientY - top,
      });
    }
  };

  const handleVideoMouseEnter = (
    videoRef: React.RefObject<HTMLVideoElement>
  ) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoMouseLeave = (
    videoRef: React.RefObject<HTMLVideoElement>
  ) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <div className="flex justify-center items-center gap-2 text-xl text-zinc-900 dark:text-gray-100 mt-7">
        <span>Full Stack Developer</span>
        <span> | </span>
        <span>Frontend Developer</span>
        <span> | </span>
        <span>Backend Developer</span>
      </div>
      <Separator className="dark:bg-gray-200 bg-gray-900 my-7" />
      {/* Skills */}
      <div className="">
        <span className="font-medium text-xl">Skills</span>
        <div className="flex flex-col gap-2 mt-3 w-full">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col md:flex-row w-full gap-2"
            >
              <span className="font-medium md:min-w-[200px]">{skill.name}</span>
              <div className="flex flex-wrap gap-3">
                {skill.details.map((detail) => (
                  <div
                    key={detail.name}
                    className="flex text-sm items-center justify-center text-gray-900 bg-gray-300 p-1 rounded-sm border dark:text-gray-100 dark:bg-[#262626] dark:border-white/15 border-black/15"
                  >
                    {detail.Icon}
                    <span>{detail.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Separator className="dark:bg-gray-200 bg-gray-900 my-7" />
      {/* Projects */}
      <div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-xl">Projects</span>
          <span className="font-medium hidden lg:flex text-lg">
            (Hover to Preview)
          </span>
          <span className="font-medium flex lg:hidden text-lg">
            (Click to Preview)
          </span>
        </div>
        <div className="mt-3 flex flex-col lg:grid lg:grid-cols-3 gap-5">
          <div
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative"
            onMouseEnter={() => handleVideoMouseEnter(videoRef1)}
            onMouseLeave={() => handleVideoMouseLeave(videoRef1)}
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <div className="bg-center bg-cover h-[20rem] w-full">
              <video
                ref={videoRef1}
                className="object-cover h-full w-full"
                src="/final_doit.mp4"
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold w-fit text-zinc-100 dark:text-gray-100 bg-black mt-3 p-1">
                Task Management App - doit-io
              </span>
              <span className="text-lg lg:text-sm text-zinc-700 dark:text-gray-300 my-2">
                A simple task management app built with Next.js, React, Tailwind
                CSS and PostgreSQL.
              </span>
              <Link
                href="https://doit-io.vercel.app"
                target="_blank"
                className="w-fit"
              >
                <span className="flex items-center justify-start underline underline-offset-4 font-medium">
                  <ArrowTopRightIcon className="size-4 mr-1" />
                  link
                </span>
              </Link>
            </div>
          </div>
          <div
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative"
            onMouseEnter={() => handleVideoMouseEnter(videoRef2)}
            onMouseLeave={() => handleVideoMouseLeave(videoRef2)}
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <div className="bg-center bg-cover h-[20rem] w-full">
              <video
                ref={videoRef2}
                className="object-cover h-full w-full"
                src="/final_tChecker.mp4"
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold w-fit text-zinc-100 dark:text-gray-100 bg-black mt-3 p-1">
                T&C Privacy Policy Checking Browser Extension - T&Checker
              </span>
              <span className="text-lg lg:text-sm text-zinc-700 dark:text-gray-300 my-2">
                A terms and conditions checking web browser extension.
              </span>
              <Link
                href="https://github.com/bharathlakkoju/T_Checker"
                target="_blank"
              >
                <span className="flex items-center justify-start underline underline-offset-4 font-medium">
                  <ArrowTopRightIcon className="size-4 mr-1" />
                  link
                </span>
              </Link>
            </div>
          </div>
          <div
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative"
            onMouseEnter={() => handleVideoMouseEnter(videoRef3)}
            onMouseLeave={() => handleVideoMouseLeave(videoRef3)}
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <div className="bg-center bg-cover h-[20rem] w-full">
              <video
                ref={videoRef3}
                className="object-cover h-full w-full"
                src="/final_aio.mp4"
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold w-fit text-zinc-100 dark:text-gray-100 bg-black mt-3 p-1">
                API based Movies and Songs Recommendation App
              </span>
              <span className="text-lg lg:text-sm text-zinc-700 dark:text-gray-300 my-2">
                A simple movies and songs recommendations using Django Rest
                Framework, tmdb API and spotify API.
              </span>
              <Link
                href="https://aio-6mmt.onrender.com"
                target="_blank"
                className="w-fit"
              >
                <span className="flex items-center justify-start underline underline-offset-4 font-medium">
                  <ArrowTopRightIcon className="size-4 mr-1" />
                  link
                </span>
              </Link>
            </div>
          </div>
          <div
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative"
            onMouseEnter={() => handleVideoMouseEnter(videoRef4)}
            onMouseLeave={() => handleVideoMouseLeave(videoRef4)}
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <div className="bg-center bg-cover h-[20rem] w-full">
              <video
                ref={videoRef4}
                className="object-cover h-full w-full"
                src="/final_swapi.mp4"
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold w-fit text-zinc-100 dark:text-gray-100 bg-black mt-3 p-1">
                API based StarWars Data showcase app
              </span>
              <span className="text-lg lg:text-sm text-zinc-700 dark:text-gray-300 my-2">
                A simple paginated application that displays StarWars data using
                React, Vite.js, Node.js and axios library.
              </span>
              <Link
                href="https://swapitask.netlify.app"
                target="_blank"
                className="w-fit"
              >
                <span className="flex items-center justify-start underline font-medium underline-offset-4">
                  <ArrowTopRightIcon className="size-4 mr-1" />
                  link
                </span>
              </Link>
            </div>
          </div>
          <div
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative"
            onMouseEnter={() => handleVideoMouseEnter(videoRef5)}
            onMouseLeave={() => handleVideoMouseLeave(videoRef5)}
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <div className="bg-center bg-cover h-[20rem] w-full">
              <video
                ref={videoRef5}
                className="object-cover h-full w-full"
                src="/final_hcf.mp4"
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold w-fit text-zinc-100 dark:text-gray-100 bg-black mt-3 p-1">
                Weather Forecast using city names
              </span>
              <span className="text-lg lg:text-sm text-zinc-700 dark:text-gray-300 my-2">
                A simple application that displays weather forecast on city name
                using HTML5, CSS3, JavaScript and OpenWeatherMap API.
              </span>
              <Link
                href="https://hcfweather.netlify.app"
                target="_blank"
                className="w-fit"
              >
                <span className="flex items-center justify-start underline underline-offset-4 font-medium">
                  <ArrowTopRightIcon className="size-4 mr-1" />
                  link
                </span>
              </Link>
            </div>
          </div>
          <div
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative"
            onMouseEnter={() => handleVideoMouseEnter(videoRef6)}
            onMouseLeave={() => handleVideoMouseLeave(videoRef6)}
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <div className="bg-center bg-cover h-[20rem] w-full">
              <video
                ref={videoRef6}
                className="object-cover h-full w-full"
                src="/final_potato.mp4"
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold w-fit text-zinc-100 dark:text-gray-100 bg-black mt-3 p-1">
                Fun project to implement physics in web apps
              </span>
              <span className="text-lg lg:text-sm text-zinc-700 dark:text-gray-300 my-2">
                A fun application that makes user play with potatoes using
                React, HTML5, CSS3, JavaScript and Node.js.
              </span>
              <Link
                href="https://potatoloop.netlify.app"
                target="_blank"
                className="w-fit"
              >
                <span className="flex items-center justify-start underline underline-offset-4 font-medium">
                  <ArrowTopRightIcon className="size-4 mr-1" />
                  link
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Separator className="dark:bg-gray-200 bg-gray-900 my-7" />
      {/* Experience */}
      <div className="">
        <span className="font-medium text-xl">Experience</span>
        <div className="mt-3">
          <div className="flex flex-col items-start justify-center mt-3">
            <div className="flex items-start md:items-center flex-col md:flex-row justify-between w-full">
              <span className="font-semibold w-fit bg-black text-gray-100 p-1">
                Developer I - Software Engineering Trainee
              </span>
              <span>4 mo's,&nbsp; April 2024 - Present</span>
            </div>
            <span className="text-zinc-700 dark:text-gray-300 my-2 flex items-center justify-start gap-3">
              <Image
                src="https://etimg.etb2bimg.com/photo/80342670.cms"
                width={28}
                height={28}
                alt="ust"
              />
              UST Global
            </span>
            <span className="text-zinc-600 dark:text-gray-300 flex flex-col">
              <span>
                - Currently in Training on learning Java Software Development.
              </span>
              <span>
                - <span className="font-medium">Highlights:</span> Java, Git,
                SQL.
              </span>
            </span>
          </div>
        </div>
      </div>
      <Separator className="dark:bg-gray-200 bg-gray-900 my-7" />
      {/* Education */}
      <div className="">
        <span className="font-medium text-xl">Education</span>
        <div className="lg:h-[1rem] lg:block hidden">
          <Separator className="dark:bg-purple-500 bg-gradient-to-r from-blue-400 to-green-400 h-1 rounded-full mt-7 w-[calc(100%-8rem)] flex ml-4" />
          <div className="flex items-center justify-around w-full relative z-10 -translate-y-4">
            <CircleCheck className="size-7 text-green-100 bg-green-400 rounded-full" />
            <CircleCheck className="size-7 text-green-100 bg-green-400 rounded-full" />
            <CircleCheck className="size-7 text-green-100 bg-green-400 rounded-full" />
          </div>
        </div>
        <div className="flex">
          <div className="lg:h-[1rem] lg:hidden flex">
            <Separator
              orientation="vertical"
              className="dark:bg-purple-500 bg-gradient-to-b from-blue-400 to-green-400 w-1 rounded-full mt-7 h-[calc(100%-2rem)] flex ml-4"
            />
            <div className="flex flex-col items-center justify-around w-full relative z-10 -translate-x-4">
              <CircleCheck className="size-7 text-green-100 bg-green-400 rounded-full" />
              <CircleCheck className="size-7 text-green-100 bg-green-400 rounded-full" />
              <CircleCheck className="size-7 text-green-100 bg-green-400 rounded-full" />
            </div>
          </div>
          <div className="lg:px-10 flex flex-col lg:flex-row-reverse items-start justify-center">
            <div className="flex flex-col w-[300px] lg:w-[500px] items-start justify-start mt-3 py-5 lg:py-0 lg:mx-auto">
              <div className="flex items-start flex-col justify-between w-full">
                <span>
                  Maharaj Vijayaram Gajapathi Raj College of Engineering
                </span>
                <span>2020 - 2024</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 flex flex-col">
                <span>Bachelor of Technology, Information Technology</span>
                <span className="font-bold text-blue-600 dark:text-emerald-400">
                  CGPA: 8.10
                </span>
              </div>
            </div>
            <div className="flex flex-col lg:ml-32 w-[300px] items-start justify-start mt-3 py-5 lg:py-0 lg:mx-auto">
              <div className="flex flex-col items-start justify-between w-full">
                <span>Sri Chaitanya Jr. College</span>
                <span>2018 - 2020</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 flex flex-col">
                <span className="font-bold text-blue-600 dark:text-emerald-400">
                  CGPA: 9.50
                </span>
              </div>
            </div>
            <div className="flex flex-col lg:ml-20 w-[300px] items-start justify-center mt-3 py-5 lg:py-0 lg:mx-auto">
              <div className="flex flex-col items-start justify-between w-full">
                <span>Sri Chaitanya Techno School</span>
                <span>2017 - 2018</span>
              </div>
              <div className="text-sm  text-gray-600 dark:text-gray-300 flex flex-col">
                <span className="font-bold text-blue-600 dark:text-emerald-400">
                  CGPA: 10.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="dark:bg-gray-200 bg-gray-900 my-7" />
      <div>
        <span className="font-medium text-xl">Certifications</span>
        <div className="lg:flex lg:flex-row-reverse lg:justify-around lg:items-end hidden mt-10">
          <div className="">
            <Image
              width={100}
              height={50}
              className="shadow-lg pointer-events-none"
              src="/wiproTalentNext.png"
              alt="wiproTalentNext"
            />
          </div>
          <div className="-ml-5">
            <Image
              width={100}
              height={50}
              className="shadow-lg pointer-events-none"
              src="/BackendDevelopment.png"
              alt="wiproTalentNext"
            />
          </div>
          <div className="">
            <Image
              width={100}
              height={50}
              className="shadow-lg pointer-events-none"
              src="/AdvancedReact.png"
              alt="wiproTalentNext"
            />
          </div>
          <div className="">
            <Image
              width={100}
              height={50}
              className="shadow-lg pointer-events-none"
              src="/FrontendLibraries.png"
              alt="wiproTalentNext"
            />
          </div>
          <div className="block">
            <Image
              width={100}
              height={50}
              className="shadow-lg pointer-events-none"
              src="/masai.png"
              alt="wiproTalentNext"
            />
          </div>
        </div>
        <div className="flex lg:flex-col gap-3">
          <div className="lg:h-[1rem] lg:block hidden">
            <Separator className="dark:bg-purple-500 bg-gradient-to-r from-orange-400 to-purple-400 h-1 rounded-full mt-7 w-[calc(100%-8rem)] flex ml-4" />
            <div className="flex items-center justify-around w-full relative z-10 -translate-y-4">
              <CircleCheck className="size-7 text-green-100 bg-green-400 rounded-full" />
              <CircleCheck className="size-7 text-green-100 bg-green-400 rounded-full" />
              <CircleCheck className="size-7 text-green-100 bg-green-400 rounded-full" />
              <CircleCheck className="size-7 text-green-100 bg-green-400 rounded-full" />
              <CircleCheck className="size-7 text-green-100 bg-green-400 rounded-full" />
            </div>
          </div>
          <div className="flex lg:hidden">
            <Separator
              orientation="vertical"
              className="dark:bg-purple-500 bg-gradient-to-b from-orange-400 to-purple-400 w-1 rounded-full mt-7 h-[calc(100%-2rem)] flex ml-4"
            />
            <div className="flex flex-col items-center justify-around w-full relative z-10 mt-5 -translate-x-4">
              <CircleCheck className="size-7 text-green-100 bg-blue-400 rounded-full" />
              <CircleCheck className="size-7 mt-24 lg:mt-16 text-blue-100 bg-blue-400 rounded-full" />
              <CircleCheck className="size-7 mt-24 lg:mt-0 text-blue-100 bg-blue-400 rounded-full" />
              <CircleCheck className="size-7 mt-24 lg:mt-0 text-blue-100 bg-blue-400 rounded-full" />
              <CircleCheck className="size-7 mt-24 lg:mt-0 text-blue-100 bg-blue-400 rounded-full" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-start justify-center mt-3 gap-7 lg:gap-5">
            <Link
              href="https://lbh-resume.vercel.app/wiproTalentNext.png"
              target="_blank"
              className="flex flex-col lg:flex-row cursor-pointer gap-3 lg:gap-5"
            >
              <div className="block lg:hidden">
                <Image
                  width={100}
                  height={50}
                  className="shadow-lg pointer-events-none"
                  src="/wiproTalentNext.png"
                  alt="wiproTalentNext"
                />
              </div>
              <div className="flex flex-col items-start justify-center mt-3">
                <span className="">
                  Wipro TalentNext JAVA by{" "}
                  <span className="font-medium">Wipro</span>
                </span>
                <span className="text-gray-500">Oct, 2023</span>
                {textRef1 === isHovered1 && (
                  <div className="absolute w-full h-full flex items-center justify-center"></div>
                )}
              </div>
            </Link>
            <Link
              href="https://lbh-resume.vercel.app/BackendDevelopment.png"
              className="flex flex-col lg:flex-row cursor-pointer gap-5"
            >
              <div className="block lg:hidden">
                <Image
                  width={100}
                  height={50}
                  className="shadow-lg pointer-events-none"
                  src="/BackendDevelopment.png"
                  alt="wiproTalentNext"
                />
              </div>
              <div className="flex flex-col items-start justify-center mt-3">
                <span className="">
                  Backend Development with APIs by{" "}
                  <span className="font-medium">freeCodeCamp</span>
                </span>
                <span className="text-gray-500">Sep, 2023</span>
                {isHovered1 === textRef2 && (
                  <div className="absolute w-full h-full flex items-center justify-center"></div>
                )}
              </div>
            </Link>
            <Link
              href="https://lbh-resume.vercel.app/AdvancedReact.png"
              target="_blank"
              className="flex flex-col lg:flex-row cursor-pointer gap-3 lg:gap-5"
            >
              <div className="block lg:hidden">
                <Image
                  width={100}
                  height={50}
                  className="relative z-10 border border-gray-300 shadow-lg pointer-events-none"
                  src="/AdvancedReact.png"
                  alt="wiproTalentNext"
                />
              </div>
              <div className="flex flex-col items-start justify-center mt-3">
                <span className="">
                  Advanced React by{" "}
                  <span className="font-medium">Coursera</span>
                </span>
                <span className="text-gray-500">Jul, 2023</span>
                {isHovered1 === textRef3 && (
                  <div className="absolute w-full h-full flex items-center justify-center"></div>
                )}
              </div>
            </Link>
            <Link
              href="https://lbh-resume.vercel.app/FrontendLibraries.png"
              className="flex flex-col lg:flex-row cursor-pointer gap-5"
            >
              <div className="block lg:hidden">
                <Image
                  width={100}
                  height={50}
                  className="relative z-10 border border-gray-300 shadow-lg pointer-events-none"
                  src="/FrontendLibraries.png"
                  alt="wiproTalentNext"
                />
              </div>
              <div className="flex flex-col items-start justify-center mt-3">
                <span className="">
                  Frontend Development Libraries by{" "}
                  <span className="font-medium">freeCodeCamp</span>
                </span>
                <span className="text-gray-500">Jul, 2023</span>
                {isHovered1 === textRef4 && (
                  <div className="absolute w-full h-full flex items-center justify-center"></div>
                )}
              </div>
            </Link>
            <Link
              href="https://lbh-resume.vercel.app/masai.png"
              className="flex flex-col lg:flex-row cursor-pointer gap-5"
            >
              <div className="block lg:hidden">
                <Image
                  width={100}
                  height={50}
                  className="shadow-lg pointer-events-none"
                  src="/masai.png"
                  alt="wiproTalentNext"
                />
              </div>
              <div className="flex flex-col items-start justify-center mt-3">
                <span className="">
                  Masai's Part time Web Development by{" "}
                  <span className="font-medium">MasaiSchool</span>
                </span>
                <span className="text-gray-500">Jan, 2023</span>
                {isHovered1 === textRef5 && (
                  <div className="absolute w-full h-full flex items-center justify-center"></div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Separator className="dark:bg-gray-200 bg-gray-900 my-7" />
    </>
  );
}
