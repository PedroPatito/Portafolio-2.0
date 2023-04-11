/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center dark:bg-gray-800'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <h1 className='py-4 text-gray-700 font-bold dark:text-white'>Hi, i'm <span className='text-teal-600 font-bold'>Pedro</span></h1>
            <h1 className='py-2 text-gray-700 font-bold dark:text-white' > A web and mobile developer</h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto font dark:text-white'>I'm a web and mobile app developer, I use JavaScript with React and React Native. I'm looking to be part of a team that allows me to grow as a developer, to which I can contribute with dedication and thus, improve my technical and soft skills based on the challenges that arise.</p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-200 dark:shadow-md">
                  <FaLinkedinIn size={25} className='dark:text-teal-400'/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-200 dark:shadow-md">
                  <FaGithub size={25} className='dark:text-teal-400'/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-200 dark:shadow-md">
                  <AiOutlineMail size={25} className='dark:text-teal-400'/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-teal-200 dark:shadow-md">
                  <BsFillPersonLinesFill size={25} className='dark:text-teal-400 '/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
