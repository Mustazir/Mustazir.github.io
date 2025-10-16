import React from "react";
import img from "/img1.png";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Aboutus = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from(".title-heading", {
      scrollTrigger: {
        trigger: ".aboutme",
        start: "top 60%",    // when heading reaches 80% viewport
        end: "top 60%",      // some distance to let animation play
        markers: false,
        toggleActions: "play none none reverse"
        // OR scrub: true if you want it tied to scroll
      },
      y: -100,
      // smaller scale so you see the growth
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.1,
    })
  })
  return (

    <div  className="mt-[30vw]   ">
      <div className="  overflow-hidden">
        <h1 className="text-6xl md:text-8xl font-dmSans tracking-widest  aboutme text-center text-white  uppercase  ">
          <span className="title-heading inline-block title1">w</span>
          <span className="title-heading inline-block ">h</span>
          <span className="title-heading inline-block mr-5 md:mr-12">o </span>
          <span className="title-heading inline-block">i</span>
          <span className="title-heading inline-block mr-5 md:mr-12"> </span>
          <span className="title-heading inline-block">a</span>
          <span className="title-heading inline-block">m</span>

        </h1>
      </div>
      <div id="aboutme" className=" mt-[30vw]  pb-[10vw] flex flex-col md:flex-row justify-center items-center px-[9vw] gap-10">

        <div className="md:w-1/2 h-full  flex justify-center items-center ">
          <img
            onMouseEnter={() =>
              gsap.to("#curser", {
                scale: 7,
                duration: 0.5,
                backgroundColor: "black",
              })
            }
            onMouseLeave={() =>
              gsap.to("#curser", {
                scale: 1,
                duration: 0.5,
                backgroundColor: "white",
              })
            }
            src={img}
            className=""
            alt=""
          />

        </div>
        <div className="md:w-1/2 text-5xl text-gray-400 flex justify-center items-center h-full flex-col">

          <h1>
            I am a final-year Computer Science and Engineering student at
            <a
              onMouseEnter={() => gsap.to("#curser", { scale: 7, duration: 0.5 })}
              onMouseLeave={() => gsap.to("#curser", { scale: 1, duration: 0.5 })}
              target="_blank"
              href="https://daffodilvarsity.edu.bd/"
              className="font-themunday text-white"
            >
              {" "}  Daffodil International University.
            </a>{" "}
            <br></br> I actively contribute to the{" "}
            <a
              onMouseEnter={() => gsap.to("#curser", { scale: 7, duration: 0.5 })}
              onMouseLeave={() => gsap.to("#curser", { scale: 1, duration: 0.5 })}
              target="_blank"
              href="https://nlp.daffodilvarsity.edu.bd/"
              className="font-themunday text-white"
            >
              DIU NLP & ML Lab {" "}
            </a>
            and have hands-on experience managing{" "}
            <a
              onMouseEnter={() => gsap.to("#curser", { scale: 7, duration: 0.5 })}
              onMouseLeave={() => gsap.to("#curser", { scale: 1, duration: 0.5 })}
              target="_blank"
              href=""
              className="font-themunday text-white"
            >
              Zahra{" "}
            </a>
            , With a strong foundation in full-stack development, I focus on building efficient, user-friendly, and data-driven solutions.
          </h1>
        </div>
      </div>
    </div>

  );
};

export default Aboutus;
