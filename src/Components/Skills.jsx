import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Card from "./extra/Card";
const Skills = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.to('#skill-container',{
            scrollTrigger: {
                trigger: "#skill-trigger",
                start: "top 40%",    // when heading reaches 80% viewport
                end: "top 60%",      // some distance to let animation play
                markers: false,
                toggleActions: "play none none reverse"
                // OR scrub: true if you want it tied to scroll
            },
            backgroundColor:'white',
            duration:0.5
        })
        gsap.from(".title-do", {
            scrollTrigger: {
                trigger: "#skill-trigger",
                start: "top 20%",    // when heading reaches 80% viewport
                end: "top 60%",      // some distance to let animation play
                markers: false,
                toggleActions: "play none none reverse"
                // OR scrub: true if you want it tied to scroll
            },
            y: -100,

            // smaller scale so you see the growth
            opacity: 0,
            duration: 0.4,
            ease: "power4.out",
            stagger: 0.07,
        })

    })
    const frontendTools = [
        "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Tailwind CSS", "Bootstrap", "Material UI", "Framer Motion", "GSAP", "Redux", "Axios", "ESLint", "Figma", "Git / GitHub", "React Query (TanStack Query)"
    ];
    const backendTools = [
        "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "JWT", "REST API", "Mongoose",];
    const design = [
        "Adobe Illustrator", "Adobe Photoshop", "Figma",
    ];


    return (
        <div id="skill-container" className=' text-zinc-900 pt-[35vw] pb-[20vw] '>
            <h1 id="skill-trigger" className=''></h1>
            <h1 className="text-6xl md:text-8xl overflow-hidden mt-[20vw] skill-hi font-dmSans tracking-widest pb-[25vw]  text-center  self-baseline uppercase  ">
                <span className="title-do inline-block 1">w</span>
                <span className="title-do inline-block ">h</span>
                <span className="title-do inline-block ">a</span>
                <span className="title-do inline-block mr-5 md:mr-12">t</span>
                <span className="title-do inline-block mr-5 md:mr-12"> i</span>
                <span className="title-do inline-block">d</span>
                <span className="title-do inline-block">o</span>
            </h1>
            <div className="border-2 mt-[9vw] mb-[20vw] border-zinc-900 mx-2 md:mx-[9vw] grid grid-cols-1 md:grid-cols-3">
                <div className="md:border-r-2 ">
                    <h1 className="text-3xl md:text-6xl border-b-2 p-6  text-center">Frontend Development</h1>
                    <div className="w-full whitespace-break-spaces  p-5 py-14 ">
                        {frontendTools.map((tool, index) => <h1 className="inline-block text-xl m-2 rounded-sm p-2 px-3 bg-gray-200" key={index}>{tool}</h1>)}
                    </div>
                </div>
                <div className="md:border-r-2 ">
                    <h1 className="text-3xl md:text-6xl  p-6 border-b-2 text-center">Backend Development</h1>
                    <div className="w-full py-14 whitespace-break-spaces  p-5 ">
                        {backendTools.map((tool, index) => <h1 className="inline-block text-xl m-2 rounded-sm p-2 px-3 bg-gray-200" key={index}>{tool}</h1>)}
                    </div>
                </div>
                <div className="">
                    <h1 className="text-3xl md:text-6xl  p-6 border-b-2 text-center">Graphics Design</h1>
                    <div className="w-full py-14 whitespace-break-spaces  p-5 ">
                        {design.map((tool, index) => <h1 className="inline-block text-xl m-2 rounded-sm p-2 px-3 bg-gray-200" key={index}>{tool}</h1>)}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;