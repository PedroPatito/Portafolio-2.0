import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='dark:bg-gray-800'>
      <Head />
      <body className='dark scrollbar scrollbar-thumb-teal-600 scrollbar-rounded-full scrollbar-medium scrollbar-rounded-edge scrollbar-track-[#d1d4d6] '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
