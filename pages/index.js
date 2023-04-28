import Head from "next/head";
import Main from "@/components/Main";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedro Patito | Front-end Developer</title>
        <meta name="description" content="front-end oriented portfolio, here i show you my best's projects" />
        <meta name="keywords" content="desarrollo web, portafolio, personalizado, html, css, bootstrap, sass, a pedido, diseño, interface, página, diseño responsive, custom web, presupuestos, planificacion, sitio, React, React Native, JavaScript, Firebase, Tailwind, Next, git, github, redux, mobile, front-end, developer, web development, app, web app,"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/customFav.png" />
      </Head>
      <div className="dark:bg-gray-800 overflow-hidden">
        <Main />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
