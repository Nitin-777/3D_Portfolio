import React, { useRef } from 'react'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';



gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    
  const sectionRef= useRef(null);
  const project1Ref=useRef(null);
  const project2Ref=useRef(null);
  const project3Ref=useRef(null);
  

     useGSAP(()=> {

      const projects = [project1Ref.current, project2Ref.current ,project3Ref.current];

       projects.forEach((card,index) => {
       gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          diration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom=-100'
          }
        }

       )
   })


        gsap.fromTo(sectionRef.current,
           {opacity: 0},
          {opacity: 1 , duration:1.5})
     }, []);


  return (
       
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>

          {/* LEFT */}
          <div ref={sectionRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/projects1.png" alt="K72" />
            </div>
            <div className="text-content">
              <h2>
                This is a Project which showcases my frontend and animations skills
              </h2>
              <p className="text-white-50 md:text-xl">
                I made this appplication using react and tailwind and for animations we used a library
                called GSAP.
              </p>
            </div>
          </div>


          {/* RIGHT */}

            <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>The Library Management Platform</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ShowcaseSection
