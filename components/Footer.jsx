import Link from 'next/link'
import React from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Footer = () => {
  return (
    <div className='flex justify-center py-12 dark:bg-gray-800 '>
    <Link href='/#home' scroll={false}>
      
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-md dark:shadow-teal-200'>
          <HiOutlineChevronDoubleUp
            className='text-teal-600'
            size={30}
          />
        </div>
    </Link>
  </div>
  )
}

export default Footer
