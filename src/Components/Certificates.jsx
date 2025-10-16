import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
// import {ScrollTriger} from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Certificates = () => {
  gsap.registerPlugin(ScrollTrigger);
  console.log(gsap);
  useGSAP(() => {
    gsap.to("#main-line", {
      scrollTrigger: {
        trigger: ".certificates-title",
        markers: false,
        scroller: "body",
        scrub: true,
        start: "top 20%",
        end: "top -220%",
      },

      height: "100%",
      duration: 1,
    });
    gsap.to("#white-botom", {
      scrollTrigger: {
        trigger: "#white-botom",
        markers: false,
        start: "top 38%",
        end: "top 20%",
        scrub: true,
      },
      width: "100%",
    });
    gsap.to("#white-bottom1", {
      scrollTrigger: {
        trigger: "#white-bottom1",
        markers: false,
        start: "top 52%",
        end: "top 20%",
        scrub: true,
      },
      width: "1228px",
    });
    gsap.to("#white-bottom2", {
      scrollTrigger: {
        trigger: "#white-bottom2",
        markers: false,
        start: "top 62%",
        end: "top 40%",
        scrub: true,
      },
      width: "1228px",
    });
  });
  return (
    <div className=" space-y-28   bg-white text-zinc-900 pb-[15vw]  relative overflow-hidden">
      <div className="flex certificates-title justify-center pb-32">
        <h1 className="text-6xl md:text-8xl font-dmSans text-center pb-2 px-5 border-b-2  w-fit bg-white z-10">
          Certificate & Courses
        </h1>
      </div>
      <section className="flex flex-col md:flex-row  px-[9vw] gap-30 ">
        <div className="md:w-1/2 flex justify-end">
          <figure className="  md:h-96 w-[500px] ">
            <img
              className="h-full object-cover object-center"
              src="https://i.ibb.co.com/PzrYmLMP/certificate-page-0001.jpg"
            />
          </figure>
        </div>
        <div className="w-full md:w-1/2  flex items-center">
          <div className="md:w-[500px]">
            <h1 className="text-2xl font-semibold border-b-[1px] mb-4 ">
              Full-Stack Web Development (MERN Stack)
            </h1>
            <h1 className="text-zinc-600 font-th mb-4 ">
              Gained expertise in building scalable web applications using
              React, Node.js, Express, and MongoDB.
            </h1>

            <h1 className="text-xl font-semibold mb-2">Technologies</h1>

            <h1 className="mb-2">
              JavaScript, Tailwind, React JS, Node JS, Express JS, Mongodb ,
              Firebase
            </h1>
            <h1 className="text-xl mt-2 font-semibold mb-2">
              Programming Hero{" "}
              <span className="font-normal">(Batch: 10th | Year: 2024)</span>
            </h1>
            <h1 className="text-xl mt-2 font-semibold mb-2">
              Status <span className="font-normal">: Completed</span>
            </h1>
          </div>
        </div>
      </section>
      <div
        id="white-bottom1"
        className="w-0 h-[2px] bg-zinc-400 relative left-1/2 -translate-x-1/2"
      ></div>
      <section className="flex flex-col md:flex-row-reverse justify-center px-[9vw] gap-30 ">
        <div className="md:w-1/2 flex justify-start">
          <figure className="  md:h-96 w-[500px] ">
            <img
              className="h-full object-cover object-center"
              src="https://i.ibb.co.com/hRFz8QFp/mustazirr-gmail-com.jpg"
            />
          </figure>
        </div>
        <div className="w-full md:w-1/2 flex flex-row justify-end items-center">
          <div className="md:w-[500px]">
            <h1 className="text-2xl font-semibold border-b-[1px] mb-4">
              Black Belt (Web Developer)
            </h1>

            <h1 className="text-zinc-600 font-th mb-4">
              Achieved from{" "}
              <span className="font-medium">Programming Hero</span>, recognizing
              excellence in full-stack web development. Skilled in front-end and
              back-end technologies with a focus on creating responsive,
              high-performing web applications.
            </h1>

            <h1 className="text-xl font-semibold mb-2">Technologies</h1>
            <h1 className="mb-2">
              React, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS,
              Bootstrap, JavaScript, HTML, CSS
            </h1>

            <h1 className="text-xl mt-2 font-semibold mb-2">
              Programming Hero{" "}
              <span className="font-normal">
                (Batch: 10 | Year: 2025)
              </span>
            </h1>

            <h1 className="text-xl mt-2 font-semibold mb-2">
              Status <span className="font-normal">: Completed</span>
            </h1>
          </div>
        </div>
      </section>
      <div
        id="white-bottom2"
        className="w-0 h-[2px] bg-zinc-400 relative left-1/2 -translate-x-1/2"
      ></div>
      <section className="flex flex-col md:flex-row  px-[9vw] gap-30 ">
        <div className="md:w-1/2 flex justify-end">
          <figure className=" borde md:h-96 w-[500px] ">
            <img
              className="h-full object-cover object-center"
              src="https://i.ibb.co.com/pBJ6Hvxx/11.png"
            />
          </figure>
        </div>
        <div className="w-full md:w-1/2  flex items-center">
          <div className="md:w-[500px]">
            <h1 className="text-2xl font-semibold border-b-[1px] mb-4 ">
              Advanced Backend Development (Level 2)
            </h1>
            <h1 className="text-zinc-600 font-th mb-4 ">
              Focused on backend, and Databse with API design, authentication
              using JWT, role-based access, and database optimization.
            </h1>

            <h1 className="text-xl font-semibold mb-2">Technologies</h1>

            <h1 className="mb-2">
              TypeScript, Redux, Next.js, Node.js, MySQL, PostgreSQL, JWT,
              Mongoose
            </h1>
            <h1 className="text-xl mt-2 font-semibold mb-2">
              Programming Hero
              <span className="font-normal">(Batch: 9th | Year: 2024)</span>
            </h1>
            <h1 className="text-xl mt-2 font-semibold mb-2">
              Status <span className="font-normal">: OnGoing</span>
            </h1>
          </div>
        </div>
      </section>

      <div
        id="main-line"
        className="w-[2px] md:flex hidden  absolute bg-zinc-400 top-0 left-1/2"
      ></div>
      <div
        id="white-botom"
        className="w-0 h-1 bg-zinc-400 absolute bottom-0 left-1/2 -translate-x-1/2"
      ></div>
    </div>
  );
};

export default Certificates;
