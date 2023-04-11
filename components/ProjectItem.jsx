import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({title, backgroundImage, projectUrl, tecnologies}) => {
  return (
    <div className="relative flex items-center justify-center h-fit w-fit shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-teal-600 to-teal-400 dark:shadow-gray-700">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImage}
        alt="project 1"
        width={450}
        height={450}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2Xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-2 pt-2 text-white text-center">{tecnologies}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
