import React from "react";
import Image from "next/image";
import bootstrap from "../public/assets/skills/bootstrap.png"
import css from "../public/assets/skills/css.png"
import firebase from "../public/assets/skills/firebase.png"
import git from "../public/assets/skills/git.png"
import github from "../public/assets/skills/github.png"
import html from "../public/assets/skills/html.png"
import javascript from "../public/assets/skills/javascript.png"
import nextjs from "../public/assets/skills/nextjs.png"
import react from "../public/assets/skills/react.png"
import reactnative from "../public/assets/skills/reactnative.png"
import redux from "../public/assets/skills/redux.png"
import tailwind from "../public/assets/skills/tailwind.png"

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 dark:bg-gray-800">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-teal-600">
          Skills
        </p>
        <h2 className="py-4 dark:text-white">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image
                  src={html}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-white">HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image
                  src={css}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-white">CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image
                  src={javascript}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-white">JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image
                  src={react}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-white">React Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image
                  src={reactnative}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-white">React Native</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image
                  src={nextjs}
                  alt="/"
                  width={64}
                  height={64}
                  className="dark:bg-white rounded-[50%]"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-white">Next Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image
                  src={git}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-white">GIT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image
                  src={github}
                  alt="/"
                  width={64}
                  height={64}
                  className="dark:bg-white rounded-[50%]"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-white">GitHub</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image
                  src={firebase}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-white">Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image
                  src={tailwind}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-white">Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image
                  src={bootstrap}
                  alt="/"
                  width={64}
                  height={64}
                  className="dark:bg-white rounded-xl"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-white">Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image
                  src={redux}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="dark:text-white">Redux</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
