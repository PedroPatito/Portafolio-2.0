import React from "react";
import Image from "next/image";
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
                  src="/../public/assets/skills/html.png"
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
                  src="/../public/assets/skills/css.png"
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
                  src="/../public/assets/skills/javascript.png"
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
                  src="/../public/assets/skills/react.png"
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
                  src="/../public/assets/skills/reactnative.png"
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
                  src="/../public/assets/skills/nextjs.png"
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
                  src="/../public/assets/skills/git.png"
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
                  src="/../public/assets/skills/github.png"
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
                  src="/../public/assets/skills/firebase.png"
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
                  src="/../public/assets/skills/tailwind.png"
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
                  src="/../public/assets/skills/bootstrap.png"
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
                  src="/../public/assets/skills/redux.png"
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
