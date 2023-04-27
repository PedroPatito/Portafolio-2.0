/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

const Main = () => {
function mailPopOver() {
    return (
      <Popover
        animate={{
          mount: { scale: 1, y: 150 },
          unmount: { scale: 0, y: 25 },
        }}
        
      >
        <PopoverHandler>
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-200 dark:shadow-md">
            <AiOutlineMail size={25} className="dark:text-teal-400" />
          </div>
        </PopoverHandler>
        <PopoverContent className="bg-#ecf0f3 dark:text-white">
          pedro.patito@hotmail.com
        </PopoverContent>
      </Popover>
    );
  }
  

  return (
    <div id="home" className="w-full h-screen text-center dark:bg-gray-800">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 font-bold dark:text-white">
            Hi, i'm{" "}
            <span className="text-teal-600 font-bold">Pedro Patito</span>
          </h1>
          <h1 className="py-2 text-gray-700 font-bold dark:text-white">
            {" "}
            A web and mobile developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto font dark:text-white">
            I'm a web and mobile app developer, I use JavaScript with React and
            React Native. I'm looking to be part of a team that allows me to
            grow as a developer, to which I can contribute with dedication and
            thus, improve my technical and soft skills based on the challenges
            that arise.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/pedro-patito/" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-200 dark:shadow-md">
                <FaLinkedinIn size={25} className="dark:text-teal-400" />
              </div>
            </Link>
            <Link href="https://github.com/PedroPatito" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-200 dark:shadow-md">
                <FaGithub size={25} className="dark:text-teal-400" />
              </div>
            </Link>
            {/* <Link> */}
            {mailPopOver()}
            {/* </Link> */}
            <Link href="https://drive.google.com/file/d/1ENw6gLvlpLXIF8wFexhZ-OUWZbMquv8S/view?usp=sharing" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-200 dark:shadow-md">
                <BsFillPersonLinesFill
                  size={25}
                  className="dark:text-teal-400 "
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
