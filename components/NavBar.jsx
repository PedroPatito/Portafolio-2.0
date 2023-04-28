import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  BsFillMoonStarsFill, BsFillSunFill
} from "react-icons/bs";
import { useRouter } from "next/router";
import UseColorMode from "../Hooks/UseColorMode";
import ClientOnly from "./ClientOnly";
import navBarImage from "../public/assets/navbarimage.png"

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  const [bgDark, setBgDark] = useState(true);
  
  const [colorMode, setColorMode] = UseColorMode();

  useEffect(() => {
    if (
      router.asPath === "/BackeryApp" ||
      router.asPath === "/Moviex" ||
      router.asPath === "/ChatApp" ||
      router.asPath === "/CryptoApp"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
      setBgDark(false);
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
      setBgDark(true);
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
  
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] dark:shadow-gray-700 dark:shadow-md "
          : "fixed w-full h-20 z-[100] "   
      }
    >
      <div
        className={ bgDark
          ? " flex justify-between items-center w-full h-full px-2 2xl:px-16 dark:bg-gray-800"
          : " flex justify-between items-center w-full h-full px-2 2xl:px-16 "}
      >
        <Link href="/#home" scroll={false}>
          <Image
            src={navBarImage}
            width="70"
            height="70"
            alt="/"
          />
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex justify-center items-center">
            <ClientOnly>
            <div
              onClick={() => {
                setColorMode(colorMode === "light" ? "dark" : "light");
              }}
              className="mr-4 transition ease-in-out delay-150 hover:-translate-y-1 duration-100"
            >
              {colorMode === "light" ? <BsFillMoonStarsFill className=" text-gray-800 text-[24px]  cursor-pointer" /> :<BsFillSunFill className="text-white cursor-pointer text-[26px]"/>}
              
            </div>
            </ClientOnly>
            <Link href="/#home" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b border-b-neutral-400 dark:text-white">
                Home
              </li>
            </Link>
            {/* <Link href="/#about" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b border-b-neutral-400 dark:text-white">
                About
              </li>
            </Link> */}
            <Link href="/#skills" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b border-b-neutral-400 dark:text-white">
                skills
              </li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b border-b-neutral-400 dark:text-white">
                Projects
              </li>
            </Link>
            <Link href="/#contact" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b border-b-neutral-400 dark:text-white">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden dark:text-white">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] md:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-200 dark:bg-gray-800"
              : "fixed left-[-100%] top-0 ease-in duration-200"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assets/navbarimage.png"
                  alt="/"
                  height={50}
                  width={50}
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-gray-700"
              >
                <AiOutlineClose size={25} className="dark:text-white" />
              </div>
            </div>
            <div></div>
          </div>
          <div className="py-4 flex flex-col mt-4">
            <ul>
            <div
              onClick={() => {
                setColorMode(colorMode === "light" ? "dark" : "light");
              }}
              className="mr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <BsFillMoonStarsFill className=" text-gray-800 text-[20px]  cursor-pointer dark:text-white m-2" />
            </div>
              <Link href="/#home" scroll={false}>
                <li className="py-4 text-sm m-2 dark:text-white">Home</li>
              </Link>
              {/* <Link href="/#about" scroll={false}>
                <li className="py-4 text-sm m-2 dark:text-white">About</li>
              </Link> */}
              <Link href="/#skills" scroll={false}>
                <li className="py-4 text-sm m-2 dark:text-white">skills</li>
              </Link>
              <Link href="/#projects" scroll={false}>
                <li className="py-4 text-sm m-2 dark:text-white">Projects</li>
              </Link>
              <Link href="/#contact" scroll={false}>
                <li className="py-4 text-sm m-2 dark:text-white">Contact</li>
              </Link>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default NavBar;
