import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactImg from "../public/assets/contact.jpg";
import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";

const Contact = () => {

  function mailPopOver() {
    return (
      <Popover
        animate={{
          mount: { scale: 1, y: 150 },
          unmount: { scale: 0, y: 25 },
        }}
        
      >
        <PopoverHandler>
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-md dark:shadow-teal-200 dark:text-teal-400">
            <AiOutlineMail className="dark:text-teal-400" />
          </div>
        </PopoverHandler>
        <PopoverContent className="bg-#ecf0f3 dark:text-white">
          pedro.patito@hotmail.com
        </PopoverContent>
      </Popover>
    );
  }
  

  return (
    <div
      id="contact"
      className="w-full h-screen lg:h-screen dark:bg-gray-800 inline"
    >
      <div className="max-w-[1240px] m-auto px-2 py-10 w-full dark:bg-gray-800">
        <p className="text-xl tracking-widest uppercase text-teal-600 mt-10">
          Contact
        </p>
        <h2 className="py-2 dark:text-white">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8  mb-16">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 dark:shadow-gray-700">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                  height={300}
                  width={300}
                />
              </div>
              <div>
                <h2 className="py-2 dark:text-white">Pedro Patito</h2>
                <p className="dark:text-white">Front-End Developer</p>
                <p className="py-4 dark:text-white">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 dark:text-white">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between py-4">
                  <Link href="https://www.linkedin.com/in/pedro-patito/" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-md dark:shadow-teal-200 dark:text-teal-400">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href="https://github.com/PedroPatito" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-md dark:shadow-teal-200 dark:text-teal-400">
                      <FaGithub />
                    </div>
                  </Link>
                  {mailPopOver()}
                  <Link href="https://drive.google.com/file/d/1ENw6gLvlpLXIF8wFexhZ-OUWZbMquv8S/view?usp=sharing" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-md dark:shadow-teal-200 dark:text-teal-400">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:shadow-gray-700">
            <div className="p-4">
              <form
                action="https://getform.io/f/3cf2528c-08f9-48c0-966f-6e349c2c602c"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-white">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-600 dark:border-gray-600 dark:text-white"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-white">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-600 dark:border-gray-600 dark:text-white"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-white">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-600 dark:border-gray-600 dark:text-white"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-white">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-600 dark:border-gray-600 dark:text-white"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-white">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 dark:bg-gray-600 dark:border-gray-600 dark:text-white"
                    rows="5"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 dark:shadow-gray-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
