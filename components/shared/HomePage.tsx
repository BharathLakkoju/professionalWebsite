"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Icon } from "@/components/ui/evervault-card";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

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
            <div key={skill.name} className="flex w-full gap-2">
              <span className="font-medium min-w-[200px]">{skill.name}</span>
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
      <div>
        <span className="font-medium text-xl">Projects</span>
        <div className="mt-3 flex flex-col gap-5">
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <div className="bg-[url(/final_doit.gif)] backdrop:opacity-75 bg-cover h-[20rem] w-full"></div>
            <div className="flex flex-col">
              <span className="text-xl font-bold w-fit text-zinc-100 dark:text-gray-100 bg-black mt-3 p-1">
                Task Management App - doit-io
              </span>
              <span>
                A simple task management app built with Next.js, React, Tailwind
                CSS and PostgreSQL.
              </span>
              <Link href="https://doit-io.vercel.app" target="_blank">
                <span className="flex items-center justify-start underline font-bold">
                  <ArrowTopRightIcon className="size-4 mr-1" />
                  link
                </span>
              </Link>
            </div>
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <div className="bg-[url(/final_tChecker.gif)] backdrop:opacity-75 bg-cover h-[20rem] w-full"></div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold w-fit text-zinc-100 dark:text-gray-100 bg-black mt-3 p-1">
                T&C Privacy Policy Checking Browser Extension - T&Checker
              </span>
              <span>
                A terms and conditions checking web browser extension.
              </span>
              <Link
                href="https://github.com/bharathlakkoju/T_Checker"
                target="_blank"
              >
                <span className="flex items-center justify-start underline font-bold">
                  <ArrowTopRightIcon className="size-4 mr-1" />
                  link
                </span>
              </Link>
            </div>
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <div className="bg-[url(/final_aio.gif)] backdrop:opacity-75 bg-cover h-[20rem] w-full"></div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold w-fit text-zinc-100 dark:text-gray-100 bg-black mt-3 p-1">
                API based Movies and Songs Recommendation App
              </span>
              <span>
                A simple movies and songs recommendations using Django Rest
                Framework, tmdb API and spotify API.
              </span>
              <Link href="https://aio-6mmt.onrender.com" target="_blank">
                <span className="flex items-center justify-start underline font-bold">
                  <ArrowTopRightIcon className="size-4 mr-1" />
                  link
                </span>
              </Link>
            </div>
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <div className="bg-[url(/final_swapi.gif)] backdrop:opacity-75 bg-cover h-[20rem] w-full"></div>
            <div className="flex flex-col">
              <span className="text-xl font-bold w-fit text-zinc-100 dark:text-gray-100 bg-black mt-3 p-1">
                API based StarWars Data showcase app
              </span>
              <span>
                A simple paginated application that displays StarWars data using
                React, Vite.js, Node.js and axios library.
              </span>
            </div>
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <div className="bg-[url(/final_hcf.gif)] backdrop:opacity-75 bg-cover h-[20rem] w-full"></div>
            <div className="flex flex-col">
              <span className="text-xl font-bold w-fit text-zinc-100 dark:text-gray-100 bg-black mt-3 p-1">
                Weather Forecast using city names
              </span>
              <span>
                A simple application that displays weather forecast on city name
                using HTML5, CSS3, JavaScript and OpenWeatherMap API.
              </span>
            </div>
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full mx-auto p-4 relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <div className="bg-[url(/final_potato.gif)] backdrop:opacity-75 bg-cover h-[20rem] w-full"></div>
            <div className="flex flex-col">
              <span className="text-xl font-bold w-fit text-zinc-100 dark:text-gray-100 bg-black mt-3 p-1">
                Fun project to implement physics in web apps
              </span>
              <span>
                A fun application that makes user play with potatoes using
                React, HTML5, CSS3, JavaScript and Node.js.
              </span>
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
              <span className="font-semibold">
                Salesforce Developer Virtual Internship
              </span>
              <span>May 2023 - July 2023</span>
            </div>
            <span>SmartInternz</span>
            <span>
              Gained experience on developing Salesforce content management and
              development of LWC and implement Apex. Completed Salesforce
              Developer SuperSet with 13 SuperBadges - 80,600 Points - 68 Badges
              - Expeditioner Rank
            </span>
          </div>
        </div>
      </div>
      <Separator className="dark:bg-gray-200 bg-gray-900 my-7" />
      {/* Education */}
      <div className="">
        <span className="font-medium text-xl">Education</span>
        <div className="flex flex-col items-start justify-center mt-3">
          <div className="flex items-start md:items-center flex-col md:flex-row justify-between w-full">
            <span>Maharaj Vijayaram Gajapathi Raj College of Engineering</span>
            <span>2020 - 2024</span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 flex flex-col">
            <span>Bachelor of Technology, Information Technology</span>
            <span>CGPA: 8.10</span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center mt-3">
          <div className="flex items-center justify-between w-full">
            <span>Sri Chaitanya Jr. College</span>
            <span>2018 - 2020</span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 flex flex-col">
            <span>CGPA: 9.50</span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center mt-3">
          <div className="flex items-center justify-between w-full">
            <span>Sri Chaitanya Techno School</span>
            <span>2017 - 2018</span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 flex flex-col">
            <span>CGPA: 10.0</span>
          </div>
        </div>
      </div>
      <Separator className="dark:bg-gray-200 bg-gray-900 my-7" />
      <div>
        <span className="font-medium text-xl">Certifications</span>
        <div>
          <div className="flex flex-col items-start justify-center mt-3">
            <span className="">
              Wipro TalentNext JAVA by{" "}
              <span className="font-medium">Wipro</span>
            </span>
            <span className="text-gray-500">Oct, 2023</span>
          </div>
          <div className="flex flex-col items-start justify-center mt-3">
            <span className="">
              Backend Development with APIs by{" "}
              <span className="font-medium">freeCodeCamp</span>
            </span>
            <span className="text-gray-500">Sep, 2023</span>
          </div>
          <div className="flex flex-col items-start justify-center mt-3">
            <span className="">
              Advanced React by <span className="font-medium">Coursera</span>
            </span>
            <span className="text-gray-500">Jul, 2023</span>
          </div>
          <div className="flex flex-col items-start justify-center mt-3">
            <span className="">
              Frontend Development Libraries by{" "}
              <span className="font-medium">freeCodeCamp</span>
            </span>
            <span className="text-gray-500">Jul, 2023</span>
          </div>
          <div className="flex flex-col items-start justify-center mt-3">
            <span className="">
              Masai's Part time Web Development by{" "}
              <span className="font-medium">MasaiSchool</span>
            </span>
            <span className="text-gray-500">Jan, 2023</span>
          </div>
        </div>
      </div>
      <Separator className="dark:bg-gray-200 bg-gray-900 my-7" />
    </>
  );
}
