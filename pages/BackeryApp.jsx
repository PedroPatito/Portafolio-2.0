import Image from "next/image";
import React from "react";
import backerecommerce from "../public/assets/projects/backery-e-commerce.png"
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const Property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image className="absolute z-1" src={backerecommerce} fill alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2>The baker society</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className=" my-2">Project</p>
          <h2 className=" my-2">Overview</h2>
          <p className=" my-2">
          An e-commerce website specialized on selling backing equipment. The technologies used were JavaScript, React, Bootstrap, and Firebase.
          </p>
          <Link href="https://proyecto-baker-e-comerce.web.app/">
          <button  className="px-8 py-2 mt4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/PedroPatito/Baker-eComerce">
          <button className="px-8 py-2 mt4">Code</button>
          </Link>
          
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"/> React Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"/> Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"/> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
            <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Property;
