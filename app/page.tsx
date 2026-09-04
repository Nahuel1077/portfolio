'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import 'animate.css';

export default function Home() {
  const [language, setLanguage] = useState("Spanish");
  const [current, setCurrent] = useState(0);
  const [animation, setAnimation] = useState("animate__fadeIn");
  const works = [
      {id:0, title:"Medixperts", image:"/img/medixperts.jpg", descriptionEN:"Website for online medical interpretation courses.", descriptionES:"Sitio web para una plataforma online de cursos de interpretación médica. Incluidas prácticas y tests.", link:"https://www.app.vercel.medixperts"},
      {id:1, title:"Altos de Lagunitas", image:"/img/altosdelagunitas.jpg", descriptionEN:"Website for a cabin complex located in Villa General Belgrano, Córdoba.", descriptionES:"Sitio web para un complejo de cabañas ubicado en Villa General Belgrano, Córdoba.", link:"https://www.altosdelagunitas.com"},
      {id:2, title:"SuMuebles", image:"/img/sumuebles.jpg", descriptionEN:"Website for a carpentry fabric, specialized on kitchens, living rooms, banitories, and bedroom furniture.", descriptionES:"Sitio web para una fábrica de carpintería, especializados en muebles de cocina, living, baños, y dormitorios.", link:"https://www.sumuebles.com"},
      {id:3, title:"Mobilinova", image:"/img/mobilinova.png", descriptionEN:"Website for a small furniture fabric, specializing in modern and minimalist designs.", descriptionES:"Sitio web para una fábrica de muebles pequeña, especializada en diseños modernos y minimalistas.", link:"https://mobilinova.vercel.app/"},
  ]

  const nextImage = () => {
    setAnimation("animate__fadeOutLeft");  
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % works.length);
      setAnimation("animate__fadeInRight");
    }, 300);
  };

  const prevImage = () => {
    setAnimation("animate__fadeOutRight");
    setTimeout(() => {
      setCurrent(
        (prev) => (prev - 1 + works.length) % works.length
      );
      setAnimation("animate__fadeInLeft");
    }, 300);
  };

  
  return (
    <main className="select-none scroll-smooth">
      <nav className="flex flex-row gap-6 h-[80px] bg-transparent w-full justify-end p-4">
          <Link href="#" onClick={()=>setLanguage("English")}>
            <Image
              src="/flag-us.svg"
              height={60}
              width={60}
              alt="English"
            />
          </Link>
          <Link href="#" onClick={()=>setLanguage("Spanish")}>
            <Image
              src="/flag-argentina.svg"
              height={60}
              width={60}
              alt="Spanish"
            />
          </Link>
        </nav>
      <div id="container" className="flex flex-col flex-1 items-center justify-center xl:items-start font-sans bg-transparent">
        <main id="main" className="flex w-full flex-col gap-12 xl:gap-0 lg:flex-row items-start justify-between 2xl:px-32 lg:py-32">
          <div className="flex flex-col items-center gap-6 w-full text-center py-8 sm:py-0 xl:items-start xl:text-left lg:pl-16 2xl:pl-0 animate__animated animate__bounceInLeft">
            <h1 className="text-3xl xl:max-w-[200px] lg:text-4xl xl:text-6xl font-semibold text-zinc-50">
              {
              language === "Spanish"? 
              ("Hola, soy Nahuel Henríquez")
              :
              ("Hi, I'm Nahuel Henríquez")}
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-200 ">
              {language === "Spanish"? ("Desarrollador Web"):("Web Developer")}
            </p>
          </div>
          <section id="works" className="flex w-full flex-col items-center justify-between md:pb-32 gap-8 lg:gap-12 animate__animated animate__fadeIn">
            <div className="w-full text-center">
              <h1 className="text-4xl">{language === "Spanish"? ("Proyectos"):("Projects")}</h1>
              <p>{language === "Spanish"? ("Mira en lo que he trabajado"):("Take a look at what I've done")}</p>
            </div>
            <div className="flex-row gap-4 items-center justify-center w-max-[800px] w-full lg:w-[800px] flex border-[23px] border-black text-black lg:rotate-[2deg] bg-white">
              <div className="flex flex-col items-center w-full h-auto relative overflow-hidden lg:p-[40px]">
                <Image
                  width={800}
                  height={430}
                  src={works[current].image}
                  alt={`Imagen ${current + 1}`}
                  className={`w-full lg:h-[400px] animate__animated ${animation} object-scale-down`}
                  id={`Imagen ${current + 1}`}
                />

                <h1 className="text-2xl">{works[current].title}</h1>
                <h6 className="lg:w-[600px] text-center">{language === "Spanish"? (works[current].descriptionES):(works[current].descriptionEN)}</h6>
                <Link href={works[current].link} className="text-blue-500 underline hover:text-black hover:no-underline">{works[current].link.replace("https://", "")}</Link>
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 px-4 py-2 rounded hover:bg-white shadow"
                >
                  ◀
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 px-4 py-2 rounded hover:bg-white shadow"
                >
                  ▶
                </button>
              </div>
            </div>
            {/* <div className="flex flex-col items-center gap-4 p-4">
              {works.map((i)=>(
                <div key={i.id} className="w-full lg:hidden border-2 border-zinc-400 gap-2 text-center rounded-2xl flex flex-col justify-between bg-[#00000063]">
                  <Image
                  width={800}
                  height={400}
                  src={i.image}
                  alt={`Imagen ${i}`}
                  className={`w-full object-cover rounded-t-2xl`}
                  id={`Imagen ${i}`}
                  />
                <h1 className="text-lg">{i.title}</h1>
                <h6 className="w-full text-justify md:text-center p-2">{language === "Spanish"? (i.descriptionES):(i.descriptionEN)}</h6>
                <Link href={i.link} className="text-blue-400 hover:underline">Link</Link>
                </div>
              ))}
            </div> */}
          </section>
        </main>
        <section id="about" className="flex w-full flex-col gap-12 md:gap-0 p-6 lg:flex-row items-center md:items-start justify-between md:py-32 md:px-32">
          <div className="w-full lg:w-1/3 flex flex-col gap-4 md:gap-8 items-center text-justify animate__animated animate__bounceInLeft">
            <h1 className="text-4xl">{language === "Spanish"? ("Quién soy"):("Who I Am")}</h1>
            <h2>{language === "Spanish"? 
            ("Soy desarrollador web Full Stack especializado en el stack MERN. Disfruto trabajando en proyectos desafiantes, resolviendo problemas de forma creativa y construyendo aplicaciones modernas con especial atención al front-end, el diseño y la experiencia de usuario.")
            :
            ("I'm a Full Stack Web Developer specializing in the MERN stack. I enjoy working on challenging projects, solving problems creatively, and building modern applications with a strong focus on front-end development, design, and user experience.")}</h2>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-4 md:gap-8 items-center text-justify animate__animated animate__bounceInRight">
            <h1 className="text-4xl">{language === "Spanish"? ("Qué me gusta"):("What I Enjoy")}</h1>
            <h2>{language === "Spanish"? 
            ("Me apasiona el diseño interactivo y la creación de experiencias dinámicas que resulten intuitivas y atractivas para los usuarios. También siento una gran fascinación por la astrofísica y todo lo relacionado con el espacio; explorar cómo funciona el universo es una fuente constante de inspiración para mi creatividad. Fuera del desarrollo, practico ajedrez y entreno con el objetivo de competir a nivel profesional.")
            :
            ("I'm passionate about interactive design and creating dynamic experiences that are intuitive and engaging for users. I'm also fascinated by astrophysics and everything related to space; exploring how the universe works is a constant source of inspiration for my creativity. Outside of development, I play chess and train with the goal of competing professionally.")}</h2>
          </div>
          <div className="self-center lg:hidden">
            <Image
              src="/img/profile.png"
              alt="profile picture"
              width={200}
              height={200}
              className="border border-black rounded-full object-cover object-top h-[200px] w-[200px] animate__animated animate__fadeIn"
            />
          </div>
        </section>
            <Image
              src="/img/profile.png"
              alt="profile picture"
              width={200}
              height={200}
              className="border border-black rounded-full object-cover object-top h-[200px] w-[200px] hidden lg:block self-center animate__animated animate__fadeIn"
            />
        <section id="why" className="w-full flex flex-col items-center gap-12 p-4 md:py-32 md:px-32 animate__animated animate__bounceInUp">
          <div className="w-full flex flex-col text-center items-center md:gap-12 gap-4">
            <h1 className="text-4xl">{language==="Spanish"?("Trabajemos juntos"):("Let's Work Together")}</h1>
            <p className="md:w-[500px] text-center self-center">{language==="Spanish"?("¿Por qué? Servicio profesional garantizado. Siempre a disposición y me acomodo a tus necesidades. El proyecto es completamente a medida, adaptado a gusto según lo que busques."):("Why? Garantized professional services. Always at service, I will adjust to your needs. The project will be completely adapted to what you are looking for.")}</p>
          </div>
          <div className="flex flex-row gap-2 md:gap-8 items-center">
            <Link href="mailto:nahuh08@gmail.com"><Image alt="Gmail" width={60} height={60} src="/img/gmail.svg" className="hover:opacity-75"/></Link>
            <Link href="https://www.linkedin.com/in/nahuel-ezequiel-henriquez-/"><Image alt="LinkedIn" width={60} height={60} src="/img/linkedin.svg" className="hover:opacity-75"/></Link>
            <Link href="https://www.github.com/Nahuel1077"><Image alt="Github" width={60} height={60} src="/img/github.svg" className="hover:opacity-75"/></Link>
            <Link href="https://wa.link/wkr6kp"><Image alt="WhatsApp" width={60} height={60} src="/img/whatsapp.svg" className="hover:opacity-75"/></Link>
          </div>
        </section>
      </div>
    </main>
  );
}
