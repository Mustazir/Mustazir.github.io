import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
// import {ScrollTriger} from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  console.log(gsap);
  useGSAP(() => {
    gsap.to("#state-line", {
      scrollTrigger: {
        trigger: ".workTitle",
        markers: false,
        scroller: "body",
        scrub: true,
        start: "top 20%",
        end: "top -220%",
      },

      height: "100%",
      duration: 1,
    });
    gsap.to("#bottom-line", {
      scrollTrigger: {
        trigger: "#bottom-line",
        markers: false,
        start: "top 45%",
        end: "top 20%",
        scrub: true,
      },
      width: "100%",
    });
    gsap.to("#bottom-line1", {
      scrollTrigger: {
        trigger: "#bottom-line1",
        markers: false,
        start: "top 59%",
        end: "top 20%",
        scrub: true,
      },
      width: "1228px",
    });
    gsap.to("#bottom-line2", {
      scrollTrigger: {
        trigger: "#bottom-line2",
        markers: false,
        start: "top 81%",
        end: "top 40%",
        scrub: true,
      },
      width: "1228px",
    });
    gsap.to("#bottom-line3", {
      scrollTrigger: {
        trigger: "#bottom-line3",
        markers: false,
        start: "top 92%",
        end: "top 60%",
        scrub: true,
      },
      width: "1228px",
    });
  });
  return (
    <div
      id="myworks"
      className=" space-y-28  mt-[20vw] pb- relative overflow-hidden"
    >
      <div className="flex workTitle justify-center pb-32">
        <h1 className="text-6xl md:text-8xl font-dmSans text-center pb-2 px-5 border-b-2  w-fit bg-zinc-900 z-10">
          My Works
        </h1>
      </div>
      <section className="flex flex-col md:flex-row  px-4 md:px-[9vw] gap-30 ">
        <div className="md:w-1/2 flex justify-end">
          <figure className="hover-gallery  md:h-84 w-[500px] ">
            <img
              className="object-cover object-center"
              src="https://i.ibb.co.com/jkCybNsH/Screenshot-1.png"
            />
            <img
              className="object-cover object-center scale-110"
              src="https://i.ibb.co.com/hJVJTcDS/Screenshot-2.png"
            />
            <img
              className="object-cover object-center"
              src="https://i.ibb.co.com/5xj74Lcc/Screenshot-3.png"
            />
          </figure>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="md:w-[500px]  ">
            <h1 className="text-2xl font-semibold border-b-[1px] mb-4 pb-1 ">
              Skillpathway – A Modern Study Platform
            </h1>
            <h1 className="text-gray-300 font-inte mb-4 ">
              A web platform that connects students, tutors, and admins for
              seamless study session, resource sharing, and user management.
            </h1>
            <h1 className="text-xl font-semibold mb-2">Key Features</h1>
            <ul className="list-disc list-inside">
              <li className="font-[400] text-gray-300">
                <span className="font-semibold text-white">
                  Role-Based Access
                </span>{" "}
                – different for Students, Tutors, and Admins
              </li>
              <li className="font-[400] text-gray-300">
                <span className="font-semibold text-white">Study Sessions</span>{" "}
                – create, book, approve/reject sessions{" "}
              </li>
              <li className="font-[400] text-gray-300">
                <span className="font-semibold text-white">
                  Real-Time Notifications
                </span>{" "}
                – for bookings, logins, and CRUD operations
              </li>
              {/* <li className='font-[400] text-gray-300'><span className='font-semibold text-white'>Advanced Filtering</span> – sort by category, price, or type</li> */}
            </ul>
            <h1 className="text-xl mt-2 font-semibold mb-2">Tech Expertise</h1>
            <h1 className="mb-4">React js, Express js, Mongodb , Firebase</h1>
            <a
              onMouseEnter={() =>
                gsap.to("#curser", { scale: 7, duration: 0.5 })
              }
              onMouseLeave={() =>
                gsap.to("#curser", { scale: 1, duration: 0.5 })
              }
              target="-blank"
              className=" text-green-400   underline-offset-4 flex items-center text-xl hover:underline  rounded-full  w-fit  font-urbanist tracking-wide "
              href="https://skillpathway-f76f5.web.app/"
            >
              {" "}
              <span>view</span> <GoArrowUpRight className="mt-1" />{" "}
            </a>
          </div>
        </div>
      </section>
      <div
        id="bottom-line1"
        className="w-0 h-[1px] bg-white relative left-1/2 -translate-x-1/2"
      ></div>
      <section className="flex flex-col md:flex-row-reverse justify-center px-4 md:px-[9vw] gap-30 ">
        <div className="md:w-1/2 flex justify-start">
          <figure className="hover-gallery  md:h-84 w-[500px] ">
            <img
              className="object-cover object-center"
              src="https://i.ibb.co.com/RTVW2Q7k/playlog-1.png"
            />
            <img
              className="object-cover object-center scale-110"
              src="https://i.ibb.co.com/N2jgcQsD/playlog-2.png"
            />
            <img
              className="object-cover object-center"
              src="https://i.ibb.co.com/mQXfW1z/playlog-3.png"
            />
            <img
              className="object-cover object-center"
              src="https://i.ibb.co.com/zVs9FFzc/playlog-4.png"
            />
          </figure>
        </div>
        <div className="w-full md:w-1/2 flex flex-row justify-end  ">
          <div className="md:w-[550px]">
            <h1 className="text-2xl font-semibold border-b-[1px] mb-4 pb-1 ">
              GameGlance – The Game Review Platform
            </h1>
            <h1 className="text-gray-300  mb-4 ">
              A modern web platform where gamers can share reviews, explore
              trending games, and build personalized watchlists.
            </h1>
            <h1 className="text-xl font-semibold mb-2">Key Features</h1>
            <ul className="list-disc list-inside">
              <li className="font-[400] text-gray-300">
                <span className="font-semibold text-white">
                  Smart Sorting & Filtering
                </span>{" "}
                – sort reviews by rating, year, or popularity
              </li>
              <li className="font-[400] text-gray-300">
                <span className="font-semibold text-white">User Accounts</span>{" "}
                – Firebase login, add/edit/delete reviews, maintain watchlist
              </li>
              <li className="font-[400] text-gray-300">
                <span className="font-semibold text-white">Engaging UI</span> –
                immersive game cards, dynamic footer with social links
              </li>
              {/* <li className='font-[400] text-gray-300'><span className='font-semibold text-white'>Advanced Filtering</span> – sort by category, price, or type</li> */}
            </ul>
            <h1 className="text-xl mt-2 font-semibold mb-2">Tech Expertise</h1>
            <h1 className="mb-4">React js, Express js, Mongodb , Firebase</h1>
            <a
              onMouseEnter={() =>
                gsap.to("#curser", { scale: 7, duration: 0.5 })
              }
              onMouseLeave={() =>
                gsap.to("#curser", { scale: 1, duration: 0.5 })
              }
              target="-blank"
              className=" text-green-400   underline-offset-4 flex items-center text-xl hover:underline  rounded-full  w-fit  font-urbanist tracking-wide "
              href="https://gameglance-18dab.firebaseapp.com"
            >
              {" "}
              <span>view</span> <GoArrowUpRight className="mt-1" />{" "}
            </a>
          </div>
        </div>
      </section>
      <div
        id="bottom-line2"
        className="w-0 h-[1px] bg-white relative left-1/2 -translate-x-1/2"
      ></div>
      <section className="flex flex-col md:flex-row  px-4 md:px-[9vw] gap-30 ">
        <div className="md:w-1/2 flex justify-end">
          <figure className="hover-gallery  md:h-84 w-[500px] ">
            <img
              className="object-cover object-center"
              src="https://i.ibb.co.com/Gfg2tv60/2.png"
            />
            <img
              className="object-cover object-center scale-110"
              src="https://i.ibb.co.com/p6ZTdWKm/21.png"
            />
            <img
              className="object-cover object-center"
              src="https://i.ibb.co.com/1Jvd6vzj/23.png"
            />

          </figure>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="md:w-[550px]">
            <h1 className="text-2xl font-semibold border-b-[1px] mb-4 pb-1 ">
              RideFlow – Car Rental Platform
            </h1>
            <h1 className="text-gray-300  mb-4 ">
              A modern web platform where gamers can share reviews, explore
              trending games, and build personalized watchlists.
            </h1>
            <h1 className="text-xl font-semibold mb-2">Key Features</h1>
            <ul className="list-disc list-inside">
              <li className="font-[400] text-gray-300">
                <span className="font-semibold text-white">
                  Smart Sorting & Filtering
                </span>{" "}
                – sort reviews by rating, year, or popularity
              </li>
              <li className="font-[400] text-gray-300">
                <span className="font-semibold text-white">User Accounts</span>{" "}
                – Firebase login, add/edit/delete reviews, maintain watchlist
              </li>
              <li className="font-[400] text-gray-300">
                <span className="font-semibold text-white">Engaging UI</span> –
                immersive game cards, dynamic footer with social links
              </li>
              {/* <li className='font-[400] text-gray-300'><span className='font-semibold text-white'>Advanced Filtering</span> – sort by category, price, or type</li> */}
            </ul>
            <h1 className="text-xl mt-2 font-semibold mb-2">Tech Expertise</h1>
            <h1 className="mb-4">React js, Express js, Mongodb , Firebase</h1>
            <a
              onMouseEnter={() =>
                gsap.to("#curser", { scale: 7, duration: 0.5 })
              }
              onMouseLeave={() =>
                gsap.to("#curser", { scale: 1, duration: 0.5 })
              }
              target="-blank"
              className=" text-green-400   underline-offset-4 flex items-center text-xl hover:underline  rounded-full  w-fit  font-urbanist tracking-wide "
              href="https://rideflow-bf126.web.app/"
            >
              {" "}
              <span>view</span> <GoArrowUpRight className="mt-1" />{" "}
            </a>
          </div>
        </div>
      </section>
      <div
        id="bottom-line3"
        className="w-0 h-[1px] bg-white relative left-1/2 -translate-x-1/2"
      ></div>
      <section className="flex flex-col md:flex-row-reverse justify-center px-4 md:px-[9vw] gap-30 ">
        <div className="md:w-1/2 flex justify-start">
          <figure className="hover-gallery  md:h-84 w-[500px] ">
            <img
              className="object-cover object-center"
              src="https://i.ibb.co.com/Q7J6gmW0/31.png"
            />
            <img
              className="object-cover object-center scale-110"
              src="https://i.ibb.co.com/GvJxrGZ9/32.png"
            />
            <img
              className="object-cover object-center"
              src="https://i.ibb.co.com/zT1fyG1X/33.png"
            />
            <img
              className="object-cover object-center"
              src="https://i.ibb.co.com/Wpq65Ww6/34.png"
            />
          </figure>
        </div>
        <div className="w-full md:w-1/2 flex flex-row justify-end  ">
          <div className="md:w-[500px]  ">
            <h1 className="text-2xl font-semibold border-b-[1px] mb-4 ">
              LibraryFlow – An Animated Library Management System
            </h1>
            <h1 className="text-gray-300 font-themunday mb-4 ">
              This project combines a modern, interactive design with smooth animations and seamless functionality to create an engaging experience for managing library operations. Users can easily browse, add, and borrow books through a clean and responsive interface powered by modern web technologies.
            </h1>
            <h1 className="text-xl font-semibold mb-2">Key Features</h1>
            <ul className="list-disc list-inside">
              <li className="font-[400] text-gray-300">
                <span className="font-semibold text-white">
                  Smooth Animations
                </span>{" "}
                – Adds life to every interaction with fluid transitions and motion effects.
              </li>
              <li className="font-[400] text-gray-300">
                <span className="font-semibold text-white">
                  Tailwind CSS Design
                </span>{" "}
                – Ensures a sleek, responsive, and consistent layout across all devices.
              </li>
              <li className="font-[400] text-gray-300">
                <span className="font-semibold text-white">
                  Interactive Book Management
                </span>{" "}
                – Effortlessly add, update, or borrow books with real-time updates.
              </li>
              {/* <li className='font-[400] text-gray-300'><span className='font-semibold text-white'>Advanced Filtering</span> – sort by category, price, or type</li> */}
            </ul>
            <h1 className="text-xl mt-2 font-semibold mb-2">Tech Expertise</h1>
            <h1 className="mb-4">React, Tailwind CSS, TypeScript, Node.js, Express, MongoDB</h1>
            <a
              onMouseEnter={() =>
                gsap.to("#curser", { scale: 7, duration: 0.5 })
              }
              onMouseLeave={() =>
                gsap.to("#curser", { scale: 1, duration: 0.5 })
              }
              target="-blank"
              className=" text-green-400   underline-offset-4 flex items-center text-xl hover:underline  rounded-full  w-fit  font-urbanist tracking-wide "
              href="https://library-management-system-chi-swart.vercel.app/"
            >
              {" "}
              <span>view</span> <GoArrowUpRight className="mt-1" />{" "}
            </a>
          </div>
        </div>
      </section>
      <div
        id="state-line"
        className="w-[1px] md:flex hidden  absolute bg-white top-0 left-1/2"
      ></div>
      <div
        id="bottom-line"
        className="w-0 h-1 bg-white absolute bottom-0 left-1/2 -translate-x-1/2"
      ></div>
    </div>
  );
};

export default Projects;
