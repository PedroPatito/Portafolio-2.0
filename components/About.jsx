import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 dark:bg-gray-800">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-teal-600">
            About
          </p>
          <h2 className="py-4 dark:text-white">Who I Am</h2>
          <p className="py-2 text-gray-600 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            blanditiis libero molestiae fuga quibusdam explicabo. Qui dolorum
            excepturi beatae aperiam, consequuntur aut, ad iure ut rerum
            accusantium molestias! Neque, beatae commodi magnam nostrum debitis
            excepturi aperiam voluptatibus accusamus amet. Nesciunt doloribus
            cum soluta placeat minima sapiente iusto quam saepe autem numquam.
            Provident saepe distinctio velit nesciunt repellat obcaecati ea
            corporis, ipsam placeat odit. Molestias nobis ducimus delectus minus
            perferendis.
          </p>
          <p className="py-2 text-gray-600 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aperiam, quasi possimus accusantium, reprehenderit suscipit
            recusandae nam autem, debitis maxime fuga at. Aliquid saepe incidunt
            quos unde reiciendis adipisci dolorum sint eius asperiores quo cum
            quod maiores consequatur ipsum, accusantium aliquam illo esse
            molestiae fugit. Sunt culpa, nam officia eos saepe alias odit vel
            natus, quis, optio quod? Impedit minima, officia iusto pariatur
            mollitia eligendi culpa ullam deleniti ipsam explicabo deserunt ex
            id voluptate reprehenderit consequatur architecto laboriosam.
            Aliquam odio nam velit voluptates harum consequuntur saepe labore
            earum, ducimus assumenda blanditiis, id, magnam autem error ullam
            voluptatibus dolore reprehenderit doloremque!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer dark:text-white">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-md">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
