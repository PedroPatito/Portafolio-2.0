/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProjectItem from "./ProjectItem";
import backercommerce from "../public/assets/projects/backery-e-commerce.png"
import moviex from "../public/assets/projects/moviex.png"
import cripto from "../public/assets/projects/cripto.png"
import chatapp from "../public/assets/projects/chatapp.png"
const Projects = () => {
  return (
    <div id="projects" className="w-full h-[100vh] py-20">
      <div className="max-w-[1240px] mx-auto px-2 ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] mt-10">
          Projects
        </p>
        <h2 className="py-4">what i've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Moviex"
            backgroundImage={moviex}
            projectUrl="/Moviex"
            tecnologies="ReactJs | firebase | redux "
          />
          <ProjectItem
            title="The backer society"
            backgroundImage={backercommerce}
            projectUrl="/BackeryApp"
            tecnologies="reactJs | firebase"
          />
          <ProjectItem
            title="Cripto app"
            backgroundImage={cripto}
            projectUrl="/CryptoApp"
            tecnologies="HTML | CSS | JavaScript"
          />
          <ProjectItem
            title="ChatApp"
            backgroundImage={chatapp}
            projectUrl="/ChatApp"
            tecnologies="React Native | firebase | sqlite"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
