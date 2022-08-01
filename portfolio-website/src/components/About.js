import React from 'react';

// import img
import Image from '../assets/img/foto-pessoal.png';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Maria Eduarda
              </h2>
              <p className='mb-4 text-accent'>
                Full Stack Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Desenvolvedora Web Full-Stack formada pelo bootcamp da Labenu.
                Minhas habilidades técnicas: HTML, CSS, Javascript, React JS, Typescript, Node JS, banco de dados MySQL e Jest. <br />
                <br />
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Me contate!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
