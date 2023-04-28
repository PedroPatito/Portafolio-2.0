/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProjectItem from "./ProjectItem";
import backercommerce from "../public/assets/projects/backery-e-commerce.png";
import moviex from "../public/assets/projects/moviex.png";
import cripto from "../public/assets/projects/cripto.png";
import chatapp from "../public/assets/projects/chatapp.png";
const Projects = () => {
  return (
    <div
      id="projects"
      className=" inline  w-full h-[100vh] py-20 dark:bg-gray-800"
    >
      <div className="flex">
        <div className="max-w-[1240px] mx-auto px-2 ">
          <p className="text-xl tracking-widest uppercase text-teal-600 mt-10 pt-10">
            Projects
          </p>
          <h2 className="py-4 dark:text-white">what i've built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Moviex"
              backgroundImage={moviex}
              projectUrl="/Moviex"
              tecnologies="ReactJs | firebase | redux "
              description=" A movie streaming application where a main window displays a list of movies fetched from an API. Users can register and log in to save their favorite movies."
              demo="https://web-de-peliculas.web.app/"
              code="https://github.com/PedroPatito/movie-app"
              disabled={false}
            />
            <ProjectItem
              title="The backer society"
              backgroundImage={backercommerce}
              projectUrl="/BackeryApp"
              tecnologies="reactJs | firebase | bootstrap"
              description=" An e-commerce website specialized on selling backing equipment. The technologies used were JavaScript, React, Bootstrap, and Firebase."
              demo="https://proyecto-baker-e-comerce.web.app/"
              code="https://github.com/PedroPatito/Baker-eComerce"
              disabled={false}
            />
            <ProjectItem
              title="Cripto app"
              backgroundImage={cripto}
              projectUrl="/CryptoApp"
              tecnologies="HTML | CSS | JavaScript |bootstrap"
              description=" This application uses the CoinGecko API. It has sections for calculating conversions between different cryptocurrencies, calculating loans, and a watchlist."
              demo="https://pedropatito.github.io/Conversor-cripto-y-calculo-de-prestamos./"
              code="https://github.com/PedroPatito/Conversor-cripto-y-calculo-de-prestamos."
              disabled={false}
            />
            <ProjectItem
              title="ChatApp"
              backgroundImage={chatapp}
              projectUrl="/ChatApp"
              tecnologies="React Native | firebase | sqlite"
              description=" This is an application that consists of a group chat and a forum where users can make posts with a title, an image, and a paragraph."
              demo=""
              code="https://github.com/PedroPatito/Chat-app-RN"
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
